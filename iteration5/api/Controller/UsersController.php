<?php
require_once "Controller.php";
require_once "Repository/UsersRepository.php";

// This class inherits the jsonResponse method and the $cnx property from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class UsersController extends Controller {

    private UsersRepository $users;

    public function __construct(){
        $this->users = new UsersRepository();
    }

    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../users/{id}
            $p = $this->users->find($id); 
            return $p == null ? false : $p;
        } else {
            // URI is .../users
            $cat = $request->getParam("mail"); // is there a category parameter in the request?
            if ($cat == false) // no request category, return all users
                return $this->users->findAll();
            else // return only users of category $cat
                return $this->users->findByEmail($cat);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $idaction = $request->getId();
        if ($idaction == "signup"){
            return $this->processSignUpRequest($request);
        }
        if ($idaction == "signin"){
            return $this->processSignInRequest($request);
        }
        if ($idaction == "signout"){
            return $this->processSignOutRequest($request);
        }
    }

private function processSignUpRequest(HttpRequest $request) {
    $mail = $request->getParam("mail");
    $password = $request->getParam("password");

    $user = $this->users->findByEmail($mail);

    if ($user != null){
        return false;
    }

    $hash_password = password_hash($password, PASSWORD_DEFAULT);

    $name = $request->getParam("name");
    $firstname = $request->getParam("firstname");
    $phone = $request->getParam("phone");

    $userdata = [];
    $userdata["mail"] = $mail;
    $userdata["password"] = $hash_password;
    $userdata["name"] = $name;
    $userdata["firstname"] = $firstname;
    $userdata["phone"] = $phone;

    $user = new User($userdata);
    return $this->users->save($user);
}

private function processSignInRequest(HttpRequest $request) {
    
    $mail = $request->getParam("mail");
    $password = $request->getParam("password");

    $user = $this->users->findByMail($mail);

    if ($user == null){
        return false;
    }

    if (password_verify($password, $user->getPassword())) {

        session_regenerate_id();
        $_SESSION['user'] = $user;
        error_log(print_r($_SESSION['user'], true));
        return true;

    } else {
        return false;
    }
}
//     private function processSignOutRequest(HttpRequest $request) {
//         if (isset($_SESSION['user'])) {
//             unset($_SESSION['user']);
//             setcookie(session_name(), '', time() - 3600, '/');
//         }
//         session_unset();
//         session_destroy();
//         return true;
//     }
}


?>
