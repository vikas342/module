using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task__1
{
    internal class Program
    {
        static void Main(string[] args)
        {


            SqlConnection con = new SqlConnection("data source=DESKTOP-1CPKOO6\\SQLEXPRESS;database=Products; integrated security=SSPI");
            //SqlConnection con = new SqlConnection("data source=PC0334\\MSSQL2019;database=Products; integrated security=SSPI");
            
            con.Open();
            
            Products products = new Products();

            //products.addProduct(con);
            // products.removeProduct(con);

            //  products.buyproduct(con);
            //products.updateproductquantity(con);
            // products.displaying(con);

            bool status = true;


            do
            {

                Console.WriteLine();
                Console.WriteLine();


                Console.WriteLine("1. View all products"+ "\t" +"2. Buying product" + "\t" + "3. Adding new product" + "\t" + "4. Update product quantity" + "\t" + "5. Exit");
                Console.WriteLine();
                Console.Write("Enter which operation you want to do:  ");
                int userinput = Convert.ToInt32(Console.ReadLine());

                switch (userinput)
                {

                    case 1:
                        Console.WriteLine();
                        products.displaying(con);

                        Console.WriteLine();

                       

                        break;
                    case 2:
                        Console.WriteLine();
                        products.displaying(con);

                        Console.WriteLine();

                        Console.WriteLine("Buying product");
                        Console.WriteLine();
                        products.buyproduct(con);

                        break;



                    case 3:
                        Console.WriteLine();
                        products.displaying(con);

                        Console.WriteLine();

                        Console.WriteLine("Adding new product");
                        Console.WriteLine();
                        products.addProduct(con);

                        break;




                    case 4:

                        Console.WriteLine();
                        products.displaying(con);

                        Console.WriteLine();

                        Console.WriteLine("Update product quantity");
                        Console.WriteLine();
                        products.updateproductquantity(con);

                        break;



                    case 5:
                        status = false;
                        Console.WriteLine("Exit");
                        break;

                    default:
                        Console.WriteLine("Enter valid Input");
                        break;
                }
            }
            while (status);
        }
       


    }
    class Products
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int Qty { get; set; }

        public void addProduct(SqlConnection con)
        {

            Console.WriteLine("Enter Productname: ");
            string product =Convert.ToString(Console.ReadLine());

            Console.WriteLine("Enter Qty: ");

            int qty = Convert.ToInt32(Console.ReadLine());

            SqlCommand cmd = new SqlCommand($"Insert into Product values('{product}',{qty})",con);
            cmd.ExecuteNonQuery();
            Console.WriteLine("done");
           
        }

        public void removeProduct(SqlConnection con)
        {
            Console.WriteLine("Enter Id:");
            int id = Convert.ToInt32(Console.ReadLine());
            SqlCommand cmd = new SqlCommand($"delete Product where Id={id};",con);
            cmd.ExecuteNonQuery();
            Console.WriteLine("delete done");

            
        }
        public void displaying(SqlConnection con)
        {
            SqlCommand cmd = new SqlCommand("select * from Product", con);

            SqlDataReader reader = cmd.ExecuteReader();


            Console.WriteLine();
            Console.WriteLine();


            Console.WriteLine("Availible Products");
            Console.WriteLine();

            Console.WriteLine("Id" + "\t" + "ProductName" + "\t" +"Qty");
            Console.WriteLine("________________________________________");


            while (reader.Read())
            {
                Console.WriteLine(reader["Id"] + "\t" + reader["ProductName"] + "\t\t" + reader["Qty"]);
            }
            reader.Close();
        }

        public void buyproduct(SqlConnection con)
        {

            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("Enter Id:");
            int id = Convert.ToInt32(Console.ReadLine());
            SqlCommand cmd = new SqlCommand($"update Product set Qty=Qty-1 where id={id}",con);
            
            cmd.ExecuteNonQuery();

            SqlCommand cmd2 = new SqlCommand($"select Qty from product where id={id}", con);

            SqlDataReader qt = cmd2.ExecuteReader();
            while (qt.Read())
            {
                int qty = Convert.ToInt32(qt["Qty"]);
                //Console.WriteLine(qty);
              //  Console.WriteLine(qt["Qty"]);
                if (qty < 5)
                {
                    updateproductquantity(con,id);
                    break;
                }
            }
            qt.Close();
           


            Console.WriteLine("prodcut bought");


        }
        public void updateproductquantity(SqlConnection con)
        {
            Console.Write("Enter Id:");
            int id = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Qty:");

            int qt = Convert.ToInt32(Console.ReadLine());
            SqlCommand cmd = new SqlCommand($"update Product set Qty=Qty+{qt} where id={id}", con);

            cmd.ExecuteNonQuery();

            Console.WriteLine("Quantity Updated");

        }

        public void updateproductquantity(SqlConnection con,int id)
        {
          
            int qt = Convert.ToInt32(Console.ReadLine());
            SqlCommand cmd = new SqlCommand($"update Product set Qty=Qty+{qt} where id={id}", con);

            cmd.ExecuteNonQuery();

            Console.WriteLine("Quantity Updated");
        }
    }
}
