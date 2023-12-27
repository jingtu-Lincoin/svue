<template>
  <div class="flex w-11/12" style="height: 90%;">
    <div class="w-1/5 bg-white rounded border border-gray-100 px-4 py-8">
      <!-- 左侧区域内容 -->
        <h3 class="text-lg font-semibold mb-4">统计信息</h3>
        <div class="mb-2">注册人数：{{ siteData.studentCount }}</div>
        <div class="mb-2">文章数量：{{ siteData.articleCount }}</div>
        <div class="mb-2">预约数量：{{ siteData.appointmentCount }}</div>
        <div class="mb-2">教师数量：{{ siteData.teacherCount }}</div>
        <div>留言数量：{{ siteData.messageBoardCount }}</div>
    </div>
    <div class="w-3/5 ml-5  bg-white rounded border border-gray-100 px-4 py-8">
      <!-- 中间区域内容 -->
        <h3 class="text-lg font-semibold mb-4">推荐文章</h3>
        <div v-for="article in recommendedArticles" :key="article.id">
          <div class="mb-4 flex justify-between">
            <h4 class="text-base font-semibold cursor-pointer" @click="gotoDetail(article.id)">{{ article.title }}</h4>
            <p class="text-sm text-gray-500">{{ article.ctime }}</p>
          </div>
          <hr class="border-gray-200 my-2">
        </div>
    </div>
    <div class="w-1/5 ml-5 bg-white rounded border border-gray-100 px-4 py-8">
      <!-- 右侧区域内容 -->
      <h3 class="text-lg font-semibold mb-4">明星教师</h3>
      <div v-for="teacher in starTeachers" :key="teacher.id" class="mb-4 flex flex-col items-center">
        <img :src="teacher.userHead" alt="教师头像" class="w-4/5 h-52">
        <div class="mt-5">
          <h4 class="text-base font-semibold">{{ teacher.name }}</h4>
          <p class="text-sm text-gray-500">{{ teacher.departmentName }}</p>
          <p class="text-sm text-gray-500">工号：{{ teacher.code }}</p>
          <p class="text-sm text-gray-500">部门：{{ teacher.departmentName }}</p>
          <p class="text-sm text-gray-500">电话：{{ teacher.tel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

  import {ref} from "vue";
  import {getList as getTeacherList} from "@/api/psy/teacher";
  import {getList as getArticleList} from "@/api/psy/article";
  import {getAppData} from "@/api/psy/app";
  import {router} from "@/router";

  const siteData = ref({
    studentCount: 0,
    articleCount: 0,
    appointmentCount: 0,
    teacherCount: 0,
    messageBoardCount: 0,
  });

  // 推荐文章列表
  const recommendedArticles = ref([]);

  // 明星教师列表
  const starTeachers = ref([]);

  function loadAppData() {
    getAppData({}).then((info) => {
      if (info.data) {
        siteData.value = info.data;
        console.log('网站数据', siteData);
      }
    });
  }

  loadAppData();

  loadTearchers();

  loadRecommendations();



  function loadRecommendations(){
    getArticleList({
      page: 1,
      pageSize: 6,
    }).then((info) => {
      if (info.data) {
        recommendedArticles.value = info.data.list;
        console.log('相关推荐', recommendedArticles);
      }
    });
  }

  function loadTearchers(){
    getTeacherList({
      page: 1,
      pageSize: 1,
    }).then((info) => {
      console.log('教师列表', info);
      if (info.data) {
        starTeachers.value = info.data.list;
        console.log('教师列表1', starTeachers);
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

<style scoped>

</style>