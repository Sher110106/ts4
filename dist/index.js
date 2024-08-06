"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({ name: 'taro', age: 20 }, { name: 'garo', age: 23 });
console.log(result);
