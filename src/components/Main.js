import './../App.css';
import {Box, Container, Grid} from "@mui/material";
import * as React from "react";
import {Route, Routes} from "react-router-dom";
import AddItem from "./pages/AddItem/AddItem";
import Sidebar from "./../components/pages/Sidebar/Sidebar";

import Monitor from "./../components/pages/Monitor/Monitor";
import Mouse from "./../components/pages/Mouse/Mouse";
import KeyboardContainer from "./../components/pages/Keyboard/KeyboardContainer";

function Main({showSnack}) {


    return (
        <>
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        display: 'flex',*/}
            {/*        flexDirection: 'column',*/}
            {/*        minHeight: '100vh',*/}
            {/*        mb: "25px"*/}
            {/*    }}*/}
            {/*>*/}
            {/*<Header orderCount={order.length}/>*/}
            <Container sx={{p: '25px 10px'}}>
                <Grid container component={"main"}>
                    <Grid item
                          xs={12} sm={4} md={3}
                        // mt={3}
                        // sx={{maxWidth:'00px'}}
                        mb={2}
                    >
                        <Sidebar/>
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={8} md={9}
                        // mt={3}
                        // minHeight={'200px'}
                        // bgcolor={'background.paper'}
                        borderRadius={'10px'}
                        sx={{
                            // backgroundColor:''
                            // border: '2px solid blue',
                        }}>
                        <Box className="App">
                            <Routes>
                                {/*<Route path={"/"} element={<HomePage/>}/>*/}
                                <Route path={"keyboard"} element={<KeyboardContainer showSnack={showSnack}/>}/>
                                <Route path={"monitor"} element={<Monitor/>}/>
                                <Route path={"mouse"} element={<Mouse/>}/>
                                <Route path={"addItem"} element={<AddItem showSnack={showSnack}/>}/>
                            </Routes>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
            {/*</Box>*/}

        </>
    );
}

export default Main;