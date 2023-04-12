function gradeEvaluator(grade) {
  if (typeof grade !== 'number') {
    console.log('Please enter only number');
    return;
  }

  switch (true) {
    case grade >= 90:
      return 'A';
    case grade >= 80:
      return 'B';
    case grade >= 71:
      return 'C';
    case grade <= 70:
      return 'F';
  }
}

console.log(gradeEvaluator(98));
console.log(gradeEvaluator(85));
console.log(gradeEvaluator(70));
console.log(gradeEvaluator('95'));
