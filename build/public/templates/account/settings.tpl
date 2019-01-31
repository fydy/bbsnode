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
<div class="account settings">
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
		<div class="col-xs-12">

			<!-- IF allowUserHomePage -->
			<div class="card">
	            <div class="card-header">
	            	[[user:select-homepage]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="form-group fg-line">
		            	<div class="select">
			            	<label for="dailyDigestFreq">[[user:homepage]]</label>
							<select class="form-control" id="homePageRoute" data-property="homePageRoute">
								<option value="none">None</option>
								<!-- BEGIN homePageRoutes -->
								<option value="{homePageRoutes.route}" <!-- IF homePageRoutes.selected -->selected="1"<!-- ENDIF homePageRoutes.selected -->>{homePageRoutes.name}</option>
								<!-- END homePageRoutes -->
							</select>
						</div>
					</div>
					<small>[[user:homepage_description]]</small>

					<div id="homePageCustom" class="form-group" style="display: none;">
						<div class="fg-line">
							<label for="homePageCustom">[[user:custom_route]]</label>
							<input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="{settings.homePageRoute}" />
						</div>
						<small>[[user:custom_route_help]]</small>
					</div>
	            </div>
	        </div>
			<!-- ENDIF allowUserHomePage -->

			<div class="card">
	            <div class="card-header">
	            	[[user:browsing]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="openOutgoingLinksInNewTab" <!-- IF settings.openOutgoingLinksInNewTab -->checked<!-- ENDIF settings.openOutgoingLinksInNewTab -->>
	                        <i class="input-helper"></i>
	                        [[user:open_links_in_new_tab]]
	                    </label>
	                </div>
	                <!-- IF inTopicSearchAvailable -->
	                <div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="topicSearchEnabled" <!-- IF settings.topicSearchEnabled -->checked<!-- ENDIF settings.topicSearchEnabled -->>
	                        <i class="input-helper"></i>
	                        [[user:enable_topic_searching]]
	                    </label>
	                </div>
	                <small class="help-block">[[user:topic_search_help]]</small>
	                <!-- ENDIF inTopicSearchAvailable -->
	                <div class="checkbox">
	                	<label>
	                        <input type="checkbox" data-property="scrollToMyPost" <!-- IF settings.scrollToMyPost -->checked<!-- ENDIF settings.scrollToMyPost -->>
	                        <i class="input-helper"></i>
	                        [[user:scroll_to_my_post]]
	                    </label>
	                </div>
	                <div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="delayImageLoading" <!-- IF settings.delayImageLoading -->checked<!-- ENDIF settings.delayImageLoading -->>
	                        <i class="input-helper"></i>
	                        [[user:delay_image_loading]]
	                    </label>
	                </div>
	                <small class="help-block">[[user:image_load_delay_help]]</small>
	            </div>
	        </div>

	        <div class="card">
	            <div class="card-header">
	            	[[global:privacy]]
	            </div>
	            <div class="card-body card-padding">
	            	<!-- IF !hideEmail -->
	            	<div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="showemail" <!-- IF settings.showemail -->checked <!-- ENDIF settings.showemail -->>
	                        <i class="input-helper"></i>
	                        [[user:show_email]]
	                    </label>
	                </div>
	                <!-- ENDIF !hideEmail -->
	                <!-- IF !hideFullname -->
	                <div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="showfullname" <!-- IF settings.showfullname -->checked<!-- ENDIF settings.showfullname -->>
	                        <i class="input-helper"></i>
	                        [[user:show_fullname]]
	                    </label>
	                </div>
	                <!-- ENDIF !hideFullname -->
	                <div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="restrictChat" <!-- IF settings.restrictChat -->checked<!-- ENDIF settings.restrictChat -->>
	                        <i class="input-helper"></i>
	                        [[user:restrict_chats]]
	                    </label>
	                </div>
	            </div>
	        </div>

	        <!-- IF !disableEmailSubscriptions -->
			<div class="card">
	            <div class="card-header">
	            	[[global:email]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="form-group fg-line">
		            	<div class="select">
			            	<label for="dailyDigestFreq">[[user:digest_label]]</label>
							<select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq">
								<!-- BEGIN dailyDigestFreqOptions -->
								<option value="{dailyDigestFreqOptions.value}" <!-- IF dailyDigestFreqOptions.selected -->selected<!-- ENDIF dailyDigestFreqOptions.selected -->>{dailyDigestFreqOptions.name}</option>
								<!-- END dailyDigestFreqOptions -->
							</select>
						</div>
					</div>
					<small>[[user:digest_description]]</small>
	            </div>
	        </div>
	        <!-- ENDIF !disableEmailSubscriptions -->

	        <div class="card">
	            <div class="card-header">
	            	[[topic:watch]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="followTopicsOnCreate" <!-- IF settings.followTopicsOnCreate -->checked <!-- ENDIF settings.followTopicsOnCreate -->>
	                        <i class="input-helper"></i>
	                        [[user:follow_topics_you_create]]
	                    </label>
	                </div>
	                <div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="followTopicsOnReply" <!-- IF settings.followTopicsOnReply -->checked<!-- ENDIF settings.followTopicsOnReply -->>
	                        <i class="input-helper"></i>
	                        [[user:follow_topics_you_reply_to]]
	                    </label>
	                </div>
	            </div>
	        </div>

	        <div class="card">
	            <div class="card-header">
	            	[[global:pagination]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="checkbox">
	                    <label>
	                        <input type="checkbox" data-property="usePagination" <!-- IF settings.usePagination -->checked<!-- ENDIF settings.usePagination -->>
	                        <i class="input-helper"></i>
	                        [[user:paginate_description]]
	                    </label>
	                </div>

					<div class="form-group">
                        <div class="fg-line">
                        	<label>[[user:topics_per_page]] ([[user:max_items_per_page, {maxTopicsPerPage}]])</label>
                            <input type="text" class="form-control" data-property="topicsPerPage" value="{settings.topicsPerPage}">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="fg-line">
                        	<label>[[user:posts_per_page]] ([[user:max_items_per_page, {maxPostsPerPage}]])</label>
                            <input type="text" class="form-control" data-property="postsPerPage" value="{settings.postsPerPage}">
                        </div>
                    </div>

	            </div>
	        </div>

	        <div class="card">
	            <div class="card-header">
	            	[[user:notifications_and_sounds]]
	            </div>
	            <div class="card-body card-padding">
	            	<!-- BEGIN notificationSettings -->
	            	<div class="row">
	            		<div class="col-xs-12">
	            			<div class="form-group fg-line">
				            	<div class="select">
				            		<label for="notification">{notificationSettings.label}</label>
									<select class="form-control" data-property="{notificationSettings.name}">
										<option value="none" <!-- IF notificationSettings.none -->selected<!-- ENDIF notificationSettings.none -->>[[notifications:none]]</option>
										<option value="notification" <!-- IF notificationSettings.notification -->selected<!-- ENDIF notificationSettings.notification -->>[[notifications:notification_only]]</option>
										<option value="email" <!-- IF notificationSettings.email -->selected<!-- ENDIF notificationSettings.email -->>[[notifications:email_only]]</option>
										<option value="notificationemail" <!-- IF notificationSettings.notificationemail -->selected<!-- ENDIF notificationSettings.notificationemail -->>[[notifications:notification_and_email]]</option>
									</select>
								</div>
							</div>
	            		</div>
	            	</div>
	            	<!-- END notificationSettings -->

					<div class="row">
	            		<div class="col-xs-12">
	            			<div class="form-group fg-line">
				            	<div class="select">
				            		<label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>
									<select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">
										<!-- BEGIN upvoteNotifFreq -->
										<option value="{upvoteNotifFreq.name}" <!-- IF upvoteNotifFreq.selected -->selected<!-- ENDIF upvoteNotifFreq.selected -->>
											[[user:upvote-notif-freq.{upvoteNotifFreq.name}]]
										</option>
										<!-- END upvoteNotifFreq -->
									</select>
								</div>
							</div>
	            		</div>
	            	</div>

	            	<div class="row">
	            		<div class="col-xs-10">
			            	<div class="form-group fg-line">
				            	<div class="select">
				            		<label for="notification">[[user:notification-sound]]</label>
									<select class="form-control" id="notification" name="notification" data-property="notificationSound">
										<option value="">[[user:no-sound]]</option>
										<!-- BEGIN notificationSound -->
										<option value="{notificationSound.name}" <!-- IF notificationSound.selected -->selected<!-- ENDIF notificationSound.selected -->>{notificationSound.name}</option>
										<!-- END notificationSound -->
									</select>
								</div>
							</div>
						</div>
						<div class="col-xs-2">
							<button type="button" class="btn btn-sm btn-primary" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>
						</div>
					</div>

					<div class="row">
	            		<div class="col-xs-10">
			            	<div class="form-group fg-line">
				            	<div class="select">
				            		<label for="chat-incoming">[[user:incoming-message-sound]]</label>
									<select class="form-control" id="chat-incoming" name="chat-incoming" data-property="incomingChatSound">
										<option value="">[[user:no-sound]]</option>
										<!-- BEGIN incomingChatSound -->
										<option value="{incomingChatSound.name}" <!-- IF incomingChatSound.selected -->selected<!-- ENDIF incomingChatSound.selected -->>{incomingChatSound.name}</option>
										<!-- END incomingChatSound -->
									</select>
								</div>
							</div>
						</div>
						<div class="col-xs-2">
							<button type="button" class="btn btn-sm btn-primary" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>
						</div>
					</div>

					<div class="row">
	            		<div class="col-xs-10">
			            	<div class="form-group fg-line">
				            	<div class="select">
				            		<label for="chat-outgoing">[[user:outgoing-message-sound]]</label>
									<select class="form-control" id="chat-outgoing" name="chat-outgoing" data-property="outgoingChatSound">
										<option value="">[[user:no-sound]]</option>
										<!-- BEGIN outgoingChatSound -->
										<option value="{outgoingChatSound.name}" <!-- IF outgoingChatSound.selected -->selected<!-- ENDIF outgoingChatSound.selected -->>{outgoingChatSound.name}</option>
										<!-- END outgoingChatSound -->
									</select>
								</div>
							</div>
						</div>
						<div class="col-xs-2">
							<button type="button" class="btn btn-sm btn-primary" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>
						</div>
					</div>
	            </div>
	        </div>

			<div class="card">
	            <div class="card-header">
	            	[[global:language]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="form-group fg-line">
		            	<div class="select">
							<select data-property="userLang" class="form-control">
								<!-- BEGIN languages -->
								<option value="{languages.code}" <!-- IF languages.selected -->selected<!-- ENDIF languages.selected -->>{languages.name} ({languages.code})</option>
								<!-- END languages -->
							</select>
						</div>
					</div>
	            </div>
	        </div>

	        <!-- IF isAdmin -->
	        <!-- IF isSelf -->
	        <div class="card">
	            <div class="card-header">
	            	[[user:acp_language]]
	            </div>
	            <div class="card-body card-padding">
	            	<div class="form-group fg-line">
		            	<div class="select">
							<select data-property="acpLang" class="form-control">
								<!-- BEGIN acpLanguages -->
								<option value="{acpLanguages.code}" <!-- IF acpLanguages.selected -->selected<!-- ENDIF acpLanguages.selected -->>{acpLanguages.name} ({acpLanguages.code})</option>
								<!-- END acpLanguages -->
							</select>
						</div>
					</div>
	            </div>
	        </div>
	        <!-- ENDIF isSelf -->
	        <!-- ENDIF isAdmin -->

			<!-- BEGIN customSettings -->
			<div class="card">
				<div class="card-header">
					{customSettings.title}
				</div>
				<div class="card-body card-padding">
					{customSettings.content}
				</div>
			</div>
			<!-- END customSettings -->
		</div>
		<div class="col-xs-12">
			<button id="submitBtn" class="btn btn-primary btn-lg">[[global:save_changes]]</button>
		</div>
	</div>
</div>