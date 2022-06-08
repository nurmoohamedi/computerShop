import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Done, Keyboard, KeyboardArrowRight, KeyboardDoubleArrowRightRounded, Monitor, Mouse} from "@mui/icons-material";
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./Sidebar.module.css";

const sidenavs = [
    {id: 1, to: "keyboard", text: "Keyboard"},
    {id: 2, to: "monitor", text: "Monitor"},
    {id: 3, to: "mouse", text: "Mouse"}
]

const NavIcon = ({nav, active}) => {
    if (nav === 1)
        return <Keyboard className={active}/>
    else if (nav === 2)
        return <Monitor className={active}/>
    else if (nav === 3)
        return <Mouse className={active}/>
}

const Sidebar = () => {

    const [activeNav, setActiveNav] = useState(1);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes("keyboard"))
            setActiveNav(1);
        else if(location.pathname.includes("monitor"))
            setActiveNav(2);
        else if(location.pathname.includes("mouse"))
            setActiveNav(3);
    }, [location]);


    return (
        <Box
            sx={{
                width: '100%', maxWidth: 250,
                bgcolor: 'background.paper',
                // padding:'6px',
                // backgroundColor:'#fff',
                borderRadius: '8px'
            }}>
            <nav>
                <List>
                    {
                        sidenavs.map(nav =>
                            <ListItem
                                key={nav.id}
                                disablePadding
                                // onClick={() => setActiveNav(nav.id)}
                                className={nav.id === activeNav && styles.active}
                            >
                                <ListItemButton component={NavLink} to={nav.to}
                                    sx={{
                                        "&.MuiButtonBase-root:hover": {
                                            bgcolor: "transparent",
                                            borderRadius: "50px"
                                    }
                                    }}
                                >
                                    <ListItemIcon>
                                        <NavIcon nav={nav.id} active={nav.id === activeNav && styles.activeIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={nav.text}/>
                                    <ListItemIcon sx={{display: 'flex', justifyContent: 'end'}}>
                                        {
                                            nav.id === activeNav ? <Done className={styles.activeIcon}/> :
                                                <KeyboardArrowRight/>
                                        }
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    {/*<ListItem*/}
                    {/*    disablePadding*/}
                    {/*>*/}
                    {/*    <ListItemButton component={NavLink} to={"monitor"}>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <Monitor/>*/}
                    {/*        </ListItemIcon>*/}
                    {/*        <ListItemText primary="Monitor"/>*/}
                    {/*        <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>*/}
                    {/*            <KeyboardArrowRight/>*/}
                    {/*        </ListItemIcon>*/}
                    {/*    </ListItemButton>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem*/}
                    {/*    disablePadding*/}
                    {/*>*/}
                    {/*    <ListItemButton component={NavLink} to={"mouse"}>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <Mouse/>*/}
                    {/*        </ListItemIcon>*/}
                    {/*        <ListItemText primary={"Mouse"}/>*/}
                    {/*        <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>*/}
                    {/*            <KeyboardArrowRight/>*/}
                    {/*        </ListItemIcon>*/}
                    {/*    </ListItemButton>*/}
                    {/*</ListItem>*/}
                </List>
            </nav>
            <Divider/>
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"addItem"}>
                            <ListItemText primary="Add Item"/>
                            <ListItemIcon sx={{display: 'flex', justifyContent: 'end'}}>
                                <KeyboardDoubleArrowRightRounded/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="DrawerBasket"/>
                            <ListItemIcon sx={{display: 'flex', justifyContent: 'end'}}>
                                <KeyboardDoubleArrowRightRounded/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Wishlist"/>
                            <ListItemIcon sx={{display: 'flex', justifyContent: 'end'}}>
                                <KeyboardDoubleArrowRightRounded/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}

export default Sidebar;