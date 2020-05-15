# upLoad 简单的文字提示气泡框


:::demo 基本使用

```html
<template>
  <div >
   <u-upload
      action="/api/resource/upload"
      accept="image/jpg, image/png, image/jpeg"
      @on-success="(val) => formData.idCardFrontUrl = val"/>
  
  </div>

</template>
```

:::demo 自定义文本

```html
<template>
  <div >
   <u-upload
      action="/api/resource/upload"
      accept="image/jpg, image/png, image/jpeg"
      @on-success="(val) => formData.idCardFrontUrl = val"
      :btn-text="buttonText">
  </div>

</template>
<script>
  export default {
    data() {
      return {
        buttonText: '上传'
      }
    };
  }
</script>
```

:::demo 自定义内容

```html
<template>
  <div >
   <u-upload
      action="/api/resource/upload"
      accept="image/jpg, image/png, image/jpeg"
      @on-success="(val) => formData.idCardFrontUrl = val">
      <button>点击上传</button>
      </u-upload>
  </div>
</template>
```

