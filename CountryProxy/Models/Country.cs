using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Models
{
    public class Country
    {
        [JsonProperty(PropertyName = "alpha3Code")]
        public string Code { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        //[JsonProperty(PropertyName = "phone")]
        //public string Phone { get; set; }

        [JsonProperty(PropertyName = "capital")]
        public string Capital { get; set; }

        //[JsonProperty(PropertyName = "currency")]
        //public string Currency { get; set; }
        //public List<string > Languages { get; set; }

        [JsonProperty(PropertyName = "flag")]
        public string Flag { get; set; }
    }
}
