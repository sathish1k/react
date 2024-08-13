import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout";
import Home from "./Home";
import Mobiles from "./Mobiles";
import Offers from "./Offers";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Vivo from "./vivo";
import Iphone from "./iphone";
import Oneplus from "./oneplus";
import Oppo from "./oppo";
import Nokia from "./nokia";
import Iqoo from "./iqoo";
import Realme from "./realme";
import Redmi from "./redmi";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Mobiles" element={<Mobiles />} />
          <Route path="Offers" element={<Offers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="vivo" element={<Vivo/>} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="oneplus" element={<Oneplus/>} />
          <Route path="oppo" element={<Oppo />} />
          <Route path="nokia" element={<Nokia />} />
          <Route path="iqoo" element={<Iqoo />} />
          <Route path="realme" element={<Realme />} />
          <Route path="redmi" element={<Redmi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);