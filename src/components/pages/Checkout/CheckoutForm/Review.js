import React from "react";
import {Button, Divider, Grid, List, ListItem, ListItemText, Typography} from "@mui/material";


const products = [
    {name: 'Product 1', desc: 'A nice thing', price: '$9.99'},
    {name: 'Product 2', desc: 'Another thing', price: '$3.45'},
    {name: 'Product 3', desc: 'Something else', price: '$6.51'},
    {name: 'Product 4', desc: 'Best thing of all', price: '$14.11'},
    {name: 'Shipping', desc: '', price: 'Free'},
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    {name: 'Card type', detail: 'Visa'},
    {name: 'Card holder', detail: 'Mr John Smith'},
    {name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
    {name: 'Expiry date', detail: '04/2024'},
];

const Review = ({basketData, shippingData, paymentData, totalPrice, stepNext, stepBack, stepConfirm}) => {
    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "25px"
        }}>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>

            <List>
                {basketData.map(product => (
                    <ListItem sx={{p: "0"}} key={product.model}>
                        <ListItemText primary={product.model} secondary={product.description}/>
                        <Typography variant="body2">{product.price.toLocaleString("ru")} &#8376; </Typography>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1">
                        {totalPrice.toLocaleString("ru")} &#8376;
                    </Typography>
                </ListItem>
            </List>

            <Divider sx={{m: "15px"}}/>

            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Shipping Details
                    </Typography>
                    <Typography gutterBottom>{shippingData.fname + " " + shippingData.lname}</Typography>
                    <Typography
                        gutterBottom>{shippingData.country + ", " + shippingData.city + ", " + shippingData.address}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Payment details
                    </Typography>
                    <Grid container>

                        <Grid item xs={6}>
                            <Typography gutterBottom>Card type</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{paymentData.cardName}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Card number</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{paymentData.cardNumber}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>Expiry Date</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>{paymentData.cardDate}</Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <div style={{paddingTop: '25px', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant={"outlined"} onClick={stepBack}>Back</Button>
                <Button variant={"contained"}
                        onClick={stepConfirm}>Pay {totalPrice.toLocaleString("ru")} &#8376;</Button>
            </div>
        </div>
    );
}

// export default withStyles(styles)(Review);
export default Review;