const API_URL = 'whispering-garden-29114.herokuapp.com/api/v1/users'
const CORS = 'https://cors-anywhere.herokuapp.com/'

var $renderBody = $("#render-body"),
		handlebarsTemplate = $("#user-template").html()
    // Handlebars.registerHelper('times', function(n, block) {
    //   var accum = '';
    //   for(var i = 0; i < n; ++i)
    //     accum += block.fn(i);
    //   return accum;
    // });

$.get(CORS + API_URL, (response) =>{
  response.forEach((user) => {
    userTemplateRender(user)
  })
})

function userTemplateRender (data) {
  var renderMain = $("#main-content")
  var handlebarsTemplate = $("#user-template").html()
  var templateCompile = Handlebars.compile(handlebarsTemplate)
  renderMain.append(templateCompile(data));
}
