const events = {
    register: function () {
        debugger
        sendAnalyticsEvent('RegisterButton');
    },
    viewRegistered: function () {
        debugger
        sendAnalyticsEvent('SeeRegistered', );
    }
}

function sendAnalyticsEvent(eventName) {
    gtag('event', eventName);
}