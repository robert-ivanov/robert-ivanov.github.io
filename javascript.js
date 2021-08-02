
// let result ={}


// var mealsByCategory = {
//     Provider1: ["USD", "AMD", "KES", "IRT"],
//     Provider2: ["ILT", "EUR", "RUB", "IRT1"],
//     Provider3: ["AMD", "RUB", "USD", "EUR", "KES"]
// }
// let x =document.getElementById("category")
//     function changecat(value) {
//         if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
//         else {
//             var catOptions = "";
//             for (categoryId in mealsByCategory[value]) {
//                 catOptions += "<option>" + mealsByCategory[value][categoryId] + "</option>";
//             }
//             document.getElementById("category").innerHTML = catOptions;
        
//         }
//     }
 
//  function myFunction(){
//   let x =document.getElementById("meal").value;
//   let y =[...document.getElementById("category").selectedOptions].map(option => option.value);
//   console.log(document.getElementById("category").value)
//   x = String(x);
//   result[x] = y
//   let f =document.getElementById("2");   
//    let groove = JSON.stringify(result);
//    let newStr = "";
//    let newGroove ="";
// for (let i = 0 ; i < groove.length ;i++){
//   if(!(groove[i] == "{" || groove[i] == '"' || groove[i] == "/" || groove[i] == "}")){
//   newStr = newStr + groove[i] }
//  };
// console.log(newStr)
//  for(let i = 0; i < newStr.length; i++){
//     if (newStr[i-2]==="]"&& newStr[i-1]===","){
//         newGroove = newGroove + "\n"
//         console.log(newGroove)
//     }
//     newGroove = newGroove + newStr[i]  ;
//     console.log(newGroove)
//  }
//  return f.innerHTML=newGroove;}
 
// //  /////Digitain
// //  class Vector {
// //     constructor(x, y) {
// //       this.x = x;
// //       this.y = y;
// //     }
  
// //     add(v) {
// //       return new Vector(
// //         this.x + v.x,
// //         this.y + v.y);
// //     }
  
// //     addTo(v) {
// //       this.x += v.x;
// //       this.y += v.y;
// //     }
  
// //     sub(v) {
// //       return new Vector(
// //         this.x - v.x,
// //         this.y - v.y);
// //     }
    
// //     subFrom(v) {
// //       this.x -= v.x;
// //       this.y -= v.y;
// //     }
    
// //     mult(n) {
// //       return new Vector(this.x * n, this.y * n);
// //     }
    
// //     multTo(n) {
// //       this.x *= n;
// //       this.y *= n;
// //       return this;
// //     }
    
// //     div(n) {
// //       return new Vector(this.x / n, this.y / n);
// //     }
    
// //     divTo(n) {
// //       this.x /= n;
// //       this.y /= n;
// //     }
    
// //     setAngle(angle) {
// //       var length = this.getLength();
// //       this.x = Math.cos(angle) * length;
// //       this.y = Math.sin(angle) * length;
// //     }
    
// //     setLength(length) {
// //       var angle = this.getAngle();
// //       this.x = Math.cos(angle) * length;
// //       this.y = Math.sin(angle) * length;
// //     }
    
// //     getAngle() {
// //       return Math.atan2(this.y, this.x);
// //     }
    
// //     getLength() {
// //       return Math.sqrt(this.x * this.x + this.y * this.y);
// //     }
  
// //     getLengthSq() {
// //       return this.x * this.x + this.y * this.y;
// //     }
  
// //     distanceTo(v) {
// //       return this.sub(v).getLength();
// //     }
    
// //     distanceToSq(v) {
// //       return this.sub(v).getLengthSq();
// //     }
  
// //     manhattanDistanceTo(v) {
// //       return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
// //     }
    
// //     copy() {
// //       return new Vector(this.x, this.y);
// //     }
    
// //     rotate(angle) {
// //       return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
// //     }
    
// //     rotateTo(angle) {
// //       let x = this.x * Math.cos(angle) - this.y * Math.sin(angle); 
// //       let y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
// //       this.x = x;
// //       this.y = y;
// //       return this;
// //     }
// //   }
  
// //   const config = {
// //     text: "Digitain",
// //     widthToSpikeLengthRatio: 0.054
// //   };
  
// //   const colorConfig = {
// //     particleOpacity: 0.2,
// //     baseHue: 5670,
// //     hueRange: 9,
// //     hueSpeed: 0.04,
// //     colorSaturation: 100,
// //   };
  
// //   class Planet {
// //     constructor(x, y, g) {
// //       this.pos = new Vector(x, y);
// //       this.g = g;
// //     }
    
// //     draw() {
// //       ctx.fillStyle = "#AAA";
// //       ctx.beginPath();
// //       ctx.arc(this.pos.x, this.pos.y, 8, 0, Math.PI * 2);
// //       ctx.fill();  
// //     } 
// //   }
  
// //   // A line that is part of forming the text
// //   class Particle {
// //     constructor(x, y) {
// //       this.pos = new Vector(x, y);
// //       this.vel = new Vector(0, spikeLength);
// //     }
    
// //     move(force) {
// //       if(force) {
// //         this.vel.addTo(force);
// //       }
// //       if(this.vel.getLength() > spikeLength) {
// //         this.vel.setLength(spikeLength);
// //       }
// //     }
      
// //     draw() {
// //       ctx.beginPath();
// //       ctx.moveTo(this.pos.x, this.pos.y);
// //       let p2 = this.pos.add(this.vel);
// //       ctx.lineTo(p2.x, p2.y);
// //       ctx.stroke();  
// //     }  
// //   }
  
// //   let canvas;
// //   let ctx;
// //   let w, h;
// //   let hue;
// //   let particles;
// //   let spikeLength;
// //   let planets;
// //   let A;
// //   let B;
// //   let a;
// //   let b;
// //   let tick;
  
// //   function setup() {
// //     tick = 0;
// //     planets = [];
// //     let len = Math.round(Math.random() * 3 + 3);
// //     for(let i = 0; i < len; i++) {
// //       let p = new Planet(50 + i * 100, 340, i ? 1000 : 4000);
// //       planets.push(p);
// //     }
// //     canvas = document.querySelector("#canvas");
// //     ctx = canvas.getContext("2d");
// //     window.addEventListener("resize", reset);
// //     canvas.addEventListener("mousemove", mousemove);
// //     reset();
// //   }
  
// //   function reset() {
// //     hue = colorConfig.baseHue; 
// //     w = canvas.width = window.innerWidth;
// //     h = canvas.height = window.innerHeight;
// //     spikeLength = w * config.widthToSpikeLengthRatio;
// //     A = w / 2.2;
// //     B = h / 2.2;
// //     a = Math.round(Math.random() + 2);
// //     b = Math.round(Math.random() + 2);
// //     drawText();
// //   }
  
// //   function mousemove(event) {
// //     let x = event.clientX;
// //     let y = event.clientY;
// //     planets[0].pos.x = x;
// //     planets[0].pos.y = y;
// //   }
  
// //   function draw(now) {
// //     clear();
// //     requestAnimationFrame(draw);
// //     updateParticles();
// //     updatePlanets();
// //     tick = now / 50;
// //   }
  
// //   function clear() {
// //     ctx.clearRect(0, 0, w, h);
// //   }
  
// //   function drawText() {
// //     ctx.save();
// //     let fontSize = w * 0.2;
// //     ctx.font = "bold " + fontSize + "px Arial, Helvetica, sans-serif";
// //     ctx.textAlign = "center";
// //     ctx.textBaseline = "middle"
// //     ctx.lineWidth = 1;
// //     ctx.strokeStyle = "white";
// //     ctx.strokeText(config.text, w/2, h/2);
// //     ctx.restore();
// //     let imageData = ctx.getImageData(0, 0, w, h);
  
// //     particles = [];
  
// //     for(let x = 0; x < w; x++) {
// //       for(let y = 0; y < h; y++) {
// //         let i = (x + w*y)*4;
// //         let average = (imageData.data[i] + 
// //                        imageData.data[i + 1] + 
// //                        imageData.data[i + 2] +
// //                        imageData.data[i + 3]) / 4;
// //         if(average > 200) {
// //           let particle = new Particle(x, y);
// //           particles.push(particle);
// //         }
// //       }
// //     }
// //     clear();
// //   }
  
// //   function updatePlanets() {
// //     let len = planets.length;
// //     for(let i = 1; i < len; i++) {
// //       let angle = Math.PI * 2 / (len - 1) * i;
// //       let x = A * Math.sin(a * tick / 100 + angle) + w/2;
// //       let y = B * Math.sin(b * tick / 100 + angle) + h/2; 
// //       let p = planets[i];
// //       p.pos.x = x;
// //       p.pos.y = y;
// //       p.draw();
// //     }
// //   }
  
// //   function updateParticles() {
// //     hue += colorConfig.hueSpeed; 
// //     let h = Math.sin(hue) * colorConfig.hueRange + colorConfig.baseHue;
// //     ctx.strokeStyle = `hsla(${h}, ${colorConfig.colorSaturation}%, 50%, ${colorConfig.particleOpacity})`;  
// //     particles.forEach(p => {
// //       // Apply the force of each planet (repeller) to the current particle
// //       planets.forEach(planet => {
// //         let d = p.pos.sub(planet.pos);
// //         let length = d.getLength();
// //         let g = planet.g / length;
// //         if(g > 40) {
// //           g = 40;
// //         }
// //         // We keep the angle of the distance
// //         d.setLength(g);
// //         p.move(d);
// //       });
// //       p.draw();
// //     });
// //   }
  
// //   setup();
// //   draw(1);
function valuet() {
    let ppr = document.getElementById("div1")
    
    return ppr.innerHTML ="V"
    
              }
let x 
function tFucntion(){
    let t = document.getElementById("fname")
   x= t.value
   console.log(x)
   return
  } 
function yuppi(){
let p = x
let y = "stats."
let arr =[]
let http = "http://"
for(let i = 0; i<p.length;i++){
if( p[i] ==="." && p[i+1] ==="c" && p[i+2] ==="o" && p[i+3] ==="m" ){
       let g = p.slice(0,i+4)
    if(!g.includes("www.")){
         arr.push(http +y+p.slice(0,i+4))
       }
    else if (g.includes("www.")){
      arr.push(http + g.slice(0,4).concat("stats.")+g.slice(4))
       }
     

  p = p.slice(i+4)
i=3
     }
     

if( p[i] ==="." && p[i+1] ==="o" && p[i+2] ==="r" && p[i+3] ==="g" ){
  let g = p.slice(0,i+4)
        if(!g.includes("www.")){
            arr.push(http +y+p.slice(0,i+4))
            }
        else if (g.includes("www.")){
           arr.push(http + g.slice(0,4).concat("stats.")+g.slice(4))
   }
  
p = p.slice(i+4)
i=3
  }
  if( p[i] ==="." && p[i+1] ==="p" && p[i+2] ==="w"  ){
    let g = p.slice(0,i+3)
          if(!g.includes("www.")){
              arr.push(http +y+p.slice(0,i+3))
              }
          else if (g.includes("www.")){
             arr.push(http + g.slice(0,4).concat("stats.")+g.slice(4))
     }
   
  p = p.slice(i+3)
  i=3
    }
    if( p[i] ==="." && p[i+1] ==="w" && p[i+2] ==="e" && p[i+3] ==="b" && p[i+4] ==="s" && p[i+5] ==="i" && p[i+6] ==="t" && p[i+7] ==="e"   ){
      let g = p.slice(0,i+8)
            if(!g.includes("www.")){
                arr.push(http +y+p.slice(0,i+8))
                }
            else if (g.includes("www.")){
               arr.push(http + g.slice(0,4).concat("stats.")+g.slice(4))
       }
       
    p = p.slice(i+8)
    i=3
      }
      if( p[i] ==="." && p[i+1] ==="o" && p[i+2] ==="n" && p[i+3] ==="l" && p[i+4] ==="i" && p[i+5] ==="n" && p[i+6] ==="e"    ){
        let g = p.slice(0,i+7)
              if(!g.includes("www.")){
                  arr.push(http +y+p.slice(0,i+7))
                  }
              else if (g.includes("www.")){
                 arr.push(http + g.slice(0,4).concat("stats.")+g.slice(4))
         }
      
      p = p.slice(i+7)
      i=3
        }
        if( p[i] ==="." && p[i+1] ==="s" && p[i+2] ==="i" && p[i+3] ==="t" && p[i+4] ==="e"    ){
          let g = p.slice(0,i+5)
                if(!g.includes("www.")){
                    arr.push(http +y+p.slice(0,i+5))
                    }
                else if (g.includes("www.")){
                   arr.push(http + g.slice(0,4).concat("stats.")+g.slice(5))
           }
           
        p = p.slice(i+7)
        i=3
          }
          if( p[i] ==="." && p[i+1] ==="l" && p[i+2] ==="i" && p[i+3] ==="v" && p[i+4] ==="e"    ){
            let g = p.slice(0,i+5)
                  if(!g.includes("www.")){
                      arr.push(http +y+p.slice(0,i+5))
                      }
                  else if (g.includes("www.")){
                     arr.push(http + g.slice(0,4).concat("stats.")+g.slice(5))
             }
           
          p = p.slice(i+7)
          i=3
            }
    
              }
             
              function Software(){
                for(let key of arr){
                  console.log(typeof(key))
                window.open(key)
                
                }
                
                }
                return Software()
}
function brra(){
    console.log(yuppi())
}
         

            