<template>
    <div id="my-project">
       	<article>
       		<Row :gutter="16">
		        <Col span="6">
		           <div class="box-sizing flex flex-v">
		       			<div class="flex-1 flex flex-align-center flex-pack-center">MarktingCloud</div>
		       			<div class="master"><Icon type="happy"></Icon></div>
		       		</div>
		        </Col>
		        <Col span="6">
		            <div class="box-sizing flex flex-v">
		       			<div class="flex-1 flex flex-align-center flex-pack-center">MarktingCloud</div>
		       			<div class="developer"><Icon type="code-working"></Icon></div>
		       		</div>
		        </Col>
		        <Col span="6">
		            <div class="box-sizing flex flex-v">
		       			<div class="flex-1 flex flex-align-center flex-pack-center">MarktingCloud</div>
		       			<div class="guest"><Icon type="ios-eye"></Icon></div>
		       		</div>
		        </Col>
		        <Col span="6">
		             <div class="add-project-box box-sizing" @click="isForm = true">
		       			<Icon type="plus-circled"></Icon>
		       		</div>
		        </Col>
		    </Row>
		    
       	</article>
       	<Modal title="创建项目" width="600" v-model="isForm">
       		<Card  style="border:0; margin-bottom: 5px;">
		        <div class="form-item">
		        	  <p>项目名称</p>
		          <Input placeholder="请输入项目名称"></Input>
		        </div>
		    </Card>
		    <Card  style="border:0; margin-bottom: 5px;">
		       <div class="form-item">
		        	  <p>PATH</p>
		            <Input placeholder="user/list">
				        <span slot="prepend"> / </span>
				    </Input>
		        </div>
		    </Card>
		    <Card  style="border:0; margin-bottom: 5px;">
		        <div class="form-item">
		        	  <p>描述</p>
		          <Input placeholder="请输入项目描述"></Input>
		        </div>
		    </Card>
		    <Card  style="border:0; margin-bottom: 5px;">
		        <div class="form-item">
		        	  <p>Swagger API </p>
		          <Input placeholder="请输入..."></Input>
		        </div>
		    </Card>
	    </Modal>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {
				isForm : false
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
<style> 
	.form-item p{
		margin-bottom: 10px;
	}
</style>