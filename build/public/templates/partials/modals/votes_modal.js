!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function n(e,o,t,s,r){return"<h3>[[global:upvoters]] <small>("+e.__escape(t(o&&o.upvoteCount))+")</small></h3>\n"+n.blocks.upvoters(e,o,t,s,r)+"\n\n<h3>[[global:downvoters]] <small>("+e.__escape(t(o&&o.downvoteCount))+")</small></h3>\n"+n.blocks.downvoters(e,o,t,s,r)+"\n"}return n.blocks={downvoters:function(s,r,n,e,o){return e(n(r&&r.downvoters),function(e,o,t){return'\n<a href="'+s.__escape(n(r&&r.config&&r.config.relative_path))+"/user/"+s.__escape(n(r&&r.downvoters&&r.downvoters[e]&&r.downvoters[e].userslug))+'">\n'+(n(r&&r.downvoters&&r.downvoters[e]&&r.downvoters[e].picture)?'\n<img class="avatar avatar-sm" src="'+s.__escape(n(r&&r.downvoters&&r.downvoters[e]&&r.downvoters[e].picture))+'" title="'+s.__escape(n(r&&r.downvoters&&r.downvoters[e]&&r.downvoters[e].username))+'"/>\n':'\n<div class="avatar avatar-sm" style="background-color: '+s.__escape(n(r&&r.downvoters&&r.downvoters[e]&&r.downvoters[e]["icon:bgColor"]))+';">'+s.__escape(n(r&&r.downvoters&&r.downvoters[e]&&r.downvoters[e]["icon:text"]))+"</div>\n")+"\n</a>\n"})},upvoters:function(s,r,n,e,o){return e(n(r&&r.upvoters),function(e,o,t){return'\n<a href="'+s.__escape(n(r&&r.config&&r.config.relative_path))+"/user/"+s.__escape(n(r&&r.upvoters&&r.upvoters[e]&&r.upvoters[e].userslug))+'">\n'+(n(r&&r.upvoters&&r.upvoters[e]&&r.upvoters[e].picture)?'\n<img class="avatar avatar-sm" src="'+s.__escape(n(r&&r.upvoters&&r.upvoters[e]&&r.upvoters[e].picture))+'" title="'+s.__escape(n(r&&r.upvoters&&r.upvoters[e]&&r.upvoters[e].username))+'"/>\n':'\n<div class="avatar avatar-sm" style="background-color: '+s.__escape(n(r&&r.upvoters&&r.upvoters[e]&&r.upvoters[e]["icon:bgColor"]))+';">'+s.__escape(n(r&&r.upvoters&&r.upvoters[e]&&r.upvoters[e]["icon:text"]))+"</div>\n")+"\n</a>\n"})}},n});