
//------------------------------

var x = '';
var y='';
for (index = 0; index < 5; index++) {

   switch (index) {
      case 0:
         x = '*';
         break;
      case 1:
         x = '**';
         break;
      case 2:
         x = '***';
         break;
      case 3:
         x = '****';
         break;
      case 4:
         x = '*****';
         break;
   }

//   y=y+x;

document.write(x);
document.write("<br>");
// document.write("\n");


}


// document.getElementById('print').innerHTML = y;
// document.write='*'+("\n");


