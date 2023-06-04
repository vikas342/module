using Microsoft.AspNetCore.Identity;

namespace Q1.Models
{
    public class AppUser:IdentityUser
    {
        public string Name { get; set; }
    }
}
