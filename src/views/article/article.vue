<template>
  <div class="min-h-screen bg-blue-100 w-full">
    <header class="py-4 px-6 bg-blue-500 text-white">
      <h1 class="text-2xl font-bold">文章列表</h1>
    </header>
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="category in categories" :key="category.id" class="bg-white rounded shadow">
          <h2 class="px-4 py-2 bg-blue-500 text-white font-semibold">{{ category.name }}</h2>
          <ul class="p-4">
            <li v-for="article in category.articles" :key="article.id" class="mb-2">
              <a :href="article.url" class="text-blue-500 hover:underline">{{ article.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: '科技',
          articles: [
            { id: 1, title: '文章标题1', url: '#' },
            { id: 2, title: '文章标题2', url: '#' },
            { id: 3, title: '文章标题3', url: '#' }
          ]
        },
        {
          id: 2,
          name: '生活',
          articles: [
            { id: 4, title: '文章标题4', url: '#' },
            { id: 5, title: '文章标题5', url: '#' },
            { id: 6, title: '文章标题6', url: '#' }
          ]
        },
        {
          id: 3,
          name: '旅游',
          articles: [
            { id: 7, title: '文章标题7', url: '#' },
            { id: 8, title: '文章标题8', url: '#' },
            { id: 9, title: '文章标题9', url: '#' }
          ]
        }
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
