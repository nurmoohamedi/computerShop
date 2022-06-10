import {Grid, Typography} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import styles from "../Keyboard/Keyboard.module.css";
import {useMediaQuery} from "../../common/useMediaQuery";

const Monitor = ({monitor, addToBasket, showSnack}) => {

    const [isHover, setIsHover] = useState(false);
    const onCLick = () => {
        addToBasket(monitor);
        showSnack("success", `Keyboard with id - ${monitor.id} added to Cart successfully!`)
    }

    let isSmallSize = useMediaQuery('(max-width:811px)')

    useEffect(() => {
        if (isSmallSize)
            setIsHover(true);
    }, [isSmallSize])


    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className={styles.item}
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
            >
                <div className={styles.item_img}>
                    <img src={monitor.img.small} alt="Small IMG"/>
                </div>
                <p className={styles.item_name}>
                    {monitor.description}
                </p>
                <div className={styles.item_price}>
                    {monitor.price.toLocaleString('ru')}<span> ₸</span>
                </div>

                {
                    isHover && (
                        <div className={styles.item_buttons}>
                            <button
                                onClick={onCLick}
                            >Add to Cart
                            </button>
                            <button>Detail</button>
                        </div>
                    )
                }

            </div>
        </Grid>
    );
};


const MonitorList = ({monitors, addToBasket, showSnack}) => {

    console.log(monitors)
    const monitorsList = monitors.map(m => {
        return (
            <Monitor
                key={m.id}
                monitor={m}
                addToBasket={addToBasket}
                showSnack={showSnack}
            />
        )
    })


    return (
        <>
            {/*<Typography variant={"h4"}>Keyboards</Typography>*/}
            {
                !monitors.length && <Typography variant={"h5"}>No Data!</Typography>
            }
            <Grid container spacing={1}>
                {
                    monitorsList
                }
            </Grid>
        </>
    )
}

export default MonitorList;

