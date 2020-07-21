using CountryProxy.Models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.DB
{
    public class InMemoryCash: ICashConnector
    {
        ConcurrentDictionary<string, List<Country>> _countriesByRegion=new ConcurrentDictionary<string, List<Country>>();
        ConcurrentDictionary<string, Country> _dataByCountry =new ConcurrentDictionary<string, Country>();

        public List<Country> AddRegion(string regionName, List<Country> countries)
        {
            return _countriesByRegion.GetOrAdd(regionName.ToLower(), countries);      
        }

        public Country AddCountryData(string countryName, Country country)
        {
            return _dataByCountry.GetOrAdd(countryName.ToLower(),country);
        }
        public List<Country> GetCountriesByRegion( string regionName)
        {
            List<Country> countries;
            _countriesByRegion.TryGetValue(regionName.ToLower(), out countries);
            return countries;
        }

        public Country GetCountryByName(string countryName)
        {
            Country country;
            _dataByCountry.TryGetValue(countryName.ToLower(), out country);
            return country;
        }

    }
}
