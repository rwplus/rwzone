<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
     <v-layout row wrap>
       <v-flex sm12>
            <h4>Overall</h4>
       </v-flex>
        <v-flex lg2 sm6 xs12>
            <mini-card
              icon="fa fa-wechat"
              title="100"
              sub-title="Newer"
              color="indigo"
            >
            </mini-card>
          </v-flex>
          <v-flex lg2 sm6 xs12>
            <mini-card
              icon="fa fa-github"
              title="150"
              sub-title="Forks"
              color="red"
            >
            </mini-card>
          </v-flex>
          <v-flex lg2 sm6 xs12>
            <mini-card
              icon="fa fa-qq"
              title="200"
              sub-title="team"
              color="light-blue"
            >
            </mini-card>
          </v-flex>
          <v-flex lg2 sm6 xs12>
            <mini-card
              icon="fa fa-google-plus"
              title="50"
              sub-title="google"
              color="purple"
            >
            </mini-card>
          </v-flex>
          <v-flex lg2 sm6 xs12>
            <mini-card
              icon="fa fa-facebook"
              title="80"
              sub-title="memebers"
              color="cyan"
            >
            </mini-card>
          </v-flex>
                    <v-flex lg2 sm6 xs12>
            <mini-card
              icon="fa fa-linkedin"
              title="100"
              sub-title="linkin"
              color="green"
            >
            </mini-card>
          </v-flex>
    <v-flex sm12>
            <h4>Anaysic</h4>
    </v-flex>
    <v-flex lg3 sm6 xs12 v-for="(item, index) in trending" :key="'trending' + index">
        <line-card
            :title="item.subheading"
            :sub-title="item.caption"
            :icon="item.icon.label"
            :color="item.icon.color"
            :value="item.linear.value">
        </line-card>
    </v-flex>
    <v-flex lg3 sm6 xs12 v-for="(item, index) in trending" :key="'trending' + index">
        <line-card
            :title="item.subheading"
            sub-title="分润"
            :icon="item.icon.label"
            color="error"
            :value="item.linear.value">
        </line-card>
    </v-flex>
        <v-flex lg3 sm6 xs12 v-for="(item, index) in trending" :key="'trending' + index">
        <line-card
            :title="item.subheading"
            sub-title="销售额"
            :icon="item.icon.label"
            color="cyan"
            :value="item.linear.value">
        </line-card>
    </v-flex>
     <v-flex lg3 sm6 xs12 v-for="(item, index) in trending" :key="'trending' + index">
        <line-card
            :title="item.subheading"
            sub-title="提成"
            :icon="item.icon.label"
            color="warning"
            :value="item.linear.value">
        </line-card>
    </v-flex>

    <v-flex sm12>
            <h4>Monitoring</h4>
    </v-flex>
        <v-flex lg4 sm6 xs12>
          <box-chart
            card-color="indigo"
            title="PV"
            sub-title="10%"
            icon="trending_up"
            :data="salaryData"
            :chart-color="[color.shades.white]"
            type="line"
          >
          </box-chart>
        </v-flex>

     <v-flex sx12 sm12>
       <v-tabs
        centered
        color="orange"
        round
        slider-color="cyan"
      >
     <v-tab>
       日报
     </v-tab>
       <v-tab>
         周报
     </v-tab>
       <v-tab>
         月报
     </v-tab>
       <v-tab-item>
          <v-card>
          <e-chart
             :path-option="[
             ['dataset.source', salaryData],
             ['color',['#31e8bf']],
             ['series[0].type', 'bar'],
             ]"
             height="350px"
             width="100%"
             >
            </e-chart>
          </v-card>
        </v-tab-item>
       <v-tab-item>
          <v-card>
            <v-card-text>hello2</v-card-text>
          </v-card>
        </v-tab-item>
       <v-tab-item>
          <v-card>
            <v-card-text>hello3</v-card-text>
          </v-card>
        </v-tab-item>
       </v-tabs>
       </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>


<script>
import API from '@/api';
import EChart from '@/components/chart/echart';
import Material from 'vuetify/es5/util/colors';
import MiniCard from '@/components/material/MiniCard';
import LineCard from '@/components/material/LineCard';
import BoxChart from '@/components/material/BoxChart';

export default {
  name: 'dashboard',
  components: {
    EChart,
    MiniCard,
    LineCard,
    BoxChart
  },
  data () {
    return {
     option: null,
     color: Material,
     trending: [
        {
          subheading: "Sales",
          headline: "2,55",
          caption: "increase",
          percent: 15,
          icon: {
            label: "trending_up",
            color: "success"
          },
          linear: {
            value: 15,
            color: "success"
          }
        }],
    };
  },
  computed: {
    salaryData () {
      return API.salaryData;
      },
    },
  methods: {
    handleTabChange (val, e) {
      window.dispatchEvent(new Event('resize'));
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>
