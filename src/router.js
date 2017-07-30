const routers = [{
	path: '/',
	redirect: '/manage/myproject',
	component: (resolve) => require(['./views/index.vue'], resolve),
	children: [{
		path: 'manage',
		meta: {
			title: '项目管理'
		},
		component: (resolve) => require(['./views/project-manage/main.vue'], resolve),
		children: [{
			path: 'myproject',
			meta: {
				title: '我的项目'
			},
			component: (resolve) => require(['./views/project-manage/my-project.vue'], resolve),
		}, {
			path: 'allproject',
			meta: {
				title: '全部项目'
			},
			component: (resolve) => require(['./views/project-manage/all-project.vue'], resolve),
		}]
	}]
}, {
	path: '*',
	redirect: '/manage/myproject'
}];
export default routers;