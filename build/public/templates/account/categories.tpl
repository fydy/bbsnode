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


	<div class="row">
		<h1>{title}</h1>

		<div class="col-lg-12">
			<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">
				<!-- BEGIN categories -->
				<li component="categories/category" data-cid="{../cid}" data-parent-cid="{../parentCid}" class="row clearfix">
	<meta itemprop="name" content="{../name}">

	<div class="content col-xs-12 col-md-10 col-sm-12 depth-{../depth}">
		<div class="icon pull-left" style="{function.generateCategoryBackground}">
			<i class="fa fa-fw {../icon}"></i>
		</div>

		<h2 class="title">
			<!-- IF ../isSection -->
{../name}
<!-- ELSE -->
<!-- IF ../link -->
<a href="{../link}" itemprop="url">
<!-- ELSE -->
<a href="{config.relative_path}/category/{../slug}" itemprop="url">
<!-- ENDIF ../link -->
{../name}
</a>
<!-- ENDIF ../isSection -->
		</h2>
		<div>
			<!-- IF ../descriptionParsed -->
			<div class="description">
				{../descriptionParsed}
			</div>
			<!-- ENDIF ../descriptionParsed -->
		</div>
	</div>

	<!-- IF loggedIn -->
<li class="dropdown" component="topic/watch">
    <span data-toggle="dropdown" aria-expanded="true" component="category/watching/menu" <!-- IF isIgnored -->class="hidden"<!-- ENDIF isIgnored -->><i class="fa fa-fw fa-eye"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>

	<span data-toggle="dropdown" aria-expanded="true" component="category/ignoring/menu" <!-- IF !isIgnored -->class="hidden"<!-- ENDIF !isIgnored -->><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>

	<span data-toggle="dropdown" aria-expanded="true" class="caret"></span>
    
    <ul class="dropdown-menu pull-right">
        <li><a href="#" component="category/watching"><i component="category/watching/check" class="fa fa-fw <!-- IF !isIgnored -->fa-check<!-- ENDIF !isIgnored -->"></i><i class="fa fa-fw fa-eye"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>
		<li><a href="#" component="category/ignoring"><i component="category/ignoring/check" class="fa fa-fw <!-- IF isIgnored -->fa-check<!-- ENDIF isIgnored -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>
    </ul>
</li>
<!-- ENDIF loggedIn -->
</li>

				<!-- END categories -->
			</ul>
		</div>
	</div>
</div>
