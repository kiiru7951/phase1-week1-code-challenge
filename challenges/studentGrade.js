 function studentGrade(marks) {
  let grade 
    if (marks > 79 && marks <= 100){
        grade = 'A'; //Get A if btn 79 and 100
    } else if (marks > 60 && marks <= 79){
        grade = 'B'; // Gets B if between 60 and 79
    } else if (marks > 50 && marks <= 59){
        grade = 'C'; // Gets c if between 50 and 59
    } else if (marks > 40 && marks <= 49){
        grade = 'D'; // Gets D if between 40 and 49
    } else if (marks > 0 && marks < 40 ){
        grade = 'E'; // Gets E if below 40
    } else if (marks > 100 && marks < 0){
        grade = "Please input correct marks"; // Makes sure input marks are btn 0 and 100
    }

  return grade
}