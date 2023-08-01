import styles from "./Signup.module.css"
import image from "../../images/Ellipse 1.png"
export default function Signup(){

    return(
        <div className={styles.main}>
            <div className={styles.ballContainer}>
                <img className={styles.ball} src={image} alt="" />
            </div>
        <div className={styles.headingContainer}>
            
            <h1 className={styles.mainHeading}> Join Now</h1>
        </div>

        <div className={styles.section}>
                    <h2 className={styles.secondaryHeading}>
                        Sign up
                    </h2>
                    <div className={styles.secondaryAfter}></div>

                <div className={styles.inputSection}>
                    <label className={styles.label} htmlFor="loginEmail">
                        Email address
                    </label>
                    <input placeholder="Enter your email address" className={styles.input} type="email" name="loginEmail" id="loginEmail" />
                </div>
                <div className={styles.inputSection}>
                    <label className={styles.label} htmlFor="loginEmail">
                        Create new password
                    </label>
                    <input placeholder="Enter your password" className={styles.password} type="password" name="" id="" />
                                </div>
                <button className={styles.loginButton}>
                        Sign up
                </button>

        </div>

        </div>
    )
};