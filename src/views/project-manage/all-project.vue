<template>
    <div id="my-project">
       	<article>
       		<Row>
		        <Col span="24">
		        		<div class="join-team">
		        			<Button type="ghost" long size="large" @click="isForm = true"><Icon type="plus-circled"></Icon> 加入项目</Button>
		        		</div>
		        </Col>
		    </Row>
       	</article>
       	<Modal title="加入项目" width="600" v-model="isForm">
       		<Card  style="border:0; margin-bottom: 5px;">
		        <div class="form-item">
		          <Input placeholder="加入项目名称"></Input>
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
<style type="text/css">
	.join-team{
		padding:  0 8px;
	}
	#my-project .main{
		padding-top: 20px;
	}
</style>