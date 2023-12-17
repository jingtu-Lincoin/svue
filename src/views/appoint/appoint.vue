<template>
  <div class="min-h-screen bg-blue-100 w-full pt-10">
    <div class="flex justify-center">
      <div class="w-full max-w-screen-lg p-8 bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-4">在线预约</h1>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="appointmentType" class="block text-sm font-medium text-gray-700">预约类型</label>
            <select v-model="selectedAppointmentType" id="appointmentType" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option value="" disabled selected>请选择预约类型</option>
              <option value="类型1">类型1</option>
              <option value="类型2">类型2</option>
              <option value="类型3">类型3</option>
            </select>
          </div>
          <div>
            <label for="teacher" class="block text-sm font-medium text-gray-700">教师</label>
            <select v-model="selectedTeacher" id="teacher" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option value="" disabled selected>请选择教师</option>
              <option value="教师1">教师1</option>
              <option value="教师2">教师2</option>
              <option value="教师3">教师3</option>
            </select>
          </div>
          <div>
            <label for="appointmentDate" class="block text-sm font-medium text-gray-700">预约日期</label>
            <input v-model="selectedAppointmentDate" type="date" id="appointmentDate" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
          </div>
          <button type="submit" class="block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAppointmentType: '',
      selectedTeacher: '',
      selectedAppointmentDate: ''
    };
  },
  methods: {
    submitForm() {
      // 在这里处理表单提交逻辑
      console.log('预约类型:', this.selectedAppointmentType);
      console.log('教师:', this.selectedTeacher);
      console.log('预约日期:', this.selectedAppointmentDate);

      // 清空表单数据
      this.selectedAppointmentType = '';
      this.selectedTeacher = '';
      this.selectedAppointmentDate = '';
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
