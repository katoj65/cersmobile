import connect from "./database";

export default class ReportsModel{
// get report titles
async report_titles(){
const supabase=connect();
return await supabase.from('report').select();
}





async create_user_report(data){
const supabase=connect();
return await supabase.from('user_report')
.insert(data)
.select('id,tel,message,location, created_at, report(name)');

}

async create_report_evidence(insert){
const supabase=connect();
return await supabase.from('user_report_evidence').insert(insert);
}


//show report
async show_reports(uid){
const supabase=connect();
return await supabase.from('user_report')
.select('id,tel,message,created_at,location,userID, report(name)')
 .eq('userID',uid) .order('created_at', { ascending: false })

;

}

//all reports
async get_reports(){
const supabase=connect();
return await supabase.from('user_report').select('id,tel,message,created_at,location,userID, report(name)');

}


//alert incidents
async alert_incidents(){
const supabase=connect();
return await supabase.from('alert_incidents').select().order('name',{ascending:true});

}













}