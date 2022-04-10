{

    function Student(fName, lName, grades = []) {
        this.firstName = fName;
        this.lastName = lName;
        this.grades = grades;
    }

    Student.prototype.inputNewGrade = function (newGrade) {
        this.grades.push(newGrade);
    }

    Student.prototype.computeAverageGrade = function () {

        return this.grades.reduce(function (accum, curr, indx, arr) {
            return accum + curr / arr.length;

        }, 0);
    }

    let s1 = new Student('Tohfatul', 'Islam');

    s1.inputNewGrade(90);
    s1.inputNewGrade(92);
    s1.inputNewGrade(89);
    s1.inputNewGrade(91);

    let s2 = new Student('Chandan', 'Karmakar');

    s2.inputNewGrade(88);
    s2.inputNewGrade(85);
    s2.inputNewGrade(93);
    s2.inputNewGrade(91);

    let students = [s1, s2];


    let res = students.reduce(function (avg, student, indx, arr) {
        return avg + student.computeAverageGrade() / arr.length;
    }, 0);

    console.log('Average_constructorFucntion: ' + res);


}