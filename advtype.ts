export{};
let result: string | number ;
result = "Done";
console.log(result);
result = 80;
console.log(result);

enum status {
    Ative,
    Probation,
    Retired
}
let studentStatus: status = status.Ative
console.log(studentStatus);
studentStatus = status.Probation
console.log(studentStatus)



type ID = string | number;
type user = {
    id: ID
    name: string
}
let student: user = {id:"K446",name:"Win"};
console.log(student);

interface Student {
    id: string,
    name: string,
    status: status,
    province: string
}
let student1:Student[] = [
    {id:"684245012", name:"Patiphon", status:status.Ative, province:"Nakon Pathom"},
    {id:"684245016", name:"Panuphong", status:status.Probation, province:"Kanchanaburi"},
    {id:"684245022", name:"Salawin", status:status.Ative, province:"chiangmai"}
];
for (const p of student1){
    console.log(`รหัสนักศึกษา ${p.id}
ชื่อ: ${p.name}
สถานะ: ${p.status}
จังหวัด: ${p.province}
`)
}
