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
        long someLongNumber = 516144564564654;
        int intNumber = Convert.ToInt32(someLongNumber);

        Console.WriteLine(intNumber);
    }            
}