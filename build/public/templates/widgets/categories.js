!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(a,i,c,e,t){return e(c(i&&i.categories),function(e,t,r){return'\r\n<ul class="categories-list">\r\n\t<li>\r\n\t\t'+(c(i&&i.categories&&i.categories[e]&&i.categories[e].link)?'\r\n\t\t<h4><a href="'+a.__escape(c(i&&i.categories&&i.categories[e]&&i.categories[e].link))+'">'+a.__escape(c(i&&i.categories&&i.categories[e]&&i.categories[e].name))+"</a></h4>\r\n\t\t":'\r\n\t\t<h4><a href="'+a.__escape(c(i&&i.relative_path))+"/category/"+a.__escape(c(i&&i.categories&&i.categories[e]&&i.categories[e].slug))+'">'+a.__escape(c(i&&i.categories&&i.categories[e]&&i.categories[e].name))+"</a></h4>\r\n\t\t")+"\r\n\t\t<p>"+a.__escape(c(i&&i.categories&&i.categories[e]&&i.categories[e].descriptionParsed))+"</p>\r\n\t</li>\r\n</ul>\r\n"})}});