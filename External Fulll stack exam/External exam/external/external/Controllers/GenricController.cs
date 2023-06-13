using external.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace external.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenricController <T>: Controller where T:class
    {
        private igenric<T> _igenric;


        public GenricController(igenric<T> genric)
        {
            _igenric = genric;
        }

        // GET: api/<GenricController>
        [HttpGet]
        public List<T> Getall()
        {
            return _igenric.getall();
        }

        // GET api/<GenricController>/5
        [HttpGet("{id}")]
        public T Getbyid(int id)
        {
            return _igenric.getbyId(id);
        }

        // POST api/<GenricController>
        [HttpPost]
        public List<T> Post([FromBody] T value)
        {
            return _igenric.Insert(value);
        }


        // DELETE api/<GenricController>/5
        [HttpDelete("{id}")]
        public List<T> Delete(int id)
        {

            return _igenric.delete(id);
        }
    }
}
