  <template>
  <v-layout row class="align-center layout app--page-header">
    <v-breadcrumbs divider='-' >
         <v-breadcrumbs-item><v-icon color="deep-orange">home</v-icon></v-breadcrumbs-item>
        <v-breadcrumbs-item v-for="(breadcrumb, index) in breadcrumbs" :key="index" active-class='warning--text'>{{breadcrumbs[index]}}</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
               <v-btn-toggle v-model="themeOption">
              <v-btn flat value="dark">
                <v-icon>fa-moon-o</v-icon>
              </v-btn>
              <v-btn flat value="light">
                <v-icon>fa-sun-o</v-icon>
              </v-btn>
            </v-btn-toggle>
    </div>
  </v-layout>

</template>

<script>
import menu from '@/api/menu';
export default {
  name: 'page-header',
  data () {
    return {
      title: '',
      goDark: false,
      themeOption: 'light',
    };
  },
  computed: {
    breadcrumbs: function () {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child =  item.items.find(i => {
            return i.component === this.$route.name;
          });
          if (child) {
            breadcrumbs.push(item.title);
            breadcrumbs.push(child.title);
            this.title = child.title;
          }
        } else {
          if (item.name === this.$route.name) {
            this.title = item.title;
            breadcrumbs.push(item.title);
          }
        }
      });
      return breadcrumbs;
    },
  },
  watch: {
    themeOption: {
      handler (val) {
        this.$vuetify.dark = (val === 'dark');

      },
      immediate: true
    },
  }
};
</script>
