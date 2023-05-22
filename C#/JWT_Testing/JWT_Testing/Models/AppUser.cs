using Microsoft.AspNetCore.Identity;

namespace JWT_Testing.Models
{
    public class AppUser: IdentityUser
    {
        public string Name { get; set; }
    }
}
