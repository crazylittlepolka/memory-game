// Assignment of figures array
const figure = document.getElementsByClassName('circle');
const figures = [...figure];

for (let i = 1; i <= figures.lenght; i++){
  figures[i].addEventListener('click', function(){
    this.classList.toggle('clicked');
  })
}
