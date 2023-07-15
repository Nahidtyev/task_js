let a = 5 ;
let b = 2 ;
let c ;
c = a;
a = b;
b = c;
console.log(a);
console.log(b)  

// 3 cü dəyişən istifadə olunmazsa ;
let d = 3;
let e = 4;
[d,e] = [e,d];
console.log(d);
console.log(e);