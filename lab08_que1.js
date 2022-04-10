

{


    let student = {
        firstName: '',
        lastName: '',
        grades: [],
        inputNewGrade: function (newGrade) {
            this.grades.push(newGrade);
        },

        computeAverageGrade: function () {
            let sum = 0;

            return this.grades.reduce(function (accum, currItm, indx, arr) {
                return accum + currItm / arr.length;
            }, 0);
        }

    }


    let s1 = Object.create(student);
    s1.firstName = 'Tohfatul';
    s1.lastName = 'Islam';
    s1.inputNewGrade(90);
    s1.inputNewGrade(92);
    s1.inputNewGrade(89);
    s1.inputNewGrade(91);

    let s2 = Object.create(student);
    s2.firstName = 'Chandan';
    s2.lastName = 'Karmakar';
    s2.inputNewGrade(88);
    s2.inputNewGrade(85);
    s2.inputNewGrade(93);
    s2.inputNewGrade(91);

    let students = [s1, s2];


    let res = students.reduce(function (avg, student, indx, arr) {
        return avg + student.computeAverageGrade() / arr.length;
    }, 0);

    console.log('Average_objectLiteral: ' + res);
}