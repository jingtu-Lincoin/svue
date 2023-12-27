<template>
  <div class="h-full  w-full ">
    <div class="flex flex-col justify-center items-center mt-5 p-5">
      <div v-for="(teacher,index) in teachers" :key="teacher.id" class="p-4 border shadow bg-white w-5/6 mt-5 rounded-2xl">
        <div class="flex items-center">
          <img :src="teacher.userHead" alt="Teacher Avatar" class="w-40 h-40 rounded">
          <div class="ml-2 pt-0">
            <h2 class="text-xl font-bold">{{ teacher.name }}</h2>
            <p>{{ teacher.phone }}</p>
            <p>{{ teacher.code }}</p>
            <p>{{ teacher.department }}</p>
          </div>
        </div>
        <p class="mt-4">{{ teacher.des }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, onMounted, reactive, ref} from "vue";
  import {getList} from "@/api/psy/teacher";
  let teachers = ref([]);

  loadTearchers();

  function loadTearchers(){
    getList({
      page: 1,
      pageSize: 100,
    }).then((info) => {
      console.log('教师列表', info);
      if (info.data) {
        teachers.value = info.data.list;
        console.log('教师列表1', teachers);
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
