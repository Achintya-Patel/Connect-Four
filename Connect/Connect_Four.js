var pone=prompt("Player One: Enter Your Name , you will be Blue");
var ptwo=prompt("Player Two: Enter Your Name , you will be Red");
var r=$('td');
var ind='';
$('h3').text(pone+": it is your turn, please pick a column to drop your blue chip");
  r.click(function(){
  if($('h3').text()===pone+": it is your turn, please pick a column to drop your blue chip")
  {$('h3').text(ptwo+": it is your turn, please pick a column to drop your red chip");
   ind=jQuery.inArray(this,r);
   for(var i=35+(ind%7);i>=0;i-=7)
   {if(r[i].style.backgroundColor!=='blue'&&r[i].style.backgroundColor!=='red')
    {r[i].style.backgroundColor='blue'; r[i].style.borderColor='blue'; break;}
   }
  }
  else if($('h3').text()===ptwo+": it is your turn, please pick a column to drop your red chip")
  {$('h3').text(pone+": it is your turn, please pick a column to drop your blue chip");
   ind=jQuery.inArray(this,r);
   for(var i=35+(ind%7);i>=0;i-=7)
   {if(r[i].style.backgroundColor!=='blue'&&r[i].style.backgroundColor!=='red')
    {r[i].style.backgroundColor='red'; r[i].style.borderColor='red'; break;}
   }
  }
  for (var i = 0; i < r.length; i+=7)
  for (var j = 0; j < 4; j++) {
    if(r[i+j].style.backgroundColor===r[i+j+1].style.backgroundColor&&r[i+j+1].style.backgroundColor===r[i+j+2].style.backgroundColor&&r[i+j+2].style.backgroundColor===r[i+j+3].style.backgroundColor&&r[i+j].style.backgroundColor!=='')
    {if(r[i+j].style.backgroundColor==='blue')
      $('h3').text(pone+" WON!").css('fontSize','50px');
     else
      $('h3').text(ptwo+" WON!").css('fontSize','50px');
     break;
    }
   }
  for(var i=0; i<21; i++)
    if(r[i].style.backgroundColor===r[i+7].style.backgroundColor&&r[i+7].style.backgroundColor===r[i+14].style.backgroundColor&&r[i+14].style.backgroundColor===r[i+21].style.backgroundColor&&r[i].style.backgroundColor!=='')
    {if(r[i].style.backgroundColor==='blue')
      $('h3').text(pone+" WON!").css('fontSize','50px');
     else
      $('h3').text(ptwo+" WON!").css('fontSize','50px');
     break;
    }
  for(var i=0; i<18; i++)
    if(r[i].style.backgroundColor===r[i+8].style.backgroundColor&&r[i+8].style.backgroundColor===r[i+16].style.backgroundColor&&r[i+16].style.backgroundColor===r[i+24].style.backgroundColor&&r[i].style.backgroundColor!=='')
    {if(r[i].style.backgroundColor==='blue')
      $('h3').text(pone+" WON!").css('fontSize','50px');
     else
      $('h3').text(ptwo+" WON!").css('fontSize','50px');
     break;
    }
  for(var i=0; i<21; i++)
    if(r[i].style.backgroundColor===r[i+6].style.backgroundColor&&r[i+6].style.backgroundColor===r[i+12].style.backgroundColor&&r[i+12].style.backgroundColor===r[i+18].style.backgroundColor&&r[i].style.backgroundColor!=='')
    {if(r[i].style.backgroundColor==='blue')
      $('h3').text(pone+" WON!").css('fontSize','50px');
     else
      $('h3').text(ptwo+" WON!").css('fontSize','50px');
     break;
    }
    var tie=1;
  for(var i=0;i<42;i++)
  if (r[i].style.backgroundColor==='')
  {tie=0; break;}
  if(tie===1)
  $('h3').text("IT'S A TIE!").css('fontSize','50px');
})
