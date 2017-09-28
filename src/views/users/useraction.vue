<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-menu mode="horizontal">
          <el-menu-item index="3">
            <router-link to="/member/">回到用户后台</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="6">
        <!-- 渲染子路由的模板-->
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
