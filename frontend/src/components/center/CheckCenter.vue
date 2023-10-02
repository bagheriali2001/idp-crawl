<template> 
    <div class="flex flex-col items-center justify-center gap-4">
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-3xl font-bold">Check Center Availability</h1>
            <img
                class="w-4 h-4 ml-2 cursor-pointer"
                src="/icons/info-icon.svg"
                alt="info"
                @click="showHelpModal = true"
            >
        </div>
        <div class="flex flex-row items-center justify-center gap-2">
            <select name="country" id="country" class="select select-primary w-full max-w-[20%]" v-model="current_country">
                <option disabled selected :value="0">Country</option>
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
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr v-for="(center, index) in centers" :key="center.testVenueId">
                    <th>{{ index + 1 }}</th>
                    <td>{{ center.testVenueName }}</td>
                    <td>
                        <a :href="googleMapBaseURL + center.latitude + ',' + center.longitude" target="_blank">
                            {{ center.customCityDisplayName }}
                        </a>
                    </td>
                    <td>
                        <button type="button" @click="getTests(center.testVenueId)" class="btn btn-sm btn-outline btn-success">Get Tests</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="flex flex-row items-center justify-center gap-2" v-if="show_step_two">
            <input type="date" v-model="start_date" placeholder="Start Date" class="input input-primary input-bordered w-full max-w-[80%]">

            <input type="date" v-model="end_date" placeholder="End Date" class="input input-primary input-bordered w-full max-w-[80%]">
        </div>
        <div class="flex flex-row items-center justify-center gap-2" v-if="show_step_three">
            <table class="table table-zebra">
                <thead>
                <tr>
                    <th>Num</th>
                    <th>Date</th>
                    <th>Availability</th>
                    <th>Test Format</th>
                    <th></th>
                    <th>Num</th>
                    <th>Date</th>
                    <th>Availability</th>
                    <th>Test Format</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr v-for="index in Math.ceil(testListSummary.length/2)" :key="index">
                    <th>{{ index * 2 - 1 }}</th>
                    <td>{{ testListSummary[(index - 1) * 2].date }}</td>
                    <td>{{ testListSummary[(index - 1) * 2].availability }}</td>
                    <td>{{ testListSummary[(index - 1) * 2].testFormat }}</td>

                    <td></td>

                    <th v-if="testListSummary.length > (index * 2) - 1">{{ index * 2 }}</th>
                    <td v-else></td>
                    <td v-if="testListSummary.length > (index * 2) - 1">{{ testListSummary[(index * 2) - 1].date }}</td>
                    <td v-else></td>
                    <td v-if="testListSummary.length > (index * 2) - 1">{{ testListSummary[(index * 2) - 1].availability }}</td>
                    <td v-else></td>
                    <td v-if="testListSummary.length > (index * 2) - 1">{{ testListSummary[(index * 2) - 1].testFormat }}</td>
                    <td v-else></td>
                    <!-- <td>{{ tests[index-1].date }}</td>
                    <td>{{ tests[index-1].availability }}</td>
                    <td>{{ tests[index-1].testFormat }}</td>
                    <td></td>
                    <td></td>
                    <td v-if="tests[index-1+Math.ceil(tests.length/2)]">{{ tests[index-1+Math.ceil(tests.length/2)].date }}</td>
                    <td v-if="tests[index-1+Math.ceil(tests.length/2)]">{{ tests[index-1+Math.ceil(tests.length/2)].availability }}</td>
                    <td v-if="tests[index-1+Math.ceil(tests.length/2)]">{{ tests[index-1+Math.ceil(tests.length/2)].testFormat }}</td> -->

                    <!-- <th>{{ index + 1 }}</th>
                    <td>{{ test.date }}</td>
                    <td>{{ test.availability }}</td>
                    <td>{{ test.testFormat }}</td> -->
                </tr>
                </tbody>
            </table>
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
            googleMapBaseURL: "https://www.google.com/maps/dir/?api=1&destination=",
            country_code: country_code.values.filter(country => [95, 212, 220, 96, 13, 9].includes(country.code)),
            testCentreLocations: testCentreLocations.values,
            testFormatIds: testFormatId.values,
            // current_country: 0,
            current_country: 95,
            shownCities: [],
            chosenCity: '',
            chosenFormat: '',
            centers: [],
            start_date: '',
            end_date: '',
            tests: [],
            show_step_two: false,
            show_step_three: false,
            testListSummary: [],
            showHelpModal: false,
            helpModelText: "You can check the availability of the centers by selecting the country, city and format. Then you can select the center and check the availability of the tests by selecting the date range. Please know that we update the data every 30 minute and the data is not real time.",
        }
    },
    created() {
        this.start_date = moment().format('YYYY-MM-DD');
        this.end_date = moment().add(1, 'months').format('YYYY-MM-DD');

        if(this.current_country != ''){
            this.shownCities = testCentreLocations.getUniqueDisplayNameOfCountry(this.current_country);
        }
    },
    watch: {
        current_country: function (val) {
            this.shownCities = testCentreLocations.getUniqueDisplayNameOfCountry(val);
        },
        tests: function (val){
            this.testListSummary = [];
            for(let test of val) {
                let index = this.testListSummary.findIndex((item) => item.date == moment(test.customMainDate).format('YYYY-MM-DD'));
                if(index == -1) {
                    this.testListSummary.push({
                        date: moment(test.customMainDate).format('YYYY-MM-DD'),
                        availability: (test.seatsRemainingDisplayClass == "availabilityHigh"? "High" : 
                                    (test.seatsRemainingDisplayClass == "availabilityMedium"? "Medium" :
                                        (
                                            test.seatsRemainingDisplayClass == "availabilityLow"? "Low" : "Unknown"
                                        ))),
                        testFormat: (test.testFormatId == 2 ? "CD" : "Paper"),
                    });
                } else {
                    if(this.testListSummary[index].availability == "Low" && test.seatsRemainingDisplayClass == "availabilityMedium") {
                        this.testListSummary[index].availability = "Medium";
                    } else if(this.testListSummary[index].availability == "Low" && test.seatsRemainingDisplayClass == "availabilityHigh") {
                        this.testListSummary[index].availability = "High";
                    } else if(this.testListSummary[index].availability == "Medium" && test.seatsRemainingDisplayClass == "availabilityHigh") {
                        this.testListSummary[index].availability = "High";
                    }

                    if(this.testListSummary[index].testFormat == "Paper" && test.testFormatId == 2) {
                        this.testListSummary[index].testFormat = "Paper/CD";
                    } else if (this.testListSummary[index].testFormat == "CD" && test.testFormatId == 1) {
                        this.testListSummary[index].testFormat = "Paper/CD";
                    }
                }
            }
            this.testListSummary.sort((a, b) => {
                return moment(a.date).unix() - moment(b.date).unix();
            });
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
                this.centers = response.body.venues;
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
        async getTests(center_id){
            try {
                if (this.start_date == '' || this.end_date == '') {
                    this.$emit('update-error-modal',{
                        show: true,
                        title: "Error",
                        message: "Please fill in all the fields",
                        close_time_limit: 7000,
                        warn: true,
                    });
                    return;
                }
                const response = await get(`/api/data/tests`, {
                    params: {
                        testVenueIds: [center_id],
                        start_date: this.start_date,
                        end_date: this.end_date,
                    }
                });
                this.tests = response.body.tests;

                if( this.tests.length == 0) {
                    this.$emit('update-error-modal',{
                        show: true,
                        title: "Error",
                        message: "No tests found",
                        close_time_limit: 7000,
                        warn: true,
                    });
                    return;
                }
            } catch (error) {
                console.log(error);
                this.$emit('update-error-modal',{
                    show: true,
                    title: "Error",
                    message: "Something went wrong while fetching tests",
                    close_time_limit: 5000,
                    warn: true,
                });
            }
        }
    }
}

</script>