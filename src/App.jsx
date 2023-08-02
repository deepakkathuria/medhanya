import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const ContactUs = React.lazy(() => import("./ContactUs"));
const ProductsPage = React.lazy(() => import("./ProductsPage"));
const Vison = React.lazy(() => import("./Vision"));
import SweetenerDetailPage from "./SweetenerDetailPage";
import ExcipentDetailPage from "./ExcipentDetailPage";
import OthersDetailPage from "./OthersDetailPage";
import AcidityRegulatorDetailPage from "./AcidityRegulatorDetailPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/vision" element={<Vison />} />
          <Route path="/products/Sweeteners" element={<SweetenerDetailPage/>}/>
          <Route path="/products/Excipients" element={<ExcipentDetailPage/>}/>
          <Route path="/products/Others" element={<OthersDetailPage/>}/>
          <Route path="/products/Acidity%2520Regulators" element={<AcidityRegulatorDetailPage/>}/>





        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
