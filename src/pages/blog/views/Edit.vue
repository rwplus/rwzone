<template>
  <v-container fluid class="edit-container">
    <v-row class="edit-header">
      <v-col cols="4"><v-text-field autofocus></v-text-field></v-col>
    </v-row>
    <v-row class="edit-content">
      <v-col cols="6">
        <v-textarea v-model="content" auto-grow flat></v-textarea>
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
      content: ""
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
    let [header, footer] = [
      document.getElementsByClassName("app-header")[0],
      document.getElementsByClassName("app-footer")[0]
    ];
    header.style.display = "none";
    footer.style.display = "none";
  }
};
</script>

<style scoped>
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
</style>