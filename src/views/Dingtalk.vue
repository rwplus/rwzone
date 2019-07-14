<template>
   <v-container fluid>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" color="deep-orange" >设置JSON数据<small>钉钉展示消息样式</small></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" color="deep-orange" >设置参数<small>动态获取变量值</small></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" color="deep-orange" :complete-icon="'fa-check'">转换格式<small>最终语法格式</small></v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-layout row>
          <v-flex xs12>
            <v-textarea
            box
            name="input-7-4"
            label="Json Data"
            color="deep-orange"
          ></v-textarea>
          </v-flex>
        </v-layout>
          <v-layout row>
            <v-flex sx6>
          <v-btn flat left>取消</v-btn>
              </v-flex>
            <v-flex text-xs-right>
          <v-btn
            right
            color="deep-orange"
            dark
            @click="e1 = 2"
          >
            下一步
          </v-btn>
              </v-flex>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-layout row mb-3>
        <v-flex xs12>
          <v-subheader ml-0 grey--text text--darken-1>
            COLOR SETTINGS
          </v-subheader>
        </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs5>
            <v-switch v-model="switch1" label="Header Color" color="deep-orange"></v-switch>
          </v-flex>
          <v-flex xs3>
           <v-select
            :items="items"
            label="level"
            color="deep-orange"
            :disabled="!switch1"
          ></v-select>
          </v-flex>

          <v-flex xs3 offset-xs1>
            <v-select
            :items="items1"
            label="type"
            color="deep-orange"
            :disabled="!switch1"
          ></v-select>
          </v-flex>
        </v-layout>
           <v-layout row>
            <v-flex xs12>
              <v-subheader ml-0 grey--text text--darken-1>
                ACCESS TOKEN
                </v-subheader>
            </v-flex>
           </v-layout>
           <v-layout row>
             <v-flex xs12>
            <v-text-field
              label="access token"
              color="deep-orange"
            ></v-text-field>
             </v-flex>
           </v-layout>
           <v-layout row>
             <v-flex xs12>
             <v-subheader>
               LANGUAGE BIND
             </v-subheader>
             </v-flex>
           </v-layout>
                     <v-layout row>
             <v-flex xs6>
              <v-radio
                  label="ROOT"
                  color="deep-orange"
                >
               </v-radio>
             </v-flex>
           </v-layout>
          </v-layout>
          <v-layout row>
            <v-flex sx6>
          <v-btn flat left>取消</v-btn>
              </v-flex>
            <v-flex text-xs-right>
          <v-btn
            right
            color="deep-orange"
            @click="e1 = 3"
          >
            下一步
          </v-btn>
              </v-flex>
          </v-layout>
          </v-stepper-content>
        <v-stepper-content step="3">
        <v-layout row>
          <v-flex xs12>
            <v-textarea
            box
            name="input-7-4"
            label="Output"
            color="deep-orange"
          ></v-textarea>
          </v-flex>
        </v-layout>
<v-layout row>
            <v-flex sx6>
          <v-btn flat left>取消</v-btn>
              </v-flex>
            <v-flex text-xs-right>
          <v-btn
            right
            color="deep-orange"
            @click="e1 = 1"
          >
            下一步
          </v-btn>
              </v-flex>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
   </v-container>
</template>



<script>
export default {
  name: 'Dingtalk',
  data () {
    return {
      e1: 0,
      items: ['INFO','WARNING','ERROR','FATAL','DEBUG'],
      items1: ['MARKDOWN','TEXT','ATTACH'],
      switch1: false
    }
  }
}
</script>


<style>
</style>
