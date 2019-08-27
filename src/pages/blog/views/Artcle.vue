<template>
  <v-container>
    <h1 class="title">Artcle --- {{ $route.params.id }}</h1>
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

<style>
.title {
  text-align: center;
}
</style>