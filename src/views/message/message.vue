<template>
  <div class="h-full bg-blue-100 w-full">
    <div class="flex justify-center w-full" style="height: 90%;">
      <div class="w-full max-w-screen-lg p-8 bg-white rounded shadow flex">
        <!-- 左侧：留言列表 -->
        <div class="w-1/2 pr-4 border-r h-full overflow-y-scroll">
          <h1 class="text-2xl font-bold mb-4">留言板</h1>
          <ul >
            <li v-for="(message,index) in messages" :key="message.id" class="mb-6 pb-4 border-b">
              <div class="flex items-start mb-2">
<!--                <img :src="message.userHead" alt="留言人头像" class="w-10 h-10 rounded-full mr-3">-->
                <div>
                  <h2 class="text-lg font-bold">{{ message.title }}</h2>
                  <p class="text-gray-500 text-sm mb-1">{{ message.ctime }}</p>
                  <p class="text-gray-500 text-sm mb-1">留言人: {{ message.name }}</p>
                  <p class="text-gray-700">{{ message.content }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 右侧：留言表单 -->
        <div class="w-1/2 pl-4">
          <h2 class="text-lg font-bold mb-4">留言表单</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700">标题</label>
              <input v-model="newMessage.title" type="text" id="title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required>
            </div>
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700">内容</label>
              <textarea v-model="newMessage.content" id="content" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" rows="4" required></textarea>
            </div>
            <button type="submit" class="block w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">提交</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {reactive, ref} from "vue";
  import {router} from "../../router";
  import {useMessage} from "naive-ui";
  import {useUserStoreWithOut} from '@/store/modules/user'
  import {add,getList} from "@/api/psy/messageBoard";
  const userStore = useUserStoreWithOut()
  const message = useMessage();


  let messages = ref([]);
  let newMessage = reactive({
    title: '',
    content: '',
    name: '',
    tel: '',
    userHead: '',

  });

  function submitForm() {
    // 在这里处理表单提交逻辑
    console.log('留言信息', newMessage);
    if (newMessage.title === '' || newMessage.content === '') {
      message.warning('请填写完整信息');
      return;
    }
    newMessage.name = userStore.getUserInfo.name;
    newMessage.tel = userStore.getUserInfo.tel;
    newMessage.userHead = userStore.getUserInfo.userHead;
    newMessage.code = userStore.getUserInfo.code;
    add(newMessage).then((info) => {
      console.log('留言结果', info);
      if (info.data) {
        message.success('留言成功');
        loadMessages();
      } else {
        message.error('留言失败');
      }
    });
  }

  loadMessages();

  function loadMessages(){
    getList({
      page: 1,
      pageSize: 100,
    }).then((info) => {
      if (info.data) {
        messages.value = info.data.list;
        console.log('信息列表', messages);
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
