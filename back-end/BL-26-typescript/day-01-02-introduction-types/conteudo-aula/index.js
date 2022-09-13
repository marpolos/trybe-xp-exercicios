var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var ok = StatusCodes.OK;
var indiceOk = StatusCodes["OK"];
var stringBadRequest = StatusCodes[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["sunday"] = 1] = "sunday";
    daysOfWeek[daysOfWeek["monday"] = 2] = "monday";
    daysOfWeek[daysOfWeek["tuesday"] = 3] = "tuesday";
    daysOfWeek[daysOfWeek["thursday"] = 4] = "thursday";
    daysOfWeek[daysOfWeek["friday"] = 5] = "friday";
    daysOfWeek[daysOfWeek["saturday"] = 6] = "saturday";
})(daysOfWeek || (daysOfWeek = {}));
console.log(daysOfWeek[2]);
var colors;
(function (colors) {
    colors["purple"] = "roxo";
    colors["yellow"] = "amarelo";
    colors["red"] = "vermelho";
})(colors || (colors = {}));
console.log(colors.purple);
