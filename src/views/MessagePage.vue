<template>
<AppLayout :title="title" :back="back">
<ion-item v-for="n in 6" :key="n" lines="full" style="margin-top:1px;">
<ion-label>
Multi-line text that should ellipsis when it is too long to fit on one line. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
</ion-label>
<p style="color:silver;">20/12/22</p>
</ion-item>
</AppLayout>
</template>
<script>
import AppLayout from './Layouts/AppLayout.vue';
import { IonItem, IonLabel } from '@ionic/vue';
export default {
components:{ AppLayout,IonItem, IonLabel

},
data(){return{
title:'Messages',
back:'/',



}}




}
</script>