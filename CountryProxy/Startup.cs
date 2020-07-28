using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CountryProxy.DB;
using CountryProxy.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace CountryProxy
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<DbSetting>(Configuration.GetSection(nameof(DbSetting)));
            services.AddSingleton<IDbSetting>(sp => sp.GetRequiredService<IOptions<DbSetting>>().Value);
            string cashHost=Environment.GetEnvironmentVariable("CASH_HOST");
            if(String.IsNullOrEmpty(cashHost))
            {
                Console.WriteLine("Host for cash isn't configurated");
            }
            string cashPort= Environment.GetEnvironmentVariable("CASH_PORT");
            if (String.IsNullOrEmpty(cashPort))
            {
                Console.WriteLine("Port for cash isn't configurated");
            }
            var cash = new RedisDbConnector(cashHost,cashPort);
            services.AddSingleton<ICashConnector>(cash);
            //services.AddSingleton<ICashConnector, RedisDbConnector>();
            services.AddSingleton<ICountryLoader, HttpCountryLoader>();
            services.AddSingleton<ICountryProxyService, CountryProxyService>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
