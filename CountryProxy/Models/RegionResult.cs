using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Models
{
    public class RegionResult : BaseResult
    {
        public Region region { get; set; }
        public RegionResult() : base() { }

        public RegionResult(Region region) : base()
        {
            this.region = region;
        }
        
        public RegionResult(List<Country> countries) : base()
        {
            this.region = new Region()
            {
                Countries = countries
            };
        }

    }
}
