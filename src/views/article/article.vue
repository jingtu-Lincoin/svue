<template>
  <div class="h-full bg-blue-100 w-full">

    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="category in categories" :key="category.id" class="bg-white rounded shadow">
          <h2 class="px-4 py-2 bg-blue-500 text-white font-semibold">{{ category.name }}</h2>
          <ul class="p-4">
            <li v-for="article in category.articles" :key="article.id" class="mb-2 border-gray-200 border-b py-1 cursor-pointer" @click="gotoDetail(article.id)">
              {{ article.title }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {router} from "../../router";
import {useMessage} from "naive-ui";
import {useUserStoreWithOut} from '@/store/modules/user'
import {getListWithType} from "@/api/psy/article";
const userStore = useUserStoreWithOut()
const message = useMessage();
let categories = ref([]);

loadArtiles();

function loadArtiles(){
  getListWithType({
    page: 1,
    pageSize: 100,
  }).then((info) => {
    if (info.data) {
      categories.value = info.data;
      console.log('信息列表', categories);
    }
  });
}

function gotoDetail(id){
  console.log('跳转到文章详情', id)
  router.push({
    name: 'ArticleDetail',
    params: {
      id: id
    }
  })
}

</script>

<style>
html,
body {
  width: 100%;
}
</style>
