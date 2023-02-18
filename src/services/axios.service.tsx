import axios from "axios";

import baseURl from "../constants/base.url";



export const axiosService = axios.create({
    baseURL: baseURl
});