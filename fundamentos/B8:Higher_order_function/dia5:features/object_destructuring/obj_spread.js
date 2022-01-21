
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };

const {workDays, weekend, days} = daysOfWeek;

const allDaysOfWeek = [...workDays, ...weekend];

console.log(allDaysOfWeek);
console.log(days); // retorna undefined porque não existe.