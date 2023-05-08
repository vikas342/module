
enum Days{
    Sunday=1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

class A3
{

    public void check()
    {
        Console.WriteLine("Enter weekday number:");
        int day= Convert.ToInt32(Console.ReadLine());

        Days myvar = (Days) day;
        Console.WriteLine(myvar);
    }

    public static void Main(String[] args)
    {
        A3 obj = new A3();
        obj.check();

    }
}