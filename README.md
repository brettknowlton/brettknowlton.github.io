## Petals By Alia Website Code
**Petals by Alia** is a real company owned by Alia Knowlton. 
This repository exists as a middle-man repo to hold onto the general layout of her website soon to be published to _petalsbyalia.com_
Petals by Alia offers real & synthetic flower arrangements for:
 - Weddings
 - Events
 - Home Decor
 - & More

[![Alt text](images/icon/instagram.png "Flower Icon")](https://www.instagram.com/petalsbyalia) 

The Domain website does not currently work, you can check out this code at the demo website below hosted with github pages

### See working demo ( pages ): [Working Demo](brettknowlton.github.io)
### See domain Website ( cloudflare ): [Petals by Alia](petalsbyalia.com)

Note: This website uses a randomized Gallery from a json image manifest- Images may not appear in the same place each time the site is visited:
```
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
```
