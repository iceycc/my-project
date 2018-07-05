<template>
    <div>
        <div class="nd-main">
            <h3 class="title">{{title}}</h3>
            <p class="text" v-html="content"></p>
            <p class="addresser">{{username}}</p>
            <p class="date">{{time}}</p>
            <el-button type="primary" @click="goBack">返回</el-button>
        </div>
    </div>
</template>
<script>
    import {getNoticeDetail} from '@/api/api'
    export default {
        data() {
            return {
                title:'',
                content:'',
                time:'',
                username:''
            }
        },
        created(){
            let id = this.$route.params.id || 1
            this.getData(id)
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            getData(id){
                let params = {
                    messageid:id
                }
                getNoticeDetail(params)
                    .then((result)=>{
                        this.title = result.title
                        this.content=result.content
                        this.username = result.username
                        // console.log(result);
                    })
            }
        }
    }
</script>
<style lang="scss" scoped>

    .nd-main {
        margin: 80px;
        padding: 50px 100px 30px;
        text-align: center;
        background: #fff;
        .title {
            font-size: 20px;
        }
        .text {
            margin-top: 50px;
            padding-bottom: 30px;
            font-size: 16px;
            text-align: left;

        }
        .date, .addresser {
            height: 30px;
            font-size: 16px;
            text-align: right;
        }
    }
</style>
