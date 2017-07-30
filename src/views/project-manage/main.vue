<style>
	.layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        /*min-height: 200px;*/
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    #my-project > article{
		width: 100%;
		padding:  20px;
		flex-direction: row;
        flex-wrap: wrap;
	}
	#my-project article .box-sizing{
		width: 100%;
		height: 200px;
		/*background: #FF6D31;*/
		border-radius: 10px;
		box-shadow: 0 5px 5px #e4e8ec;
		margin: 5px;
		cursor: pointer;
		opacity: 1;
	}
	#my-project article .box-sizing:hover{
		opacity: .9;
	}
	#my-project article .box-sizing div:nth-child(1){
		width: 100%;
		background: #29a2c6;
		border-radius:  10px 10px 0 0;
		background: url(../../img/aurora-borealis-1032523_1920.jpg) no-repeat;
		background-size: cover;
		color: #fff;
		font-size: 18px;
		font-weight: bold;
	}
	#my-project > article .box-sizing div:nth-child(2){
		width: 100%;
		height: 30px;
		border-radius:  0 0 10px 10px;
		text-align: center;
		font-size: 24px;
		color: #fff;
		line-height: 30px;
	}
	
	#my-project .add-project-box{
		background: #1794AC;
	    font-size: 50px;
	    color: #fff;
	    text-align: center;
	    padding-top: 60px;
		
	}
</style>
<template>
    <div>
        <Menu mode="horizontal" active-name="/manage/myproject" @on-select="link">
            <div class="layout-assistant">
                <Menu-item name="/manage/myproject">我的项目</Menu-item>
                <Menu-item name="/manage/allproject">授权项目</Menu-item>
            </div>
        </Menu>

        <div class="layout-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
			link(path){
				console.log(path);
				this.$router.push(path);
			}
        }
    };
</script>