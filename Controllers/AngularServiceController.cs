using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularTest.Controllers
{
    public class AngularServiceController : Controller
    {
        //
        // GET: /AngularService/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AngularService()
        {
            return View();
        }

        //public ActionResult AngularService(int id)
        //{
        //    MyModel myModel = new MyModel();
        //    myModel.Name = "Tahir";
        //    myModel.Title = "My title";
        //    //int json = "name: tahir";
        //    var response = Json(new { MyModel = myModel }, JsonRequestBehavior.AllowGet);
        //    return response;
        //    //return View();
        //}

    }

    public class MyModel
    {
        public string Name { get; set; }
        public string Title { get; set; }
    }
}
