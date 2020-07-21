using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.DB
{
    public class DbSetting : IDbSetting
    {
        public string SourceForRegion { get; set; }
        public string SourceForCountry { get; set; }
        public string WordCollectionName { get; set; }
        public string DocumentCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
