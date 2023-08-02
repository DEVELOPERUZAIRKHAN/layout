import styles from "./FormOne.module.css";
import image from "../../images/Bell.png";
import imageTwo from "../../images/Caret down.png";
import InputField from "../../components/InputField/InputField";
export default function FormOne() {
  return (
    <div className={styles.main}>
    <div className={styles.outerContainer}>

      <div className={styles.bellContainer}>
        <img className={styles.bell} src={image} alt="" srcset="" />
      </div>
      <h1 className={styles.mainHeading}>Lorem Ipsum Dolar</h1>
      <p className={styles.mainPara}>
        Sed maximus condimentum accumsan. Fusce rhoncus laoreet justo, quis
        mattis tellus pulvinar sit amet.
      </p>
      <div className={styles.dropContainer}>
        <div className={styles.drop}>
          <div className={styles.text}>Trade</div>
          <img className={styles.icon} src={imageTwo} alt="" />
        </div>
        <div className={styles.drop}>
          <div className={styles.text}>Experience</div>
          <img className={styles.icon} src={imageTwo} alt="" />
        </div>
      </div>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="First name and middle initial" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Last name" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="SSN" type="text" />
      </div>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Address" type="text" />
      </div>
      <div
        className={styles.containerBox}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div className={styles.container}>
          <InputField icon="something" placeholder="State" type="text" />
        </div>
        <div className={styles.container}>
          <InputField placeholder="Zip" type="text" />
        </div>
      </div>
      <div
        className={styles.containerBox}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "20px" }} className={styles.cityContainer}>
          <InputField icon="something" placeholder="City" type="text" />
        </div>
      </div>
      <p className={styles.p}>Enter Your Date of Birth</p>

      <div
        className={styles.containerBox}
        style={{ width: "90%", margin: "0 auto", marginBottom:"37px" }}
      >
        <div className={styles.container}>
          <InputField icon="something" placeholder="Month" type="text" />
        </div>
        <div className={styles.container}>
          <InputField  placeholder="Date" type="text" />
        </div>
        <div className={styles.container}>
          <InputField placeholder="Year" type="text" />
        </div>
      </div>

    
      <div style={{ width: "90%", margin: "0 auto" }}>
        <InputField placeholder="Email" type="email" />
      </div>
    
      <div style={{ width: "90%", margin: "0 auto", marginBottom:"40px" }}>
        <InputField placeholder="Phone number" type="email" />
      </div>

        <p className={styles.finalP}>
        <span style={{
            color:"#F00"
        }}>*</span>All fields need to be filled in, before moving on.
        </p>


        <button className={styles.button}>Next</button>
    </div>
    </div>
  );
}
