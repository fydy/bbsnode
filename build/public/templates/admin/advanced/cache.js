!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,a,e,c,n){return'\n<div class="row post-cache">\n\t<div class="col-lg-9">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"><i class="fa fa-calendar-o"></i> [[admin/advanced/cache:post-cache]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<label>[[admin/advanced/cache:posts-in-cache]]</label><br/>\n\t\t\t\t<span>'+t.__escape(e(a&&a.postCache&&a.postCache.itemCount))+"</span><br/>\n\n\t\t\t\t<label>[[admin/advanced/cache:average-post-size]]</label><br/>\n\t\t\t\t<span>"+t.__escape(e(a&&a.postCache&&a.postCache.avgPostSize))+"</span><br/>\n\n\t\t\t\t<label>[[admin/advanced/cache:length-to-max]]</label><br/>\n\t\t\t\t<span>"+t.__escape(e(a&&a.postCache&&a.postCache.length))+" / "+t.__escape(e(a&&a.postCache&&a.postCache.max))+'</span><br/>\n\n\t\t\t\t<div class="progress">\n\t\t\t\t\t<div class="progress-bar" role="progressbar" aria-valuenow="'+t.__escape(e(a&&a.postCache&&a.postCache.percentFull))+'" aria-valuemin="0" aria-valuemax="100" style="width: '+t.__escape(e(a&&a.postCache&&a.postCache.percentFull))+'%;">\n\t\t\t\t\t\t[[admin/advanced/cache:percent-full, '+t.__escape(e(a&&a.postCache&&a.postCache.percentFull))+"]]\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label>Hits:</label> <span>"+t.__escape(e(a&&a.postCache&&a.postCache.hits))+"</span><br/>\n\t\t\t\t<label>Misses:</label> <span>"+t.__escape(e(a&&a.postCache&&a.postCache.misses))+"</span><br/>\n\t\t\t\t<label>Hit Ratio:</label> <span>"+t.__escape(e(a&&a.postCache&&a.postCache.hitRatio))+'</span><br/>\n\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="postCacheSize">[[admin/advanced/cache:post-cache-size]]</label>\n\t\t\t\t\t<input id="postCacheSize" type="text" class="form-control" value="" data-field="postCacheSize">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t'+(e(a&&a.objectCache)?'\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"><i class="fa fa-calendar-o"></i> Object Cache</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<label>[[admin/advanced/cache:length-to-max]]</label><br/>\n\t\t\t\t<span>'+t.__escape(e(a&&a.objectCache&&a.objectCache.length))+" / "+t.__escape(e(a&&a.objectCache&&a.objectCache.max))+'</span><br/>\n\t\t\t\t<div class="progress">\n\t\t\t\t\t<div class="progress-bar" role="progressbar" aria-valuenow="'+t.__escape(e(a&&a.objectCache&&a.objectCache.percentFull))+'" aria-valuemin="0" aria-valuemax="100" style="width: '+t.__escape(e(a&&a.objectCache&&a.objectCache.percentFull))+'%;">\n\t\t\t\t\t\t[[admin/advanced/cache:percent-full, '+t.__escape(e(a&&a.objectCache&&a.objectCache.percentFull))+"]]\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label>Hits:</label> <span>"+t.__escape(e(a&&a.objectCache&&a.objectCache.hits))+"</span><br/>\n\t\t\t\t<label>Misses:</label> <span>"+t.__escape(e(a&&a.objectCache&&a.objectCache.misses))+"</span><br/>\n\t\t\t\t<label>Hit Ratio:</label> <span>"+t.__escape(e(a&&a.objectCache&&a.objectCache.hitRatio))+"</span><br/>\n\t\t\t</div>\n\t\t</div>\n\t\t":"")+'\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"><i class="fa fa-calendar-o"></i> Group Cache</div>\n\t\t\t<div class="panel-body">\n\n\t\t\t\t<label>[[admin/advanced/cache:length-to-max]]</label><br/>\n\t\t\t\t<span>'+t.__escape(e(a&&a.groupCache&&a.groupCache.length))+" / "+t.__escape(e(a&&a.groupCache&&a.groupCache.max))+'</span><br/>\n\n\t\t\t\t<div class="progress">\n\t\t\t\t\t<div class="progress-bar" role="progressbar" aria-valuenow="'+t.__escape(e(a&&a.groupCache&&a.groupCache.percentFull))+'" aria-valuemin="0" aria-valuemax="100" style="width: '+t.__escape(e(a&&a.groupCache&&a.groupCache.percentFull))+'%;">\n\t\t\t\t\t\t[[admin/advanced/cache:percent-full, '+t.__escape(e(a&&a.groupCache&&a.groupCache.percentFull))+"]]\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label>Hits:</label> <span>"+t.__escape(e(a&&a.groupCache&&a.groupCache.hits))+"</span><br/>\n\t\t\t\t<label>Misses:</label> <span>"+t.__escape(e(a&&a.groupCache&&a.groupCache.misses))+"</span><br/>\n\t\t\t\t<label>Hit Ratio:</label> <span>"+t.__escape(e(a&&a.groupCache&&a.groupCache.hitRatio))+'</span><br/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"><i class="fa fa-calendar-o"></i> Local Cache</div>\n\t\t\t<div class="panel-body">\n\n\t\t\t\t<label>[[admin/advanced/cache:length-to-max]]</label><br/>\n\t\t\t\t<span>'+t.__escape(e(a&&a.localCache&&a.localCache.length))+" / "+t.__escape(e(a&&a.localCache&&a.localCache.max))+'</span><br/>\n\n\t\t\t\t<div class="progress">\n\t\t\t\t\t<div class="progress-bar" role="progressbar" aria-valuenow="'+t.__escape(e(a&&a.localCache&&a.localCache.percentFull))+'" aria-valuemin="0" aria-valuemax="100" style="width: '+t.__escape(e(a&&a.localCache&&a.localCache.percentFull))+'%;">\n\t\t\t\t\t\t[[admin/advanced/cache:percent-full, '+t.__escape(e(a&&a.localCache&&a.localCache.percentFull))+"]]\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label>Hits:</label> <span>"+t.__escape(e(a&&a.localCache&&a.localCache.hits))+"</span><br/>\n\t\t\t\t<label>Misses:</label> <span>"+t.__escape(e(a&&a.localCache&&a.localCache.misses))+"</span><br/>\n\t\t\t\t<label>Hit Ratio:</label> <span>"+t.__escape(e(a&&a.localCache&&a.localCache.hitRatio))+"</span><br/>\n\n\t\t\t\t"+(e(a&&a.localCache&&a.localCache.dump)?"\n\t\t\t\t<pre>"+t.__escape(e(a&&a.localCache&&a.localCache.dump))+"</pre>\n\t\t\t\t":"")+'\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="col-lg-3 acp-sidebar">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/advanced/cache:control-panel]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<button class="btn btn-primary" id="save">[[admin/advanced/cache:update-settings]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<script>\n\trequire([\'admin/settings\'], function(Settings) {\n\t\tSettings.prepare();\n\t});\n<\/script>'}});