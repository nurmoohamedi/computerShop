import {shopAPI} from "../../../service/service";

import {Box, Button, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";

import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import InputForm from "../Checkout/InputForm";
import {useState} from "react";

const schema = yup.object({
    model: yup.string().min(3).required(),
    manufacture: yup.string().max(25        ),
}).required();

const AddMouseForm = ({}) => {

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
                    alert(data)
                    setIsProgress(prevState => !prevState);
                    methods.reset();
                }, reason => {
                    alert(reason)
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
                <Typography mb={2} variant={"h4"}>Mouse Form</Typography>
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(addItem)}>
                        <Grid container spacing={1}>
                            <InputForm label={"Model"} name={"model"} required fullwidth error={errors.model?.message} />
                            <InputForm label={"Manufacture"} name={"manufacture"} required fullwidth/>
                        </Grid>
                        <Button disabled={isProgress} type={"submit"} variant={"contained"} fullWidth
                                sx={{padding: "12px 0"}}>
                            {isProgress ? <CircularProgress sx={{mr: "15px", color: "red"}}/>
                                : <Add sx={{mr: '5px'}}/>
                            }
                            Add Mouse
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default AddMouseForm;

