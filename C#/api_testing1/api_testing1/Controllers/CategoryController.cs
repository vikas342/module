using api_testing1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_testing1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        public static List<Category> List_Of_Cat = new List<Category>()
        {
            new Category {id=1,name="vikas" },
            new Category {id=2,name="vinit" },
            new Category {id=3,name="preet" },
            new Category {id=4,name="arjun" },

        };

        [HttpGet]
        public IEnumerable<Category> get() { return List_Of_Cat; }

        [HttpPost]
        public void post([FromBody] Category cat) {
        List_Of_Cat.Add(cat);
        }



        [HttpPut ("{id}")]
        public void put(int id,[FromBody] Category cat)
        {

            List_Of_Cat[id] = cat;
        }



        [HttpDelete ("{id}")] 
        public void delete(int id)
        {
            List_Of_Cat.RemoveAt(id);
        }


        
    }
}
