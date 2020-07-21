using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Models
{
    public class Region
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public List<Country> Countries { get; set; }
    }
}
