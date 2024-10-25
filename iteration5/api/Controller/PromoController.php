<?php
require_once "Controller.php";
require_once "Repository/PromoRepository.php";
require_once "Class/Promo.php";

class PromoController extends Controller {

    private PromoRepository $promos;

    public function __construct(){
        $this->promos = new PromoRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            $p = $this->promos->find($id); 
            return $p == null ? false : $p;
        } else {
            return $this->promos->findAll();
        }
    }


    
    protected function processPostRequest(HttpRequest $request) {
        $idaction = $request->getId();
        if ($idaction == "add"){
            return $this->processAddRequest($request);
        }
        if ($idaction == "delete"){
            return $this->processDeleteRequest($request);
        }
    }
    
    private function processAddRequest(HttpRequest $request) {
        $promoCode = $request->getParam("promoCode");
        $promoDiscount = $request->getParam("promoDiscount");
    
        $promo = new Promo($promoCode, $promoDiscount);
        return $this->promos->save($promo);
    }
    protected function processDeleteRequest(HttpRequest $request) {
        $id = $request->getId();
        if ($id == "delete") {
        var_dump($request);
        var_dump($request->getJson());
        parse_str($request->getJson(), $data);
        var_dump($data);
        $promoId = intval($data['deletePromoCode']); // Enclose the constant in quotes
        return $this->promos->delete($promoId); // Pass the ID directly to the delete method
    }}
}
?>
