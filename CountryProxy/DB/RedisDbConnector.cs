using CountryProxy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.DB
{
    public class RedisDbConnector : ICashConnector
    {
        public Country AddCountryData(string countryName, Country country)
        {
            throw new NotImplementedException();
        }

        public List<Country> AddRegion(string regionName, List<Country> countries)
        {
            throw new NotImplementedException();
        }

        public List<Country> GetCountriesByRegion(string regionName)
        {
            throw new NotImplementedException();
        }

        public Country GetCountryByName(string countryName)
        {
            throw new NotImplementedException();
        }
    }
}
