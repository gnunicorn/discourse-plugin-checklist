# Discourse Checklist Plugin

**Update: This project is no longer actively maintained, please see [this project](https://github.com/cpradio/discourse-plugin-checklist) for a working Discourse checklist plugin alternative.**

Adds simple helpers to build (interactive) checklists, rendering "[]", "[*]" and "[x]" into pretty UI parts you can interact with.

If you want to collaboratively edit a todo-list, you might want to check out [the Shared Edit Plugin](https://github.com/ligthyear/discourse-plugin-shared-edit) and install it, too. Both together allow for collaborative todo-list editing.

## Details

Here is a little screenshot of the plugin in action:

![Preview screenshot](https://raw.github.com/ligthyear/discourse-plugin-checklist/master/docs/preview-example.png)

On top, if there are our checklist-items on the post and the current user is able to edit the post, they are interactively able to toggle the checkbox from the post view by clicking the box:

![Interactive before](https://raw.github.com/ligthyear/discourse-plugin-checklist/master/docs/live-click-before.png)

![Interactive waiting](https://raw.github.com/ligthyear/discourse-plugin-checklist/master/docs/live-click-waiting.png)

![Interactive after](https://raw.github.com/ligthyear/discourse-plugin-checklist/master/docs/live-click-after.png)

Which will be recorded as a new version of the post:

![New version](https://raw.github.com/ligthyear/discourse-plugin-checklist/master/docs/new-version.png)

## Installation

Just two easy steps. From your main discourse do:

    cd plugins
    git clone https://github.com/ligthyear/discourse-plugin-checklist.git   # clone the repo here
    cd ..
    RAILS_ENV=production rake assets:precompile

Then restart your discourse and enjoy the fun on ever /user/*/activity-page.

## Changelog:

 * 2014-03-11
   - switching to [font-awesome](http://fontawesome.io) based rendering
   - adding the new `[_]` option
   - adding doc reference to shared-edits plugin
   - fix issue when that updating after `[x]` or `[-]` wasn't possible
   - this unfortunately is backwards incompatible, if checkboxes don't show up anymore, you need to re-save them to the database.

 * 2014-03-05
   - initial version with prettified rendering
   - allow interactive box-clicking updates

## TODO

(in order of importance)

 * allow easy item "sorting" if the entries are in a list

### other Limitations:

 * While updating one item, you can't update another
 * If you want to make multiple changes it creates multiple versions
 * you can only toggle the default type

## Authors:
Benjamin Kampmann <me @ create-build-execute . com>

## License (BSD):
Copyright (c) 2014, Benjamin Kampmann
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
