<template>
  <el-input class="my-3" v-model="submitForm.forgotusername" placeholder="Enter Your New Username" />
  <el-input class="my-3" v-model="submitForm.forgotPassword" placeholder="Enter Your New Password" />
  <el-input class="my-3" v-model="submitForm.forgotPassword2" placeholder="Enter Your New 2nd - Password" />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      config:{
        urlFull:'',
      },
      postData:{data:'',language:'en'},
      submitForm:{forgotusername: '',forgotPassword: '',forgotPassword2: '',},
    };
  },
  methods:{
    getData(){
      const urlFunc='';
      this.postData.data=JSON.stringify(this.submitForm)
      const data=axios({
        url:this.config.urlFull+urlFunc,
        method:'post',
        data:this.postData,
      });
    },
  },
  created(){
    this.getData();
  }
}
</script>