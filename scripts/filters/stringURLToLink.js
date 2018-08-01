app.filter("stringURLToLink", function($sce) {
    return function(input, customName) {
        if (!input)
            return "";
        if (!customName) {
            customName = input;
        }
        return $sce.trustAsHtml(`<a href="${input}">${customName}</a>`);
    }
});