<template>
      <v-app-bar
        app
      >
        <v-toolbar-title></v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-btn icon>
          <v-icon small>fa-search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon small>fa-heart</v-icon>
        </v-btn>

            <v-btn
              icon
            >
              <v-icon small>fa-ellipsis-v</v-icon>
            </v-btn>
      </v-app-bar>
</template>


<script>
export default {
    name: 'app-toolbar',
    components: {
    },
    data: () => ({
      drawer: null,
      items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    }),
  }
</script>
