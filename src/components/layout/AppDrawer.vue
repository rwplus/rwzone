<template>
 <v-navigation-drawer
      id="app-drawer"
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      floating
      color="#fafafa"
    >
         <v-list-item color="#fff">
          <v-list-item-avatar>
            <v-img src="@/assets/images/1.jpeg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>weeknd.su</v-list-item-title>

          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>fa-angle-left</v-icon>
          </v-btn>
        </v-list-item>
      <v-list dense shaped>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon small>fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/docs">
          <v-list-item-action>
            <v-icon small>fa-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>


<script>
export default {
    name: 'app-drawer',
    components: {
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
      mini: true,
    }),
  }
</script>
