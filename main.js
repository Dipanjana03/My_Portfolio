var typed = new Typed('.typing', {
    strings: ['FRONT-END DEVELOPER' ,'DESIGNER'],
    typeSpeed: 80,
    backSpeed:80,
    smartBackspace:true,
    loop:true,
    loopCount:Infinity,
    startDelay:1000

  });




  particlesJS("particles-js", {
    "particles":
    {"number":{
      "value":100,
      "density":{"enable":true,"value_area":800}},
       "color":{"value":"#ffffff"},
       "shape":{"type":"circle",
           "stroke":{"width":0,"color":"#000000"},
            "polygon":{"nb_sides":5},
           "image":{"src":"img/github.svg",
              "width":100,
              "height":100}},
        "opacity":{
          "value":0.5,
          "random":false,
          "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
        "size":{
          "value":3,
          "random":true,
          "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
        "line_linked":{
          "enable":true,
          "distance":150,
          "color":"#ffffff",
          "opacity":0.4,
          "width":1},
          "move":{
            "enable":true,
            "speed":6,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}}
    ,"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});




    let list = document.querySelectorAll('.list') ;//talking all the tabs with class list
        let item = document.querySelectorAll('.magnific-img');//talking all the img with class itembox
        console.log('img-gallery-magnific');//to see the length
        for(let i=0; i<list.length; i++){
            list[i].addEventListener('click',function(){
                for(let j=0;j<list.length;j++){
                    list[j].classList.remove('active');
                }
                this.classList.add('active');
                let dataFilter=this.getAttribute('data-filter');
                console.log(dataFilter);
                for(let k=0;k<item.length;k++){
                    item[k].classList.remove('active');
                    item[k].classList.add('hide');

                    if(item[k].getAttribute('data-item')== dataFilter || dataFilter== 'all'){
                        item[k].classList.remove('hide');
                        item[k].classList.add('active');

                    }

                }
            })     
           }

// ----------------------------------modal---------------------------------------------------------
 
$(document).ready(function(){
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', 
    gallery:{
        enabled:true
      },
  
    zoom: {
      enabled: true, 
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      opener: function(openerElement) {
  
        return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
  
  });
  
  });


 