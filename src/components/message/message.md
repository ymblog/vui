# uMessage 全局提示

:::demo 基本使用

```html
<template>
    <u-button type="primary" @click="info">Display info prompt</u-button>
</template>
<script>
    export default {
        methods: {
            info () {
                  this.$uMessage.info('This is a info tip');
            }
        }
    }
</script>

</template>
```

:::
## uCountdown API
#### 组件提供了一些静态方法，使用方式和参数如下：

#### message.success(content, [duration], onClose)
#### message.error(content, [duration], onClose)
#### message.info(content, [duration], onClose)
#### message.warning(content, [duration], onClose)
#### message.warn(content, [duration], onClose) // alias of warning
#### message.loading(content, [duration], onClose)
| 属性       | 说明                                        | 类型   | 默认值     |
| ---------- | ------------------------------------------- | ------ | ---------- |
| content      | 提示内容     | String | -       |
| render       | 自定义描述内容，使用 Vue 的 Render 函数 | Function | -    |
| duration    | 自动关闭的延时，单位秒，不关闭可以写 0                                  | Number | 1.5s         |
| onClose  | 	关闭时的回调                          | Function | - |
| closable | 是否显示关闭按钮                                    | Boolean | false  |
