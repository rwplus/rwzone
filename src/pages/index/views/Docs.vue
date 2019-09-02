<template>
  <v-container>
    <v-row>
      <v-col cols='12'>
      <span class="body-1 font-weight-bold">ARTICLES</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols='8'>
        <v-card>
      <v-list three-line>
        <template v-for="(topic, index) in topics">
           <span class="body-1 font-weight-bold"
            v-if="topic.header"
            :key="topic.header">
           </span>

          <v-divider
            v-else-if="topic.divider"
            :key="index"
            :inset="topic.inset"
          ></v-divider>

          <v-list-item
            v-else
            :href="'/blog/article/'+topic.header"
          >
            <v-list-item-avatar tile>
              <v-img :src="topic.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="topic.title"></v-list-item-title>
              <div class="caption grey--text">{{ topic.subtitle }}</div>
              <div class="caption">{{ topic.time }} | 阅读数：8000 | 评论：200</div>
            </v-list-item-content>
            <v-list-item-action>
                  <v-btn icon>
                    <v-icon small>
                      fa-edit 2x
                    </v-icon>
                   </v-btn>
                   <v-btn icon>
                    <v-icon small>
                      fa-trash
                    </v-icon>
                   </v-btn>
             </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
      </v-card>
      </v-col>
      <v-col cols="4">
      <v-row>
        <div class="text-center">
          <v-btn rounded color="dark" dark href="/editor">写文章</v-btn>
        </div>
      </v-row>
      <v-row>
       <v-col cols='12'>
        <v-card>
          <v-card-title >
          <v-badge>
        <template v-slot:badge>20</template>
        <v-avatar >
              <v-img src="images/1.jpeg"></v-img>
            </v-avatar>
        </v-badge>
            <div class="body-2 font-weight-bold pl-4">没有感情的杀手</div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="text-center" no-gutters>
              <v-col cols='3'>
                <v-icon color="primary">fa-file-alt</v-icon>
              </v-col>
              <v-col cols='3'>
                 <v-icon color="black">fa-user-tie</v-icon>
              </v-col>
              <v-col cols='3'>
                  <v-icon color="indigo">fa-comment</v-icon>
              </v-col>
              <v-col cols='3'>
                  <v-icon  color="pink">fa-heart</v-icon>
              </v-col>
            </v-row>
            <v-row class="text-center" no-gutters>
              <v-col cols='3'>
                <div class="caption black--text font-weight-bold">11000</div>
              </v-col>
              <v-col cols='3'>
                 <div class="caption black--text font-weight-bold">2000</div>
              </v-col>
              <v-col cols='3'>
                 <div class="caption black--text font-weight-bold">100000</div>
              </v-col>
              <v-col cols='3'>
                  <div class="caption black--text font-weight-bold">2000</div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn icon><v-icon small color="green">fab fa-weixin</v-icon></v-btn>
            <v-btn icon><v-icon small color="black">fab fa-github</v-icon></v-btn>
            <v-btn icon><v-icon small> fab fa-linkedin-in</v-icon></v-btn>

          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
        <v-row>
          <v-text-field  label="Search Galaxy" outlined class="caption pa-2 mt-8"></v-text-field>
        </v-row>
        <v-row no-gutter>
          <span class="body-2 font-weight-bold">过滤器</span>
        </v-row>
        <v-row>
          <v-col cols='12'>
          <v-card class="mx-auto">
            <v-card-text class='caption'>
            <span class="overline font-weight-bold">标签</span>
            <v-select
              single-line
              outlined
              :items="tags"
              attach
              chips
              multiple
            ></v-select>
            <span class="overline font-weight-bold pa-1">日期归档</span>
            <v-select
              :items="tags"
              outlined
              single-line
              attach
              chips
              multiple

            ></v-select>
            <span class="overline font-weight-bold pa-1">根据类别过滤检索，以快速找到文章</span>
            </v-card-text>
          </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
                <v-card-title class="body-2 font-weight-bold">
                  获取最新咨询？
                </v-card-title>
                <v-card-text>
                <p class="overline font-weight-bold">
                   社区热点文章，精华作品更新时会推送至你的邮箱。</p>
                   <v-text-field label="your@email.com"></v-text-field>
                     <div class="text-center">
                     <v-btn color="deep-orange" dark rounded width="100%"> SUBSCRIBE</v-btn>
                     </div>
                </v-card-text>
             </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>

<script>
export default {
    name: 'app-docs',
    components: {
    },
    data: () => ({
     tags: ['mysql', 'oracle', 'java', 'python'],
     topics: [
      { header: 'LATEST TOPICS' },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">WHAT IS NGINX?</p>',
        subtitle: "秀出了智商",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">Mysql从入门到跑路</p>',
        subtitle: '我不想解释，谢谢!',
        time: '2019.01.01',

      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">Jmeter和Vegeta比较</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">太阳是什么颜色？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">蔡徐坤到底会不会篮球？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">蔡徐坤到底会不会篮球？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">蔡徐坤到底会不会篮球？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">蔡徐坤到底会不会篮球？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">蔡徐坤到底会不会篮球？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
      { divider: true, inset: true },
      {
        avatar: 'images/1.jpeg',
        title: '<p class="overline font-weight-bold">蔡徐坤到底会不会篮球？</p>',
        subtitle: "我不想解释，谢谢！",
        time: '2019.01.01',
      },
    ],
    }),
}
</script>
