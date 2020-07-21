using CountryProxy.Models;
using System.Collections.Generic;

namespace CountryProxy.Services
{
    public interface ICountryProxyService
    {
        List<Country> GetCountriesByRegion(string regionName);
        Country GetCountryByName(string countryName);

    }
}