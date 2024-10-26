<?php
class Orders implements JsonSerializable {
    private int $id;
    private int $user_id;
    private int $order_id;
    private int $total;
    private array $cart_items = [];

    public function __construct(int $user_id, array $cart_items, int $total){
        $this->user_id = $user_id;
        $this->cart_items = $cart_items;
        $this->total = $total;
    }
    public function getUserId(): int {
        return $this->user_id;
    }
    
    public function getTotal(): int {
        return $this->total;
    }

    public function getCartItems(): array {
        return $this->cart_items;
    }

    public function jsonSerialize(){
        return [
            "id" => $this->id,
            "user_id" => $this->user_id,
            "cart_items" => $this->cart_items,
            "total" => $this->total
        ];
    }
}