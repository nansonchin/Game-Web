<template>
    <el-input class="my-3" v-model="username" placeholder="Username" />
    <el-input class="my-3" v-model="password" placeholder="Password" />
</template>
  

<script>
import axios from 'axios';

  export default{
    data(){
      return{
        config:{
          urlFull:'',
        },
        postData:{data:'',language:'en'},
        submitForm:{username:'',password:''},

      };
    },
    methods:{
      getData(){
        const urlFunction='';
        this.postData.data=JSON.stringify(this.submitForm)
        const data = axios({
          url:this.config.urlFull+urlFunction,
          method:'post',
          data:this.postData,
        });
      }
    },
    created(){
      this.getData()
    },
  }
</script>