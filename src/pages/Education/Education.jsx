import styles from "./Education.module.css";
import image from "../../images/Bell.png";
import imageTwo from "../../images/Caret down.png";
import arrow from "../../images/Arrow - Left.png"
import InputField from "../../components/InputField/InputField";
export default function Education() {
  return (
    <div className={styles.main}>
    <div className={styles.container}>

      <div className={styles.bellContainer}>

<div className={styles.arrowContainer}>
        <img className={styles.arrow} src={arrow} alt="" srcset="" />
</div>
        <img className={styles.bell} src={image} alt="" srcset="" />
      </div>
      <h1 className={styles.mainHeading}>Education Details</h1>
      <p className={styles.mainPara}>
      High School
      </p>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Name of school" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="# of years completed" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Program of study" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Degree / Diploma recieved" type="text" />
      </div>
      <p className={styles.mainPara}>
      College / University
      </p>
   
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Name of college / university" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="# of years completed" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Program of study" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Degree / Diploma received" type="text" />
      </div>







      <p className={styles.mainPara}>
      Trade School
      </p>
   
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Name of trade school" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="# of years completed" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Program of study" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Degree / Diploma received" type="text" />
      </div>

        <button className={styles.button}>Next</button>
    </div>
    </div>
  );
}
