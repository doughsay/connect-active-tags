module.exports = function() {
  return function(req, res, next) {
    var active_tags;
    active_tags = [];
    res.pushTag = function(tag) {
      return active_tags.push(tag);
    };
    res.locals.activeOn = function(tag) {
      if ([].indexOf.call(active_tags, tag) >= 0) {
        return 'active';
      } else {
        return null;
      }
    };
    return next();
  };
};