<template>
<ion-page>
<ion-header class="ion-no-border">
<div style="border-top:solid 3px black"></div>
<div style="border-top:solid 3px yellow"></div>
<div style="border-top:solid 3px red"></div>
<ion-toolbar>
<ion-buttons slot="start" v-if="back!=null">
<ion-button @click="$router.push(back)">
<ion-icon :icon="chevronBack" style="color:black;font-size:25px;"></ion-icon> </ion-button>
</ion-buttons>
<ion-title slot="start" style="font-weight:bold;font-size:17px;color:#7D6608;" v-if="title!=null">
{{ title }}
</ion-title>

<ion-title slot="start" style="font-weight:bold;font-size:20px;color:#7D6608;" v-else>
CERS.UG
</ion-title>

<ion-buttons slot="end">
<ion-button  @click="$router.push('/call')"><ion-icon :icon="call" style="color:red;font-size:25px;"></ion-icon> </ion-button>
<ion-button @click="$router.push('/messages')"><ion-icon :icon="chatbox" style="color:#B7950B;font-size:25px;"></ion-icon> </ion-button>
<ion-button @click="$router.push('/languages')"><ion-icon :icon="language" style="color:#B7950B;font-size:25px;"></ion-icon> </ion-button>

</ion-buttons>
</ion-toolbar>





</ion-header>
<ion-content style="background:white;">
<slot/>
</ion-content>













<ion-fab slot="fixed" vertical="bottom" horizontal="end">
<ion-fab-button>
<ion-icon :icon="createOutline" style="color:white;"></ion-icon>
</ion-fab-button>
<ion-fab-list side="top">
<ion-fab-button @click="$router.push('/report/form')">
<ion-icon :icon="document" style="color:white;"></ion-icon>
</ion-fab-button>
<ion-fab-button @click="$router.push('/appointment/form')">
<ion-icon :icon="briefcaseOutline" style="color:white;"></ion-icon>
</ion-fab-button>
<ion-fab-button @click="$router.push('/event/form')">
<ion-icon :icon="calendarOutline" style="color:white;"></ion-icon>
</ion-fab-button>
</ion-fab-list>
</ion-fab>
</ion-page>
</template>
<script>

import {
IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonButtons,IonButton, IonIcon,
IonFab, IonFabButton, IonFabList,
} from '@ionic/vue';
import { call, chatbox, alertCircle,chevronBack,
    chevronDownCircle,
    chevronForwardCircle,
    chevronUpCircle,
    colorPalette,
    document,
    globe,
    createOutline,
    briefcaseOutline,
    calendarOutline,
    language

} from 'ionicons/icons';
export default {
components:{
IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonButtons,IonButton, IonIcon,
IonFab, IonFabButton, IonFabList,
},

props:{
title:{},
back:{}

},



setup(){
return{
call,
chatbox,
alertCircle,
chevronBack,
chevronDownCircle,
chevronForwardCircle,
chevronUpCircle,
colorPalette,
document,
globe,
createOutline,
briefcaseOutline,
calendarOutline,
language
}
}



  }
  </script>

<style scoped>


ion-content {

}

ion-fab-button::part(native) {
background-color:#7D6608;
border:solid thin #7D6608 ;
}

ion-icon{
--color:#B7950B;
}

ion-fab{
position:fixed;
bottom:50px;
}
</style>