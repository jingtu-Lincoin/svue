import {getUserInfo} from "./user/user";

export class Url{
    static baseUrl = 'http://localhost:3000';
 //   static baseUrl = 'http://api.mockmock.cn';
    static loginWithPassword = this.baseUrl+ '/user/loginWithPassword';
    static loginWithValidCode = this.baseUrl+ '/user/loginWithValidCode';
    static getUserInfo = this.baseUrl+ '/user/getUserInfo';
    static register = this.baseUrl+ '/user/add';
    static getValidCode = this.baseUrl+ '/user/getValidCode';
    static recharge = this.baseUrl+ '/user/recharge';
    static zfbCallback = this.baseUrl+ '/user/zfbCallback';
    static upload = this.baseUrl+ '/gpt/upload';
    static loadGptData = this.baseUrl+ '/gpt/loadGptData';
    static weixinLogin = this.baseUrl+ '/user/weixinLogin';

}