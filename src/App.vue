<template>
<ion-app>
<div v-if="isLoading==false">
<IonPage v-if="status==null">
<ion-content>
<banner-main/>
<div style="border-top:solid 3px black"></div>
<div style="border-top:solid 3px yellow"></div>
<div style="border-top:solid 3px red"></div>


<h4 style="text-align:center;">Login</h4>
<form style="padding:20px;" @submit.prevent="submit">
  {{ error_message }}
<ion-input type="text" v-model="form.email" placeholder="Enter your email address"/>
<ion-button type="submit" expand="block" style="margin-top:20px;">Login</ion-button>
</form>
</ion-content>
</IonPage>
<ion-router-outlet v-else/>
</div>
<div v-else style="text-align:center;padding:50px;">
<spinner-component/>
</div>
</ion-app>
</template>
<script>
import BannerMain from './views/components/BannerMain.vue';
import Authentication from './models/authentication.js';
import { Preferences } from '@capacitor/preferences';
import { IonApp,
IonRouterOutlet,
IonContent,
IonPage,IonInput,
IonButton




} from '@ionic/vue';
import SpinnerComponent from './views/components/SpinnerComponent.vue';
export default {
components:{IonApp,
IonRouterOutlet,IonContent, IonPage,
IonInput,
BannerMain,
IonButton,
SpinnerComponent

},
data(){return{
status:null,
error_message:null,
form:{
email:'',
},
isLoading:false,



}},


methods:{


session(){
const auth=new Authentication;
this.isLoading=true;
// auth.logout();
auth.get_session().then(response=>{
this.isLoading=false;
//persistance
console.log(response.data.session);
if(response.data.session==null){
this.status=null;
}else{

const email=auth.get_user_email(response);
this.status=response.data.session;
Preferences.set({
key: 'user_email',
value: email,
});

}

}).catch(error=>{
console.log(error);
;});




},


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
// console.log(response);

if(error!=null){
//has error
const status=error.status;
console.log(response);


if(status==429){
const em=error.message;
console.log(em);
this.error_message=em;
//
if(em!=null){
this.error_message=em;
this.isLoading=false;

}

}else if(status==422){
this.error_message=error.message;
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
this.status=res.data;
}
}).catch(error=>{console.log(error)});
},







},

mounted(){
this.session();
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