import {axiosService} from "./axios.service";

import {apiKey, urls} from "../constants";

export const moviesService = {
    getPopular: () => axiosService.get(`${urls.moviePopular}?${apiKey}`).then(value => value.data),
}