# uModal 全局提示

:::demo 基本使用

```html
<template>
    <div>
        <u-button type="primary" @click="open">Open Modal</u-button>
        <u-modal v-model="bol">
           <div >22</div>
        </u-modal>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                bol:false
            }
        },
        methods: {
            open(){
                    this.bol = true;
            }
        }
    }
</script>

</template>
```

:::
## uTooltip API

| 属性       | 说明                                        | 类型   | 默认值     |
| ---------- | ------------------------------------------- | ------ | ---------- |
| height      |弹窗高度                              | Number  |     300      |
| width    |   弹窗宽度度| Number | 500  |
| value    |   显示隐藏| Boolean | false  |