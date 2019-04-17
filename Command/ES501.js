;(function () {
    function Teacher() {
        this.fullAttendance = true;
    }

    function LeaveCommand(teacher) {
        this.teacher = teacher;
    }

    LeaveCommand.prototype.do = function () {
        this.teacher.fullAttendance = false;
        alert('请假成功，全勤奖为0');
    };
    LeaveCommand.prototype.undo = function () {
        this.teacher.fullAttendance = true;
        alert('取消请假成功，有全勤奖');
    };

    let lbb = new Teacher();
    let leave = new LeaveCommand(lbb);
    leave.do();
    console.log(lbb);
    leave.undo();
    console.log(lbb);
})();