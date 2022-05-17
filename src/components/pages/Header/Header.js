import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import {useState} from "react";
import {Box} from "@mui/material";
import {Person, Search, ShoppingBasket} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import styles from "./Header.module.css"
import logo from "../../../assets/img/computech3_new.png"

const navs = [
    {id: 1, name: "Home", to: "/"},
    {id: 2, name: "Store", to: "/store/keyboard"},
    {id: 3, name: "About Us", to: "/about"},
    {id: 4, name: "Contact", to: "/contact"},
]

const Header = (props) => {

    const [activeNav, setActiveNav] = useState(1);

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    padding: "20px 0",
                    // backgroundColor:'#252525',#61ddfb
                    background: 'linear-gradient(to right,#cb11ab 0,#481173 100%) no-repeat;',
                    // backgroundImage: 'linear-gradient(90deg,#FF1493FF,#7E57C2,#573491FF)',
                    // borderBottomLeftRadius: "40px",
                    // borderBottomRightRadius: "40px",
                    // flex: "1"
                }}
            >
                <Toolbar>
                    <Box
                        // component={NavLink}
                        // to={"/"}
                        sx={{flexGrow: 1, fontWeight: '800', fontSize: '24px'}}
                    >
                        <NavLink to={"/"} className={styles.logo}>
                            <img src={logo} alt="Logo"/>
                            {/*Computech*/}
                        </NavLink>
                    </Box>

                    <Box sx={{flexGrow: 1}}>
                        <div className={styles.search_box}>
                            <input type="text" placeholder={"search...."}/>
                            <a href="##">
                                <Search/>
                            </a>
                        </div>
                    </Box>

                    {/*<Typography*/}
                    {/*    component={NavLink}*/}
                    {/*    to={"/addItem"}*/}
                    {/*    pr={4}*/}
                    {/*    sx={{fontWeight: '800', color: '#61ddfb'}}*/}
                    {/*>*/}
                    {/*    Add Item*/}
                    {/*</Typography>*/}

                    <Box
                        component={NavLink}
                        to={"/login"}
                        pr={4}
                        sx={{fontWeight: '800', color: '#61ddfb'}}
                        className={styles.nav_link}
                    >
                        <span className={styles.nav_link__span}><Person sx={{width: '30px', height: '30px', color: '#61ddfb'}}/></span>
                        Login
                    </Box>

                    <Box
                        component={NavLink}
                        to={"/cart"}
                        sx={{fontWeight: '800', color: '#61ddfb'}}
                    >
                        {/*<Badge*/}
                        {/*    color={"secondary"}*/}
                        {/*    badgeContent={props.basketSize}*/}
                        {/*    className={styles.nav_link__span}*/}
                        {/*>*/}
                            <span className={styles.nav_link__span}><ShoppingBasket sx={{width: '30px', height: '30px', color: '#61ddfb'}}/></span>
                            Basket
                        {/*</Badge>*/}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav className={styles.nav}>
                <div>
                    {
                        navs.map(nav =>
                            <NavLink
                                onClick={() => setActiveNav(nav.id)}
                                key={nav.id}
                                to={nav.to}
                                className={nav.id === activeNav && styles.active}>
                                {nav.name}
                            </NavLink>)
                    }
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = (state) => ({basketSize: state.basket.basketItems.length})
export default connect(mapStateToProps, null)(Header);