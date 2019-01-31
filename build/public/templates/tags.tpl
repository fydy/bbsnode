<div class="tags">
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

	<!-- IF !tags.length -->
	<div class="alert alert-warning">
		[[tags:no_tags]]
	</div>
	<!-- ELSE -->
	<div class="row">
		<!-- IF displayTagSearch -->
		<div class="col-md-8 col-xs-12">
			<div class="form-group">
				<div class="fg-line">
					<input class="form-control" type="text" id="tag-search" placeholder="[[global:search]]"/>
				</div>
			</div>
		</div>
		<!-- ENDIF displayTagSearch -->
		<div class="col-md-4 col-xs-12">
			<!-- IF loggedIn -->
			<button component="category/post" id="new_topic" class="btn btn-primary pull-right">[[category:new_topic_button]]</button>
			<!-- ELSE -->
			<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary pull-right">[[category:guest-login-post]]</a>
			<!-- ENDIF loggedIn -->
		</div>
	</div>
	<!-- ENDIF !tags.length -->

	<div class="row">
		<div class="col-md-12 clearfix tag-list" data-nextstart="{nextStart}">
			<!-- BEGIN tags -->
<div class="pull-left tag-container">
	<a href="{config.relative_path}/tags/{tags.value}" data-value="{tags.value}"><span class="tag-item" data-tag="{tags.value}" style="<!-- IF tags.color -->color: {tags.color};<!-- ENDIF tags.color --><!-- IF tags.bgColor -->background-color: {tags.bgColor};<!-- ENDIF tags.bgColor -->">{tags.value}</span><span class="tag-topic-count human-readable-number" title="{tags.score}">{tags.score}</span></a>
</div>
<!-- END tags -->
		</div>
	</div>
</div>