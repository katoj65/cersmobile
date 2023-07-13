<template>
<ion-card style="margin:0;box-shadow:none;border-radius:0;border-bottom:">
<ion-card-content style="margin-bottom:5px;">
<div style="text-align:center;">
<img src="../../views/assets/icon/logo.png" style="width:100px;"/>
<ion-card-subtitle style="font-size:17px;color:#7D6608;font-weight:bolder;">The Republic of Uganda </ion-card-subtitle>
<ion-card-title style="font-size:17px;margin-top:10px;font-weight:bolder;color:#7D6608;">Citizens Engagement and Reporting</ion-card-title>
</div>
<div style="padding-top:20px;">
<ion-button expand="block" fill="clear" @click="$router.push('/alert-center')">
  <ion-icon slot="start" :icon="shield"></ion-icon>
  Alert Center</ion-button>
</div>
</ion-card-content>
</ion-card>
</template>
<script>

import { IonCard, IonCardContent,IonCardSubtitle, IonCardTitle,
IonButton, IonIcon
} from '@ionic/vue';
import { shield } from 'ionicons/icons';
export default {
components: { IonCard, IonCardContent,IonCardSubtitle, IonCardTitle,
IonButton,IonIcon

},


setup() {
      return { shield  };
    },

};
  </script>

  <style scoped>


  ion-button {
    --background:#B7950B;
    --border-radius: 10px;
    --color:white;

  }



  </style>