import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Success from "./pages/Success";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
// import { Navigate } from "react-router";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/login" element={<Login/>}> </Route>

        <Route index element={<Home />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Products/:category" element={<ProductList />} />
        {/* <Route path="/Product" element={<Product/>}/> */}
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />

        <Route path="/register" element={<Register/>}>
          {/* {user ? <Navigate to="/" /> : <Register />} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
