<!-- IF roomId -->
<div component="chat/messages" data-roomid="{roomId}">
    <div class="listview lv-message">
        <div component="chat/header" class="lv-header-alt clearfix">
            <div id="ms-menu-trigger">
                <div class="line-wrap">
                    <div class="line top"></div>
                    <div class="line center"></div>
                    <div class="line bottom"></div>
                </div>
            </div>

            <ul class="lv-actions actions">
                <li class="dropdown">
                    <span data-toggle="dropdown" component="chat/controlsToggle" aria-expanded="true"><i class="fa fa-cog"></i></span>
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
                </li>
                <li data-action="pop-out">
                    <i class="fa fa-compress"></i>
                </li>
            </ul>

            <span class="members">
    			[[modules:chat.chatting_with]]:
    			<!-- BEGIN users -->
    			<a href="{config.relative_path}/uid/{../uid}">{../username}</a><!-- IF !@last -->,<!-- END -->
    			<!-- END -->
    		</span>
        </div>

        <ul class="lv-body chat-content">
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

        <div component="chat/composer" class="lv-footer ms-reply">
            <textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="chat-input" <!-- IF !canReply -->readonly<!-- ENDIF !canReply -->></textarea>
            <button data-action="send" <!-- IF !canReply -->disabled<!-- ENDIF !canReply -->><i class="fa fa-send"></i></button>
            <span component="chat/message/remaining">{maximumChatMessageLength}</span>
        </div>
    </div>
</div>
<!-- ELSE -->
<div>
    <div class="listview lv-message">
        <div class="lv-header-alt clearfix">
            <div id="ms-menu-trigger" class="">
                <div class="line-wrap">
                    <div class="line top"></div>
                    <div class="line center"></div>
                    <div class="line bottom"></div>
                </div>
            </div>
        </div>
        <ul class="lv-body chat-content">
        <div class="alert alert-info">
            [[modules:chat.no-messages]]
        </div>
        </ul>
    </div>
</div>
<!-- ENDIF roomId -->