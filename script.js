const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll("filter button")
previewImg = document.querySelector(".preview-img img"),
chooseImgBtn = document.querySelector(".choose-image");

const loadImage = () => {
   let file = fileInput.files[0];
   console.log(file)
   if(!file) return;
   previewImg.src = URL.createObjectURL(file);
   previewImg.addEventListener('load', () => {
      document.querySelector(".container").classList.remove("disabled");
   })
   
}


fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());