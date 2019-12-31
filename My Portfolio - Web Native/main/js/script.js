$('.page-scroll').on('click',function(e){
    //Ambil isi href
    var tujuan = $(this).attr('href');
    //Tangkap section
    var sectionTujuan = $(tujuan);

    //Pindahkan scroll
    $('html,body').animate({
        scrollTop : sectionTujuan.offset().top - 70
    }, 50 , 'swing');

    e.preventDefault();
});
// console.log('hai');
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


