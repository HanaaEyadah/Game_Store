
import { GlobalStyle, ThemeButton } from "./styles";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import products from "./products"
import ProductDetail from "./components/ProductDetails"


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
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== +productId
    );
    setProducts(updatedProducts);
    setProduct(null);
  };

  const selectProduct = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setProduct(selectedProduct);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = () =>
    product ? (
      <ProductDetail
        product={product}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    ) : (
      <ProductList
        products={_products}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    );

    

  return (
    <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />
          <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
          <Home />
          {setView()}
        </ThemeProvider>
  );
}

export default App;






