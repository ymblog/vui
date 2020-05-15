# uTable 表格


:::demo 基本使用

```html
<template>
  <u-table :columns="columns"  :dataSource="data">
       <template v-slot:way="{title}">
          <div >{{title}}</div>
        </template>
       <template v-slot:operation="{items,index}">
          <span  @click="operation(items,index)">详情</span>
        </template>
         
        <template v-slot:details="{items,index}" >
       
            <ul class="item" v-show="items.bol" >
              <li>
                <span>2019-02-18 16:48:45</span>
                <span>成交数量：1624.65</span>
                <span>成交价格：0.036754</span>
                <span>手续费：0.036754 USDT</span>
              </li>
            <li>
                <span>2019-02-18 16:48:45</span>
                <span>成交数量：1624.65</span>
                <span>成交价格：0.036754</span>
                <span>手续费：0.036754 USDT</span>
              </li>
            </ul>
        
        </template>
        
  </u-table>
</template>
<script>
export default {
    data(){
        return{
           
            columns:[{
                 title: '委托时间',
                 key:'time',
                  width:'200'
                }, 
                {
                 title: '交易对',
                 key:'coins'
                },
                 {
                  title: '方式',
                  key:'way'
                },
                {
                  title: '操作',
                  key:'operation',
                  width:'80',
                  align:'right'
                }
                ],
                data:[{
                  time:'2019-02-18 16:48:45',
                  coins:'BTC / USDT',
                  way:'限价交易',
                  bol:false
                },{
                time:'2019-02-18 16:48:45',
                  coins:'BTC / USDT',
                  way:'限价交易',
                  bol:false
                }]
        }
    },
     methods: {
       operation(data,index){
         data.bol = !data.bol;
        
       }
     }
}

</script>
<style lang="less">
 
  .ui-table .item{
      padding:0 20px;
      li{
        padding:15px 0;
        font-size:12px!important;
        color:rgba(47,42,32,1);
        border-bottom:1px solid #EAEAEA;
        span{
          margin-left:30px;
        }
      }
  }
</style>
```
:::


## Table  API

| 属性      | 说明                                                       | 类型   | 默认值   |
|-----------|------------------------------------------------------------|--------|----------|
| columns   | 表格列的配置描述，具体项见下表                                             | array |          |
| dataSource | 数据数组 | any |  |



## Column   API

| 属性      | 说明                                                       | 类型   | 默认值   |
|-----------|------------------------------------------------------------|--------|----------|
| align   | 设置列内容的对齐方式                                          | left,right ,center |    'left'      |
| key | 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法 | string |  |
| title | 列头显示文字 | string |  |
| width | 列宽度 | string| |  |
| onFilter | 本地模式下，确定筛选的运行函数, 使用template或jsx时作为filter事件使用 | Function |  |