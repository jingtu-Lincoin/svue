<script setup>

</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="bg-fuchsia-800">
      <div class="pt-16 pl-5 pr-5 ">
        <p class="text-amber-50">请填写拼多多下单时收件人的姓名和电话</p>
        <div class="flex flex-col items-center justify-center w-full  mt-5">
          <div class="flex flex-col items-center justify-center w-full h-12">
            <input type="text" name="name" placeholder="请输入拼多多下单用户名" class="w-5/6 h-2/3  rounded-lg pl-2" >
          </div>
          <div class="flex flex-col items-center justify-center w-full h-12 mt-5">
            <input type="text" name="tel" placeholder="请输入拼多多下单手机号" class="w-5/6 h-2/3 rounded-lg pl-2">
          </div>
          <button type="submit" class="w-5/6 h-12 bg-amber-500 rounded-lg mt-5 text-amber-50 font-bold">查看您的订单</button>
        </div>
      </div>
      <div class="flex-1 mt-10 pt-10 bg-fuchsia-950 pl-5 pr-5 text-amber-50 h-full">
        <div>
            <div class="bg-fuchsia-800 rounded-xl p-5 mt-5">
              <p class="mt-5">订单编号:dfas</p>
              <p class="mt-5">用户姓名:dfas</p>
              <p class="mt-5">用户电话:dfas</p>
              <img src="" class="w-40 h-40 mt-5" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>