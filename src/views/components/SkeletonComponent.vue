<template>
    <div>
        <ion-skeleton-text :animated="true" style="width: 90%;"></ion-skeleton-text>
        <ion-skeleton-text :animated="true" style="width: 60%;"></ion-skeleton-text>
        <ion-skeleton-text :animated="true" style="width: 30%;"></ion-skeleton-text>
    </div>
</template>
<script>
import {
IonSkeletonText,
} from '@ionic/vue';
export default {
component:{
IonSkeletonText
}

}
</script>

<style scoped>
  ion-skeleton-text {
    --border-radius: 9999px;
    margin-bottom:5px;

  }
</style>