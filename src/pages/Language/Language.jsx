import { useState } from "react"
import LanguageComponent from "../../components/LanguageComponent/LanguageComponent"
import styles from "./Language.module.css"
export default function Language(){
const [isChecked,setIsChecked]= useState([false,false,false])
function handleCheck(id){
setIsChecked(isChecked.map((item,loc)=>{
    
    if(id===loc){
        return true
    }
    else{
        return false
    }
}))

}

return(

    <div className={styles.main}>
    <h2 className={styles.mainHeading}>
        Choose your language
    </h2>

    <div className={styles.languageContainer}>

    <LanguageComponent onClick={handleCheck} id={0} isChecked={isChecked[0]} heading="English"  />
    <LanguageComponent onClick={handleCheck} id={1} isChecked={isChecked[1]} lang="Spanish" heading="Espanol" />
    <LanguageComponent onClick={handleCheck} id={2} isChecked={isChecked[2]} lang="French" heading="Francise" />
    </div>

    <div className={styles.buttonContainer}>
    <button className={styles.button}>Continue</button>
    </div>
</div>

)
};