<template>
<AppLayout :title="title" :back="back">

some information goes here

</AppLayout>
</template>
<script>
import AppLayout from './Layouts/AppLayout.vue';
export default {
components:{ AppLayout,

},
data(){return{
title:'Event Register',
back:'/',



}}




}
</script>