import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Keyboard, KeyboardArrowRight, KeyboardDoubleArrowRightRounded, Monitor, Mouse} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
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
                    <ListItem
                        disablePadding
                    >
                        <ListItemButton component={NavLink} to={"keyboard"}>
                            <ListItemIcon>
                                <Keyboard/>
                            </ListItemIcon>
                            <ListItemText primary="Keyboard" />
                            <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>
                                <KeyboardArrowRight/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                    >
                        <ListItemButton component={NavLink} to={"monitor"}>
                            <ListItemIcon>
                                <Monitor/>
                            </ListItemIcon>
                            <ListItemText primary="Monitor"/>
                            <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>
                                <KeyboardArrowRight/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                    >
                        <ListItemButton component={NavLink} to={"mouse"}>
                            <ListItemIcon>
                                <Mouse/>
                            </ListItemIcon>
                            <ListItemText primary={"Mouse"}/>
                            <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>
                                <KeyboardArrowRight/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider/>
            <nav aria-label="secondary mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={"addItem"}>
                            <ListItemText primary="Add Item"/>
                            <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>
                                <KeyboardDoubleArrowRightRounded/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="DrawerBasket"/>
                            <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>
                                <KeyboardDoubleArrowRightRounded/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Wishlist"/>
                            <ListItemIcon sx={{display:'flex', justifyContent:'end'}}>
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