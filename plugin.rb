# name: emoji
# about: emoji support for Discourse
# version: 0.1
# authors: Sam Saffron, Robin Ward

register_asset('javascripts/checklist.js.erb', :server_side)
# register_asset('stylesheets/checklist.css')

# after_initialize do

#   # whitelist emojis so that new user can post emojis
#   Post::white_listed_image_classes << "emoji"

# end

register_css <<CSS

span.chklst-stroked {
	text-decoration: line-through;
}

span.chklst-box:before {
	content: " ";
	border-radius: 4px;
	display: inline-block;
	text-align: center;
	border: 1px solid #AAA;
	color: #999;
	font-size: 1.25em;
	width: 0.75em;
	height: 0.75em;
	line-height: 0.8em;
}

span.chklst-box.checked:before {
	content: "✔";
}
span.chklst-box.ballot:before {
	content: "✘";
}
CSS
