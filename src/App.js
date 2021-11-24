import './App.css';
import Register from "./components/Register"
import Welcome from "./components/Welcome"
import ShowQRcode from "./components/ShowQRcode"
import UploadId from "./components/UploadId"
import ShowId from "./components/ShowId"
import Admin from "./components/Admin"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={ <Register /> } />
      <Route path="/welcome/:userid" element={ <Welcome /> } />
      <Route path="/show_qr_code" element={ <ShowQRcode /> } />
      <Route path="/upload_id" element={ <UploadId /> } />
      <Route path="/show_id" element={ <ShowId /> } />
      <Route path="/admin" element={ <Admin /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
