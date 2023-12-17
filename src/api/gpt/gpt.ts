import axios from 'axios'
import {Url} from '../Url'

/**
 * 加载GPT数据
 * @param data
 */
export const loadGptData = (data: {
    content: string
}) => {
    return axios.request({
        url: Url.loadGptData,
        method: 'post',
        data,
    }).then(res => {
        return res.data
    });
}



