function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");
    let mainTitle = document.querySelector("#gallery-info h3");
    let mainDescription = document.querySelector("#gallery-info p");

    thumbnails.forEach(function(thumbnail) {

        // Preload large images
        let newImageSrc = thumbnail.dataset.largeVersion;
        let largeVersion = new Image();
        largeVersion.src = newImageSrc;

        thumbnail.addEventListener("click", function(){
            // Set clicked image as display image
            mainImage.setAttribute("src", largeVersion.src);

            // Update image info.
            let newImageAlt = thumbnail.alt;
            let newImageTitle = thumbnail.dataset.title;
            let newImageDescription = thumbnail.dataset.description;
            mainImage.setAttribute("alt", newImageAlt);
            mainTitle.textContent = newImageTitle;
            mainDescription.textContent = newImageDescription;

            // Change which image is current
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");
        })
    })
}