slideShow('#project-slideshow-wrapper');
slideShow('#page-slideshow-wrapper');
slideShow('#sidebar-slideshow-wrapper');

tab('#tabs-1');
tab('#tabs-2');

accordion('#acc-1');
accordion('#acc-2');

searchBtn();

function searchBtn() {
    const searchBox = document.querySelector('#search-box');

    document.addEventListener('click', event => {
        const searchClicked = event.target.matches('#search-button, #search-button a, #search-button i');
        const inputClicked = event.target.matches('#search-box *');

        if (searchClicked) {
            searchBox.classList.toggle('active');
        } else {
            if (!inputClicked) {
                searchBox.classList.remove('active');
            }
        }
    })
}