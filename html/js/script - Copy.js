﻿  var br1 = $('input[name="checkboxbr1Input"]');
  var br2 = $('input[name="checkboxbr2Input"]');
  var br3 = $('input[name="checkboxbr3Input"]');
  var br4 = $('input[name="checkboxbr4Input"]');
  var br5 = $('input[name="checkboxbr5Input"]');
  
  var ba1 = $('input[name="checkboxba1Input"]');
  var ba2 = $('input[name="checkboxba2Input"]');
  var ba3 = $('input[name="checkboxba3Input"]');
  var ba4 = $('input[name="checkboxba4Input"]');
  
  var f1 = $('input[name="checkboxf1Input"]');
  var f2 = $('input[name="checkboxf2Input"]');
  var f3 = $('input[name="checkboxf3Input"]');
  var f4 = $('input[name="checkboxf4Input"]');
  
  br1.change(function(){br2.prop('checked',false);});
  br1.change(function(){br3.prop('checked',false);});
  br1.change(function(){br4.prop('checked',false);});
  br1.change(function(){br5.prop('checked',false);});
  br2.change(function(){br1.prop('checked',false);});
  br2.change(function(){br3.prop('checked',false);});
  br2.change(function(){br4.prop('checked',false);});
  br2.change(function(){br5.prop('checked',false);});
  br3.change(function(){br1.prop('checked',false);});
  br3.change(function(){br2.prop('checked',false);});
  br3.change(function(){br4.prop('checked',false);});
  br3.change(function(){br5.prop('checked',false);});
  br4.change(function(){br1.prop('checked',false);});
  br4.change(function(){br2.prop('checked',false);});
  br4.change(function(){br3.prop('checked',false);});
  br4.change(function(){br5.prop('checked',false);});
  br5.change(function(){br2.prop('checked',false);});
  br5.change(function(){br3.prop('checked',false);});
  br5.change(function(){br4.prop('checked',false);});
  br5.change(function(){br1.prop('checked',false);});
  
  ba1.change(function(){ba2.prop('checked',false);});
  ba1.change(function(){ba3.prop('checked',false);});
  ba1.change(function(){ba4.prop('checked',false);});
  ba2.change(function(){ba1.prop('checked',false);});
  ba2.change(function(){ba3.prop('checked',false);});
  ba2.change(function(){ba4.prop('checked',false);});
  ba3.change(function(){ba1.prop('checked',false);});
  ba3.change(function(){ba2.prop('checked',false);});
  ba3.change(function(){ba4.prop('checked',false);});
  ba4.change(function(){ba1.prop('checked',false);});
  ba4.change(function(){ba2.prop('checked',false);});
  ba4.change(function(){ba3.prop('checked',false);});

  
  f1.change(function(){f2.prop('checked',false);});
  f1.change(function(){f3.prop('checked',false);});
  f1.change(function(){f4.prop('checked',false);});
  f2.change(function(){f1.prop('checked',false);});
  f2.change(function(){f3.prop('checked',false);});
  f2.change(function(){f4.prop('checked',false);});
  f3.change(function(){f1.prop('checked',false);});
  f3.change(function(){f2.prop('checked',false);});
  f3.change(function(){f4.prop('checked',false);});
  f4.change(function(){f1.prop('checked',false);});
  f4.change(function(){f2.prop('checked',false);});
  f4.change(function(){f3.prop('checked',false);});  
  
  $('div.mcheckbox').click(function(){
    var check1 = document.getElementById('check1');
    if (document.getElementById('checkboxbr1Input').checked) {
        check1.style.display = 'inline-block';
    } 
    else if (document.getElementById('checkboxbr2Input').checked) {
        check1.style.display = 'inline-block';
    }
    else if (document.getElementById('checkboxbr3Input').checked) {
        check1.style.display = 'inline-block';
    }
    else if (document.getElementById('checkboxbr4Input').checked) {
        check1.style.display = 'inline-block';
    }
    else if (document.getElementById('checkboxbr5Input').checked) {
        check1.style.display = 'inline-block';
    }
    else {
      check1.style.display = 'none'
    }
  });

  $('div.mbacheckbox').click(function(){
    var check2 = document.getElementById('check2');
    if (document.getElementById('checkboxba1Input').checked) {
        check2.style.display = 'inline-block';
    } 
    else if (document.getElementById('checkboxba2Input').checked) {
        check2.style.display = 'inline-block';
    }
    else if (document.getElementById('checkboxba3Input').checked) {
        check2.style.display = 'inline-block';
    }
    else if (document.getElementById('checkboxba4Input').checked) {
        check2.style.display = 'inline-block';
    }
    else {
      check2.style.display = 'none'
    }
  });

  $('div.mfcheckbox').click(function(){
    var check3 = document.getElementById('check3');
    if (document.getElementById('checkboxf1Input').checked) {
        check3.style.display = 'inline-block';
    } 
    else if (document.getElementById('checkboxf2Input').checked) {
        check3.style.display = 'inline-block';
    }
    else if (document.getElementById('checkboxf3Input').checked) {
        check3.style.display = 'inline-block';
    }
    else if (document.getElementById('checkbof4Input').checked) {
        check3.style.display = 'inline-block';
    }
    else {
      check3.style.display = 'none'
    }
  });
