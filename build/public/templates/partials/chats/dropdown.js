!function(o){"object"==typeof module&&module.exports?module.exports=o():"function"==typeof define&&define.amd&&define(o)}(function(){function n(o,s,r,e,t){return(r(s&&s.rooms&&s.rooms.length)?"\n"+n.blocks.rooms(o,s,r,e,t)+"\n":'\n<li class="no_active"><a href="#">[[modules:chat.no_active]]</a></li>\n')+"\n"}return n.blocks={rooms:function(e,t,n,o,s){return o(n(t&&t.rooms),function(o,s,r){return'\n<li class="'+(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].unread)?"unread":"")+'" data-roomId="'+e.__escape(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].roomId))+'">\n    <a data-ajaxify="false">\n        '+(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser)?"\n\t\t"+(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser&&t.rooms[o].lastUser.picture)?'\n\t\t<img class="user-picture" src="'+e.__escape(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser&&t.rooms[o].lastUser.picture))+'" title="'+e.__escape(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser&&t.rooms[o].lastUser.username))+'" />\n\t\t':'\n\t\t<div class="user-icon" style="background-color: '+e.__escape(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser&&t.rooms[o].lastUser["icon:bgColor"]))+'">'+e.__escape(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser&&t.rooms[o].lastUser["icon:text"]))+"</div>\n\t\t")+"\n\t":"")+"\n\n\t"+(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].lastUser)?"\n\t"+e.__escape(n(t&&t.rooms&&t.rooms[o]&&t.rooms[o].usernames))+"\n\t":"\n\t[[modules:chat.no-users-in-room]]\n\t")+"\n    </a>\n</li>\n"})}},n});