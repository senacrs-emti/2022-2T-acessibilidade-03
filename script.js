var autoscroll = function (offset, poffset, parentNode) {
    var xb = 0;
    var yb = 0;
    if (poffset.isBody == true) {
      var scrollLeft = poffset.scrollLeft;
      var scrollTop = poffset.scrollTop;
      var scrollbarwidth = (document.documentElement.clientWidth - document.body.offsetWidth); //All
      var scrollspeed = (offset.right + xb) - (poffset.right + scrollbarwidth);
      if (scrollspeed > 0) {
        this.scrollLeft(parentNode, scrollLeft + scrollspeed);
      }
      scrollspeed = offset.left - (xb);
      if (scrollspeed < 0) {
        this.scrollLeft(parentNode, scrollLeft + scrollspeed);
      }
      scrollspeed = (offset.bottom + yb) - (poffset.bottom);
      if (scrollspeed > 0) {
        this.scrollTop(parentNode, scrollTop + scrollspeed);
      }
      scrollspeed = offset.top - (yb);
      if (scrollspeed < 0) {
        this.scrollTop(parentNode, scrollTop + scrollspeed);
      }
    } else {
      var scrollLeft = offset.scrollLeft;
      var scrollTop = offset.scrollTop;
      var scrollbarwidth = parentNode.offsetWidth - parentNode.clientWidth; //17
      var scrollbarheight = parentNode.offsetHeight - parentNode.clientHeight; //17
      var scrollspeed = (offset.right + xb) - (poffset.right - scrollbarwidth);
      if (scrollspeed > 0) {
        this.scrollLeft(parentNode, scrollLeft + scrollspeed);
      }
      scrollspeed = offset.left - (xb + poffset.left);
      if (scrollspeed < 0) {
        this.scrollLeft(parentNode, scrollLeft + scrollspeed);
      }
      scrollspeed = (offset.bottom + scrollbarheight + yb) - (poffset.bottom);
      if (scrollspeed > 0) {
        this.scrollTop(parentNode, scrollTop + scrollspeed);
      }
      scrollspeed = offset.top - (yb + poffset.top);
      if (scrollspeed < 0) {
        this.scrollTop(parentNode, scrollTop + scrollspeed);
      }
    }
  };