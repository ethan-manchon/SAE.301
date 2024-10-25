<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Users.php");

/**
 *  Classe UsersRepository
 * 
 *  Toutes les opérations sur les Users doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class UsersRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?array {
        $requete = $this->cnx->prepare("
            SELECT 
                id, name, firstname, phone, mail, password
            FROM 
                Users
            WHERE 
                id = :id
        ");
        $requete->bindParam(':id', $id);
        $requete->execute();
        $obj = $requete->fetch(PDO::FETCH_OBJ);

        if (!$obj) return null;

        $user = [
            'id' => $obj->id,
            'name' => $obj->name,
            'firstname' => $obj->firstname,
            'phone' => $obj->phone,
            'mail' => $obj->mail,
            'password' => $obj->password
        ];

        return $user;
    }

    public function findByEmail($mail): ?array {
        $requete = $this->cnx->prepare("
            SELECT 
               *
            FROM 
                Users
            WHERE 
                mail = :mail
        ");
        $requete->bindParam(':mail', $mail);
        $requete->execute();
        $obj = $requete->fetch(PDO::FETCH_OBJ);

        if (!$obj) return null;

        $user = [
            'id' => $obj->id,
            'name' => $obj->name,
            'firstname' => $obj->firstname,
            'phone' => $obj->phone,
            'mail' => $obj->mail,
            'password' => $obj->password
        ];

        return $user ;
    }
    public function findByMail($mail): ?User {
        $requete = $this->cnx->prepare("
            SELECT 
               *
            FROM 
                Users
            WHERE 
                mail = :mail
        ");
        $requete->bindParam(':mail', $mail);
        $requete->execute();
        $obj = $requete->fetch(PDO::FETCH_OBJ);

        if (!$obj) return null;

        $user = [
            'id' => $obj->id,
            'name' => $obj->name,
            'firstname' => $obj->firstname,
            'phone' => $obj->phone,
            'mail' => $obj->mail,
            'password' => $obj->password
        ];

        return new User($user) ;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("SELECT * FROM Users");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $user = [
                'id' => $obj->id,
                'name' => $obj->name,
                'firstname' => $obj->firstname,
                'phone' => $obj->phone,
                'mail' => $obj->mail,
                'password' => $obj->password
            ];
            array_push($res, $user);
        }
       
        return $res;
    }

    public function save($user): bool {
        $requete = $this->cnx->prepare("INSERT INTO Users (name, firstname, phone, mail, password) VALUES (:name, :firstname, :phone, :mail, :password)");
        $name = $user->getName();
        $firstname = $user->getFirstname();
        $phone = $user->getPhone();
        $mail = $user->getMail();
        $password = $user->getPassword();
        
        $requete->bindParam(':name', $name);
        $requete->bindParam(':firstname', $firstname);
        $requete->bindParam(':phone', $phone);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':password', $password);
        
        $answer = $requete->execute();
    
        if ($answer){
            $user->setId($this->cnx->lastInsertId()); // Utiliser un setter pour assigner l'ID généré
            return true;
        }
          
        return false;
    }

    public function delete($id): bool {
        $requete = $this->cnx->prepare("DELETE FROM Users WHERE id = :id");
        $requete->bindParam(':id', $id);
        return $requete->execute();
    }

    public function update($user): bool {
        $requete = $this->cnx->prepare("UPDATE Users SET name=:name, firstname=:firstname, phone=:phone, mail=:mail, password=:password WHERE id=:id");
        $id = $user->getId();
        $name = $user->getName();
        $firstname = $user->getFirstname();
        $phone = $user->getPhone();
        $mail = $user->getMail();
        $password = $user->getPassword();
        
        $requete->bindParam(':id', $id);
        $requete->bindParam(':name', $name);
        $requete->bindParam(':firstname', $firstname);
        $requete->bindParam(':phone', $phone);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':password', $password);
        
        return $requete->execute();
    }
}
