//open tab on default
window.onload = function() {
    document.getElementById('defaultOpen').dispatchEvent(new Event('mouseover'));
  };

function openContent(event, optionName) {
    adjustTabContentHeight(optionName); //get height so footer can go at bottom
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(optionName).style.display = "block";
    event.currentTarget.className += " active";

    setTimeout(function() {
      adjustTabContentHeight(optionName);
    }, 100);
  }
  function adjustTabContentHeight(optionName) {
    var currentTabContent = document.getElementById(optionName);
    currentTabContent.style.height = 'auto'; 
    var contentHeight = currentTabContent.scrollHeight; 
    currentTabContent.style.height = contentHeight + 'px'; 
    currentTabContent.style.transition = "height 0.3s ease-in-out";
  }