<template>
  <el-container>
    <el-aside width="250px">
      <div style="text-align: center;">
        <img src="../assets/img/Docker-Logo.png" alt="">
      </div>
      <el-divider></el-divider>
      <el-menu default-active="/index" class="el-menu-vertical-demo" background-color="#373d41" text-color="#fff"
               active-text-color="#ffd04b" router>
        <el-menu-item index="/index">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>控制台</span>
          </template>
          <el-menu-item index="/image">
            <i class="element-icons">&#xe64f;</i>
            <span slot="title" style="margin-left: 20px">镜像</span>
          </el-menu-item>
          <el-menu-item index="/container">
            <i class="element-icons">&#xe61c;</i>
            <span slot="title" style="margin-left: 20px">容器</span>
          </el-menu-item>
          <el-menu-item index="/volume">
            <i class="element-icons">&#xe68f;</i>
            <span slot="title" style="margin-left: 20px">存储</span>
          </el-menu-item>
          <el-menu-item index="/network">
            <i class="element-icons">&#xe6b3;</i>
            <span slot="title" style="margin-left: 20px">网络</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/node/add">节点管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">用户设置</template>
            <el-menu-item index="2-1">角色</el-menu-item>
            <el-menu-item index="2-2">组</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">安全设置</template>
            <el-menu-item index="3-1">认证</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Docker Manager UI</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}

.el-divider {
  background-color: #2b2d2d;
  margin: 0;
}

.el-header div {
  display: flex;
  align-items: center;
}

.el-header span {
  margin-left: 15px;
}

.el-aside {
  background-color: #373d41;
}

.el-aside .el-menu {
  border-right: None;
}

.el-menu [class^=el-icon-] {
  margin-right: 20px;
}

a:hover, a:visited, a:link, a:active {
  text-decoration-line: none;
  color: snow;
}
</style>