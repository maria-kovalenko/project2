function intlTelSetGeoCode(code) {
    var geofields = document.querySelectorAll("input[name=country]");
    for (var gid = 0; gid < geofields.length; gid++) geofields[gid].value = code;
}

function intlTelSetPhoneCode(code) {
    var phonecode = document.querySelectorAll(".phonecc");
    for (var pid = 0; pid < phonecode.length; pid++) phonecode[pid].value = code;
}

var allthephonefields = document.querySelectorAll("input[name=phone]");
var initialphonecc = 0;
var initialphonegc = false;
for (var atpi = 0; atpi < allthephonefields.length; atpi++) {
    var iti = window.intlTelInput(allthephonefields[atpi], {
        initialCountry: "auto",
        nationalMode: true,
        autoPlaceholder: 'aggressive',
        formatOnDisplay: true,
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        geoIpLookup: function (setgeo) {
            fetch("https://ipinfo.io", {headers: {'Accept': 'application/json'}})
                .then(response => response.json())
                .then(r => setgeo((r && r.country) ? r.country : "ru"));
        }
    });
    var itg = iti.getSelectedCountryData();
    if (itg.dialCode) initialphonecc = itg.dialCode;
    if (itg.iso2) initialphonegc = itg.iso2;
    allthephonefields[atpi].addEventListener("countrychange", function (event) {
        var iti = window.intlTelInputGlobals.getInstance(event.target);
        if (iti != undefined) {
            var geo = iti.getSelectedCountryData();
            intlTelSetPhoneCode(geo.dialCode);
            intlTelSetGeoCode(geo.iso2);
        }
    });
}
if (initialphonecc) intlTelSetPhoneCode(initialphonecc);
if (initialphonegc) intlTelSetGeoCode(initialphonegc);