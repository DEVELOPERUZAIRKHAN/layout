import styles from "./Otp.module.css"
import image from "../../images/Forgot 1.png"
export default function Otp(){


    return (
        <div className={styles.main}>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt="" />
            </div>


            <div className={styles.section}>
                <h2 className={styles.mainHeading}>
                    Forgot password?
                </h2>
                <p className={styles.mainPara}>Enter the email for verificatio process. We will send 4 digit code to your email.</p>


                <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="myEmail">
                    Email address
                </label>
                    <input placeholder="Enter email address"  className={styles.email} type="email" name="myEmail" id="myEmail" />
                </div>
                <button className={styles.button}>Submit</button>
            </div>

        </div>
    )
}