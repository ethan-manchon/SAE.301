<?php
require_once "Controller.php";
require_once "Repository/OrdersRepository.php";
require_once "Class/Orders.php";

// This class inherits the jsonResponse method and the $cnx property from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class OrdersController extends Controller {

    private OrdersRepository $orders;

    public function __construct(){
        $this->orders = new OrdersRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../orders/{id}
            $order = $this->orders->find($id); 
            return $order == null ? false : $order;
        } else {
            // URI is .../orders
            $id = $request->getParam("id"); // is there a user_id parameter in the request?
            if ($id == false) // no user_id parameter, return all orders
            return $this->orders->findAll();
            else // return only orders of user_id $user_id
            return $this->orders->findAllById($id);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $idaction = $request->getId();
        if ($idaction == "add"){
            return $this->processAddOrderRequest($request);
        }
    }

    private function processAddOrderRequest(HttpRequest $request) {
        $user = $_SESSION['user']; // Assuming user_id is stored in session
        $user_id = $user->getId();
        // $user_id = 36; // Assuming user_id is passed in the request
        $cart_items = json_decode($request->getParam('cart'), true);
        $total = $request->getParam('total');

        if (!is_array($cart_items)) {
            throw new InvalidArgumentException("cart_items must be an array");
        }

        $order = new Orders($user_id, $cart_items, $total);
        $answer = $this->orders->save($order);

        return $answer;
    }
}
?>
