import axios from "axios";

import {baseURL, basePicUrl} from "../constants";

export const axiosMovService = axios.create({
    baseURL
})

export const axiosPicService = axios.create({
    baseURL: basePicUrl
})

