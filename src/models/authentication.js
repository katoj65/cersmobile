import connect from "./database";

export default class Authentication{


async login_link(email){
const supabase=connect();
return await supabase.auth.signInWithOtp({
    email: email,
    options: {
    //   emailRedirectTo: 'http://127.0.0.1:5173/dashboard',
    },
  })
}



//password generation
generate_password(){
const date=new Date;
return 'cers-password'+date.getMonth()+date.getDay()+date.getFullYear();
}


//signup
async signup(user_details){
const supabase=connect();
return await supabase.auth.signUp(user_details);

}



//get user
async get_user(){
const supabase=connect();
return await supabase.auth.getUser();
}

//create new user
async create_user(user_details){
const supabase=connect();
return await supabase.auth.signUp(user_details);
}






//sign in
async signIn(user_details){
const supabase=connect();
return await supabase.auth.signInWithPassword(user_details);
}


//get session
async get_session(){
const supabase=connect();
return await supabase.auth.getSession();

}



//send email with node
async send_email(from,to){


}

//session modal
async session_model(){

}






async create_new_user(user_details){
  const supabase=connect();
  return await supabase.auth.signUp(user_details);
  }



  //new sign in
async login(credentials){
const supabase=connect();
const response=supabase.auth.signInWithPassword(credentials);
return await response;

  }

  // logout
async logout(){
const supabase=connect();
return await supabase.auth.signOut();
}


  //session destroy

async session_destroy(){
const supabase=connect();
// return await
}


//get user email
get_user_email(response){
if(response.data!=null){
return response.data.session.user.email;
}else{
return null;
}

}


//get email

















}