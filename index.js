
//------------------------------

var x = '';
var y = '';
for (index = 0; index < 5; index++) {
   switch (index) {
      case 0:
         x = '*';  break;
      case 1:
         x = '**'; break;
      case 2:
         x = '***'; break;
      case 3:
         x = '****'; break;
      case 4:
         x = '*****'; break;
   }
   document.write(x);
   document.write("<br>");
}

// -------------------------

for (var x = 1; x < 8; x++) {
   for (var y = 1; y <= x; y++) {
      document.write('*');
   }
   document.write("<br>");
}

//------------------------


