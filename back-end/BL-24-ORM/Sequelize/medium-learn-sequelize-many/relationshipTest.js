const models = require('./models');
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;

Company.create({
    name: 'My super Company'
}).then((newCompany) => {
    console.log(newCompany.get());
}).catch((err) => {
    console.log('Error while company creation', err);
});

/* ************************** */
User.bulkCreate([
    {email: 'john-doe@domain.com', firstName: 'John',  lastName: 'DOE', companyId: 1},
    {email: 'log_w@domain.com', firstName: 'Logan',  lastName: 'WOLVERINE', companyId: 1},
    {email: 'john-connor@domain.com', firstName: 'John',  lastName: 'CONNOR', companyId: 1}
  ])
  .then((newUsers) => {
    console.log(newUsers)
  })
  .catch((err) => {
    console.log("Error while users creation : ", err)
  })

/* **************************** */
// 1:1
// Get the company linked to a given User
User.findOne({
  where: {email: 'john-connor@domain.com'}, include: 'company'
})
.then((findedUser) => {
  // Get the User with Company datas included
  console.log(findedUser)
  // Get the company record only
  // console.log(findedUser.company)
})
.catch((err) => {
  console.log("Error while find user : ", err)
})

// 1:N
// Get the employees for a given company
Company.findByPk(1, {include: ['employees']})
.then((company) => {
  // Get the Company with Users (employes) datas included
  console.log(company)
  // Get the Users (employes) records only
  // console.log(company.get().employes)
})
.catch((err) => {
  console.log("Error while find company : ", err)
})