<div id="chat-modal" class="chat-modal hide" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-backdrop="none">
	<div class="modal-dialog">
		<div class="modal-content listview lv-message">
			<div class="modal-header">
				<button id="chat-close-btn" type="button" class="close" data-dismiss="modal"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>
				<button type="button" class="close" data-action="maximize"><span aria-hidden="true"><i class="fa fa-expand"></i></span><span class="sr-only">[[modules:chat.maximize]]</span></button>
				<div class="dropdown pull-right">
					<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>
					<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">
						<!-- IF users.length -->
						<li class="dropdown-header">[[modules:chat.in-room]]</li>
						<!-- BEGIN users -->
						<li>
							<a href="{config.relative_path}/uid/{../uid}">
								<!-- IF ../picture -->
								<img class="avatar avatar-sm" component="user/picture" src="{../picture}" itemprop="image" />
								<!-- ELSE -->
								<div class="avatar avatar-sm" component="user/picture" style="background-color: {../icon:bgColor};">{../icon:text}</div><!-- END -->{../username}
							</a>
						</li>
						<!-- END -->
						<li role="separator" class="divider"></li>
						<!-- END -->
						<li class="dropdown-header">[[modules:chat.options]]</li>
						<li>
							<a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>
						</li>
						<li>
							<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>
						</li>
						<li>
							<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>
						</li>
					</ul>
				</div>

				<h4 component="chat/room/name"><!-- IF roomName -->{roomName}<!-- ELSE -->{usernames}<!-- ENDIF roomName --></h4>
			</div>
			<div class="modal-body">
				<ul class="chat-content lv-body" component="chat/messages">
					<!-- BEGIN messages -->
<li component="chat/message" class="lv-item media<!-- IF messages.self --> right<!-- ENDIF messages.self -->" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}">
    <div class="lv-avatar <!-- IF messages.self -->pull-right<!-- ELSE -->pull-left<!-- ENDIF messages.self -->">
        <!-- IF messages.fromUser.picture -->
        <img class="user-avatar" src="{messages.fromUser.picture}">
        <!-- ELSE -->
        <div class="user-icon" style="background-color: {messages.fromUser.icon:bgColor};">{messages.fromUser.icon:text}</div>
        <!-- ENDIF messages.fromUser.picture -->
    </div>
    <!-- IF messages.newSet -->
    <div><small class="ms-date"><i class="fa fa-clock-o"></i> <span class="chat-timestamp timeago" title="{messages.timestampISO}"></span></small></div>
    <!-- ENDIF messages.newSet -->
    <div class="media-body">
        <div component="chat/message/body" class="ms-item">
            <!-- IF messages.edited -->
            <small class="text-muted chat-edit" title="[[global:edited]] {messages.editedISO}"><i class="fa fa-edit"></i></span></small>
            <!-- ENDIF messages.edited -->

            <!-- IF !config.disableChatMessageEditing -->
            <!-- IF messages.self -->
            <div class="chat-controls">
                <button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>
                <button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>
            </div>
            <!-- ENDIF messages.self -->
            <!-- ENDIF !config.disableChatMessageEditing -->
            {messages.content}
        </div>
    </div>
</li>
<!-- END messages -->
				</ul>

				<div component="chat/composer" class="chat-footer">
					<div class="fg-line">
						<textarea component="chat/input" rows="1" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap"></textarea>
					</div>
					<div>
						<button class="btn btn-sm btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>
					</div>
					<span component="chat/message/remaining">{maximumChatMessageLength}</span>
				</div>

			</div>
		</div>
	</div>
</div>