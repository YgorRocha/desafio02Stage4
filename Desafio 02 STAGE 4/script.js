let students = [
    {
        name: 'Adam',
        firstGrade: 9.5,
        secondGrade: 7.6
    },
    
    {
        name: 'Jack',
        firstGrade: 6.5,
        secondGrade: 6.6
    },

    {
        name: 'Peter',
        firstGrade: 10,
        secondGrade: 9.6
    },

    {
        name: 'Janet',
        firstGrade: 5,
        secondGrade: 6.7
    },

    {
        name: 'Sophi',
        firstGrade: 8,
        secondGrade: 6.9
    },
]


function calculateGrades(students){
    
    for(let student of students){
        let average = (student.firstGrade + student.secondGrade) / 2
    
    switch(true){
        case average > 7:
            alert(` ${student.name}'s student average is: ${average}\n \n Congratulation! You've passed your test`);

        break
        
        default:
            alert(` ${student.name}'s student average is: ${average}\n \n Too bad! You failed, try again`);
            
    }
   
  }

}

calculateGrades(students)



