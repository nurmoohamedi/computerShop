import {TextField} from "@mui/material";

const Search = () => {
    return (
        <TextField
            type={"search"}
            label={'Search'}
            variant={"standard"}
            color={"secondary"}
            fullWidth
            sx={{mb:'20px'}}
        />
    )
}

export default Search;