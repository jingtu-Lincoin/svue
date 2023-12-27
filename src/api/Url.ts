import {getUserInfo} from "./user/user";

export class Url{
    static baseUrl = 'http://localhost:3000';
 //   static baseUrl = 'http://api.mockmock.cn';
    static loginWithPassword = this.baseUrl+ '/user/loginWithPassword';
    static loginWithValidCode = this.baseUrl+ '/user/loginWithValidCode';
    static getUserInfo = this.baseUrl+ '/user/getUserInfo';
    static uploadUrl = this.baseUrl+ '/file/upload';

    static app_getAppData = this.baseUrl+ '/app/getAppData';

    static student_add = this.baseUrl+ '/studentApi/add';
    static student_login = this.baseUrl+ '/studentApi/login';
    static student_detail = this.baseUrl+ '/studentApi/detail';
    static student_changePassword = this.baseUrl+ '/studentApi/changePassword';
    static student_updateHead = this.baseUrl+ '/studentApi/updateHead';


    static teacher_list = this.baseUrl+ '/teacherApi/getPageList';

    static article_listWithType = this.baseUrl+ '/articleApi/getListWithType';
    static article_detail = this.baseUrl+ '/articleApi/detail';
    static article_list = this.baseUrl+ '/articleApi/getPageList';

    static messageBoard_list = this.baseUrl+ '/messageBoardApi/getPageList';
    static messageBoard_add = this.baseUrl+ '/messageBoardApi/add';

    static appoint_add = this.baseUrl+ '/appointApi/add';
    static appoint_list = this.baseUrl+ '/appointApi/getPageList';
    static appoint_getUserAppoints = this.baseUrl+ '/appointApi/getUserAppoints';


}