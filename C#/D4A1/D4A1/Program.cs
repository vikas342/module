using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace D4A1
{

    public class Mobilke
    {

        public string BikeNumber { get; set; }
        public string CName { get; set; }
        public int Charge { get; set; }

        public int Days { get; set; }
        public string PhoneNumber { get; set; }


        public void input(string cnm, string bnm, int days, string pnm)
        {
            this.BikeNumber = bnm;
            this.CName = cnm;
            this.Days = days;
            this.PhoneNumber = pnm;

        }

        public void compute()
        {
            if (this.Days <= 5)
            {
                this.Charge = this.Days * 500;
            }
            else if (this.Days <= 10)
            {
                this.Charge = 2500 + ((this.Days - 5) * 400);

            }
            else
            {
                this.Charge = 4500 + ((this.Days - 10) * 200);


            }
            //Console.WriteLine(this.Charge);
        }

        class Program
        {
            static void Main(string[] args)
            {
                IList<Mobilke> list = new List<Mobilke>();
                Mobilke mb = new Mobilke();
              
                bool status=true;
                Console.WriteLine();
                Console.WriteLine();

                Console.WriteLine("1. Add\t 2. view\t 3. find\t 4. delete\t 5. Exit");
                Console.WriteLine();
                Console.WriteLine();

                do
                {
                    Console.WriteLine();

                    Console.Write("Enter input for operation: ");
                int ipt=Convert.ToInt32(Console.ReadLine());


                    switch (ipt)
                    {
                        case 1:
                            Console.WriteLine();
                            Console.WriteLine("Add Data");
                            Console.WriteLine();

                            Console.Write("Enter Cname: ");
                            string cnm = Convert.ToString(Console.ReadLine());
                            Console.Write("Enter Bnum: ");

                            string bnm = Convert.ToString(Console.ReadLine());
                            Console.Write("Enter Days: ");
                            int days = Convert.ToInt32(Console.ReadLine());
                            Console.Write("Enter phone: ");

                            string phone = Convert.ToString(Console.ReadLine());
                            mb.input(cnm, bnm, days, phone);
                            mb.compute();
                            list.Add(mb);
                            Console.WriteLine();
                            Console.WriteLine(" Data Added");

                            break;

                        case 2:
                            Console.WriteLine();
                            Console.WriteLine();
                            Console.WriteLine("shwing Data");
                            Console.WriteLine();

                            Console.WriteLine("CNmae  \tBikenum\tdays\tcharge");
                            Console.WriteLine("_____________________________________________");

                            foreach (var x in list) { Console.WriteLine(x.CName+"\t"+ x.BikeNumber + "\t"+ x.Days + "\t"+ x.Charge ); }
                            break;

                        case 3:
                             Console.WriteLine();
                            Console.WriteLine();
                            Console.WriteLine("Find Data");

                            Console.WriteLine();
                            Console.Write("Enter bike number: ");

                            String bnum = Convert.ToString(Console.ReadLine());

                           var found= list.First(x => x.BikeNumber == bnum);



                            Console.WriteLine("CNmae  \tBikenum\tdays\tcharge");
                            Console.WriteLine("_____________________________________________");
                            Console.WriteLine(found.CName +"\t" +found.BikeNumber+"\t"+found.Days +"\t"+found.Charge);
                            break ;


                        case 4:
                            Console.WriteLine();
                            Console.WriteLine();

                            Console.Write("Remove record");

                            Console.WriteLine();
                            Console.Write("Enter bike number: ");

                            String bikenum = Convert.ToString(Console.ReadLine());

                            var fnd = list.First(x => x.BikeNumber == bikenum);

                           list.Remove(fnd);
                            Console.Write("Record removed");


                            break;
                        case 5:
                            Console.WriteLine();
                            Console.WriteLine("Exit");
                            status = false;
                            break;

                        default:
                            Console.WriteLine();
                            Console.WriteLine();

                            Console.WriteLine("Invalid input");
                            break;
                    }



                }
                while (status);
            }
        }
    }
}
