  
var scroll_Count = 0;
var Package = 0;
  changeImage()
document.getElementById("arrow1").addEventListener("click",()=>{
    if(scroll_Count !==0)
    {
scroll_Count = scroll_Count-1
    }else
    {
        scroll_Count = 3;
    }
    changeImage()
        console.log(scroll_Count)
})
document.getElementById("arrow2").addEventListener("click",()=>{
    if(scroll_Count <3)
    {
scroll_Count = scroll_Count+1
    }else
    {
        scroll_Count = 0;
    }
    changeImage()
    console.log(scroll_Count)
})

function changeImage()
{
    if(scroll_Count == 0)
    {
    document.getElementById("Header").style.setProperty('--before-background-image',"url('Rocket.jpg')")
    document.getElementById("Heading1").style.animation = "Fade_in forwards 2s"
    document.getElementById("Heading2").style = "opacity:0;"
    document.getElementById("Heading3").style = "opacity:0;"
    document.getElementById("Heading4").style = "opacity:0;"
    document.getElementById("Heading1_Info").style.animation = "ease-in1 forwards 2s"
    document.getElementById("Heading2_Info").style = "opacity:0;"
    document.getElementById("Heading3_Info").style = "opacity:0;"
    document.getElementById("Heading4_Info").style = "opacity:0;"
    }
    if(scroll_Count == 1)
    {
    document.getElementById("Header").style.setProperty('--before-background-image',"url('Engineered.jpg')")
    document.getElementById("Heading1").style = "opacity:0;"
    document.getElementById("Heading2").style.animation = "Fade_in forwards 1s"
   document.getElementById("Heading3").style = "opacity:0;"
      document.getElementById("Heading4").style = "opacity:0;"
      document.getElementById("Heading1_Info").style = "opacity:0;"
    document.getElementById("Heading2_Info").style.animation = "ease-in1 forwards 2s"
    document.getElementById("Heading3_Info").style = "opacity:0;"
    document.getElementById("Heading4_Info").style = "opacity:0;"
    }
    if(scroll_Count == 2)
    {
    document.getElementById("Header").style.setProperty('--before-background-image',"url('night.jpg')")
        document.getElementById("Heading1").style = "opacity:0;"
    document.getElementById("Heading2").style = "opacity:0;"
   document.getElementById("Heading3").style.animation = "Fade_in forwards 1s"
      document.getElementById("Heading4").style = "opacity:0;"
      document.getElementById("Heading1_Info").style = "opacity:0;"
    document.getElementById("Heading2_Info").style = "opacity:0;"
    document.getElementById("Heading3_Info").style.animation = "ease-in1 forwards 2s"
    document.getElementById("Heading4_Info").style = "opacity:0;"
    }
    if(scroll_Count == 3)
    {
    document.getElementById("Header").style.setProperty('--before-background-image',"url('Health.jpg')")
        document.getElementById("Heading1").style = "opacity:0;"
    document.getElementById("Heading2").style = "opacity:0;"
   document.getElementById("Heading3").style = "opacity:0;"
      document.getElementById("Heading4").style.animation = "Fade_in forwards 2s"
      document.getElementById("Heading1_Info").style = "opacity:0;"
    document.getElementById("Heading2_Info").style = "opacity:0;"
    document.getElementById("Heading3_Info").style = "opacity:0;"
    document.getElementById("Heading4_Info").style.animation = "ease-in1 forwards 2s"
    }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.getElementById("navbar").style.animation = "ease-in1 forwards 0.2s"
  } else {
  document.getElementById("navbar").style.animation = "ease-out1 forwards 0.2s"
  }
});

Slider_Content1 = document.getElementById("Slider_Content1")
Slider_Content2 = document.getElementById("Slider_Content2")
Slider_Content3 = document.getElementById("Slider_Content3")
Slider_Content4 = document.getElementById("Slider_Content4")

Slider_Content1.addEventListener("click",()=>{
  Slider_Content1.style = "font-size:6vw; transition:font-size 0.15s"
    Slider_Content2.style = "font-size:5vw; transition:font-size 0.15s"
      Slider_Content3.style = "font-size:5vw; transition:font-size 0.15s"
        Slider_Content4.style = "font-size:5vw; transition:font-size 0.15s"
              document.getElementById("Slider_MainContent").innerHTML = "🥈"
});
Slider_Content2.addEventListener("click",()=>{
  Slider_Content2.style = "font-size:6vw; transition:font-size 0.15s"
      Slider_Content1.style = "font-size:5vw; transition:font-size 0.15s"
      Slider_Content3.style = "font-size:5vw; transition:font-size 0.15s"
        Slider_Content4.style = "font-size:5vw; transition:font-size 0.15s"
          document.getElementById("Slider_MainContent").innerHTML = "⚜️"
});
Slider_Content3.addEventListener("click",()=>{
  Slider_Content3.style = "font-size:6vw; transition:font-size 0.15s"
      Slider_Content2.style = "font-size:5vw; transition:font-size 0.15s"
      Slider_Content1.style = "font-size:5vw; transition:font-size 0.15s"
        Slider_Content4.style = "font-size:5vw; transition:font-size 0.15s"
          document.getElementById("Slider_MainContent").innerHTML = "💎"
});
Slider_Content4.addEventListener("click",()=>{
  Slider_Content4.style = "font-size:6vw; transition:font-size 0.15s"
      Slider_Content2.style = "font-size:5vw; transition:font-size 0.15s"
      Slider_Content3.style = "font-size:5vw; transition:font-size 0.15s"
        Slider_Content1.style = "font-size:5vw; transition:font-size 0.15s"
        document.getElementById("Slider_MainContent").innerHTML = "🛸"
});
Slider_Content1.addEventListener("click",()=>{
  document.getElementById("Money_Content1").style.animation = "ease-in1 forwards 1s"
    document.getElementById("Money_Content2").style = "opacity:0"
      document.getElementById("Money_Content3").style = "opacity:0"
        document.getElementById("Money_Content4").style = "opacity:0"
})
Slider_Content2.addEventListener("click",()=>{
  document.getElementById("Money_Content2").style.animation = "ease-in1 forwards 1s"
    document.getElementById("Money_Content1").style = "opacity:0"
      document.getElementById("Money_Content3").style = "opacity:0"
        document.getElementById("Money_Content4").style = "opacity:0"
})
Slider_Content3.addEventListener("click",()=>{
  document.getElementById("Money_Content3").style.animation = "ease-in1 forwards 1s"
    document.getElementById("Money_Content2").style = "opacity:0"
      document.getElementById("Money_Content1").style = "opacity:0"
        document.getElementById("Money_Content4").style = "opacity:0"
})
Slider_Content4.addEventListener("click",()=>{
  document.getElementById("Money_Content4").style.animation = "ease-in1 forwards 1s"
    document.getElementById("Money_Content2").style = "opacity:0"
      document.getElementById("Money_Content3").style = "opacity:0"
        document.getElementById("Money_Content1").style = "opacity:0"
})
var cursor = document.querySelector("#Cursor")
var cursor_blur = document.querySelector("#Cursor-Blur")
document.addEventListener("mousemove",function(dets)
{
cursor.style.left=dets.x+"px"
cursor.style.top = dets.y+"px"


})
document.addEventListener("mousemove",function(dets)
{
cursor_blur.style.left=dets.x-150+"px"
cursor_blur.style.top = dets.y-150+"px"
})
document.getElementById("arrow1").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("arrow1").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})
document.getElementById("arrow2").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("arrow2").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})
document.getElementById("Slider_Content1").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("Slider_Content1").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})
document.getElementById("Slider_Content2").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("Slider_Content2").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})
document.getElementById("Slider_Content3").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("Slider_Content3").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})
document.getElementById("Slider_Content4").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("Slider_Content4").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})
document.getElementById("home_reach").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("home_reach").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})

document.getElementById("Achievments_reach").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("Achievments_reach").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})

document.getElementById("prices_reach").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("prices_reach").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})

document.getElementById("Contact_reach").addEventListener("mouseover", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_enlarger forwards 0.3s"
})
document.getElementById("Contact_reach").addEventListener("mouseleave", ()=>
{
  console.log("l")
  document.getElementById('Cursor').style.animation = "cursor_delarger forwards 0.3s"
})

