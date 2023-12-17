import axios from 'axios'
import {Url} from '../Url'


export const recharge = (data: {}) => {
    return axios.request({
        url: Url.recharge,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}

export const zfbCallback = (data: {}) => {
    return axios.request({
        url: Url.zfbCallback,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}





