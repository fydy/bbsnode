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
<div class="account">
	<div class="card user-profile-view" data-uid="{uid}">
	<div class="card-body cover" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
		<!-- IF allowCoverPicture -->
		<div class="controls">
			<span class="upload"><i class="fa fa-fw fa-3x fa-upload"></i></span>
			<span class="resize"><i class="fa fa-fw fa-3x fa-arrows"></i></span>
			<span class="remove"><i class="fa fa-fw fa-3x fa-times"></i></span>
		</div>
		<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
		<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
		<!-- ENDIF allowCoverPicture -->
	</div>

	<div class="card-footer">
		<div class="profile-pic">
	        <div class="user-icon profile-header-img" style="<!-- IF picture -->background-image: url({picture});  background-size: cover; background-repeat: no-repeat; background-position: center center;<!-- ELSE -->background-color: {icon:bgColor};<!-- ENDIF picture -->"><!-- IF !picture -->{icon:text}<!-- ENDIF !picture -->
	        </div>
	        <span component="user/status" class="status {status}" title="[[global:{status}]]"></span>
        </div>

        <div class="user-info">
	        <h3 class="fullname"><!-- IF fullname -->{fullname}<!-- ELSE -->{username}<!-- ENDIF fullname --></h3>
			<h4 class="username"><!-- IF !banned -->@{username}<!-- ELSE -->[[user:banned]]<!-- ENDIF !banned --></h4>
		</div>

        <!-- IF template.account/profile -->
		<div class="account-stats">
			<!-- IF !reputation:disabled -->
			<div class="stat">
				<div class="human-readable-number" title="{reputation}">{reputation}</div>
				<span class="stat-label">[[global:reputation]]</span>
			</div>
			<!-- ENDIF !reputation:disabled -->

			<div class="stat">
				<div class="human-readable-number" title="{postcount}">{postcount}</div>
				<span class="stat-label">[[global:posts]]</span>
			</div>

			<div class="stat">
				<div class="human-readable-number" title="{profileviews}">{profileviews}</div>
				<span class="stat-label">[[user:profile_views]]</span>
			</div>

			<div class="stat">
				<div class="human-readable-number" title="{followerCount}">{followerCount}</div>
				<span class="stat-label">[[user:followers]]</span>
			</div>

			<div class="stat">
				<div class="human-readable-number"  title="{followingCount}">{followingCount}</div>
				<span class="stat-label">[[user:following]]</span>
			</div>
		</div>
		<!-- IF loggedIn -->
		<!-- IF !isSelf -->
		<!-- IF !banned -->
		<!-- IF !config.disableChat -->
		<a component="account/chat" href="#" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-comment-o"></i> [[user:chat]]</a>
		<!-- ENDIF !config.disableChat -->
		<a id="follow-btn" component="account/follow" href="#" class="btn btn-success btn-sm <!-- IF isFollowing -->hide<!-- ENDIF isFollowing -->">[[user:follow]]</a>
		<a id="unfollow-btn" component="account/unfollow" href="#" class="btn btn-warning btn-sm <!-- IF !isFollowing -->hide<!-- ENDIF !isFollowing -->">[[user:unfollow]]</a>
		<!-- ENDIF !banned -->
		<!-- ENDIF !isSelf -->
		<!-- ENDIF loggedIn -->

		<!-- ELSE -->
		<hr/>
		<!-- ENDIF template.account/profile -->

		<div class="btn-group account-fab">
	<button type="button" class="btn btn-primary btn-icon dropdown-toggle" data-toggle="dropdown">
		<i class="fa fa-ellipsis-v"></i>
	</button>
	<ul class="dropdown-menu pull-right" role="menu">
		<li>
			<a href="{config.relative_path}/user/{userslug}" class="inline-block" id="profile"><i class="fa fa-fw fa-user"></i> [[user:profile]]</a>
		</li>
		<!-- IF showHidden -->
		<li><a href="{config.relative_path}/user/{userslug}/edit"><i class="fa fa-fw fa-gear"></i> [[user:edit]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/settings"><i class="fa fa-fw fa-edit"></i> [[user:settings]]</a></li>
		<!-- ENDIF showHidden -->

		<!-- IF !isSelf -->
		<!-- IF !banned -->
		<li>
  			<a component="account/flag" href="#">[[user:flag-profile]]</a>
  		</li>
  		<li>
			<a component="account/block" href="#"><!-- IF !../isBlocked -->[[user:block_user]]<!-- ELSE -->[[user:unblock_user]]<!-- END --></a>
		</li>
		<!-- ENDIF !banned -->

		<!-- IF canBan -->
		<li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
			<a component="account/ban" href="#"><i class="fa fa-fw fa-ban"></i> [[user:ban_account]]</a>
		</li>
		<li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
			<a component="account/unban" href="#"><i class="fa fa-fw fa-ban"></i> [[user:unban_account]]</a>
		</li>
		<!-- ENDIF canBan -->
		<!-- IF isAdmin -->
		<li>
			<a component="account/delete" href="#" class=""><i class="fa fa-fw fa-trash-o"></i> [[user:delete_account]]</a>
		</li>
		<!-- ENDIF isAdmin -->
		<!-- ENDIF !isSelf -->

		<li class="divider"></li>
		<li><a href="{config.relative_path}/user/{userslug}/following"><i class="fa fa-fw fa-users"></i> [[user:following]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/followers"><i class="fa fa-fw fa-users"></i> [[user:followers]]</a></li>
		<!-- IF showHidden -->
		<li><a href="{config.relative_path}/user/{userslug}/blocks"><i class="fa fa-fw fa-ban"></i> [[user:blocks]]</a></li>
		<!-- ENDIF showHidden -->
		<li class="divider"></li>
		<li><a href="{config.relative_path}/user/{userslug}/topics"><i class="fa fa-fw fa-book"></i> [[global:topics]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/posts"><i class="fa fa-fw fa-pencil"></i> [[global:posts]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/best"><i class="fa fa-fw fa-pencil"></i> [[global:best]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/groups"><i class="fa fa-fw fa-users"></i> [[global:header.groups]]</a></li>
		<!-- IF showHidden -->
		<li><a href="{config.relative_path}/user/{userslug}/bookmarks"><i class="fa fa-fw fa-heart"></i> [[user:bookmarks]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/watched"><i class="fa fa-fw fa-eye"></i> [[user:watched]]</a></li>
		<li><a href="{config.relative_path}/user/{userslug}/ignored"><i class="fa fa-fw fa-eye-slash"></i>[[user:ignored]]</a></li>
		<!-- IF !reputation:disabled -->
		<li><a href="{config.relative_path}/user/{userslug}/upvoted"><i class="fa fa-fw fa-thumbs-o-up"></i> [[global:upvoted]]</a></li>
		<!-- IF !downvote:disabled -->
		<li><a href="{config.relative_path}/user/{userslug}/downvoted"><i class="fa fa-fw fa-thumbs-o-down"></i> [[global:downvoted]]</a></li>
		<!-- ENDIF !downvote:disabled -->
		<!-- ENDIF !reputation:disabled -->
		<li><a href="{config.relative_path}/user/{userslug}/uploads"><i class="fa fa-fw fa-upload"></i> [[global:uploads]]</a></li>
		<!-- ENDIF showHidden -->
		<!-- BEGIN profile_links -->
		<!-- IF @first -->
  		<li class="divider"></li>
		<!-- ENDIF @first -->
		<li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a href="{config.relative_path}/user/{userslug}/{profile_links.route}"><!-- IF ../icon --><i class="fa fa-fw {profile_links.icon}"></i> <!-- END -->{profile_links.name}</a></li>
		<!-- END profile_links -->
	</ul>
</div>

	</div>
</div>


	<div class="users row">
		<div class="col-sm-8 col-xs-12">
			<div class="card">
				<div class="card-header">
					<h4>[[pages:account/blocks, {username}]]</h4>
				</div>
				<div class="card-body card-padding">
					<ul id="users-container" class="users-container" data-nextstart="{nextStart}">
						<!-- BEGIN users -->
<li class="users-box registered-user" data-uid="{users.uid}">
	<a href="{config.relative_path}/user/{users.userslug}">
		<!-- IF users.picture -->
		<img class="user-picture" src="{users.picture}" alt="{users.username}" />
		<!-- ELSE -->
		<div class="user-icon user-picture" style="background-color: {users.icon:bgColor};">{users.icon:text}</div>
		<!-- ENDIF users.picture -->
	</a>
	<br/>
	<div class="user-info">
		<div>
			<i component="user/status" class="status {users.status}" title="[[global:{users.status}]]"></i>
			<a href="{config.relative_path}/user/{users.userslug}"> {users.username}</a>
		</div>

		<!-- IF section_joindate -->
		<div title="joindate" class="joindate">
			<i class="fa fa-clock"></i>
			<span class="timeago" title="{users.joindateISO}"></span>
		</div>
		<!-- ENDIF section_joindate -->

		<!-- IF section_sort-reputation -->
		<div title="reputation" class="reputation">
			<i class="fa fa-star"></i>
			<span class="formatted-number">{users.reputation}</span>
		</div>
		<!-- ENDIF section_sort-reputation -->

		<!-- IF section_sort-posts -->
		<div title="post count" class="post-count">
			<i class="fa fa-pencil"></i>
			<span class="formatted-number">{users.postcount}</span>
		</div>
		<!-- ENDIF section_sort-posts -->

		<!-- IF section_flagged -->
		<div title="flag count" class="flag-count">
			<i class="fa fa-flag"></i>
			<span class="formatted-number"><a href="{config.relative_path}/posts/flags?byUsername={users.username}">{users.flags}</a></span>
		</div>
		<!-- ENDIF section_flagged -->
	</div>
</li>
<!-- END users -->

					</ul>
					<div class="alert alert-warning text-center"<!-- IF users.length --> style="display: none;"<!-- END -->>[[user:has_no_blocks]]</div>
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
				</div>
			</div>
		</div>
		<div class="col-sm-4 col-xs-12">
			<div class="card">
				<div class="card-body card-padding form">
					<div class="form-group">
						<div class="fg-line">
							<label for="user-search">[[users:search]]</label>
							<input class="form-control" type="text" id="user-search" placeholder="[[users:enter_username]]" />
						</div>
					</div>
					<div class="block-edit">
						<!-- IF edit -->
						<!-- BEGIN edit -->
						<table class="table">
						<tr>
							<td>
								<a href="{config.relative_path}/uid/{../uid}">
									<!-- IF ../picture -->
									<img class="user-picture" component="user/picture" src="{../picture}" itemprop="image" />
									<!-- ELSE -->
									<div class="user-icon user-picture" component="user/picture" style="background-color: {../icon:bgColor};">{../icon:text}</div><!-- END -->{../username}
								</a>
							</td>
							<td>
								<button class="btn btn-sm btn-primary pull-right" data-uid="{../uid}" data-action="toggle">[[user:block_toggle]]</button>
							</td>
						</tr>
						</table>
						<!-- END -->
						<!-- END -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>