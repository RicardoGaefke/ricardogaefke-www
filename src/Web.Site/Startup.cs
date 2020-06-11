using System.IO;
using System.Runtime.InteropServices;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using RicardoGaefke.DI;
using RicardoGaefke.Domain;
using RicardoGaefke.Data;

namespace RicardoGaefke.Web.Site
{
  public class Startup
  {
    public Startup(IConfiguration configuration, IHostEnvironment hostEnvironment)
    {
      Configuration = configuration;
      HostEnvironment = hostEnvironment;
    }

    public IConfiguration Configuration { get; }
    public IHostEnvironment HostEnvironment { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));

      // services.AddSingleton<IData, Data>();

      Bootstrap.DataProtection(services, Configuration);
      Bootstrap.ConsentCookie(services, Configuration, HostEnvironment.IsDevelopment());

      Bootstrap.ConfigCors(services, Configuration, HostEnvironment.IsDevelopment());

      services.AddNodeServices(options =>
        {
          if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
          {
            options.ProjectPath = Path.GetFullPath("/app");
          }
        }
      );

      services
        .AddControllers()
        .AddNewtonsoftJson(options =>
        {
          options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
          options.SerializerSettings.DefaultValueHandling = Newtonsoft.Json.DefaultValueHandling.Ignore;
          options.SerializerSettings.ContractResolver = new DefaultContractResolver();
        })
      ;

      // ngix config --- not used here
      services.Configure<ForwardedHeadersOptions>(options =>
      {
        options.KnownProxies.Add(IPAddress.Parse("10.0.0.100"));
      });

      services.AddControllersWithViews();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }
      app.UseHttpsRedirection();
      app.UseStaticFiles();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}");
      });
    }
  }
}
