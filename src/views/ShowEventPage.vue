<template>
<AppLayout :title="title" :back="back">
<div v-if="isLoading==true" style="padding:20px;">
<skeleton-component/>
</div>
<div v-else>

<div v-if="event.length>0">
<ion-card style="marginL0;margin:0;border-radius:0;" v-for="e in event" :key="e.id">
<ion-card-header>
<ion-card-title style="font-size:18px;">{{ e.name }} </ion-card-title>
<ion-card-subtitle>{{ e.date }} </ion-card-subtitle>
</ion-card-header>

<ion-card-content>
<p><strong>Chief Guest</strong> {{ e.guest }} </p>
<div style="padding-top:20px;">
<ion-button expand="full" color="dark">Register to attend</ion-button>
</div>
</ion-card-content>
</ion-card>
</div>
<div v-else>
No event
</div>


</div>



</AppLayout>
</template>
<script>
import EventsModel from '../models/events.js';
import AppLayout from './Layouts/AppLayout.vue';
import SkeletonComponent from './components/SkeletonComponent.vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton } from '@ionic/vue';
export default {
components: { AppLayout,
SkeletonComponent,
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
IonButton


},
data(){return{
title:'Event',
isLoading:false,
back:'/tabs/tab4',
event:[],



}},

methods:{
response(){
this.isLoading=true;
const model=new EventsModel;
// console.log(this.$route.params.id);
const id=this.$route.params.id;
model.show_event(id).then(response=>{
if(response.data!=null){
this.event=response.data;
this.isLoading=false;
}else{
console.log(response.error);
}
}).catch(error=>{
console.log(error);
});





}




},
mounted(){
this.response();


}




}
</script>