using System.Net;
using System.Web;
using System.Web.Http;
using Mede.Fcw.Core.Domain.Enums;
using Mede.Fcw.Service.Admin;
using Mede.Fcw.Web.Attributes;

namespace Mede.Fcw.Web.AdminSite.Controllers
{
	[Monitor(ProductAreaName = AdminConstants.AreaName)]
	[ApiAuthorizeFeature(Feature = Feature.AdminTool)]
	public class TemplateManagerController : ApiController
	{
		private readonly ITemplateManagerService _service;
		public TemplateManagerController(ITemplateManagerService service)
		{
			_service = service;
		}

		[HttpGet]
		public IHttpActionResult GetTestMethod()
		{
			// Please put all logic inside service, but not controller
			return Ok(_service.TestMethod());
		}

		[HttpPost]
		public IHttpActionResult UploadPdfTemplate()
		{
			if (HttpContext.Current.Request.Files.Count != 1)
			{
				throw new HttpResponseException(HttpStatusCode.BadRequest);
			}

			HttpPostedFile file = HttpContext.Current.Request.Files[0];

			return Ok(_service.ParseAndValidatePdf(file.FileName, file.ContentType, file.InputStream));
		}
	}
}