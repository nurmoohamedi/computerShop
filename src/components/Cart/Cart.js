import {Box, Button, Container, Divider, Grid, Typography} from "@mui/material";
import {connect} from "react-redux";
import {clearBasket, computeBasketCost, deleteItemFromBasket} from "../../redux/basket-reducer";

import increment from "./../../assets/icons/increment.svg"
import decrement from "./../../assets/icons/decrement.svg"
import emptyBasket from "./../../assets/icons/emptyBasket.svg"

import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Item = ({item, deleteItem, addToItemsSum, addToItemsCount, fillBasketTotal, showSnack}) => {

    const [isCountMax, setIsCountMax] = useState(false);

    const [count, setCount] = useState(1);
    const currentPrice = parseInt(item.price) * count;

    useEffect(() => fillBasketTotal(item.id, count, currentPrice), [item.id, count, currentPrice])

    function increaseCount() {
        if (item.count <= count)
            setIsCountMax(true);
        // alert(item.model + " count is reached to its maximum - " + item.count)
        else {
            const c = count + 1;
            setCount(c);
        }
    }

    function decreaseCount() {
        setCount(count - 1);
        setIsCountMax(false);
    }

    function deleteItem__() {
        deleteItem(item.id);
        fillBasketTotal(item.id, 0, 0)
        showSnack("warning", "Item with ID - " + item.id + " - deleted!");
    }

    return (
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{p: "32px 0"}}>
            <Box className={"item_img"} display={"flex"} flexDirection={"column"}>
                <img src={item.img.small} style={{"maxWidth": "80px", "borderRadius": "20px"}}/>
                <Button variant={"text"} sx={{p: "10px 0 0 0", fontSize: "12px", color: "#c1c1c1"}}
                        onClick={deleteItem__}>Delete</Button>
            </Box>
            <Box className={"item_info"} sx={{p: "0 20px", maxWidth: "500px"}}>
                <Typography>{item.model}, {item.description}</Typography>
                {isCountMax &&
                    <Typography color={"red"} fontSize={"14px"}>
                        You reached to its maximum count!
                    </Typography>}
            </Box>
            <Box className={"item_price"}
                 minWidth={"90px"}><Typography>{currentPrice.toLocaleString('ru')} &#8376;</Typography></Box>

            <Box className={"item_count"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}
                 alignItems={"center"}>
                <Button sx={{cursor: "pointer"}} onClick={increaseCount}><img width={"32px"} height={"32px"}
                                                                              src={increment} alt="increment"/></Button>
                <Box sx={{margin: "14px 0"}}>{count}</Box>
                <Button disabled={count <= 1 && true} sx={{cursor: "pointer"}} onClick={decreaseCount}>
                    <img width={"32px"} height={"32px"} src={decrement} alt=""/>
                </Button>
            </Box>
        </Box>
    )
}


const Cart = (props) => {

    const resetBasket = () => {
        props.clearBasket();
    }

    const items = props.basketItems.map(item => {
            return (<div key={item.id}>
                <Item item={item} deleteItem={props.deleteItemFromBasket} fillBasketTotal={props.computeBasketCost} showSnack={props.showSnack}/>
                <Divider/>
            </div>)
        }
    )

    return (
        //#edeef0
        <Container
            sx={{
                // flex: "2"
                marginBottom: "25px",
                // border: "2px solid red"
            }}
        >
            <Typography fontSize={28} fontWeight={600} m={2}>
                Your Shopping Cart
            </Typography>
            <Grid container spacing={4}
                // sx={{width:"1300px", margin:"0 auto"}}
            >
                <Grid item sm={8}>
                    <Container sx={{
                        // padding: "24px",
                        backgroundColor: '#fff', borderRadius: '10px'
                    }}>
                        {items.length === 0
                            ?
                            <Box minHeight={'350px'}
                                 display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"center"}>
                                <img width={'48px'} src={emptyBasket} alt="emptyBasket"/>
                                <Typography color={"#000"} fontSize={16} fontWeight={"600"}>
                                    You have no items in your shopping cart!
                                </Typography>
                            </Box>
                            :
                            <>
                                {items}
                                <Box textAlign={"center"}>
                                    <Button onClick={resetBasket} variant={"text"}
                                            sx={{m: "24px 0", color: "#c1c1c1", textTransform: "uppercase"}}>
                                        Clear the basket
                                    </Button>
                                </Box>
                            </>
                        }
                    </Container>
                </Grid>
                <Grid item sm={4}>
                    <Box p="25px" display={'flex'} flexDirection={'column'} justifyContent={'space-between'}
                         sx={{backgroundColor: '#fff', borderRadius: '10px'}}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography fontSize={"16px"}>Сумма к оплате:</Typography>
                            <Typography fontSize={"32px"}
                                        fontWeight={'600'}>{(props.totalPrice).toLocaleString('ru')} &#8376;</Typography>
                        </Box>
                        <Divider sx={{m: '10px 0'}}/>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}
                             fontSize={"1.1em"}
                             sx={{mb: '25px'}}>
                            <Typography>Количество товаров:</Typography>
                            <Typography fontSize={'20px'}>{props.totalCount} шт.</Typography>
                        </Box>
                        <Box>
                            <Button disabled={items.length === 0 && true} component={NavLink} to={"/checkout"} fullWidth variant={'contained'}>
                                Оформить заказ
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

const mapStateToProps = (state) => {
    return {
        basketItems: state.basket.basketItems,
        totalCount: state.basket.totalCount,
        totalPrice: state.basket.totalPrice,
    }
}
export default connect(mapStateToProps, {deleteItemFromBasket, computeBasketCost, clearBasket})(Cart);