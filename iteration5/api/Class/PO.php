<?php
/**
 *  Class PO
 * 
 *  Représente un produit avec plusieurs propriétés (product_id, option_id, url, option_name, option_value)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe PO doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class PO implements JsonSerializable {
    private int $product_id; // id du produit
    private int $option_id; // id de l'option
    private string $url; // image du produit option
    private ?string $option_name; // nom de l'option
    private ?string $option_value; // valeur de l'option

    public function __construct(int $product_id, int $option_id, string $url, ?string $option_name = null, ?string $option_value = null){
        $this->product_id = $product_id;
        $this->option_id = $option_id;
        $this->url = $url;
        $this->option_name = $option_name;
        $this->option_value = $option_value;
    }

    /**
     * Get the value of product_id
     */ 
    public function getProductId(): int
    {
        return $this->product_id;
    }

    /**
     * Set the value of product_id
     *
     * @return  self
     */ 
    public function setProductId(int $product_id): self
    {
        $this->product_id = $product_id;
        return $this;
    }

    /**
     * Get the value of option_id
     */ 
    public function getOptionId(): int
    {
        return $this->option_id;
    }

    /**
     * Set the value of option_id
     *
     * @return  self
     */ 
    public function setOptionId(int $option_id): self
    {
        $this->option_id = $option_id;
        return $this;
    }

    /**
     * Get the value of url
     */ 
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * Set the value of url
     *
     * @return  self
     */ 
    public function setUrl(string $url): self
    {
        $this->url = $url;
        return $this;
    }

    /**
     * Get the value of option_name
     */ 
    public function getOptionName(): ?string
    {
        return $this->option_name;
    }

    /**
     * Set the value of option_name
     *
     * @return  self
     */ 
    public function setOptionName(?string $option_name): self
    {
        $this->option_name = $option_name;
        return $this;
    }

    /**
     * Get the value of option_value
     */ 
    public function getOptionValue(): ?string
    {
        return $this->option_value;
    }

    /**
     * Set the value of option_value
     *
     * @return  self
     */ 
    public function setOptionValue(?string $option_value): self
    {
        $this->option_value = $option_value;
        return $this;
    }

    /**
     *  Define how to convert/serialize a PO to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a PO
     */

    // mixed
    public function jsonSerialize(): array{
        return [
            "product_id" => $this->product_id,
            "option_id" => $this->option_id,
            "url" => $this->url,
            "option_name" => $this->option_name,
            "option_value" => $this->option_value,
        ];
    }
}
