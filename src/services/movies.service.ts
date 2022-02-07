import {axiosMovService} from "./axios.service";

import {urls} from "../constants";

export const moviesService = {
    getPopular: (page:number) => axiosMovService.get(`${urls.moviePopular}?page=${page}`).then(value => value.data),
}