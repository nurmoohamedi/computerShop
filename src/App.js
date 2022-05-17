import './App.css';
import Login from "./components/Login/Login";
import * as React from "react";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import CheckoutContainer from "./components/pages/Checkout/CheckoutContainer";
import Cart from "./components/Cart/Cart";
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import SnackBar from "./components/common/SnackBar";
import {useState} from "react";
import NotFound from "./components/pages/NotFound/NotFound";
import HomePage from "./components/pages/Home/HomePage";

function App() {

    const [isSnackOpen, setSnackOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const showSnack = (status, message) => {
        setStatus(status);
        setMessage(message);
        setSnackOpen(true);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            <Header />
            <Routes>
                <Route path={"/login"} exact element={<Login/>}/>
                <Route path={"/cart"} exact element={<Cart showSnack={showSnack}/>}/>
                <Route path={"/checkout"} exact element={<CheckoutContainer/>}/>
                <Route path={"store/*"} element={<Main showSnack={showSnack}/>}/>
                <Route path={"/"} exact element={<HomePage />}/>
                <Route path={"/*"} element={<NotFound/>}/>
            </Routes>
            <Footer />

            <SnackBar
                isOpen={isSnackOpen}
                status={status}
                message={message}
                handleClose={() => setSnackOpen(false)}
            />

        </div>
    );
}

export default App;