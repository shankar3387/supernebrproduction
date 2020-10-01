import axios from 'axios';

export default {
    postRegistration: async (data) => {
      let res = await axios.post(`/Auth/registration`,data);
      return res.data || [];
    },

    getRegistration: async () => {
        let res = await axios.get(`/Auth/registration`);
        return res.data || [];
      },

    postLogin: async (data) =>{
        let res = await axios.post(`/Auth/login`,data);
        return res.data || [];
    },
    postEmailValidation: async (data)=>{
      let res = await axios.post(`/Auth/emailValidation`,data);
        return res.data || [];
    }
  }