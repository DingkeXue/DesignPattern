;(function () {
    class Teacher {
        constructor() {
            this.fullAttendance = true;
        }
    }

    class LeaveCommand {
        constructor(teacher) {
            this.teacher = teacher;
        }
        do() {
            this.teacher.fullAttendance = false;
            alert('请假成功');
        }
        undo() {
            this.teacher.fullAttendance = true;
            alert('取消请假成功');
        }
    }

    let lbb = new Teacher();
    let leave = new LeaveCommand(lbb);
    leave.do();
    console.log(lbb);
    leave.undo();
    console.log(lbb);
})();