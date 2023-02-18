import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const newsServices = {
    getAllUsers: () => axiosService.get(urls.users).then(value => value.data),
    getAllNews: () => axiosService.get(urls.comments).then(value => value.data)
}