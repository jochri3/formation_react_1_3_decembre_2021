import axios from "axios";

const ContactAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default ContactAPI;
