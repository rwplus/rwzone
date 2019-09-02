<template>
  <v-container class="app-header">
    <v-row>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn class="mx-2" fab dark small color="cyan" @click="gotoEdit">
        <v-icon dark>edit</v-icon>
      </v-btn>
    </v-app-bar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    gotoEdit() {
      this.$router.push({ name: "edit" });
    }
  },
  mounted() {
    
  }
};
</script>

<style>
.app-header {
  padding-top: 0;
}

.img-demo {
  width: 100px;
  height: auto;
}
</style>