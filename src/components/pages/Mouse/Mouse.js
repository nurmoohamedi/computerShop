import {Grid, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import styles from "../Keyboard/Keyboard.module.css";

const Mouse = ({mouse, addToBasket, showSnack}) => {

    const [isHover, setIsHover] = useState(false);
    const onCLick = () => {
        addToBasket(mouse);
        showSnack("success", `Keyboard with id - ${mouse.id} added to Cart successfully!`)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className={styles.item}
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
            >
                <div className={styles.item_img}>
                    <img src={mouse.img.small} alt="Small IMG"/>
                </div>
                <p className={styles.item_name}>
                    {mouse.description}
                </p>
                <div className={styles.item_price}>
                    {mouse.price.toLocaleString('ru')}<span> ₸</span>
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

const MouseList = ({mouses, addToBasket, showSnack}) => {

    console.log(mouses)
    const monitorsList = mouses.map(m => {
        return (
            <Mouse
                key={m.id}
                mouse={m}
                addToBasket={addToBasket}
                showSnack={showSnack}
            />
        )
    })


    return (
        <>
            {/*<Typography variant={"h4"}>Keyboards</Typography>*/}
            {
                !mouses.length && <Typography variant={"h5"}>No Data!</Typography>
            }
            <Grid container spacing={1}>
                {
                    monitorsList
                }
            </Grid>
        </>
    )
}

export default MouseList;

