<template>
  <v-container>
    <v-row class="author-profile d-flex justify-space-between align-center">
      <v-avatar color="indigo" class="avatar" size="40">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <div class="author-name">
        <div class="name">
          钢铁侠Tony老师
          <span class="level">LV5</span>
        </div>
        <div class="overview">
          <span class="time">2019-08-29</span>
          <span class="read">阅读量：9999</span>
          <v-icon color="#888" size="18">mdi-eye</v-icon>
        </div>
      </div>
      <div class="attention">
        <v-btn class="ma-2" color="primary" dark>
          关注
          <v-icon dark right>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row>
      <v-col cols="10">
        <article>
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" max-height="250"></v-img>
          <h1 class="title">Artcle --- {{ $route.params.id }}</h1>
          <p>文章第1段</p>
          <p>文章第2段</p>
          <p>文章第3段</p>
          <p>文章第4段</p>
        </article>
      </v-col>
      <v-col cols="2">其他内容，目录等</v-col>
    </v-row>
    <Tag />
  </v-container>
</template>

<script>
import Tag from "@/components/blog/Tag";
export default {
  data() {
    return {};
  },
  components: {
    Tag
  }
};
</script>

<style scoped lang='scss'>
.author-profile {
  height: 50px;
  margin-bottom: 20px;
}
.avatar {
  text-align: center;
  flex: 0 0 40px;
}
.author-name {
  margin-left: 20px;
  flex: 1 0 auto;
  .name {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    .level {
      margin-left: 10px;
      box-sizing: content-box;
      padding: 3px;
      display: inline-block;
      height: 12px;
      line-height: 12px;
      text-align: center;
      background-color: black;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 900;
      color: #fff;
    }
  }
  .overview {
    font-size: 12px;
    color: #ccc;
    display: flex;
    align-items: center;
    .time {
      margin-right: 30px;
    }
    .read {
      color: #000;
    }
  }
}
.attention {
  flex: 0 0 20px;
}
</style>