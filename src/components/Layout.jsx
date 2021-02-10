import React, { useState, useEffect } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "@fontsource/poppins";
import "@fontsource/dm-serif-display";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos);

    if (visible) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
