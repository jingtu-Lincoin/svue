import axios from 'axios'
import {Url} from '../Url'

export const getList = (data: {}) => {
    return axios.request({
        url: Url.teacher_list,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}




