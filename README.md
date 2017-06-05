# settingsJS

Getter/setter module for your application. The module has two methods, get and set quite simply ! The purpose of settingsJS is caches multiples options (selector, screen dimensions, scrollTop) once for better performance and use it on all modules. Edit syntax to make it compatible with your project ( AMD, Commons.js or ES6).

```javascript
define('main', ['settingsJS'], function(settings) {

    // Set some settings...
    settings.set('debug', true);
    settings.set('container', document.querySelector('#maz-container'));

    //Example of use:
    console.log( settings.get('container') );
    console.log( settings.get('scrollTop') );
    console.log( settings.get('windowSize').width );

});
```

List of some useful default options in settingsJS : windowSize (width, height), scrollTop, isMobile, isTablet, isAndroid, isiOS.. This list is an example and can be enrich with selectors, and others options of course :)