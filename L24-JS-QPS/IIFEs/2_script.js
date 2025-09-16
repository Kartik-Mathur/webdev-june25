let studentData = (function solve(name, marksData){
    let studentName = name;
    let marks;
    function updateMarks(m){
        marks = m;
    }

    updateMarks(marksData);

    return{
        getMarks(){
            return marks
        },
        getName(){
            return studentName;
        }
    }
})('Kartik', 80);

// console.log(studentData)
console.log(studentData.getMarks())
console.log(studentData.getName())
