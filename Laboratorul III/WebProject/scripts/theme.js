myStorage = window.localStorage;

function whiteTheme(){
  let header = document.querySelector('header');
  let headerLinks = document.querySelectorAll('header a');
  let body = document.querySelector('body');
  let mainbox = document.querySelector('.mainbox');
  let menu = document.querySelector('.menu');

  header.classList.remove('dark__header');
  body.classList.remove('dark__body');
  mainbox.classList.remove('dark__mainbox');
  menu.classList.remove('dark__header');

  let link;
  for(link of headerLinks){
      link.classList.remove('dark__link');
  }


  if (location.pathname.split("/").slice(-1) == 'home.html')
  {
    let genrebox = document.querySelector('.genresbtn');
    let genreb = document.querySelectorAll('.genrechoise');
    let slider = document.querySelectorAll('.slider');

    genrebox.classList.remove('dark__body');

    for(link of genreb){
      link.classList.remove('dark__link');
    }
  }
  else if(location.pathname.split("/").slice(-1) == 'top.html')
  {
    let titlebox = document.querySelectorAll('.titlebox');

    for(box of titlebox){
      box.classList.add('titlebox__light');
      box.classList.remove('dark__titlebox');
    }
  }

}

function darkTheme(){
  let header = document.querySelector('header');
  let headerLinks = document.querySelectorAll('header a');
  let body = document.querySelector('body');
  let mainbox = document.querySelector('.mainbox');
  let menu = document.querySelector('.menu');

  header.classList.add('dark__header');
  body.classList.add('dark__body');
  mainbox.classList.add('dark__mainbox');
  menu.classList.add('dark__header');

  let link;
  for(link of headerLinks){
      link.classList.add('dark__link');
  }


  if (location.pathname.split("/").slice(-1) == 'home.html')
  {
    let genrebox = document.querySelector('.genresbtn');
    let genreb = document.querySelectorAll('.genrechoise');
    let slider = document.querySelectorAll('.slider')

    genrebox.classList.add('dark__body');

    for(link of genreb){
      link.classList.add('dark__link');
    }

  }
  else if(location.pathname.split("/").slice(-1) == 'top.html')
  {
    let titlebox = document.querySelectorAll('.titlebox');

    for(box of titlebox){
      box.classList.add('dark__titlebox');
      box.classList.remove('titlebox__light');
    }
  }

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
