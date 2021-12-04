myStorage = window.localStorage;

function whiteTheme()
{
  let body = document.querySelector('body');
  body.classList.remove('dark');
  body.style.backgroundColor = 'white';
}

function darkTheme()
{
  let body = document.querySelector('body');
  body.classList.add('dark');
  body.style.backgroundColor = '#343a40';
}

function changeTheme()
{

  if(myStorage.getItem('state') == 'light'){
    darkTheme();
    myStorage.setItem('state', 'dark');
  }
  else{
    whiteTheme();
    myStorage.setItem('state', 'light');
  }
}

function loadTheme()
{
  if(myStorage.getItem('state') == 'dark'){
    darkTheme();
    myStorage.setItem('state', 'dark');
  }
  else{
    whiteTheme();
    myStorage.setItem('state', 'light');
  }
}


window.onload = loadTheme();
