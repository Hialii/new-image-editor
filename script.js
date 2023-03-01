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
      filterName.textContent = option.textContent;

      //salva o valor da let(silder) no btn
      if(option.id === "brightness") {
         filterSlider.max = "200";
         filterSlider.value = brightness; //atribui o valor do slider a variável 
         filterValue.textContent =`${brightness}%` // atribui o valor da variável ao valor do input
      }else if (option.id === "saturation") {
         filterSlider.max = "200";
         filterSlider.value = saturation;
         filterValue.textContent = `${saturation}%`;
      }else if (option.id === "inversion") {
         filterSlider.max = "100";
         filterSlider.value = inversion;
         filterValue.textContent = `${inversion}%`;
      }else {
         filterSlider.max = "100";
         filterSlider.value = grayscale;
         filterValue.textContent = `${grayscale}%`
      }
   });
});

const updateFilter = () => {
   filterValue.textContent = `${filterSlider.value}%`
   const selectedFilter = document.querySelector(".filter .active");  //pega o filtro selecionado

   //o valor da let será o valor do slider
   if(selectedFilter.id === "brightness") {
      brightness = filterSlider.value;
   }if(selectedFilter.id === "saturation") {
      saturation = filterSlider.value;
   }if(selectedFilter.id === "inversion") {
      inversion = filterSlider.value;
   }else {
      grayscale = filterSlider.value;
   }
}



filterSlider.addEventListener("input", updateFilter)
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());