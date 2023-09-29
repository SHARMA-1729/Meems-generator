import {Routes,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Medit from "./Edit"
import Mhome from "./Home";
function App() {
  return (
    <div className="container" >
     <h1 style={{color:"red", fontWeight:"bold"}}>Meme Generator</h1>
     <Routes>
    <Route path="sharma-1729.github.io/Meems-generator/" element={<Mhome/>} />
    <Route path="/edit" element={<Medit/>}/>
     </Routes>
    </div>
    
  );
}
export default App;
