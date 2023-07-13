<template>
<AppLayout :title="title">
<div v-if="isLoading" style="padding:20px;">
<skeleton-component/>
</div>
<div v-else>
<div v-if="events.length>0">


<ion-card v-for="e in events" :key="e.id" style="cursor:pointer;border-radius:0;margin:0;" @click="$router.push('/event/'+e.id)">
<ion-card-header>
<ion-card-title style="font-size:18px;">{{ e.name }} </ion-card-title>
<ion-card-subtitle>{{ e.date }} </ion-card-subtitle>
</ion-card-header>

<ion-card-content>
<strong style="margin-right:10px;">Chief Guest:</strong>  {{ e.guest }}
</ion-card-content>
</ion-card>



</div>
<div v-else>No events</div>





</div>



</AppLayout>
</template>
<script>
import AppLayout from './Layouts/AppLayout.vue';
import EventsModel from '../models/events.js';
import SkeletonComponent from './components/SkeletonComponent.vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
export default {
components: {
AppLayout,
SkeletonComponent,
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle

},
data(){return{
title:'Events',
isLoading:false,
events:[]

}},


methods:{
response(){
this.isLoading=true;
const model=new EventsModel;
model.get_events().then(response=>{
if(response.data!=null){
this.isLoading=false;
this.events=response.data;
}else{
console.log(response.error);
}
}).catch(error=>{console.log(error)});

}



},
mounted(){
this.response();
}




}
</script>