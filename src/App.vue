<template>
  <div class="container" id="app">
    <div class="menu">
      <ul>
        <li>
          <a href="https://github.com/ymblog/vui" target="_blank">项目地址</a>
        </li>
        <li>
          <router-link to="/">button 按钮</router-link>
        </li>
        <li>
          <!-- <input readonly placeholder="00"/> -->
          <router-link to="/input">Input 按钮</router-link>
        </li>
        <li>
          <router-link to="/countdown">countdown 倒计时</router-link>
        </li>
        <li>
          <router-link to="/form">form 按钮</router-link>
        </li>
        <li>
          <router-link to="/message">message 全局提示</router-link>
        </li>
        <li>
          <router-link to="/select">select 选择器</router-link>
        </li>
        <li>
          <router-link to="/tooltip">tooltip  选择器</router-link>
        </li>
        <li>
          <router-link to="/modal">modal 弹窗</router-link>
        </li>
        <li>
          <router-link to="/table">table 表格</router-link>
        </li>
        <li>
          <router-link to="/checkout">checkout 多选框</router-link>
        </li>
        <li>
          <router-link to="/switch">switch 开关</router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view class="markdown"></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" >
html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
html,
body,
div,
li,
ul {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
.container {
  width: 100%;
  height: 100%;
  .menu {
    width: 220px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-right: 1px solid #eee;
    li {
      line-height: 50px;
      font-size: 14px;
      a {
        padding: 0 40px;
        display: block;
        color:#333;
      }
    }
  }
  .main {
    padding: 40px 40px 40px 241px;
    min-height: 100%;
    box-sizing: border-box;
  }
}
.markdown h1 {
  color: #0d1a26;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 8px;
  font-size: 30px;
  line-height: 38px;
}
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  font-family: Lato;
  margin: 0.6em 0 0.6em;
  font-weight: 500;
  clear: both;
}
.markdown h3 {
  font-size: 18px;
}
.markdown h4 {
  font-size: 16px;
}
.markdown h5 {
  font-size: 14px;
}
.markdown h6 {
  font-size: 12px;
}
.markdown p,
.markdown pre {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.markdown ul > li > p,
.markdown ol > li > p {
  margin: 0.2em 0;
}
.markdown ul {
  padding: 0;
  margin: 0;
}

.markdown ol > li {
  list-style-type: decimal;
  margin-left: 20px;
  padding-left: 4px;
  padding-top: 15px;
}
.markdown > table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #ebedf0;
  width: 100%;
  margin: 8px 0 16px;
}
.markdown > table th,
.markdown > table td {
  color: #314659;
  border: 1px solid #ebedf0;
  text-align: left;
  padding: 10px 15px;
}
.markdown > table th {
  white-space: nowrap;
  color: #5c6b77;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.02);
}
.markdown strong,
.markdown b {
  font-weight: 500;
}
.markdown .sh-markdown-permalink {
  opacity: 0;
}
.markdown h1:hover .sh-markdown-permalink,
.markdown h2:hover .sh-markdown-permalink,
.markdown h3:hover .sh-markdown-permalink,
.markdown h4:hover .sh-markdown-permalink,
.markdown h5:hover .sh-markdown-permalink,
.markdown h6:hover .sh-markdown-permalink {
  opacity: 1;
  display: inline-block;
}
.markdown > br,
.markdown p > br {
  clear: both;
}
.markdown blockquote {
  font-size: 90%;
  color: #0d1a26;
  border-left: 4px solid #ebedf0;
  padding-left: 0.8em;
  margin: 1em 0;
}
.markdown blockquote p {
  margin: 0;
}
.markdown hr {
  height: 1px;
  border: 0;
  background: #ebedf0;
  clear: both;
}
.markdown code {
  font-family: Microsoft YaHei;
  margin: 0 1px;
  background: #f2f4f5;
  padding: 0.2em 0.5em;
  border-radius: 3px;
  font-size: 0.9em;
  border: 1px solid #eee;
}
.bnt-block {
  height: 60px;
}
</style>



