<template>
  <div class="flex items-center justify-center min-h-screen bg-blue-100 w-full">
    <div class="w-96 p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-500">学生注册</h2>
      <form @submit.prevent="registerStudent" class="space-y-4">
        <div>
          <label for="studentId" class="block text-sm font-medium text-gray-700">学号</label>
          <input v-model="studentId" type="text" id="studentId" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
          <input v-model="name" type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
          <input v-model="password" type="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
        </div>
        <button type="submit" class="block w-full py-2 px-4 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600" >注册</button>
        <div>
          <router-link to="/login">登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentId: '',
      name: '',
      password: ''
    };
  },
  methods: {
    registerStudent() {
      // 在这里执行学生注册的逻辑
      console.log('学号:', this.studentId);
      console.log('姓名:', this.name);
      console.log('密码:', this.password);

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
