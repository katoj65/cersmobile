import connect from "./database";
export default class CallCenterModel{
//call center cntacts
async contacts(){
const supabase=connect();
return await supabase.from('call_center_contact').select();
}














}