<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
    allow-overflow
    max-width="600"
    fixed
  >
    <template v-slot:activator="{ on }">
      <div class="text-center">
        <v-badge>
          <template v-slot:badge>10</template>
          <v-btn color="black" text v-on="on">打开评论</v-btn>
        </v-badge>
      </div>
    </template>
    <v-timeline dense>
      <v-timeline-item class="mb-6 text-right">
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>sama</span>
        </template>
        <div
          class="caption text-left"
        >这是一个可以详细讨论的问题,这是一个可以详细讨论的问题,这是一个可以详细讨论的问题,这是一个可以详细讨论的问题，阿斯顿发送到发送到发送到发送到发送发送发送。http://localhost:8000/dependencies</div>

        <v-col class="text-left">
          <v-btn text icon>
            <v-icon color="black">mdi-face</v-icon>
          </v-btn>
          <span class="caption">Roger大神</span>
          <v-btn text icon>
            <v-icon color="red">mdi-heart</v-icon>
          </v-btn>
          <span class="caption">256</span>

          <v-btn text icon @click="hidden = !hidden">
            <v-icon color="indigo">edit</v-icon>
          </v-btn>
          <span class="caption">提问</span>
        </v-col>
        <v-row v-show="!hidden" class="caption text-left">
          <v-col cols="12" sm="8">
            <v-textarea
              auto-grow
              label="问题"
              outlined
              rows="1"
              class="caption"
              row-height="15"
            >add a comment！</v-textarea>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn text icon>
              <v-icon color="blue">mdi-send</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item class="mb-6 text-right">
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
            />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>sama</span>
        </template>
        <div class="caption text-left">这是一个可以详细讨论的问题,这是一个可以详细讨论的问题,这是一个可以详细讨论的问题,这是一个可以详细讨论的问题</div>

        <v-col class="text-left">
          <v-btn text icon>
            <v-icon color="black">mdi-face</v-icon>
          </v-btn>
          <span class="caption">weeknd菜鸟</span>
          <v-btn text icon>
            <v-icon color="red">mdi-heart</v-icon>
          </v-btn>
          <span class="caption">256</span>
          <v-btn text icon>
            <v-icon color="indigo">edit</v-icon>
          </v-btn>
          <span class="caption">提问</span>
        </v-col>
      </v-timeline-item>

      <v-timeline-item fill-dot class="white--text mb-12 caption" color="black" large>
        <template v-slot:icon>
          <span>点评</span>
        </template>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="请输入个人意见"
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn class="mx-0" depressed @click="comment">推送</v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition group>
        <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-3" color="pink" small>
          <v-row justify="space-between">
            <v-col cols="7" md="12" v-text="event.text" class="caption"></v-col>
            <v-col class="text-left caption" cols="5" v-text="event.time"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item class="mb-6" hide-dot>
        <span>TODAY</span>
        <v-divider></v-divider>
      </v-timeline-item>
    </v-timeline>
    <v-divider></v-divider>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      menu: false,
      hidden: true,
      message: false,
      hints: true,
      events: [],
      input: null,
      nonce: 0
    };
  },
  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },
  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
          return ` ${contents
            .split(" ")
            .map(v => v.charAt(0))
            .join("")}`;
        })
      });
      this.input = null;
    }
  }
};
</script>

<style>
</style>