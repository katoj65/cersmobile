<template>
<div>
<ion-modal style="background:rgba(255, 255, 255, 0.9);position:fixed;bottom:0px;height:100%;width:100%;">

{{ form }}
<form @submit.prevent="submit">
    <ion-card style="position:fixed;bottom:0;margin:0;border-radius:0;height:67%;width:100%;">
        <div style="border-top:solid 3px black"></div>
<div style="border-top:solid 3px yellow"></div>
<div style="border-top:solid 3px red"></div>


        <ion-card-header>
          <ion-card-title style="text-align:center;">CERS</ion-card-title>
          <ion-card-subtitle style="text-align:center;">Sign In</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content style="">
        <div>

{{ error_message }}

        </div>
         <ion-input style="border:solid thin silver;" placeholder="Enter your email address" v-model="form.email"></ion-input>


         <ion-button type="submit" expand="block" style="margin-top:20px;">Login</ion-button>
        </ion-card-content>
      </ion-card>

</form>


</ion-modal>
</div>
</template>

<script>
 import { IonModal,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ,
    IonInput
} from '@ionic/vue';
import Authentication from '../../models/authentication';
export default {
component:{
IonModal,
IonCard,
IonCardContent,
IonCardHeader,
IonCardSubtitle,
IonCardTitle,
IonInput

},


data(){return{
isLoading:false,
error_message:null,

form:{
email:'katoj65@gmail.com',
 },

}},

methods:{

submit(){
if(this.form.email!=''){
this.isLoading=true;
localStorage.setItem("email",this.form.email);
const pass='Cers_09/u/2252_000000';
//get session
const model=new Authentication;

const credentials={
email:this.form.email,
password:pass,
options:{
data:{
role:'user',
firstname:'',
lastname:'',
gender:'',
nin:'',
}

}
};
model.create_new_user(credentials).then(response=>{
this.login_helper(response,credentials);
}).catch(error=>{
console.log(error);
})

}else{
this.error_message='Fill in the your email address';
}



},


//login helper.
login_helper(response,credentials){
const login_response={
status:null,
message:null
};
const data=response.data;
const error=response.error;
console.log(response);

if(error!=null){
//has error
const status=error.status;
console.log(response);
if(status==429){
const em=error.message;
console.log(em);
//
if(em!=null){
this.error_message=em;
this.isLoading=false;
}

}
}else{
//has no error
//get user details
const user=data.user;
// console.log(credentials);
//login attempt
this.login_attempt(response,credentials);
}
},







//login attempt functionality
login_attempt(response,credentails){
const model=new Authentication;
model.signIn({
email:credentails.email,
password:credentails.password
}).then(res=>{

const error=res.error;
// console.log(error);
if(error!=null){

this.error_message=error.message;
this.isLoading=false;

}else{
// console.log(res);
this.isLoading=false;
this.$router.push('/dashboard');
}
}).catch(error=>{console.log(error)});
},





}







}
</script>
<style scoped>
ion-input {
    --background: #F8F9F9;


    --placeholder-opacity: 0.8;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;

  }

ion-button{
--background:black;
}

</style>