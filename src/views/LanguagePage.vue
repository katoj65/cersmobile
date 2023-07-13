<template>
<AppLayout :title="title" :back="back">
<div style="padding:20px;" v-if="isLoading==true">
<skeleton-component/>
</div>
<div v-else style="padding:15px;padding-top:0;">


<div v-if="languages.length>0" style="margin-top:5px;">
<ion-item v-for="l in languages" :key="l.id" lines="none" detail="true" button>
<ion-icon :icon="language" slot="start" style="font-size:15px"></ion-icon>
<ion-label>{{ l.name }} </ion-label>
</ion-item>
</div>
<div v-else style="padding:20px;">No language</div>
</div>
</AppLayout>
</template>
<script>
import SkeletonComponent from './components/SkeletonComponent.vue';
import AppLayout from './Layouts/AppLayout.vue';
import LanguageModel from '../models/language';
import { IonItem, IonLabel,IonIcon } from '@ionic/vue';
import { language} from 'ionicons/icons';
export default {
components: { AppLayout,
SkeletonComponent,
IonItem,
IonLabel,
IonIcon

},
data(){return{
title:'Languages',
back:'/',
languages:[],
isLoading:false,

}},
methods:{
response(){
this.isLoading=true;
const model=new LanguageModel;
model.get_languages().then(response=>{
if(response.data!=null){
this.languages=response.data;
this.isLoading=false;
}else{
console.log(response.error);
}
}).catch(error=>{console.log(error)});
}



},
mounted(){
this.response();
},

setup(){return{
language,
}}



}
</script>

<style scoped>
ion-item{
border:solid thin #EBEDEF;
border-radius: 10px;;
margin-bottom:5px;
}
</style>