<template>
  <v-container fluid class="edit-container">
    <v-row class="edit-header">
      <v-toolbar>
        <v-icon color="#000" small>fa-book</v-icon>
        <v-col cols='3'>
        <v-text-field hide-details label="请输入文章标题" class="pl-2"></v-text-field>
        </v-col>
        <div class="flex-grow-1"></div>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon small>fa-save</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title class="body-2">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon>
          <v-icon small>fa-search</v-icon>
        </v-btn>
        <v-switch v-model="ex11" label="FSR" color="red" value="red" hide-details></v-switch>
      </v-toolbar>
    </v-row>
    <v-row class="edit-content">
      <v-col class="inputArea" cols="6">
        <v-textarea
          ref="textarea"
          v-model="content"
          spellcheck="false"
          autocapitalize="off"
          autocomplete="off"
          autocorrect="off"
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
  </v-container>
</template>

<script>
import marked from "marked";
import "highlight.js/styles/github.css";
export default {
  data() {
    return {
      content: "",
      autoGrow: true,
      noResize: true,
      solo: true,
      rowHeight: 20,
      rows: 25,
      items: [{title: 'save'}],
      ex11: ''
    };
  },
  methods: {
    // 防抖函数
    debounce(fn, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
        }, delay);
      };
    }
  },
  watch: {
    content(val) {
      document.querySelector("#html-article").innerHTML = marked(val);
    }
  },
  created() {
    // 引入marked解析器
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
    let inputHeight = document.querySelector(".inputArea").clientHeight;
    this.rows = Math.floor(inputHeight / this.rowHeight) - 10;
    // console.log(this.rows);
    // // 代码高亮
    // document.addEventListener("DOMContentLoaded", () => {
    //   document.querySelectorAll("pre code").forEach(block => {
    //     hljs.highlightBlock(block);
    //   });
    // });
    // textarea支持intent缩进
    // let tInput = this.$refs.textarea.$refs.input
    // tInput.addEventListener('keydown', function(e){
    //   console.log(this)
    //   if(e.keyCode == 9){
    //     e.preventDefault()
    //     var intent = '  '

    //   }
    // })
    // $("textarea").on("keydown", function(e) {
    //   if (e.keyCode == 9) {
    //     e.preventDefault();
    //     var indent = "    ";
    //     var start = this.selectionStart;
    //     var end = this.selectionEnd;
    //     var selected = window.getSelection().toString();
    //     selected = indent + selected.replace(/\n/g, "\n" + indent);
    //     this.value =
    //       this.value.substring(0, start) + selected + this.value.substring(end);
    //     this.setSelectionRange(start + indent.length, start + selected.length);
    //   }
    // });
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
.edit-header {
  height: 64px;
  margin-top: -12px;
  flex: 0 0 auto;
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

h1 {
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 35px;
}

h2 {
    font-size:21px;
     margin-top: 0;
     margin-bottom: 24px;
}

h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 24px;
}

h4 {
    font-size: 16px;
    margin-top: 0;
     margin-bottom: 24px;
}

h5 {
    font-size:15px;
    margin-top: 0;
     margin-bottom: 24px;
}

h6 {
    font-size:15px;
    margin-top: 0;
     margin-bottom: 24px;
}


p {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 14px;
}

ul {
    margin-bottom: 1rem;
}

ul ol {
    padding-left: 40px !important;
}

li {
    font-size:14px;
    letter-spacing: 0.03125em !important;
}

ul li p {
    font-size: 12px;
 }

code {
    background-color: #282c34 !important;
    color: #fff;
    width: 100%;
    min-height: 20px;
}

code, pre[class*=language-] {
    line-height: 1.4;
    padding: 20px 24px;
    background: transparent;
    overflow: auto;
    margin: 7px 0;
    overflow: auto;
}


code[class*=language-],pre[class*=language-] {
    color: #ccc;
    background: none;
    text-align: left;
    white-space: pre;
    font-size: 12px;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

blockquote {
    border-left: 5px solid #f60;
    border-radius: 10px;
    margin: 20px 0;
    padding:.8rem 1.6rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

blockquote p {
    font-size: 10px;
    margin-bottom: 0px !important;
}

a {
    background-color: transparent;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
}

p code {
    color: #476582 !important;
    width: fit-content;
    padding: .25rem .5rem;
    margin: 0;
    /* height: auto; */
    font-size: .85em;
    background-color: rgba(27,31,35,.05) !important;
    border-radius: 3px;
}

p code kbd {
    border-radius: 3px;
    white-space: pre-wrap;
    font-size: 85%;
    font-weight: 900;
}

.hljs-keyword, .hljs-selector-tag, .hljs-subst {
    color: #f60;
    font-weight: bold;
}

</style>