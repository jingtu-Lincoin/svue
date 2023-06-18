<template>
  <view class="type-writer-container">
    <text>{{ contentText }}</text>
    <text v-show="initPosition !== contentText.length" :style="{ display: initPosition % 2 == 0 || initPosition == total ? 'hidden' : 'inline-block' }">|</text>
  </view>
</template>

<script>
export default {
  name: 'type-writer',
  props: {
    contentList: {
      type: Array,
      required: true
    },
    delaytime: {
      type: Number,
      default: 100
    },
    uid: {
      type: String | Number
    }
  },
  data() {
    return {
      timer: null,
      contentText: '',
      initPosition: 0,
      total: 0
    };
  },
  watch: {
    contentList(newvalue) {
      const me = this;
      clearInterval(me.timer);
      me.timer = null;
      me.initWriter(newvalue);
    }
  },
  mounted() {
    const me = this;
    console.log(me);
    me.initWriter(me.contentList);
  },
  methods: {
    initWriter(messageList) {
      const me = this;
      const text = messageList.join('');
      // me.initPosition =;
      me.total = text.length;
      me.getChatContent(text);
    },
    // 逐字显示内容,text:全部聊天内容
    getChatContent(text) {
      const me = this;
      // 定义当前定时器
      let timer = setInterval(() => {
        me.initPosition++;
        // 判断是否全部拼接
        if (me.initPosition == me.total) {
          console.log(' me.total', me.total);
          // 拼接内容
          let nowStr = text.substring(0, me.initPosition);
          me.contentText = nowStr;
          // 重置起始值
          // me.initPosition = 0;

          // 拼接完成清除定时器
          clearInterval(me.timer);
          me.$emit('finish', me.uid, true);
          return;
        }

        // 未拼接完成的取字符串子串进行拼接更新
        let nowStr = text.substring(0, me.initPosition);
        me.contentText = nowStr;
      }, 200);
      me.timer = timer;
    },
    pause() {
      const me = this;
      clearInterval(me.timer);
      me.$emit('pause', me.uid, true);
    },
    continues() {
      const me = this;
      me.initWriter(me.contentList);
    },
    reset() {
      const me = this;
      me.initPosition = 0;
      me.initWriter(me.contentList);
    }
  }
};
</script>

<style scoped lang="scss">
.type-writer-container {
  width: 100%;
  height: auto;
}
</style>