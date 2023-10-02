<template>
    <div class="w-full navbar rounded-b-md flex flex-row items-center justify-center my-2 gap-2">

        <!-- add a support me text and logos -->
        <div class="px-2 mx-2 text-2xl font-semibold">Donate</div>
        <a
            href="https://buymeacoffee.com/bagheriali2001"
        >
            <img
                src="/logos/bmc-logo.svg"
                alt="Buy Me A Coffee"
                class="w-6 h-6 inline-block"
            >
        </a>
        <a
            href="https://zarinp.al/bagheriali2001"
        >
            <img
                src="https://www.zarinpal.com/lab/wp-content/uploads/sites/2/2016/05/icon-128x128.png"
                alt="Buy Me A Coffee"
                class="w-6 h-6 inline-block"
            >
        </a>
        <!-- <a
            href="https://hamibash.com/bagheriali.dev"
        >
            <img
                src="https://hamibash.com/assets/img/logo.svg"
                alt="Hamibash"
                class="w-6 h-6 inline-block"
            >
        </a> -->

        <img
            src="/logos/tether-usdt-logo.svg"
            alt="USDT Tether"
            class="w-6 h-6 inline-block"
            @click="showModal = true"
        >

        <a href="https://bagheriali.dev">
            <svg
					width="20"
					height="20"
					viewBox="0 0 22 22"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="inline-block fill-current"
				><path d="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z" />
            </svg>
        </a>

        <Teleport to="body">
            <CryptoDonateComponent
                :show="showModal"

                @close="showModal = false"
            />
        </Teleport>
    </div>
</template>

<script>
import CryptoDonateComponent from './CryptoDonateComponent.vue';

export default {
    name: 'FooterComponent',
    components: {
        CryptoDonateComponent,
    },
    data() {
        return {
            showModal: false,
        }
    },
}
</script>
