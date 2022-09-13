export default interface Employee{
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
  /* generateRegistration() {
      const reg = Math.floor(Math.random() * 999 + 1);
      if (reg < 10) return `00${reg}`;
      if (reg < 100) return `0${reg}`;
      return `${reg}`; 
    } */
}