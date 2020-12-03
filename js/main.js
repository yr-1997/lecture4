const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const getPairsStudent = function (students) {
  const pairs = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
  return pairs;
};
const pairStudents = getPairsStudent(students);
console.log(pairStudents);
const pairProject = (pairs, themes) => {
  return pairs.map((student, index) => [student.join(" i "), themes[index]]);
};
const studentsTheme = pairProject(pairStudents, themes);
console.log(studentsTheme);

const studentsMarks = (students, marks) => {
  return students.map((student, index) => [student, marks[index]]);
};
const mark = studentsMarks(students, marks);
console.log(mark);
const randomMarks = (pairStudents, themes, marks) => {
  const randomMarksIndex = () => +Math.floor(Math.random() * marks.length);
  const randomThemesIndex = () => +Math.floor(Math.random() * themes.length);
  return pairStudents.map((studentsPair) => [
    studentsPair.join(" і "),
    themes[randomThemesIndex()],
    marks[randomMarksIndex()],
  ]);
};
const ThemesMarks = randomMarks(pairStudents, themes, marks);
console.log(ThemesMarks);
