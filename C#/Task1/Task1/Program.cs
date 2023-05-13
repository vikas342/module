using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
     class sql_
    {
        public void create(SqlConnection con )
        {


            SqlCommand cm = new SqlCommand("create table student(id int not null, name varchar(100), email varchar(50), join_date date)", con);



           
            // Executing the SQL query  
            cm.ExecuteNonQuery();
            // Displaying a message  
            Console.WriteLine("Table created Successfully");
        }

        public void add(SqlConnection con)

        {
            SqlCommand cm1 = new SqlCommand("insert into student (id, name, email, join_date) values ('101', 'Ronald Trump', 'ronald@example.com', '1/12/2017')", con);

            // Executing the SQL query  
            cm1.ExecuteNonQuery();
            // Displaying a message  
            Console.WriteLine("Table created Successfully");
           

        }

        public void getdata(SqlConnection con, IList<student> list)
        {
            SqlCommand cm = new SqlCommand("select * from student ",con);
            
SqlDataReader sdr = cm.ExecuteReader();
            while (sdr.Read())
            {
                Console.WriteLine(sdr["id"] + " " + sdr["name"] + " " + sdr["email"]);
                list.Add(
                    new student( (int) sdr["id"],(string) sdr["name"],(string) sdr["email"]));
            }


        }

    }

    class student
    {
        public int id;
        public string name; 
        public string email;
        public string join_date;
       public student(int id, string name, string email)
        {
            this.id = id;
            this.name = name;
            this.email = email;
        
        }
    }

    class Program
    {
        static void Main(string[] args)
        {

            IList<student> list = new List<student>();
            SqlConnection con = new SqlConnection("data source=PC0334\\MSSQL2019;database=Task1; integrated security=SSPI");
            con.Open();
            sql_ sql = new sql_ ();
           // sql.create(con);
            sql.add(con);
            sql.getdata(con,list);
            Console.WriteLine( "fetch ");
            foreach (var item in list)
            {
                Console.WriteLine(item.id+" "+item.name);
            }





        }
    }

}