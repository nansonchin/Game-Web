<template>
    <el-input class="my-3" v-model="submitForm.forgotEmail" placeholder="Email" />
    <p class="rq-reset-acc" @click="getData">Request Token Link</p>
    <el-input class="my-3" v-model="submitForm.forgotNum" placeholder="Insert The Reset Token" />
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
        submitForm:{forgotEmail:'',forgotNum:''},
        forgotArray:[],
      };
    },
    methods:{
      getData(){
        const urlFunction='';
        this.postData.data=JSON.stringify(this.submitForm)
        const data=axios({
          url:this.config.urlFull+urlFunction,
          method:'post',
          data:this.postData,
        });
        data.then((response)=>{
          var data=response.data
          if(data.valid){
            data=data.data
            console.log(data);
            this.forgotArray=data;
          }
        })
      }
    },
    created(){
      this.getData();
    },
  }
</script>