$(function () {
    // Grab the template script
    var theTemplateScript = $("#template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // This is the default context, which is passed to the template
    var context = {};

    $.ajax({
        url: "/getColors"
    }).done(function (response){
        context.colors = response;

        // Pass our data to the template
        var theCompiledHtml = theTemplate(context);

        // Add the compiled html to the page
        $(document.body).append(theCompiledHtml);
    });
});
