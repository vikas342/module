using FInal.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FInal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Genericontroller<T> : Controller where T : class
    {

        private readonly Igeneric<T> _gen;

        public Genericontroller(Igeneric<T> gen)
        {
            _gen = gen;
        }



        // GET: api/<Genericontroller>
        [HttpGet]
        public IEnumerable<T> Getall()
        {
            return _gen.getall();
        }

        // GET api/<Genericontroller>/5
        [HttpGet("{id}")]
        public T Get(int id)
        {
            return _gen.getbyId(id);
        }

        // POST api/<Genericontroller>
        [HttpPost]
        public List<T> Post([FromBody] T value)
        {

            return _gen.insert(value);

        }

        //// PUT api/<Genericontroller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<Genericontroller>/5
        [HttpDelete("{id}")]
        public List<T> Delete(int id)
        {
            return _gen.delete(id);

        }
    }
}
