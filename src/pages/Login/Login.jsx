import styles from "./Login.module.css"
import image from "../../images/Ball.png"
export default function Login(){


    return(
        <div className={styles.main}>
            <div className={styles.ballContainer}>
                <img className={styles.ball} src={image} alt="" />
            </div>
        <div className={styles.headingContainer}>
            
            <h1 className={styles.mainHeading}> Welcome</h1>
        </div>

        <div className={styles.section}>
                    <h2 className={styles.secondaryHeading}>
                        Log in
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
                        Password
                    </label>
                    <input placeholder="Enter your password" className={styles.password} type="password" name="" id="" />
                                </div>


                <p className={styles.forgot}>Forgot your password?</p>

                <button className={styles.loginButton}>
                    Log in
                </button>


                <div className={styles.signupContainer}>
                    <div className={styles.signupBack}></div>
                    <a className={styles.signup} href="#">Don't have an account? Sign up</a>
                </div>
        </div>

        </div>
    )
};