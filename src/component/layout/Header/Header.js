import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  burgerColor: "rgb(41, 208, 253)",
  logo,
  logoWidth: "20vmax",
  //navColor1: "white",
  navColor1: "black",

  logoHoverSize: "10px",
  logoHoverColor: "rgb(41, 208, 253)",
  link1Text: "Home",
  link2Text: "Productos",
  link3Text: "Contacto",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgb(41, 208, 253)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgb(41, 208, 253)",
  searchIconColor: "rgb(41, 208, 253)",
  cartIconColor: "rgb(41, 208, 253)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
