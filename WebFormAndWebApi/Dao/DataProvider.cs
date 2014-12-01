using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebFormAndWebApi.Dao
{
    public class DataProvider
    {
        public IEnumerable<stockMarketDaily> GetAllStockMarket()
        {
            using(StockMarketDailyDataContext dataContext = new StockMarketDailyDataContext())
            {
               return dataContext.stockMarketDailies.ToList();
            }
        }

        public void SaveStockMarketDaily(stockMarketDaily stockMarket)
        {
            if (stockMarket == null) throw new ArgumentNullException("Stock Market was NULL");
            using(StockMarketDailyDataContext dataContext = new StockMarketDailyDataContext())
            {
                stockMarket.CreatedDate = DateTime.Now;
                dataContext.stockMarketDailies.InsertOnSubmit(stockMarket);
                dataContext.SubmitChanges();
            }
        }

        public void test()
        {
        }

        public void RemoveDailyStockMarket(int id)
        {
            using (StockMarketDailyDataContext dataContext = new StockMarketDailyDataContext())
            {
              var stockMarketDaily =  dataContext.stockMarketDailies.Where(stock=>stock.Id == id).SingleOrDefault();
              dataContext.stockMarketDailies.DeleteOnSubmit(stockMarketDaily);
              dataContext.SubmitChanges();
            }
        }
    }


}