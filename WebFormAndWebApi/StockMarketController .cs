using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebFormAndWebApi.Dao;

namespace WebFormAndWebApi
{
    public class StockMarketController : ApiController
    {
        private DataProvider dao = new DataProvider();
        public IEnumerable<stockMarketDaily> Get()
        {
            return dao.GetAllStockMarket();

            
        }
        //public stockMarketDaily Get(int id)
        //{
        //    return dao.GetStockMarketById(id);
        //}
        public void Post([FromBody]stockMarketDaily stockMarketDaily)
        {
           dao.SaveStockMarketDaily(stockMarketDaily);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// 

        public void Delete(int id)
        {
            dao.RemoveDailyStockMarket(id);


        }
    }
}
