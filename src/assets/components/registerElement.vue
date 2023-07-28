<template>
  <el-input class="my-3" v-model="submitForm.reUsername" placeholder="Username" />
  <el-input class="my-3" v-model="submitForm.rePassword" placeholder="Password" />
  <el-input class="my-3" v-model="submitForm.re2ndPassword" placeholder="2nd-Password" />
  <el-input class="my-3" v-model="submitForm.email" placeholder="Email" />

</template>
  

<script>

import axios from 'axios';

export default {
  data() {
    return {
      config: {
        urlFull: '',
      },
      postData: {data:' ', language: 'en'},
      submitForm:{ reUsername:'',rePassword:'',re2ndPassword:'',email:'',}
    };
  },
  methods:{
    getData(){
      const urlfunction='';
      this.postData.data=JSON.stringify(this.submitForm);
      const data = axios({
        url:this.config.urlFull + urlfunction,
        method:'post',
        data:this.postData,
      });
    }
  },
  created(){
    this.getData()
  }
}
</script>