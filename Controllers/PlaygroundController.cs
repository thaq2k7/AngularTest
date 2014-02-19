using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularTest.Controllers
{
    public class PlaygroundController : Controller
    {
        //
        // GET: /Playground/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Playground()
        {
            return View();
        }

    }
}
