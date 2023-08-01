import styles from "./Deposit.module.css";
import image from "../../images/Bell.png";
import imageTwo from "../../images/Caret down.png";
import arrow from "../../images/Arrow - Left.png"
import InputField from "../../components/InputField/InputField";
export default function Deposit() {
  return (
    <div className={styles.main}>
      <div className={styles.bellContainer}>

<div className={styles.arrowContainer}>
        <img className={styles.arrow} src={arrow} alt="" srcset="" />
</div>
        <img className={styles.bell} src={image} alt="" srcset="" />
      </div>
      <h1 className={styles.mainHeading}>Lorem Ipsum Dolar</h1>


  <p className={styles.primaryPara}>
  Sed maximus condimentum accumsan. Fusce rhoncus laoreet justo, quis mattis tellus pulvinar sit amet.
  </p>

      <div style={{ width: "335px", margin: "0 auto" }}>
        <InputField placeholder="What positions are you applying for?" type="text" />
      </div>



        <div className={styles.questionBox}>
            <p className={styles.question}>Are you a citizen of the U.S.?</p>
            <div className={styles.buttonBox}>
                <button style={{backgroundColor:"#061F5C",color:"#fff",border:"1px solid #061F5C"}} className={styles.btn}>Yes</button>
                <button className={styles.btn} >No</button>
            </div>
        </div>






        <div className={styles.questionBox}>
            <p className={styles.question}>If no, are you authorized to work in U.S?</p>
            <div className={styles.buttonBox}>
                <button className={styles.btn}>Yes</button>
                <button className={styles.btn} >No</button>
            </div>
        </div>



        <div className={styles.questionBox}>
            <p className={styles.question}>Have you ever been convicted of a felony?</p>
            <div className={styles.buttonBox}>
                <button className={styles.btn}>Yes</button>
                <button className={styles.btn} >No</button>
            </div>
        </div>


        <div className={styles.questionBox}>
            <p className={styles.question}>Have you ever received compensation or medical benefits under workers compensation?</p>
            <div className={styles.buttonBox}>
                <button className={styles.btn}>Yes</button>
                <button className={styles.btn} >No</button>
            </div>
        </div>



        <div className={styles.questionBox}>
            <p className={styles.question}>Do you have any other trade skills, training, or experience which may help you qualify for other job positions?</p>
            <div className={styles.buttonBox}>
                <button className={styles.btn}>Yes</button>
                <button className={styles.btn} >No</button>
            </div>
        </div>


        <p style={{width:"335px",margin:"10px auto"}} className={styles.question}>
            Other skills
        </p>
        <div className={styles.inputBox}>
        <div className={styles.inputContainer} >

        <InputField/>
        </div>
        <div className={styles.inputContainer} >

        <InputField/>
        </div>
        <div className={styles.inputContainer} >

        <InputField/>
        </div>
        </div>







        <button className={styles.button}>Submit</button>
  
    </div>
  );
}