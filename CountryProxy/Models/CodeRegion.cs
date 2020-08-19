using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Models
{
    public class CodeRegion
    {
        public string Code { get; set; }
        public string Name { get; set; }

        public CodeRegion() { }
        public CodeRegion (string code, string name)
        {
            this.Code = code;
            this.Name = name;
        }
    }
}
