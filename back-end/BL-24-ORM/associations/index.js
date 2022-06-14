const express = require('express');
const { Address, Employee, Book, User } = require('./models');
const Sequelize = require('sequelize');
const config = require('./config/config');

const app = express();

app.use(express.json());

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
);

app.get('/', async (_req, res) => {
    try {
        const employees = await Employee.findAll({
          include: { model: Address, as: 'addresses' },
        });
    
        return res.status(200).json(employees);
      } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Ocorreu um erro' });
      };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
      include: [
        { model: Address, as: 'addresses', attributes: { exclude: ['number', 'employeeId'] } },
      ],
    })
    if (employee) return res.status(200).json(employee);
    return res.status(404).json({ message: 'Funcionário não encontrado' });
  } catch(e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/employees2/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id }
    });

    if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      console.log(req.query);

      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
    return res.status(200).json(employee);
  } catch(e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{
        model: Book,
        as: 'books',
        through: { attributes: [] },
      }]
    });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/employees', async (req, res) => {
  // Iniciando a transação.
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Executando a transação.

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
      );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
      );
    
    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    // return res.status(201).json({ message: 'Cadastrado com sucesso' });

    return res.status(201).json({
      id: employee.id, // esse dado será nossa referência para validar a transação
      message: 'Cadastrado com sucesso'
    });
    
  } catch (e) {
    // Se entrar aqui algo falhou e o sequelize reverte tudo que fez na transaction.

    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;