<template>
  <div class="min-h-screen bg-blue-100 w-full">
    <div class="flex justify-center">
      <div class="w-2/3 p-8 bg-white rounded shadow flex">
        <div class="w-3/4 pr-8 border-r">
          <h1 class="text-2xl font-bold mb-4">{{ article.title }}</h1>
          <p class="text-gray-500 text-sm mb-2">{{ article.createdAt }}</p>
          <div class="border-t-2 border-b-2 py-4">
            <p>{{ article.content }}</p>
          </div>
        </div>
        <div class="w-1/4 pl-8">
          <h2 class="text-lg font-bold mb-4">相关推荐</h2>
          <ul>
            <li v-for="recommendation in recommendations" :key="recommendation.id" class="mb-2">
              <a :href="recommendation.url" class="text-blue-500 hover:underline">{{ recommendation.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '文章标题',
        createdAt: '2023-01-01',
        content: '文章内容'
      },
      recommendations: [
        { id: 1, title: '推荐文章1', url: '#' },
        { id: 2, title: '推荐文章2', url: '#' },
        { id: 3, title: '推荐文章3', url: '#' }
      ]
    };
  }
}
</script>

<style>
html,
body {
  width: 100%;
}
</style>
