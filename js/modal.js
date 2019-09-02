// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgTest");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var showModal = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


modal.addEventListener('click', function(e){
  if(document.getElementById("myModal").style.display === "block"){
    if (document.getElementById('img01').contains(e.target)){
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
  else {

  }
});

for (var i = 0; i < img.length; i++){
  img[i].addEventListener('click', showModal);
}
