import axios from "axios";

import {accessToken, baseURL} from "../constants";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
})


