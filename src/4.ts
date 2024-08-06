type Users={
    readonly name:string,
    readonly age:number
}
const user:Users={
    name:'harkirat',
    age:21
}
user.age=12;
const user22:Readonly<Users>={
    name:'harkirat',
    age:21
}
user22.age=12;

const a=[1,2,3]
a[0]=4;
//we are changing the values of a but not a
const obj={
    name:'john',
    age:23
    ,
    country:'usa'
}
//i can impose read only after which they wont able t change