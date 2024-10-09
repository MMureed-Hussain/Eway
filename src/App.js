import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { PaymentDetails } from "./Components/PaymentDetails";
import { PaymentMethods } from "./Components/PaymentMethods";
import { EwayPayment } from "./Components/EwayPayment";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentDetails />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/eway-payment" element={<EwayPayment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
