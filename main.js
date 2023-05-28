let btn = document.getElementById('menuBtn');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let links = document.querySelectorAll('.right a');
let backs = [
  'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/20/e2/e3/our-professional-tour.jpg?w=1200&h=900&s=1)',
  'url(https://tn.fishki.net/26/upload/post/2019/09/23/3094566/tn/4214f0feb57695611dc22f997c641617.jpg)',
  'url(https://p4.tabor.ru/feed/2017-08-19/14479518/573323_760x500.jpg)',
  'url(https://el.kz/upload/storage_el/40/40c21e0834d590c786e97613a33fba13.jpg)',
];

let flag = true;

btn.addEventListener('click', () => {
  flag = !flag;
  if (!flag) {
    left.style.transform = 'translateY(0)';
    right.style.transform = 'translateY(0)';
  } else {
    left.style.transform = 'translateY(100vh)';
    right.style.transform = 'translateY(-100vh)';
  }
  left.style.background =
    "url('https://images.unsplash.com/photo-1583138605411-f85466f61638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mousemove', () => {
    left.style.background = backs[i];
  });
}
