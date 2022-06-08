import {Box, Button, Container, Divider, Step, StepLabel, Stepper, Typography} from "@mui/material";
import React, {useState} from "react";
import AddressForm from "./CheckoutForm/AddressForm";
import Review from "./CheckoutForm/Review";
import PaymentForm from "./CheckoutForm/PaymentForm";
import {connect} from "react-redux";
import {addPaymentData, addShippingData} from "../../../redux/checkout-reducer";
import {clearBasket} from "../../../redux/basket-reducer";
import {NavLink} from "react-router-dom";

const steps = ['Shipping', 'Payment', 'Review']

const Checkout = ({basketData, shippingData, totalPrice, paymentData, addPaymentData, addShippingData, clearBasket}) => {

    const [addressData, setAddressData] = useState({})
    const [activeStep, setActiveStep] = useState(0)

    const stepBack = () => {
        setActiveStep((previousActiveStep) => previousActiveStep - 1);
    }
    const stepNext = (data) => {
        setActiveStep((previousActiveStep) => previousActiveStep + 1);
    }

    const shippingNext = (data) => {
        addShippingData(data);
        console.log(data)
        stepNext();
    }
    const paymentNext = (data) => {
      addPaymentData(data);
        console.log(data);
        stepNext();
    }

    const stepConfirm = () => {
        stepNext();
        clearBasket();
    }

    const Form = () => {
        switch (activeStep) {
            case 0:
                return <AddressForm shippingNext={shippingNext}/>;
            case 1:
                return <PaymentForm paymentNext={paymentNext} stepBack={stepBack}/>;
            case 2:
                return <Review
                    basketData={basketData}
                    shippingData={shippingData}
                    paymentData={paymentData}
                    totalPrice={totalPrice}
                    stepNext={stepNext} stepBack={stepBack}
                    stepConfirm={stepConfirm}
                />;
            default:
                throw new Error("Unknown step!")
        }
    }

    const Confirmation = () => (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "25px"
        }}>
            <Typography variant="h3">Confirmation</Typography>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
            </Typography>
            <Button component={NavLink} to={"/"} variant="contained" sx={{p:"10px 25px", mt:"15px"}}>
                Back to Shop
            </Button>
        </div>
    )

    return (
        <Container
            sx={{
                // backgroundColor:"#edeef0"
            }}

        >
            <Box p="25px" sx={{maxWidth:"600px", margin:"0 auto"}}>
                <Typography variant={"h4"} marginBottom={"25px"}>
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep}
                         sx={{padding:"20px 30px", mb: "25px", backgroundColor:"#fff", borderRadius:"10px"}} >
                    {
                        steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>

                {
                    activeStep === steps.length
                        ? <Confirmation/>
                        : (
                            <>
                                <Form/>
                            </>
                        )
                }
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    basketData: state.basket.basketItems,
    shippingData: state.checkout.shippingData,
    paymentData: state.checkout.paymentData,
    totalCount: state.basket.totalCount,
    totalPrice: state.basket.totalPrice,
})

export default connect(mapStateToProps, {addShippingData, addPaymentData, clearBasket})(Checkout);


