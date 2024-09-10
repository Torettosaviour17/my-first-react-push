import React from "react";
import Navbar from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Advantage from "../components/HomeComponents/Advantage";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Advantage />
      <Footer />
    </div>
  );
}

export default HomeScreen;
