<template>
  <el-card>
    <el-input placeholder="请输入要查找的docker信息(名称,标签,状态,地址)" v-model="description" class="input-with-select"
              style="margin-bottom: 10px">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-table :data="nodeList" loading="loading">
      <el-table-column type="index" width="30"></el-table-column>
      <el-table-column prop="Hostname" label="节点名称" align="center"></el-table-column>
      <el-table-column prop="Type" label="类型" align="center"></el-table-column>
      <el-table-column prop="Url" label="URL" align="center"></el-table-column>
      <el-table-column prop="Group" label="所属组" align="center"></el-table-column>
      <el-table-column label="管理" align="center">
        <template scope="">
          <el-button type="warning">修改</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "Node",
  created() {
    this.getHostInfo()
  },
  data() {
    return {
      loading: true,
      description: "",
      nodeList: [{
        "Hostname": "test",
        "Type": "Docker",
        "Group": "test",
        "Url": "39.108.180.201:5732",
      }]
    }
  },
  methods: {
    async getHostInfo() {
      const {data: res} = await this.$http.get("/docker/info")
      this.loading = true
      console.log(res)
      if (res.code === 200) {
        this.infoList = res.data
        for (let i = 0; i < res.data.length; i++) {
          console.log(res.data[i])
          let tmp
          tmp["Hostname"] = res.data[i]["hostname"]
          tmp["Type"] = "Docker"
          tmp["Group"] = res.data[i]["group"]
          tmp["Url"] = res.data[i]["name"]
          this.nodeList.push()
        }
        console.log(this.nodeList)
        this.loading = false
        return this.$message.success(res.message)
      }
    },
  }
}
</script>

<style scoped>

</style>