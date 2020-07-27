using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CountryProxy.Models;
using CountryProxy.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CountryProxy.Controllers
{
    [ApiController]
    [Route("")]
    public class CountryProxyController : ControllerBase
    {
        private ICountryProxyService _countryProxyService;

        private readonly ILogger<CountryProxyController> _logger;

        public CountryProxyController(ILogger<CountryProxyController> logger, ICountryProxyService countryProxyService)
        {
            _logger = logger;
            _countryProxyService = countryProxyService;
        }

        [HttpGet("regions")]
        public IEnumerable<string> GetRegion()
        {
            return new List<string>() { "Amiricas","Europe","Asia","Oceania","Africa"};
        }

        [HttpGet("regions/{region}/countries")]
        public IActionResult GetCountries(string region)
        {
            //CountryResult result = new CountryResult(_countryProxyService.GetCountriesByRegion(region));
            return new JsonResult(_countryProxyService.GetCountriesByRegion(region));
        }

        [HttpGet("regions/{region}/countries/{country}")]
        public IActionResult GetCountryByName(string region, string country)
        {
            return new JsonResult(_countryProxyService.GetCountryByName(country));
        }

    }
}
