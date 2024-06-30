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
import AcidulantsDetailPage from "./AcidulantsDetailPage";
import ThickenersDetailPage from "./ThicknersDetailPage";
import AntioxidantsDetailPage from "./AntioxidantsDetailPage";
import NutritionalSupplementsDetailPage from "./NutritionalSupplementDetailPage";
import VitaminsDetailPage from "./VitaminsDetailPage";
import PreservativesDetailPage from "./PreservativeDetailPge";

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
          <Route path="/products/Active Pharmaceutical Ingredients (API's)" element={<OthersDetailPage/>}/>
          <Route path="/products/Acidulants" element={<AcidulantsDetailPage/>}/>
          <Route path="/products/Thickeners" element={<ThickenersDetailPage/>}/>
          <Route path="/products/Antioxidants" element={<AntioxidantsDetailPage/>}/>
          <Route path="/products/Nutritional Supplements" element={<NutritionalSupplementsDetailPage/>}/>
          <Route path="/products/Vitamins" element={<VitaminsDetailPage/>}/>
          <Route path="/products/Preservatives" element={<PreservativesDetailPage/>}/>





        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
