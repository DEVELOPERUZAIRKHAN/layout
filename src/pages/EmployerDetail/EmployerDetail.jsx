import styles from "./EmployerDetail.module.css";
import image from "../../images/Bell.png";
import imageTwo from "../../images/Caret down.png";
import arrow from "../../images/Arrow - Left.png"
import InputField from "../../components/InputField/InputField";
export default function EmployerDetail() {
  return (
    <div className={styles.main}>
    <div className={styles.outerContainer}>

      <div className={styles.bellContainer}>


<div className={styles.arrowContainer}>
        <img className={styles.arrow} src={arrow} alt="" srcset="" />
</div>
        <img className={styles.bell} src={image} alt="" srcset="" />
      </div>
      <h1 className={styles.mainHeading}>Employer's Details</h1>
  
      <div className={styles.dropContainer}>
        <div className={styles.drop}>
          <div className={styles.text}>From</div>
          <img className={styles.icon} src={imageTwo} alt="" />
        </div>
        <div className={styles.drop}>
          <div className={styles.text}>To</div>
          <img className={styles.icon} src={imageTwo} alt="" />
        </div>
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Employer's name" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Address" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="E-mail" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="City and zip code" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Telephone" type="text" />
      </div>
      
      



      <div
        className={styles.containerBox}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div className={styles.container}>
          <InputField placeholder="Start pay" type="text" />
        </div>
        <div className={styles.container}>
          <InputField placeholder="Last pay" type="text" />
        </div>
      </div>
      
      
      
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Job title" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Reason for leaving" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Describe the work you did" type="text" />
      </div>
    
   


        <button className={styles.buttonSec}>+ Add another employer</button>
        <button className={styles.button}>Next</button>
    </div>
    </div>
  );
}