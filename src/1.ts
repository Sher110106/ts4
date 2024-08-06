interface User{
    name:string,
    age:number
}
function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age;

}
const result=sumOfAge({name:'taro',age:20},{name:'garo',age:23});
console.log(result)