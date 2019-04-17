;(function () {
    function Teacher(lessonPlan) {
        this.fullAttendance = true;
        this.lessionPlan = lessonPlan;
        this.absentPlan = [[],[],[],[],[]];
        this.addtionalPlan = [[],[],[],[],[]];
    }

    function ReassignTeacher(leaver, replacier, day) {
        this.leaver = leaver;
        this.replacier = replacier;
        this.day = day;
        console.log(this.day);
    }

    ReassignTeacher.prototype.do = function () {
        this.replacier.addtionalPlan[this.day] = this.leaver.absentPlan[this.day] = this.leaver.lessionPlan[this.day];
    };
    ReassignTeacher.prototype.undo = function () {
      this.leaver.absentPlan[this.day] = [];
      this.replacier.addtionalPlan[this.day] = [];
    };

    function LeaveCommand(teacher, replacier, day) {
        this.teacher = teacher;
        this.replacier = replacier;
        this.day = day;
        this.reassign = null;
    }

    LeaveCommand.prototype.do = function () {
        this.teacher.fullAttendance = false;
        // 安排课程
        this.reassign = new ReassignTeacher(this.teacher, this.replacier, this.day);
        this.reassign.do();
    };

    LeaveCommand.prototype.undo = function () {
        this.teacher.fullAttendance = true;
        //取消安排课程
        this.reassign.undo();
    };

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