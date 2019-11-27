// первая задача

"use strict"

class Weapon {
    constructor (name, attack, durability, range) {
    this.name = name,
    this.attack = attack,
    this.durability = durability,
    this.range = range
}

takeDamage(damage) {
     
    if (this.durability - damage > 0) {
      this.durability -= damage;
         
   } else {
     this.durability = 0;
     
   }
 }


getDamage(damage) {
    if (this.durability >= 0.3 * (this.durability + damage)) {
        return this.attack;
    } else  if (this.durability > 0){
        return this.attack / 2;
    } else if (this.durability  === 0) {
        return 0;
      }
   }

   isBroken() {
       if (this.durability > 0) {
           return false;
       } else {
           return true;
       }
   }
}


   const arm = new Weapon ('рука', 1, Infinity, 1);
   const bow = new Weapon ('лук', 10, 200, 3);
   const sword = new Weapon ('меч', 25, 500, 1);
   const knife = new Weapon ('нож', 5, 300, 1);
   const stick  = new Weapon ('Посох', 8, 300,2);

   class ImprovedWeapon extends Weapon {}

   const newBow = new ImprovedWeapon('Длинный лук', 15,200, 4);
   const newSword = new ImprovedWeapon('Секира', 27, 800,1);
   const newStick = new ImprovedWeapon('Посох Бури',10, 300, 3);

   
  arm.takeDamage(250);
  console.log(arm.durability);

  console.log(arm.getDamage(250));
  console.log(arm.isBroken());

  
  bow.takeDamage(250);
  console.log(bow.durability);

  console.log(bow.getDamage(250));
  console.log(bow.isBroken());

  sword.takeDamage(450);
  console.log(sword.durability);

  console.log(sword.getDamage(450));
  console.log(sword.isBroken());

  // вторая задача 

  class Weapon {
    constructor(name, attack, durability, range) {
      this.name = name,
      this.attack = attack,
      this.durability = durability,
      this.range = range
    }
  
    takeDamage(damage) {
       
       if (this.durability - damage > 0) {
         this.durability -= damage;
         return this.durability;   
         
      
      } else {
        this.durability = 0;
        return this.durability;
       
      }
    }
  
    getDamage(damage) {
      
       if (this.durability >= 0.3 * (this.durability + damage )) {
         return this.attack;
         
       } else  if ( this.durability > 0){
         return this.attack / 2;
       } else if( this.durability  === 0) {
         return 0;
       }
    }
  
    isBroken() {
      if (this.durability > 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  class Bow extends Weapon {
    constructor () {
    super ('лук',10, 200, 3);
    }
  
  }
  
  class Arm extends Weapon {
    constructor () {
    super ('рука',1, Infinity, 1);
    }
  }
  
  class Sword extends Weapon {
  constructor () {
    super ('меч',25, 500, 1);
    }
  }
  
  class Knife extends Weapon {
    constructor () {
    super ('нож',5, 300, 1);
    }
  }
  
  class Stick extends Weapon {
    constructor () {
    super ('посох',8, 300, 2);
    }
  }
  
  
  class NewBow extends Bow {
    constructor () {
    super (200);
    this.name = 'Длинный лук',
    this.attack  = 15,
    this.range = 4
    }
  
  }
  
  class NewSword extends Sword {
    constructor () {
    super (1);
    this.name = 'секира',
    this.attack  = 27,
    this.durability = 800
    }
  
  }
  
  class NewStick extends Stick {
    constructor () {
    super (300);
    this.name = 'посох Бури',
    this.attack  = 10,
    this.range = 3
    }
  }
  
  const bow = new Bow();
  console.log(bow.name);
  
  const arm = new Arm();
  console.log(arm.name);
  
  const newbow = new NewBow();
  console.log(newbow.name);
  console.log(newbow.durability);

  const newstick = new NewStick();
  console.log(newstick.name);
  console.log(newstick.durability);





