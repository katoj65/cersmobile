import connect from "./database";
export default class LanguageModel{
//get language
async get_languages(){
const supabase=connect();
return await supabase.from('languages').select().order('name',{descending:false});
}

//














}