﻿using FInal.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace FInal.Repository
{
    public class Hashrepo:Ihash
    {
        public string Hash(string pwd, string salt)
        {

            var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(salt));

            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(pwd));

            return Convert.ToBase64String(hash);

        }

        public bool verify(string pwd, string hashedPwd, string salt)
        {

            var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(salt));
            var inputhash = hmac.ComputeHash(Encoding.UTF8.GetBytes(pwd));
            string inputpass = Convert.ToBase64String(inputhash);

            return string.Equals(inputpass, hashedPwd, StringComparison.OrdinalIgnoreCase);






        }
    }
}
