using Magicbrick.Interfaces;
using Magicbrick.Models;

namespace Magicbrick.Repository
{
    public class PropertyRepo : GenricRepo<Property>,Iproperty
    {
        public PropertyRepo(MagicBricksDbContext context) : base(context)
        {
        }
    }
}
