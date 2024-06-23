 const genMemebtn = document.querySelector('.meme-generator .generate-meme-button');
 const memeImg = document.querySelector('.meme-generator img');
 const memTitle = document.querySelector('.meme-generator .meme-title'); 
 const memAuthor = document.querySelector('.meme-author');

 const updateDetails=(url,title,author)=>{
   memeImg.setAttribute("src" , url);
   memTitle.innerHTML = title;
   memAuthor.innerHTML = author;
 }
const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json())
    .then((data)=>{
        updateDetails(data.url , data.title , data.author);
    });
};

genMemebtn.addEventListener("click" , generateMeme);