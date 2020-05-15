# Tooltip 简单的文字提示气泡框


:::demo 基本使用

```html
<template>
  <div class="base">
    <u-tooltip content="简单的文字提示气泡框">
      上左
    </u-tooltip>
    <u-tooltip content="简单的文字提示气泡框" placement ="top-center">
      上边
    </u-tooltip>
     <u-tooltip content="简单的文字提示气泡框" placement ="top-right">
      上右
    </u-tooltip> 
  </div>
</template>

<style>
  .ui-tooltip{
    margin:0 20px;
  }
</style>
```
:::
## uTooltip API

| 属性       | 说明                                        | 类型   | 默认值     |
| ---------- | ------------------------------------------- | ------ | ---------- |
| content      |显示的正文内容                              | String  |           |
| placement    | 提示框出现的位置，可选值为top-center   top-right  top-left | String | top-left    |
