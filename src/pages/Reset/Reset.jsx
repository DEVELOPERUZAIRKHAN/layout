import styles from "./Reset.module.css"
import image from "../../images/Reset 1.png"
export default function Reset(){


    return (
        <div className={styles.main}>

            <div className={styles.imageContainer}>
                <img style={{width:"150px"}} className={styles.image} src={image} alt="" />
            </div>


            <div className={styles.section}>
                <h2 className={styles.mainHeading}>
                    Reset password
                </h2>
                <p className={styles.mainPara}>Please type something you will remember</p>


                <div className={styles.inputContainer}>
                <label className={styles.label} >
                    Enter new password
                </label>
                    <input placeholder="Enter new password"  className={styles.input} type="password" name="myEmail" id="myEmail" />
                </div>
                <div className={styles.inputContainer}>
                <label className={styles.label} >
                    Confirm new password
                </label>
                    <input placeholder="Confirm new password"  className={styles.input} type="password" name="myEmail" id="myEmail" />
                </div>
                <button className={styles.button}>Submit</button>
            </div>

        </div>
    )
}