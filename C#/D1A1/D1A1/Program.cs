class A1
{
    int range,sum=0;


    A1()   
    {
        Console.Write("Enter range:");
        this.range = Convert.ToInt32( Console.ReadLine());
       // Console.WriteLine(range);
    }
    public void evenNumbers()
    {
        for (int i = 1; i <= range; i++)
        {
            if (i % 2 == 0)
            {
                sum += i;

            }

        }
                Console.WriteLine("Sum of evern numbers is: "+sum);
    }
    
    static void Main(String[] args)
    {
        A1 obj = new A1();
        obj.evenNumbers();
    }
}
