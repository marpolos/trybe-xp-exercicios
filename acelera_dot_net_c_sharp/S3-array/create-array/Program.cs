// See https://aka.ms/new-console-template for more information
namespace Program;

public class Program
{
    public static void Main(){}

    public static void CreateArr()
    {
        int[] myArr;
        myArr = new int[5];

        int[] myArr2 = new int[]{1, 2, 3};

        int[] myArr3 = {4, 5, 6};

        int[] myArray = new int[4] {6, 9, 5, 8};
        Console.WriteLine(myArray[0]);

    }

    public static void muldiDimArrays()
    {
        int[,] multiDimensionalArray1 = new int[2, 3] { { 1, 2, 3 }, { 4, 5, 6 } };
    }

    public static void arrayDentado()
    {
        // Somente instanciamos o array mais externo neste primeiro passo
        // Repare que apenas o primeiro colchetes contém números
        int[][] jaggedArray = new int[4][];

        // Agora precisamos instanciar um novo array para cada posição do array mais externo
        jaggedArray[0] = new int[4] { 6, 6, 6, 6 };
        jaggedArray[1] = new int[3] { 6, 6, 6 };
        jaggedArray[2] = new int[5] { 6, 6, 6, 6, 6 };
        jaggedArray[3] = new int[2] { 6, 6 };
    }
}
