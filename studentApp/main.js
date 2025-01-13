
/**
 * Represents a student.
 *
 * This constructor function takes five parameters: a first name, a last name, a
 * birth year, an academy, and an array of grades. It returns a Student object
 * with the given properties and methods.
 *
 * @param {string} firstName - The student's first name.
 * @param {string} lastName - The student's last name.
 * @param {number} birthYear - The student's birth year.
 * @param {string} academy - The student's academy.
 * @param {number[]} grades - The student's grades.
 *
 * @example
 * let student1 = new Student('Pero', 'Perovski', 1990, 'SEDC', [5, 4, 3, 2, 1]);
 * student1.getInfo();
 */
function Student (firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    /**
     * Alerts the current age of the student.
     *
     * This function calculates the student's age by subtracting
     * their birth year from the current year and displays it
     * in an alert dialog.
     */
    this.getAge = function () {
        alert(new Date().getFullYear() - this.birthYear);
    }
/**
 * Alerts the student's information.
 *
 * This function displays an alert dialog containing the student's
 * first name, last name, and academy.
 */


    /**
     * Alerts the student's information.
     *
     * This function displays an alert dialog containing the student's
     * first name, last name, and academy.
     */
    this.getInfo = function () {
        alert(`This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`);
    }
    /**
     * Alerts the student's grades average.
     *
     * This function calculates the student's average grade by summing all grades
     * and dividing by the number of grades, then displays it in an alert dialog.
     */

    this.getGradesAverage = function () {
        alert(this.grades.reduce((a, b) => a + b) / this.grades.length);
    }
  }
  
  let student1 = new Student(prompt('Enter Full Name'), prompt('Enter Last Name'), prompt('Enter Birth Year'), prompt('Enter Academy Name'), [prompt('Enter Grades'), prompt('Enter Grades'), prompt('Enter Grades'), prompt('Enter Grades'), prompt('Enter Grades')]);