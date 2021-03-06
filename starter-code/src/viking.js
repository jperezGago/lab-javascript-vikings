// Soldier
class Soldier {

  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage
  }

}


// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    super(health, strength)
    this.name = name
  }

  attack () {
    return this.strength
  }

  receiveDamage (damage) {
    this.health -= damage
  
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry () {
    return "Odin Owns You All!"
  }

}



// Saxon
class Saxon extends Soldier{

  constructor (health, strength) {
    super(health, strength)
  }

  receiveDamage (damage) {
    super.attack ()
    this.health -= damage
  
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
  
}



// War
class War {

  constructor () {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking (viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon (saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack () {
    // Se ha creado una random function para calcular un numero entre 0 y el tamanho del array
    const randomSaxon = random(0, this.saxonArmy.length - 1)
    const randomViking = random(0, this.vikingArmy.length - 1)

    const saxonDamage = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength) 
  
    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1)
    }

    return saxonDamage
  }

  saxonAttack () {
    // Se ha creado una random function para calcular un numero entre 0 y el tamanho del array
    const randomSaxon = random(0, this.saxonArmy.length - 1)
    const randomViking = random(0, this.vikingArmy.length - 1)

    const vikingDamage = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice(randomViking, 1)
    }

    return vikingDamage
  }

  showStatus () {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }

}


// Random function
function random (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

