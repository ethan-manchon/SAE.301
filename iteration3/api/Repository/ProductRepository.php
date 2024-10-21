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
abstract class ProductRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?Product{
        $requete = $this->cnx->prepare("SELECT * FROM Product WHERE id=:value");
        $requete->bindParam(':value', $id);
        $requete->execute();
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer == false) return null;
        
        $p = new Product($answer->id);
        $p->setName($answer->name);
        $p->setPrice($answer->price);
        $p->setDescription($answer->description);
        $p->setVolume($answer->volume);
        $p->setCategoryId($answer->category_id);
        $p->setImage($answer->image);
        return $p;
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