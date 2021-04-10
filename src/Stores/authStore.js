import { makeAutoObservable } from "mobx";
import axios from "axios";
import jwtDecode from "jwt-decode";
import instance from "./instance";

class AuthStore {
  user = null;

  signupUsernameCheck = {
    message: "",
    available: true,
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      const res = await instance.post("/user/signup", userData);
      const token = res.data.token;
      this.user = jwtDecode(token);
      console.log("user =>", this.user);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/user/signin", userData);
      console.log(res.data.token);
      const token = res.data.token;
      this.user = jwtDecode(token);
      localStorage.setItem("userToken", token);
      console.log("user token =>", this.user);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  checkUsername = async (username) => {
    try {
      if (!username) return;

      console.log(username);
      this.checkUsername.loading = true;

      const res = await instance.post("/user/checkUsername", username);

      this.checkUsername.loading = false;
      this.checkUsername.available = res.data.available;
      if (res.data.available) {
        this.checkUsername.available = true;
      } else {
        this.checkUsername.message = "Username is already taken";
      }
    } catch (error) {
      console.log("AuthStore -> checkusername -> error", error);
    }
  };
  signout = () => {
    delete instance.defaults.headers.common.Authorization; //using instance & bearer tokens?
    this.user = null;
  };
}
const authStore = new AuthStore();
export default authStore;
