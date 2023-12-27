<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-100 w-full">
    <div class="w-96 p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-500">学生登录</h2>
      <form @submit.prevent="loginStudent" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">登录账号</label>
          <input v-model="student.code" type="text" id="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">登录密码</label>
          <input v-model="student.password" type="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <button type="submit" class="block w-full py-2 px-4 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">登录</button>
      </form>
      <div class="mt-2">
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {reactive} from "vue";
  import {router} from "../../router";
  import {useMessage} from "naive-ui";
  import {login} from "@/api/psy/student";
  import md5 from 'md5';
  import {useUserStoreWithOut} from '@/store/modules/user';
  const userStore = useUserStoreWithOut()

  const message = useMessage();

  let student = reactive({
    code: '',
    password: '',
  });

  function loginStudent() {
    console.log('学生登录信息', student);
    if (student.code === '' || student.password === '') {
      message.warning('请填写完整信息');
      return;
    }
    student.password = md5(student.password);
    login(student).then((info) => {
      console.log('登录结果', info);
      if (info.data) {
        message.success('登录成功');
        userStore.setUserinfo(info.data)
        router.push('/index');
      } else {
        message.error('登录失败');
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
