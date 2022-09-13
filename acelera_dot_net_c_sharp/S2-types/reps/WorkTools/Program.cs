// See https://aka.ms/new-console-template for more information
namespace WorkTools;

public static class  NumbersTools
{
    public static void Main() {}
    public static int CountOf(int[] numbers, int value)
    {     
        var count = 0;

        foreach(var number in numbers)   
        {
            if(number == value) count++;
        }

        return count;
    }

    public static int IndexOf(int[] numbers, int value)
    {     
        var position = -1;

        for(int i=0; i < numbers.Count(); i++)
        {        
            if(numbers[i] == value)
            {
                position = i;
                break;
            }        
        }
        
        return position;
    }

    public static int CountEvenNumbers(int[] numbers)
    {     
        var count = 0;

        foreach(var number in numbers)   
        {          
            if(number%2 != 0) continue;

            count ++;
        }

        return count;
    }
}

public class SayMeHello
{
    public static void Hello(string name)
    {
        Console.WriteLine($"Hey, Hello {name}");
    }

    public static void HelloHarder(string name)
    {
        Console.WriteLine($"Hey, Hello {name}");
        Console.WriteLine($"Can i call u {name}zito?");
        Console.WriteLine($"No?");
        Console.WriteLine($"Ok?");
    }

    public static void HelloSayYourName()
    {
        Console.Write("Hey, say me your name:");
        var userName = Console.ReadLine();
        Console.WriteLine($"Ok, Hello {userName}");
    }
}
