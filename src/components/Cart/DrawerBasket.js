import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const DrawerBasket = ({isBasketOpen, closeBasket = Function.prototype, order, removeFromBasket}) => {

    return (
        <Drawer
            anchor={"right"}
            open={isBasketOpen}
            onClose={closeBasket}
        >
            <List sx={{width:'400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={"DrawerBasket"}/>
                </ListItem>
                <Divider />

                {!order.length
                    ? <ListItem>Basket is empty!</ListItem>
                    : order.map(item =>
                        <BasketItem key={item.id} item={item} removeFromBasket={removeFromBasket}/>
                    )
                }

                <Divider />

                <ListItem>
                    <Typography>
                        The Count of Items: {order.length}
                    </Typography>
                </ListItem>

            </List>
        </Drawer>
    )

}

export default DrawerBasket;