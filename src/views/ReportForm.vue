<template>
<AppLayout :title="title" :back="back">
<div v-if="isLoading==false">

<ion-card style="margin:0;box-shadow:none;border-radius:0;">
  <ion-card-header>
    <ion-card-title></ion-card-title>
    <ion-card-subtitle>Report incident</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>

<form @submit.prevent="submit">
<div style="padding:10px;">{{ message }}</div>


<div>

<ion-select  interface="popover" placeholder="Select Incident" v-model="form.incident">
<ion-select-option :value="s.id" v-for="s in incident" :key="s.id" style="text-transform:capitalize;">
{{ s.name }}
</ion-select-option>
</ion-select>



</div>
<div>
<ion-input placeholder="Enter your telephone number" fill="outline" v-model="form.tel"></ion-input>
</div>

<div>
<ion-input placeholder="Enter your location" fill="outline" v-model="form.location"></ion-input>
</div>
<div>
<ion-textarea placeholder="Describe the incident" fill="outline" v-model="form.description"></ion-textarea>
</div>
<div>
<submit-button :isLoading="isSubmitted" :name="'Submit Report'"/>

</div>
</form>

</ion-card-content>
</ion-card>


</div>
<div v-else style="padding:20px;">
<skeleton-component/>
</div>
</AppLayout>
</template>
<script>

import AppLayout from './Layouts/AppLayout.vue';
import DepartmentModel from '../models/department.js';
import ReportModel from '../models/reports.js';
import Authentication from '../models/authentication.js';
import SkeletonComponent from './components/SkeletonComponent.vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
IonCardTitle,
IonInput,
IonTextarea,
IonSelect,
IonSelectOption,


} from '@ionic/vue';
import SubmitButton from '../views/components/SubmitButton.vue';




export default {
components:{
AppLayout,
SkeletonComponent,
IonCard, IonCardContent,
IonCardHeader,
IonCardSubtitle,
IonCardTitle,
IonInput,
IonTextarea,
IonSelect, IonSelectOption,
SubmitButton,

},
data(){return{
title:'Report form',
back:'/',
incident:[],
isLoading:false,
form:{
tel:'',
location:'',
description:'',
incident:'',
},

message:null,
status:null,
isSubmitted:false,

}},



methods:{
select_incident(event){
// this.form.incident=event.target.value;
alert();
},


get_incidents(){
const model=new ReportModel;
model.report_titles().then(response=>{
if(response.data!=null){
this.incident=response.data;

}else{
console.log(response.error);
}
}).catch(error=>{console.log(error)});
},

submit(){
if(this.form.tel!='' && this.location!='' && this.form.incident!='' && this.form.description!=''){
this.isSubmitted=true;
const auth=new Authentication;
auth.get_session().then(res=>{
const email=auth.get_user_email(res);
const model=new ReportModel;
model.create_user_report({
userID:email,
tel:this.form.tel,
message:this.form.description,
location:this.form.location,
reportID:this.form.incident,
}).then(response=>{
this.isSubmitted=false;
console.log(response);
this.message='Your report has been submitted successfully.';
this.form={};
}).catch(error=>{
console.log(error);
})

}).catch(err=>{console.log(err)})


}else{
this.message='Fill in all fields';
}


}







},
mounted(){
this.get_incidents();
}




}
</script>

<style scoped>
div{
margin-bottom:20px;
}

ion-input, ion-textarea, ion-select{
--background:#F8F9F9;



--padding-bottom: 10px;
--padding-end: 10px;
--padding-start: 10px;
--padding-top: 10px;

}


</style>