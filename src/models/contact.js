import connect from "./database";
export default class ContactModel{
//get contacts
async get_contacts(){
const supabase=connect();
return await supabase.from('contacts').select();
}















}