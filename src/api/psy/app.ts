import axios from 'axios'
import {Url} from '../Url'

export const getAppData = (data: {}) => {
    return axios.request({
        url: Url.app_getAppData,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




