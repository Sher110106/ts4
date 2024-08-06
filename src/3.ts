interface User{
    name:string,
    age:number,
    password:string,
    email:string


}
type UpdatedProps=Pick<User,'name' |'age'|'email'>
//but it should expect only one thing as the user may want to just update one thing
type UpdatePropsOptional=Partial<UpdatedProps>
function UpdateUser(UpdatedProps:UpdatePropsOptional){
    //only change the name,age,password
}
//this is used in mongoose for like updation
//pick allows for both interface and type
function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age;

}
