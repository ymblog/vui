# uSwitch 开关

:::demo  

```html
<template>
  <u-switch 
    close-text="关闭"  
    open-text="开启" 
    size="large"
    v-model="open" 
    @on-change="changeStatus()"
  ></u-switch>
</template>
<script>
  export default {
    data() {
      return {
        open:false
      };
    },
    methods:{
      changeStatus(){
        this.open = !this.open;
      }
    }
  };
</script>
<style>

</style>

```
:::

## uSwitch API

| 属性       | 说明                                        | 类型   | 默认值     |
| ---------- | ------------------------------------------- | ------ | ---------- |
| width      |  宽度   | [Number, String]      |
| openText   |  开启内容   | String      |
| closeText  |  关闭内容   | String      |
| size       |  large  | String      |
                