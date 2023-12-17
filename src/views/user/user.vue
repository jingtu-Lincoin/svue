<template>
  <div class="min-h-screen bg-blue-100 w-full">
    <!-- 头部 -->
    <header class="h-48 bg-cover bg-center flex items-end" style="background-image: url('https://via.placeholder.com/1200x400');">
      <h1 class="text-4xl text-white px-8 py-4">个人中心</h1>
    </header>

    <!-- 内容区域 -->
    <div class="flex justify-between mx-auto max-w-screen-lg p-8">
      <!-- 左边菜单 -->
      <nav class="w-1/6 pr-8">
        <ul class="space-y-4">
          <li>
            <button @click="selectedMenu = 'profile'" class="w-full py-2 px-4 text-left rounded-md hover:bg-blue-200">个人信息</button>
          </li>
          <li>
            <button @click="selectedMenu = 'password'" class="w-full py-2 px-4 text-left rounded-md hover:bg-blue-200">修改密码</button>
          </li>
          <li>
            <button @click="selectedMenu = 'appointments'" class="w-full py-2 px-4 text-left rounded-md hover:bg-blue-200">我的预约</button>
          </li>
        </ul>
      </nav>

      <!-- 右边内容区域 -->
      <div class="w-5/6 pl-8">
        <!-- 个人信息 -->
        <div v-if="selectedMenu === 'profile'">
          <h1 class="text-2xl font-bold mb-4">个人信息</h1>
          <div class="flex items-center mb-4">
            <img :src="user.avatar" alt="头像" class="w-12 h-12 rounded-full mr-4">
            <div>
              <p class="text-lg font-bold">{{ user.name }}</p>
              <p class="text-gray-500">{{ user.studentId }}</p>
              <p class="text-gray-500">总预约次数: {{ user.totalAppointments }}</p>
            </div>
          </div>
        </div>

        <!-- 修改密码 -->
        <div v-if="selectedMenu === 'password'">
          <h1 class="text-2xl font-bold mb-4">修改密码</h1>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="currentPassword" class="block text-sm font-medium text-gray-700">当前密码</label>
              <input v-model="password.current" type="password" id="currentPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
            </div>
            <div class="mb-4">
              <label for="newPassword" class="block text-sm font-medium text-gray-700">新密码</label>
              <input v-model="password.new" type="password" id="newPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
            </div>
            <div class="mb-4">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">确认密码</label>
              <input v-model="password.confirm" type="password" id="confirmPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
            </div>
            <button type="submit" class="block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">提交</button>
          </form>
        </div>

        <!-- 我的预约 -->
        <div v-if="selectedMenu === 'appointments'">
          <h1 class="text-2xl font-bold mb-4">我的预约</h1>
          <ul>
            <li v-for="appointment in appointments" :key="appointment.id" class="mb-4 pb-4 border-b">
              <p class="text-lg font-bold">{{ appointment.category }}</p>
              <p>教师: {{ appointment.teacher }}</p>
              <p>时间: {{ appointment.time }}</p>
              <p>状态: {{ appointment.status }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部退出登录 -->
    <footer class="flex justify-end mx-auto max-w-screen-lg p-8">
      <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">退出登录</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: 'profile',
      user: {
        name: '用户姓名',
        studentId: '学号',
        totalAppointments: 10,
        avatar: 'https://via.placeholder.com/100'
      },
      password: {
        current: '',
        new: '',
        confirm: ''
      },
      appointments: [
        { id: 1, category: '预约类别1', teacher: '教师1', time: '2023-01-01', status: '已完成' },
        { id: 2, category: '预约类别2', teacher: '教师2', time: '2023-01-02', status: '待确认' },
        { id: 3, category: '预约类别3', teacher: '教师3', time: '2023-01-03', status: '已取消' }
      ]
    };
  },
  methods: {
    submitForm() {
      // 在这里处理表单提交逻辑
      console.log('当前密码:', this.password.current);
      console.log('新密码:', this.password.new);
      console.log('确认密码:', this.password.confirm);

      // 清空表单数据
      this.password.current = '';
      this.password.new = '';
      this.password.confirm = '';
    },
    logout() {
      // 在这里处理退出登录逻辑
      console.log('退出登录');
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
