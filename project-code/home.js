document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.getElementById('mySidenav');
  var toggleButton = document.getElementById('sidenav-trigger');

  toggleButton.addEventListener('click', function() {
    if (sidenav.style.display === 'block' || getComputedStyle(sidenav).display === 'block') {
      sidenav.style.display = 'none';
    } else {
      sidenav.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  let options = {
    indicators: true,
    height: 800,
    duration: 500,
    interva: 6000,
  };
  var instances = M.Slider.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  let options = {
    duration: 200,
    dist: 0,
    shift: 0,
    numVisible: 1,
    noWrap: false,
    fullWidth: true,
    indicators: true
  };
  var instances = M.Carousel.init(elems, options);

  var carouselInstances = M.Carousel.getInstance(elems[0]); // Assuming only one carousel instance
  var prevButton = document.querySelector('.left-icon');
  var nextButton = document.querySelector('.right-icon');

  prevButton.addEventListener('click', function() {
    carouselInstances.prev();
  });

  nextButton.addEventListener('click', function() {
    carouselInstances.next();
  });
});
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });




