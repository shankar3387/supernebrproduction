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
    },

    // getOtp: async() =>{
    //   const http://login.bulksmsgateway.in/sendmessage.php?user=........&password=.......&mobile=........&message=.......&sender=.......&type=3
    //   let res = await axios.post(`http://login.bulksmsgateway.in/sendmessage.php?`,data);
    //   return res.data || [];
    // }
  }