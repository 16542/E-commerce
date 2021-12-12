import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";
function App() {
  return( 
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/pay"  element={<Pay/>}  />
          <Route path="/success" element={<Success/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
  ;
}

export default App;