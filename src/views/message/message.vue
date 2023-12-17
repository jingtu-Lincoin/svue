<template>
  <div class="min-h-screen bg-blue-100 w-full">
    <div class="flex justify-center">
      <div class="w-full max-w-screen-lg p-8 bg-white rounded shadow flex">
        <!-- 左侧：留言列表 -->
        <div class="w-1/2 pr-4 border-r">
          <h1 class="text-2xl font-bold mb-4">留言板</h1>
          <ul>
            <li v-for="message in messages" :key="message.id" class="mb-6 pb-4 border-b">
              <div class="flex items-start mb-2">
                <img :src="message.avatar" alt="留言人头像" class="w-10 h-10 rounded-full mr-3">
                <div>
                  <h2 class="text-lg font-bold">{{ message.title }}</h2>
                  <p class="text-gray-500 text-sm mb-1">{{ message.createdAt }}</p>
                  <p class="text-gray-500 text-sm mb-1">留言人: {{ message.author }}</p>
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

<script>
export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          title: '留言标题1',
          createdAt: '2023-01-01',
          author: '留言人1',
          avatar: 'https://via.placeholder.com/50',
          content: '留言内容1'
        },
        {
          id: 2,
          title: '留言标题2',
          createdAt: '2023-01-02',
          author: '留言人2',
          avatar: 'https://via.placeholder.com/50',
          content: '留言内容2'
        },
        {
          id: 3,
          title: '留言标题3',
          createdAt: '2023-01-03',
          author: '留言人3',
          avatar: 'https://via.placeholder.com/50',
          content: '留言内容3'
        }
      ],
      newMessage: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    submitForm() {
      // 在这里处理表单提交逻辑
      console.log('标题:', this.newMessage.title);
      console.log('内容:', this.newMessage.content);

      // 清空表单数据
      this.newMessage.title = '';
      this.newMessage.content = '';
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
