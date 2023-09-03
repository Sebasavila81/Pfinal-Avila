import NavBar from "./components/NavBar/Navbar";
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./components/Error/Error";
import { CardProvider } from "./components/context/CartContext";
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {


    return (
        <div>
            <BrowserRouter>
                <CardProvider>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer greeting="¡Bienvenido a suplementos Perci!"/>} />
                        <Route path="/productos" element={<ItemListContainer greeting="Catálogo"/>} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                        <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Catálogo"/>} />
                        <Route path="/cart" element={<Cart greeting='Carrito de compras'/>} />
                        <Route path='/checkout' element={ <Checkout greeting='Checkout'/> } />
                        <Route path="*" element={<Error />} />

                    </Routes>
                    <Footer/>
                </CardProvider>
            </BrowserRouter>


        </div>
    )

}
export default App
