using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CountryProxy.DB
{
    public interface IDbSetting
    {
        string SourceForRegion { get; set; }
        string SourceForCountry { get; set; }
        string WordCollectionName { get; set; }
        string DocumentCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
