import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {Grid} from "@mui/material";
import logo from "../../../assets/img/computech3_new.png"
import styles from "./Footer.module.css"
import {Facebook, Instagram, Telegram, Twitter, YouTube} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                // flex: "1",
                py: 3,
                px: 2,
                mt: 'auto',
                // textAlign: 'center',
                // backgroundColor: "#283e6a",
                backgroundColor: "#481173",
                color: "#edeef0",
                // borderRadius: "50px",
                // borderTopLeftRadius: "50px",
                // borderTopRightRadius: "50px",
                // '&::before': {
                //     content: "''",
                //     display: "block",
                //     // marginTop: "250px",
                //     // width: "500px",
                //     height:"25px",
                //     backgroundColor:"red"
                // },
                // backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
        >
            <Container>
                <Grid container className={styles.footer_top}>
                    <Grid item xs={12} sm={9} md={5} className={styles.footer_logo}>
                        <img src={logo} alt="Footer Logo"/>
                        <Box className={styles.footer_text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis cum
                            distinctio dolore, illo impedit incidunt magni maxime molestias, neque nesciunt
                            quibusdam reiciendis voluptates! Doloribus fuga id possimus praesentium
                            ullam?
                        </Box>
                        <Box className={styles.footer_media}>
                            <a href="https://facebook.com">
                                <Facebook />
                            </a>
                            <a href="https://twitter.com">
                                <Twitter />
                            </a>
                            <a href="https://telegram.com">
                                <Telegram />
                            </a>
                            <a href="https://instagram.com">
                                <Instagram />
                            </a>
                            <a href="https://youtube.com">
                                <YouTube />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                        <p className={styles.footer_header}>Products</p>
                        <Box
                            className={styles.footer_links}
                        >
                            <a href="">Monitors</a>
                            <a href="">Keyboards</a>
                            <a href="">Mouse</a>
                            <a href="">Block</a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9} md={3}>
                        <p className={styles.footer_header}>Useful Links</p>
                        <Box
                            className={styles.footer_links}
                        >
                            <a href="">Store</a>
                            <a href="">About Us</a>
                            <a href="">Contact</a>
                            <a href="">Basket</a>
                            <a href="">My Cabinet</a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9} md={1}>
                        <p className={styles.footer_header}>Address</p>
                        <Box
                            className={styles.footer_links}
                        >
                            <a href="#">Auezov, 144A</a>
                            <a href="#">Almaty, Qazaqstan</a>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{padding:'27px 0 10px 0',display:'flex', justifyContent:'space-between', borderTop:'1px solid #aaa', fontSize:'14px'}}>
                    <p >
                        {'Copyright © '}
                        {new Date().getFullYear()}
                        {' '}
                        <Link color="inherit" href="https://mui.com/">
                            Computech
                        </Link>{' . '}
                        All rights reserved
                    </p>
                    <p>
                        Designed By <span className={styles.developer}>Nurmoohamedi</span>.
                    </p>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;