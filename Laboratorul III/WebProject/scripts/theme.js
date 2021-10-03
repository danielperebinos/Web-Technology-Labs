// let storyLink = document.querySelector('.');
let dark = false;

function whiteTheme(){
  let header = document.querySelector('header');
  let headerLinks = document.querySelectorAll('header a');
  let body = document.querySelector('body');
  let mainbox = document.querySelector('.mainbox');

  header.classList.remove('dark__header')
  body.classList.remove('dark__body')
  mainbox.classList.remove('dark__mainbox')

  let link;
  for(link of headerLinks){
      link.classList.remove('dark__link')
  }



  let genrebox = document.querySelector('.genresbtn');
  let genreb = document.querySelectorAll('.genrechoise');
  let slider = document.querySelectorAll('.slider')

  genrebox.classList.remove('dark__body');

  for(link of genreb){
    link.classList.remove('dark__link');
  }
}

function darkTheme(){
  let header = document.querySelector('header');
  let headerLinks = document.querySelectorAll('header a');
  let body = document.querySelector('body');
  let mainbox = document.querySelector('.mainbox');

  header.classList.add('dark__header')
  body.classList.add('dark__body')
  mainbox.classList.add('dark__mainbox')

  let link;
  for(link of headerLinks){
      link.classList.add('dark__link')
  }



  let genrebox = document.querySelector('.genresbtn');
  let genreb = document.querySelectorAll('.genrechoise');
  let slider = document.querySelectorAll('.slider')

  genrebox.classList.add('dark__body');

  for(link of genreb){
    link.classList.add('dark__link');
  }
}

function changeTheme()
{
  if(!dark){
    darkTheme();
    dark = true;
  }
  else{
    whiteTheme();
    dark = false;
  }
}

// storyLink.addEventListener("dblclick", darkTheme);
// darkTheme()
