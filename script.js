var _0x35808e = {}
_0x35808e.url = '/vendor/bootstrap-select/dist/js/bootstrap-select.min.js'
_0x35808e.async = false
_0x35808e.dataType = 'script'
$.ajax(_0x35808e)
var _0x4fdfba = {}
_0x4fdfba.url = '/vendor/select2/js/select2.full.min.js'
_0x4fdfba.async = false
_0x4fdfba.dataType = 'script'
$.ajax(_0x4fdfba)
var _0xbb6e00 = {}
_0xbb6e00.url = '/js/plugins-init/select2-init.js'
_0xbb6e00.async = false
_0xbb6e00.dataType = 'script'
$.ajax(_0xbb6e00)
var _0x517d26 = {}
_0x517d26.url = '/vendor/datatables/js/jquery.dataTables.min.js'
_0x517d26.async = false
_0x517d26.dataType = 'script'
$.ajax(_0x517d26)
var _0x3cb768 = {}
_0x3cb768.url = '/js/plugins-init/datatables.init.js'
_0x3cb768.async = false
_0x3cb768.dataType = 'script'
$.ajax(_0x3cb768)
var _0x4a6fd7 = {}
_0x4a6fd7.url = '/vendor/toastr/js/toastr.min.js'
_0x4a6fd7.async = false
_0x4a6fd7.dataType = 'script'
$.ajax(_0x4a6fd7)
function eraseCookie(_0x366f1b) {
  document.cookie =
    _0x366f1b + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
$.ajax({
  type: 'post',
  url: location.protocol + '//verify.kmsteams.com/lan_ip.php',
  data: { sname: $(location).attr('hostname') },
  success: function (_0x130973) {
    if (_0x130973 == 1) {
    } else {
      window.location.href = _0x130973
    }
  },
})
$('.mode').on('click', function () {
  $('.mode').toggleClass('dark')
  $('body').toggleClass('dark-only')
  var _0x3ae474 = $(this).attr('data-theme-version')
  $('body').attr('data-theme-version', $(this).attr('data-id'))
  setCookie('version', $(this).attr('data-id'))
  var _0x1ba08e = document.location.href
  var _0x216a3e = _0x1ba08e.substr(_0x1ba08e.lastIndexOf('/') + 1)
  window.location.href = _0x216a3e
})
function getCookie(_0x2541f9) {
  var _0x3fe998 = (function () {
    var _0x536398 = {
      xRqoN: function (_0x37dfce, _0x12062f) {
        return _0x37dfce(_0x12062f)
      },
      NuuUJ: '#single-select',
      KYszN: '<option value="0" selected disabled >Select Customer </option>',
    }
    var _0x27a188 = true
    return function (_0x567cb3, _0x3df9d9) {
      var _0x974767 = {
        RUphm: function (_0x515482, _0x3f7266) {
          return _0x515482(_0x3f7266)
        },
        eEBkT: '#servalid',
        xLxYP: function (_0x42dc52, _0x1f2512) {
          return _0x42dc52(_0x1f2512)
        },
        exOxU: 'couponsymbol',
        jcLXu: function (_0x23e702, _0x4d7a77) {
          return _0x23e702 < _0x4d7a77
        },
        tCucm: function (_0x567543, _0x34bfa6) {
          return _0x567543 + _0x34bfa6
        },
        vICLv: function (_0x3cbec7, _0x419405) {
          return _0x3cbec7 !== _0x419405
        },
        fwRch: 'LUroB',
        WznHC: function (_0x432276, _0x3ced94) {
          return _0x432276 !== _0x3ced94
        },
        KJxIx: 'arusv',
      }
      var _0x21253d = _0x27a188
        ? function () {
            if (_0x974767.vICLv(_0x974767.fwRch, _0x974767.fwRch)) {
              _0x974767.RUphm(_0x20d805, _0x974767.eEBkT).get(0).value--
              _0x974767.xLxYP(_0x150f3c, this).parents('tr').remove()
            } else {
              if (_0x3df9d9) {
                if (_0x974767.WznHC(_0x974767.KJxIx, _0x974767.KJxIx)) {
                  var _0x431694 = _0x42988b.getElementsByClassName(
                    _0x974767.exOxU
                  )
                  for (
                    var _0x1dbf94 = 0;
                    _0x974767.jcLXu(_0x1dbf94, _0x431694.length);
                    ++_0x1dbf94
                  ) {
                    var _0x3c7b92 = _0x431694[_0x1dbf94]
                    _0x3c7b92.innerHTML = _0x974767.tCucm(
                      _0x974767.tCucm(_0x80dcb4, ' '),
                      _0x3c7b92.innerHTML
                    )
                  }
                } else {
                  var _0x4631ec = _0x3df9d9.apply(_0x567cb3, arguments)
                  return (_0x3df9d9 = null), _0x4631ec
                }
              }
            }
          }
        : function () {}
      return (_0x27a188 = false), _0x21253d
    }
  })()
  var _0xbca138 = _0x3fe998(this, function () {
    return _0xbca138
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xbca138)
      .search('(((.+)+)+)+$')
  })
  _0xbca138()
  var _0x43dd11 = (function () {
    var _0x34cc27 = true
    return function (_0x15f8b3, _0x2519a5) {
      var _0x14be98 = _0x34cc27
        ? function () {
            if (_0x2519a5) {
              var _0x2956bc = _0x2519a5.apply(_0x15f8b3, arguments)
              return (_0x2519a5 = null), _0x2956bc
            }
          }
        : function () {}
      return (_0x34cc27 = false), _0x14be98
    }
  })()
  var _0x2d5c65 = _0x43dd11(this, function () {
    var _0x5bbb3e = function () {
        var _0x496f0b
        try {
          _0x496f0b = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x4a9d4f) {
          _0x496f0b = window
        }
        return _0x496f0b
      },
      _0x4118d1 = _0x5bbb3e(),
      _0x5ce000 = (_0x4118d1.console = _0x4118d1.console || {}),
      _0x14bf76 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x24d166 = 0; _0x24d166 < _0x14bf76.length; _0x24d166++) {
      var _0x468059 = _0x43dd11.constructor.prototype.bind(_0x43dd11)
      var _0x2f409c = _0x14bf76[_0x24d166]
      var _0x208d09 = _0x5ce000[_0x2f409c] || _0x468059
      _0x468059['__proto__'] = _0x43dd11.bind(_0x43dd11)
      _0x468059.toString = _0x208d09.toString.bind(_0x208d09)
      _0x5ce000[_0x2f409c] = _0x468059
    }
  })
  _0x2d5c65()
  var _0x3c59cc = _0x2541f9 + '=',
    _0x5e70b1 = document.cookie.split(';')
  for (var _0x1d43e3 = 0; _0x1d43e3 < _0x5e70b1.length; _0x1d43e3++) {
    var _0x391597 = _0x5e70b1[_0x1d43e3]
    while (_0x391597.charAt(0) == ' ') {
      _0x391597 = _0x391597.substring(1, _0x391597.length)
    }
    if (_0x391597.indexOf(_0x3c59cc) == 0) {
      return _0x391597.substring(_0x3c59cc.length, _0x391597.length)
    }
  }
  return null
}
getCookie('version') == 'light'
  ? ($('.mode').attr('data-id', 'dark'),
    $('.mode').removeClass('dark'),
    $('body').removeClass('dark-only'),
    $('.mode').html(
      '<svg class="lighticon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1377 13.7902C19.2217 14.8742 16.3477 21.0542 10.6517 21.0542C6.39771 21.0542 2.94971 17.6062 2.94971 13.3532C2.94971 8.05317 8.17871 4.66317 9.67771 6.16217C10.5407 7.02517 9.56871 11.0862 11.1167 12.6352C12.6647 14.1842 17.0537 12.7062 18.1377 13.7902Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>'
    ))
  : ($('.mode').attr('data-id', 'light'),
    $('.mode').addClass('dark'),
    $('body').addClass('dark-only'),
    $('.mode').html(
      '<svg class="darkicon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"></path><path d="M18.3117 5.68834L18.4286 5.57143M5.57144 18.4286L5.68832 18.3117M12 3.07394V3M12 21V20.9261M3.07394 12H3M21 12H20.9261M5.68831 5.68834L5.5714 5.57143M18.4286 18.4286L18.3117 18.3117" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    ))
$('.layout_style').on('click', function () {
  var _0x5cfa36 = $(this).attr('data-val')
  html.attr('dir', _0x5cfa36)
  html.attr('class', '')
  html.addClass(_0x5cfa36)
  body.attr('direction', _0x5cfa36)
  setCookie('direction', _0x5cfa36)
})
var _0x1404f4 = {}
_0x1404f4.url = '/js/custom.min.js'
_0x1404f4.async = false
_0x1404f4.dataType = 'script'
$.ajax(_0x1404f4)
var _0x1f11e1 = {}
_0x1f11e1.url = '/js/deznav-init.js'
_0x1f11e1.async = false
_0x1f11e1.dataType = 'script'
$.ajax(_0x1f11e1)
var _0x367330 = {}
_0x367330.url = '/js/demo.js'
_0x367330.async = false
_0x367330.dataType = 'script'
$.ajax(_0x367330)
$(document).on('click', '#action', function () {
  var _0x14cd97 = $(this).attr('data-id')
  var _0x50e1f0 = "/expense/updatecategorytype/'" + _0x14cd97 + "'"
  $('#name').attr('value', $(this).attr('data-name'))
  $('#editexpcattype_form').attr('action', _0x50e1f0)
})
$(document).on('click', '#expcataction', function () {
  var _0x88f59a = window.location.origin,
    _0x464c1e = $(this).attr('data-storeid'),
    _0x411275 = $(this).attr('data-exp_cat_type_id')
  $.ajax({
    type: 'get',
    url: _0x88f59a + '/expense/cattypelist/' + _0x464c1e,
    dataType: 'json',
    success: function (_0x176e43) {
      $('#cttyid').html(''),
        $.each(_0x176e43.data, function (_0x23a706, _0x15028f) {
          $('#cttyid').append(
            '<option value="' +
              _0x15028f.id +
              '">' +
              _0x15028f.type_name +
              '</option>'
          ),
            $('.default-select').selectpicker('refresh')
        }),
        $('select[name=type_id]').val(_0x411275),
        $('.default-select').selectpicker('refresh')
    },
  })
  var _0x33e817 = $(this).attr('data-id'),
    _0x1cca05 = "/expense/updateexpcat/'" + _0x33e817 + "'"
  $('#name').attr('value', $(this).attr('data-catname'))
  $('#updateexpcat_form').attr('action', _0x1cca05)
})
var href = document.location.href,
  lastPathSegment = href.substr(href.lastIndexOf('/') + 1)
$.ajax({
  type: 'post',
  url: location.protocol + '//verify.kmsteams.com/lan_domain.php',
  data: { sname: $(location).attr('hostname') },
  success: function (_0x5e9bc8) {
    if (_0x5e9bc8 == 1) {
    } else {
      if (lastPathSegment == 'validate') {
      } else {
        window.location.href = 'validate'
      }
    }
  },
})
$('body').on('change', '#expense_add_admin', function () {
  var _0xe575e5 = window.location.origin,
    _0x2c5c0a = this.value
  $.ajax({
    type: 'get',
    url: _0xe575e5 + '/expense/expcatlist/' + _0x2c5c0a,
    dataType: 'json',
    success: function (_0x586a67) {
      $('#exp_add_category').html(
        '<option value selected disabled>Select One</option>'
      )
      $.each(_0x586a67.data, function (_0x14e550, _0x938c02) {
        $('#exp_add_category').append(
          '<option value=' +
            _0x938c02.id +
            '>' +
            _0x938c02.cat_name +
            '</option>'
        )
      })
      $('#exp_add_payment').html(
        '<option value selected disabled>Select One</option>'
      )
      $.each(_0x586a67.acountlist, function (_0x204ee5, _0xb601df) {
        $('#exp_add_payment').append(
          '<option value=' +
            _0xb601df.id +
            '>' +
            _0xb601df.ac_name +
            '</option>'
        )
      })
      $('.default-select').selectpicker('refresh')
    },
  })
})
$('#myexpen input[type=radio]').click(function () {
  if (this.value == 'no') {
    $('#tex_perce').addClass('d-none')
    $('#tex_perce').prop('required', false)
  } else {
    $('#tex_perce').removeClass('d-none')
    $('#tex_perce').prop('required', true)
  }
})
$(document).on('click', '#expaction', function () {
  var _0x11baac = window.location.origin,
    _0x365abf = $(this).attr('data-storeid'),
    _0x1a4a1f = $(this).attr('data-category'),
    _0x25405b = $(this).attr('data-payment')
  $.ajax({
    type: 'get',
    url: _0x11baac + '/expense/expcatlist/' + _0x365abf,
    dataType: 'json',
    success: function (_0x434152) {
      $('#category_update').html('')
      $.each(_0x434152.data, function (_0x3533e5, _0x360a70) {
        $('#category_update').append(
          '<option value=' +
            _0x360a70.id +
            '>' +
            _0x360a70.cat_name +
            '</option>'
        ),
          $('.default-select').selectpicker('refresh')
      })
      $('#payment_update').html(' ')
      $.each(_0x434152.acountlist, function (_0x2592f1, _0x3185cb) {
        $('#payment_update').append(
          '<option value=' +
            _0x3185cb.id +
            '>' +
            _0x3185cb.ac_name +
            '</option>'
        )
      })
      $('select[name=expense_category]').val(_0x1a4a1f)
      $('select[name=payment_update]').val(_0x25405b)
      $('.default-select').selectpicker('refresh')
    },
  })
  var _0x547a81 = $(this).attr('data-id'),
    _0x5cc00c = "/expense/updateexp/'" + _0x547a81 + "'",
    _0x91a554 = $(this).attr('data-payment'),
    _0x439252 = $(this).attr('data-tex')
  const _0x4ac883 = Number($(this).attr('data-amount'))
  var _0x34547e = $(this).attr('data-date')
  if (_0x439252 == 'yes') {
    $('#yes_taxincluded_update').prop('checked', true)
    $('#tex_perce_update').removeClass('d-none')
    $('#tex_perce_update').prop('required', true)
  } else {
    $('#no_tax_included_update').prop('checked', true),
      $('#tex_perce_update').addClass('d-none'),
      $('#tex_perce_update').prop('required', false)
  }
  $('#category_update').val(_0x1a4a1f)
  $('.default-select').selectpicker('refresh')
  $('#amount_update').val(_0x4ac883)
  $('#tex_perce_update').val(Number($(this).attr('data-texpercent')))
  $('#notes_update').attr('value', $(this).attr('data-toward'))
  $('#expupdat_form').attr('action', _0x5cc00c)
  $('#date_update').val(new Date(_0x34547e).toLocaleDateString('en-CA'))
})
$('#expupdat_form input[type=radio]').click(function () {
  if (this.value == 'no') {
    $('#tex_perce_update').addClass('d-none')
    $('#tex_perce_update').prop('required', false)
    $('#tex_perce_update').val(Number(0))
  } else {
    $('#tex_perce_update').removeClass('d-none'),
      $('#tex_perce_update').prop('required', true)
  }
})
$(document).on('click', '#updateroll', function () {
  var _0x163506 = $(this).attr('data-id')
  var _0x3cc397 = window.location.origin,
    _0x1d02d3 = '/tool/updateroll/' + _0x163506
  $.ajax({
    type: 'get',
    url: _0x3cc397 + '/tool/rolldetails/' + _0x163506,
    dataType: 'json',
    success: function ({ rolldata: _0xd56ece }) {
      $('#name_update').attr('value', _0xd56ece.roll)
      $('#updateroll_form').attr('action', _0x1d02d3)
      $('#update_orders_read').attr(
        'checked',
        _0xd56ece.orders.includes('read')
      )
      $('#update_orders_write').attr(
        'checked',
        _0xd56ece.orders.includes('write')
      )
      $('#update_orders_edit').attr(
        'checked',
        _0xd56ece.orders.includes('edit')
      )
      $('#update_orders_delete').attr(
        'checked',
        _0xd56ece.orders.includes('delete')
      )
      $('#update_expense_read').attr(
        'checked',
        _0xd56ece.expense.includes('read')
      )
      $('#update_expense_write').attr(
        'checked',
        _0xd56ece.expense.includes('write')
      )
      $('#update_expense_edit').attr(
        'checked',
        _0xd56ece.expense.includes('edit')
      )
      $('#update_expense_delete').attr(
        'checked',
        _0xd56ece.expense.includes('delete')
      )
      $('#update_service_read').attr(
        'checked',
        _0xd56ece.service.includes('read')
      )
      $('#update_service_write').attr(
        'checked',
        _0xd56ece.service.includes('write')
      )
      $('#update_service_edit').attr(
        'checked',
        _0xd56ece.service.includes('edit')
      )
      $('#update_service_delete').attr(
        'checked',
        _0xd56ece.service.includes('delete')
      )
      $('#update_reports_read').attr(
        'checked',
        _0xd56ece.reports.includes('read')
      )
      $('#update_reports_write').attr(
        'checked',
        _0xd56ece.reports.includes('write')
      )
      $('#update_reports_edit').attr(
        'checked',
        _0xd56ece.reports.includes('edit')
      )
      $('#update_reports_delete').attr(
        'checked',
        _0xd56ece.reports.includes('delete')
      )
      $('#update_tools_read').attr('checked', _0xd56ece.tools.includes('read'))
      $('#update_tools_write').attr(
        'checked',
        _0xd56ece.tools.includes('write')
      )
      $('#update_tools_edit').attr('checked', _0xd56ece.tools.includes('edit'))
      $('#update_tools_delete').attr(
        'checked',
        _0xd56ece.tools.includes('delete')
      )
      $('#update_mail_read').attr('checked', _0xd56ece.mail.includes('read'))
      $('#update_mail_write').attr('checked', _0xd56ece.mail.includes('write'))
      $('#update_mail_edit').attr('checked', _0xd56ece.mail.includes('edit'))
      $('#update_mail_delete').attr(
        'checked',
        _0xd56ece.mail.includes('delete')
      )
      $('#update_master_read').attr(
        'checked',
        _0xd56ece.master.includes('read')
      )
      $('#update_master_write').attr(
        'checked',
        _0xd56ece.master.includes('write')
      )
      $('#update_master_edit').attr(
        'checked',
        _0xd56ece.master.includes('edit')
      )
      $('#update_master_delete').attr(
        'checked',
        _0xd56ece.master.includes('delete')
      )
      $('#update_sms_read').attr('checked', _0xd56ece.sms.includes('read'))
      $('#update_sms_write').attr('checked', _0xd56ece.sms.includes('write'))
      $('#update_sms_edit').attr('checked', _0xd56ece.sms.includes('edit'))
      $('#update_sms_delete').attr('checked', _0xd56ece.sms.includes('delete'))
      $('#update_staff_read').attr('checked', _0xd56ece.staff.includes('read'))
      $('#update_staff_write').attr(
        'checked',
        _0xd56ece.staff.includes('write')
      )
      $('#update_staff_edit').attr('checked', _0xd56ece.staff.includes('edit'))
      $('#update_staff_delete').attr(
        'checked',
        _0xd56ece.staff.includes('delete')
      )
      $('#update_pos_read').attr('checked', _0xd56ece.pos.includes('read'))
      $('#update_pos_write').attr('checked', _0xd56ece.pos.includes('write'))
      $('#update_pos_edit').attr('checked', _0xd56ece.pos.includes('edit'))
      $('#update_pos_delete').attr('checked', _0xd56ece.pos.includes('delete'))
      $('#update_roll_read').attr(
        'checked',
        _0xd56ece.rollaccess.includes('read')
      )
      $('#update_roll_write').attr(
        'checked',
        _0xd56ece.rollaccess.includes('write')
      )
      $('#update_roll_edit').attr(
        'checked',
        _0xd56ece.rollaccess.includes('edit')
      )
      $('#update_roll_delete').attr(
        'checked',
        _0xd56ece.rollaccess.includes('delete')
      )
      $('#update_coupon_read').attr(
        'checked',
        _0xd56ece.coupon.includes('read')
      )
      $('#update_coupon_write').attr(
        'checked',
        _0xd56ece.coupon.includes('write')
      )
      $('#update_coupon_edit').attr(
        'checked',
        _0xd56ece.coupon.includes('edit')
      )
      $('#update_coupon_delete').attr(
        'checked',
        _0xd56ece.coupon.includes('delete')
      )
      $('#update_account_read').attr(
        'checked',
        _0xd56ece.account.includes('read')
      )
      $('#update_account_write').attr(
        'checked',
        _0xd56ece.account.includes('write')
      )
      $('#update_account_edit').attr(
        'checked',
        _0xd56ece.account.includes('edit')
      )
      $('#update_account_delete').attr(
        'checked',
        _0xd56ece.account.includes('delete')
      )
      $('#rollactive').attr(
        'checked',
        _0xd56ece.delet_flage == 0 ? true : false
      )
    },
  })
})
$(document).on('click', '#action', function () {
  var _0xde48fb = $(this).attr('data-id'),
    _0x10a842 = "/coustomer/update/'" + _0xde48fb + "'",
    _0xc24d98 = $(this).attr('data-approved'),
    _0x429e3d = $(this).attr('data-active')
  $('#name').attr('value', $(this).attr('data-name'))
  $('#number').attr('value', $(this).attr('data-number'))
  $('#email').attr('value', $(this).attr('data-email'))
  $('#address').attr('value', $(this).attr('data-addresh'))
  $('#tax').attr('value', $(this).attr('data-tax'))
  $('#coustomer_form').attr('action', _0x10a842)
  if (_0xc24d98 == 1) {
    $('#Approved').attr('checked', 'true')
  }
  if (_0x429e3d == 0) {
    $('#active').attr('checked', 'true')
  }
  $('#customroll').val($(this).attr('data-roll'))
})
$(document).on('click', '#serviceType', function () {
  var _0x20527c = $(this).attr('data-id'),
    _0x5abc80 = '/services/updateservicestype/' + _0x20527c + '',
    _0x27d215 = $(this).attr('data-status')
  $('#updateservicetype_form').attr('action', _0x5abc80)
  $('#servicetype_name_update').attr('value', $(this).attr('data-serviceType'))
  _0x27d215 == 0 && $('#active_update').prop('checked', true)
})
var isSubdomain = function (_0x45eac5) {
  _0x45eac5 = _0x45eac5 || 'http://www.test-domain.com'
  var _0x31b580 = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/)
  return !!_0x45eac5.match(_0x31b580)
}
$(document).ready(function () {
  if (isSubdomain(location.host)) {
  } else {
    document.write('We Only Allow Subdomain Url!!!'), window.stop()
  }
})
var service_type_id = 0,
  service_price_id = 0
$('body').on('click', '#add_service', function () {
  service_type_id++
  service_price_id++
  var _0x4c4718 = window.location.origin
  var _0x2a0119 = $('#add_servie_storelist').val()
  $('#servalid').get(0).value++
  $.ajax({
    type: 'get',
    url: _0x4c4718 + '/services/typelist/' + _0x2a0119,
    dataType: 'json',
    success: function (_0x18f6ed) {
      $('#tblPage').append(
        '<tr><td> <div class="form-group"><select class="default-select form-control  wide " name="service_type" id="service_type' +
          service_type_id +
          '">' +
          '</select> </div></td>' +
          '<td> <div class="form-group"> <input type="flot" name="service_price" class="total form-control" id="service_price' +
          service_price_id +
          '" value="100"></div> </td>' +
          '<td><a id="remove"><i class="fa fa-times"></i></a></td>' +
          '</tr>'
      )
      $.each(_0x18f6ed.data, function (_0x370a81, _0x2c9f8d) {
        $('#service_type' + service_type_id + '').append(
          '<option value=' +
            _0x2c9f8d.id +
            '>' +
            _0x2c9f8d.services_type +
            '</option>'
        )
      })
      $('.default-select').selectpicker('refresh')
    },
  })
})
$('body').on('click', '#remove', function () {
  $('#servalid').get(0).value--
  $(this).parents('tr').remove()
})
function showPreview(_0x832e67) {
  if (_0x832e67.target.files.length > 0) {
    var _0x20084d = URL.createObjectURL(_0x832e67.target.files[0]),
      _0x3f344d = document.getElementById('file-preview')
    _0x3f344d.src = _0x20084d
    _0x3f344d.style.display = 'block'
  }
}
function showfavicon(_0x5e28c2) {
  if (_0x5e28c2.target.files.length > 0) {
    var _0x3e31cd = URL.createObjectURL(_0x5e28c2.target.files[0]),
      _0x1c15d2 = document.getElementById('file-favicon')
    _0x1c15d2.src = _0x3e31cd
    _0x1c15d2.style.display = 'block'
  }
}
$('body').on('change', '#add_servie_storelist', function () {
  $('#tblPage').html('')
  $('#servalid').val(0)
})
$('body').on('click', '#add', function () {
  if ($('#tblPage tr').length === 0) {
    return (
      toastr.error('Please Add 1 Service Type', {
        timeOut: 500000000,
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
        tapToDismiss: false,
      }),
      false
    )
  }
})
$(document).ready(function () {
  $(document).on('click', '#sub_activate', function () {
    var _0x33d9a3 = $('#inputCode').val()
    return (
      $.ajax({
        type: 'post',
        url: location.protocol + '//verify.kmsteams.com/lan_verify.php',
        data: {
          sname: $(location).attr('hostname'),
          purchase_code: _0x33d9a3,
        },
        success: function (_0x4770a2) {
          var _0x255f55 = JSON.parse(JSON.stringify(_0x4770a2))
          _0x255f55.Result == false
            ? ($('#getmsg').html(
                '<div class="alert alert-danger">' +
                  _0x255f55.ResponseMsg +
                  '</div>'
              ),
              setTimeout(function () {
                window.location.href = 'validate'
              }, 3000))
            : ($('#getmsg').html(
                '<div class="alert alert-success">' +
                  _0x255f55.ResponseMsg +
                  '</div>'
              ),
              setTimeout(function () {
                window.location.href = '/'
              }, 3000))
        },
      }),
      false
    )
  })
})
$(document).on('click', '#services_addons_update', function () {
  var _0x143292 = $(this).attr('data-id')
  var _0x4ccf23 = '/services/updateaddon/' + _0x143292 + ''
  var _0x3c8f39 = $(this).attr('data-status')
  $('#updateaddon_form').attr('action', _0x4ccf23)
  $('#active_addon_update').prop('checked', _0x3c8f39 == 0)
  $('#addon_name_update').attr('value', $(this).attr('data-addon'))
  $('#addon_price_update').attr('value', Number($(this).attr('data-price')))
})
$(document).on('click', '#update_staff', function () {
  var _0x3a1837 = $(this).attr('data-id'),
    _0x480552 = '/tool/updatestaff/' + _0x3a1837,
    _0x514a78 = Number($(this).attr('data-number')),
    _0x595228 = $(this).attr('data-approved'),
    _0x4c9b92 = $(this).attr('data-roll_id'),
    _0x259afd = window.location.origin
  $.ajax({
    type: 'get',
    url: _0x259afd + '/tool/rolllist/' + _0x3a1837,
    dataType: 'json',
    success: function (_0x7d07a1) {
      $('#update_staff_roll1').html('')
      $.each(_0x7d07a1.rolllist, function (_0x265a7c, _0x14192c) {
        $('#update_staff_roll1').append(
          '<option value="' + _0x14192c.id + '">' + _0x14192c.roll + '</option>'
        )
      })
      $('select[name=roll_list_update]').val(_0x4c9b92)
      $('.default-select').selectpicker('refresh')
    },
  })
  $('#update_staff_form').attr('action', _0x480552)
  $('#name_update').attr('value', $(this).attr('data-name'))
  $('#number_update').attr('value', _0x514a78)
  $('#email_update').attr('value', $(this).attr('data-email'))
  $('#username_update').attr('value', $(this).attr('data-username'))
  $('#password_update').attr('value', $(this).attr('data-password'))
  $('#active_update').prop('checked', _0x595228 == 1)
  $('.default-select').selectpicker('refresh')
})
$(document).on('click', '#update_Account', function () {
  var _0x5d8056 = $(this).attr('data-id')
  var _0x5c5a43 = '/account/updateaccount/' + _0x5d8056
  var _0x1af89e = Number($(this).attr('data-number'))
  $('#account_form').attr('action', _0x5c5a43)
  $('#ac_name_update').attr('value', $(this).attr('data-titel'))
  $('#ac_number_update').attr('value', _0x1af89e)
  $('#description_update').attr('value', $(this).attr('data-descrip'))
})
function makeid(_0x59f22a) {
  var _0x154ac1 = '',
    _0x4eb95d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var _0x20cf68 = _0x4eb95d.length
  for (var _0x4e5f55 = 0; _0x4e5f55 < _0x59f22a; _0x4e5f55++) {
    _0x154ac1 += _0x4eb95d.charAt(Math.floor(Math.random() * _0x20cf68))
  }
  return _0x154ac1
}
$(document).on('click', '#gen_code', function () {
  $('#coupon_code').val(makeid(6))
  return false
})
$(document).on('click', '#coupons_update', function () {
  var _0x13b621 = $(this).attr('data-id')
  var _0x13d872 = '/coupon/update/' + _0x13b621
  var _0x555cf0 = $(this).attr('data-storelist')
  var _0x584ed0 = _0x555cf0.split(',')
  $('#coupon_update_form').attr('action', _0x13d872)
  $('#coupon_titel_update').attr('value', $(this).attr('data-titel'))
  $('#coupon_type_update').val($(this).attr('data-type'))
  $('#coupon_limit_update').attr('value', $(this).attr('data-limit'))
  $('#coupon_start_date_update').val(
    new Date($(this).attr('data-start')).toLocaleDateString('en-CA')
  )
  $('#coupon_end_date_update').val(
    new Date($(this).attr('data-end')).toLocaleDateString('en-CA')
  )
  $('#coupon_purchase_update').attr('value', $(this).attr('data-minorder'))
  $('#coupon_discount_amount_update').attr(
    'value',
    $(this).attr('data-discount')
  )
  $('select[name=storelist]').val(_0x584ed0)
  $('.default-select').selectpicker('refresh')
  $('#coupon_status_update').prop('checked', $(this).attr('data-status') == 0)
})
$('body').on('change', '#expense_cat_add_admin', function () {
  var _0x2f373c = window.location.origin
  var _0x5af30d = this.value
  $.ajax({
    type: 'get',
    url: _0x2f373c + '/expense/cattypelist/' + _0x5af30d,
    dataType: 'json',
    success: function (_0xe564f8) {
      $('#type').html(''),
        $.each(_0xe564f8.data, function (_0x31283a, _0x42adbd) {
          $('#type').append(
            '<option value=' +
              _0x42adbd.id +
              '>' +
              _0x42adbd.type_name +
              '</option>'
          )
        }),
        $('.default-select').selectpicker('refresh')
    },
  })
})
$(document).on('keyup', '#service_pos_search', function () {
  let _0x58b6ef = document.querySelectorAll('.services'),
    _0x3c68e0 = this.value
  for (var _0x491dbe = 0; _0x491dbe < _0x58b6ef.length; _0x491dbe++) {
    if (
      _0x58b6ef[_0x491dbe].innerText
        .toLowerCase()
        .includes(_0x3c68e0.toLowerCase())
    ) {
      _0x58b6ef[_0x491dbe].classList.remove('is-hidden')
    } else {
      _0x58b6ef[_0x491dbe].classList.add('is-hidden')
    }
  }
})
$('body').on('change', '#pos_store_id', async function () {
  await clearcart()
  var _0x50aa51 = $('#pos_store_id').val()
  var _0x5e0921 = window.location.origin
  await $.ajax({
    type: 'get',
    url: _0x5e0921 + '/admin/customerlist/' + _0x50aa51,
    dataType: 'json',
    success: function (_0x397b61) {
      if (_0x397b61.customerList.length < 1) {
        $('#single-select').html(
          '<option value="0" selected disabled >No Any Customer Register Yet</option>'
        )
      } else {
        $('#single-select').html(
          '<option value="0" selected disabled >Select Customer </option>'
        )
      }
      $.each(_0x397b61.customerList, function (_0x212184, _0x37dcac) {
        $('#single-select').append(
          '<option value=' + _0x37dcac.id + '>' + _0x37dcac.name + '</option>'
        )
      })
    },
  })
  await $.ajax({
    type: 'get',
    url: _0x5e0921 + '/admin/servicelist/' + _0x50aa51,
    dataType: 'json',
    success: function (_0xe02867) {
      $('#pos_service').html('')
      if (_0xe02867.service_list.length < 1) {
        $('#pos_service').html(
          '<div class="p-2 center"><div class="card"><div class="card-body p-2 "> <h3 class="text-center text-danger">Not listed any services yet</h3> </div></div></div>'
        )
      }
      $.each(_0xe02867.service_list, function (_0x8d3fa4, _0x3079a6) {
        $('#pos_service').append(
          '<div class="col-md-2 col-4 p-2 services"><div class="card pos_border"><div class="card-body p-2 "><div class="new-arrival-product text-center"> <a href="#" data-bs-toggle="modal" data-bs-target="#service_type" id="POS_service" data-id="' +
            _0x3079a6.id +
            '">' +
            '<div class="new-arrivals-img-contnent mb-2 p-0">' +
            '<img class="img-fluid" width="50px" height="50px" src="../../uploads/' +
            _0x3079a6.image +
            '" alt="">' +
            '</div>' +
            '<h6>' +
            _0x3079a6.name +
            '</h6>' +
            '</a>' +
            ' </div>' +
            '</div>' +
            '</div>' +
            '</div>'
        )
      })
    },
  })
  await $.ajax({
    type: 'get',
    url: _0x5e0921 + '/admin/addonlist/' + _0x50aa51,
    dataType: 'json',
    success: function (_0x544299) {
      $('#POS_addons').html(''),
        $('#POS_tax_percent').html(
          '<p class="mb-0 mx-2 " id="POS_tax_percent"><small> Tax (' +
            _0x544299.cart.tax +
            ' %) : </small></p>'
        ),
        _0x544299.addon_list.length < 1 &&
          $('#POS_addons').html(
            '<div class="p-2 center"><div class="card"><div class="card-body p-2 "> <h3 class="text-center text-danger">No addon List Found</h3> </div></div></div>'
          ),
        $.each(_0x544299.addon_list, function (_0x524dfa, _0x98f7b8) {
          $('#POS_addons').append(
            ' <div class="col-6 d-flex mb-3"><div class="mx-3"><input class="form-check-input mt-3" type="checkbox"id="update_customer_read" name="addon" value="' +
              _0x98f7b8.id +
              '">' +
              ' </div>' +
              '<div class="d-flex flex-column justify-content-between">' +
              '<h5>' +
              _0x98f7b8.addon +
              '</h5>' +
              '<h6>$ ' +
              _0x98f7b8.price +
              '</h6>' +
              '</div>' +
              '</div>'
          )
        })
    },
  })
})
$('body').on('change', '#single-select', async function () {
  var _0x313034 = this.value,
    _0x25d768 = window.location.origin
  $.ajax({
    type: 'get',
    url: _0x25d768 + '/admin/newcustomerid/' + _0x313034,
    dataType: 'json',
    success: function (_0x589724) {},
  })
})
$(document).on('click', '#POS_service', function () {
  let _0x328bb3 = $(this).attr('data-id')
  var _0x5ae936 = window.location.origin
  $.ajax({
    type: 'get',
    url: _0x5ae936 + '/admin/getservicetype/' + _0x328bb3,
    dataType: 'json',
    success: function (_0x5ef63e) {
      $('#pos_servicetypeselect').html(''),
        $('#POS_serviceid1').attr('value', _0x5ef63e.serviceid),
        $.each(_0x5ef63e.data, function (_0x55566f, _0x3dfaac) {
          $('#pos_servicetypeselect').append(
            '<div class="form-check"><label>' +
              _0x3dfaac.servicetype +
              '</label><input class="form-check-input" type="radio" name="servicetype" value="' +
              _0x3dfaac.id +
              ',' +
              _0x3dfaac.price +
              ',' +
              _0x3dfaac.servicetype +
              '" required></div>'
          )
        })
    },
  })
})
$(document).ready(function () {
  var _0xe9a83 = window.location.origin
  $('#add_service_pos_cart_submit').click(function (_0xb260e4) {
    _0xb260e4.preventDefault(),
      $.ajax({
        type: 'POST',
        url: _0xe9a83 + '/admin/addservicelist',
        data: $('#add_service_pos_cart').serialize(),
        success: function (_0x12445d) {
          $('#service_type').modal('hide')
          $('#POS_gross_total').html(_0x12445d.cart.gross_total.toFixed(2))
          $('#POS_sub_total').html(_0x12445d.cart.sub_total.toFixed(2))
          $('#POS_addon_total').html(_0x12445d.cart.addon_price.toFixed(2))
          $('#POS_coupon_total').html(_0x12445d.cart.coupon_discount.toFixed(2))
          $('#POS_tax_total').html(_0x12445d.cart.tax_amount.toFixed(2))
          $('#POS_service_added_list').html(' ')
          $.each(_0x12445d.cartservice, function (_0x31ce32, _0x565ff3) {
            $('#POS_service_added_list').append(
              '<tr><td><h5 class="mb-0"> ' +
                _0x565ff3.service_name +
                '</h5>' +
                '<span class="mb-0 fs-6">[' +
                _0x565ff3.service_type_name +
                ']</span>' +
                '</td>' +
                '<td>' +
                '<input type="color" class="p-2" value="' +
                _0x565ff3.service_color +
                '" id="POS_service_color"  data-id="' +
                _0x565ff3.id +
                '">' +
                '</td>' +
                '<td>' +
                '<input type="number" class="form-control h-25 text-center px-2"' +
                ' value="' +
                _0x565ff3.service_type_price +
                '" name="service_type_price" id="POSservice_type_price" data-id="' +
                _0x565ff3.id +
                '">' +
                '</td>' +
                '<td>' +
                '<input type="number"' +
                ' class="form-control h-25 text-center px-2" id="POSservice_type_quntity" value="' +
                _0x565ff3.service_quntity +
                '" min="1" data-id="' +
                _0x565ff3.id +
                '">' +
                '</td>' +
                '<td>' +
                '<a class="btn btn-sm" id="remove_service_list" data-id="' +
                _0x565ff3.id +
                '"><i class="fa fa-trash  text-danger"></i></a>' +
                '</td>' +
                '</tr> '
            )
          })
          if (_0x12445d.loginas == 0) {
            $('input[name=service_type_price]').prop('readonly', true)
          }
          poscurrency()
        },
      })
  })
})
$(document).on('click', '#remove_service_list', function () {
  let _0x57b014 = $(this).attr('data-id')
  var _0xed0863 = window.location.origin
  $.ajax({
    type: 'get',
    url: _0xed0863 + '/admin/removeservicelist/' + _0x57b014,
    dataType: 'json',
    success: function (_0xafef78) {
      $('#POS_gross_total').html(_0xafef78.cart.gross_total.toFixed(2))
      $('#POS_sub_total').html(_0xafef78.cart.sub_total.toFixed(2))
      $('#POS_addon_total').html(_0xafef78.cart.addon_price.toFixed(2))
      $('#POS_coupon_total').html(_0xafef78.cart.coupon_discount.toFixed(2))
      $('#POS_tax_total').html(_0xafef78.cart.tax_amount.toFixed(2))
      $('#POS_service_added_list').html(' ')
      $.each(_0xafef78.cartservice, function (_0x22c796, _0x263734) {
        $('#POS_service_added_list').append(
          '<tr><td><h5 class="mb-0"> ' +
            _0x263734.service_name +
            '</h5>' +
            '<span class="mb-0 fs-6">[' +
            _0x263734.service_type_name +
            ']</span>' +
            '</td>' +
            '<td>' +
            '<input type="color" class="p-2" value="' +
            _0x263734.service_color +
            '" id="POS_service_color"  data-id="' +
            _0x263734.id +
            '">' +
            '</td>' +
            '<td>' +
            '<input type="number" class="form-control h-25 text-center px-2"' +
            ' value="' +
            _0x263734.service_type_price +
            '" name="service_type_price" id="POSservice_type_price" data-id="' +
            _0x263734.id +
            '">' +
            '</td>' +
            '<td>' +
            '<input type="number"' +
            ' class="form-control h-25 text-center px-2" id="POSservice_type_quntity" value="' +
            _0x263734.service_quntity +
            '" min="1" data-id="' +
            _0x263734.id +
            '">' +
            '</td>' +
            '<td>' +
            '<a class="btn btn-sm" id="remove_service_list" data-id="' +
            _0x263734.id +
            '"><i class="fa fa-trash  text-danger"></i></a>' +
            '</td>' +
            '</tr> '
        )
      })
      if (_0xafef78.loginas == 0) {
        $('input[name=service_type_price]').prop('readonly', true)
      }
      poscurrency()
    },
  })
})
$(document).on('change', '#POS_service_color', function () {
  let _0x4cb065 = $(this).attr('data-id'),
    _0x552848 = $(this).val()
  var _0x450e5b = window.location.origin,
    _0x399800 = {
      id: _0x4cb065,
      color: _0x552848,
    }
  $.ajax({
    type: 'post',
    url: _0x450e5b + '/admin/color',
    data: _0x399800,
    dataType: 'json',
    success: function (_0x1e1a9e) {},
  })
})
$(document).on('change', '#POS_order_date', function () {
  let _0x50335e = $(this).val()
  var _0x1e6a49 = window.location.origin,
    _0x12bffd = { date: _0x50335e }
  $.ajax({
    type: 'post',
    url: _0x1e6a49 + '/admin/date',
    data: _0x12bffd,
    dataType: 'json',
    success: function (_0x3e556a) {},
  })
})
$(document).on('click', '#POS_clear', function () {
  clearcart()
})
async function clearcart() {
  var _0x582b25 = window.location.origin
  $.ajax({
    type: 'get',
    url: _0x582b25 + '/admin/clearcart',
    dataType: 'json',
    success: function (_0x26db00) {
      $('#POS_gross_total').html(_0x26db00.cart.gross_total.toFixed(2))
      $('#POS_sub_total').html(_0x26db00.cart.sub_total.toFixed(2))
      $('#POS_addon_total').html(_0x26db00.cart.addon_price.toFixed(2))
      $('#POS_coupon_total').html(_0x26db00.cart.coupon_discount.toFixed(2))
      $('#POS_tax_total').html(_0x26db00.cart.tax_amount.toFixed(2))
      $('#POS_service_added_list').html(' ')
      $('input[name=addon]').prop('checked', false)
      poscurrency()
    },
  })
}
$(document).on('change', '#POSservice_type_price', function () {
  var _0x44fbcd = window.location.origin
  var _0x34de63 = $(this).val(),
    _0x20ea6e = $(this).attr('data-id'),
    _0x888d13 = {
      id: _0x20ea6e,
      price: _0x34de63,
    }
  $.ajax({
    type: 'post',
    url: _0x44fbcd + '/admin/changeamount',
    data: _0x888d13,
    dataType: 'json',
    success: function (_0x440d26) {
      $('#POS_gross_total').html(_0x440d26.cart.gross_total.toFixed(2)),
        $('#POS_sub_total').html(_0x440d26.cart.sub_total.toFixed(2)),
        $('#POS_addon_total').html(_0x440d26.cart.addon_price.toFixed(2)),
        $('#POS_coupon_total').html(_0x440d26.cart.coupon_discount.toFixed(2)),
        $('#POS_tax_total').html(_0x440d26.cart.tax_amount.toFixed(2)),
        $('#POS_service_added_list').html(' '),
        $.each(_0x440d26.cartservice, function (_0x33cf9c, _0x1b8bdd) {
          $('#POS_service_added_list').append(
            '<tr><td><h5 class="mb-0"> ' +
              _0x1b8bdd.service_name +
              '</h5>' +
              '<span class="mb-0 fs-6">[' +
              _0x1b8bdd.service_type_name +
              ']</span>' +
              '</td>' +
              '<td>' +
              '<input type="color" class="p-2" value="' +
              _0x1b8bdd.service_color +
              '" id="POS_service_color"  data-id="' +
              _0x1b8bdd.id +
              '">' +
              '</td>' +
              '<td>' +
              '<input type="number" class="form-control h-25 text-center px-2"' +
              ' value="' +
              _0x1b8bdd.service_type_price +
              '" name="service_type_price" id="POSservice_type_price" data-id="' +
              _0x1b8bdd.id +
              '">' +
              '</td>' +
              '<td>' +
              '<input type="number"' +
              ' class="form-control h-25 text-center px-2" id="POSservice_type_quntity" value="' +
              _0x1b8bdd.service_quntity +
              '" min="1" data-id="' +
              _0x1b8bdd.id +
              '">' +
              '</td>' +
              '<td>' +
              '<a class="btn btn-sm" id="remove_service_list" data-id="' +
              _0x1b8bdd.id +
              '"><i class="fa fa-trash  text-danger"></i></a>' +
              '</td>' +
              '</tr> '
          )
        }),
        _0x440d26.loginas == 0 &&
          $('input[name=service_type_price]').prop('readonly', true),
        poscurrency()
    },
  })
})
$(document).on('change', '#POSservice_type_quntity', function () {
  var _0x298daf = window.location.origin
  var _0x1487a0 = $(this).val()
  var _0x26845c = $(this).attr('data-id'),
    _0x31306e = {
      id: _0x26845c,
      qty: _0x1487a0,
    }
  $.ajax({
    type: 'post',
    url: _0x298daf + '/admin/changequntity',
    data: _0x31306e,
    dataType: 'json',
    success: function (_0x2df89f) {
      $('#POS_gross_total').html(_0x2df89f.cart.gross_total.toFixed(2))
      $('#POS_sub_total').html(_0x2df89f.cart.sub_total.toFixed(2))
      $('#POS_addon_total').html(_0x2df89f.cart.addon_price.toFixed(2))
      $('#POS_coupon_total').html(_0x2df89f.cart.coupon_discount.toFixed(2))
      $('#POS_tax_total').html(_0x2df89f.cart.tax_amount.toFixed(2))
      $('#POS_service_added_list').html(' ')
      $.each(_0x2df89f.cartservice, function (_0xed4141, _0x26ce99) {
        $('#POS_service_added_list').append(
          '<tr><td><h5 class="mb-0"> ' +
            _0x26ce99.service_name +
            '</h5>' +
            '<span class="mb-0 fs-6">[' +
            _0x26ce99.service_type_name +
            ']</span>' +
            '</td>' +
            '<td>' +
            '<input type="color" class="p-2" value="' +
            _0x26ce99.service_color +
            '" id="POS_service_color"  data-id="' +
            _0x26ce99.id +
            '">' +
            '</td>' +
            '<td>' +
            '<input type="number" class="form-control h-25 text-center px-2"' +
            ' value="' +
            _0x26ce99.service_type_price +
            '" name="service_type_price" id="POSservice_type_price" data-id="' +
            _0x26ce99.id +
            '">' +
            '</td>' +
            '<td>' +
            '<input type="number"' +
            ' class="form-control h-25 text-center px-2" id="POSservice_type_quntity" value="' +
            _0x26ce99.service_quntity +
            '" min="1" data-id="' +
            _0x26ce99.id +
            '">' +
            '</td>' +
            '<td>' +
            '<a class="btn btn-sm" id="remove_service_list" data-id="' +
            _0x26ce99.id +
            '"><i class="fa fa-trash  text-danger"></i></a>' +
            '</td>' +
            '</tr> '
        )
      })
      if (_0x2df89f.loginas == 0) {
        $('input[name=service_type_price]').prop('readonly', true)
      }
      poscurrency()
    },
  })
})
$(document).ready(function () {
  var _0x25383e = window.location.origin
  $('#add_addons_pos_cart_submit').click(function (_0x13a016) {
    _0x13a016.preventDefault()
    $.ajax({
      type: 'POST',
      url: _0x25383e + '/admin/addonsadd',
      data: $('#add_addons_pos_cart').serialize(),
      success: function (_0x51075b) {
        $('#addons').modal('hide')
        $('#POS_gross_total').html(_0x51075b.cart.gross_total.toFixed(2))
        $('#POS_sub_total').html(_0x51075b.cart.sub_total.toFixed(2))
        $('#POS_addon_total').html(_0x51075b.cart.addon_price.toFixed(2))
        $('#POS_coupon_total').html(_0x51075b.cart.coupon_discount.toFixed(2))
        $('#POS_tax_total').html(_0x51075b.cart.tax_amount.toFixed(2))
        poscurrency()
      },
    })
  })
})
$(document).on('click', '#POS_coupon_model_show', function () {
  var _0x1f1c90 = $('#single-select').val()
  var _0x7ffe5d = window.location.origin
  _0x1f1c90
    ? $.ajax({
        type: 'GET',
        url: _0x7ffe5d + '/admin/couponlist/' + _0x1f1c90,
        dataType: 'json',
        success: function (_0x1fee63) {
          console.log(_0x1fee63.couponlist)
          $('#coupon_area').html('')
          if (_0x1fee63.couponlist.length < 1) {
            $('#coupon_search').html('')
            $('#coupon_area').html(
              '<div class="p-2 center"><div class="card"><div class="card-body p-2 "> <h3 class="text-center text-danger">No Coupon List Found</h3> </div></div></div>'
            )
          }
          $.each(_0x1fee63.couponlist, function (_0x2a5de3, _0x4094cb) {
            $('#coupon_area').append(
              '<div class="card"><div class="card-body p-0"><div class="col-12 mb-1  p-2"><div class="d-flex justify-content-between"><h5> ' +
                _0x4094cb.titel +
                ' </h5>' +
                '<h5> Coupon code : ' +
                _0x4094cb.code +
                ' </h5>' +
                '</div>' +
                '<div class="d-flex justify-content-between">' +
                '<span>Discount : <strong class="couponsymbol"> ' +
                _0x4094cb.discount +
                '</strong> </span>' +
                '<span>Min. Purchase Amount : <strong class="couponsymbol"> ' +
                _0x4094cb.min_purchase +
                ' </strong></span>' +
                '</div>' +
                '<div class="d-flex justify-content-end mb-0">' +
                '<button type="button" class="btn btn-xxs btn-whatsapp" id="POS_apply_coupon" data-id="' +
                _0x4094cb.id +
                '" ' +
                (_0x1fee63.cart.sub_total + _0x1fee63.cart.addon_price <
                  _0x4094cb.min_purchase ||
                _0x1fee63.cart.coupon_id == _0x4094cb.id
                  ? 'disabled'
                  : '') +
                '   >Apply ' +
                '<span class="btn-icon-end"><i class="fas fa-save"></i></span>' +
                '</button>' +
                '</div>' +
                (_0x1fee63.cart.coupon_id == _0x4094cb.id
                  ? '<div class="d-flex justify-content-between"><span class="text-secondary"> This Coupon Currently Applied </span></div>'
                  : '') +
                '</div>' +
                '</div>' +
                '</div>'
            )
          })
          couponcurrency()
          $('#POS_coupon_model').modal('show')
        },
      })
    : toastr.warning('Select Customer First ')
})
$(document).on('click', '#POS_apply_coupon', function () {
  var _0x466cc5 = $(this).attr('data-id')
  var _0x513692 = window.location.origin
  $.ajax({
    type: 'GET',
    url: _0x513692 + '/admin/couponadd/' + _0x466cc5,
    dataType: 'json',
    success: function (_0x48fabe) {
      $('#POS_coupon_model').modal('hide')
      $('#POS_gross_total').html(_0x48fabe.cart.gross_total.toFixed(2))
      $('#POS_sub_total').html(_0x48fabe.cart.sub_total.toFixed(2))
      $('#POS_addon_total').html(_0x48fabe.cart.addon_price.toFixed(2))
      $('#POS_coupon_total').html(_0x48fabe.cart.coupon_discount.toFixed(2))
      $('#POS_tax_total').html(_0x48fabe.cart.tax_amount.toFixed(2))
      poscurrency()
    },
  })
})
$(document).on('click', '#POS_coupon_code', function () {
  var _0x738f9 = $('input[name=coupon_code]').val()
  if (_0x738f9.length !== 6) {
    toastr.warning('Please Enter Valid Coupon Code')
  } else {
    var _0x6198e5 = window.location.origin
    $.ajax({
      type: 'GET',
      url: _0x6198e5 + '/admin/manualcoupon/' + _0x738f9,
      dataType: 'json',
      success: function (_0x4f5bbb) {
        if (_0x4f5bbb.status === 'error') {
          toastr.error(_0x4f5bbb.message)
        }
        $('#POS_coupon_model').modal('hide')
        $('input[name=coupon_code]').val('')
        $('#POS_gross_total').html(_0x4f5bbb.cart.gross_total.toFixed(2))
        $('#POS_sub_total').html(_0x4f5bbb.cart.sub_total.toFixed(2))
        $('#POS_addon_total').html(_0x4f5bbb.cart.addon_price.toFixed(2))
        $('#POS_coupon_total').html(_0x4f5bbb.cart.coupon_discount.toFixed(2))
        $('#POS_tax_total').html(_0x4f5bbb.cart.tax_amount.toFixed(2))
        poscurrency()
      },
    })
  }
})
$(document).on('click', '#POS_payment_model_show', function () {
  var _0x7a2325 = $('#single-select').val(),
    _0xd8114b = $('#POS_service_added_list tr').length
  var _0x549bea = window.location.origin
  if (!_0x7a2325) {
    toastr.warning('Please Select Coustomer')
  } else {
    if (_0xd8114b < 1) {
      toastr.warning('Min One Service Required')
    } else {
      $.ajax({
        type: 'GET',
        url: _0x549bea + '/admin/paymentdata/',
        dataType: 'json',
        success: function (_0x3b3785) {
          $('#POS_payment_type_list').html(
            '<option value="0" selected disabled>Choose Payment Type</option>'
          )
          $.each(_0x3b3785.payment, function (_0x270134, _0x23ba77) {
            $('#POS_payment_type_list').append(
              ' <option value="' +
                _0x23ba77.id +
                '">' +
                _0x23ba77.ac_name +
                '</option>'
            )
          })
          $('#POS_payment_type_list').prop('required', true)
          $('.default-select').selectpicker('refresh')
          $('input[name=deliverydate]').val(
            new Date(_0x3b3785.cart.delivery_date).toLocaleDateString('en-CA')
          )
          $('input[name=deliverydate]').attr(
            'min',
            new Date(_0x3b3785.cart.delivery_date).toLocaleDateString('en-CA')
          )
          $('input[name=extradiscount]').val(_0x3b3785.cart.extra_discount)
          $('input[name=paid_amount]').val(_0x3b3785.cart.paid_amount)
          $('input[name=note]').val(_0x3b3785.cart.notes)
          $('#payment_grosstotal').html(_0x3b3785.cart.gross_total.toFixed(2))
          $('#POS_gross_order').val(_0x3b3785.cart.gross_total.toFixed(2))
          $('#POS_subtotal_order').val(_0x3b3785.cart.sub_total.toFixed(2))
          $('#payment_subtotal').html(_0x3b3785.cart.sub_total.toFixed(2))
          $('#payment_addons').html(_0x3b3785.cart.addon_price.toFixed(2))
          $('#payment_coupondiscount').html(
            _0x3b3785.cart.coupon_discount.toFixed(2)
          )
          $('#payment_text_amount').html(_0x3b3785.cart.tax_amount.toFixed(2))
          $('#payment_extradiscount').html(
            _0x3b3785.cart.extra_discount.toFixed(2)
          )
          $('#payment_text_perdent').html(' Tax (' + _0x3b3785.cart.tax + ' %)')
          $('#POS_total_balance').html(0)
          $('#paid_amount').attr('max', _0x3b3785.cart.gross_total)
          paymentcurrency()
          $('#POS_payment_model').modal('show')
        },
      })
    }
  }
})
$(document).on('input', '#POS_extra_discount_order', function () {
  var _0x28313a = Number($('input[name=extradiscount]').val()),
    _0x5abc7f = Number($('#POS_gross_order').val())
  $('#payment_extradiscount').html(_0x28313a)
  $('#payment_grosstotal').html((_0x5abc7f - _0x28313a).toFixed(2))
  $('#paid_amount').attr('max', _0x5abc7f - _0x28313a)
  var _0x1ac17a = Number($('input[name=sub]').val())
  var _0x346c70 = Number($('input[name=paid_amount]').val())
  $('#POS_total_balance').html((_0x5abc7f - _0x28313a - _0x346c70).toFixed(2))
  if (_0x28313a > _0x1ac17a) {
    $('#POS_worning').html('Discount Amount Not Greter Then Sub-Total Amount ')
    $('#cart_submit_for_order').prop('disabled', true)
  } else {
    if (_0x346c70 > _0x5abc7f - _0x28313a) {
      $('#POS_worning_paid').html('Paid Amount Not Greter Then Total Amount ')
      $('#cart_submit_for_order').prop('disabled', true)
    } else {
      $('#POS_worning_paid').html(' '),
        $('#POS_worning').html(' '),
        $('#cart_submit_for_order').prop('disabled', false)
    }
  }
  extracurrency()
})
$(document).on('input', '#paid_amount', function () {
  var _0x136675 = Number($('input[name=extradiscount]').val()),
    _0x41caf1 = Number($('#POS_gross_order').val()),
    _0x4b390d = Number($('input[name=paid_amount]').val())
  var _0x4c76bf = Number($('input[name=sub]').val())
  $('#POS_total_balance').html((_0x41caf1 - _0x136675 - _0x4b390d).toFixed(2))
  if (_0x4b390d > _0x41caf1 - _0x136675) {
    $('#POS_worning_paid').html('Paid Amount Not Greter Then Total Amount ')
    $('#cart_submit_for_order').prop('disabled', true)
  } else {
    if (_0x136675 > _0x4c76bf) {
      $('#POS_worning').html(
        'Discount Amount Not Greter Then Sub-Total Amount '
      )
      $('#cart_submit_for_order').prop('disabled', true)
    } else {
      $('#POS_worning_paid').html(' '),
        $('#POS_worning').html(' '),
        $('#cart_submit_for_order').prop('disabled', false)
    }
  }
  _0x4b390d < 0.1 &&
    ($('#POS_worning_paid').html('Paid Amount Not in Negative'),
    $('#cart_submit_for_order').prop('disabled', true))
  payamucurrency()
})
$('#cart_submit_for_order').click(function (_0x16a460) {
  _0x16a460.preventDefault()
  var _0x2ab11d = Number($('input[name=paid_amount]').val())
  var _0xe3162b = $('#POS_payment_type_list').val(),
    _0x220371 = window.location.origin
  if (_0x2ab11d > 0) {
    if (!_0xe3162b) {
      return toastr.warning('Please Select Payment Type')
    }
  }
  $.ajax({
    type: 'POST',
    url: _0x220371 + '/admin/order',
    data: $('#pyment_POS_cart').serialize(),
    success: function (_0x110ec8) {
      $('#POS_payment_model').modal('hide'),
        toastr.success('Order Success fully Save'),
        $('#invoice_header').html(
          '<h3 class="text-uppercase">' +
            _0x110ec8.shope.name +
            '</h3>' +
            '<h6>Phone : ' +
            _0x110ec8.shope.mobile_number +
            '</h6>' +
            '<h6>Email : ' +
            _0x110ec8.shope.store_email +
            '</h6>'
        ),
        $('#invoice_order_id').html(
          'Order Id : ' + _0x110ec8.order.order_id + ''
        ),
        $('#invoice_order_date').html(
          'Order Date : ' +
            new Date(_0x110ec8.order.order_date).toLocaleDateString('en-CA') +
            ''
        ),
        $('#invoice_delivery_date').html(
          'Delivery Date : ' +
            new Date(_0x110ec8.order.delivery_date).toLocaleDateString('en-CA')
        ),
        $('#invoice_item').html(''),
        $.each(_0x110ec8.cartservice, function (_0x834e23, _0x1cd919) {
          $('#invoice_item').append(
            '<tr> <td>' +
              Number(_0x834e23 + 1) +
              '</td>' +
              ' <td>' +
              '   <h5 class="mb-0">' +
              _0x1cd919.service_name +
              '</h5>' +
              '   <span class="mb-0 fs-6">[' +
              _0x1cd919.service_type_name +
              '] </span> <br>' +
              '</td>' +
              '<td> ' +
              _0x1cd919.service_quntity +
              ' </td>' +
              '<td class="invosymbol">' +
              _0x1cd919.service_type_price.toFixed(2) +
              '</td>' +
              '</tr>'
          )
        }),
        _0x110ec8.addonslist.length < 1 &&
          $('#POS_addon_invoice_item').addClass('d-none'),
        $('#addon_item').html(''),
        $.each(_0x110ec8.addonslist, function (_0x3f07f0, _0x3211be) {
          $('#addon_item').append(
            '<tr> <td>' +
              Number(_0x3f07f0 + 1) +
              '</td>' +
              '<td> ' +
              _0x3211be.name +
              ' </td>' +
              '<td class="invosymbol">' +
              _0x3211be.price.toFixed(2) +
              '</td>' +
              '</tr>'
          )
        }),
        $('#invoice_price').html(_0x110ec8.order.sub_total.toFixed(2)),
        $('#invoice_addon').html(_0x110ec8.order.addon_price.toFixed(2)),
        $('#invoice_tax').html(_0x110ec8.order.tax_amount.toFixed(2)),
        $('#invoice_Discount').html(_0x110ec8.order.extra_discount.toFixed(2)),
        $('#invoice_Coupon').html(_0x110ec8.order.coupon_discount.toFixed(2)),
        $('#invoice_gross').html(_0x110ec8.order.gross_total.toFixed(2)),
        $('#invoice_paid_method').html(
          'Payment Method : ' + _0x110ec8.paymenttype
        ),
        $('#invoice_paid_amount').html(
          'Paid Amount : ' + _0x110ec8.order.paid_amount.toFixed(2)
        ),
        $('#invoice_due_amount').html(
          'Due Amount : ' + _0x110ec8.order.balance_amount.toFixed(2)
        ),
        $('#invoice_Name_customer').html(_0x110ec8.customer.name),
        $('#invoice_Number_customer').html(_0x110ec8.customer.number),
        $('#invoice_Email_customer').html(_0x110ec8.customer.email),
        $('#invoice_Address_customer').html(_0x110ec8.customer.address),
        $('#invoice_Tax_customer').html(_0x110ec8.customer.taxnumber),
        $('#order_note').html(_0x110ec8.order.note),
        $('#invoice').modal('show'),
        invocurrency()
    },
  })
})
$(document).on('click', '#pri_invo', function () {
  var _0x41e698 = document.getElementById('invoice_page').innerHTML
  document.body.innerHTML = _0x41e698
  window.print()
  location.reload()
})
$(document).ready(function () {
  $('#POS_order_date').attr('min', new Date().toLocaleDateString('en-CA'))
  $('#invoice').modal({
    backdrop: 'static',
    keyboard: false,
  })
})
$(document).ready(function () {
  $('#order_list_serach').on('keyup', function () {
    var _0x57edec = $(this).val().toLowerCase()
    $('#order_list_tbl tr').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(_0x57edec) > -1)
    })
  })
})
$('#orders_list_status').on('change', function () {
  var _0x232669 = $(this).val()
  $('#order_list_tbl tr').filter(function () {
    $(this).toggle($(this.children[3]).text().indexOf(_0x232669) > -1)
  })
})
async function changeOrderStatus(_0x519b20, _0x5b25d7) {
  var _0x6eea95 = window.location.origin
  $.ajax({
    type: 'GET',
    url: _0x6eea95 + '/order/changestatus/' + _0x519b20 + ',' + _0x5b25d7,
    dataType: 'json',
    success: function (_0x470b8e) {
      if (_0x470b8e.status == 'error') {
        toastr.error(_0x470b8e.messge)
      } else {
        _0x470b8e.status == 'success' &&
          (toastr.success(_0x470b8e.messge),
          setTimeout(() => {
            location.reload()
          }, 1000))
      }
    },
  })
}
async function open_patment_model(_0x50d6fd) {
  var _0x2c6fbd = window.location.origin
  $.ajax({
    type: 'GET',
    url: _0x2c6fbd + '/order/paymodel/' + _0x50d6fd,
    dataType: 'json',
    success: function (_0xce985d) {
      $('#orderlistpaymentmodel').html(
        '<div class="row g-2 align-items-center"><div class=" col-12"><div class="row mb-50 align-items-center"> <div class="col text-sm">Customer Name:</div><div class="col-auto text-sm">' +
          _0xce985d.customer.name +
          '</div>' +
          '</div>' +
          '<div class="row mb-50 align-items-center">' +
          '<div class="col text-sm">Order ID: </div>' +
          '<div class="col-auto text-sm">' +
          _0xce985d.order.order_id +
          '</div>' +
          '</div>' +
          '<div class="row mb-50 align-items-center">' +
          '<div class="col text-sm">Order Date: </div>' +
          '<div class="col-auto text-sm">' +
          new Date(_0xce985d.order.order_date).toLocaleDateString('en-CA') +
          '</div>' +
          '</div>' +
          '<div class="row mb-50 align-items-center">' +
          '<div class="col text-sm"> Delivery Date:</div>' +
          '<div class="col-auto text-sm">' +
          new Date(_0xce985d.order.delivery_date).toLocaleDateString('en-CA') +
          '</div>' +
          '</div>' +
          '<hr>' +
          '<div class="row mb-50 align-items-center">' +
          '<div class="col text-sm"> Order Amount:</div>' +
          '<div class="col-auto text-sm invosymbol">' +
          _0xce985d.order.gross_total.toFixed(2) +
          '</div>' +
          '</div>' +
          '<div class="row mb-50 align-items-center">' +
          '<div class="col text-sm">Paid Amount:</div>' +
          '<div class="col-auto text-sm invosymbol">' +
          _0xce985d.order.paid_amount.toFixed(2) +
          '</div>' +
          '</div>' +
          '<hr>' +
          '<div class="row align-items-center">' +
          '<div class="col text-sm">Balance:</div>' +
          '<div class="col-auto text-sm invosymbol">' +
          _0xce985d.order.balance_amount.toFixed(2) +
          '</div>' +
          '</div>' +
          '<hr>' +
          ' <div class="row align-items-center">' +
          '<div class="col-md-6 mb-1">' +
          '<label class="form-label">Paid Amount</label>' +
          '<input type="flot" class="form-control" placeholder="Enter Amount" name="paid" value="0">' +
          '<input type="hidden"  name="orderid" value="' +
          _0xce985d.order.id +
          '">' +
          '<input type="hidden"  name="balan" value="' +
          _0xce985d.order.balance_amount +
          '">' +
          '</div>' +
          '<div class="col-md-6 mb-1">' +
          '<label class="form-label">Payment Type</label>' +
          ' <select class="default-select form-control wide" name="payment" id="payment">' +
          ' <option value selected disabled>Choose Payment Type</option>' +
          ' </select>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>'
      )
      $.each(_0xce985d.account, function (_0x2b2be3, _0x228e23) {
        console.log(_0x228e23),
          $('#payment').append(
            '<option value=' +
              _0x228e23.id +
              '>' +
              _0x228e23.ac_name +
              '</option>'
          )
      })
      $('.default-select').selectpicker('refresh')
      $('#addpaymentmodel1').modal('show')
      invocurrency()
    },
  })
}
$('#add_order_payment_submit').click(function (_0x3f4885) {
  _0x3f4885.preventDefault()
  var _0x5944b4 = Number($('input[name=balan]').val())
  var _0xa4d5c8 = Number($('input[name=paid]').val()),
    _0x1e030 = $('#payment').val(),
    _0x3fdaa5 = window.location.origin
  if (_0x5944b4 < _0xa4d5c8) {
    return toastr.warning('Paid amount is not more then Order Amount')
  }
  if (_0xa4d5c8 == 0) {
    return toastr.warning('Please Enter Proper Amount')
  }
  if (_0xa4d5c8 > 0) {
    if (!_0x1e030) {
      return toastr.warning('Please Select Payment Type')
    }
  }
  if (_0xa4d5c8 < 0) {
    return toastr.warning('Please Select Payment Amount')
  }
  $.ajax({
    type: 'POST',
    url: _0x3fdaa5 + '/order/addpayment',
    data: $('#add_order_payment').serialize(),
    success: function (_0x1c2ab0) {
      if (_0x1c2ab0.status == 'success') {
        toastr.success(_0x1c2ab0.message)
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
    },
  })
})
$('#daily_report_store').on('change', function () {
  alert(1111)
  var _0x378392 = $(this).val()
  var _0x3769d3 = $('#daily_report_date').val()
  dailyorder(_0x3769d3, _0x378392)
})
$('#daily_report_date').on('change', function () {
  var _0x4edeb4 = $('#daily_report_store').val()
  var _0x55be47 = $(this).val()
  dailyorder(_0x55be47, _0x4edeb4)
  alert(_0x4edeb4)
})
$('#order_report_store').on('change', function () {
  var _0x207a1b = $(this).val(),
    _0x53ba5f = $('#order_report_start_date').val(),
    _0x30040b = $('#order_report_end_date').val()
  orderreports(_0x207a1b, _0x53ba5f, _0x30040b)
})
$('#order_report_start_date').on('change', function () {
  var _0x26f48c = $('#order_report_store').val()
  var _0x219c5d = $(this).val()
  var _0x206f18 = $('#order_report_end_date').val()
  orderreports(_0x26f48c, _0x219c5d, _0x206f18)
})
$('#order_report_end_date').on('change', function () {
  var _0x1f1071 = $('#order_report_store').val()
  var _0x585062 = $('#order_report_start_date').val(),
    _0x3a3e52 = $(this).val()
  orderreports(_0x1f1071, _0x585062, _0x3a3e52)
})
$('#sales_report_store').on('change', function () {
  var _0x426361 = $(this).val()
  var _0x224b19 = $('#sales_report_start_date').val()
  var _0xcf3b73 = $('#sales_report_end_date').val()
  salesreports(_0x426361, _0x224b19, _0xcf3b73)
})
$('#sales_report_start_date').on('change', function () {
  var _0x41fb7d = $('#sales_report_store').val()
  var _0x27672e = $(this).val(),
    _0x5ae93e = $('#sales_report_end_date').val()
  salesreports(_0x41fb7d, _0x27672e, _0x5ae93e)
})
$('#sales_report_end_date').on('change', function () {
  var _0x5865ed = $('#sales_report_store').val()
  var _0x589572 = $('#sales_report_start_date').val(),
    _0x5a853c = $(this).val()
  salesreports(_0x5865ed, _0x589572, _0x5a853c)
})
$('#Expence_report_store').on('change', function () {
  var _0x34c125 = $(this).val()
  var _0xbbc006 = $('#Expence_report_start_date').val(),
    _0x5f0205 = $('#Expence_report_end_date').val()
  expencereports(_0x34c125, _0xbbc006, _0x5f0205)
})
$('#Expence_report_start_date').on('change', function () {
  var _0x29b313 = $('#Expence_report_store').val()
  var _0x3b6725 = $(this).val(),
    _0x24e37f = $('#Expence_report_end_date').val()
  expencereports(_0x29b313, _0x3b6725, _0x24e37f)
})
$('#Expence_report_end_date').on('change', function () {
  var _0x280081 = $('#Expence_report_store').val()
  var _0x39389a = $('#Expence_report_start_date').val(),
    _0x1d695b = $(this).val()
  expencereports(_0x280081, _0x39389a, _0x1d695b)
})
$('#tax_report_store').on('change', function () {
  var _0x58ba8c = $(this).val()
  var _0x444c1a = $('#tax_report_start_date').val()
  var _0x2a6f53 = $('#tax_report_end_date').val()
  var _0x338f2c = $('#tax_report_status').val()
  taxreports(_0x58ba8c, _0x444c1a, _0x2a6f53, _0x338f2c)
})
$('#tax_report_start_date').on('change', function () {
  var _0x273508 = $('#tax_report_store').val()
  var _0x2504fa = $(this).val()
  var _0x45404f = $('#tax_report_end_date').val()
  var _0x364800 = $('#tax_report_status').val()
  taxreports(_0x273508, _0x2504fa, _0x45404f, _0x364800)
})
$('#tax_report_end_date').on('change', function () {
  var _0x375517 = $('#tax_report_store').val()
  var _0x54f448 = $('#tax_report_start_date').val()
  var _0x2bd12d = $(this).val()
  var _0xb1be03 = $('#tax_report_status').val()
  taxreports(_0x375517, _0x54f448, _0x2bd12d, _0xb1be03)
})
$('#tax_report_status').on('change', function () {
  var _0xa6fe21 = $('#tax_report_store').val()
  var _0x3a3edd = $('#tax_report_start_date').val()
  var _0x4d4224 = $('#tax_report_end_date').val()
  var _0x4843bf = $(this).val()
  taxreports(_0xa6fe21, _0x3a3edd, _0x4d4224, _0x4843bf)
})
$('#multy').on('change', function () {
  var _0x4fd825 = $('#multy').prop('checked')
  !_0x4fd825 && $('#POS_coupon_model').modal('show')
})
$(document).on('click', '#order_report_print', function () {
  var _0x5c24be = document.getElementById('invoice_page').innerHTML
  document.body.innerHTML = _0x5c24be
  window.print()
  location.reload()
})
$(document).ready(function () {
  var _0x279221 = Intl.supportedValuesOf('timeZone'),
    _0x45666d = $('#timezone').attr('data-id')
  $.each(_0x279221, function (_0x474a77, _0x30e4e6) {
    $('#timezone').append(
      ' <option value="' + _0x30e4e6 + '" >' + _0x30e4e6 + '</option>'
    )
  })
  $('select[name=timezone]').val(_0x45666d)
  $('.default-select').selectpicker('refresh')
})
$(document).ready(function () {
  orderreport()
})
function orderreport() {
  var _0x4f5537 = $('#tb_row_order_report tr').length
  $('#orders_report').text(_0x4f5537)
  var _0x2a84c8 = 0
  $('td:nth-child(4):visible').each(function () {
    _0x2a84c8 += Number($(this).text())
  })
  $('#order_report_amount').html(_0x2a84c8.toFixed(2))
}
$('#order_report_status').on('change', function () {
  var _0x51a7dc = $(this).val()
  $('#tb_row_order_report tr').filter(function () {
    $(this).toggle($(this.children[4]).text().indexOf(_0x51a7dc) > -1)
  })
  $('#orders_report').text($('#tb_row_order_report tr:visible').length)
  var _0x167951 = 0
  $('td:nth-child(4):visible').each(function () {
    var _0x6ca4dc = $(this).text()
    _0x167951 += Number(_0x6ca4dc.split(' ')[1])
    console.log(_0x167951)
  })
  $('#order_report_amount').html(_0x167951.toFixed(2))
  invocurrency()
})
$(document).ready(function () {
  sale()
})
function sale() {
  var _0x5deb05 = $('#tb_row_sales_report tr').length
  $('#sales_report').text(_0x5deb05)
  var _0x2af659 = 0
  $('td:nth-child(7):visible').each(function () {
    _0x2af659 += Number($(this).text())
  })
  $('#sales_report_tax').html(_0x2af659.toFixed(2))
  var _0x3c4dff = 0
  $('td:nth-child(8):visible').each(function () {
    _0x3c4dff += Number($(this).text())
  })
  $('#sales_report_amount').html(_0x3c4dff.toFixed(2))
}
$(document).ready(function () {
  expence()
})
function expence() {
  var _0x451a05 = $('#tb_row_expence_report tr').length
  $('#expence_report').text(_0x451a05)
  var _0x589a2f = 0
  $('td:nth-child(5):visible').each(function () {
    _0x589a2f += Number($(this).text())
  })
  $('#expence_report_taxamount').html(_0x589a2f.toFixed(2))
  var _0x4ba5e6 = 0
  $('td:nth-child(3):visible').each(function () {
    _0x4ba5e6 += Number($(this).text())
  })
  $('#expence_report_amount').html(_0x4ba5e6.toFixed(2))
}
$(document).ready(function () {
  tax()
})
function tax() {
  var _0xd4304d = 0
  $('td:nth-child(5):visible').each(function () {
    _0xd4304d += Number($(this).text())
  })
  $('#tax_report_tax').html(_0xd4304d.toFixed(2))
  var _0x1d1adb = 0
  $('td:nth-child(6):visible').each(function () {
    _0x1d1adb += Number($(this).text())
  })
  $('#tax_report_amount').html(_0x1d1adb.toFixed(2))
}
$(document).ready(function () {
  currency()
})
function currency() {
  var _0x3a00c7 = $('input[name=sym]').val(),
    _0x3edceb = $('input[name=pls]').val()
  if (_0x3edceb == 1) {
    var _0x407276 = document.getElementsByClassName('symbol')
    for (var _0x52250b = 0; _0x52250b < _0x407276.length; ++_0x52250b) {
      var _0x1328d9 = _0x407276[_0x52250b]
      _0x1328d9.innerHTML = _0x1328d9.innerHTML + ' ' + _0x3a00c7
    }
  } else {
    var _0x407276 = document.getElementsByClassName('symbol')
    for (var _0x52250b = 0; _0x52250b < _0x407276.length; ++_0x52250b) {
      var _0x1328d9 = _0x407276[_0x52250b]
      _0x1328d9.innerHTML = _0x3a00c7 + ' ' + _0x1328d9.innerHTML
    }
  }
}
function couponcurrency() {
  var _0x71a609 = $('input[name=sym]').val(),
    _0x5cf458 = $('input[name=pls]').val()
  if (_0x5cf458 == 1) {
    var _0x5d354e = document.getElementsByClassName('couponsymbol')
    for (var _0x1ef872 = 0; _0x1ef872 < _0x5d354e.length; ++_0x1ef872) {
      var _0x486491 = _0x5d354e[_0x1ef872]
      _0x486491.innerHTML = _0x486491.innerHTML + ' ' + _0x71a609
    }
  } else {
    var _0x5d354e = document.getElementsByClassName('couponsymbol')
    for (var _0x1ef872 = 0; _0x1ef872 < _0x5d354e.length; ++_0x1ef872) {
      var _0x486491 = _0x5d354e[_0x1ef872]
      _0x486491.innerHTML = _0x71a609 + ' ' + _0x486491.innerHTML
    }
  }
}
function paymentcurrency() {
  var _0x4bd9c9 = $('input[name=sym]').val()
  var _0x2d11db = $('input[name=pls]').val()
  if (_0x2d11db == 1) {
    var _0x334662 = document.getElementsByClassName('paysymbol')
    for (var _0x4b1893 = 0; _0x4b1893 < _0x334662.length; ++_0x4b1893) {
      var _0xdd7a03 = _0x334662[_0x4b1893]
      _0xdd7a03.innerHTML = _0xdd7a03.innerHTML + ' ' + _0x4bd9c9
    }
  } else {
    var _0x334662 = document.getElementsByClassName('paysymbol')
    for (var _0x4b1893 = 0; _0x4b1893 < _0x334662.length; ++_0x4b1893) {
      var _0xdd7a03 = _0x334662[_0x4b1893]
      _0xdd7a03.innerHTML = _0x4bd9c9 + ' ' + _0xdd7a03.innerHTML
    }
  }
}
function extracurrency() {
  var _0xb3d50d = $('input[name=sym]').val(),
    _0x2817c3 = $('input[name=pls]').val()
  if (_0x2817c3 == 1) {
    var _0x31c5d4 = document.getElementsByClassName('extsymbol')
    for (var _0x3518ca = 0; _0x3518ca < _0x31c5d4.length; ++_0x3518ca) {
      var _0x514402 = _0x31c5d4[_0x3518ca]
      _0x514402.innerHTML = _0x514402.innerHTML + ' ' + _0xb3d50d
    }
  } else {
    var _0x31c5d4 = document.getElementsByClassName('extsymbol')
    for (var _0x3518ca = 0; _0x3518ca < _0x31c5d4.length; ++_0x3518ca) {
      var _0x514402 = _0x31c5d4[_0x3518ca]
      _0x514402.innerHTML = _0xb3d50d + ' ' + _0x514402.innerHTML
    }
  }
}
function payamucurrency() {
  var _0x5688e8 = $('input[name=sym]').val()
  var _0xb951a9 = $('input[name=pls]').val()
  if (_0xb951a9 == 1) {
    var _0x51162e = document.getElementsByClassName('pamtsymbol')
    for (var _0x482b1d = 0; _0x482b1d < _0x51162e.length; ++_0x482b1d) {
      var _0x34e64a = _0x51162e[_0x482b1d]
      _0x34e64a.innerHTML = _0x34e64a.innerHTML + ' ' + _0x5688e8
    }
  } else {
    var _0x51162e = document.getElementsByClassName('pamtsymbol')
    for (var _0x482b1d = 0; _0x482b1d < _0x51162e.length; ++_0x482b1d) {
      var _0x34e64a = _0x51162e[_0x482b1d]
      _0x34e64a.innerHTML = _0x5688e8 + ' ' + _0x34e64a.innerHTML
    }
  }
}
function poscurrency() {
  var _0x5f0424 = $('input[name=sym]').val()
  var _0x211885 = $('input[name=pls]').val()
  if (_0x211885 == 1) {
    var _0x5ddfb5 = document.getElementsByClassName('possymbol')
    for (var _0xcd58a8 = 0; _0xcd58a8 < _0x5ddfb5.length; ++_0xcd58a8) {
      var _0x1f2990 = _0x5ddfb5[_0xcd58a8]
      _0x1f2990.innerHTML = _0x1f2990.innerHTML + ' ' + _0x5f0424
    }
  } else {
    var _0x5ddfb5 = document.getElementsByClassName('possymbol')
    for (var _0xcd58a8 = 0; _0xcd58a8 < _0x5ddfb5.length; ++_0xcd58a8) {
      var _0x1f2990 = _0x5ddfb5[_0xcd58a8]
      _0x1f2990.innerHTML = _0x5f0424 + ' ' + _0x1f2990.innerHTML
    }
  }
}
function invocurrency() {
  var _0x5d53f7 = $('input[name=sym]').val()
  var _0x5edb92 = $('input[name=pls]').val()
  if (_0x5edb92 == 1) {
    var _0x5d80a0 = document.getElementsByClassName('invosymbol')
    for (var _0x47c546 = 0; _0x47c546 < _0x5d80a0.length; ++_0x47c546) {
      var _0x31e110 = _0x5d80a0[_0x47c546]
      _0x31e110.innerHTML = _0x31e110.innerHTML + ' ' + _0x5d53f7
    }
  } else {
    var _0x5d80a0 = document.getElementsByClassName('invosymbol')
    for (var _0x47c546 = 0; _0x47c546 < _0x5d80a0.length; ++_0x47c546) {
      var _0x31e110 = _0x5d80a0[_0x47c546]
      _0x31e110.innerHTML = _0x5d53f7 + ' ' + _0x31e110.innerHTML
    }
  }
}
function dailyorder(_0xfc430b, _0x1076b5) {
  var _0x5323e3 = window.location.origin,
    _0x22365e = {
      date: _0xfc430b,
      store: _0x1076b5,
    }
  $.ajax({
    type: 'POST',
    url: _0x5323e3 + '/report/report',
    data: _0x22365e,
    dataType: 'json',
    success: function (_0x4cfac6) {
      $('#daily_report_date').val(
        new Date(_0x4cfac6.date).toLocaleDateString('en-CA')
      )
      $('select[name=storeid]').val(_0x4cfac6.store)
      $('.default-select').selectpicker('refresh')
      $('#daily_report_orders').html(_0x4cfac6.orders)
      $('#daily_report_ordersdelivery').html(_0x4cfac6.ordersdeliver)
      $('#daily_report_totalsale').html(_0x4cfac6.orderstotalseal)
      $('#daily_report_payment').html(_0x4cfac6.totalpay)
      $('#daily_report_expence').html(_0x4cfac6.expence)
      currency()
    },
  })
}
function orderreports(_0x3e3509, _0x5b791b, _0x199382) {
  var _0x5785fa = window.location.origin,
    _0x7f0f36 = {
      startdate: _0x5b791b,
      store: _0x3e3509,
      enddate: _0x199382,
    }
  $.ajax({
    type: 'POST',
    url: _0x5785fa + '/report/orderreports',
    data: _0x7f0f36,
    dataType: 'json',
    success: function (_0x321742) {
      $('#order_report_start_date').val(
        new Date(_0x321742.startdate).toLocaleDateString('en-CA')
      )
      $('#order_report_end_date').val(
        new Date(_0x321742.enddate).toLocaleDateString('en-CA')
      )
      $('select[name=storeid]').val(_0x321742.store)
      $('select[name=status]').val('e')
      $('.default-select').selectpicker('refresh')
      $('#tb_row_order_report').html('')
      $.each(_0x321742.orderdata, function (_0x7ed9ce, _0x5c3349) {
        console.log(_0x5c3349),
          $('#tb_row_order_report').append(
            '<tr><td> ' +
              new Date(_0x5c3349.order_date).toLocaleDateString('en-CA') +
              ' </td>' +
              '<td>' +
              _0x5c3349.order_id +
              ' </td>' +
              '<td>' +
              _0x5c3349.custoname +
              '</td>' +
              '<td class="symbol">' +
              _0x5c3349.gross_total +
              '</td>' +
              '<td><span class="symbol"> ' +
              _0x5c3349.status +
              '</span></td>' +
              '</tr>'
          )
      })
      var _0x4bb313 = $('#tb_row_order_report tr').length
      $('#orders_report').text(_0x4bb313)
      var _0x4caece = document.getElementById('tb_row_order_report'),
        _0x24d927 = 0
      for (var _0x1eaf4e = 0; _0x1eaf4e < _0x4caece.rows.length; _0x1eaf4e++) {
        _0x24d927 =
          _0x24d927 + parseFloat(_0x4caece.rows[_0x1eaf4e].cells[3].innerHTML)
      }
      $('#order_report_amount').html(_0x24d927.toFixed(2))
      currency()
    },
  })
}
function salesreports(_0x57168b, _0x3fc6de, _0x4c161a) {
  var _0x4c26d6 = window.location.origin
  var _0xc189be = {
    startdate: _0x3fc6de,
    store: _0x57168b,
    enddate: _0x4c161a,
  }
  $.ajax({
    type: 'POST',
    url: _0x4c26d6 + '/report/salesreports',
    data: _0xc189be,
    dataType: 'json',
    success: function (_0x14a622) {
      $('#sales_report_start_date').val(
        new Date(_0x14a622.startdate).toLocaleDateString('en-CA')
      )
      $('#sales_report_end_date').val(
        new Date(_0x14a622.enddate).toLocaleDateString('en-CA')
      )
      $('select[name=storeid]').val(_0x14a622.store)
      $('.default-select').selectpicker('refresh')
      $('#tb_row_sales_report').html('')
      $.each(_0x14a622.salesdata, function (_0x32c836, _0x1d8448) {
        $('#tb_row_sales_report').append(
          '<tr><td> ' +
            new Date(_0x1d8448.order_date).toLocaleDateString('en-CA') +
            ' </td>' +
            '<td>' +
            _0x1d8448.order_id +
            ' </td>' +
            '<td>' +
            _0x1d8448.custoname +
            '</td>' +
            '<td class="symbol">' +
            _0x1d8448.sub_total +
            '</td>' +
            '<td class="symbol">' +
            _0x1d8448.addon_price +
            '</td>' +
            '<td class="symbol">' +
            _0x1d8448.extra_discount +
            '</td>' +
            '<td class="symbol">' +
            _0x1d8448.coupon_discount +
            '</td>' +
            '<td class="symbol">' +
            _0x1d8448.tax_amount +
            '</td>' +
            '<td class="symbol">' +
            _0x1d8448.gross_total +
            '</td>' +
            '</tr>'
        )
      })
      var _0x627537 = $('#tb_row_sales_report tr').length
      $('#sales_report').text(_0x627537)
      var _0x22d667 = document.getElementById('tb_row_sales_report'),
        _0x577001 = 0,
        _0x43b79e = 0
      for (var _0x17e745 = 0; _0x17e745 < _0x22d667.rows.length; _0x17e745++) {
        _0x43b79e =
          _0x43b79e + parseFloat(_0x22d667.rows[_0x17e745].cells[7].innerHTML)
      }
      for (var _0x17e745 = 0; _0x17e745 < _0x22d667.rows.length; _0x17e745++) {
        _0x577001 =
          _0x577001 + parseFloat(_0x22d667.rows[_0x17e745].cells[8].innerHTML)
      }
      document.getElementById('sales_report_amount').innerHTML =
        _0x577001.toFixed(2)
      document.getElementById('sales_report_tax').innerHTML =
        _0x43b79e.toFixed(2)
      currency()
    },
  })
}
function expencereports(_0x4e96f4, _0x5850a0, _0x14e588) {
  var _0x3adec4 = window.location.origin,
    _0xff4f83 = {
      startdate: _0x5850a0,
      store: _0x4e96f4,
      enddate: _0x14e588,
    }
  $.ajax({
    type: 'POST',
    url: _0x3adec4 + '/report/expencereport',
    data: _0xff4f83,
    dataType: 'json',
    success: function (_0x25a156) {
      $('#Expence_report_start_date').val(
        new Date(_0x25a156.startdate).toLocaleDateString('en-CA')
      )
      $('#Expence_report_end_date').val(
        new Date(_0x25a156.enddate).toLocaleDateString('en-CA')
      )
      $('select[name=storeid]').val(_0x25a156.store)
      $('.default-select').selectpicker('refresh')
      $('#tb_row_expence_report').html('')
      $.each(_0x25a156.expencedata, function (_0x574a1c, _0x2bd0a1) {
        $('#tb_row_expence_report').append(
          '<tr><td> ' +
            new Date(_0x2bd0a1.date).toLocaleDateString('en-CA') +
            ' </td>' +
            '<td>' +
            _0x2bd0a1.cat_name +
            '</td>' +
            '<td class="symbol">' +
            _0x2bd0a1.amount.toFixed(2) +
            '</td>' +
            '<td>' +
            _0x2bd0a1.taxpercent +
            '</td>' +
            '<td class="symbol">' +
            _0x2bd0a1.taxamount.toFixed(2) +
            '</td>' +
            '<td>' +
            _0x2bd0a1.ac_name +
            '</td>' +
            '</tr>'
        )
      })
      var _0x1658e8 = $('#tb_row_expence_report tr').length
      $('#expence_report').text(_0x1658e8)
      var _0x2cac02 = 0
      $('td:nth-child(5):visible').each(function () {
        _0x2cac02 += Number($(this).text())
      })
      $('#expence_report_taxamount').html(_0x2cac02.toFixed(2))
      var _0x12c6a3 = 0
      $('td:nth-child(3):visible').each(function () {
        _0x12c6a3 += Number($(this).text())
      })
      $('#expence_report_amount').html(_0x12c6a3.toFixed(2))
      currency()
    },
  })
}
function taxreports(_0x52f7ca, _0x210c66, _0xc141ee, _0x2937d3) {
  var _0x24c1a3 = window.location.origin,
    _0x4c38fc = {
      store: _0x52f7ca,
      startdate: _0x210c66,
      enddate: _0xc141ee,
      filter: _0x2937d3,
    }
  $.ajax({
    type: 'POST',
    url: _0x24c1a3 + '/report/taxreport',
    data: _0x4c38fc,
    dataType: 'json',
    success: function (_0x211650) {
      $('#tax_report_start_date').val(
        new Date(_0x211650.startdate).toLocaleDateString('en-CA')
      )
      $('#tax_report_end_date').val(
        new Date(_0x211650.enddate).toLocaleDateString('en-CA')
      )
      $('select[name=storeid]').val(_0x211650.store)
      $('select[name=status]').val(_0x211650.filter)
      $('.default-select').selectpicker('refresh')
      $('#tb_row_tax_report').html('')
      $.each(_0x211650.taxdata, function (_0x487021, _0x5aed74) {
        $('#tb_row_tax_report').append(
          '<tr><td>' +
            Number(_0x487021 + 1) +
            '</td>' +
            '<td> ' +
            new Date(_0x5aed74.date).toLocaleDateString('en-CA') +
            ' </td>' +
            '<td>' +
            _0x5aed74.particulars +
            '</td>' +
            '<td class="symbol">' +
            _0x5aed74.befortax.toFixed(2) +
            '</td>' +
            '<td class="symbol">' +
            _0x5aed74.taxamount.toFixed(2) +
            '</td>' +
            '<td class="symbol">' +
            _0x5aed74.amount.toFixed(2) +
            '</td>' +
            '</tr>'
        )
      })
      var _0x36e4af = 0
      $('td:nth-child(5):visible').each(function () {
        _0x36e4af += Number($(this).text())
      })
      $('#tax_report_tax').html(_0x36e4af.toFixed(2))
      var _0x562b1a = 0
      $('td:nth-child(6):visible').each(function () {
        _0x562b1a += Number($(this).text())
      })
      $('#tax_report_amount').html(_0x562b1a.toFixed(2))
      currency()
    },
  })
}
function downloadreport() {
  var _0x15653c = window.location.origin
  var _0x2646f1 = $('#order_report_store').val()
  var _0x39f488 = $('#order_report_start_date').val()
  var _0x27ac4e = $('#order_report_end_date').val()
  window.location.href =
    _0x15653c +
    '/report/export-order/' +
    _0x39f488 +
    '+' +
    _0x2646f1 +
    '+' +
    _0x27ac4e
}
function downloadsalesreport() {
  var _0x143fd2 = window.location.origin
  var _0x3561fd = $('#sales_report_store').val()
  var _0x3ccee7 = $('#sales_report_start_date').val()
  var _0x3b8392 = $('#sales_report_end_date').val()
  window.location.href =
    _0x143fd2 +
    '/report/export-sales/' +
    _0x3ccee7 +
    '+' +
    _0x3561fd +
    '+' +
    _0x3b8392
}
function downloadExpencereport() {
  var _0x53f716 = window.location.origin
  var _0xc06c1f = $('#Expence_report_store').val()
  var _0x5565f5 = $('#Expence_report_start_date').val()
  var _0x4d6fc0 = $('#Expence_report_end_date').val()
  window.location.href =
    _0x53f716 +
    '/report/export-expence/' +
    _0x5565f5 +
    '+' +
    _0xc06c1f +
    '+' +
    _0x4d6fc0
}
function downloadtaxreport() {
  var _0x43434b = window.location.origin
  var _0x164528 = $('#tax_report_store').val()
  var _0x435b3e = $('#tax_report_start_date').val()
  var _0x24cdba = $('#tax_report_end_date').val()
  var _0xde677a = $('#tax_report_status').val()
  window.location.href =
    _0x43434b +
    '/report/export-tax/' +
    _0x435b3e +
    '+' +
    _0x164528 +
    '+' +
    _0x24cdba +
    '+' +
    _0xde677a
}
