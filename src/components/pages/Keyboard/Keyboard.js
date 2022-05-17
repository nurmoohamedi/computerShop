import {Grid, Typography} from "@mui/material";
import styles from "./Keyboard.module.css"
import {useState} from "react";

function KeyboardItem({keyboard, addToBasket, deleteItem, showSnack}) {

    const [isHover, setIsHover] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={4} >
            <div className={styles.item}
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
            >
                <div className={styles.item_img}>
                    <img src={keyboard.img.small} alt="Small IMG"/>
                </div>
                <div className={styles.item_name}>
                    {keyboard.description}
                </div>
                <div className={styles.item_price}>
                    {keyboard.price.toLocaleString('ru')}<span> ₸</span>
                </div>

                {
                    isHover && (
                        <div className={styles.item_buttons}>
                            <button
                                onClick={()=> addToBasket(keyboard)}
                            >Add to Basket</button>
                            <button>Detail</button>
                        </div>
                    )
                }

            </div>
        </Grid>
    );
}


const KeyboardList = ({keyboards, addToBasket, deleteItem, showSnack}) => {

    console.log(keyboards)
    const keyboardsList = keyboards.map(k => {
        return <KeyboardItem
            key={k.id}
            keyboard={k}
            addToBasket={addToBasket}
            deleteItem={deleteItem}
            showSnack={showSnack}
        />
    })


    return (
        <>
            {/*<Typography variant={"h4"}>Keyboards</Typography>*/}
            {
                !keyboards.length && <Typography variant={"h5"}>No Data!</Typography>
            }
            <Grid container spacing={1} >
                {
                    keyboardsList
                }
            </Grid>
        </>
    )
}

export default KeyboardList;