import axios from "axios";

const service = axios.create({
    mode: 'cors',
    headers: {
      // "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:8080", // Thay * bằng domain của bạn
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
    },
    baseURL: process.env.REACT_APP_BASE_API,
    // withCredentials: true,
    timeout: 1000 * 3600,
    // credentials: "include",
    xsrfCookieName: "XSRF-TOKEN"
})
service.interceptors.request.use(
  (config) => {
    if (config.headers["Content-Type"] != "multipart/form-data") {
      config.headers["Content-Type"] = "application/json; charset=utf-8";
    }
    const token = localStorage.getItem('token')? localStorage.getItem('token'): null
    if(token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// response interceptor
service.interceptors.response.use(
  (response) => {
    const data = !response.data.data ? response.data : response.data.data;
    const headers = response.headers;
    // if(data.access_token != undefined && data.access_token != '') {
    //   localStorage.setItem('token', data.access_token)
    //   console.log('token', localStorage.getItem('token'))
    // }
    // if (headers.authorization != undefined) {
    //   console.log('lot to bo')
    //   // store.commit("authUser/SET_TOKEN", headers.authorization);
    //   localStorage.setItem('token', headers.authorization)
      
    //   if (typeof data == "Object") {
    //     data.token = headers.authorization;
    //   }
    // }
    if (!data) {
      return Promise.reject(new Error("Network Error"));
    }
    return { data: data, headers };
  },
  (error) => {
     if(error.response) {
      // alert('Điền sai hoặc thiếu thông tin')
     }
     return Promise.reject(error);
    // return { status: error.response.status, message: error.message };
    // router.push({ name: "error", params: {} });
  }
);

export default service;