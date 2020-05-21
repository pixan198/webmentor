$(document).ready(function(){
 $('button').click(function(){
  const name = $('#nameid').val();
  $('.imgage').attr('src',`https://joeschmoe.io/api/v1/${name}`);
  $('#nameid').attr('placeholder',`${name}`);
 });
});
