// try to get a gallery, if we can't try to get a mini-gallery

let galleries = document.querySelectorAll('.gallery');
let is_mini = false;


if (galleries.length != 0) {
    if (galleries[0].classList.contains('mini')) {
        is_mini = true;
    }

} else {
    console.log('no galleries were found on this page')
}

//get a list of image handles from the portfolio.manifest.json
get_image_list()
    .then(data => {
        galleries.forEach((gallery) =>{
            let images = [...data]
            let filter = '';

            if (gallery.classList.contains('filter')){

                filter = gallery.id;

                console.log(`gallery filter found: ${filter}`)

                images = images.filter(item =>{
                    console.log(item.file.substring(0, 3))
                    return item.file.substring(0, 3) == filter;
                })
                console.log(images)
            }
            build_gallery(gallery, images, filter)
        })
    })
    .catch();

// console.log(gallery);

function build_gallery(gallery, data) {
    console.log(`Building gallery in: ${gallery} using data: ${data}`)
    //with this list we can randomly select file-paths for images


    //decide how many to select, if we are in a mini-gallery we only select 6 images.
    let selection_count = is_mini ? 6 : data.length;
    let images = select_randoms(selection_count, data);

    console.log(images);

    images.forEach(image => {

        let src = `images/portfolio/${image.file}`;

        let imgHTML = `<img src="${src}" alt="${image.alt}">`

        gallery.innerHTML += imgHTML;
    })
}

function select_randoms(num, data) {
    //randomly selects 'num' items in an array while removing the items specified so they are not chosen twice.

    // if -1 is passed as num the function will effectively just shuffle the array and return it.
    if (num == -1) {
        num = data.length
    }

    let images = [];
    let max = data.length;

    for (i = 0; i < num; i++) {
        let index = Math.floor(Math.random() * (max))
        let img_item = data.splice(index, 1)[0];
        max -= 1;

        images[i] = img_item
    }

    return images
}


async function get_image_list() {
    let response = await fetch('src/portfolio_manifest.json');
    let result = response.json();
    return result
}