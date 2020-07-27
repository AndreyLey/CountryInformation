using CountryProxy.Models;
using Microsoft.AspNetCore.Mvc.Diagnostics;
using ServiceStack;
using ServiceStack.Redis;
using ServiceStack.Redis.Generic;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.DB
{
    public enum RedisDB
    { 
        REGION_DB =0,
        COUNTRY_DB =1
    }


    public class RedisDbConnector : ICashConnector
    {

        ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("localhost:5001");

        private readonly string name = "name";
        private readonly string code = "code";
        private readonly string capital = "capital";
        private readonly string flag = "flag";

        public RedisDbConnector()
        { }
        public Country AddCountryData(string countryName, Country country)
        {
            Country countryResult = new Country();
            List<HashEntry> hashEntries = new List<HashEntry>();
            RedisKey redisKey = new RedisKey(countryName);

            try
            {
                IDatabase db = redis.GetDatabase((int)RedisDB.COUNTRY_DB);
                foreach (var property in country.GetType().GetProperties())
                {
                    hashEntries.Add(new HashEntry(new RedisValue(property.Name), new RedisValue(property.GetValue(country, null).ToString())));
                }

                if (!db.KeyExists(redisKey))
                {
                    db.HashSet(redisKey, hashEntries.ToArray());
                }
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error while  {e}");
            }
            return country;
        }

        public List<string> AddRegion(string regionName, List<Country> countries)
        {
            List<string> countriesList = new List<string>();
            RedisKey redisKey = new RedisKey(regionName);
            List<RedisValue> redisValues = new List<RedisValue>();
            ////Dictionary<string, Country> codeCountry = countries.ToDictionary(c=>c.Code, c=>c);
            //HashEntry[] redisEntry = new HashEntry[countries.Count];
            //int i = 0;
            //countries.ForEach(c =>
            //{
            //    countriesList.Add(c.Name);
            //    redisEntry[i] = new HashEntry(new RedisValue(c.Code), new RedisValue(c.Name));
            //    i++;
            //}
            //);

            //IDatabase db = redis.GetDatabase(0);
            //db.HashSet(new RedisKey(regionName), redisEntry);
            try
            {
                IDatabase db = redis.GetDatabase((int)RedisDB.REGION_DB);
                countries.ForEach(c =>
                {
                    redisValues.Add(c.Name);
                    countriesList.Add(c.Name);
                });

                if (!db.KeyExists(redisKey))
                {
                    db.ListRightPush(redisKey, redisValues.ToArray());
                }
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error while  {e}");
            }
            return countriesList;
        }

        public List<string> GetCountriesByRegion(string regionName)
        {
            List<string> countries = new List<string>();
            try
            {
                //IDatabase db = redis.GetDatabase(0);
                //RedisValue[] results = db.HashValues(regionName);
                //foreach(var country in results)
                //{
                //    if(!country.IsNullOrEmpty)
                //    {
                //        countries.Add(country.ToString());
                //    }
                //}
                IDatabase db = redis.GetDatabase((int)RedisDB.REGION_DB);
                RedisValue[] results = db.ListRange(regionName);
                countries = results.Select(res => res.ToString()).ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error while  {e}");
            }

            return countries;
        }

        public Country GetCountryByName(string countryName)
        {
            Country country = null;
            try
            {
                IDatabase db = redis.GetDatabase((int)RedisDB.COUNTRY_DB);
                RedisValue[] results = db.HashValues(countryName);
                if(results!=null && results.Length>0)
                {
                    country = new Country();
                    country.Code = results[0];
                    country.Name = results[1];
                    country.Capital = results[2];
                    country.Flag = results[3];
                }
                //for(int i=0; i<result.Count;i++)
                //{
                //    if(!result[i].IsNullOrEmpty)
                //    {
                //        countries.Add(country.ToString());
                //    }
                //} 
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error while  {e}");
            }
            return country;
        }
    }
}
