import {useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import AddKeyboardForm from "./AddKeyboardForm";
import AddMonitorForm from "./AddMonitorForm";
import AddMouseForm from "./AddMouseForm";

const AddItem = ({showSnack}) => {

    const [itemSelectValue, setItemSelectValue] = useState('')

    const change = (e) => {
        setItemSelectValue(e.target.value)
        console.log(e.target.value)
    }

    const AddItemForm = () => {
      switch (itemSelectValue){
          case "mouse": return <AddMouseForm />
          case "keyboard": return <AddKeyboardForm showSnack={showSnack}/>
          case "monitor": return <AddMonitorForm />
          default: return <div style={{padding:"25px", fontSize:"24px",textAlign:"center"}}>Choose Periphery!</div>
      }
    }

  return (
      <>
          <Box
              pt={8}
              width={"500px"}
              sx={{
                  margin: '0 auto',
                  padding: '20px',
                  backgroundColor:'#fff',
                  borderRadius: '6px'
              }}
          >
              <Box >
                  {/*<TextField variant={"outlined"} label={"Name"}/>*/}
                  <FormControl fullWidth>
                    <InputLabel id="periphery-select-label">Periphery</InputLabel>
                      <Select
                          labelId="periphery-select-label"
                          label="Periphery"
                          value={itemSelectValue}
                          onChange={change}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value="keyboard">Keyboard</MenuItem>
                          <MenuItem value="mouse">Mouse</MenuItem>
                          <MenuItem value="monitor">Monitor</MenuItem>
                      </Select>
                  </FormControl>
                  <div >
                      <AddItemForm />
                  </div>
              </Box>
          </Box>
      </>
  )
}

export default AddItem;

// <TextField variant={"outlined"} label={"Model"} fullWidth name={"model"} value={value} onChange={e=>change(e)} sx={{mb:'15px'}}/>
// <TextField variant={"outlined"} label={"Description"} fullWidth name={"description"} sx={{mb:'15px'}}/>
// <TextField variant={"outlined"} label={"Country"} fullWidth name={"country"} sx={{mb:'15px'}}/>
// <TextField variant={"outlined"} label={"Price"} fullWidth name={"price"} sx={{mb:'15px'}}/>
// <Button type={"submit"} variant={"contained"} fullWidth sx={{mt:'15px'}}><Add sx={{mr:'5px'}}/> Add</Button>