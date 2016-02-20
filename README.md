# jetSet.js

requireJS module getter setter for your application.<br />
The module has two methods, get and set quite simply !<br />
The purpose of jetSet is caches multiples options (selector, screen dimensions, scrollTop) once for better performance and use it on all modules AMD.

```javascript
define('main', ['jetSet'], function(gs) {

    console.log( gs.get('$body') );
    console.log( gs.get('$body').find('#header') );
    console.log( gs.get('scrollTop') );
    console.log( gs.get('windowSize').width );

    settings.set('currentPopin', 'video');
    
});
```

List of all default options in jetSet : windowSize (width, height), scrollTop, isMobile, isAndroid, isiOS, isiPhone, IE8, IE9, iOSVersion, android browser and some useful selector in cache.<br />
This list is an example and can be enrich with selectors, and others options of course.