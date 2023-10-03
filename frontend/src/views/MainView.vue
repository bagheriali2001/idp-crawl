<template>
	<div class="container mx-auto">
		<div class="hidden sm:block">
			<div class="tabs w-full">
				<button
					v-for="tab in tabs"
					:key="tab.id"
					:class="['tab', 'tab-lifted', {'tab-active': currentTab === tab.id}]"
					@click="updateCurrentTab(tab.id)"
					:id="`change-tab-${tab.slug}`"
					:data-umami-event="`Change Tab ${tab.slug}`"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 mr-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					:d="tab.svgPath"
				/></svg>{{ tab.name }}</button>
			</div>

			<div class="divider"></div>

			<CheckCenter v-if="currentTab === 1" @updateErrorModal="updateErrorModal"/>
			
			<MyRequests v-else-if="currentTab === 2" @updateErrorModal="updateErrorModal"/>

			<AddRequest v-else-if="currentTab === 3" @updateErrorModal="updateErrorModal"/>


			<div class="divider"></div>

			<teleport to="body">
				<ErrorModalComponent
					:title="errorModal.title"
					:message="errorModal.message"
					:close_time_limit="errorModal.close_time_limit"
					:warn="errorModal.warn"
					@close="console.log('closing'); errorModal.show = false"
					v-if="errorModal.show"
				/>
			</teleport>
		</div>
		<div class="block sm:hidden">
			<div class="mx-4">
				Please use a desktop device. This website is not optimized for mobile devices.
				The mobile version is coming soon.
			</div>
		</div>
    </div>	
</template>

<script>
import CheckCenter from '../components/center/CheckCenter.vue'
import MyRequests from '../components/request/MyRequests.vue'
import AddRequest from '../components/request/AddRequest.vue'

import ErrorModalComponent from '../components/modals/ErrorModalComponent.vue'

export default {
    name: 'MainView',
	components: {
		ErrorModalComponent,
		CheckCenter,
		MyRequests,
		AddRequest,
	},
    data() {
        return {
			currentTab: 1,
			tabs: [
				{
					id: 1,
					name: 'Check Center Availability',
					slug: 'check-center',
					svgPath: 'M4 6h16M4 12h16M4 18h16',
				},
				{
					id: 2,
					name: 'My Requests',
					slug: 'my-requests',
					svgPath: 'M4 6h16M4 12h16M4 18h16',
				},
				{
					id: 3,
					name: 'Add Request',
					slug: 'add-request',
					svgPath: 'M4 6h16M4 12h16M4 18h16',
				},
			],
			// add error modal
			errorModal: {
				title: "Error",
				message: "Something went wrong",
				close_time_limit: 50000,
				warn: true,
				show: false,
			},
        }
    },
    methods: {
		updateCurrentTab(id) {
			this.currentTab = id;
		},
		updateErrorModal(error) {
			this.errorModal = error;
		},
    },
}

</script>

<style scoped>
.chart-container {
    height:70vh;
    /* width: 100%; */
}
</style>