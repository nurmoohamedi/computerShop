import {Grid, TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";

const InputForm = ({type, name, label, required, fullwidth, helpertext, error}) => {

    const { control, register } = useFormContext();

    // if (fullwidth)
    //     return (
    //         <Grid item xs={12}>
    //             <TextField fullWidth name={name} variant={"standard"} label={label} required={required} helperText={helpertext}/>
    //         </Grid>
    //     )

    return (
        <Grid item xs={12} sm={!fullwidth && 6} >
            <Controller
                control={control}
                name={name}
                render={({field:{onChange}}) =>
                    <TextField onChange={onChange} {...register(name)} type={type} fullWidth label={label} required={required} helperText={helpertext}/>
                }
            />
            <p>{error}</p>
        </Grid>
    )
}
export default InputForm;