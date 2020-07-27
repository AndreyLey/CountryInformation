using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Models
{
    public class CountryResult : BaseResult
    {
        public Region region { get; set; }
        public CountryResult() : base() { }

        public CountryResult(Region region) : base()
        {
            this.region = region;
        }
        
        public CountryResult(List<string> countries) : base()
        {
            this.region = new Region()
            {
                Countries = countries
            };
        }

    }
}
