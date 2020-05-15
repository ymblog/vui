# uButton 按钮

## 基础用法

:::demo 按钮类型有：主按钮、默认按钮、文字按钮以及四种颜色按钮。通过设置 type 为 primary、dashed、text 创建不同样式的按钮，不设置为默认样式。

```html
<template>
  <u-button type="primary">Primary</u-button>
  <u-button>Default</u-button>
  <u-button type="text">Text</u-button>
</template>
```

:::

:::demo 按钮有三种尺寸：大、默认（中）、小,通过设置 size 为 large 和 small 将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

```html
<template>
  <u-button type="primary" size="large">large</u-button>
  <u-button>Default</u-button>
  <u-button type="primary" size="small">small</u-button>
</template>
```

:::

:::demo block 属性将使按钮适合其父宽高。

```html
<template>
  <div class="bnt-block">
    <u-button type="primary" block>Primary</u-button>
  </div>
</template>
```

:::
:::demo block 属性将使按钮适合其父宽高。

```html
<template>
  <div class="bnt-block">
    <u-button type="primary" :loading="true" >Primary</u-button>
  </div>
</template>
```

:::


## uButton API

| 属性  | 说明                                                 | 类型    | 默认值  |
| ----- | ---------------------------------------------------- | ------- | ------- |
| type  | 按钮类型，可选值为 default、primary、text 或者不设置 | String  | default |
| size  | 按钮大小，可选值为 large、small、default 或者不设置  | String  | default |
| block | 开启后，按钮的长度为 100%                            | Boolean | false   |
| loading | 设置按钮为加载中状态                           | Boolean | false   |
