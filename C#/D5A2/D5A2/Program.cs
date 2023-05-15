namespace D5A2
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Enter n1: ");

            int a =Convert.ToInt32( Console.ReadLine() );
            Console.WriteLine("Enter n2: ");

            int b =Convert.ToInt32( Console.ReadLine() );


            var sum = (int a, int b) => a + b;
            int c=sum(a,b);
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine(c);

        }
    }
}