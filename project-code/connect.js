document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    let options = {
      duration: 200,
      dist: -100,
      shift: 150,
      numVisible: 3,
      noWrap: false,
      fullWidth: false,
      indicators: false,
    };
    var instances = M.Carousel.init(elems, options);
  
  });