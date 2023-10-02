<template>
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="absolute top-1 right-5 align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-4 sm:align-middle sm:max-w-lg sm:w-1/5">
                <div class="px-2 pt-3 pb-2 sm:p-4 sm:pb-1">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-2 sm:text-left">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                {{ title }}
                            </h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    {{ message }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-3 sm:px-5 sm:flex sm:flex-row-reverse">
                    <button type="button" @click="closeModal" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"  :class="warn ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'">
                        Close
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ErrorModalComponent',
    props: {
        title: {
            type: String,
            default: "Error",
        },
        message: {
            type: String,
            default: "Something went wrong",
        },
        close_time_limit: {
            type: Number,
            default: 3000,
        },
        warn: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
    mounted() {
        setTimeout(() => {
            this.closeModal();
        }, this.close_time_limit);
    },
    watch: {
        close_time_limit: function (val) {
            setTimeout(() => {
                this.closeModal();
            }, val);
        }
    }
}
</script>