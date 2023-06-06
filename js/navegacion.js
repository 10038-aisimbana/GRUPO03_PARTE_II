function showEnlargedView(thumbnail) {
var enlargedViewContainer = document.querySelector('.enlarged-view-container');
var enlargedImage = enlargedViewContainer.querySelector('img');
var thumbnailImage = thumbnail.querySelector('img');

enlargedImage.src = thumbnailImage.src;
enlargedViewContainer.classList.add('active');
}

function hideEnlargedView() {
var enlargedViewContainer = document.querySelector('.enlarged-view-container');
enlargedViewContainer.classList.remove('active');
}