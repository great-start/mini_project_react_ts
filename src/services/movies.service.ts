import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const moviesService = {
    getPopular: () => axiosService.get(`${urls.moviePopular}?page=1000`).then(value => value.data),
}