interface User{
    name:string,
    age:number,
    password:string,
    email:string


}
type updatedProps=Pick<User,'name' |'age'|'email'>
function UpdateUser(UpdatedProps:updatedProps){
    //only change the name,age,password
}
//this is used in mongoose for like updation
//pick allows for both interface and type
function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age;

}
