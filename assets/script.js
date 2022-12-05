var boxes = ['#a','#b','#c','#d','#e','#f','#g','#h','#i','#j','#k',
'#l','#m','#n','#o','#p','#q','#r','#s','#t','#u','#v','#w','#x','#y','#z'];
var randombox = boxes[Math.floor(Math.random() * boxes.length)];
var timesClicked = 0;



$('#button1').click(function() {
    
    console.log('clicked');
    
    $(randombox).css({
        'font-size' : '35px',
        'opacity': '100%',
        'box-shadow' : '0px 0px 10px 5px green'
     });
  
    
});











