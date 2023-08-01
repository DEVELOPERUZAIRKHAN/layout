import styles from "./Updated.module.css"
import {PiCheckCircleFill} from "react-icons/pi"
export default function Updated(){


    return(
    
     <div className={styles.main}>
        <h2 className={styles.mainHeading}>
            Password updated
        </h2>
        <PiCheckCircleFill className={styles.logo}/>
        <p className={styles.para}>Your password has been updated!</p>
        <button className={styles.continue}>Continue</button>
     </div>
    )
}