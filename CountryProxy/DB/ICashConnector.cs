using CountryProxy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.DB
{
    public interface ICashConnector
    {
        List<string> GetCountriesByRegion(string regionName);
        Country GetCountryByName(string countryName);
        List<string> AddRegion(string regionName, List<Country> countries);
        Country AddCountryData(string countryName, Country country);
    }
}
