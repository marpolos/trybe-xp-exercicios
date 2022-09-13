internal class Program
{
    private static void Main()
    {
        Console.WriteLine("Hello, World!");

        CardinalPoints directions = CardinalPoints.Norte;

        Console.WriteLine($"Ponto cardeal {directions}");

        Schedule now = new Schedule(10,30,0,"AM");
        Console.WriteLine($"Horario: {now.getSchedule()}");

        Console.WriteLine("****************");

        //ENTRADA DE DADOS
        Console.WriteLine("Boas vindas ao programa 'Calcula Lâmpada'!");
        Console.WriteLine("Informe o nome do còmodo: ");
        string convenient = Console.ReadLine();

        Console.WriteLine("Informe em metros a largura deste cômodo: ");
        decimal width = decimal.Parse(Console.ReadLine());

        Console.WriteLine("Informe em metros o comprimento deste cômodo: ");
        decimal length = decimal.Parse(Console.ReadLine());

        Console.WriteLine("Informe a potência em watts da lâmpada que será utilizada: ");
        int power = int.Parse(Console.ReadLine());

        //PROCESSAMENTO
        decimal squareMeter = width * length;
        decimal quotientX = power / 18M;
        decimal totalLightBulbs = squareMeter / quotientX;

        //SAIDA DE DADOS
        Console.WriteLine("Para iluminar o cõmodo: " + convenient + " com " + squareMeter.ToString("N2") + " metros quadrados " + "será necessario a instalação de " + totalLightBulbs.ToString("N2") + " lâmpada(s)");
    }
}

enum CardinalPoints
{
    Norte,
    Sul,
    Leste,
    Oeste
}

struct Schedule
{
    private int hour, minute, second;
    private string shift;

    //Construtor da struct
    public Schedule(int hour, int minute, int second, string shif) 
    { 
        this.hour = hour % 24;
        this.minute = minute % 60;
        this.second = second % 60;
        this.shift = shif;
    }

    // metodo da struct
    public string getSchedule() 
    { 
        return hour.ToString()+ ":" + minute.ToString() + ":" + second.ToString()+" "+shift;
    }
}