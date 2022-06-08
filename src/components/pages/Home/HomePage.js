import {Box, Container, Grid, Typography} from "@mui/material";
import * as React from "react";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";

import styles from "./HomePage.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Autoplay, Pagination, Navigation} from "swiper";


import soska from '../../../assets/img/soska_copy.jpg'
import wall from '../../../assets/img/wall.png'
import wall2 from '../../../assets/img/wall2.jpg'

import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={styles.home}>

            <section className={styles.showcase}>
                <div className={styles.showcase_text}>
                    <h1>CБОРКА ИГРОВЫХ КОМПЬЮТЕРОВ</h1>
                    <p>Качественно, доступно, с гарантией.</p>
                    <button className={styles.btn}>Заказать сборку</button>
                </div>
                <video
                    src="https://www.technodom.kz/under/t-gaming/img/Main_green1.mp4"
                    autoPlay loop muted
                />
            </section>

            <section className={styles.service}>
                <h1>Мы предлагаем</h1>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            // autoplay: {
                            //     delay: 2500,
                            //     disableOnInteraction: false,
                            // },
                            // pagination: true
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {/*<Grid container>*/}

                    {/*<Grid item xs={12} md={2.4}>*/}
                    <SwiperSlide>
                        <div className={styles.service_item}>
                            <img src="https://www.technodom.kz/under/t-gaming/img/i1.png" alt="Item"/>
                            <div className={styles.item_title}>Ассортимент</div>
                            <div className={styles.item_text}>Широкий выбор комплектующих от мировых
                                лидеров-производителей по доступным ценам
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} md={2.4}>*/}
                    <SwiperSlide>
                        <div className={styles.service_item}>
                            <img src="https://www.technodom.kz/under/t-gaming/img/i2.png" alt="Item"/>
                            <div className={styles.item_title}>Оплата</div>
                            <div className={styles.item_text}>Любой вид оплаты, онлайн рассрочка на 12 месяцев за 5
                                минут!
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} md={2.4}>*/}
                    <SwiperSlide>
                        <div className={styles.service_item}>
                            <img src="https://www.technodom.kz/under/t-gaming/img/i3.png" alt="Item"/>
                            <div className={styles.item_title}>Совместная сборка</div>
                            <div className={styles.item_text}>Возможность участия в процессе сборки компьютера</div>
                        </div>
                    </SwiperSlide>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} md={2.4}>*/}
                    <SwiperSlide>
                        <div className={styles.service_item}>
                            <img src="https://www.technodom.kz/under/t-gaming/img/i4.png" alt="Item"/>
                            <div className={styles.item_title}>Доставка</div>
                            <div className={styles.item_text}>Бесплатная и надежная экспресс доставка по Казахстану
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} md={2.4}>*/}
                    <SwiperSlide>
                        <div className={styles.service_item}>
                            <img src="https://www.technodom.kz/under/t-gaming/img/i5.png" alt="Item"/>
                            <div className={styles.item_title}>Услуги</div>
                            <div className={styles.item_text}>Профессиональная сборка, кастомизация и разгон.
                                Индивидуальный подбор
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*</Grid>*/}
                    {/*</Grid>*/}
                </Swiper>
            </section>

            <Container sx={{p: '15px'}} className={styles.why_block}>

                <h1>Почему мы?</h1>

                <Box
                    sx={{
                        height: '400px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px'

                    }}
                    className={styles.anim_block}
                >
                    <Box
                        sx={{maxWidth: '600px', textAlign: 'left', color: '#fff'}}
                    >
                        <Typography variant={'h3'} sx={{fontWeight: '800'}}>
                            <span>01</span>
                            <br/>
                            Комплектующие
                        </Typography>
                        <Box sx={{mt: '25px'}}>
                            Мы являемся официальными партнерами таких компаний как Intel, Nvidia, Asus, Gigabyte, AMD,
                            Transcend, MSI, Palit, Kingston, TeamGroup, NZXT, beQuiet, Asrock и другие. Использование
                            только
                            самых известных брендов. Тщательный отбор самых лучших деталей. Гарантия 100% совместимости
                            деталей и ПО
                        </Box>
                    </Box>
                </Box>

                <Grid container mt={0} spacing={1}>
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                height: '330px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '6px'
                            }}
                            className={styles.anim_block + " " + styles.anim_block1}
                        >
                            <Box
                                sx={{
                                    color: '#fff', textAlign: 'left', maxWidth: '400px'
                                }}
                            >
                                <Typography variant={'h3'} fontWeight={800}>02</Typography>
                                <Typography variant={'h4'} sx={{fontWeight: '800'}}>
                                    Гарантия
                                </Typography>
                                <Typography sx={{fontWeight: '500', fontSize: '14px', mt: '20px'}}>
                                    Гарантия до 3х лет на комплектующие.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                height: '330px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '6px'
                            }}
                            className={styles.anim_block + " " + styles.anim_block2}
                        >
                            <Box
                                sx={{
                                    mt: '40px',
                                    color: '#fff', textAlign: 'right', maxWidth: '400px'
                                }}
                            >
                                <Typography variant={'h3'} fontWeight={800}>03</Typography>
                                <Typography variant={'h4'} sx={{fontWeight: '800'}}>
                                    Тестирование <br/> и поддержка
                                </Typography>
                                <Typography sx={{fontWeight: '500', fontSize: '14px', mt: '20px'}}>
                                    Тщательная проверка комплектующих на всех этапах работы. Все компьютеры проходят
                                    комплексное стресс-тестирование. Сервисное обслуживание аппаратной части.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container mt={0} spacing={1}>
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                height: '330px',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: '6px'
                            }}
                            className={styles.anim_block + " " + styles.anim_block3}
                        >
                            <Box
                                sx={{
                                    mt: '40px',
                                    color: '#fff', textAlign: 'left', maxWidth: '400px'
                                }}
                            >
                                <Typography variant={'h3'} fontWeight={800}>04</Typography>
                                <Typography variant={'h4'} sx={{fontWeight: '800'}}>
                                    Лояльность
                                </Typography>
                                <Typography sx={{fontWeight: '500', fontSize: '14px', mt: '20px'}}>
                                    Индивидуальный подход к каждому клиенту. Мы создаем системы с учетом высоких
                                    требований геймеров и энтузиастов, стараемся делать качественные вещи, которые
                                    позволяют покупателю наслаждаться игровым процессом в полном объеме.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                // pr: '25px',
                                height: '330px',
                                display: 'flex',
                                flexDirection: 'column',
                                // justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '6px'
                            }}
                            className={styles.anim_block + " " + styles.anim_block4}
                        >
                            <Box
                                sx={{
                                    mt: '40px',
                                    color: '#fff', textAlign: 'right', maxWidth: '400px'
                                }}
                            >
                                <Typography variant={'h3'} fontWeight={800}>05</Typography>
                                <Typography variant={'h4'} sx={{fontWeight: '800'}}>
                                    Преимущества
                                </Typography>
                                <Typography sx={{fontWeight: '500', fontSize: '16px', mt: '20px'}}>
                                    Выбирая нас вы всегда можете рассчитывать на гибкую систему скидок, выгодные
                                    предложения и лояльный подход
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <div className="slider-wrapper">

                    <h1 className={styles.item_title} style={{marginTop: '50px'}}>Наши работы</h1>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}

                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={true}
                        loop={true}
                        speed={1000}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.slide_img}>
                                    <img src="https://www.technodom.kz/under/t-gaming/img/rectangle2.png" alt="works"/>
                                </div>
                                <div className={styles.slide_inner}>
                                    <div>
                                        <h4><span>01.</span> Computer</h4>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Процессор:</td>
                                                <td>AMD Ryzen 9-5900X</td>
                                            </tr>
                                            <tr>
                                                <td>Материнская плата:</td>
                                                <td>Gigabyte X570 AORUS PRO</td>
                                            </tr>
                                            <tr>
                                                <td>Видеокарта:</td>
                                                <td>Palit RTX 3090 GAMINGPRO OC 24GB</td>
                                            </tr>
                                            <tr>
                                                <td>Оперативная память:</td>
                                                <td>Kingston HyperX Fury RGB 16GB 3600Mhz 1000W</td>
                                            </tr>
                                            <tr>
                                                <td>Блок питания:</td>
                                                <td>Gigabyte ATX 80 PLUS Gold</td>
                                            </tr>
                                            <tr>
                                                <td>Кейс:</td>
                                                <td>Cougar Conquer MidTower, window, Orange mATX</td>
                                            </tr>
                                            <tr>
                                                <td>Система жидкостного охлаждения:</td>
                                                <td>для CPU ID-COOLING ZOOMFLOW 360XT</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        {/*<NavLink to={"/store"} className={styles.btn}>*/}
                                        {/*    To Store*/}
                                        {/*</NavLink>*/}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.slide_img}>
                                    <img src="https://www.technodom.kz/under/t-gaming/img/1.png" alt="works"/>
                                </div>
                                <div className={styles.slide_inner}>
                                    <div>
                                        <h4><span>02.</span> Computer</h4>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Процессор:</td>
                                                <td>Intel Core i9-11900KF</td>
                                            </tr>
                                            <tr>
                                                <td>Материнская плата:</td>
                                                <td>Asus ROG STRIX Z590-A WIFI</td>
                                            </tr>
                                            <tr>
                                                <td>Видеокарта:</td>
                                                <td>Asus EKWB GeForce RTX 3070 8GB</td>
                                            </tr>
                                            <tr>
                                                <td>Оперативная память:</td>
                                                <td>G.SKILL Trident Z NEO 32GB 3600Mhz</td>
                                            </tr>
                                            <tr>
                                                <td>Блок питания:</td>
                                                <td>850W Asus ROG Thor 80 PLUS Platinum</td>
                                            </tr>
                                            <tr>
                                                <td>Кейс:</td>
                                                <td>Asus ROG Strix Helios</td>
                                            </tr>
                                            <tr>
                                                <td>Кастомная:</td>
                                                <td>СЖО</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.slide_img}>
                                    <img src="https://www.technodom.kz/under/t-gaming/img/rectangle4.png" alt="works"/>
                                </div>
                                <div className={styles.slide_inner}>
                                    <div>
                                        <h4><span>03.</span> Computer</h4>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Процессор:</td>
                                                <td>Intel Core i5-11500</td>
                                            </tr>
                                            <tr>
                                                <td>Материнская плата:</td>
                                                <td>Gigabyte B560M AORUS PRO AX</td>
                                            </tr>
                                            <tr>
                                                <td>Видеокарта:</td>
                                                <td>Gigabyte RTX 3060 GAMING OC 12GB</td>
                                            </tr>
                                            <tr>
                                                <td>Оперативная память:</td>
                                                <td>Kingston HyperX Fury RGB 32GB 3733Mhz</td>
                                            </tr>
                                            <tr>
                                                <td>Блок питания:</td>
                                                <td>650W Thermaltake Toughpower Grand RGB</td>
                                            </tr>
                                            <tr>
                                                <td>Кейс:</td>
                                                <td>GameMax Panda T802</td>
                                            </tr>
                                            <tr>
                                                <td>Кулер:</td>
                                                <td>для CPU Xigmatek Galaxy II Elite</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.slide_img}>
                                    <img src="https://www.technodom.kz/under/t-gaming/img/rectangle3.png" alt="works"/>
                                </div>
                                <div className={styles.slide_inner}>
                                    <div>
                                        <h4><span>04.</span> Computer</h4>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Процессор:</td>
                                                <td>AMD Ryzen 5 3600</td>
                                            </tr>
                                            <tr>
                                                <td>Материнская плата:</td>
                                                <td>Gigabyte B450M S2H V2</td>
                                            </tr>
                                            <tr>
                                                <td>Видеокарта:</td>
                                                <td>Asus GTX 1660 Phoenix</td>
                                            </tr>
                                            <tr>
                                                <td>Оперативная память:</td>
                                                <td>Patriot Viper Steel 8GB 3200Mhz</td>
                                            </tr>
                                            <tr>
                                                <td>Блок питания:</td>
                                                <td>700W Gamemax VP-700-M-RGB</td>
                                            </tr>
                                            <tr>
                                                <td>Кейс:</td>
                                                <td>1STPlayer AR</td>
                                            </tr>
                                            <tr>
                                                <td>Кулер:</td>
                                                <td>для CPU Jonsbo CR-1000</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </Container>
        </div>
    )
}

export default HomePage;