<template>
 <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app id="inspire" class="app" :dark="$vuetify.dark">
        <app-drawer class="app--drawer"></app-drawer>
        <v-content :dark="$vuetify.dark">
          <page-header v-if="$route.meta.breadcrumb"></page-header>
          <div class="page-wrapper">
            <router-view></router-view>
          </div>
        </v-content>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view :key="$route.fullpath"></router-view>
        </keep-alive>
      </transition>
    </template>

    <v-snackbar
      :timeout="3000"
      top
      multi-line
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon color="pink">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import AppDrawer from '@/components/core/AppDrawer';
import AppEvents from  './api/event';
import PageHeader from '@/components/core/PageHeader';

export default {
  components: {
    AppDrawer,
    PageHeader
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: true,
      text: 'welcome to rwzone',
      color: 'black',
    }
  }),

  computed: {

  },

  created () {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },

  methods: {
    openThemeSettings () {
      this.$vuetify.goTo(0);
      this.rightDrawer = (!this.rightDrawer);
    }
  },

};
</script>

