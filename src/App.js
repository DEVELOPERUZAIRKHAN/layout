import styles from "./App.module.css"
import{Routes,Route,BrowserRouter } from "react-router-dom"
import Splash from "./pages/Splash/Splash";
import Language from "./pages/Language/Language";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Forgot from "./pages/Forgot/Forgot";
import Otp from "./pages/Otp/Otp";
import Reset from "./pages/Reset/Reset";
import Updated from "./pages/Updated/Updated";
import FormOne from "./pages/FormOne/FormOne";
import Education from "./pages/Education/Education";
import EmployerDetail from "./pages/EmployerDetail/EmployerDetail";
import FormThree from "./pages/FormThree/FormThree";

function App() {
  return (
    <div className={styles.background}>

  <div className={styles.main}>
<BrowserRouter>
  <Routes>
    <Route path="/splash" exact element={<Splash/>}/>
    <Route path="/language" exact element={<Language/>}/>
    <Route path="/login" exact element={<Login/>}/>
    <Route path="/signup" exact element={<Signup/>}/>
    <Route path="/forgot" exact element={<Forgot/>}/>
    <Route path="/otp" exact element={<Otp/>}/>
    <Route path="/reset" exact element={<Reset/>}/>
    <Route path="/updated" exact element ={<Updated/>}/>
    <Route path="/formone" exact element ={<FormOne/>}/>
    <Route path="/education" exact element ={<Education/>}/>
    <Route path="/employerdetail" exact element ={<EmployerDetail/>}/>
    <Route path="/formthree" exact element ={<FormThree/>}/>

  </Routes>
</BrowserRouter>

    </div>
  </div>


  );
}

export default App;
