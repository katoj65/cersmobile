import connect from "./database";
import Authentication from "./authentication";
export default class AppointmentModel{

//make appointment
async create_appointment(data){
const supabase=connect();
return await supabase.from('appointment').insert(data);
}


//appointments
async get_appointments(uid){
const supabase=connect();
return await supabase.from('appointment')
.select('dates,id,tel,reason,status,department(name)')
.eq('userID',uid);

}

//show appointment
async show_appointment(id){
const supabase=connect();
return await supabase.from('appointment').
select('id,dept,dates,tel,reason,status,department(name)')
.eq('id',id);
}


//get all appointments
async get_user_appointments(){
const supabase=connect();
return await supabase.from('appointment').
select('id,dept,dates,tel,reason,status,department(name)');
}








}