function tabFunction(evt, Name) {
  var i, tabContent, tabSwitch;
  tabContent = document.getElementsByClassName('tab_Content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  tabSwitch = document.getElementsByClassName('tab_Switch');
  for (i = 0; i < tabSwitch.length; i++) {
    tabSwitch[i].className = tabSwitch[i].className.replace(' active', '');
  }
  document.getElementById(Name).style.display = 'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();
