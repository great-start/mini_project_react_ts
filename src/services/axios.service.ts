import axios from "axios";

import {accessToken, baseURL} from "../constants";

export const axiosMovService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})


