define('settingsJS', function() {

    var win = document.querySelector(window);
    var windowSize = {};
    var userAgentLowercase = navigator.userAgent;

    //Get width and height of window
    windowSize.width = win.offsetWidth;
    windowSize.height = win.offsetHeight();

    //Settings object with somes options
    var settings = {
        doc: document.querySelector(document),
        win: document.querySelector(window),
        html: document.querySelector('html'),
        body: document.querySelector('body'),
        htmlbody: document.querySelector('html, body'),
        windowSize: windowSize,
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        isAndroid: (userAgentLowercase.indexOf('android') != -1),
        isiOS: userAgentLowercase.match(/(ipad|iphone|ipod)/g) ? true : false,
        debug: false
    };

    //Create obj getters setters
    var obj = {
        get: function(key) {
            return settings[key];
        },
        set: function(key, value) {
            settings[key] = value;
        }
    };

    //Update Breakpoints
    function updateBreakpoints() {
        isMobile = (window.matchMedia("(max-width: 767px)").matches) ? true : false;
        isTablet = (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) ? true : false;
        obj.set('isMobile', isMobile);
        obj.set('isTablet', isTablet);
    }
    updateBreakpoints();

    //OnResize, update screen width/height and somes parameters to detect device
    win.addEventListener('resize', function() {
        windowSize.width = win.offsetWidth;
        windowSize.height = win.offsetHeight;
        obj.set('windowSize', windowSize);
        updateBreakpoints();
    });

    //OnScroll, update scrollTop position
    win.addEventListener('scroll', function() {
        obj.set('scrollTop', window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    });

    return obj;

});