<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Promo.php");

class PromoRepository extends EntityRepository {

    public function __construct(){
        parent::__construct();
    }

    public function find($id): ?Promo {
        $requete = $this->cnx->prepare("
            SELECT 
                id, name, discount
            FROM 
                Promo
            WHERE 
                id = :id
        ");
        $requete->bindParam(':id', $id);
        $requete->execute();
        $answer = $requete->fetch(PDO::FETCH_OBJ);

        if (!$answer) return null;

        $promo = new Promo($answer->name, $answer->discount);
        $promo->setId($answer->id);
        return $promo;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("SELECT * FROM Promo");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $promo = new Promo($obj->name, $obj->discount);
            $promo->setId($obj->id);
            array_push($res, $promo);
        }
       
        return $res;
    }

    public function save($promo): bool {
        $requete = $this->cnx->prepare("INSERT INTO Promo (name, discount) VALUES (:name, :discount)");
        $name = $promo->getName();
        $discount = $promo->getDiscount();
        
        $requete->bindParam(':name', $name);
        $requete->bindParam(':discount', $discount);
        
        $answer = $requete->execute();

        if ($answer){
            $id = $this->cnx->lastInsertId();
            $promo->setId($id);
            return true;
        }
          
        return false;
    }

    public function delete($id): bool {
        $requete = $this->cnx->prepare("DELETE FROM Promo WHERE id=:id");
        $requete->bindParam(':id', $id); // Utiliser l'ID directement

        return $requete->execute();
    }

    public function update($promo): bool {
        $requete = $this->cnx->prepare("UPDATE Promo SET name=:name, discount=:discount WHERE id=:id");
        $id = $promo->getId();
        $name = $promo->getName();
        $discount = $promo->getDiscount();
        
        $requete->bindParam(':id', $id);
        $requete->bindParam(':name', $name);
        $requete->bindParam(':discount', $discount);
        
        return $requete->execute();
    }
}
?>