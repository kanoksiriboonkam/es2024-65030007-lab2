db = new Mongo().getDB("mydatabase");

db.students.insertMany([
    { studentCode: "K007", firstName: "kanoksiri", lastName: "worasing", age: 19, email: "khim@gmail.com" },
    { studentCode: "K007", firstName: "sirikanok", lastName: "singwora", age: 20, email: "Nkhim@gmail.com"},
    { studentCode: "K007", firstName: "nokri", lastName: "three", age: 21, email: "Qkhim@gmail.com" },
    { studentCode: "K007", firstName: "Khimj", lastName: "FFF", age: 22, email: "Lkhim@gmail.com" },
    { studentCode: "K007", firstName: "KKhim", lastName: "wang", age: 23, email: "Pkhim@gmail.com" }
]);
