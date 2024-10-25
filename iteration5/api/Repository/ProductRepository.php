<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Product.php");

/**
 *  Classe ProductRepository
 * 
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class ProductRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }
    public function find($id): ?array {
        $requete = $this->cnx->prepare("
            SELECT 
                p.id AS product_id,
                p.name AS product_name,
                p.price,
                p.description,
                p.volume,
                p.category_id,
                p.image,
                o.id AS option_id,
                o.name AS option_name,
                o.valeur AS option_value,
                po.url AS option_url
            FROM 
                Product p
            JOIN 
                ProductOption po ON p.id = po.product_id
            JOIN 
                Options o ON po.option_id = o.id
            WHERE 
                p.id = :id
        ");
        $requete->bindParam(':id', $id);
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        if (!$answer) return null;

        $product = [
            'id' => $answer[0]->product_id,
            'name' => $answer[0]->product_name,
            'price' => $answer[0]->price,
            'description' => $answer[0]->description,
            'volume' => $answer[0]->volume,
            'category_id' => $answer[0]->category_id,
            'image' => $answer[0]->image,
            'options' => []
        ];

        foreach ($answer as $obj) {
            $product['options'][] = [
                'id' => $obj->option_id,
                'name' => $obj->option_name,
                'value' => $obj->option_value,
                'url' => $obj->option_url
            ];
        }

        return $product;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("SELECT * FROM Product");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id);
            $p->setName($obj->name);
            $p->setPrice($obj->price);
            $p->setDescription($obj->description);
            $p->setVolume($obj->volume);
            $p->setCategoryId($obj->category_id);
            $p->setImage($obj->image);
            array_push($res, $p);
        }
       
        return $res;
    }
    public function findAllByCategory($categ): array {
        $requete = $this->cnx->prepare("SELECT * FROM Product WHERE category_id=:value");
        $requete->bindParam(':value', $categ);
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        if ($answer) {
            foreach($answer as $obj){
                $p = new Product($obj->id);
                $p->setName($obj->name);
                $p->setPrice($obj->price);
                $p->setDescription($obj->description);
                $p->setVolume($obj->volume);
                $p->setCategoryId($obj->category_id);
                $p->setImage($obj->image);
                array_push($res, $p);
            }
        }
       
        return $res;
    }
    

    
    public function save($product): bool {
        $requete = $this->cnx->prepare("INSERT INTO Product (name, price, description, volume, category_id, image) VALUES (:name, :price, :description, :volume, :category_id, :image)");
        $name = $product->getName();
        $price = $product->getPrice();
        $description = $product->getDescription();
        $volume = $product->getVolume();
        $category_id = $product->getCategoryId();
        $image = $product->getImage();
        
        $requete->bindParam(':name', $name);
        $requete->bindParam(':price', $price);
        $requete->bindParam(':description', $description);
        $requete->bindParam(':volume', $volume);
        $requete->bindParam(':category_id', $category_id);
        $requete->bindParam(':image', $image);
        
        $answer = $requete->execute();

        if ($answer){
            $id = $this->cnx->lastInsertId();
            $product->setId($id);
            return true;
        }
          
        return false;
    }

    public function delete($id): bool {
        $requete = $this->cnx->prepare("DELETE FROM Product WHERE id=:id");
        $requete->bindParam(':id', $id);
        return $requete->execute();
    }

    public function update($product): bool {
        $requete = $this->cnx->prepare("UPDATE Product SET name=:name, price=:price, description=:description, volume=:volume, category_id=:category_id, image=:image WHERE id=:id");
        $id = $product->getId();
        $name = $product->getName();
        $price = $product->getPrice();
        $description = $product->getDescription();
        $volume = $product->getVolume();
        $category_id = $product->getCategoryId();
        $image = $product->getImage();
        
        $requete->bindParam(':id', $id);
        $requete->bindParam(':name', $name);
        $requete->bindParam(':price', $price);
        $requete->bindParam(':description', $description);
        $requete->bindParam(':volume', $volume);
        $requete->bindParam(':category_id', $category_id);
        $requete->bindParam(':image', $image);
        
        return $requete->execute();
    }
}