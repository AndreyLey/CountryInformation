using CountryProxy.DB;
using CountryProxy.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CountryProxy.Services
{
    public class CountryProxyService : ICountryProxyService
    {
        ICountryLoader _countryLoader;
        ICashConnector _cashConnector;
        public CountryProxyService(ICountryLoader countryLoader, ICashConnector cashConnector)
        {
            _countryLoader = countryLoader;
            _cashConnector = cashConnector;
            Console.WriteLine("IndexerService initialized");

        }

        public List<string> GetCountriesByRegion(string regionName)
        {
            List<Country> countriesObj = new List<Country>();
            List<string> countries = _cashConnector.GetCountriesByRegion(regionName);
            if (countries==null || countries.Count==0)
            {
                countriesObj = _countryLoader.GetCountriesByRegion(regionName);
                countries=_cashConnector.AddRegion(regionName, countriesObj);
            }
            return countries;
        }

        public Country GetCountryByName(string countryName)
        {
            Country country = _cashConnector.GetCountryByName(countryName);
            if (country == null)
            {
                //Alternative go to the cash and try to find the region and and search in list of countries.
                List<Country> countries=_countryLoader.GetCountryByName(countryName);
                country = countries.First();
                _cashConnector.AddCountryData(countryName, countries.First());
            }
            return country;
        }
    }
}
