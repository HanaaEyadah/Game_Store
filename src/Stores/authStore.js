import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import axios from "axios";

class AuthStore {
    user = null;

  constructor() {
    makeAutoObservable(this);
  }


 signup = async (userData) => {
    try {
        // const res = await instance.post("/signup", userData);
        // this.setUser(res.data.token);
        const res = await axios.post("http://localhost:8000/signup", userData)
        this.user= res.data;
        // console.log("user =>", this.user);
      } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  // signin = async (userData) => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/signin", userData)
  //       // const res = await instance.post("/signin", userData);
  //       // this.setUser(res.data.token);
  //       this.user = res.data;
  //       // console.log("user token =>", this.user)
  //     } catch (error) {
  //     console.log("AuthStore -> signin -> error", error);
  //   }
  // };

//   setUser = (token) => {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//     this.user = decode(token);
//   };
}
const authStore = new AuthStore();
export default authStore;