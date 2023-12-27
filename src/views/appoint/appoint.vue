<template>
  <div class="h-full bg-blue-100 w-1/3 pt-10">
    <div class="flex justify-center">
      <div class="w-full p-8 bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-4">在线预约</h1>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="appointmentType" class="block text-sm font-medium text-gray-700">预约类型</label>
            <select v-model="appointment.appointType" id="appointmentType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option value="" disabled selected>请选择预约类型</option>
              <option value="类型1">类型1</option>
              <option value="类型2">类型2</option>
              <option value="类型3">类型3</option>
            </select>
          </div>
          <div>
            <label for="teacher" class="block text-sm font-medium text-gray-700">教师</label>
            <select v-model="appointment.teacherId" id="teacher" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option value="" disabled selected>请选择教师</option>
              <option :value="teacher.id" v-for="(teacher,index) in teachers">{{ teacher.name }}</option>
            </select>
          </div>
          <div>
            <label for="appointmentDate" class="block text-sm font-medium text-gray-700">预约日期</label>
            <input v-model="appointment.appointDate" type="date" id="appointmentDate" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
          </div>
          <button type="submit" class="block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
  import {router} from "../../router";
  import {useMessage} from "naive-ui";
  import {getList} from "@/api/psy/teacher";
  import {useUserStoreWithOut} from '@/store/modules/user'
  import {add} from "@/api/psy/appoint";
  const userStore = useUserStoreWithOut()
  const message = useMessage();
  let appointment = reactive({
    studentId: '',
    studentName: '',
    studentPhone: '',
    studentHead: '',
    teacherId: '',
    teacherName: '',
    teacherHead: '',
    appointDate: '',
    appointType: '',
  });
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


  function submitForm() {
    // 在这里处理表单提交逻辑
    console.log('预约信息:', appointment);
    if (appointment.appointType === '' || appointment.teacherId === '' || appointment.appointDate === '') {
      message.warning('请填写完整信息');
      return;
    }
    appointment.studentId = userStore.getUserInfo.id;
    appointment.studentName = userStore.getUserInfo.name;
    appointment.studentPhone = userStore.getUserInfo.tel;
    appointment.studentHead = userStore.getUserInfo.userHead;

    const teacher = teachers.value.find((item) => {
      return item.id === appointment.teacherId;
    });

    appointment.teacherName = teacher.name;
    appointment.teacherHead = teacher.userHead;
    console.log('预约信息1:', appointment);

    if(!appointment.studentId){
      message.warning('请先登录');
      return;
    }

    add(appointment).then((info) => {
      console.log('预约结果', info);
      if (info.data) {
        message.success('预约成功');
        router.push('/index');
      } else {
        message.error('预约失败');
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
