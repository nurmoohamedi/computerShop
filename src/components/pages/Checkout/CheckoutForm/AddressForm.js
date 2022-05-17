import {Button, CircularProgress, FormGroup, Grid, Typography} from "@mui/material";
import InputForm from "../InputForm";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {NavLink} from "react-router-dom";

const schema = yup.object({
    fname: yup.string().min(2).required(),
    lname: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
}).required();

const AddressForm = ({shippingNext}) => {

    const methods = useForm({
        resolver: yupResolver(schema), mode:"all"
    })

    const errors = methods.formState.errors

    const submit = (data) => {
        shippingNext(data)
    }

    return (
        <div style={{
            backgroundColor:"#fff",
            borderRadius:"10px",
            padding:"25px"
        }}>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submit)}>
                    <Typography variant="h6" mb={2}>
                        Shipping Address
                    </Typography>
                    <Grid container spacing={3}>
                        <InputForm name={"fname"} label={"First Name"} required error={errors.fname?.message}/>
                        <InputForm name={"lname"} label={"Last Name"} required />
                        {errors.lname?.message}
                        <InputForm name={"country"} label={"Country"} required />
                        {errors.country?.message}
                        <InputForm name={"city"} label={"City"} required/>
                        {errors.city?.message}
                        <InputForm name={"address"} label={"Address Line"} fullwidth/>
                        {errors.address?.message}
                        <InputForm name={"region"} label={"State / Region / Province"}/>
                        {errors.region?.message}
                        <InputForm name={"zipCode"} label={"Zip / Postal Code"} required/>
                        {errors.zipCode?.message}
                    </Grid>
                    {/*<div style={{textAlign:'center'}}>*/}
                    {/*    <CircularProgress />*/}
                    {/*</div>*/}

                    <div style={{paddingTop:'25px',display:'flex',justifyContent:'space-between'}}>
                        <Button component={NavLink} to="/cart" variant={"outlined"}>Back to Cart</Button>
                        <Button type="submit" variant={"contained"}>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm;
