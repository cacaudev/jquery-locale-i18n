var set_locale_to = function (locale) {
    if (locale)
        jQuery.i18n().locale = locale;
    $('body').i18n();
};

jQuery(function ($) {
    jQuery.i18n().load({
        'en': './i18n/en.json',
        'pt': './i18n/pt.json'
    }).done(function () {
        console.log('Languages loaded!');
        // url(?locale) =>  takes the value of the locale GET parameter

        // Load page with the browser locale
        set_locale_to(url('?locale'));

        // supports HTML5 History/State APIs (persist locale)
        History.Adapter.bind(window, 'statechange', function () {
            set_locale_to(url('?locale'));
        });

        // Change the locale upon click event on button
        jQuery('.switch-locale').on('click', 'a', function (e) {
            e.preventDefault();
            //jQuery.i18n().locale = $(this).data('locale');
            History.pushState(null, null, "?locale=" + $(this).data('locale'));
        });
    });
});