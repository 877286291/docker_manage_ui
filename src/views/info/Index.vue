<template>
  <div>
    <el-card>
      <img src="../../assets/img/终端.png" alt="" style="vertical-align:middle;">
      <span style="vertical-align:middle;margin-left: 10px">Docker终端</span>
      <el-divider></el-divider>
      <el-input placeholder="请输入要查找的docker信息(名称,标签,状态,地址)" v-model="description" class="input-with-select"
                style="margin-bottom: 10px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-card :key="index" v-for="(info,index) in infoList">
        <el-row>
          <el-col :span="2"><img src="../../assets/img/Docker.png" alt=""></el-col>
          <el-col :span="22">
            <span>local</span>
            <el-tag type="success" size="mini" style="margin-left: 10px;margin-right: 10px;">UP</el-tag>
            <span>2020-11-08 00:08:19</span><br>
            <i class="element-icons" style="vertical-align:middle;margin-right: 4px">&#xe7ae;</i> 0 stacks
            <i class="element-icons" style="vertical-align:middle;margin-right: 4px">&#xe61c;</i> 0 container
            <i class="element-icons" style="color: #23ae89;vertical-align:middle;margin-right: 4px">&#xe695;</i>0
            <i class="element-icons" style="color: #ae2323;vertical-align:middle;margin-right: 4px">&#xe695;</i>0 /
            <i class="element-icons" style="color: #23ae89;vertical-align:middle;margin-right: 4px">&#xe60d;</i>0
            <i class="element-icons" style="color: #f0ad4e;vertical-align:middle;margin-right: 4px">&#xe60d;</i>0
            <i class="element-icons" style="vertical-align:middle;margin-right: 4px">&#xe68f;</i>0 volume
            <i class="element-icons" style="vertical-align:middle;margin-right: 4px">&#xe64f;</i>0 images <br>
            <i class="element-icons" style="vertical-align:middle;margin-right: 4px">&#xe641;</i>0 core
            <i class="element-icons" style="vertical-align:middle;margin-right: 4px">&#xe627;</i>0 GB
            <i class="el-icon-price-tag" style="margin-right: 4px"></i> No tags
          </el-col>
        </el-row>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Index",
  created() {
    this.getHostInfo()
  },
  data() {
    return {
      description: "",
      infoList: []
    }
  },
  methods: {
    async getHostInfo() {
      console.log("Get Host Info")
      const res = await this.$http.get("/docker/info", {params: {host: "127.0.0.1:2375"}})
      console.log(res)
    }
  }
}

</script>

<style scoped>
.el-divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>