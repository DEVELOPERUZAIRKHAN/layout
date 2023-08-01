import styles from "./LanguageComponent.module.css";
import {FaCheck} from "react-icons/fa"
export default function LanguageComponent ({id,isChecked,onClick,lang,heading}){

    return(

        <div style={isChecked?{border: ".5px solid #061F5C",color:"#061F5C"}:{border:".5px solid #19191988",color:"#191919"}} className={styles.main} onClick={_=>onClick(id)} >
    <div className={styles.secondary}>
        <h3 className={styles.heading}>{heading}</h3>
        {
            lang&&
        <p className={styles.lang}>{lang}</p>
        }
    </div>
    <div style={isChecked?{border:"1px solid #061F5C", backgroundColor:"#061F5C"}:{border:"1px solid #191919"}} className={styles.tick} >
        <input className={styles.checkBox} checked={isChecked} type="checkbox" name="mylang" id="mylang" />
       {
        isChecked    &&        <FaCheck className={styles.icon}/>
       }
        
    </div>
    </div>

)

}