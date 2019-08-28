<template>
  <v-container fluid class="edit-container">
    <v-row class="edit-header">头部</v-row>
    <v-row class="edit-content">
      <v-col class="inputArea" cols="6">
        <v-textarea v-model="content"
        :solo="solo"
        :auto-grow="autoGrow"
        :no-resize="noResize"
        :row-height="rowHeight"
        :rows="rows"
        ></v-textarea>
      </v-col>
      <v-col cols="6">
        <div id="html-article"></div>
      </v-col>
    </v-row>
    <v-row class="edit-footer">底部</v-row>
  </v-container>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      content: "",
      autoGrow: true,
      noResize: true,
      solo: true,
      rowHeight: 20,
      rows: 25
    };
  },
  methods: {},
  watch: {
    content(val) {
      document.querySelector("#html-article").innerHTML = marked(val);
    }
  },
  created() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return require("highlight.js").highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  },
  mounted() {
    // 隐藏header和footer
    let [header, footer] = [
      document.getElementsByClassName("app-header")[0],
      document.getElementsByClassName("app-footer")[0]
    ];
    header.style.display = "none";
    footer.style.display = "none";
    // 计算高度
    let inputHeight = document.querySelector('.inputArea').clientHeight
    this.rows = Math.floor(inputHeight / this.rowHeight) - 10
    console.log(this.rows)
  }
};
</script>

<style>
.edit-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.edit-header,
.edit-footer {
  flex: 0 1 20px;
}
.edit-content {
  flex: 1 0 auto;
}
#html-article {
  padding: 18px 5px;
}
/* 设置行间距 */
.v-textarea textarea {
  flex: 1 1 auto;
  line-height: 30px !important;
  max-width: 100%;
  min-height: 32px;
  outline: none;
  padding: 0 6px;
  width: 100%;
}
/* 去掉默认的边距 */
.v-text-field {
  padding: 0;
  margin: 0;
}
</style>