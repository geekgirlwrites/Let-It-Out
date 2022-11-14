// const search = () =>{
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const storeitems = document.getElementById("article-list");
//     const article = document.querySelectorAll(".home-article-content");
//     const aname = article.getElementsByTagName("h3");

//     for(var i=0; i<aname.length; i++){
//         let match = article[i].getElementsByTagName('h3')[0];

//         if(match){
//             let textvalue = match.textContent || match.innerHTML

//             if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//                 article[i].style.display = "";
//             }
//             else{
//                 article[i].style.display = "none";
//             }
//         }
//     }
// }

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    let x = document.getElementsByClassName('home-article-content');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toUpperCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}