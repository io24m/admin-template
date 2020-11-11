<template>
  <div class="bg-color c">
    <!-- <div style="position: fixed; top:100px; left: 10px ;bottom:10px">
      <a-button type="primary"> Affix top </a-button>
    </div> -->
    <a-input-search
      v-model="keywords"
      placeholder="输入要搜索的歌曲"
      size="large"
      @search="onSearch"
    />
    <br />
    <br />
    <aplayer autoplay :music="aplayer" v-if="mus" ref="aplayer" :list="musicList" />
    <br />
    <a-list item-layout="vertical" size="large" :data-source="datas">
      <!-- <div slot="footer"><b>ant design vue</b> footer part</div> -->
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <!-- <template v-for="{ type, text } in actions" slot="actions">
          <span :key="type">
            <a-icon :type="type" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template> -->
        <!-- <img
          slot="extra"
          width="272"
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        /> -->
        <a-list-item-meta :description="item.albumName">
          <a-button
            slot="title"
            type="link"
            @click="runSong"
            :data-songid="item.id"
            :data-id="item.songUrl"
          >
            {{ item.songName }}
          </a-button>

          <a-avatar slot="avatar" :src="item.albumImgSrc" />
        </a-list-item-meta>
        <!-- {{ item.content }} -->
      </a-list-item>
    </a-list>
    <a-pagination
      v-if="mus"
      v-model="current"
      size="small"
      :total="pagination.total"
      :pageSize="pagination.pageSize"
      @change="pageData"
    />
  </div>
</template>
<script>
import Aplayer from "vue-aplayer";

export default {
  components: { Aplayer },
  data() {
    return {
      keywords: "",
      datas: [],
      pagination: {
        pageSize: 15,
        total: 0,
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" },
      ],
      current: 0,

      //   aplayer: {
      //     title: "test",
      //     artist: "Silent Siren",
      //     src: "",
      //     pic:
      //       "https://p1.music.126.net/JOJvZc_7SqQjKf8TktQ_bw==/29686813951246.jpg",
      //   },
      musicList: [],
      //   mus: false,
    };
  },
  computed: {
    aplayer() {
      if (this.musicList) {
        if (this.$data.musicList.length > 0) return this.musicList[0];
      }
      return null;
    },
    mus() {
      if (this.$data.musicList) {
        if (this.$data.musicList.length > 0) return {};
      }
      return null;
    },
  },
  watch: {},
  mounted() {},
  methods: {
    async pageData(pageIndex) {
      var me = this;

      const data = await this.getSearchData(pageIndex);
      if (!data) {
        me.$data.pagination.total = 0;
        me.$data.datas = [];
        this.musicList=[]
        return;
      }
      const songs = data.result.songs;
      const songIds = songs.map((item) => item.id);
      const songUrls = await this.getSongUrls(songIds);
      const songDetails = await this.getSongDetail(songIds);
      me.$data.pagination.total = parseInt(
        data.result.songCount / me.$data.pagination.pageSize
      );
      const lists = songs
        .map((item) => ({
          id: item.id,
          //歌曲
          songName: item.name,
          songUrl: songUrls.data.find((s) => s.id === item.id).url,
          //专辑
          albumName: item.album.name,
          albumImgSrc: songDetails.songs.find((s) => s.id === item.id).al
            .picUrl,
        }))
        .filter((item) => item.songUrl);
      me.$data.datas = lists;

      this.musicList = lists.map((item) => ({
        title: item.songName,
        artist: item.albumName,
        src: item.songUrl,
        pic: item.albumImgSrc,
      }));
      console.log("-----musicList--------");
      console.log(this.musicList);
    },
    onSearch() {
      this.$data.current = 1;
      this.pageData(0);
    },
    async getSearchData(pageIndex) {
      var me = this;
      if (!me.keywords) {
        me.$data.pagination.total = 0;
        me.$data.datas = [];
        this.musicList=[]
        return;
      }
      pageIndex = pageIndex || 1;
      return this.$http.get("/search", {
        params: {
          type: 1,
          keywords: me.keywords,
          limit: me.pagination.pageSize,
          offset: pageIndex - 1,
        },
      });
    },
    async getSongUrls(ids) {
      return this.$http.get("/song/url", {
        params: {
          id: ids.join(","),
        },
      });
    },
    async getSongDetail(ids) {
      return this.$http.get("/song/detail", {
        params: {
          ids: ids.join(","),
        },
      });
    },
    runSong(event) {
      const song = this.$data.datas.find(
        (item) => item.id + "" === event.target.dataset["songid"]
      );
      console.log(song.songName);
      console.log(song.albumName);
      console.log(song.songUrl);
      console.log(song.albumImgSrc);
      this.aplayer.title = song.songName;
      this.aplayer.artist = song.albumName;
      this.aplayer.src = song.songUrl;
      this.aplayer.pic = song.albumImgSrc;
      this.musicList = [
        {
          title: song.songName,
          artist: song.albumName,
          src: song.songUrl,
          pic: song.albumImgSrc,
        },
      ];
      this.$refs.aplayer.thenPlay();
    },
  },
};
</script>
<style scoped>
.bg-color {
  background-color: #ffffff;
}
.c {
  border: 1px solid;
  border-color: rgb(217 217 217);
  padding: 20px;
  margin: 10px 20px 20px 20px;
  border-radius: 4px;
}
</style>