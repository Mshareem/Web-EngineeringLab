

  const images = document.querySelectorAll('img');  
  const prevBtn = document.getElementByClass('prev');
  const nextBtn = document.getElementByClass('next');
  const currimg=document.getElementsByClassName("firstimg");

  let currentImageIndex=0;


function ShowImage(){

currimg



}
 
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
 
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    
  }

  
