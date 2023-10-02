<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			default: 'Hello World',
		},
	}
}
</script>

<template>
	<Transition name="modal">
		<div
			v-if="show"
			class="modal-mask"
		>
			<div class="modal-container flex flex-col items-center justify-between bg-base-300 rounded-lg w-4/12 relative m-auto px-4 py-2">
				<button
					class="absolute top-0 right-0 m-2 card shadow-xl"
					@click="$emit('close')"
				>
					<svg
						class="w-6 h-6 text-gray-500 hover:text-gray-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div class="m-4">
					Help
				</div>

				<div class="m-4">
					{{ text }}
				</div>

				<div class="m-4">
					<button
						class="modal-default-button"
						@click="$emit('close')"
					>
						OK
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	transition: opacity 0.3s ease;
}

.modal-container {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
}

.modal-default-button {
	float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
	opacity: 0;
}

.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>