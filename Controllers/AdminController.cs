using System.Web.Mvc;

namespace Mede.Fcw.Web.AdminSite.Controllers
{
	public class AdminController : Controller
	{
		// GET: Home
		public ActionResult Index()
		{
			return View("~/AdminSite/Views/Admin/Index.cshtml");
		}
	}
}