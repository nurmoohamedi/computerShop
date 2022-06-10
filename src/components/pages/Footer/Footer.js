import * as React from 'react';
import Box from '@mui/material/Box';
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
                            Computech – it has never been easier to buy cheap computers, and ordering household
                            appliances, electronics and telecommunications equipment has never been as convenient as in
                            the "computech" online store.
                        </Box>
                        <Box className={styles.footer_media}>
                            <a href="https://facebook.com">
                                <Facebook/>
                            </a>
                            <a href="https://twitter.com">
                                <Twitter/>
                            </a>
                            <a href="https://telegram.com">
                                <Telegram/>
                            </a>
                            <a href="https://instagram.com">
                                <Instagram/>
                            </a>
                            <a href="https://youtube.com">
                                <YouTube/>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <p className={styles.footer_header}>Products</p>
                        <Box
                            className={styles.footer_links}
                        >
                            <a href="store/monitor">Monitors</a>
                            <a href="store">Keyboards</a>
                            <a href="store">Mouse</a>
                            <a href="store">Block</a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <p className={styles.footer_header}>Useful Links</p>
                        <Box
                            className={styles.footer_links}
                        >
                            <a href="store">Store</a>
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Basket</a>
                            <a href="#">My Cabinet</a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={1}>
                        <p className={styles.footer_header}>Address</p>
                        <Box
                            className={styles.footer_links}
                        >
                            <a href="#">Auezov, 144A</a>
                            <a href="#">Almaty, Qazaqstan</a>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    className={styles.footer_bottom}
                >
                    <p>
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