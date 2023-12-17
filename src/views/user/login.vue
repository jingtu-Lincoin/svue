<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-100 w-full">
    <div class="w-96 p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-500">学生登录</h2>
      <form @submit.prevent="loginStudent" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">登录账号</label>
          <input v-model="username" type="text" id="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">登录密码</label>
          <input v-model="password" type="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <button type="submit" class="block w-full py-2 px-4 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    loginStudent() {
      // 在这里执行学生登录的逻辑
      console.log('登录账号:', this.username);
      console.log('登录密码:', this.password);
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
}
</style>
