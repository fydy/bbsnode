<div class="tags hidden-xs">
	<!-- BEGIN tags -->
	<div class="pull-left tag-container">
		<a href="{config.relative_path}/tags/{tags.value}">
		<span class="tag-item" data-tag="{tags.value}" style="<!-- IF tags.color -->color: {tags.color};<!-- ENDIF tags.color --><!-- IF tags.bgColor -->background-color: {tags.bgColor};<!-- ENDIF tags.bgColor -->">{tags.value}</span><span class="tag-topic-count">{tags.score}</span></a>
	</div>
	<!-- END tags -->
</div>

<ul class="postbar-actions pull-right">
	<li class="loading-indicator pull-left hidden">
		<span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>
	</li>

	<li class="post-count">
		<span component="topic/post-count" class="human-readable-number" title="{postcount}">{postcount}</span><br />
		<small>[[global:posts]]</small>
	</li>
	<li class="view-count">
		<span title="{viewcount}" class="human-readable-number">{viewcount}</span><br />
		<small>[[global:views]]</small>
	</li>

	<li class="reply-button" component="topic/reply/container">
<button component="topic/reply" class="btn btn-md btn-primary <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:reply]]</button>

<!-- IF loggedIn -->

<!-- IF !privileges.topics:reply -->
<!-- IF locked -->
<button component="topic/reply/locked" class="btn btn-md btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</button>
<!-- ENDIF locked -->
<!-- ENDIF !privileges.topics:reply -->

<!-- IF !locked -->
<button component="topic/reply/locked" class="btn btn-md btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</button>
<!-- ENDIF !locked -->

<!-- ELSE -->

<!-- IF !privileges.topics:reply -->
<a href="{config.relative_path}/login" class="btn btn-md btn-primary">[[topic:guest-login-reply]]</a>
<!-- ENDIF !privileges.topics:reply -->

<!-- ENDIF loggedIn -->
</li>

	<!-- IF loggedIn -->
	<li class="unread-button">
	 	<button component="topic/mark-unread" class="btn btn-md btn-default">
	 	<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:mark_unread]]</span>
		<span class="visible-xs-inline"><i class="fa fa-fw fa-inbox"></i></span>
	 	</button>
 	</li>
 	<!-- ENDIF loggedIn -->
	<!-- IF config.loggedIn -->
<li class="dropdown" component="topic/watch">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
        <span component="topic/following/menu" <!-- IF !isFollowing -->class="hidden"<!-- ENDIF !isFollowing -->><i class="fa fa-fw fa-bell-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:watching]]</span></span>
    	<span component="topic/not-following/menu" <!-- IF !isNotFollowing -->class="hidden"<!-- ENDIF !isNotFollowing -->><i class="fa fa-fw fa-bell-slash-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:not-watching]]</span></span>
    	<span component="topic/ignoring/menu" <!-- IF !isIgnoring -->class="hidden"<!-- ENDIF !isIgnoring -->><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:ignoring]]</span></span>
    	<span class="caret"></span>
	</button>
    
    <ul class="dropdown-menu pull-right">
        <li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw <!-- IF isFollowing -->fa-check<!-- ENDIF isFollowing -->"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>
		<li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw <!-- IF isNotFollowing -->fa-check<!-- ENDIF isNotFollowing -->"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>
		<li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw <!-- IF isIgnoring -->fa-check<!-- ENDIF isIgnoring -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>
    </ul>
    
</li>
<!-- ENDIF config.loggedIn -->
	<!-- IF privileges.view_thread_tools -->
<li class="thread-tools dropdown">
	<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>
		<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu dropdown-menu-right"></ul>
</li>
<!-- ENDIF privileges.view_thread_tools -->
</ul>


