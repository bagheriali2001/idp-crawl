<template>
    <div class="flex flex-col items-center justify-center gap-4 overflow-x-hidden">
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-4xl font-bold">My Requests</h1> 
            <img
                class="w-4 h-4 ml-2 cursor-pointer"
                src="/icons/info-icon.svg"
                alt="info"
                @click="showHelpModal = true"
            >
        </div>
        <div class="flex flex-row items-center justify-center gap-2 overflow-x-scroll">
            <div class="flex flex-row items-center justify-center gap-2 overflow-x-scroll" v-if="user_requests.length > 0">
                <table class="table table-zebra overflow-x-scroll">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Centers</th>
                        <th>Email</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Found Yet</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(request, index) in user_requests" :key="request._id">
                        <th>{{ index + 1 }}</th>
                        <td>
                            <div
                            v-tippy="{ 
                                content: request.testVenueIDs.map((id) => id.name).join('<br>'),
                                appendTo: 'parent',
                                theme: 'custom',
                                allowHTML: true,
                                arrow: true,
                                zIndex: 99999,
                                placement: 'right'
                            }">

                                {{ request.testVenueIDs.length }}
                            </div>
                        </td>
                        <td>{{ request.email }}</td>
                        <td>{{ request.start_date }}</td>
                        <td>{{ request.end_date }}</td>
                        <td>{{ request.isFound }}</td>
                        <td>
                        <button type="button" @click="deleteRequest(request._id)" class="btn btn-sm btn-outline btn-success">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex flex-row items-center justify-center gap-2" v-else>
                <h1 class="text-1xl font-bold">You have no request</h1>
            </div>
        </div>
        <Teleport to="body">
            <HelpModalComponent :show="showHelpModal" :text="helpModelText" @close="showHelpModal = false"/>
        </Teleport>
    </div>
</template>

<script>
import moment from 'moment';
import { get, del } from '../../service/httpRequests';
import { directive } from 'vue-tippy'
import HelpModalComponent from '../modals/HelpModalComponent.vue'

export default {
    directives: {
        tippy: directive,
    },
    components: {
        HelpModalComponent,
    },
    data() {
        return {
            user_requests : [],
            showHelpModal: false,
            helpModelText: "You Can see all your requests here. You can delete them if you want.",
        }
    },
    methods: {
        async getUserRequests() {
            try {
                const response = await get(`/api/user/${this.$store.getters.getUserId}/requests`);
                console.log(response);
                for( let request of response.body.requests){
                    request.start_date = moment(request.start_date).format("YYYY-MM-DD");
                    request.end_date = moment(request.end_date).format("YYYY-MM-DD");
                }
                this.user_requests = response.body.requests;
            } catch (error) {
                console.log(error);

                this.$emit('update-error-modal',{
                    show: true,
                    title: "Error",
                    message: error?.response?.data?.body?.errors[0].message || "Something went wrong while fetching requests",
				    close_time_limit: 7000,
                    warn: true,
                });
            }
        },
        async deleteRequest(request_id) {
            try {
                const response = await del(`/api/user/${this.$store.getters.getUserId}/requests/${request_id}`);
                console.log(response);
                this.getUserRequests();
                this.$emit('update-error-modal',{
                    show: true,
                    title: "Success",
                    message: "Request deleted successfully",
				    close_time_limit: 3000,
                    warn: false,
                });
            } catch (error) {
                console.log(error);
                this.$emit('update-error-modal',{
                    show: true,
                    title: "Error",
                    message: error?.response?.data?.body?.errors[0].message || "Something went wrong while deleting request",
				    close_time_limit: 7000,
                    warn: true,
                });
            }
        },
    },
    async created () {
        this.getUserRequests();
    },
}
</script>



<style scoped>
  * >>> .tippy-box[data-theme~='custom'] {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.25);
    color: black;
    height: max-content;
    padding: 0.5rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    z-index: 9999;
    overflow: hidden;
  }
</style>