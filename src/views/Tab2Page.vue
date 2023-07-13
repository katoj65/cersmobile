<template>
  <AppLayout :title="title">

<div style="padding:20px;" v-if="isLoading==true">
<skeleton-component/>
</div>
<div v-else>

  <ion-list lines="full" style="margin-top:1px;" v-if="reports.length>0">
    <ion-item v-for="r in reports" :key="r.id">
      <ion-label style="text-transform:capitalize;">{{ r.report.name }} </ion-label>
      <span slot="end" style="color:silver;font-size:13px;">
{{ r.created_at.substring(0,10).split('-').reverse().join('/') }}
      </span>
    </ion-item>

  </ion-list>
  <div v-else style="padding:10px;">No content</div>
</div>








  </AppLayout>
  </template>
  <script>
import AppLayout from './Layouts/AppLayout.vue';
import ReportModel from '../models/reports';
import Authentication from '../models/authentication';
import { IonItem, IonLabel, IonList } from '@ionic/vue';
import SkeletonComponent from './components/SkeletonComponent.vue';
export default {
components: { AppLayout,
  IonItem, IonLabel, IonList,
  SkeletonComponent

},
data(){return{
title:'Reports',
reports:[],
isLoading:false,

  }},

methods:{
response(){
const auth=new Authentication;
auth.get_session().then(response=>{
this.isLoading=true;
const email=auth.get_user_email(response);
const model=new ReportModel;
model.show_reports(email).then(res=>{
if(res.data!=null){
console.log(res);
this.reports=res.data;
this.isLoading=false;
}else{
 console.log(res.error);
}

}).catch(err=>{console.log(err)});
}).catch(error=>{console.log(error)});


}



},

mounted(){
this.response();
}



  }
  </script>