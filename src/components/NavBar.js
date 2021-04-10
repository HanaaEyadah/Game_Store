import { Logo, NavItem, ThemeButton } from "../styles";
import DarkLogo from "../Images/DarkLogo.png"
import LightLogo from "../Images/LightLogo.png"
import SignupButton from "../Buttons/SignupButton"
import SigninButton from "../Buttons/SigninButton"
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";


const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? LightLogo : DarkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
      <NavItem className="nav-item" to="/">
          Home
        </NavItem>
        <NavItem className="nav-item" to="/products">
          Products
        </NavItem>
        {authStore.user ? (
    <p>Hello, {authStore.user.username}</p>
  ) : (
    <>
      <SigninButton />
      <SignupButton />
    </>
  )
}
        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      
      </div>
    </nav>
  );
};

export default observer(NavBar);