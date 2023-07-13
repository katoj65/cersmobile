import connect from "./database";
export default class EventsModel{
async events(){
const supabase=connect();
return await supabase.from('events').select();
}




//show event
async show_event(id){
const supabase=connect();
return await supabase.from('events').select().eq('id',id);
}

//event registration

async user_register_event(insert){
const supabase=connect();
return await supabase.from('event_registration').insert(insert);
}


//get all events
async events_registerd_for(email){
const supabase=connect();
return await supabase.from('event_registration')
.select('status,events(name,date,id)')
.eq('userID',email);

}


//all events
async get_user_registration(){
const supabase=connect();
return await supabase.from('event_registration')
.select('status,events(name,date,id)');
}

//get events
async get_events(){
const supabase=connect();
return await supabase.from('events').select();
}






}