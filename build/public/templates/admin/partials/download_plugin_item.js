!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,n,o,a,d){return'\t\t\t\t\t<li id="'+t.__escape(o(n&&n.download&&n.download.id))+'" data-plugin-id="'+t.__escape(o(n&&n.download&&n.download.id))+'" class="clearfix">\n\t\t\t\t\t\t<div class="pull-right">\n\t\t\t\t\t\t\t<button data-action="toggleActive" class="btn btn-success hidden"><i class="fa fa-power-off"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\n\t\t\t\t\t\t\t<button data-action="toggleInstall" data-installed="0" class="btn btn-success"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>'+t.__escape(o(n&&n.download&&n.download.name))+"</strong></h2>\n\n\t\t\t\t\t\t"+(o(n&&n.download&&n.download.description)?"\n\t\t\t\t\t\t<p>"+t.__escape(o(n&&n.download&&n.download.description))+"</p>\n\t\t\t\t\t\t":"")+'\n\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">'+t.__escape(o(n&&n.download&&n.download.latest))+"</strong></small>\n\n\t\t\t\t\t\t"+(o(n&&n.download&&n.download.url)?'\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="'+t.__escape(o(n&&n.download&&n.download.url))+'">'+t.__escape(o(n&&n.download&&n.download.url))+"</a></p>\n\t\t\t\t\t\t":"")+"\n\t\t\t\t\t</li>\n"}});