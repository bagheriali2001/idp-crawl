import { get } from '../../../service/httpRequests'
import errorMessage from '../../../errorMessage.json'

export default{
    async tryGetUserID(context){
        try {
            const user_id = localStorage.getItem("user_id")
            
            if(user_id && user_id !== undefined && user_id !== null && user_id !== "" && user_id !== "null" && user_id !== "undefined"){
                console.log("🍟 has user_id: ", user_id);
                context.commit("setUser", {
                    user_id
                })
            } else {
                console.log("🍟 no user_id");
                const response = await get("/api/user");
                const { user_id } = response.body;
                localStorage.setItem("user_id", user_id);
                context.commit("setUser", {
                    user_id
                })
            }
        } catch (error) {
            console.log("error => ", error)
            throw new Error(errorMessage[error.response.data.lang.code])
        }
    },
}