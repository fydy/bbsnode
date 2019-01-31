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
<div widget-area="header">
	<!-- BEGIN widgets.header -->
	{{widgets.header.html}}
	<!-- END widgets.header -->
</div>
<div class="top">
	<div class="btn-toolbar">
		<div class="pull-left">
			<!-- IF loggedIn -->
			<button component="category/post" id="new_topic" class="btn btn-primary">[[category:new_topic_button]]</button>
			<!-- ELSE -->
			<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
			<!-- ENDIF loggedIn -->
		</div>

		<div component="category/dropdown" class="btn-group pull-right category-dropdown-container bottom-sheet <!-- IF !categories.length -->hidden<!-- ENDIF !categories.length -->">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <!-- IF selectedCategory --><span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}<!-- ELSE -->
        [[unread:all_categories]]<!-- ENDIF selectedCategory --> <span class="caret"></span>
    </button>
    <div component="category-selector-search" class="hidden">
        <input type="text" class="form-control" autocomplete="off">
    </div>
    <ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
        <li role="presentation" class="category">
            <a role="menu-item" href="{config.relative_path}/{allCategoriesUrl}"><i class="fa fa-fw <!-- IF !selectedCategory -->fa-check<!-- ENDIF !selectedCategory -->"></i> [[unread:all_categories]]</a>
        </li>
        <!-- BEGIN categories -->
        <li role="presentation" class="category" data-cid="{categories.cid}" data-parent-cid="{categories.parentCid}" data-name="{categories.name}">
            <a role="menu-item" href="#"><i component="category/select/icon" class="fa fa-fw <!-- IF categories.selected -->fa-check<!-- ENDIF categories.selected -->"></i>{categories.level}<!-- IF categories.icon --><span class="fa-stack" style="{function.generateCategoryBackground}"><i class="fa fa-fw fa-stack-1x {categories.icon}" style="color: {categories.color};"></i></span><!-- ENDIF categories.icon --> {categories.name}</a>
        </li>
        <!-- END categories -->
    </ul>
</div>

		<div class="btn-group pull-right <!-- IF !filters.length -->hidden<!-- ENDIF !filters.length -->">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			{selectedFilter.name} <span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<!-- BEGIN filters -->
				<li role="presentation" class="category">
					<a role="menu-item" href="{config.relative_path}/{filters.url}"><i class="fa fa-fw <!-- IF filters.selected -->fa-check<!-- ENDIF filters.selected -->"></i>{filters.name}</a>
				</li>
				<!-- END filters -->
			</ul>
		</div>

		<div class="btn-group pull-right <!-- IF !terms.length -->hidden<!-- ENDIF !terms.length -->">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			{selectedTerm.name} <span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<!-- BEGIN terms -->
				<li role="presentation" class="category">
					<a role="menu-item" href="{config.relative_path}/{terms.url}"><i class="fa fa-fw <!-- IF terms.selected -->fa-check<!-- ENDIF terms.selected -->"></i>{terms.name}</a>
				</li>
				<!-- END terms -->
			</ul>
		</div>
	</div>

	<hr class="hidden-xs"/>

	<div class="category">
		<!-- IF !topics.length -->
		<div class="alert alert-warning" id="category-no-topics">[[top:no_top_topics]]</div>
		<!-- ENDIF !topics.length -->

		<div class="lv-body" component="category" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}">
	<meta itemprop="itemListOrder" content="descending">
	<!-- BEGIN topics -->
	<div component="category/topic" class="lv-item media row clearfix category-item {function.generateTopicClass}" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement">
		<meta itemprop="name" content="{function.stripTags, title}">
		<!-- IF showSelect -->
        <div class="checkbox pull-left" component="topic/select">
            <label>
                <div class="select"></div>
                <i class="input-helper"></i>
            </label>
        </div>
        <!-- ENDIF showSelect -->

		<div class="pull-left hidden-xs">
			<!-- IF topics.thumb -->
			<img src="{topics.thumb}" class="lv-img" alt="{topics.user.username}" />
			<!-- ELSE -->
        	<a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->">
            	<!-- IF topics.user.picture -->
                <img class="user-avatar" src="{topics.user.picture}" alt="{topics.user.username}" title="{topics.user.username}" />
                <!-- ELSE -->
                <div class="user-icon" style="background-color: {topics.user.icon:bgColor};">{topics.user.icon:text}</div>
                <!-- ENDIF topics.user.picture -->
        	</a>
        	<!-- ENDIF topics.thumb -->
    	</div>
    	<div class="media-body">
    		<div class="lv-title" component="topic/header">
    			<strong><i component="topic/pinned" class="fa fa-thumb-tack <!-- IF !topics.pinned -->hide<!-- ENDIF !topics.pinned -->"></i>
				<i component="topic/locked" class="fa fa-lock <!-- IF !topics.locked -->hide<!-- ENDIF !topics.locked -->"></i></strong>
				<!-- IF !topics.noAnchor -->
				<a href="{config.relative_path}/topic/{topics.slug}<!-- IF topics.bookmark -->/{topics.bookmark}<!-- ENDIF topics.bookmark -->"><span class="topic-title">{topics.title}</span></a>
				<!-- ELSE -->
				<span class="topic-title">{topics.title}</span>
				<!-- ENDIF !topics.noAnchor -->
			</div>

			<!-- IF template.category -->
			<small>
            	[[global:posts]] <span class="human-readable-number" title="{topics.postcount}"></span> | [[global:views]] <span class="human-readable-number" title="{topics.viewcount}"></span> |
            	<!-- IF topics.user.uid -->
				<a href="{config.relative_path}/user/{topics.user.userslug}"><strong>{topics.user.username}</strong></a>
				<!-- ELSE -->
				<strong>[[global:guest]]</strong>
				<!-- ENDIF topics.user.uid -->
				<span class="timeago" title="{topics.timestampISO}"></span>
			</small>
			<!-- ENDIF template.category -->

			<!-- IF !template.category -->
			<small class="lv-small">
				<span class="hidden-xs">[[global:posts]] <span class="human-readable-number" title="{topics.postcount}"></span> | [[global:views]] <span class="human-readable-number" title="{topics.viewcount}"></span> | </span>
				<strong>{topics.user.username}</strong> <a href="{config.relative_path}/category/{topics.category.slug}">[[global:posted_in, {topics.category.name}]] <i class="fa {topics.category.icon}"></i></a> <span class="timeago" title="{topics.timestampISO}"></span>
			</small>
			<!-- ENDIF !template.category -->

			<div class="lv-attrs hidden-xs">
                <!-- IF topics.tags.length -->
				<!-- BEGIN tags -->
				<div class="pull-left tag-container">
					<a href="{config.relative_path}/tags/{topics.tags.value}">
					<span class="tag-item" data-tag="{topics.tags.value}" style="<!-- IF topics.tags.color -->color: {topics.tags.color};<!-- ENDIF topics.tags.color --><!-- IF topics.tags.bgColor -->background-color: {topics.tags.bgColor};<!-- ENDIF topics.tags.bgColor -->">{topics.tags.value}</span><span class="tag-topic-count human-readable-number" title="{topics.tags.score}">{topics.tags.score}</span></a>
				</div>
				<!-- END tags -->
				<!-- ENDIF topics.tags.length -->
            </div>

			<div class="lv-actions actions hidden-xs">
                <ul>
	                <!-- IF topics.unreplied -->
					<li class="lv-small">[[category:no_replies]]</li>
					<!-- ELSE -->
					<!-- IF topics.teaser.index -->
					<li class="lv-small">
						<a href="<!-- IF topics.teaser.user.userslug -->{config.relative_path}/user/{topics.teaser.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.teaser.user.userslug -->">
							<!-- IF topics.teaser.user.picture -->
			                <img class="user-picture" src="{topics.teaser.user.picture}" alt="{topics.teaser.user.username}" title="{topics.teaser.user.username}" />
			                <!-- ELSE -->
			                <div class="user-icon" style="background-color: {topics.teaser.user.icon:bgColor};">{topics.teaser.user.icon:text}</div>
			                <!-- ENDIF topics.teaser.user.picture -->
						</a>
						<a href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}">
							<span class="timeago" title="{topics.teaser.timestampISO}"></span>
						</a>
					</li>
					<!-- ENDIF topics.teaser.index -->
					<!-- IF !topics.teaser.index -->
					<li class="lv-small">[[category:no_replies]]</li>
					<!-- ENDIF !topics.teaser.index -->
					<!-- ENDIF topics.unreplied -->
                </ul>
            </div>
		</div>
	</div>
	<!-- END topics -->
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
</div>