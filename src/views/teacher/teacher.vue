<template>
  <div class="min-h-screen bg-white  w-full">
    <div class="flex flex-col justify-center items-center mt-5">
      <div v-for="teacher in teachers" :key="teacher.id" class="p-4 border shadow bg-blue-100 w-5/6 mt-5">
        <div class="flex items-center">
          <img :src="teacher.avatar" alt="Teacher Avatar" class="w-40 h-40 rounded-full">
          <div>
            <h2 class="text-xl font-bold">{{ teacher.name }}</h2>
            <p>{{ teacher.employeeId }}</p>
            <p>{{ teacher.department }}</p>
          </div>
        </div>
        <p class="mt-4">{{ teacher.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachers: [
        {
          id: 1,
          name: 'John Doe',
          employeeId: 'T123456',
          department: 'Mathematics',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          avatar: '/assets/images/teacher.jpg',
        },
        {
          id: 2,
          name: 'John Doe',
          employeeId: 'T123456',
          department: 'Mathematics',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          avatar: '/assets/images/teacher.jpg',
        },
        {
          id: 2,
          name: 'John Doe',
          employeeId: 'T123456',
          department: 'Mathematics',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          avatar: '/assets/images/teacher.jpg',
        },
        // Add more teacher objects here
      ],
    };
  },
};
</script>
<style>
html,
body {
  width: 100%;
}
</style>
