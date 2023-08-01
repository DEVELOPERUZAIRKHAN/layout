import styles from "./InputField.module.css"
import image from "../../images/Caret down.png"
export default function InputField ({placeholder,type,icon}){

return(<>
        {
            icon?(
                <div style={{position:"relative"}}>

    <input className={styles.input} type={type} placeholder={placeholder} />
            <img style={{position:"absolute",top:"11px",right:"5px"}} className={styles.image} src={image} alt="" />
            
                </div>

            ):(

    <input className={styles.input} type={type} placeholder={placeholder} />
            )
        }
</>
)

};