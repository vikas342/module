using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace peactice_Linq
{
    internal class Program
    {
        static void Main(string[] args)


        {
            IList<Employee> Emp = new List<Employee>()
            {
                new Employee() {Id = 1,FirstName="John",LastName="Abraham",Department="Banking",Salary=1000000,Joining_Date= new DateTime(2013,1,1)},
                new Employee() {Id = 2,FirstName="Michael",LastName="Clarke",Department="Insurance",Salary=800000,Joining_Date= new DateTime(2013,1,1)},

                new Employee() {Id = 3,FirstName="Roy",LastName="Thomas",Department="Banking",Salary=700000,Joining_Date= new DateTime(2013,2,1)},
                new Employee() {Id = 4,FirstName="Tom",LastName="Jose",Department="Insurance",Salary=600000,Joining_Date= new DateTime(2013,1,1)},

                new Employee() {Id = 5,FirstName="Jerry",LastName="Pinto",Department="Insurance",Salary=650000,Joining_Date= new DateTime(2013,2,1)},

                new Employee() {Id = 6,FirstName="Philip",LastName="Mathew",Department="Services",Salary=750000,Joining_Date= new DateTime(2013,1,1)},
                new Employee() {Id = 7,FirstName="TestName1",LastName="123",Department="Services",Salary=650000,Joining_Date= new DateTime(2013,1,1)},

                new Employee() {Id = 8,FirstName="TestName2",LastName="Lname%",Department="Insurance",Salary=600000,Joining_Date= new DateTime(2013,1,1)},



      

            };

            IList <Incentives> Incen= new List<Incentives> (){ 
                new Incentives() { Employee_Ref_Id=1,Incentive_Amount=5000,Incentive_Date= new DateTime(2013, 2, 1) } ,
                new Incentives() { Employee_Ref_Id=2,Incentive_Amount=3000,Incentive_Date= new DateTime(2013, 2, 1) },
                new Incentives() { Employee_Ref_Id=3,Incentive_Amount=4000,Incentive_Date= new DateTime(2013, 2, 1) } ,
                new Incentives() { Employee_Ref_Id=1,Incentive_Amount=4500,Incentive_Date= new DateTime(2013, 1, 1) },
                new Incentives() { Employee_Ref_Id=2,Incentive_Amount=35000,Incentive_Date= new DateTime(2013, 1, 1) },

                
            };



            //q2

            var q1= from x in Emp select x;

            Console.WriteLine("Q1");
            foreach (var x in q1)
            {

                 Console.WriteLine(x.Id +" "+ x.FirstName + " " + x.LastName + " "+x.Department+ " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);
            }



            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();

            //q3,q4



            var q2 =from x in Emp select new {fullname= x.FirstName +" "+x.LastName};
            Console.WriteLine("Q2");
            foreach (var x in q2)
            {

                Console.WriteLine(x.fullname);
            }

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();


            //q5,6


            var q5 = from x in Emp select new {name= x.FirstName.ToUpper()  ,name2=x.FirstName.ToLower() };
            Console.WriteLine("Q5");
            foreach (var x in q5)
            {

                Console.WriteLine(x.name +"\t" + x.name2);
              

            }


            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();

            //q7

            var q6 =  (from x in Emp  select x.Department).Distinct() ;

            Console.WriteLine("Q5");
            foreach (var x in q6)
            {

                Console.WriteLine(x);


            }




            //q8
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();


            var q7 = from x in Emp select new { name = x.FirstName.Substring(0,3) };

            Console.WriteLine("Q7");
            Console.WriteLine();

            foreach (var x in q7)
            {

                Console.WriteLine(x.name);


            }



            Console.WriteLine();

            Console.WriteLine();



            //q9

            var q8 = from x in Emp where x.FirstName=="John" select new { pos = x.FirstName.IndexOf("o") };

            Console.WriteLine("Q8");
            Console.WriteLine();

            foreach (var x in q8)
            {

                Console.WriteLine(x.pos);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q10,11

            var q9 = from x in Emp  select new { x1 = x.FirstName.TrimStart() ,x2= x.FirstName.TrimEnd() };

            Console.WriteLine("Q9");
            Console.WriteLine();

            foreach (var x in q9)
            {

                Console.WriteLine(x.x1 +"\t"+x.x2);


            }



            Console.WriteLine();

            Console.WriteLine();



            //q12

            var q10 = from x in Emp select new { len = x.FirstName.Length };

            Console.WriteLine("Q10");
            Console.WriteLine();

            foreach (var x in q10)
            {

                Console.WriteLine(x.len);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q13

            var q11 = from x in Emp select new { text = x.FirstName.Replace("o","$") };

            Console.WriteLine("Q11");
            Console.WriteLine();

            foreach (var x in q11)
            {

                Console.WriteLine(x.text);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q14

            var q14 = from x in Emp select new { text = x.FirstName+"_"+x.LastName };

            Console.WriteLine("q14");
            Console.WriteLine();

            foreach (var x in q14)
            {

                Console.WriteLine(x.text);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q15

            var q15 = from x in Emp select new { text = x.FirstName + "_" + x.Joining_Date.Year+"_" + x.Joining_Date.Month+"_" + x.Joining_Date.Day };

            Console.WriteLine("q15");
            Console.WriteLine();

            foreach (var x in q15)
            {

                Console.WriteLine(x.text);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q16

            var q16 = from x in Emp orderby x.FirstName select x;

            Console.WriteLine("q16");
            Console.WriteLine();

            foreach (var x in q16)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q17

            var q17 = from x in Emp orderby x.FirstName descending select x;

            Console.WriteLine("q17");
            Console.WriteLine();

            foreach (var x in q17)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q18



            var q18 = from x in Emp orderby x.FirstName orderby x.Salary descending select x;

            Console.WriteLine("q18");
            Console.WriteLine();

            foreach (var x in q18)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();


            //q19

            var q19 = from x in Emp  where x.FirstName=="John" select x;

            Console.WriteLine("q19");
            Console.WriteLine();

            foreach (var x in q19)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q20

            var q20 = from x in Emp where x.FirstName == "John" || x.FirstName=="Roy" select x;

            Console.WriteLine("q20");
            Console.WriteLine();

            foreach (var x in q20)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();


            //


            //q21

            var q21 = from x in Emp where x.FirstName != "John" && x.FirstName != "Roy" select x;

            Console.WriteLine("q21");
            Console.WriteLine();

            foreach (var x in q21)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();



            // q22

            var q22 = from x in Emp where x.FirstName.StartsWith("J")  select x;

            Console.WriteLine("q22");
            Console.WriteLine();

            foreach (var x in q22)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();




            // q23

            var q23 = from x in Emp where x.FirstName.Contains("o") select x;

            Console.WriteLine("q23");
            Console.WriteLine();

            foreach (var x in q23)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();


            //q24

            var q24 = from x in Emp where x.FirstName.EndsWith("n") select x;

            Console.WriteLine("q24");
            Console.WriteLine();

            foreach (var x in q24)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();




          



            //q25

            var q25 = from x in Emp where x.FirstName.EndsWith("n") && x.FirstName.Length ==4 select x;

            Console.WriteLine("q25");
            Console.WriteLine();

            foreach (var x in q25)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q26

            var q26 = from x in Emp where x.FirstName.StartsWith("J") && x.FirstName.Length == 4 select x;

            Console.WriteLine("q26");
            Console.WriteLine();

            foreach (var x in q26)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q27

            var q27 = from x in Emp where x.Salary>600000 select x;

            Console.WriteLine("q27");
            Console.WriteLine();

            foreach (var x in q27)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q28

            var q28 = from x in Emp where x.Salary < 800000 select x;

            Console.WriteLine("q28");
            Console.WriteLine();

            foreach (var x in q28)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q29

            var q29 = from x in Emp where x.Salary > 500000 && x.Salary < 800000 select x;

            Console.WriteLine("q29");
            Console.WriteLine();

            foreach (var x in q29)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q30

            var q30 = from x in Emp where x.FirstName=="John" || x.FirstName== "Michael" select x;

            Console.WriteLine("q30");
            Console.WriteLine();

            foreach (var x in q30)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q31

            var q31 = from x in Emp where x.Joining_Date.Year==2013 select x;

            Console.WriteLine("q31");
            Console.WriteLine();

            foreach (var x in q31)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q32

            var q32 = from x in Emp where x.Joining_Date.Month == 1 select x;

            Console.WriteLine("q32");
            Console.WriteLine();

            foreach (var x in q32)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();





                
            //q33

            var q33 = from x in Emp where x.Joining_Date < new DateTime(2013,01,31) select x;

            Console.WriteLine("q33");
            Console.WriteLine();

            foreach (var x in q33)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();


            Console.WriteLine();





            //q34

            var q34 = from x in Emp where x.Joining_Date > new DateTime(2013, 01, 31) select x;

            Console.WriteLine("q34");
            Console.WriteLine();

            foreach (var x in q34)
            {

                Console.WriteLine(x.Id + " " + x.FirstName + " " + x.LastName + " " + x.Department + " " + x.Salary + " " + x.Salary + " " + x.Joining_Date);


            }



            Console.WriteLine();

            Console.WriteLine();







            //q35,36

            var q35 = from x in Emp select new  { name=x.FirstName , jd=x.Joining_Date} ;

            Console.WriteLine("q35");
            Console.WriteLine();

            foreach (var x in q35)
            {

                Console.WriteLine(x.name+" \t"+x.jd);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q37


            var q37 = from e in Emp join i in Incen on e.Id equals i.Employee_Ref_Id select new { diff = i.Incentive_Date.Subtract(e.Joining_Date) };

            Console.WriteLine("q37");
            Console.WriteLine();

            foreach (var x in q37)
            {

                Console.WriteLine(x.diff);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q39


            var q39 = from e in Emp select e ;

            Console.WriteLine("q39");
            Console.WriteLine();

            foreach (var x in q39)
            {

                Console.WriteLine(x.FirstName+" \t"+x.LastName);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q40


            var q40 = from e in Emp where e.LastName.Contains("%") select new { newchar=e.LastName.Replace('%',' ')};

            Console.WriteLine("q40");
            Console.WriteLine();

            foreach (var x in q40)
            {

                Console.WriteLine(x.newchar);


            }



            Console.WriteLine();

            Console.WriteLine();



            //q41


            var q41 = from e in Emp group  e by e.Department into newdep
                      select new {dep=newdep.Key , saltotal=newdep.Sum(e=>e.Salary)};

            Console.WriteLine("q41");
            Console.WriteLine();

            foreach (var x in q41)
            {

                Console.WriteLine(x.dep + " "  +x.saltotal);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q42


            var q42 = from e in Emp
                      group e by e.Department into newdep
                      orderby newdep.Sum(e => e.Salary) descending
                      select new { dep = newdep.Key, saltotal = newdep.Sum(e => e.Salary)
                      
                      };

            Console.WriteLine("q42");
            Console.WriteLine();

            foreach (var x in q42)
            {

                Console.WriteLine(x.dep + " " + x.saltotal);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q43,44


            var q43 = from e in Emp
                      group e by e.Department into newdep
                      orderby newdep.Sum(e => e.Salary) descending
                      select new
                      {
                          dep = newdep.Key,
                          saltotal = newdep.Sum(e => e.Salary),
                          noemp=newdep.Count(),
                          avg_sal = newdep.Average(e => e.Salary)


                      };

            Console.WriteLine("q43");
            Console.WriteLine();

            foreach (var x in q43)
            {

                Console.WriteLine(x.dep + " " + x.avg_sal);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q45,46


            var q45 = from e in Emp
                      group e by e.Department into newdep
                      orderby newdep.Min(e => e.Salary) ascending
                      select new
                      {
                          dep = newdep.Key,
                          saltotal = newdep.Sum(e => e.Salary),
                          noemp = newdep.Count(),
                          avg_sal = newdep.Average(e => e.Salary),
                          min_Sal = newdep.Min(e => e.Salary),
                          max_Sal = newdep.Max(e => e.Salary)





                      };

            Console.WriteLine("q45");
            Console.WriteLine();

            foreach (var x in q45)
            {

                Console.WriteLine(x.dep + " " + x.min_Sal+ " "+ x.max_Sal);


            }



            Console.WriteLine();

            Console.WriteLine();



            //q47


            var q47 = from e in Emp
                      group e by e.Joining_Date;
                         





               

            Console.WriteLine("q47");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q47)
            {
                Console.WriteLine();

                Console.WriteLine("Joined on: "+x.Key);

                Console.WriteLine();


                foreach (var y in x)

                {
          
                    Console.WriteLine(y.FirstName);

                }



            }



            Console.WriteLine();

            Console.WriteLine();






            //q48


            var q48 = from e in Emp
                      group e by e.Department into newdep

                      where newdep.Sum(e => e.Salary) >800000
                      orderby newdep.Sum(e => e.Salary) descending

                      select new
                      {
                          dep = newdep.Key,
                          saltotal = newdep.Sum(e => e.Salary),
                         





                      };
            
            Console.WriteLine("q48");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q48)
            {

                Console.WriteLine(x.dep +" "+x.saltotal);


            }



            Console.WriteLine();

            Console.WriteLine();







            //q49


            var q49 = from e in Emp
                      join i in Incen
                      on e.Id equals i.Employee_Ref_Id

                      select new { name = e.FirstName, amt = i.Incentive_Amount };
            Console.WriteLine("q49");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q49)
            {

                Console.WriteLine(x.name + " " + x.amt);


            }



            Console.WriteLine();

            Console.WriteLine();






            //q50


            var q50 = from e in Emp
                      join i in Incen
                      on e.Id equals i.Employee_Ref_Id
                      where i.Incentive_Amount>3000
                      select new { name = e.FirstName, amt = i.Incentive_Amount };
            Console.WriteLine("q50");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q50)
            {

                Console.WriteLine(x.name + " " + x.amt);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q51


            var q51 = from e in Emp
                      join i in Incen
                      on e.Id equals i.Employee_Ref_Id
                      where i.Incentive_Amount > 3000
                      select new { name = e.FirstName, amt = i.Incentive_Amount };
            Console.WriteLine("q51");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q51)
            {

                Console.WriteLine(x.name + " " + x.amt);


            }



            Console.WriteLine();

            Console.WriteLine();



            //q52


            var q52 = from e in Emp
                      join i in Incen
                      on e.Id equals i.Employee_Ref_Id into loj
                      from subpet in loj.DefaultIfEmpty()
                      select new { name=e.FirstName, amt = subpet?.Incentive_Amount ?? 0 };
            Console.WriteLine("q52");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q52)
            {

                Console.WriteLine(x.name + " " + x.amt);


            }



            Console.WriteLine();

            Console.WriteLine();












            //q53


            var q53 = from i in Incen
                      join e in  Emp
                      on i.Employee_Ref_Id equals e.Id 
                      
                      select new { amt=i.Incentive_Amount, name=e.FirstName};
            Console.WriteLine("q53");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q53)
            {

                Console.WriteLine(x.name + " " + x.amt);


            }



            Console.WriteLine();

            Console.WriteLine();




            //q54,55


            var q54 =
               ( from e in Emp
                      select  e.Salary).Take(5);
            Console.WriteLine("q54");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q54)
            {

                Console.WriteLine(x);


            }



            Console.WriteLine();

            Console.WriteLine();





            //q56


            var q56 =
               (from e in Emp
                select e.Salary).Take(5);
            Console.WriteLine("q56");
            Console.WriteLine();
            Console.WriteLine();


            foreach (var x in q56)
            {

                Console.WriteLine(x);


            }



            Console.WriteLine();

            Console.WriteLine();


        }
    }
    class Employee
    {
        public int Id { get; set; } 

        public string FirstName { get; set; }


        public string LastName { get; set; }


        public string Department { get; set; }
        public int Salary { get; set; }
        public DateTime Joining_Date { get; set; }

    }

    class Incentives
    {
        public int Employee_Ref_Id { get; set; }
        public int Incentive_Amount { get; set; }
        public DateTime Incentive_Date { get; set; }
    }
    
}

