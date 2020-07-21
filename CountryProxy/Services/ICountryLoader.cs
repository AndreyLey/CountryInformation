using CountryProxy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.Services
{
    public interface ICountryLoader
    {
        List<Country> GetCountriesByRegion(string regionName);
        List<Country> GetCountryByName(string countryName);
    }
}
