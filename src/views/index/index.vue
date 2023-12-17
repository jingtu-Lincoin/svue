<template>
  <div class="min-h-screen w-full flex justify-center bg-gray-400">
    <div class="flex flex-col bg-amber-100 w-10/12">
      <!-- 头部区域 -->
      <header class="py-4 px-6 bg-blue-500 text-white">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold">网站名称</h1>
          <div class="flex space-x-4">
            <input type="text" placeholder="搜索" class="px-2 py-1 border border-gray-300 rounded">
            <span>个人姓名</span>
            <router-link to="/register">
              <button class="px-4 py-1 bg-blue-700 text-white rounded">注册</button>
            </router-link>
          </div>
        </div>
      </header>

      <!-- 导航栏区域 -->
      <nav class="bg-gradient-to-b from-blue-400 to-blue-600">
        <ul class="flex space-x-4 py-3 px-6">

          <li v-for="item in navItems" :key="item.id"
              :class="{ 'bg-blue-700 text-white': item.active, 'hover:bg-blue-700 hover:text-white': !item.active }"
              @click="setActiveNavItem(item.id)">
            <router-link :to="item.path">
              <a href="#" :class="{ 'text-white': item.active, 'text-blue-200': !item.active }">{{ item.label }}</a>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- 内容区域 -->
      <main class="flex-grow flex items-center justify-center bg-blue-100">
        <router-view></router-view>
      </main>

      <!-- 页脚区域 -->
      <footer class="bg-blue-800 text-white py-4 px-6 mt-auto">
        <p class="text-center">版权所有 &copy; 2023 网站名称</p>
      </footer>
    </div>
  </div>

</template>

<script>
import {router} from "../../router";

export default {
  data() {
    return {
      navItems: [
        { id: 1, label: '首页', active: true,path: '/' },
        { id: 2, label: '心理文章', active: false, path: '/article' },
        { id: 3, label: '留言板', active: false,path: '/message' },
        { id: 4, label: '在线预约', active: false ,path: '/appoint'},
        { id: 5, label: '教师介绍', active: false ,path: '/teacher'}
      ]
    };
  },
  methods: {
    setActiveNavItem(id) {
      this.navItems.forEach(item => {
        item.active = item.id === id;
      });
      // const currentItem = this.navItems.find(item => item.id === id);
      // console.log(currentItem)
      // router.replace(currentItem.path || '/');
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
