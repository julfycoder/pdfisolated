using System.Web.Http;
using Mede.Fcw.Core.Domain.Enums;
using Mede.Fcw.Service.Admin;
using Mede.Fcw.Web.Attributes;

namespace Mede.Fcw.Web.AdminSite.Controllers
{
	[Monitor(ProductAreaName = AdminConstants.AreaName)]
	[ApiAuthorizeFeature(Feature = Feature.AdminTool)]
	public class ReferenceTableController : ApiController
	{
		private readonly ITemplateManagerService _service;
		public ReferenceTableController(ITemplateManagerService service)
		{
			_service = service;
		}

		[HttpGet]
		public IHttpActionResult GetTestMethod()
		{
			// Please put all logic inside service, but not controller
			return Ok(_service.TestMethod());
		}
	}
}