$(function() {
  var Pagination = {
    enhance: function() {
      this._buildUi();
      this._bindEvents();
    },

    _buildUi: function() {
      this._prevLink = document.getElementById("prev");
      this._nextLink = document.getElementById("next");
    },

    _bindEvents: function() {
      $(document).keydown(this._handleKeydown.bind(this));
    },

    _handleKeydown: function(event) {
      switch (event.keyCode) {
        case this._leftArrow:
          this._prev();
          break;
        case this._rightArrow:
          this._next();
          break;
      }
    },

    _leftArrow: 37,

    _rightArrow:  39,

    _prev: function() {
      if (this._prevLink) {
        this._prevLink.click();
      }
    },

    _next: function() {
      if (this._nextLink) {
        this._nextLink.click();
      }
    },
  }

  Pagination.enhance();
});
