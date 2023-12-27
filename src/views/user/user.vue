<template>
  <div class="min-h-screen bg-blue-100 w-full">
    <!-- 头部 -->
    <header class="h-48 bg-cover bg-center flex items-end" style="background-image: url('src/assets/images/person_banner.jpg');">
      <h1 class="text-4xl text-white px-8 py-4">个人中心</h1>
      <div>
        <router-link to="/index">
          <button class="px-4 py-2">返回首页</button>
        </router-link>
      </div>

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
          <div class="flex flex-col items-start mb-4">
            <div class="flex">
              <img :src="user.userHead" alt="个人照片" class="w-20 h-20 rounded-full mr-4">
              <button @click="openUploadHeadModal()">更改</button>
            </div>
            <div>
              <p class="text-lg font-bold">{{ user.name }}</p>
              <p class="text-gray-500">学号：{{ user.studentId }}</p>
              <p class="text-gray-500">手机号: {{ user.tel }}</p>
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
              <p class="text-lg font-bold">{{ appointment.appointType }}</p>
              <p>教师: {{ appointment.teacherName }}</p>
              <p>时间: {{ appointment.appointDate }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部退出登录 -->
    <footer class="flex justify-end mx-auto max-w-screen-lg p-8">
      <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">退出登录</button>
    </footer>


    <n-modal v-model:show="showUploadHeadModal" title="上传头像" preset="dialog">
      <n-upload
          :action="Url.uploadUrl"
          list-type="image-card"
          :max="1"
          uploader="userHead"
          @finish="uploadFinish"
      >
        点击上传
      </n-upload>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import {reactive, ref} from "vue";
  import {router} from "../../router";
  import {useMessage} from "naive-ui";
  import {useUserStoreWithOut} from '@/store/modules/user'
  import {changePassword,updateHead} from "@/api/psy/student";
  import {getUserAppoints} from "@/api/psy/appoint";
  import md5 from 'md5';
  import {Url} from '@/api/Url'
  const userStore = useUserStoreWithOut()
  const message = useMessage();

  let selectedMenu= ref('profile');
  let showUploadHeadModal = ref(false);

  const user = reactive({
    name: userStore.getUserInfo.name,
    code:  userStore.getUserInfo.code,
    userHead: userStore.getUserInfo.userHead,
    tel: userStore.getUserInfo.tel,
    id: userStore.getUserInfo.id,
  });

  loadAppointments();


  let password = reactive({
    current: '',
    new: '',
    confirm: ''
  });
  let appointments = ref([]);

  function submitForm() {
    if(password.current === '' || password.new === '' || password.confirm === ''){
      message.warning('请填写完整信息');
      return;
    }
    if(password.new !== password.confirm){
      message.warning('两次密码不一致');
      return;
    }
    changePassword({
      studentId: userStore.getUserInfo.id,
      oldPassword: md5(password.current),
      newPassword: md5(password.new)
    }).then((info) => {
      if (info.data) {
        message.success('修改成功');
        password.current = '';
        password.new = '';
        password.confirm = '';
      } else {
        message.error('修改失败,请检查当前密码是否正确');
      }
    });

  };
  function logout() {
    // 在这里处理退出登录逻辑
    console.log('退出登录');
    userStore.logout();
    router.push('/login');
  }

  function loadAppointments(){
    getUserAppoints({
      studentId: userStore.getUserInfo.id
    }).then((info) => {
      if (info.data) {
        appointments.value = info.data;
        console.log('预约列表', appointments);
      }
    });
  }

  function openUploadHeadModal(){
    showUploadHeadModal.value = true;
  }

  function uploadFinish(options: { file: UploadFileInfo, event?: ProgressEvent }){
    console.log('uploadFinish');
    console.log(options);
    const result = JSON.parse(options.event?.currentTarget?.response);
    const fieldName = result.uploader;
    const tempFile = {
      name: result.realName,
      url: result.path,
      id: options.file.id,
      uploader: result.uploader,
      batchId: options.file.batchId,
      status: 'finished', //必须指定，否则不会出现删除按钮
    };
    user.userHead = tempFile.url;
    userStore.setUserinfo(user);
    updateUserHead();
    return tempFile;
  }

  function updateUserHead(){
    console.log('更新头像');
    console.log(user);
    updateHead({
      id: userStore.getUserInfo.id,
      userHead: user.userHead
    }).then((info) => {
      if (info.data) {
        message.success('更新成功');
      } else {
        message.error('更新失败');
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
