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
<div class="row groups">
	<div class="col-lg-4">
		<!-- IF allowGroupCreation -->
		<button class="btn btn-primary" data-action="new"><i class="fa fa-plus"></i> [[groups:new_group]]</button>
		<!-- ENDIF allowGroupCreation -->
	</div>
	<div class="col-lg-8">
		<div class="row">
			<div class="col-xs-5 pull-right form-group">
				<div class="fg-line">
				<select class="form-control" id="search-sort">
					<option value="alpha">[[groups:details.group_name]]</option>
					<option value="count">[[groups:details.member_count]]</option>
					<option value="date">[[groups:details.creation_date]]</option>
				</select>
				</div>
			</div>
			<div class="col-xs-7 text-left pull-right">
				<div class="input-group">
					<div class="fg-line">
						<input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="" id="search-text">
					</div>
					<span id="search-button" class="input-group-addon last"><i class="fa fa-search"></i></span>
				</div>
			</div>
		</div>
	</div>
</div>

<div component="groups/container" class="groups list row" id="groups-list" data-nextstart="{nextStart}">
	<!-- IF groups.length -->
	<!-- BEGIN groups -->
<div class="col-lg-4 col-md-6 col-sm-12" data-slug="{groups.slug}">
    <div class="card">
        <div class="card-header ch-alt">
            <div>{groups.displayName}</div>
        </div>
        <a href="{config.relative_path}/groups/{groups.slug}" class="card-body group-cover list-cover" style="<!-- IF groups.cover:thumb:url -->background-image: url({groups.cover:thumb:url});<!-- ENDIF groups.cover:thumb:url -->">
        </a>
        <div class="card-body card-padding">
            <ul class="members">
                <!-- BEGIN groups.members -->
                <li>
                    <a href="{config.relative_path}/user/{groups.members.userslug}">
                        <!-- IF groups.members.picture -->
                        <img class="user-avatar" src="{groups.members.picture}" alt="{groups.members.username}" title="{groups.members.username}" />
                        <!-- ELSE -->
                        <div class="user-icon" style="background-color: {groups.members.icon:bgColor};">{groups.members.icon:text}</div>
                        <!-- ENDIF groups.members.picture -->
                    </a>
                </li>
                <!-- END groups.members -->
                <!-- IF groups.truncated -->
                <li class="truncated"><i class="fa fa-ellipsis-h"></i></li>
                <!-- ENDIF groups.truncated -->
            </ul>
        </div>
        <div class="card-footer">
            {groups.memberCount} member(s)
        </div>
    </div>
</div>
<!-- END groups -->
	<!-- ELSE -->
	<div class="col-xs-12">
		<div class="alert alert-warning">
		[[groups:no_groups_found]]
		</div>
	</div>
	<!-- ENDIF groups.length -->
</div>
