/**
 * RegExp to test a string for a full ISO 8601 Date
 * Does not do any sort of date validation, only checks if the string is according to the ISO 8601 spec.
 *  YYYY-MM-DDThh:mm:ss
 *  YYYY-MM-DDThh:mm:ssTZD
 *  YYYY-MM-DDThh:mm:ss.sTZD
 * @see: https://www.w3.org/TR/NOTE-datetime
 * @type {RegExp}
 */
var ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;

var DATE_FORMAT_YYYYMMDD = /^(19|20)\d\d(-)(0[1-9]|1[012])(-)(0[1-9]|[12][0-9]|3[01])$/;

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
var partnerDeadline = getParameterByName('partnerDeadline');
var partnerName = getParameterByName('partnerName');
var partnerVisit = getParameterByName('partnerVisit');

$(document).ready(function () {

  // validation des paramètres cachés optionnels
  if (partnerId && partnerDeadline) {
    // validation des paramètres 'partnerId' et 'partnerDeadline'
    if (partnerId == null || partnerId.length === 0) {
      console.error("Invalid value for parameter \'partnerId\'.")
    } else {
      // définir la valeur du paramètres caché
      $('#partnerId').val(partnerId);
    }

    if (!ISO_8601_FULL.test(partnerDeadline)) {
      console.error("Invalid value for parameter \'partnerDeadline\'. Value must be a ISO 8601 Date (see https://www.w3.org/TR/NOTE-datetime).")
    } else {
      // définir la valeur du paramètres caché
      $('#partnerDeadline').val(partnerDeadline);
    }
  }

  if (partnerName && partnerName.trim().length != 0) {
    $('#partnerName').val(partnerName);
    $('#partnerName').prop('readonly', true);
  }

  if (partnerVisit && partnerVisit.trim().length != 0 && DATE_FORMAT_YYYYMMDD.test(partnerVisit)) {
    $('#partnerVisit').val(partnerVisit);
    $('#partnerVisit').prop('readonly', true);
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
  var phone = getParameterByName('phone');
  if (phone) {
    $('#phone').val(phone);
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


  var shippingOfferForm = $("#shippingOfferForm");
  shippingOfferForm.submit(function (e) {
    e.preventDefault();

    $.ajax({
      url: 'https://us-central1-prod-locomiam-app.cloudfunctions.net/shippingOffers',
      data: $(this).serialize(),
      type: 'POST',
      crossDomain: true,
      async: true,
      beforeSend: function () {
        shippingOfferForm.hide();
        $("#sendingMessage").show();
      },
      success: function (data) {
        $("#sendingMessage").hide();
        $("#successMessage").show();
      },
      error: function (err) {
        $("#sendingMessage").hide();
        $("#errorMessage").show();
      }
    });
  });
});