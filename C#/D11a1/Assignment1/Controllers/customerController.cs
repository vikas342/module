using Assignment1.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class customerController : ControllerBase
    {
        private readonly ToysContext _context = new ToysContext();
       

        // GET: api/<customerController>
        [HttpGet]
        public ActionResult<List<Customer>> Get()
        {
            return _context.Customers.ToList();

        }

        // GET api/<customerController>/5
        [HttpGet("{id}")]
        public ActionResult<Customer> Get(int id)
        {
            Customer c = _context.Customers.FirstOrDefault(x => x.CustomerId == id);
            return c;
        }

        // POST api/<customerController>
        [HttpPost]
        public ActionResult<Customer> Add([FromBody] Customer customer)
        {
            try
            {
                var cust=_context.Customers.Add(customer);
                _context.SaveChanges();
                if (cust != null)
                {
                    return Ok(customer);
                }
                return BadRequest("Customer not registered");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/<customerController>/5
        [HttpPut("{id}")]
        public ActionResult<Customer> Put(int id, [FromBody] Customer edit)
        {
            Customer found = _context.Customers.FirstOrDefault(x => x.CustomerId == id);
            found.CustomerName = edit.CustomerName;
            found.Address = edit.Address;
            found.Contact = edit.Contact;
            _context.SaveChanges();
            return Ok(found);
        }

        // DELETE api/<customerController>/5
        [HttpDelete("{id}")]
        public ActionResult<Customer> Delete(int id)
        {
            Customer found = _context.Customers.FirstOrDefault(x => x.CustomerId == id);
            _context.Customers.Remove(found);
            _context.SaveChanges();
            return Ok(found);
        }
    }
}
