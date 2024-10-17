<?php

require_once("Repository/EntityRepository.php");
require_once("Class/PO.php");

/**
 *  Classe PORepository
 * 
 *  Toutes les opérations sur les PO doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class PORepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?PO {
        $requete = $this->cnx->prepare("SELECT * FROM ProductOption WHERE product_id=:value");
        $requete->bindParam(':value', $id);
        $requete->execute();
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer == false) return null;
        
        $po = new PO($answer->product_id, $answer->option_id, $answer->url, $answer->option_name, $answer->option_value);
        return $po;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("SELECT * FROM ProductOption");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $po = new PO($obj->product_id, $obj->option_id, $obj->url, $obj->option_name, $obj->option_value);
            array_push($res, $po);
        }
       
        return $res;
    }

    public function findAllByProduct($product_id): array {
        $requete = $this->cnx->prepare("
            SELECT 
                po.product_id, 
                po.option_id,
                po.url, 
                o.name AS option_name, 
                o.valeur AS option_value
            FROM 
                ProductOption po
            JOIN 
                Options o ON po.option_id = o.id
            WHERE 
                po.product_id = :product_id
        ");
        $requete->bindParam(':product_id', $product_id);
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        if ($answer) {
            foreach($answer as $obj){
                $po = new PO($obj->product_id, $obj->option_id, $obj->url, $obj->option_name, $obj->option_value);
                array_push($res, $po);
            }
        }
       
        return $res;
    }
    
    public function save($po): bool {
        $requete = $this->cnx->prepare("INSERT INTO ProductOption (product_id, option_id, url, option_name, option_value) VALUES (:product_id, :option_id, :url, :option_name, :option_value)");
        $product_id = $po->getProductId();
        $option_id = $po->getOptionId();
        $url = $po->getUrl();
        $option_name = $po->getOptionName();
        $option_value = $po->getOptionValue();
        
        $requete->bindParam(':product_id', $product_id);
        $requete->bindParam(':option_id', $option_id);
        $requete->bindParam(':url', $url);
        $requete->bindParam(':option_name', $option_name);
        $requete->bindParam(':option_value', $option_value);
        
        return $requete->execute();
    }

    public function delete($id): bool {
        $requete = $this->cnx->prepare("DELETE FROM ProductOption WHERE product_id=:id");
        $requete->bindParam(':id', $id);
        return $requete->execute();
    }

    public function update($po): bool {
        $requete = $this->cnx->prepare("UPDATE ProductOption SET option_id=:option_id, url=:url, option_name=:option_name, option_value=:option_value WHERE product_id=:product_id");
        $product_id = $po->getProductId();
        $option_id = $po->getOptionId();
        $url = $po->getUrl();
        $option_name = $po->getOptionName();
        $option_value = $po->getOptionValue();
        
        $requete->bindParam(':product_id', $product_id);
        $requete->bindParam(':option_id', $option_id);
        $requete->bindParam(':url', $url);
        $requete->bindParam(':option_name', $option_name);
        $requete->bindParam(':option_value', $option_value);
        
        return $requete->execute();
    }
}
