import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./pages/404";
import ContactsIndex from "./pages/contacts";
import Home from "./pages/home";
import CreateContact from "./pages/contacts/create";
import EditContact from "./pages/contacts/edit";
import ShowContact from "./pages/contacts/show";

/**
 * 1 - Créer les pages : create-contact, edit-contact,show-contact
 * 2 - Ajouter dans la page Home un lien vers create contact
 * 3 - Ajouter un lien voir dans le tableau de contact.Et quand on clique sur ce lien
 *      On arrive à la page show
 * 4 - Quand on navigue dans /home, on doit être redirigé vers la page d'accueil
 * 5 - Créer une page 404, et créer une route pour la page 404
 */

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home">
          <Redirect to={"/"} />
        </Route>
        <Route exact path="/contacts" component={ContactsIndex} />
        <Route exact path="/contacts/:id" component={ShowContact} />
        <Route exact path="/contacts/new" component={CreateContact} />
        <Route exact path="/contacts/:id/edit" component={EditContact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
