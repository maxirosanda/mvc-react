import React from 'react'
import "./App.css"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/FooTer"
import CartContainer from "./components/Cart/CartContainer"
import CategoryContainer from "./components/Item/CategoryContainer"
import ItemContainer from './components/Item/ItemContainer'
import LoginContainer from './components/Login/loginContainer'
import RegisterContainer from './components/register/registerContainer'
import ErrorIngreso from './components/cartelesError/errorContainer'
import AgregarProductoContainer from './components/agregarProducto/agregarProductoContainer'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import {Context} from './Context'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'

const App = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Context>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={LoginContainer}/>
          <Route exact path="/register" component={RegisterContainer}/>
          <Route exact path="/error" component={ErrorIngreso}/>
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/agregar" component={AgregarProductoContainer} />
          <Route exact path="/categoria/:categoria" component={CategoryContainer}/>
          <Route path="/" component={ItemContainer} />{" "}
        </Switch>
        <Footer />
        </Context>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
