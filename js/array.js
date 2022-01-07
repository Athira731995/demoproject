let arr=[]
console.log(arr,typeof arr);
let arr1=new Array(12,34,45)
console.log(arr1,typeof arr1);
let names=["Rachel","Bob","Ben","Rose"]
console.log(names);
console.table(names)
console.log(names.length);
for(let name of names){
    console.log(name);
}
console.log(names[0]);
console.log("**************************************");
for(let index in names){
    console.log(index);
    console.log(names[index]);
}
names.push("Anna")
console.log(names);
let d=names.pop()
console.log(d);
console.log(names);
names.unshift("Bibin")
console.log(names);
names.shift()
console.log(names);
let names_new=names.concat(["Anju","Aby","Ram","Raj"])
console.log(names_new);
names_new.splice(3,2)
console.log(names_new);
names_new.splice(4,1,"Devin")
console.log(names_new);
names_new[6]="Arun"
names_new[2]="Rini"
console.log(names_new);
console.log(names_new.indexOf("Aby"))
console.log(names_new.includes("Ram"));
names_new.sort()
console.log(names_new);
names_new.reverse()
console.log(names_new);
let myarray=["hi","hello","how","r","u?"]
let s=myarray.join(" ")
console.log(s);


