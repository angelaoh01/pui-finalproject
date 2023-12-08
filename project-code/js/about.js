window.onload = function() {
    // Trigger a click on the 'Mission' tab button
    document.getElementById('defaultOpen').dispatchEvent(new Event('mouseover'));
  };

function openContent(evt, optionName) {
  adjustTabContentHeight(optionName);
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";

    setTimeout(function() {
      adjustTabContentHeight(optionName);
    }, 100);
  }
  function adjustTabContentHeight(optionName) {
    var currentTabContent = document.getElementById(optionName);
  currentTabContent.style.height = 'auto'; // Set height to 'auto' first
  var contentHeight = currentTabContent.scrollHeight; // Get scroll height
  currentTabContent.style.height = contentHeight + 'px'; // Set actual height
  
  // Use CSS transitions for smooth height adjustment
  currentTabContent.style.transition = "height 0.3s ease-in-out";
  }