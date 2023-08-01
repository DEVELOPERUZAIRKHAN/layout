import styles from "./Splash.module.css"
import image1 from "../../images/Logomark2.png"
import image from "../../images/Logomark.png"
export default function Splash(){



    return(
<div className={styles.main}>
    <img className={styles.backLogo} src={image} alt="" />
<img className={styles.mainLogo} src={image1} alt="main_pic" />

<div className={styles.pContainer}>
<p className={styles.footer}> APPLY ANY TIME ANYWHERE</p>
</div>
</div>
    )
}