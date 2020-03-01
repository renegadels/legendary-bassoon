var TutCollide = pc.createScript('tutCollide');

// initialize code called once per entity
TutCollide.prototype.initialize = function() {
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
};

// update code called every frame
TutCollide.prototype.update = function(dt) {
    
};

TutCollide.prototype.onCollisionStart = function (result) {
    
    //alert(result.other.name);
    //result.other.name === "SpinningBallRight2"
    
    if (result.other.name === "SpinningBallLeft2") {
        this.app.root.findByName('part_shockwave33').particlesystem.reset();
        this.app.root.findByName('part_shockwave33').particlesystem.play();
        this.entity.enabled = false;
    }
    
    if (result.other.name === "SpinningBallRight2") {
        this.app.root.findByName('part_shockwave34').particlesystem.reset();
        this.app.root.findByName('part_shockwave34').particlesystem.play();
        this.entity.enabled = false;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// TutCollide.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/