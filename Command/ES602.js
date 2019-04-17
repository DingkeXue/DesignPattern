;(function () {
    class Teacher {
        constructor(lessionPlan) {
            this.fullAttendance = true;
            this.lessionPlan = lessionPlan;
            this.absentPlan = [[],[],[],[],[]];
            this.addtionalPlan = [[],[],[],[],[]];
        }
    }

    class ReassignTeacher { // 安排替课老师
        constructor(leaver, replacer, day) {
            this.leaver = leaver;
            this.replacer = replacer;
            this.day = day;
        }
        do() {
            this.replacer.addtionalPlan[this.day] = this.leaver.absentPlan[this.day] = this.leaver.lessionPlan[this.day];
        }
        undo() {
            this.replacer.addtionalPlan[this.day] = [];
            this.leaver.absentPlan[this.day] = [];
        }
    }

    class LeaveCommand {  // 请假
        constructor(leaver, replacer, day) {
            this.leaver = leaver;
            this.replacer = replacer;
            this.day = day;
            this.reassign = null;
        }
        do() {
            this.leaver.fullAttendance = false;
            this.reassign = new ReassignTeacher(this.leaver, this.replacer, this.day);
            this.reassign.do();
        }
        undo() {
            this.leaver.fullAttendance = true;
            this.reassign.undo();
        }
    }

    let lesson = [
        [],
        ['8:00'],
        ['14:00'],
        [],
        []
    ];
    let lesson2 = [
        [],
        [],
        [],
        [],
        []
    ];
    let lbb = new Teacher(lesson);
    let zff = new Teacher(lesson2);
    let leave = new LeaveCommand(lbb, zff, 1);
    leave.do();
    console.log(lbb);
    leave.undo();
    console.log(lbb);
    console.log(zff);
})();