 function studentGrade(marks) {
  let grade 
    if (marks > 79 && marks <= 100){
        grade = 'A';
    } else if (marks >= 60 && marks <= 79){
        grade = 'B';
    } else if (marks >= 49 && marks <= 59){
        grade = 'C';
    } else if (marks >= 40 && marks <= 49){
        grade = 'D';
    } else if (marks > 0 && marks < 40 ){
        grade = 'E';
    } else if (marks > 100 && marks < 0){
        grade = "Please input correct marks";
    }

  return grade
}