<template>
  <v-container>
    <v-row v-for="item in list" :key="item.id">
      <v-card :width="'100%'">
        <v-img
          v-if="true"
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title class="align-end fill-height">{{ item.title }}</v-card-title>
        </v-img>
        <v-card-title v-else>{{ item.title }}</v-card-title>
        <v-container fluid>
          <v-row justify="space-between">
            <v-col>
              <v-card-text>{{ item.content }}</v-card-text>
            </v-col>
            <v-col>
              <v-card-actions v-if="true" class="list-action">
                <v-btn outlined @click="routeArt(item.id)">详情</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, title: "标题1", content: "内容1" },
        { id: 2, title: "标题2", content: "内容2" },
        { id: 3, title: "标题3", content: "内容3" },
        { id: 4, title: "标题4", content: "内容4" },
        { id: 5, title: "标题5", content: "内容5" }
      ]
    };
  },
  methods: {
    routeArt(id) {
      this.$router.push({ name: "artcle", params: { id } });
    }
  }
};
</script>

<style>
.list-action {
  float: right;
}
</style>