public class Program
{
    public static void Main()
    {        
        int someIntNumber = 51;
        long longlNumberCast = someIntNumber;

        Console.WriteLine(longlNumberCast);

        // Aqui vai ocorrer uma converssão implicita
         int intResult = 5/2;

        Console.WriteLine(intResult);

        // Conversão explicita com sintaxe de parênses
        long someLongNumber = 516144564564654;
        int intNumber = (int) someLongNumber;

        Console.WriteLine(intNumber);

        // Conversão com Convert.ToInt32()
        // Esse primeiro lança um erro porque avisa que o número é muito grande pars se tornar um int32.
        /* long someLongNumber2 = 516144564564654;
        int intNumber2 = Convert.ToInt32(someLongNumber2);

        Console.WriteLine(intNumber2); */

        long someLongNumber3 = 42;
        int intNumber3 = Convert.ToInt32(someLongNumber3);

        Console.WriteLine(intNumber3);

        // String para inteiro
        string someString = "42";
        int convertInt = Convert.ToInt32(someString);

        Console.WriteLine(convertInt);

        // Usar o is
        Console.WriteLine(someString is string);

        Console.WriteLine(convertInt is int);

        // Usos para o is
        string someString2 = "20";
        int number = 0;
        Console.WriteLine(number);
        
        if(someString2 is string)
        {
            number = Convert.ToInt32(someString);
            Console.WriteLine(number);
        }
    }            
}