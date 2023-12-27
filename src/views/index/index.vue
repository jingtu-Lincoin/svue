<template>
  <div class="min-h-screen w-full flex justify-center bg-gray-400">
    <div class="flex flex-col bg-amber-100 w-10/12">
      <!-- 头部区域 -->
      <header class="h-48 bg-cover bg-center py-4 px-6  text-white" style="background-image: url('src/assets/images/index-banner.jpg');">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold">网站名称</h1>
          <div class="flex space-x-4">
<!--            <input type="text" placeholder="搜索" class="px-2 py-1 border border-gray-300 rounded">-->
<!--            <button class="px-4 py-1 bg-blue-700 text-white rounded">搜索</button>-->
            <img :src="userStore.getUserInfo.userHead" class="w-8 h-8" />
            <span class="mt-1">{{ userStore.getUserInfo.name }}</span>
            <router-link v-if="!userStore.getUserInfo" to="/login">
              <button class="px-4 py-1 bg-blue-700 text-white rounded">登录</button>
            </router-link>
            <div v-else>
              <router-link to="/user">
                <button class="px-2 py-1 text-white">个人中心</button>
              </router-link>
              <button  class="px-4 py-1 bg-blue-700 text-white rounded" @click="loginOut()">退出</button>
            </div>

          </div>
        </div>
      </header>

      <!-- 导航栏区域 -->
      <nav class="bg-gradient-to-b from-blue-400 to-blue-600">
        <ul class="flex space-x-4 py-3 px-6">
          <li v-for="item in navItems" :key="item.id"
              class="px-3 py-1 rounded-xl"
              :class="{ 'bg-blue-600 text-white': item.active, 'hover:bg-blue-700 hover:text-white': !item.active }"
              @click="setActiveNavItem(item.id)">
            <router-link :to="item.path">
              <span class="text-white">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- 内容区域 -->
      <main class=" p-5 bg-amber-600 flex items-center justify-center bg-blue-100 overflow-y-auto" style="height: 90%;">
        <AppProvider>
          <router-view>
          </router-view>
        </AppProvider>
      </main>

      <!-- 页脚区域 -->
      <footer class="bg-blue-800 text-white py-4 px-6 mt-auto">
        <p class="text-center">版权所有 &copy; 2023 网站名称</p>
      </footer>
    </div>
  </div>

</template>

<script lang="ts" setup>
  import {router} from "../../router";
  import {AppProvider} from "@/components/Application";
  import {useUserStoreWithOut} from '@/store/modules/user'
  import {ref} from "vue";
  const userStore = useUserStoreWithOut()

  const navItems =  ref([
    { id: 1, label: '首页', active: true,path: '/body' },
    { id: 2, label: '心理文章', active: false, path: '/article' },
    { id: 3, label: '留言板', active: false,path: '/message' },
    { id: 4, label: '在线预约', active: false ,path: '/appoint'},
    { id: 5, label: '教师介绍', active: false ,path: '/teacher'}
  ]);

  function setActiveNavItem(id) {
    console.log('设置当前激活的导航栏', id);
    navItems.value.forEach(item => {
      item.active = item.id === id;
    });
    console.log('设置后的导航栏', navItems)
  }

  function loginOut() {
    userStore.logout();
    router.push('/login');
  }
</script>

<style>
html,
body {
  width: 100%;
}


</style>
