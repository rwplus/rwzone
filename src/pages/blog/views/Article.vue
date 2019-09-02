<template>
  <v-container>
   <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      width="400"
      right
    >
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-content>
          <v-row>
            <v-col cols="12">
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
                </v-col>
              </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-row>
      <v-col sm="12" md="12" class="px-sm-0">
        <v-card class="pa-6" width="100%" :outlined="false">
          <div class="author-profile d-flex justify-space-between align-center">
            <v-avatar color="indigo" class="avatar" size="40">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
            <div class="author-name">
              <div class="name body-2 font-weight-bold">
                Doc.su
                <span class="level">level 5</span>
              </div>
              <div class="overview body-2">
                <span class="time">2019-08-29</span>
                <span class="read body-2">
                  阅读量
                  <v-icon color="#888" size="18">mdi-eye</v-icon>9999
                </span>
              </div>
            </div>
            <div class="attention">
              <v-btn class="ma-2" fab small @click="hasImg = !hasImg">
                <v-icon small>fa-heart</v-icon>
              </v-btn>
            <v-btn
              text
            @click.stop="drawerRight = !drawerRight"
            >
            评论
          </v-btn>
            </div>
          </div>
          <v-expand-transition mode="in-out">
            <div class="img" v-if="hasImg">
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" max-height="250"></v-img>
            </div>
          </v-expand-transition>
          <article id="article-content">
            <h1 class="art-title headline font-weight-black">Artcle --- {{ $route.params.id }}</h1>
            <p>文章第1段</p>
            <p>文章第2段</p>
            <p>文章第3段</p>
            <p>文章第4段</p>
          </article>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Tag from "@/components/blog/Tag";
export default {
  data() {
    return {
      hasImg: false,
      drawerRight: null,
    };
  },
  components: {
    Tag
  },
  mounted() {
    let initArt = document.querySelector("#article-content");
    initArt.innerHTML = `<div id="html-article"><h1 id="explain">Explain</h1>
<h2 id="key_len索引长度">Key_len(索引长度)</h2>
<h3 id="计算方式">计算方式</h3>
<p><code>code</code> </p>
<ul>
<li>character     string     utf8:3  gbk:2 latin1:1</li>
<li>varchar(20) + 允许null：max(lengthwise)*<character>+1(null)+2(变长字节)  </character></li>
</ul>
<h3 id="mysql">mysql</h3>
<hr>
<pre><code class="language-sql">mysql&gt; <span class="hljs-keyword">create</span> <span class="hljs-keyword">table</span> <span class="hljs-keyword">user</span>(<span class="hljs-type">name</span> <span class="hljs-type">varchar</span>(<span class="hljs-number">20</span>));
Query OK, <span class="hljs-number">0</span> <span class="hljs-keyword">rows</span> affected (<span class="hljs-number">0.04</span> sec)

mysql&gt; <span class="hljs-keyword">create</span> <span class="hljs-keyword">index</span> idx_name <span class="hljs-keyword">on</span> <span class="hljs-keyword">user</span>(<span class="hljs-type">name</span>);
Query OK, <span class="hljs-number">0</span> <span class="hljs-keyword">rows</span> affected (<span class="hljs-number">0.06</span> sec)
Records: <span class="hljs-number">0</span>  Duplicates: <span class="hljs-number">0</span>  Warnings: <span class="hljs-number">0</span>

mysql&gt; <span class="hljs-keyword">insert</span> <span class="hljs-keyword">into</span> <span class="hljs-keyword">user</span> <span class="hljs-keyword">values</span>(<span class="hljs-string">'weeknd'</span>);
Query OK, <span class="hljs-number">1</span> <span class="hljs-keyword">row</span> affected (<span class="hljs-number">0.01</span> sec)

mysql&gt; <span class="hljs-keyword">explain</span> <span class="hljs-keyword">select</span> * <span class="hljs-keyword">from</span> <span class="hljs-keyword">user</span> <span class="hljs-keyword">where</span> <span class="hljs-type">name</span>=<span class="hljs-string">'weeknd'</span>;
+<span class="hljs-comment">----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+</span>
| id | select_type | <span class="hljs-keyword">table</span> | partitions | <span class="hljs-keyword">type</span> | possible_keys | key      | key_len | <span class="hljs-keyword">ref</span>   | <span class="hljs-keyword">rows</span> | filtered | Extra       |
+<span class="hljs-comment">----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+</span>
|  <span class="hljs-number">1</span> | SIMPLE      | <span class="hljs-keyword">user</span>  | <span class="hljs-keyword">NULL</span>       | <span class="hljs-keyword">ref</span>  | idx_name      | idx_name | <span class="hljs-number">23</span>      | const |    <span class="hljs-number">1</span> |   <span class="hljs-number">100.00</span> | <span class="hljs-keyword">Using</span> <span class="hljs-keyword">index</span> |
+<span class="hljs-comment">----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+</span>
<span class="hljs-number">1</span> <span class="hljs-keyword">row</span> <span class="hljs-keyword">in</span> <span class="hljs-keyword">set</span>, <span class="hljs-number">1</span> <span class="hljs-built_in">warning</span> (<span class="hljs-number">0.02</span> sec)</code></pre>
<p>varchar(20)+not null: max(lengthwise)*character+2(变长字节)</p>
<pre><code></code></pre><p>char(20)+允许null: max(lengthwise)*character+1(null)</p>
<pre><code></code></pre><p>char(20)+not null: max(lengthwise)*character</p>
<pre><code class="language-sql">mysql&gt; alter table<span class="hljs-built_in"> user </span>modify column name char(20) <span class="hljs-keyword">not</span> <span class="hljs-literal">null</span>;
Query OK, 0 rows affected (0.14 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql&gt; explain select * <span class="hljs-keyword">from</span><span class="hljs-built_in"> user </span>where <span class="hljs-attribute">name</span>=<span class="hljs-string">'weeknd'</span>;
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
| id | select_type | table | partitions |<span class="hljs-built_in"> type </span>| possible_keys | key      | key_len | ref   | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
|  1 |<span class="hljs-built_in"> SIMPLE </span>     |<span class="hljs-built_in"> user </span> | <span class="hljs-literal">NULL</span>       | ref  | idx_name      | idx_name | 20      | const |    1 |   100.00 | Using index |
+----+-------------+-------+------------+------+---------------+----------+---------+-------+------+----------+-------------+
1 row <span class="hljs-keyword">in</span> set, 1 <span class="hljs-builtin-name">warning</span> (0.00 sec)</code></pre>
</div>`;
  }
};
</script>

<style>
.author-profile {
  height: 50px;
  margin-bottom: 20px;
}
.avatar {
  text-align: center;
  flex: 0 0 40px;
}
.author-name {
  margin-left: 20px;
  flex: 1 0 auto;
  .name {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    .level {
      margin-left: 10px;
      box-sizing: content-box;
      padding: 3px;
      display: inline-block;
      height: 12px;
      line-height: 12px;
      text-align: center;
      background-color: black;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 900;
      color: #fff;
    }
  }
  .overview {
    font-size: 12px;
    color: #ccc;
    display: flex;
    align-items: center;
    .time {
      margin-right: 30px;
    }
    .read {
      color: #000;
    }
  }
}
.attention {
  flex: 0 0 20px;
}
.art-title {
  margin-bottom: 30px;
}


h1 {
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 35px;
}

h2 {
    font-size:21px;
     margin-top: 0;
     margin-bottom: 24px;
}

h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 24px;
}

h4 {
    font-size: 16px;
    margin-top: 0;
     margin-bottom: 24px;
}

h5 {
    font-size:15px;
    margin-top: 0;
     margin-bottom: 24px;
}

h6 {
    font-size:15px;
    margin-top: 0;
     margin-bottom: 24px;
}


p {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 14px;
}

ul {
    margin-bottom: 1rem;
}

ul ol {
    padding-left: 40px !important;
}

li {
    font-size:14px;
    letter-spacing: 0.03125em !important;
}

ul li p {
    font-size: 12px;
 }

code {
    background-color: #282c34 !important;
    color: #fff;
    width: 100%;
    min-height: 20px;
}

code, pre[class*=language-] {
    line-height: 1.4;
    padding: 20px 24px;
    background: transparent;
    overflow: auto;
    margin: 7px 0;
    overflow: auto;
}


code[class*=language-],pre[class*=language-] {
    color: #ccc;
    background: none;
    text-align: left;
    white-space: pre;
    font-size: 12px;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

blockquote {
    border-left: 5px solid #f60;
    border-radius: 10px;
    margin: 20px 0;
    padding:.8rem 1.6rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

blockquote p {
    font-size: 10px;
    margin-bottom: 0px !important;
}

a {
    background-color: transparent;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
}

p code {
    color: #476582 !important;
    width: fit-content;
    padding: .25rem .5rem;
    margin: 0;
    /* height: auto; */
    font-size: .85em;
    background-color: rgba(27,31,35,.05) !important;
    border-radius: 3px;
}

p code kbd {
    border-radius: 3px;
    white-space: pre-wrap;
    font-size: 85%;
    font-weight: 900;
}

.hljs-keyword, .hljs-selector-tag, .hljs-subst {
    color: #f60;
    font-weight: bold;
}

</style>