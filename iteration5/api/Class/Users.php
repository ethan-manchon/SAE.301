<?php
/**
 *  Class User
 * 
 *  Représente un utilisateur avec plusieurs propriétés (id, mail, password, name, firstname, phone)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe User doivent être convertis en JSON. Voir la méthode pour plus de détails.
 */
class User implements JsonSerializable {
    private ?int $id; // id de l'utilisateur, peut être null
    public string $mail;
    public string $password;
    public string $name;
    public string $firstname;
    public string $phone;

    public function __construct(array $userdata) {
        $this->id = $userdata['id'] ?? null; // Permettre un ID null
        $this->mail = $userdata['mail'];
        $this->password = $userdata['password'];
        $this->name = $userdata['name'];
        $this->firstname = $userdata['firstname'];
        $this->phone = $userdata['phone'];
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }
    /**
     * Get the value of mail
     */ 
    public function getMail(): string {
        return $this->mail;
    }

    /**
     * Set the value of mail
     *
     * @return  self
     */ 
    public function setMail(string $mail): self {
        $this->mail = $mail;
        return $this;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword(): string {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword(string $password): self {
        $this->password = $password;
        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName(): string {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName(string $name): self {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of firstname
     */ 
    public function getFirstname(): string {
        return $this->firstname;
    }

    /**
     * Set the value of firstname
     *
     * @return  self
     */ 
    public function setFirstname(string $firstname): self {
        $this->firstname = $firstname;
        return $this;
    }

    /**
     * Get the value of phone
     */ 
    public function getPhone(): string {
        return $this->phone;
    }

    /**
     * Set the value of phone
     *
     * @return  self
     */ 
    public function setPhone(string $phone): self {
        $this->phone = $phone;
        return $this;
    }

    /**
     *  Define how to convert/serialize a User to a JSON format
     *  This method will be automatically invoked by json_encode when applied to a User
     */

    // mixed
    public function jsonSerialize(): array {
        return [
            "id" => $this->id,
            "mail" => $this->mail,
            "password" => $this->password,
            "name" => $this->name,
            "firstname" => $this->firstname,
            "phone" => $this->phone,
        ];
    }
}
?>
