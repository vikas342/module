using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Db_first.Models;

namespace Db_first.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssistantsController : ControllerBase
    {
        private readonly Db_FirstContext _context;

        public AssistantsController(Db_FirstContext context)
        {
            _context = context;
        }




        //added with query

        //
        //
        //
        //


        [HttpGet]
        [Route("demo")]
       public IEnumerable<Assistant> getQuery()
        {
            var db = from id in _context.Assistants where id.AssistantId < 10 select id;
            return db;
        }



        //
        //
        //


        // GET: api/Assistants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assistant>>> GetAssistants()
        {
          if (_context.Assistants == null)
          {
              return NotFound();
          }
            return await _context.Assistants.ToListAsync();
        }

        // GET: api/Assistants/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Assistant>> GetAssistant(int id)
        {
          if (_context.Assistants == null)
          {
              return NotFound();
          }
            var assistant = await _context.Assistants.FindAsync(id);

            if (assistant == null)
            {
                return NotFound();
            }

            return assistant;
        }

        // PUT: api/Assistants/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssistant(int id, Assistant assistant)
        {
            if (id != assistant.AssistantId)
            {
                return BadRequest();
            }

            _context.Entry(assistant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssistantExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Assistants
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Assistant>> PostAssistant(Assistant assistant)
        {
          if (_context.Assistants == null)
          {
              return Problem("Entity set 'Db_FirstContext.Assistants'  is null.");
          }
            _context.Assistants.Add(assistant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssistant", new { id = assistant.AssistantId }, assistant);
        }

        // DELETE: api/Assistants/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssistant(int id)
        {
            if (_context.Assistants == null)
            {
                return NotFound();
            }
            var assistant = await _context.Assistants.FindAsync(id);
            if (assistant == null)
            {
                return NotFound();
            }

            _context.Assistants.Remove(assistant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AssistantExists(int id)
        {
            return (_context.Assistants?.Any(e => e.AssistantId == id)).GetValueOrDefault();
        }
    }
}
