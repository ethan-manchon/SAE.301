<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Orders.php");

/**
 *  Classe OrdersRepository
 * 
 *  Toutes les opérations sur les Orders doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class OrdersRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?Orders {
        $requete = $this->cnx->prepare("
            SELECT 
                Orders.id AS order_id, 
                Orders.user_id AS user_id,
                Orders.total AS total,
                Cart.id AS cart_id, 
                Cart.product_id,   
                Cart.quantity
            FROM 
                Orders
            JOIN 
                Cart ON Orders.id = Cart.cart_id
            WHERE 
                Orders.id = :id;
        ");
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->execute();
        $answer = $requete->fetch(PDO::FETCH_OBJ);

        if ($answer == false) return null;

        $order = new Orders($answer->order_id, $answer->user_id, $answer->order_id, $answer->total);
        return $order;
    }

    public function findAllById($id): array {
        $requete = $this->cnx->prepare("
            SELECT 
                Orders.id AS order_id, 
                Orders.user_id AS user_id,
                Orders.total AS total,
                Cart.id AS cart_id, 
                Cart.product_id,   
                Cart.quantity
            FROM 
                Orders
            JOIN 
                Cart ON Orders.id = Cart.cart_id
            WHERE 
                Orders.id = :id;
        ");
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        if ($answer == false) return [];

        $res = [];
        foreach ($answer as $obj) {
            $order = new Orders($obj->order_id, $obj->user_id, $obj->order_id, $obj->total);
           array_push($res, $order);
        }
        return $res;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("
            SELECT 
                Orders.id AS order_id, 
                Orders.user_id AS user_id,
                Orders.total AS total,
                Cart.id AS cart_id, 
                Cart.product_id, 
                Cart.quantity
            FROM 
                Orders
            JOIN 
                Cart ON Orders.id = Cart.cart_id
        ");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $order = new Orders($obj->order_id, $obj->user_id, $obj->order_id, $obj->total);
           array_push($res, $order);
        }
       
        return $res;
    }

    public function save($order): bool {
        $this->cnx->beginTransaction();
        try {
            // Insert into Orders table
            $requete = $this->cnx->prepare("INSERT INTO Orders (user_id, total) VALUES (:user_id, :total)");
            $user_id = $order->getUserId(); // Utiliser un getter pour accéder à la propriété privée
            $total = $order->getTotal(); // Utiliser un getter pour accéder à la propriété privée
            $requete->bindParam(':user_id', $user_id, PDO::PARAM_INT);
            $requete->bindParam(':total', $total, PDO::PARAM_INT);
            $requete->execute();

            // Get the last inserted order_id
            $order_id = $this->cnx->lastInsertId();

            foreach ($order->getCartItems() as $item) { // Utiliser un getter pour accéder à la propriété privée
                $requeteCart = $this->cnx->prepare("INSERT INTO Cart (cart_id, product_id, quantity) VALUES (:cart_id, :product_id, :quantity)");
                $product_id = $item['id'];
                $quantity = $item['quantity'];
            
                $requeteCart->bindParam(':cart_id', $order_id, PDO::PARAM_INT);
                $requeteCart->bindParam(':product_id', $product_id, PDO::PARAM_INT);
                $requeteCart->bindParam(':quantity', $quantity, PDO::PARAM_INT);
                $requeteCart->execute();
            }

            $this->cnx->commit();
            return true;
        } catch (Exception $e) {
            $this->cnx->rollBack();
            return false;
        }
    }

    public function delete($id): bool {
        $requete = $this->cnx->prepare("DELETE FROM Orders WHERE id=:id");
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        return $requete->execute();
    }

    public function update($order): bool {
        $requete = $this->cnx->prepare("UPDATE Orders SET user_id=:user_id, total=:total WHERE id=:id");
        $id = $order->id;
        $user_id = $order->user_id;
        $total = $order->total;
        
        $requete->bindParam(':id', $id, PDO::PARAM_INT);
        $requete->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $requete->bindParam(':total', $total, PDO::PARAM_INT);
        
        return $requete->execute();
    }
}
?>
