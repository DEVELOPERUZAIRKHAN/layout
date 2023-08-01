import styles from "./Otp.module.css"
import image from "../../images/OTP 1.png"
export default function Otp(){


    return (
        <div className={styles.main}>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt="" />
            </div>


            <div className={styles.section}>
                <h2 className={styles.mainHeading}>
                    Please check your email
                </h2>
                <p className={styles.mainPara}>We've sent a code to loremipsum123@gmail.com</p>


                <div className={styles.inputContainer}>

                        <input className={styles.input} type="text" maxLength={1} name="" id="" />
                        <input className={styles.input} type="text" maxLength={1} name="" id="" />
                        <input className={styles.input} type="text" maxLength={1} name="" id="" />
                        <input className={styles.input} type="text" maxLength={1} name="" id="" />
                </div>
                <button className={styles.button}>Submit</button>
            </div>

        </div>
    )
}