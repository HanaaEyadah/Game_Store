import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";





export const Description = styled.h4`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  background-color:#bcaec2;
  border-color:#320145;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.purple};
    }
  }
`;

export const ShopImage = styled.img`
  display: block;
  height:200px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;


export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 8rem;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;