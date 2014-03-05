Discourse.PostView.reopen({
  createChecklistUI: function($post) {

    if (!this.post.can_edit) { return };

    var boxes = $post.find(".chklst-box"),
        view = this;

    boxes.each(function(idx, val) {
      $(val).click(function(ev) {
        var elem = $(ev.currentTarget),
            new_value = (elem.hasClass("checked") || elem.hasClass("ballot") || elem.hasClass("stroked")) ? "[ ]": "[*]",
            poller = Discourse.Post.load(view.post.get("id"));

        console.log(new_value);

        poller.then(function(result) {
          console.log(result);
          var nth = -1;
          var new_raw = result.raw.replace(/\[([ -x*]?)\]/g, function(match){
              nth += 1;
              if (nth === idx) {
                return new_value;
              } else {
                return match;
              }
            });
          view.post.setProperties({
            raw: new_raw,
            editReason: "change checkmark"
          });
          view.post.save(function(result) {
            console.log(result);
            view.post.updateFromPost(result);
          });
        });
        elem.after('<i class="fa fa-spinner fa-spin"></i>');
        elem.hide();
      });
    });

    // confirm the feature is enabled by showing the click-ability
    boxes.css({"cursor": "pointer"});

  }.on('postViewInserted'),

  destroyChecklistUI: function() {
  }.on('willClearRender')
});