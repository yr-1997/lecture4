const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const getPairsStudent = function(students){
    const pairs = [
    [students[0] , students[2]],
    [students[1] , students[3]],
    [students[4] , students[5]]];
    return pairs;
};
const pairStudents = getPairsStudent(students);
console.log(pairStudents);
const pairProject = function(pairs, themes){
	const themePairs = [];
	for (let i = 0; i < pairs.length && i < themes.length; i++){
		themePairs.push([pairs[i].join(' і '),themes[i]]);
	}
	return themePairs;
};
const studentsTheme = pairProject(pairStudents,themes);
console.log(studentsTheme);

const studentsMarks = function(students , marks){
   const studentMark = [];
   for( let i = 0 ; i < students.length &&  i < marks.length; i++){
     studentMark.push([students[i] , marks[i] ]);
   }
   return studentMark;
};
const mark = studentsMarks(students,marks);
console.log(mark);
const randomMarks = function(pairs , themes ){
    const randomMark = pairProject(pairs , themes);
    const maxMark = 5;
    const minMark = 1;
    for(let i = 0 ; i < randomMark.length ; i++){
    randomMark[i].push((Math.random() * (maxMark - minMark)).toFixed(0));
    }
    return randomMark;
};
const ThemesMarks = randomMarks(pairStudents , themes);
console.log(ThemesMarks);