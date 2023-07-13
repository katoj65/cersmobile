import connect from "./database";
export default class DepartmentModel{
//all departments
async departments(){
const supabase= connect();
return await supabase.from('department').select();
}

//show department.
async show_department(id){
const supabase= connect();
return await supabase.from('department').select().eq('id',id);
}





}