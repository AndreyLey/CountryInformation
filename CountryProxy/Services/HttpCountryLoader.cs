using CountryProxy.DB;
using CountryProxy.Models;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CountryProxy.Services
{
    public class HttpCountryLoader : ICountryLoader
    {

        private string _urlRegion;
        private string _urlCountry;

        public HttpCountryLoader(IDbSetting setting)
        {
            //https://restcountries.eu/rest/v2/name
            _urlCountry = setting.SourceForCountry;
            //https://restcountries.eu/rest/v2/region
            _urlRegion = setting.SourceForRegion;
            Console.WriteLine("HttpDocumentLoader Initialized");
        }

        public List<Country> GetCountriesByRegion(string regionName)
        {
            List<Country> countries = new List<Country>();
            try
            {
                RestClient client = new RestClient(_urlRegion);
                RestRequest request = new RestRequest(regionName, Method.GET)
                {
                    RequestFormat = DataFormat.Json
                };

                request.AddParameter("application/json; charset=utf-8", ParameterType.RequestBody);

                IRestResponse response = client.Execute(request);

                if (response != null && response.StatusCode == HttpStatusCode.OK)
                {
                    var settings = new JsonSerializerSettings
                    {
                        TypeNameHandling = TypeNameHandling.All,
                    };

                    countries = JsonConvert.DeserializeObject<List<Country>>(
                         response.Content,
                         settings
                     );
                }
                else
                {
                    Console.WriteLine("Responce is NULLLLLLLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! {0}", response.StatusCode);
                }
                return countries;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Failed to load data from {_urlRegion+"/"+regionName}, error: {0}", e.ToString());
                return countries;
            }
        }

        public List<Country> GetCountryByName(string countryName)
        {
            List<Country> countries = new List<Country>();
            try
            {
                RestClient client = new RestClient(_urlCountry);
                RestRequest request = new RestRequest(countryName, Method.GET)
                {
                    RequestFormat = DataFormat.Json
                };

                request.AddParameter("application/json; charset=utf-8", ParameterType.RequestBody);

                IRestResponse response = client.Execute(request);

                if (response != null && response.StatusCode == HttpStatusCode.OK)
                {
                    var settings = new JsonSerializerSettings
                    {
                        TypeNameHandling = TypeNameHandling.All,
                    };

                    countries = JsonConvert.DeserializeObject<List<Country>>(
                         response.Content,
                         settings
                     );
                }
                else
                {
                    Console.WriteLine("Responce is NULLLLLLLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! {0}", response.StatusCode);
                }
                return countries;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Failed to load data from {_urlRegion + "/" + countryName}, error: {0}", e.ToString());
                return countries;
            }
        }

    }
}
