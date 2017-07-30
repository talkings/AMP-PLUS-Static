<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        background: url(../img/logo.png) no-repeat;
        background-size: cover;
        
    }
    .layout-nav{
        width: 500px;
        margin: 0 auto;
    }
    
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                		<router-link tag="div" to="/manage/myproject">
                			<Icon type="ios-navigate"></Icon>
                    		项目管理	
                		</router-link>	
                    
                </Menu-item>
                <Menu-item name="2">
                		<router-link tag="div" to="/build/">
	                    <Icon type="ios-keypad"></Icon>
	                    构建服务
                    </router-link>
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    说明文档
                </Menu-item>
            </div>
        </Menu>
        <router-view></router-view>
        
        <!--<div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>-->
        
    </div>
</template>
<script>
    export default {
        
    }
</script>