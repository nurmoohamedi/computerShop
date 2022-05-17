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
    size: yup.string().required(),
    resolution: yup.string(),
    refreshRate: yup.string()
})

const AddMonitorForm = ({}) => {

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
                <Typography mb={2} variant={"h4"}>Monitor Form</Typography>
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(addItem)}>
                        <Grid container spacing={1}>
                            <InputForm {...methods.register} label={"Model"} name={"model"} required fullwidth error={errors.model?.message} />
                            <InputForm label={"Size"} name={"size"} required fullwidth/>
                            <InputForm label={"Resolution"} name={"resolution"}/>
                            <InputForm label={"Refresh Rate"} required name={"refreshRate"}/>
                        </Grid>
                        <Button disabled={isProgress} type={"submit"} variant={"contained"} fullWidth
                                sx={{padding: "12px 0"}}>
                            {isProgress ? <CircularProgress sx={{mr: "15px", color: "red"}}/>
                                : <Add sx={{mr: '5px'}}/>
                            }
                            Add Monitor
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default AddMonitorForm;

