import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const moviesService = {
    getPopular: (page:number) => axiosService.get(`${urls.moviePopular}?page=${page}`).then(value => value.data),
}