import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { BsPlusCircle } from "react-icons/bs";





const theme = {
        light: {
          mainColor: "#320145", // main font color
          backgroundColor: "#bcaec2", // main background color
          purple: "#66068a",
        },
        dark: {
          mainColor: "#bcaec2", // main font color
          backgroundColor: "#320145", // main background color
          purple: "#66068a",
        },
      }

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail  />
        </Route>
        <Route path="/products">
          <ProductList  />
        </Route>
      </Switch>
    
    </ThemeProvider>
  );
  
}

export default App;










