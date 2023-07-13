<template>
<AppLayout :title="title" :back="back">
<ion-toolbar>
<ion-buttons slot="start">
<ion-button @click="setOpen(true)"> <ion-icon slot="start" :icon="listOutline" style="color:black;"></ion-icon> </ion-button>
</ion-buttons>
<ion-title style="font-weight:normal;font-size:15px;">
Alert people around you
</ion-title>
</ion-toolbar>




<ion-content>


<ion-item v-for="n in 6" :key="n" lines="full" style="margin-top:1px;">
<ion-label class="ion-text-wrap">
Multi-line text that should ellipsis when it is too long to fit on one line. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
</ion-label>
</ion-item>




<!--------MODAL--------->
<ion-modal :is-open="isOpen">
<ion-header>
<ion-toolbar>
<ion-title>Modal</ion-title>
<ion-buttons slot="end">
<ion-button @click="setOpen(false)">Close</ion-button>
</ion-buttons>
</ion-toolbar>
</ion-header>
<ion-content>
<p>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
dicta.

</p>
</ion-content>
</ion-modal>

<!--------MODAL--------->









<ion-footer style="position:fixed;bottom:0;width:100%;padding:0;">
<ion-toolbar style="text-align:center;">
<ion-button class="alert" fill="clear" @click="$router.push('/alert-center')" expand="block" id="open-action-sheet">
<ion-icon slot="start" :icon="notificationsOutline"></ion-icon>
Alarm
</ion-button>
</ion-toolbar>
</ion-footer>
</ion-content>













<ion-action-sheet trigger="open-action-sheet" header="ALERT INCIDENT" :buttons="actionSheetButtons"  class="action-sheet"
></ion-action-sheet>
</AppLayout>
</template>
<script>

import { shield, listOutline, notificationsOutline } from 'ionicons/icons';
import AppLayout from './Layouts/AppLayout.vue';
import { IonItem, IonLabel,IonContent, IonFooter, IonTitle,
IonToolbar,IonButton,IonIcon, IonButtons,
IonActionSheet,
IonModal, IonHeader


} from '@ionic/vue';
import ReportsModel from '../models/reports';
export default {
components:{ AppLayout,IonItem, IonLabel,
IonContent, IonFooter, IonTitle, IonToolbar,
IonButton,IonIcon,IonButtons,
IonActionSheet,
IonModal, IonHeader

},
//
data(){return{
title:'Alert Center',
back:'/',
incidents:[],
actionSheetButtons:[
{
text: 'Robbery',
// role: 'destructive',
data: {
action: 'share',
},
},
{
text: 'Fire',
data: {
action: 'share',
},
},

{
text: 'Accident',
data: {
action: 'share',
},
},

{
text: 'Mob Justice',
data: {
action: 'share',
},
},

{
text: 'Domestic Violence',
data: {
action: 'share',
},
},

{
text: 'Cancel',
role: 'cancel',
data: {
action: 'cancel',
},
},


],
isOpen: false,



}},

//
setup() {
return {
shield,listOutline,notificationsOutline,


};
},


methods:{
setOpen(isOpen) {
this.isOpen = isOpen;
},


incident_alerts(){
const model=new ReportsModel;
model.alert_incidents().then(response=>{
if(response.data!=null){
this.alert_incidents=response.data;
}else{
console.log(response.error);
}
}).catch(error=>{alert(error)});
}

},
mounted(){
this.incident_alerts();
}




    }
    </script>



<style scoped>
ion-button.alert {
  --color:white;
  --margin:0;
  --background:#B7950B;
  font-weight: bold;
  margin:5px;


}
ion-toolbar {
--padding:10px;
}

ion-action-sheet.action-sheet {
--background:#B7950B;
--backdrop-opacity: 0.5;
--button-background-selected: #7D6608;
--button-color: white;
font-weight:bold;
--color: #fff;
--border:solid thin white;
--border-radius:10px;
--font-size:18px;

}


ion-action-sheet.action-sheet.actionSheetButtons{

  }
</style>