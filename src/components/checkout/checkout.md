# uCheckout 多选框

## 基础用法





:::demo  
```html
<template>
  <div class="countdown">
    <u-checkout v-model="checkout" >apple</u-checkout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkout: false
      };
    },

   
  };
</script>
<style>

</style>
```

:::



## uCheckout API

| 属性       | 说明                                        | 类型   | 默认值     |
| ---------- | ------------------------------------------- | ------ | ---------- |
| value      |     | Boolean | false     |


