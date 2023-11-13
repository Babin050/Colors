
// const colors=["red","yellow","green","blue"]
// const btn=document.querySelector(".btn")

//  function HandleColorChange (){
//     const randomcolor= Math.floor(Math.random()*colors.length)

//     // const randomnumbers=console.log(Math.floor(Math.random()*colors.length)   ); 




//     return colors[randomcolor]
// }




// btn.addEventListener("click",function (){


// document.body.style.backgroundColor=HandleColorChange()
// })


const colors=["red","yellow","blue","black"]
const btn=document.querySelector(".btn")


function changecolor (){
    const randomnumbers= Math.floor(Math.random()*colors.length)
    console.log(randomnumbers);

    return colors[randomnumbers]
}


btn.addEventListener("click", function (){
    document.body.style.backgroundColor=changecolor() 
    
})

// const colors=["red","blue","green"]
// const btn=document.querySelector(".btn")

// function CLICK(){
//     const randomcolors=Math.floor(Math.random()*colors.length)
//     return colors[randomcolors]
// }
// btn.addEventListener("click",function(){
//    document.body.style.backgroundColor=CLICK()
// })



// const colors = ["red","blue","green","yellow","gray"]
// // console.log(colors);
// const result = document.querySelector(".btn")

// function  myFunction(){
//     const randomcolors = Math.floor(Math.random()*colors.length)
//     console.log(randomcolors)
//     return colors[randomcolors]
   
    
// }
// result.addEventListener("click",()=> {
//     document.body.style.background=myFunction()
// })
    






