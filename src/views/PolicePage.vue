<template>
    <AppLayout :title="title" :back="back">
<ion-list>
<ion-item>

</ion-item>

</ion-list>

    </AppLayout>
    </template>
    <script>
    import AppLayout from './Layouts/AppLayout.vue';
    import { IonItem, IonLabel, IonList } from '@ionic/vue';
    export default {
    components: { AppLayout ,
        IonItem, IonLabel, IonList},
    data(){return{
    title:'Police',
    back:'/',

    list:[



    ]



    }}




    }
    </script>