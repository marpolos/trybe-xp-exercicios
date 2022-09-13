class Program
{
    public int[] expensesCost;

    static void Main(string[] args)
    {
        // int[] expensesCost;
        int[,] expensesCost;
        Console.WriteLine("Entre com o número de despesas: ");
        int numberOfExpenses = getNumberOfExpenses();
        // expensesCost = new int[numberOfExpenses];
        expensesCost = new int[numberOfExpenses, 2];

        for (int i=0; i < numberOfExpenses; i++)
        {
        // expensesCost[i] = getExpenseCostFromUser();
            for (int j=0; j < 2; j++)
            {
            // Os trechos de código aqui dentro serão executados 2 vezes
            expensesCost[i, j] = getExpenseCostFromUser();
            }
        }

        int totalExpenses = 0;

        for (int i = 0; i < numberOfExpenses; i++)
        {
        totalExpenses += expensesCost[i];
        }

        Console.WriteLine("O total das despesas é: " + totalExpenses);
    }
}
