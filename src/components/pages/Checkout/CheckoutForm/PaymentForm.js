import {Button, Grid, Typography} from "@mui/material";
import InputForm from "../InputForm";
import {FormProvider, useForm} from "react-hook-form";

const PaymentForm = ({paymentNext, stepBack}) => {

    const methods = useForm();

    const submit = (data) => {
        paymentNext(data)
    }

    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "25px"
        }}>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submit)}>
                    <Typography variant="h6" m="25px 0">
                        Shipping Address
                    </Typography>
                    <Grid container spacing={3}>
                        <InputForm name="cardName" label={"Name on card"} required={true}/>
                        <InputForm name="cardNumber" label={"Card number"} required={true}/>
                        <InputForm name="cardDate" label={"Expiry Date"} required={true}/>
                        <InputForm name="cardCvc" label={"CVC"} required={true}
                                   helptext={"Last three digits on signature strip"}/>
                    </Grid>
                    <div style={{paddingTop: '25px', display: 'flex', justifyContent: 'space-between'}}>
                        <Button variant={"outlined"} onClick={stepBack}>Back</Button>
                        <Button type="submit" variant={"contained"}>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default PaymentForm;

//
// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
//
// function PaymentForm() {
//     return (
//         <React.Fragment>
//             <Typography variant="h6" gutterBottom>
//                 Payment method
//             </Typography>
//             <Grid container spacing={24}>
//                 <Grid item xs={12} md={6}>
//                     <TextField required id="cardName" label="Name on card" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField required id="cardNumber" label="Card number" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField required id="expDate" label="Expiry date" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         required
//                         id="cvv"
//                         label="CVV"
//                         helperText="Last three digits on signature strip"
//                         fullWidth
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <FormControlLabel
//                         control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//                         label="Remember credit card details for next time"
//                     />
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     );
// }
//
// export default PaymentForm;