$(document).ready(function(){
 //hide
  $('#show_hide').click(function(){
      $('#sh').hide(2000);
  });

  //show
  $('#show_hide1').click(function(){
      $('#sh').show(2000);
  });

  //toggle
  $('#bt_tgl').click(function(){
      $('#shh').toggle(2000);
  });

  //fadeout
  $('#fade_out').click(function(){
      $('#sh1').fadeOut(1000);
  });

  //fadein
  $('#fade_in').click(function(){
      $('#sh1').fadeIn(1000);
  });

  //fadetoggle
  $('#fade_toggle').click(function(){
  $('#sh1').fadeToggle(1000);
  });

  //fadeto
  $('#fade_to').click(function(){
  $('#sh1').fadeTo(1000, .5);
  });

  //slide
  $('.image').click(function(){
      $('.flip').slideToggle(1000);
  });

  //drag

  $( "#draggable1" ).draggable();
  //drop
  $( "#draggable2" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
  
  //resizable
  $( "#resizable" ).resizable();

  //sortable
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

  //accordion
  $( "#accordion1" )
  .accordion({
    header: "> div > h3"
  })
  .sortable({
    axis: "y",
    handle: "h3",
    stop: function( event, ui ) {
      // IE doesn't register the blur when sorting
      // so trigger focusout handlers to remove .ui-state-focus
      ui.item.children( "h3" ).triggerHandler( "focusout" );

      // Refresh accordion to handle new order
      $( this ).accordion( "refresh" );
    }
  });

  //autocomplete
  var items = [
    "Html 5",
    "CSS 3",
    "Bootstrap 5",
    "JavaScript",
    "C",
    "C++",
    "JQuery",
    "Python",
    "Laravel"
  ];
  $( "#autoCplt" ).autocomplete({
    source: items
  });

  //datepicker
  $( "#datepicker" ).datepicker();

  //menu
  $( "#menu" ).menu();

  //coloranimation
  var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#F386F3",
          color: "#fff",
          width: 800
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 400
        }, 1000 );
      }
      state = !state;
    });

});
