using EmployeeApp.API.Extensions;
using EmployeeApp.API.Model;
using System.Net;

namespace EmployeeApp.API.Middlewares
{
    public class LoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<LoggingMiddleware> _logger;

        public LoggingMiddleware(RequestDelegate next, ILogger<LoggingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {                
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "LoggingMiddleware: Error in {RequestPath}", context.Request.Path);
                await HandleExceptionAsync(context, ex);
            }
        }

        private Task HandleExceptionAsync(HttpContext httpContext, Exception ex)
        {
            // Determine what the return status code and message will be, default to 500 - Internal Server Error
            var responseStatusCode = HttpStatusCode.InternalServerError;
            string responseMessage = "An unexpected exception occurred while processing the request.";

            httpContext.Response.ContentType = "application/json";
            httpContext.Response.StatusCode = (int)responseStatusCode;
            var responseErrorList = new ResponseErrorList(httpContext.Response.StatusCode.ToString(), responseStatusCode.ToString(), responseMessage);

            return httpContext.Response.WriteAsync(responseErrorList.ToJson());
        }
    }

    public static class LoggingMiddlewareExtensions
    {
        public static IApplicationBuilder UseLoggingMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<LoggingMiddleware>();
        }
    }
}
