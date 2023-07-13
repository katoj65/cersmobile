import connect from "./database";
export default class UserReportModel{

//insert report information
async create_user_report(item){
const supabase=connect();
await supabase.from('user_report').insert(item);
}















}