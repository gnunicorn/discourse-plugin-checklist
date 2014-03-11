# name: checklist
# about: checklist support for Discourse
# version: 0.1
# authors: Benjamin Kampmann

register_asset 'javascripts/checklist.js.erb', :server_side
register_asset "javascripts/checklist_ui.js"

register_css <<CSS

span.chcklst-stroked {
	text-decoration: line-through;
}

CSS
