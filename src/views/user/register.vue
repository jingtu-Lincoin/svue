<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-100 w-full">
    <div class="w-96 p-8 bg-white rounded-2xl shadow">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-500">学生注册</h2>
      <form @submit.prevent="registerStudent" class="space-y-4">
        <div>
          <label for="studentId" class="block text-sm font-medium text-gray-700">学号</label>
          <input v-model="student.code" type="text" id="studentId" class="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
          <input v-model="student.name" type="text" id="name" class="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">手机号</label>
          <input v-model="student.tel" type="text" id="name" class="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
          <input v-model="student.password" type="password" id="password" class="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">重复密码</label>
          <input v-model="student.rePassword" type="password" id="password" class="mt-1 block w-full rounded-md border-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <button type="submit" class="block w-full py-2 px-4 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600" >注册</button>
        <div>
          <router-link to="/login">登录</router-link>
        </div>
      </form>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {add} from "@/api/psy/student";
import {router} from "../../router";
import {useMessage} from "naive-ui";
import {reactive} from "vue";
import md5 from 'md5';
const message = useMessage();
console.log(" message:",message);
let student = reactive({
  code: '',
  name: '',
  password: '',
  tel: '',
  rePassword: ''
});

    function registerStudent() {

      console.log('学生信息', student);
      if (student.password !== student.rePassword) {
        message.warning('两次密码不一致');
        return;
      }
      if (student.code === '' || student.name === '' || student.password === '' || student.tel === '') {
        message.warning('请填写完整信息');
        return;
      }

      // message.success('注册成功');
      // router.replace('/login');
      student.password = md5(student.password);

      add(student).then(res => {
        console.log(res);
        if (res.data) {
          message.success('注册成功');
          setTimeout(() => {
          //  router.replace('/login');
            router.push('/login');
          }, 10);
        }else {
          message.warning('注册失败');
        }
      });
    }
</script>

<style>
html,
body {
  width: 100%;
}
</style>
