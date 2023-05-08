
class A2
{
    string name;
    int count=0;
    char[] chars = { 'a', 'e', 'i', 'o', 'u' };

    A2()
    {
        Console.Write("Enter your name: ");
        this.name = Console.ReadLine();
    }

   public void check()
    {

       foreach (var item in this.name)
        {

            if (chars.Contains(item))
            {
                count++;
            }

        }
        Console.WriteLine(count);

    }

    public static void Main(String[] args)
    {

        A2 obj = new A2();
        obj.check();

    }
}