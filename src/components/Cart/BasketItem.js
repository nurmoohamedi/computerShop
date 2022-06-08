import {IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const BasketItem = ({removeFromBasket, item}) => {

    return (
        <ListItem sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography variant={"body1"}>
                {item.id} - {item.model}
            </Typography>
            <IconButton
                onClick={()=>removeFromBasket(item.id)}
            >
                <Close />
            </IconButton>
        </ListItem>

    )

}

export default BasketItem;