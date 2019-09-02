<template>
  <v-app dark>
   <app-drawer></app-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppDrawer from '@/components/layout/AppDrawer';
// import AppToolbar from '@/components/layout/AppToolbar';

export default {
  name: 'App',
  components: {
    AppDrawer,
  },
  data: () => ({
  }),
};
</script>