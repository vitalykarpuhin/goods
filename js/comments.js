
function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
}

function uniHide(e) {
 style = document.getElementById(e).style;
    style.display = (style.display == 'block') ?'block':'none' ;
    
}

$('.btn_hide').click(function(){
  if (!$(this).data('status')) {
    $(this).html('закрыть');
   
    $(this).data('status', true);
  }
  else {
    $(this).html('комментарии');
    $(this).data('status', false);
  }
}); 





KayanYazi = function(nesne, zaman) {
        let yaziNesne = nesne;
        
        setInterval(function() {
            let yazi = yaziNesne.innerHTML;
            let harf = yazi.substring(0, 1);
            let kalan = yazi.substring(1, yazi.length);
            kalan = kalan + harf;
            yaziNesne.innerHTML = kalan;
        }, zaman);
    } 
    var nesne = document.getElementById('yazi');
     KayanYazi(nesne, 100)