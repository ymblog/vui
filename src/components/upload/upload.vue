<template>
  <div :class="[prefixCls]">
    <div
      :class="classes"
      @click="handleClick"
    >
      <input
        ref="input"
        type="file"
        :class="[prefixCls + '-input']"
        :accept="accept"
        @change="handleChange"
      >
      <div
        :class="[prefixCls + '-box']"
      >
        <slot>
          <div :class="[prefixCls + '-content']">
            <i class="iconfont iconmy_account_icon_add" />
            <div :class="[prefixCls + '-text']">
              {{ btnText }}
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from './ajax.js';
const prefixCls = 'ui-upload';
  export default {
    name: 'Upload',
    props: {
      action: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: 'file',
      },
      accept: { // 上传类型
        type: String,
        default: ''
      },
      maxSize: { // 限制大小
        type: Number,
        default: 1024
      },
      btnText: {
        type: String,
        default: '点击上传'
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        fileList: [],
        tempIndex: 1,
        imgId: 0
      };
    },
    computed: {
      classes() {
        return {
          [`${prefixCls}-select`]: true
        };
      },
    },
    methods: {
      handleClick(e) {
        this.$refs.input.click();
      },
      handleChange(e) {
        const files = e.target.files;
        if (!files) return;
        this.uploadFiles(files);
      },
      uploadFiles(files) {
        let postFiles = Array.prototype.slice.call(files);
        if (postFiles.length === 0) return;
        postFiles.forEach(file => {
          this.upload(file);
        });
      },
      upload(file) {
        if (this.maxSize) {
          if (file.size > this.maxSize * 1024) {
            this.$emit('on-exceeded-size', file, this.fileList)
            return false;
          }
        }
        this.processData;
        // this.handleStart(file);
        let formData = new FormData();
        formData.append(this.name, file);
        ajax({
          url: this.action,
          method: 'post',
          cache: false,
          contentType:  'multipart/form-data',
          processData: false,
          data: formData,
          onUploadProgress: p => {
            return 100 * ( p.loaded / p.total )
          },
          onDownloadProgress: p => { return 100 * ( p.loaded / p.total ) }
        }).then(res => {
          if (res) {
            this.imgId = res.data.id;
            const data = res.data.id ? res.data.id : res.data;
            this.$emit('on-success',data);
          }
        }).catch(err => {
          this.$emit('on-error', err);
        })
        // this.$emit('on-progress', file.name, formData)
      },
      // 上传多个文件
      handleStart(file) {
        file.uid = Date.now() + this.tempIndex++;
        const _file = {
          status: 'uploading',
          name: file.name,
          size: file.size,
          percentage: 0,
          uid: file.uid,
          showProgress: true
        };

        this.fileList.push(_file);
      },
      clearFiles() {
        this.fileList = [];
      },
    },
  };
</script>

