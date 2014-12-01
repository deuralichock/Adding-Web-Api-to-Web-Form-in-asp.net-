using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebFormAndWebApi.Startup))]
namespace WebFormAndWebApi
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
