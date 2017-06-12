// Initialize Firebase
var config = {
  apiKey: "AIzaSyAJKRLAGc_LF1ILyY6ilEVmnpAZR9CpCIA",
  authDomain: "locomiam-shipping-offers.firebaseapp.com",
  databaseURL: "https://locomiam-shipping-offers.firebaseio.com",
  projectId: "locomiam-shipping-offers",
  storageBucket: "locomiam-shipping-offers.appspot.com",
  messagingSenderId: "1041222257094"
};
firebase.initializeApp(config);



/**
 * RegExp to test a string for a full ISO 8601 Date
 * Does not do any sort of date validation, only checks if the string is according to the ISO 8601 spec.
 *  YYYY-MM-DDThh:mm:ss
 *  YYYY-MM-DDThh:mm:ssTZD
 *  YYYY-MM-DDThh:mm:ss.sTZD
 * @see: https://www.w3.org/TR/NOTE-datetime
 * @type {RegExp}
 */
var ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i



// Parse the URL parameter
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var partnerId = getParameterByName('partnerId');
var expireAt = getParameterByName('expireAt');

$(document).ready(function () {

  // gestion de la section cachée
  if (partnerId && expireAt) {

    // si les paramètres 'partnerId' et 'expireAt' sont correctement renseignés, alors on masque la section "#provider"
    if (partnerId == null || partnerId.length === 0) {
      console.error("Invalid value for parameter \'partnerId\'.")
    } else if (!ISO_8601_FULL.test(expireAt)) {
      console.error("Invalid value for parameter \'expireAt\'. Value must be a ISO 8601 Date (see https://www.w3.org/TR/NOTE-datetime).")
    } else {
      // les paramètres sont valides
      $('#provider').hide();
    }
  }

  var firstname = getParameterByName('firstname');
  if (firstname) {
    $('#firstname').val(firstname);
  }
  var lastname = getParameterByName('lastname');
  if (lastname) {
    $('#lastname').val(lastname);
  }
  var email = getParameterByName('email');
  if (email) {
    $('#email').val(email);
  }
  var tel = getParameterByName('tel');
  if (tel) {
    $('#tel').val(tel);
  }
  var address = getParameterByName('address');
  if (address) {
    $('#address').val(address);
  }
  var postal_code = getParameterByName('postal_code');
  if (postal_code) {
    $('#postal_code').val(postal_code);
  }
  var city = getParameterByName('city');
  if (city) {
    $('#city').val(city);
  }

});