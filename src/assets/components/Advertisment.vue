<template>
    <div class="land-advertisment-wrapper pb-5">
        <div class="container">
            <div class="ad-container">
                <b-row>
                    <b-col cols="12" xl="8" lg="8" md="8">
                        <img class="ad-img" src="@/assets/image/Advertisment/case.png" />
                        <div class="seccontainer">
                            <div class=" ad-text d-flex text-center">
                                <img class="ad-logo-image" src="@/assets/image/Header/hc.jpg" />
                                <h4 class="ad-logo-name">HC's Analysis</h4>
                            </div>
                            <div class="ad-logo-subtext">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris lobortis libero quam, et pulvinar magna ullamcorper quis.
                                    Nullam vestibulum id tellus in ultricies. In hac habitasse
                                    platea dictumst. Praesent ac magna sollicitudin, ultricies mi at, auctor diam.
                                    Ut viverra sagittis velit sed commodo. Quisque condimentum, dolor vel convallis p
                                    orttitor,mauris quam sodales erat, in sollicitudin justo elit ut dolor.
                                    Pellentesque ac tellus felis. In quis blandit ex.</p>
                            </div>
                        </div>
                        <div class="cursor find-us-btn">
                            <h4>Find Us</h4>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            config: {
                urlFull: '',
            },
            postData:{data:'',language:'en'},
            submitForm:{landContactUs:''},
            dataArray:[]
        };
    },
    methods:{
        getData(){
            const urlFunc='';
            this.postData.data=JSON.stringify(this.submitForm)
            const data= axios({
                url:this.config.urlFull+urlFunc,
                method:'post',
                data:this.postData,
            });
            // take data back from back end
            data.then((response)=>{
                var data = response.data
                if(data.valid){
                    data=data.data
                    console.log(data)
                    this.dataArray=data;
                }
            });
        }
    }
}
</script>