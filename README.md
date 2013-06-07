Active Tags
===========

Description
-----------

Simple Express/Connect middleware to allow using tags to keep track of which nav links should be active in your views or layouts.

Install
-------

`npm install active-tags`

Usage
-----

It works by you pushing tags which are supposed to be "active" for a given route/action in your app code, and then using a helper method in your views.

In your app code:
```javascript
activeTags = require('active-tags');

...

app.use(activeTags());

...

app.get('/', function(req, res) {
  res.pushTag('home');
  res.render('/home');
});

```

The helper method activeOn(tag) returns either the string 'active' or '', depending on if the supplied tag is active or not.

In your layout/view:
```jade
...
a(href='/', class=activeOn('home'))
...
```