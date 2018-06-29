<template>
    <div>
        <div id="payform" style="height: auto"></div>
    </div>
</template>

<script>
    let Base64 = require('js-base64').Base64;
    import {doRecharge} from "@/api/api";

    export default {
        name: "goPay",
        data(){
            return{
                html:''
            }
        },
        created(){
            let params = {
                money_order: window.localStorage.getItem("money_order"),
                name_goods: window.localStorage.getItem("name_goods")
            }
            if(params){
                doRecharge(params)
                    .then((result) => {

                        let str = Base64.decode(result.data)
                        console.log(str);
                        var payform = document.getElementById('payform')
                        var payDiv = document.createElement('div')
                        console.log(payform)
                        // this.formStr = str
                        payDiv.innerHTML = str
                        payDiv.id = 'payDiv'
                        payform.append(payDiv)
                        // this.html = str

                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }


        }
    }
</script>

<style scoped>

</style>