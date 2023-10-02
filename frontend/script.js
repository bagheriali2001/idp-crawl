const axios = require('axios');
const fs = require('fs');

const func = async () => {
    try{
        let users = [];
        for(let i = 0; i <= 2; i++){
            console.log("Getting first ", (i+1)*100, " users");
            const data = await axios.get(`https://www.instagram.com/api/v1/friendships/1613390080/followers/?count=100&max_id=${(i+1)*100}&search_surface=follow_list_page&hl=en`, {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "sec-ch-prefers-color-scheme": "dark",
                    "sec-ch-ua": "\"Not A(Brand\";v=\"24\", \"Chromium\";v=\"110\"",
                    "sec-ch-ua-full-version-list": "\"Not A(Brand\";v=\"24.0.0.0\", \"Chromium\";v=\"110.0.5481.177\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-ch-ua-platform-version": "\"13.4.1\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "sec-gpc": "1",
                    "viewport-width": "1046",
                    "x-asbd-id": "129477",
                    "x-csrftoken": "h5OB0y1TT4u9nr4pdZfS5mJ8dE7P7rT9",
                    "x-ig-app-id": "936619743392459",
                    "x-ig-www-claim": "hmac.AR2UQJHugSXGj_oM6aH1cijnJMoHp5W98wh0lgfxtC3fnoW3",
                    "x-requested-with": "XMLHttpRequest",
                    "cookie": "csrftoken=h5OB0y1TT4u9nr4pdZfS5mJ8dE7P7rT9; mid=ZH17ewAEAAHXH-Pk0aI1NyQmyoYI; ds_user_id=59558046325; ig_did=F6EB4C9A-0D47-42D5-A5E2-E297FD98E987; datr=fXt9ZBwb8KONR8HO2LH6cT0K; dpr=2; sessionid=59558046325%3ADaMDCaXv1VjGer%3A20%3AAYeJOZAaWUPDIWT7PHoms6cfnT6rdZVb150yjOhbEJo; rur=\"FRC\\05459558046325\\0541722498917:01f7e2707a3449566e510761e81b2bc343640071f858bfdbb4f79ce0079c31fdfa79eee6\"",
                    "Referer": "https://www.instagram.com/t._v._l/followers/?hl=en",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },
            });
            users.push(data.data.users);
        }
    
        console.log(users.length);

        fs.writeFile("data.json", JSON.stringify(users, null, 4), (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });


    } catch (error){
        console.log("error : ", error.message)
        // console.log("error : ", Object.keys(error))
        console.log("error : ", Object.keys(error))
    }
}

func();