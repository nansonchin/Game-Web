<template>
    <div>
      <el-checkbox v-model="rememberLogin" label="Remember Me" size="large" />
    </div>
  </template>

<script>
  export default{
    data(){
      return{
        config:{
          urlFull:'',

        },
        postData:{data:'',language:'en'},
        submitForm:{rememberLogin:''}
      };
    },
    methods:{
      getData(){
        const urlFunc='';
        this.postData.data=JSON.stringify(this.submitForm)
        const data=axios({
          url:this.config.urlFull+urlFunc,
          methods:'post',
          data:this.postData,
        });
      }
    }
  }
</script>