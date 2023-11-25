class Student {
    constructor(name, roll_no, class_, section, marks_of_5_subjects) {
        this.name = name;
        this.roll_no = roll_no;
        this.class_ = class_;
        this.section = section;
        this.marks_of_5_subjects = marks_of_5_subjects;
    }

    printTop3Subjects() {
        const sortedMarks = Object.entries(this.marks_of_5_subjects).sort((a, b) => b[1] - a[1]);
        const top3Subjects = sortedMarks.slice(0, 3).map(([subject, _]) => subject);
        console.log(Top 3 subjects based on marks: ${top3Subjects.join(', ')});
    }

    printReportCard() {
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((a, b) => a + b, 0);
        const percentage = ((totalMarks / 500) * 100).toFixed(1);

        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(| Name     - ${this.name} |);
        console.log(| Roll no. - ${this.roll_no}      |);
        console.log(| Class    - ${this.class_}       |);
        console.log(| Section  - ${this.section}       |);
        console.log(| Science  - ${this.marks_of_5_subjects['science']}      |);
        console.log(| S.Sc     - ${this.marks_of_5_subjects['social_science']}      |);
        console.log(| Maths    - ${this.marks_of_5_subjects['maths']}      |);
        console.log(| English  - ${this.marks_of_5_subjects['english']}      |);
        console.log(| Hindi    - ${this.marks_of_5_subjects['hindi']}      |);
        console.log(| Percentage - ${percentage} %  |);
        console.log("+--------------------+");
    }
}

const student = new Student(
    "Huzaifa",
    16,
    "X",
    "A",
    {
        science: 73,
        maths: 75,
        social_science: 79,
        english: 80,
        hindi: 67
    }
);

student.printTop3Subjects();
student.printReportCard();