<?php
require_once "Controller.php";
require_once "Repository/PORepository.php";

// Cette classe hérite de la méthode jsonResponse et de la propriété $cnx de la classe parente Controller
// Seules les méthodes process????Request doivent être (re)définies.

class POController extends Controller {

    private PORepository $pos;

    public function __construct(){
        $this->pos = new PORepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI est .../pos/{id}
            $po = $this->pos->find($id); 
            return $po == null ? false : $po;
        } else {
            // URI est .../pos
            $product_id = $request->getParam("product_id"); // y a-t-il un paramètre product_id dans la requête?
            if ($product_id == false) // pas de product_id dans la requête, retourner tous les PO
                return $this->pos->findAll();
            else // retourner uniquement les PO du produit $product_id
                return $this->pos->findAllByProduct($product_id);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $po = new PO($obj->product_id, $obj->option_id, $obj->url, $obj->option_name, $obj->option_value);
        $ok = $this->pos->save($po); 
        return $ok ? $po : false;
    }
}

?>
