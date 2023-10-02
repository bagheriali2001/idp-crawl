<template>

	<div class="drawer" :data-theme="theme">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<navbar-component class="container mx-auto"></navbar-component>
			<!-- Page content here -->
			<div class="container mx-auto mt-6">
				<router-view></router-view>
			</div>

			<div class="divider divider-horizontal"/>

			<footer-component class="container mx-auto"></footer-component>

		</div> 
	</div>
		
</template>
	
<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
	name: 'App',
	components: {
		NavbarComponent,
		FooterComponent,
	},
	data() {
		return {
			theme: "night",
		}
	},
	async created () {
		this.$store.dispatch('tryGetUserID');
	},
}
</script>
