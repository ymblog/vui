# uCountdown 倒计时

## 基础用法





:::demo 倒计时按钮。通过设置 type 为 primary、text 创建不同样式的按钮，不设置为默认样式

```html
<template>
  <div class="countdown">
    <u-countdown
      @click="countdownClick"
      v-model="state"
      type="primary"
    ></u-countdown>
    <u-countdown
      @click="countdownClick"
      v-model="state"
      type="text"
      
    ></u-countdown>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        state: 0,
        timeObj: ""
      };
    },

    methods: {
      countdownClick() {
        if (this.state === 0 || this.state === 3) {
          this.state = 1;
          let _this = this;
          this.timeObj = setTimeout(() => {
            _this.state = 2;
            clearTimeout(this.timeObj);
          }, 3000);
        }
      }
    }
  };
</script>
<style>
  .countdown .ui-countdown {
    margin-right: 20px;
  }
</style>
```

:::



## uCountdown API

| 属性       | 说明                                        | 类型   | 默认值     |
| ---------- | ------------------------------------------- | ------ | ---------- |
| value      | 0:默认 ，1：发送中，2：倒计时中，3:结束     | Number | 0          |
| type       | 按钮类型，可选值为 primary、text 或者不设置 | String | default    |
| seconds    | 倒计时秒数                                  | Number | 60         |
| startText  | 默认状态显示的文字                          | String | 获取验证码 |
| duringText | 过度状态                                    | String | 发送中...  |
| finishText | 完成状态                                    | String | 再次发送   |

