<template>
<AppLayout :title="title" :back="back">









</AppLayout>
</template>
<script>
import AppLayout from './Layouts/AppLayout.vue';
import ReportModel from '../models/reports';
import Authentication from '../models/authentication';
export default {
components: { AppLayout },
data(){return{
title:'Reports',
back:'/',
reports:[],
isLoading:false,



}},

methods:{
response(){
const auth=new Authentication;
auth.get_session().then(response=>{
const email=auth.get_user_email(response);
const model=new ReportModel;
model.show_reports(email).then(res=>{

console.log(res);

}).catch(err=>{console.log(err)});
}).catch(error=>{console.log(error)});


}



},
mounted(){
this.response();
}




}
</script>