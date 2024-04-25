
// let age = +prompt('enter your age')
// if (age>=18) {
//     console.log('done hogaya'); 
// }
// else{console.log('age problem');}


// let num1 = +prompt('enter 1st number')
// let num2 = +prompt('enter 2nd number')

// let addition = num1 + num2;
// if (addition <= 100) {
//     console.log('done'); 
// }
// else{console.log('your addition is greater then 100');}

// let h1 = document.querySelector('h1')
// function click1(name) {
//     h1.innerHTML+='hello world '

//     console.log(`hello ${name}  world`);
    
// }



// fruits =['apple' , 'banana' , 'orange','watermelon']
// fruits.splice(3,1,'mango','anar',['apple',89,true])
// console.log(fruits);
// // fruits.slice()

// let h1 = document.querySelector('h1')

// let num = +prompt('enter a table number')

// for (let i = 1; i <= num; i++) {

//     // console.log(`${num} x ${index} = ${num*index}`);
//     for (let j = 1 ; j <= 10 ; j++){
//      h1.innerHTML += `${i} x ${j} = ${i*j} </br>`
//     }
    
    
    
// }




// let input = document.querySelector('#input')

// let cities = ['karachi','islamabad','lahore','quetta','multan',]

// function click1() {


//     // if (cities.includes(input.value))
//     if (cities.indexOf =)


    
    
    
//     {
//         console.log(`bhi ${input.value} ki bat hi alag he yar`);
//     }
//     else{console.log(`bhi ap pakistan me hi rehte hona`);}
    
// }

// let i = 10 
// console.log(i);


// console.log(10 > 9);
// let farhan = 'jhon applessed'
// let khan = farhan.slice(5,10)
// console.log(khan);


// Math.round  0.1\0.4 =0    0.5\0.9 = 1    
// Math.ceil    0.1\0.9 = 1   
// Math.floor 0.1\ 0.9 = 0
// Math.random  random number


// let num = 255.65
// console.log(Math.round(num));

// console.log);

// console.log(Math.floor(num));

// console.log(Math.random()*10)




let coin = document.querySelector('#coin')
// let back1 = document.querySelecto('.back1')
// let back2 = document.querySelecto('.back2')



function toss(clickbtn) {
    // console.log('toss' , clickbtn);
   let num = Math.random()*2
   let sum = Math.ceil(num)
//    back1.innerHTML = ''
//    back2.innerHTML = ''

   if (clickbtn === "masjid") {


    
   }


    if (sum == 1 && clickbtn == "masjid") {

        console.log('you won the toss'); 

        coin.innerHTML = `
        <div class="card bg-success " style="width: 18rem;">
    <div id="coin" >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPaHQlIuS7Gtb577raIu4SRG6Iwrb88lKexhGrM_eGw&s" class="card-img-top" alt="...">
        
    </div>
    
    <div class="card-body width-">
      <h2 class="card-title text-center">you choose Masjid and won the Toss</h2>
    <button class="btn btn-primary" onclick="reset()">Reset</button>
    </div>
  </div>
        
        
    
    `
    }
    else if(sum == 2 && clickbtn == "masjid") {


        console.log('you loss the toss');
        coin.innerHTML = `
        <div class="card align-items-cen bg-danger" style="width: 18rem;">
    <div id="coin">
    <img src="https://en.numista.com/catalogue/photos/pakistan/431-original.jpg" class="card-img-top" alt="...">

        
    </div>
    
    <div class="card-body width-">
      <h2 class="card-title text-center">you choose Masjid and Loss the Toss</h2>
    <button class="btn btn-primary" onclick="reset()">Reset</button>
    </div>
  </div>
        
        
        `
 
    }

    else if(sum == 1 && clickbtn == "chand") {

        console.log('you won the toss'); 
        coin.innerHTML = 
        `
        <div class="card bg-success " style="width: 18rem;">
    <div id="coin">
    <img src="https://en.numista.com/catalogue/photos/pakistan/431-original.jpg" class="card-img-top" alt="...">

    </div>
    
    <div class="card-body">
      <h2 class="card-title text-center">you choose Chand and won the Toss</h2>
    <button class="btn btn-primary" onclick="reset()">Reset</button>
    </div>
  </div>
        
        
        
        `


    }
    else if(sum == 2 && clickbtn == "chand") {


        console.log('you loss the toss');
        coin.innerHTML = `
        <div class="card align-items-cen bg-danger " style="width: 18rem;">
    <div id="coin">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPaHQlIuS7Gtb577raIu4SRG6Iwrb88lKexhGrM_eGw&s" class="card-img-top" alt="...">
        
    </div>
    
    <div class="card-body width-">
      <h2 class="card-title text-center">you choose Chand and Loss the Toss</h2>
    <button class="btn btn-primary" onclick="reset()">Reset</button>
    </div>
  </div>
        
        
        `

 
    }
    else{console.log('please chose the coin');}


    console.log(sum);
}




function reset() {
    coin.innerHTML = `
    <div class="back1">
<div class=" card align-items-center " style="width: 14rem;">
    <div id="coin-img">
    <img src="https://en.numista.com/catalogue/photos/pakistan/431-original.jpg" class="card-img-bottom" alt="...">

        
    </div>
    
    <div class="card-body">
    <button class="btn btn-primary" onclick="toss('chand')">chand</button>

    </div>


  </div></div>


    
   

<div class="back2">
  <div class=" card align-items-center" style="width: 14rem;">
    <div id="coin-img">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPaHQlIuS7Gtb577raIu4SRG6Iwrb88lKexhGrM_eGw&s" class="card-img-top" alt="...">

        
    </div>
    
    <div class="card-body">
    <button class="btn btn-primary" onclick="toss('masjid')">masjid</button>

    </div>
</div></div>


    
    `
    

    
}






















