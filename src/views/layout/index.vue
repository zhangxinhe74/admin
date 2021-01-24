<template>
  <!-- <div>
    <div>顶部导航栏</div>
    <router-view/>
    <div>侧边导航栏</div>
  </div> -->
  <div>
    <el-container class="layout-container">
      <el-aside width="200px" class="aside">
        <app-aside class="el-menu"/>
      </el-aside>
      <el-container>
        <el-header class='herder'>
          <div>
            <i class='el-icon-s-fold'></i>
            <span>河北辛娜科技有限责任公司</span>
          </div>
        <el-dropdown>
          <div class="right">
            <img class='touxiang' src="https://himg.bdimg.com/sys/portraitn/item/4ec63747" alt="">
            <span>用户昵称<i class="el-icon-arrow-down el-icon--right"></i></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from './components/Aside'
// import AppHeader from './components/Header'
export default {
  name: 'layout',
  components: {
    AppAside
    // AppHeader
  }
}
</script>

<style>
.layout-container{
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
}
.aside{
  background:#990000;
}
.herder{
  /* background:#999; */
  display:flex;
  align-items: center;
  justify-content: space-between;
}
.right{
  display: flex;
  align-items: center;
}
.touxiang{
  border-radius: 50%;
  width:40px;
  height:40px;
}
.main{
  background:#333;
}
.el-menu{
  height: 100%;
}
</style>
