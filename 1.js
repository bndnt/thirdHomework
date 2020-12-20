let fish=["Судак"];//1
 console.log(fish[0]);
 fish.push("Берш","Окунь");//2
 for(i=0;i<3;i++){
     console.log(fish[i]);
 }
 fish.unshift("Ерш","Чоп");//3
 for(i=0;i<5;i++){
    console.log(fish[i]);
 }
 // fish.sort();
 // for(i=0;i<5;i++){
 //    console.log(fish[i]);
 // }
// fish.reverse();
//  for(i=0;i<5;i++){
//     console.log(fish[i]);
//  }

fish.splice(1,0,"Щука","Плотва");//6
 for(i=0;i<7;i++){
     console.log(fish[i]);
 }
fish.splice(6,0,"Язь","Пескарь");//7
 for(let i=0;i<9;i++){
    console.log(fish[i]);
  }
// fish.shift();
// for(let i=0;i<8;i++){
//     console.log(fish[i]);
// }
// fish.pop();
// for(let i=0;i<7;i++){
//     console.log(fish[i]);
// }
// fish.splice(2,1);
// for(let i=0;i<6;i++){
//     console.log(fish[i]);
// }
let i=0;//11
while( i<3){
    console.log(fish[i]);
    i++;
}
// for(let i=0;i<3;i++){
//     console.log(fish[i]);
// }