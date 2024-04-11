const slider = document.querySelector('.slider');
const next = document.querySelector(".next")
function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.append(items[items.ngth -1]);
}
document.addEventListener('click',activate,false);

setInterval(() => {
    next.click();
}, 1800);
