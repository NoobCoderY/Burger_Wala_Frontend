import react from "react"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from "./component/layout/Header";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import Cart from "./component/cart/Cart";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import PaymentSuccess from "./component/cart/PaymentSuccess";
import Login from "./component/login/Login"
import Profile from "../src/component/profile/Profile.jsx"
import MyOrders from "./component/myOrders/MyOrder.jsx"
import OrderDetails from "./component/myOrders/OrderDetails.jsx"
import DashBoard from "./component/admin/Dashboard.jsx"
import Users from "./component/admin/Users.jsx"
import Orders from "./component/admin/Orders.jsx"
import NotFound from "./component/layout/NotFound";
import About from "./component/about/About.jsx";


//import scss
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import "./styles/paymentSuccess.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/orderdetails.scss"
import "./styles/dashboard.scss"
import "./styles/users.scss"
import "./styles/orders.scss"
import "./styles/footer.scss"
import "./styles/notfound.scss"
import "./styles/about.scss"
import Footer from "./component/layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route exact path="/shipping" element={<Shipping/>}></Route>
          <Route exact path="/confirmorder" element={<ConfirmOrder/>}></Route>
          <Route exact path="/paymentSuccess" element={<PaymentSuccess/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/me" element={<Profile/>}></Route>
          <Route exact path="/myorders" element={<MyOrders/>}></Route>
          <Route exact path="/order/:id" element={<OrderDetails/>}></Route>
          <Route exact path="/admin/dashboard" element={<DashBoard/>}></Route>
          <Route exact path="/admin/users" element={<Users/>}></Route>
          <Route exact path="/admin/orders" element={<Orders/>}></Route>
          <Route exact path="about" element={<About/>}/>
          <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
