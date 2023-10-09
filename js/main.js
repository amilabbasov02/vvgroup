$( document ).ready(function() {
    $(".search img").click(function () {
        $(".search input").addClass("active")
        $(".search-close").addClass("active")
    })
    $(".search-close").click(function () {
        $(".search input").removeClass("active")
        $(".search-close").removeClass("active")
    })
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if(scroll > 300){
            $("#about .container").addClass("active")
        }else{
            $("#about .container").removeClass("active")
        }
    })
    $(".category-name").hover(function(){
        let child = $(this).data('id');
        $(".bg-images img").css("opacity","0")
        $(`.bg-images img:nth-child(${child})`).css("opacity","1")
    })
    $("select").niceSelect()
    $(".win-back").click(function(){
        window.history.back()
    })
    const spHeight = document.querySelectorAll('.support-text');
    let maxHeight = 0;
  
    spHeight.forEach(sp => {
      const spHeight = sp.clientHeight;
      if (spHeight > maxHeight) {
        maxHeight = spHeight;
      }
    });
  
    spHeight.forEach(sp => {
      sp.style.height = `${maxHeight}px`;
    });
});