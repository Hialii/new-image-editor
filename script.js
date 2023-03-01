const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button"), 
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterSlider = document.querySelector(".slider input"),
previewImg = document.querySelector(".preview-img img"),
chooseImgBtn = document.querySelector(".choose-image");

let brightness= 100, saturation = 100, inversion = 0, grayscale = 0;

const loadImage = () => {
   let file = fileInput.files[0];
   console.log(file)
   if(!file) return;
   previewImg.src = URL.createObjectURL(file);
   previewImg.addEventListener('load', () => {
      document.querySelector(".container").classList.remove("disabled");
   });
   
};

filterOptions.forEach(option => {
   option.addEventListener("click", () => {
      document.querySelector(".filter .active").classList.remove("active");
      option.classList.add("active");
      filterName.textContent = option.textContent
   });
});

const updateFilter = () => {
   filterValue.textContent = `${filterSlider.value}%`
   const selectedFilter = document.querySelector(".filter .active"); 

   if(selectedFilter.id === "brightness") {
      brightness = filterSlider.value;
   }if(selectedFilter.id === "saturation") {
      saturation = filterSlider.value;
   }if(selectedFilter === "inversion") {
      inversion = filterSlider.value;
   }else {
      grayscale = filterSlider.value;
   }
}



filterSlider.addEventListener("input", updateFilter)
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());