<div class="topic">
	<!-- IF breadcrumbs.length -->
<ol class="breadcrumb">
	<!-- BEGIN breadcrumbs -->
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="url"><!-- ENDIF !@last -->
			<span itemprop="title">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	<!-- END breadcrumbs -->
</ol>
<!-- ENDIF breadcrumbs.length -->
	<div class="card">
		<div class="listview lv-lg">
			<div class="lv-header-alt" component="post/header">
				<div class="title">
					<i class="fa fa-thumb-tack <!-- IF !pinned -->hidden<!-- ENDIF !pinned -->"></i> <i class="fa fa-lock <!-- IF !locked -->hidden<!-- ENDIF !locked -->"></i> <span class="topic-title" component="topic/title">{title}</span>
					<ul class="lv-actions actions">
						<!-- IF loggedIn -->
<li class="dropdown" component="thread/sort">
    <span data-toggle="dropdown" aria-expanded="true"><i class="fa fa-sort-amount-desc"></i></span>
    <ul class="dropdown-menu pull-right">
        <li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>
		<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>
		<li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>
    </ul>
</li>
<!-- ENDIF loggedIn -->
					</ul>
				</div>
			</div>

			<!-- IF merger -->
			<div component="topic/merged/message" class="alert alert-warning clearfix">
				<span class="pull-left">[[topic:merged_message, {mergeIntoTid}, {merger.mergedIntoTitle}]]</span>
				<span class="pull-right">
					<a href="{config.relative_path}/user/{merger.userslug}">
						<strong>{merger.username}</strong>
					</a>
					<small class="timeago" title="{mergedTimestampISO}"></small>
				</span>
			</div>
			<!-- ENDIF merger -->

			<div component="topic/deleted/message" class="lv-header-alt <!-- IF !deleted --> hidden<!-- ENDIF !deleted --> clearfix">
				<span class="pull-left">[[topic:deleted_message]]</span>
				<span class="pull-right">
					<!-- IF deleter -->
					<a href="{config.relative_path}/user/{deleter.userslug}">
						<strong>{deleter.username}</strong>
					</a>
					<small class="timeago" title="{deletedTimestampISO}"></small>
					<!-- ENDIF deleter -->
				</span>
			</div>

			<div class="lv-body">
				<div component="topic" data-tid="{tid}" data-cid="{cid}">
				<!-- BEGIN posts -->
					<div component="post" class="<!-- IF posts.deleted -->deleted<!-- ENDIF posts.deleted -->" data-index="{posts.index}" data-pid="{posts.pid}" data-uid="{posts.uid}" data-timestamp="{posts.timestamp}" data-username="{posts.user.username}" data-userslug="{posts.user.userslug}" itemscope itemtype="http://schema.org/Comment">
    <a component="post/anchor" data-index="{posts.index}"></a>
    <meta itemprop="datePublished" content="{posts.relativeTime}">
    <meta itemprop="dateModified" content="{posts.relativeEditTime}">

    <div class="post-block">
        <div class="poster-avatar hidden-xs">
            <a href="{config.relative_path}/user/{posts.user.userslug}">
                <!-- IF posts.user.picture -->
                <img class="user-picture" src="{posts.user.picture}" alt="{posts.user.username}" title="{posts.user.username}"/>
                <!-- ELSE -->
                <div class="user-icon" style="background-color: {posts.user.icon:bgColor};">{posts.user.icon:text}</div>
                <!-- ENDIF posts.user.picture -->
                <span component="user/status" class="status {posts.user.status}" title="[[global:{posts.user.status}]]"></span>
            </a>
        </div>

        <div class="post-content">
            <div class="post-body">
                <ul class="post-actions pull-right">
                    <li class="votes">
                        <!-- IF !reputation:disabled -->
                        <a component="post/upvote" href="#" class="<!-- IF posts.upvoted -->upvoted<!-- ENDIF posts.upvoted -->">
                            <i class="fa fa-thumbs-o-up"></i>
                        </a>
                        <span component="post/vote-count" data-votes="{posts.votes}">{posts.votes}</span>
                        <!-- IF !downvote:disabled -->
                        <a component="post/downvote" href="#" class="<!-- IF posts.downvoted -->downvoted<!-- ENDIF posts.downvoted -->">
                            <i class="fa fa-thumbs-o-down"></i>
                        </a>
                        <!-- ENDIF !downvote:disabled -->
                        <!-- ENDIF !reputation:disabled -->
                    </li>
                    <li component="post/tools" class="dropdown moderator-tools <!-- IF !posts.display_post_menu -->hidden<!-- ENDIF !posts.display_post_menu -->">
	<a data-toggle="dropdown" aria-expanded="true"><i class="fa fa-fw fa-ellipsis-v"></i></a>
	<ul class="dropdown-menu dropdown-menu-right pull-right" role="menu"></ul>
</li>
                </ul>

                <div class="post-header">
                    <a class="pull-left visible-xs user-profile-link" href="{config.relative_path}/user/{posts.user.userslug}">
                        <!-- IF posts.user.picture -->
                        <img class="post-user-picture" src="{posts.user.picture}" alt="{posts.user.username}" title="{posts.user.username}"/>
                        <!-- ELSE -->
                        <div class="user-icon post-user-picture" style="background-color: {posts.user.icon:bgColor};">{posts.user.icon:text}</div>
                        <!-- ENDIF posts.user.picture -->
                    </a>

                    <strong>
                        <a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->" itemprop="author" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.username}</a>
                    </strong>
                    <!-- BEGIN posts.user.selectedGroups -->
<!-- IF posts.user.selectedGroups.slug -->
<a href="{config.relative_path}/groups/{posts.user.selectedGroups.slug}" class="hidden-xs"><small class="label group-label inline-block" style="background-color: {posts.user.selectedGroups.labelColor};"><!-- IF posts.user.selectedGroups.icon --><i class="fa {posts.user.selectedGroups.icon}"></i> <!-- ENDIF posts.user.selectedGroups.icon -->{posts.user.selectedGroups.userTitle}</small></a>
<!-- ENDIF posts.user.selectedGroups.slug -->
<!-- END posts.user.selectedGroups -->
                    <span class="post-time">
                        <a class="permalink" href="{config.relative_path}/post/{posts.pid}"><span class="timeago" title="{posts.timestampISO}"></span></a>

                        <span class="post-tools">
                            <a component="post/reply" href="#" class="<!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->"><i class="fa fa-reply"></i>[[topic:reply]]</a>
                            <a component="post/quote" href="#" class="<!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->"><i class="fa fa-quote-left"></i>[[topic:quote]]</a>
                        </span>
                    </span>
                </div>

                <div component="post/content" itemprop="text">
                    {posts.content}
                </div>

                <!-- IF posts.user.signature -->
                <div component="post/signature" data-uid="{posts.user.uid}" class="post-signature hidden-xs">{posts.user.signature}</div>
                <!-- ENDIF posts.user.signature -->

                <div class="post-edit">
                    <small component="post/editor" class="<!-- IF !posts.editor.username -->hidden<!-- ENDIF !posts.editor.username -->"><strong><a href="{config.relative_path}/user/{posts.editor.userslug}">[[global:last_edited_by, {posts.editor.username}]]</a></strong> <span class="timeago" title="{posts.editedISO}"></span></small>
                </div>
                {posts.reactions}
            </div>
        </div>
    </div>
</div>
					<!-- IF !posts.index -->
					<div class="post-bar-placeholder"></div>
					<!-- ENDIF !posts.index -->
				<!-- END posts -->
				</div>

				<div class="post-bar">
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



				</div>
			</div>
		</div>
	</div>
	<!-- IF config.usePagination -->
		<ul class="pagination lv-pagination hidden-xs">
    <!-- IF pagination.pages -->
    <!-- IF !pagination.prev.active -->
    <li class="disabled">
        <a href="#" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
    <!-- ELSE -->
    <li>
        <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
    <!-- ENDIF !pagination.prev.active -->
    <!-- ENDIF pagination.pages -->

    <!-- BEGIN pagination.pages -->
        <!-- IF pagination.pages.separator -->
		<li component="pagination/select-page" class="page select-page">
			<a href="#"><i class="fa fa-ellipsis-h"></i></a>
		</li>
		<!-- ELSE -->
        <li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
            <a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
        </li>
        <!-- ENDIF pagination.pages.separator -->
    <!-- END pagination.pages -->

    <!-- IF pagination.pages -->
    <!-- IF !pagination.next.active -->
    <li class="disabled">
        <a href="#" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
    <!-- ELSE -->
    <li>
        <a href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
    <!-- ENDIF !pagination.next.active -->
    <!-- ENDIF pagination.pages -->
</ul>


<ul class="pagination lv-pagination visible-xs">
    <!-- IF pagination.pages -->
    <!-- IF !pagination.prev.active -->
    <li class="first disabled">
		<a href="#"><i class="fa fa-fast-backward"></i> </a>
	</li>
	<li class="disabled">
        <a href="#" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
	<!-- ENDIF !pagination.prev.active -->

	<!-- IF pagination.prev.active -->
	<li class="first">
		<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>
	</li>
	<li>
        <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
	<!-- ENDIF pagination.prev.active -->
	<!-- ENDIF pagination.pages -->


    <li component="pagination/select-page" class="page select-page">
		<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
	</li>

    <!-- IF pagination.pages -->
    <!-- IF !pagination.next.active -->
    <li class="disabled">
        <a href="#" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
    <li class="last disabled">
		<a href="#"><i class="fa fa-fast-forward"></i> </a>
	</li>
	<!-- ENDIF !pagination.next.active -->

	<!-- IF pagination.next.active -->
	<li>
        <a href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
	<li class="last">
		<a href="?page={pagination.pageCount}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
	</li>
	<!-- ENDIF pagination.next.active -->
	<!-- ENDIF pagination.pages -->
</ul>
	<!-- ENDIF config.usePagination -->
</div>
<!-- IF !config.usePagination -->
	<noscript>
	<ul class="pagination lv-pagination hidden-xs">
    <!-- IF pagination.pages -->
    <!-- IF !pagination.prev.active -->
    <li class="disabled">
        <a href="#" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
    <!-- ELSE -->
    <li>
        <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
    <!-- ENDIF !pagination.prev.active -->
    <!-- ENDIF pagination.pages -->

    <!-- BEGIN pagination.pages -->
        <!-- IF pagination.pages.separator -->
		<li component="pagination/select-page" class="page select-page">
			<a href="#"><i class="fa fa-ellipsis-h"></i></a>
		</li>
		<!-- ELSE -->
        <li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
            <a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
        </li>
        <!-- ENDIF pagination.pages.separator -->
    <!-- END pagination.pages -->

    <!-- IF pagination.pages -->
    <!-- IF !pagination.next.active -->
    <li class="disabled">
        <a href="#" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
    <!-- ELSE -->
    <li>
        <a href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
    <!-- ENDIF !pagination.next.active -->
    <!-- ENDIF pagination.pages -->
</ul>


<ul class="pagination lv-pagination visible-xs">
    <!-- IF pagination.pages -->
    <!-- IF !pagination.prev.active -->
    <li class="first disabled">
		<a href="#"><i class="fa fa-fast-backward"></i> </a>
	</li>
	<li class="disabled">
        <a href="#" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
	<!-- ENDIF !pagination.prev.active -->

	<!-- IF pagination.prev.active -->
	<li class="first">
		<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>
	</li>
	<li>
        <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="Previous">
            <i class="fa fa-chevron-left"></i>
        </a>
    </li>
	<!-- ENDIF pagination.prev.active -->
	<!-- ENDIF pagination.pages -->


    <li component="pagination/select-page" class="page select-page">
		<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
	</li>

    <!-- IF pagination.pages -->
    <!-- IF !pagination.next.active -->
    <li class="disabled">
        <a href="#" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
    <li class="last disabled">
		<a href="#"><i class="fa fa-fast-forward"></i> </a>
	</li>
	<!-- ENDIF !pagination.next.active -->

	<!-- IF pagination.next.active -->
	<li>
        <a href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="Next">
            <i class="fa fa-chevron-right"></i>
        </a>
    </li>
	<li class="last">
		<a href="?page={pagination.pageCount}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
	</li>
	<!-- ENDIF pagination.next.active -->
	<!-- ENDIF pagination.pages -->
</ul>
	</noscript>
<!-- ENDIF !config.usePagination -->