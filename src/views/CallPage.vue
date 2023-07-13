<template>
<AppLayout :title="title" :back="back">
<div v-if="isLoading==false" style="margin-top:1px;">
<ion-item v-for="c in contacts" :key="c.id" lines="full" button>
<ion-label>{{ c.name }}</ion-label>
<ion-icon :icon="call" style="color:silver;" slot="end"></ion-icon>
</ion-item>
</div>
<div v-else style="padding:20px;">
<skeleton-component/>
</div>
</AppLayout>
</template>
<script>
import ContactModel from '../models/contact.js';
import { call } from 'ionicons/icons';
import AppLayout from './Layouts/AppLayout.vue';
import { IonIcon, IonItem, IonLabel,} from '@ionic/vue';
import SkeletonComponent from './components/SkeletonComponent.vue';
export default {
components: { AppLayout,IonIcon, IonItem, IonLabel,
SkeletonComponent




},
data(){return{
title:'Call',
back:'/',
isLoading:false,
contacts:[],


}},

methods:{
payload(){
this.isLoading=true;
const model=new ContactModel;
model.get_contacts().then(response=>{
if(response.data!=null){
this.contacts=response.data;
this.isLoading=false;
}else{
this.contacts=[];
this.isLoading=false;
}
}).catch(error=>{console.log(error)});

}




},
mounted(){
this.payload();
},

setup(){
return{
call,
}
}




}
</script>
<style  scoped>
ion-button{
--background:none;

}
</style>