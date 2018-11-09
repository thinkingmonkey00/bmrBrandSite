'use strict';

//initialize selectize
//$(function() {
  //$('select').selectize({});
//});

//Fix mobile keyboard input
//$('select').selectize({
  //  onInitialize: function() {
    //    this.$control_input.attr('readonly', true);
     //}
  //});

//Captcha
$('.bot').on('click',function(){
    $(this).find('i').addClass('fa-check-circle');
    $(this).find('p').addClass('chk');
    $(this).find('i').removeClass('fa-circle-o');
    $('.bot').css('pointer-events','none');
    $('.alert').addClass('hidden');
    $('form.callback').append('<input name=human value=1 type=hidden>');
    setTimeout(function() {
    $('.bot').animate({opacity:'0.2'},500);
      this.trigger("reset");
      }, 600);
});

// E-mail Ajax Send & check
$('form.callback').on('submit',function(){
  $(this).removeClass('enters');
    if($('form.callback input[name=human]').val()!=1)
    { $('.alert').addClass('hidden');
      $('.alert-warning').removeClass('hidden');
      $('.bot').removeClass('shake'); setTimeout(function(){$('.bot').addClass('shake'); }, 400); return false;}
    else if(!$('form.callback input[name=name]').val() || !$('form.callback textarea[name=message-text]').val() || !$('form.callback input[name=email]').val())
    { $('.alert').addClass('hidden');
      $('.alert-danger').removeClass('hidden');
      $('form.callback').addClass('shake'); setTimeout(function(){$('form.callback').removeClass('shake'); }, 400); return false;}
    else{ var th = $(this);
          $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
            }).done(function() {
            $('.alert').addClass('hidden');

// popup text succesfull after send form
$(th).find('.success').addClass('active').css('display','block').hide().fadeIn();
            setTimeout(function() {
$(th).find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
      }, 3000);
     });
    return false;
   }
 });
// hidden alert block after change service
$(document).ready(function(){
    $('#category').on('change', function() {
      if ( this.value == '1')
      { $(".alert").show();
      } else
      { $(".alert").hide();
      }
    });
});
// Button animation
var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

