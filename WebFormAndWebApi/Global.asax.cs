using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;
using System.Web.Routing;

namespace WebFormAndWebApi
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            setWebApiConfiguration();
        }

        private static void setWebApiConfiguration()
        {

            RouteTable.Routes.MapHttpRoute(

                name: "DefaultApi",

                routeTemplate: "api/{controller}/{id}",

                defaults: new { id = RouteParameter.Optional }

                );

            RouteTable.Routes.MapHttpRoute(

               name: "DeleteApi",

               routeTemplate: "api/{controller}/{action}/{id}",

               defaults: new { id = RouteParameter.Optional }

               );

        }
    }
}