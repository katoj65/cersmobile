<template>
<AppLayout :title="title" :back="back">


</AppLayout>
</template>
<script>
import AppLayout from './Layouts/AppLayout.vue';
export default {
components: { AppLayout },
data(){return{
title:'Messages',
back:'/',



}}




}
</script>