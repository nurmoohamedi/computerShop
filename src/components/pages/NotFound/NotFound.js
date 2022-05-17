import notFound from "./../../../assets/gifs/404.gif"
import styles from "./NotFound.module.css"
import {NavLink} from "react-router-dom";

const NotFound = () => {

    return (
        <div className={styles.error}>
            <img src={notFound} alt="Not Found"/>
            <h3>
                Oops... Something Wrong!
            </h3>

            <div className={styles.spinner}></div>

            <NavLink to={"/"} className={styles.btn}>Return to Home</NavLink>
        </div>
    )

}

export default NotFound;