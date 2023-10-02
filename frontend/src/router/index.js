import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'main',
		component: function () {
			return import('../views/MainView.vue')
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/'
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
