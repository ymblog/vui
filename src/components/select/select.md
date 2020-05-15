# uSelect 选择器

:::demo 基本使用

```html
<template>
  <div class="select">
    <u-select readonly v-model="city">
      <u-select-item v-for="(item,index) in cityList" :key="index" :value="item.value">{{item.label}}</u-select-item>
    </u-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        city: '',
        cityList: [
          {
            value: 'New York',
            label: 'New York',
          },
          {
            value: 'London',
            label: 'London',
          },
          {
            value: 'Sydney',
            label: 'Sydney',
          },
          {
            value: 'Ottawa',
            label: 'Ottawa',
          },
          {
            value: 'Paris',
            label: 'Paris',
          },
          {
            value: 'Canberra',
            label: 'Canberra',
          },
        ],
      };
    },
  };
</script>
```

:::



:::demo 可搜索

```html
<template>
  <div class="select">
    <u-select readonly v-model="city" seach>
      <u-select-item v-for="(item,index) in cityList" :key="index" :value="item.value">{{item.label}}</u-select-item>
    </u-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        city: '',
        cityList: [
          {
            value: 'New York',
            label: 'New York',
          },
          {
            value: 'London',
            label: 'London',
          },
          {
            value: 'Sydney',
            label: 'Sydney',
          },
          {
            value: 'Ottawa',
            label: 'Ottawa',
          },
          {
            value: 'Paris',
            label: 'Paris',
          },
          {
            value: 'Canberra',
            label: 'Canberra',
          },
        ],
      };
    },
  };
</script>
```

:::