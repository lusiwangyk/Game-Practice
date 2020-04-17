
var imgArray =[];

imgArray[0] = "https://www.petmd.com/sites/default/files/adult-homeless-cat-asking-for-food-picture-id847415388.jpg";
imgArray[1] = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/outdoor_cat_risks_ref_guide/1800x1200_outdoor_cat_risks_ref_guide.jpg?resize=750px:*";
imgArray[2] = "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?cs=srgb&dl=adorable-animal-blur-cat-617278.jpg&fm=jpg";
imgArray[3] = "https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg";



var next = document.querySelector(".next");
var imgHome = document.querySelector(".imghome");
var img = document.createElement("img");


img.setAttribute("width","500px");
img.setAttribute("height","350px");
var i = 0;
img.src = imgArray[i];
imgHome.appendChild(img);



function goNext(event) {
    event.stopPropagation();
    i++;
    console.log(i);
    img.src = imgArray[i];
    if ( i > 3) {
        i = i -4;
        console.log(i);
        img.src = imgArray[i];
    }

}



next.addEventListener("click",goNext);













