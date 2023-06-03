using Magicbrick.Interfaces;
using Magicbrick.Models;
using Microsoft.EntityFrameworkCore;

namespace Magicbrick.Repository
{
    public class GenricRepo<T> : IGenric<T> where T : class
    {

        private readonly MagicBricksDbContext _context;
        private DbSet<T> _dbSet;

        public GenricRepo(MagicBricksDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }


        public async Task Delete(T item)
        {
            _dbSet.Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
           return await _dbSet.ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task Insert(T item)
        {
            await _dbSet.AddAsync(item);
            await _context.SaveChangesAsync();
        }

        public async Task Update(T item, int id)
        {
            var user = await _dbSet.FindAsync(id);
            user = item;
            await _context.SaveChangesAsync();
        }
    }
}
