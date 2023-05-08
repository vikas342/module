namespace D1A5
{
   
     class A5
    {
        int age;

       public A5() {
            Console.Write("Enter your age:");
            this.age = Convert.ToInt32(Console.ReadLine()); 
        }

        public void check()
        {
            string result = age > 18 ? "Elligible" : "Not Elligible";
            Console.WriteLine("You're "+result+" for vote");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            A5 obj = new A5();
            obj.check();


        }
    }
}