import styles from "./App.module.css"
import{Routes,Route,BrowserRouter } from "react-router-dom"
import Splash from "./pages/Splash/Splash";
import Language from "./pages/Language/Language";
function App() {
  return (
    <div className={styles.background}>

  <div className={styles.main}>
<BrowserRouter>
  <Routes>
    <Route path="/splash" exact element={<Splash/>}/>
    
    <Route path="/language" exact element={<Language/>}/>

  </Routes>
</BrowserRouter>

    </div>
  </div>


  );
}

export default App;
