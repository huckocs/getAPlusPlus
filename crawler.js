phantom.injectJs("jquery.js");

if(phantom.args.length < 1)
{
console.log('{"error":"not correct amount of args"}');
phantom.exit();
}

var site = jQuery.trim(phantom.args[0]);

if(site == "")
{
console.log('{"error":"empty search keyword"}');
phantom.exit();
}

//this is a timeout to make sure the phantom process eventually stops
window.setTimeout(function(){
phantom.exit();
}, 120000);

var page = new WebPage();
page.settings.loadImages = true;
page.settings.userAgent = "PMG Web Crawler Bot/1.0";

page.open(site, function(status)
{
if (status !== 'success')
{
console.log('{"error":"Unable to load the address for page"}');
phantom.exit();
}
//wait for any ajax to load
window.setInterval(function()
{
//inject jQuery
page.injectJs("jquery.js");

var results = page.evaluate(function()
{

var hrefs = new Array();
jQuery("a").each(function(){
hrefs.push(jQuery(this).attr("href"));
});

return hrefs;
});

console.log(JSON.stringify(results));

phantom.exit();
}, 3000);
});

