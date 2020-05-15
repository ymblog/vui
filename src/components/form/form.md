






# uForm 表单

:::demo u-form 组件基于  async-validator 实现的数据验证，给 u-form 设置属性 rules，同时给需要验证的 u-form-item 设置属性 prop 指向对于字段即可。

```html
<template>
  <div class="u-form">
    <u-form >
      <u-form-item label="账号">
        <u-input />
      </u-form-item>
      <u-form-item label="密码" >
        <u-input  type="password"/>
      </u-form-item>
    </u-form>
    
  </div>
</template>

<style>
    .u-form .ui-formItem{
        margin-bottom:28px;
    }
</style>
```

:::


:::demo u-form 
```html
<template>
  <div class="u-form">
    <u-form ref="formValidate" :model="formValidate" :rules="ruleValidate">
      <u-form-item label="账号" prop="name" labelType="location">
        <u-input v-model="formValidate.name" :data-value="formValidate.name.length" :bottom="true"/>
      </u-form-item>
      <u-form-item label="密码" prop="password" labelType="location">
        <u-input v-model="formValidate.password"  type="password" :data-value="formValidate.name.length" :bottom="true"/>
      </u-form-item>
    </u-form>
    <u-button type="primary" @click="handleSubmit">验证</u-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formValidate: {
          name: "",
          password: ""
        },
        ruleValidate: {
          name: [{ required: true, message: "账号不能为空" }],
          password: [{ required: true, message: "密码不能为空" }]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs["formValidate"].validate(valid => {
          consol.log(valid);
        });
      },
      handleReset() {
        this.$refs["formValidate"].resetFields();
      }
    }
  };
</script>
<style>
    .u-form .ui-formItem{
        margin-bottom:28px;
    }
</style>
```

:::
