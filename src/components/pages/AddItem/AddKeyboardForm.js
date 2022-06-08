import {shopAPI} from "../../../service/service";

import {Box, Button, CircularProgress, Grid} from "@mui/material";
import {Add} from "@mui/icons-material";

import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import InputForm from "../Checkout/InputForm";
import {useState} from "react";

const schema = yup.object({
    model: yup.string().min(3).required(),
    description: yup.string().max(250),
    country: yup.string(),
    price: yup.string()
}).required();

const AddKeyboardForm = ({showSnack}) => {

    const [isProgress, setIsProgress] = useState(false);

    const methods = useForm({
        resolver: yupResolver(schema)
    });
    const errors = methods.formState.errors

    const addItem = (data) => {
        debugger
        // const data = new FormData(event.currentTarget);

        setIsProgress(prevState => !prevState)

        shopAPI.addKeyboard(data)
            .then(data => {
                    showSnack("success", "Keyboard added!")
                    setIsProgress(prevState => !prevState);
                    methods.reset();
                }, reason => {
                    showSnack("error", reason.message)
                    setIsProgress(prevState => !prevState)
                }
            )
    }

    return (
        <>
            <Box
                pt={8}
                width={"500px"}
                sx={{
                    // margin: '0 auto',
                    // padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '6px'
                }}
            >
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(addItem)}>
                        <Grid container spacing={1}>
                            <InputForm label={"Model"} name={"model"} required fullwidth error={errors.model?.message}/>
                            <InputForm label={"Description"} name={"description"} required fullwidth/>
                            <InputForm label={"Country"} name={"country"}/>
                            <InputForm label={"Price"} required name={"price"}/>
                            {/*<InputForm required name={"image"} type={"color"}/>*/}
                        </Grid>
                        <Button disabled={isProgress} type={"submit"} variant={"contained"} fullWidth
                                sx={{padding: "12px 0"}}>
                            {isProgress ? <CircularProgress sx={{mr: "15px", color: "red"}}/>
                                : <Add sx={{mr: '5px'}}/>
                            }
                            Add Keyboard
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default AddKeyboardForm;

