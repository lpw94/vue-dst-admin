<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a style="color: #666" class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
     
    </ul>

    <ul class="nav navbar-nav d-md-down-none">
      
       <li class="nav-item header-item">
          <router-link tag="div" to='/' class="nav-link">
            <!-- <p><Icon type="compose" size='30' color="#2d8cf0"></Icon></p> -->
            <p  style="color:#666"> 首页 </p>
        </router-link> 
      </li>
        <li class="nav-item header-item">
        <router-link tag="div" to='/userManage' class="nav-link">
            <!-- <p><Icon type="stats-bars" size='30' color="#2d8cf0"></Icon></p> -->
            <p  style="color:#666"> 用户管理 </p>
        </router-link> 
      </li>

        <li class="nav-item header-item">
         <router-link tag="div" to='/dataCenter' class="nav-link">
            <!-- <p><Icon type="trophy" size='30' color="#2d8cf0"></Icon></p> -->
            <p  style="color:#666"> 经营监控 </p>
        </router-link> 
      </li>


      <!--    <li class="nav-item header-item">
        <Dropdown>
      <router-link tag="div" to='/' class="nav-link">
            <p><Icon type="android-cloud" size='30' color="#2d8cf0"></Icon></p>
            <p  style="color:#666"> 云服务器 </p>
        </router-link>
        <DropdownMenu slot="list">
            <DropdownItem>Linux</DropdownItem>
            <DropdownItem>Mac OS X</DropdownItem>
            <DropdownItem>Windows</DropdownItem>
            
            <DropdownItem>Core OS</DropdownItem>
        </DropdownMenu>
    </Dropdown>



      </li> -->



     
    </ul>


    <ul class="nav navbar-nav ml-auto">
      
      <li class="nav-item d-md-down-none">
        <a class="nav-link" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li>


     <!--  <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <span class="d-md-down-none">admin</span>
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="alert"></Icon>Updates<span class="badge badge-info">42</span></p>

            
            </Dropdown-item>
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="chatbox-working"></Icon>Messages<span class="badge badge-success">42</span></p>

            </Dropdown-item>
             <Dropdown-item>
              <p class="dropdown-itemp">  <Icon type="chatbox-working"></Icon>Messages<span class="badge badge-danger">42</span></p>

           </Dropdown-item>
              <Dropdown-item divided>
              <p class="dropdown-itemp"><Icon type="android-contact"></Icon> Profile</p>

              </Dropdown-item>
            <Dropdown-item >
              <p class="dropdown-itemp"><Icon type="android-settings"></Icon> 设置</p>
              </Dropdown-item>

                 <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>退出登录</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown> -->

    <el-dropdown menu-align='start'>
      <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
        admin
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item ><a href="" @click="Logout"  ><p  class="dropdown-itemp">退出登录</p></a></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

   

 
      <li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
  components: {
    navbar,
    
  },
  methods: {
    Logout(e){
      console.log("111111");
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    padding: 0 20px;
    /*background-color: #20a8d8;*/
    /*background-color: white;*/
    height: 55px;
    line-height: 55px;
  }
  .header-item a{
    color:white !important;
  }

</style>
