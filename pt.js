class Pt {
  constructor (position) {
    this.position = position
  }
  
  applyForce(force) {
    this.position.add(force)
  }
}