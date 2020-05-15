# uInput 输入框

:::demo 基本使用

```html
<template>
  <div class="base">
    <u-input placeholder="Basic usage"></u-input>
    <u-input placeholder="Basic usage" :bottom="true"></u-input>
  
  </div>

</template>
```

:::
:::demo <u-input/> 输入框定义了三种尺寸（大、默认、小），高度分别为 60px、50px 和 40px。

```html
<template>
  <div class="components-input-demo-size">
    <u-input size="large" placeholder="large size"></u-input>
    <u-input placeholder="default size"></u-input>
    <u-input placeholder="small size" size="small"></u-input>
  </div>
</template>
<style scoped>
  .components-input-demo-size .ui-input {
    width: 195px;
    margin: 0 8px 8px 0;
  }
  .base input:first-child{
    margin-bottom:15px;
  }
</style>
```

:::

## uinput API

| 属性  | 说明                                                 | 类型    | 默认值  |
| ----- | ---------------------------------------------------- | ------- | ------- |
| size  | 按钮大小，可选值为 large、small、default 或者不设置  | String  | default |
| bottom | 按钮类型，可选值为 default、primary、text 或者不设置 | Boolean  | false |
