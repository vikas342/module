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


            SqlConnection con = new SqlConnection("data source=PC0334\\MSSQL2019;database=Products; integrated security=SSPI");
            con.Open();
            
            Products products = new Products();
            //products.addProduct(con);
            // products.removeProduct(con);

             products.buyproduct(con);
            //products.updateproductquantity(con);
        }
       


    }
    class Products
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int Qty { get; set; }

        public void addProduct(SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand("Insert into Product values('Apple',10)",con);
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

        public void buyproduct(SqlConnection con)
        {
            Console.WriteLine("Enter Id:");
            int id = Convert.ToInt32(Console.ReadLine());
            SqlCommand cmd = new SqlCommand($"update Product set Qty=Qty-1 where id={id}",con);
            
            cmd.ExecuteNonQuery();

            SqlCommand cmd2 = new SqlCommand($"select Qty from product where id={id}", con);

            SqlDataReader qt = cmd2.ExecuteReader();
            while (qt.Read())
            {
                int qty = Convert.ToInt32(qt["Qty"]);
                Console.WriteLine(qty);
                Console.WriteLine(qt["Qty"]);
                if (qty < 5)
                {
                    updateproductquantity(con);
                    break;
                }
            }
           


            Console.WriteLine("prodcut bought");


        }
        public void updateproductquantity(SqlConnection con)
        {
            Console.WriteLine("Enter Id:");
            int id = Convert.ToInt32(Console.ReadLine());
            int qt= Convert.ToInt32(Console.ReadLine());
            SqlCommand cmd = new SqlCommand($"update Product set Qty=Qty+{qt} where id={id}", con);

            cmd.ExecuteNonQuery();

            Console.WriteLine("prodcut bought");
        }
    }
}
