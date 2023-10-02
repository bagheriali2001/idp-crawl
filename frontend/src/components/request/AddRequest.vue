<template> 
    <div class="flex flex-col items-center justify-center gap-4">
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-3xl font-bold">Add Request</h1>
            <img
                class="w-4 h-4 ml-2 cursor-pointer"
                src="/icons/info-icon.svg"
                alt="info"
                @click="showHelpModal = true"
            >
        </div>
        <div class="flex flex-row items-center justify-center gap-2">
            <select name="country" id="country" class="select select-primary w-full max-w-[20%]" v-model="current_country">
                <option disabled selected :value="''">Country</option>
                <option v-for="country of country_code" :key="country.code" :value="country.code">{{ country.name }}</option>
            </select>

            <select name="center" id="center" class="select select-primary w-full max-w-[20%]" v-model="chosenCity">
                <option disabled selected :value="''">City</option>
                <option v-for="center of shownCities" :key="center" :value="center">{{ center }}</option>
            </select>

            <select name="format" id="format" class="select select-primary w-full max-w-[20%]" v-model="chosenFormat">
                <option disabled selected :value="''">Format</option>
                <option v-for="format of testFormatIds" :key="format.key" :value="format.key">{{ format.name }}</option>
            </select>

            <div class="divider lg:divider-horizontal"></div> 

            <div class="flex flex-row items-center justify-center">
                <button type="button" @click="getCenters" class="btn btn-outline btn-success">Get Centers</button>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center gap-2" v-if="show_step_two">
            <table class="table table-zebra">
                <thead>
                <tr>
                    <th></th>
                    <th>Center Name</th>
                    <th>Center Town</th>
                    <th>Checked</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr v-for="(center, index) in centers" :key="center.venueID">
                    <th>{{ index + 1 }}</th>
                    <td>{{ center.data.testVenueName }}</td>
                    <td>{{ center.data.customCityDisplayName }}</td>
                    <td>
                        <input type="checkbox" v-model="center.checked" @click="check(center.venueID)">
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="flex flex-row items-center justify-center gap-2" v-if="show_step_two">
            <input type="text" v-model="email" placeholder="Email" class="input input-primary input-bordered w-full max-w-[80%]">

            <input type="date" v-model="start_date" placeholder="Start Date" class="input input-primary input-bordered w-full max-w-[80%]">

            <input type="date" v-model="end_date" placeholder="End Date" class="input input-primary input-bordered w-full max-w-[80%]">

            <div class="divider lg:divider-horizontal"></div> 

            <div class="flex flex-row items-center justify-center">
                <button type="button" @click="setAlarm" class="btn btn-outline btn-success">Set An Alarm</button>
            </div>
        </div>
        <Teleport to="body">
            <HelpModalComponent :show="showHelpModal" :text="helpModelText" @close="showHelpModal = false"/>
        </Teleport>
    </div>
</template>

<script>
import { get, post } from '../../service/httpRequests';
import { country_code, testCentreLocations, testFormatId } from '../../../data/API_ENUM';
import moment from 'moment';
import HelpModalComponent from '../modals/HelpModalComponent.vue'

export default {
    components: {
        HelpModalComponent,
    },
    data() {
        return {
            country_code: country_code.values.filter(country => [95, 212, 220, 96, 13, 9].includes(country.code)),
            testCentreLocations: testCentreLocations.values,
            testFormatIds: testFormatId.values,
            current_country: '',
            shownCities: [],
            chosenCity: '',
            chosenFormat: '',
            centers: [],
            email: '',
            start_date: '',
            end_date: '',
            show_step_two: false,
            showHelpModal: false,
            helpModelText: "You can add a request to get notified when a test time was found, please first choose the country, city, and format of the test, then click on the 'Get Centers' button, then choose the centers you want to be notified about, then enter your email, start date, and end date, and click on the 'Set An Alarm' button. The start date and end date are the dates you want us to check for test times between them.",
        }
    },
    created() {
        this.start_date = moment().format('YYYY-MM-DD');
        this.end_date = moment().add(1, 'months').format('YYYY-MM-DD');

        console.log(this.$store.getters.getUserId);
    },
    watch: {
        current_country: function (val) {
            this.shownCities = testCentreLocations.getUniqueDisplayNameOfCountry(val);
        }
    },
    methods: {
        async getCenters() {
            try {
                if(this.current_country == '' || this.chosenCity == '' || this.chosenFormat == '') {
                    this.$emit('update-error-modal',{
                        show: true,
                        title: "Error",
                        message: "Please fill in all the fields",
                        close_time_limit: 7000,
                        warn: true,
                    });
                    return;
                }
                const response = await get(`/api/data/venues`, {
                    params: {
                        countryId: this.current_country,
                        cityNames: [this.chosenCity],
                        testFormatIds: [testFormatId.getValueOfKey(this.chosenFormat)],
                    }
                });
                this.centers = [];
                for (let data of response.body.venues){
                    this.centers.push({
                        data,
                        venueID: data.testVenueId,
                        checked: false,
                    });
                }
                if(this.centers.length == 0) {
                    this.$emit('update-error-modal',{
                        show: true,
                        title: "Error",
                        message: "No centers found",
                        close_time_limit: 7000,
                        warn: true,
                    });
                    return;
                }
                this.show_step_two = true;
            } catch (error) {
                console.log(error);
                this.$emit('update-error-modal',{
                    show: true,
                    title: "Error",
                    message: "Something went wrong while fetching centers",
				    close_time_limit: 5000,
                    warn: true,
                });
            }
        },
        check(venueID) {
            for (let center of this.centers) {
                if (center.venueID == venueID) {
                    center.checked = !center.checked;
                    break;
                }
            }
        },
        async setAlarm() {
            try {
                if(this.email == '' || this.start_date == '' || this.end_date == '' || this.centers.filter(center => center.checked).length == 0) {
                    this.$emit('update-error-modal',{
                        show: true,
                        title: "Error",
                        message: "Please fill in all the fields",
                        close_time_limit: 7000,
                        warn: true,
                    });
                    return;
                }
                const response = await post(`/api/user/requests`, {
                    user_id: this.$store.getters.getUserId,
                    email: this.email,
                    start_date: this.start_date,
                    end_date: this.end_date,
                    testVenueIDs: this.centers.filter(center => center.checked).map(center => center.venueID),
                });
                console.log(response);

                // clear the fields except email, and dates
                for (let center of this.centers) {
                    center.checked = false;
                }

                this.$emit('update-error-modal',{
                    show: true,
                    title: "Success",
                    message: "Request added successfully",
				    close_time_limit: 3000,
                    warn: false,
                });
            } catch (error) {
                console.log(error);
                this.$emit('update-error-modal',{
                    show: true,
                    title: "Error",
                    message: "Something went wrong while setting alarm",
				    close_time_limit: 5000,
                    warn: true,
                });
            }
        },
    }
}

</script>