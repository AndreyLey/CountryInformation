using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Models
{
    public class BaseResult
    {
        public bool Success { get; set; }
        public List<string> ErrorMessages { get; set; }

        public BaseResult()
        {
            Success = true;
            ErrorMessages = new List<string>();
        }
    }
}
