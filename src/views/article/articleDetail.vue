<template>
  <div class="h-full bg-blue-100 w-full mt-2">
    <div class="flex justify-center">
      <div class="w-11/12 p-8 bg-white rounded shadow flex">
        <div class="w-3/4 pr-8 border-r">
          <h1 class="text-2xl font-bold mb-4">{{ article.title }}</h1>
          <p class="text-gray-500 text-sm mb-2">{{ article.ctime }}</p>
          <div class="border-t-2 py-4">
            <div v-html="article.content"></div>
          </div>
        </div>
        <div class="w-1/4 pl-8">
          <h2 class="text-lg font-bold mb-4">相关推荐</h2>
          <ul>
            <li v-for="recommendation in recommendations" :key="recommendation.id" class="mb-2 py-2 border-b border-blue-100 cursor-pointer" @click="gotoDetail(recommendation.id)">
              {{ recommendation.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, reactive, ref, watch} from "vue";
  import {router} from "../../router";
  import {useMessage} from "naive-ui";
  import {useUserStoreWithOut} from '@/store/modules/user'
  import {detail,getList} from "@/api/psy/article";

  let article = reactive({
    title: '',
    content: '',
    ctime: ''
  });
  let recommendations = ref([]);
  let id = ref('');
  id = router.currentRoute.value.params.id;
  console.log('文章id', id)
  loadArticle(id);
  loadRecommendations();


  watch(() => router.currentRoute.value.params.id, (id) => {
    console.log('文章id', id)
    loadArticle(id);
    loadRecommendations();
  });

  function loadArticle(id){
    detail({
      id: id
    }).then((info) => {
      if (info.data) {
        article = info.data;
        console.log('文章详情', article);
      }
    });
  }

  function loadRecommendations(){
    getList({
      page: 1,
      pageSize: 10,
    }).then((info) => {
      if (info.data) {
        recommendations.value = info.data.list;
        console.log('相关推荐', recommendations);
      }
    });
  }

  function gotoDetail(id){
    router.push({
      name: 'ArticleDetail',
      params: {
        id: id
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
