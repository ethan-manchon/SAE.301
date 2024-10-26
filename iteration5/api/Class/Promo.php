<?php
/**
 *  Class Promo
 * 
 *  Représente une promotion avec plusieurs propriétés (id, name, discount)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Promo doivent être convertis en JSON. Voir la méthode pour plus de détails.
 */
class Promo implements JsonSerializable {
    private int $id; // id de la promotion
    private string $name; // nom de la promotion
    private float $discount; // remise de la promotion

    public function __construct(string $name, float $discount){
        $this->name = $name;
        $this->discount = $discount;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id;
    }
    
    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of discount
     */ 
    public function getDiscount(): float
    {
        return $this->discount;
    }

    /**
     * Set the value of discount
     *
     * @return  self
     */ 
    public function setDiscount(float $discount): self
    {
        $this->discount = $discount;
        return $this;
    }

    /**
     *  Define how to convert/serialize a Promo to a JSON format
     *  This method will be automatically invoked by json_encode when applied to a Promo
     */
    // précédement mixed
    public function jsonSerialize(): array{
        return [
            "id" => $this->id,
            "name" => $this->name,
            "discount" => $this->discount,
        ];
    }
}
?>
