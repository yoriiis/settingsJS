define('jetSet', function() {

    var $win = $(window),
        doc = document,
        $html = $('html'),
        windowSize = {},
        scrollTop = 0,
        isMobile = null,
        isAndroid = null,
        isiOS = null,
        isiPhone = null,
        isIE8 = null,
        isIE9 = null,
        isChrome = null,
        regexChromeVersion = /\bchrome\/(\d+\.\d+)/,
        chromeVersion = null,
        isOldAndroidBrower = false,
        iosVersion = null,
        ua = navigator.userAgent;

    //Set value of all variables
    windowSize.width = $win.outerWidth();
    windowSize.height = $win.outerHeight();
    scrollTop = $win.scrollTop();
    isMobile = ($('#project-mq').css('visibility') == 'visible') ? true : false;
    isAndroid = (ua.indexOf('Android') != -1) || (ua.indexOf('android') != -1);
    isiOS = ua.match(/(iPad|iPhone|iPod)/g) ? true : false;
    isiPhone = ua.match(/(iPhone)/g) ? true : false;
    isIE8 = (typeof window.addEventListener == 'undefined') ? true : false;
    isIE9 = ((typeof doc.documentMode != 'undefined') && (doc.documentMode == 9)) ? true : false;
    isChrome = (ua.indexOf('Chrome') != -1) || (ua.indexOf('chrome') != -1);
    iosVersion = parseInt(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(ua) || [0,''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || null;

    //Use Mordernizr to detect touch events
    if (typeof Modernizr != 'undefined' && Modernizr.touchevents) {
        if(isChrome){
            chromeVersion = parseFloat(regexChromeVersion.exec(ua.toLowerCase())[1]);
        }
        //Android browser is unfortunately undetectable, so under version 23 of Chrome, considering it's an old Android browser
        if (isAndroid && (!isChrome || chromeVersion < 23)) {
            isOldAndroidBrower = true;
        }
    }

    //Settings object with all options
    var settings = {
        $doc: $(doc),
        $win: $win,
        $html: $html,
        $body: $('body'),
        $htmlbody: $('html, body'),
        $container: $('#container'),
        windowSize: windowSize,
        scrollTop: scrollTop,
        isMobile: isMobile,
        isAndroid: isAndroid,
        isiOS: isiOS,
        isiPhone: isiPhone,
        isIE8: isIE8,
        isIE9: isIE9,
        iosVersion: iosVersion,
        isOldAndroidBrower: isOldAndroidBrower,
        debug: true
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

    //OnResize, update screen width/height
    function windowResize() {
        windowSize.width = $win.outerWidth();
        windowSize.height = $win.outerHeight();
        isMobile = ($('#project-mq').css('visibility') == 'visible') ? true : false;
        obj.set('windowSize', windowSize);
        obj.set('isMobile', isMobile);
    }

    //OnScroll, update scrollTop
    function windowScroll() {
        obj.set('scrollTop', $win.scrollTop());
    }
    
    //Listen resize and scroll events
    $win.on('resize', windowResize);
    $win.on('scroll', windowScroll);

    return obj;
    
});