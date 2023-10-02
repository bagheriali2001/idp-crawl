import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
    state() {
        return {
            user_id: null,
        }
    },
    actions,
    getters,
    mutations,
}