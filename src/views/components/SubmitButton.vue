<template>
<div>
<ion-button type="submit" expand="block" v-if="isLoading==false" fill="clear">
{{ name }}
</ion-button>
<ion-button  expand="block" v-else :disabled="true" fill="clear">
<ion-spinner name="crescent"></ion-spinner>
</ion-button>
</div>
</template>
<script>
import { IonButton ,IonSpinner } from '@ionic/vue';
export default {
components:{
IonButton,
IonSpinner
},
props:{
name:{},
isLoading:{}
}

}
</script>

<style scoped>
ion-button{
--background: #B7950B;
--color:white;
font-weight:bold;
}
ion-spinner{
color:white;
}

</style>