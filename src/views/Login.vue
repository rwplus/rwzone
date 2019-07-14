<template>
<v-app id="inspire">
      <v-container fluid fill-height style="padding:0px;" grid-list-md>
        <v-layout fill-height align-center justify-center>
            <v-flex md6 xs6>
              <v-layout row wrap align-center justify-center>
                  <v-flex md6 class="text-xs-center">
                    <p class='headline' dark><span class="title">RWPLUS</span></p></br>
                    <v-text-field  color='indigo' prepend-icon="fa-user-circle-o" label="电子邮件"  v-model="model.username"  placeholder="rwplus@github.com"></v-text-field>
                    </v-text-field>
                    <v-text-field  color='indigo' prepend-icon="fa-key" label="密码" type="password" v-model="model.password" placeholder="password">
                    </v-text-field>
                      <div class="text-xs-center">
                          <v-btn color="deep-orange" round dark @click="login">登录</v-btn>
                          <v-btn flat round>忘记密码?</v-btn>
                      </div>
                  </v-flex>
              </v-layout>
            </v-flex>
            <v-flex md6 xs6 style="background:linear-gradient(to right, #24243e, #141E30, #0f0c29);height:100%">
              <v-layout row wrap fill-height align-center>
                  <v-btn large fab style="margin:-36px;z-index:999"><v-icon>fa-qrcode</v-icon></v-btn>
                  <v-flex md6 class="text-xs-center" offset-md3>
                     <p class='headline' dark><span class="title" style="color:#fff">MEET THE TEAM</span></p></br>
                      <v-avatar color="grey lighten-4" v-for="img in images">
                        <img :src="img" alt="avatar">
                      </v-avatar>
                    </br>
                    </br>
                    <v-btn
                     v-for="icon in icons"
                     :key="icon"
                     class="mx-3 white--text"
                    icon
                    >
                   <v-icon size="15px">{{ icon }}</v-icon>
                    </v-btn>
                   </v-flex>

              </v-layout>
            </v-flex>
        </v-layout>
      </v-container>
</v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: 'weeknd.su@wukongbox.com',
      password: '123456'
    },
    images: ['/img/1.jpeg','/img/2.jpeg','/img/3.jpeg','/img/4.jpeg','/img/5.jpeg','/img/6.jpeg','/img/7.jpeg','/img/8.jpeg','/img/9.jpeg','/img/10.jpeg',
     '/img/11.jpeg','/img/12.jpeg','/img/13.jpeg','/img/14.jpeg','/img/15.jpeg','/img/16.jpeg','/img/17.jpeg','/img/18.jpeg','/img/19.jpeg','/img/20.jpeg'
    ],
    icons: [
      'fa-qq',
      'fa-wechat',
      'fa-github',
      'fa-linkedin'
          ]
  }),

  methods: {
    login () {
      this.loading = true;
      setTimeout(() => {
        this.$router.push('/dashboard');
      }, 1000);
    }
  }

};
</script>


<style>
p {
  padding-top: 12px; margin-top: 4px;
  }
</style>
