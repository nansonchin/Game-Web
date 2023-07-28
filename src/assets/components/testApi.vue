<template>
    <div>This is a Testing for APi</div>
    <div>
        {{ test }}
    </div>
    <div v-for="i in testarray">
        {{ i.created_at }}
    </div>
    <input type="text" v-model="submitForm.login"/>
    <input type="password" v-model="submitForm.password"/>
    <button @click="getData"> Submit</button>
</template>

<script setup>
</script>

<script>
import axios from 'axios';

// const requests = urls.map((url) => axios.get(url));
export default {
    data() {
        return {
            config: {
                url1: 'https://backednews.neis.com.my/public/society/common/home/ajaxTable',  //ini api
            },
            postData: { data: '', language: 'en' },
            submitForm: { login:'' ,password:''},
            test: '',
            login:'',
            testarray: [],
        };
    },

    methods: {
        getData() {
            const url = '';   //ini api de function name
            this.postData.data = JSON.stringify(this.submitForm)
            const data = axios({
                url: this.config.url1 + url,
                // url: this.config.url + url,   //this is calling the api 
                method: 'post',  // get or post all use post method
                data: this.postData,  // pass data to backend
            });
            // Handle the response data
            data.then((response) => {
                var data = response.data
                if (data.valid) {
                    data = data.data
                    console.log(data.loadMore);
                    console.log(data.lastID);
                    this.test = data.lastID;
                    this.testarray = data.itemList;
                }
                //   console.log(response.data); // here maksud you can see what you get
            })
        },
        // sendData(){
        //     this.postData.data = JSON.stringify(this.submitUser)
        // },
    },
    created() {
        this.getData()
    },

};
</script>