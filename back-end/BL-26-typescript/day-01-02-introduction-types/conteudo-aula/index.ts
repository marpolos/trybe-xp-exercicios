enum StudentStatus {
    Active = 1,
    Inactive,
    Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

enum daysOfWeek {
    sunday = 1,
    monday,
    tuesday,
    thursday,
    friday,
    saturday
}

console.log(daysOfWeek[2]);

enum colors {
    purple = "roxo",
    yellow = "amarelo",
    red = "vermelho"
}

console.log(colors.purple);

