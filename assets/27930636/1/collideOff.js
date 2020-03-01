var CollideOff = pc.createScript('collideOff');

CollideOff.attributes.add('ObjectType', {
    type: 'string', default: 'death'
});

// initialize code called once per entity
CollideOff.prototype.initialize = function() {
    
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
    
};

// update code called every frame
CollideOff.prototype.update = function(dt) {
    
};

CollideOff.prototype.onCollisionStart = function (result) {
    
    //Check to see if Entity1 has hit this object
    if (result.other.name === "SpinningBallLeft") {
        this.entity.enabled = false;
        
        if (this.ObjectType === 'death') {
            this.app.root.findByName('part_burst3').particlesystem.reset();
            this.app.root.findByName('part_burst3').particlesystem.play();
            this.app.fire("camera:shake");
            
            setTimeout(function (){this.app.root.findByName("Game_Over").enabled = true;}.bind(this), 1000);
            this.app.fire('player:death');
            
        }
        
        else {
            this.app.fire('ball:touchdown');
            this.app.fire('yellow:ball');
            this.app.root.findByName('part_shockwave3').particlesystem.reset();
            this.app.root.findByName('part_shockwave3').particlesystem.play();
        }
        
    }
    
    else if (result.other.name === "SpinningArmLeft") {
        this.entity.enabled = false;
        
        if (this.ObjectType === 'death') {
            this.app.root.findByName('part_burst2').particlesystem.reset();
            this.app.root.findByName('part_burst2').particlesystem.play();
            this.app.fire("camera:shake");
            
            setTimeout(function (){this.app.root.findByName("Game_Over").enabled = true;}.bind(this), 1000);
            this.app.fire('player:death');
            
        }
        
        else {
            this.app.fire('ball:touchdown');
            this.app.fire('yellow:ball');
            this.app.root.findByName('part_shockwave2').particlesystem.reset();
            this.app.root.findByName('part_shockwave2').particlesystem.play();
        }
        
    }
    
    else if (result.other.name === "SpinningArmRight") {
        this.entity.enabled = false;
        
        if (this.ObjectType === 'death') {
            this.app.root.findByName('part_burst1').particlesystem.reset();
            this.app.root.findByName('part_burst1').particlesystem.play();
            this.app.fire("camera:shake");
            
            setTimeout(function (){this.app.root.findByName("Game_Over").enabled = true;}.bind(this), 1000);
            this.app.fire('player:death');
            
        }
        
        else {
            this.app.fire('ball:touchdown');
            this.app.fire('yellow:ball');
            this.app.root.findByName('part_shockwave1').particlesystem.reset();
            this.app.root.findByName('part_shockwave1').particlesystem.play();
        }
        
    }
    
    else if (result.other.name === "SpinningBallRight") {
        this.entity.enabled = false;
        
        if (this.ObjectType === 'death') {
            this.app.root.findByName('part_burst4').particlesystem.reset();
            this.app.root.findByName('part_burst4').particlesystem.play();
            this.app.fire("camera:shake");
            
            setTimeout(function (){this.app.root.findByName("Game_Over").enabled = true;}.bind(this), 1000);
            this.app.fire('player:death');
            
        }
        
        else {
            this.app.fire('ball:touchdown');
            this.app.fire('yellow:ball');
            this.app.root.findByName('part_shockwave4').particlesystem.reset();
            this.app.root.findByName('part_shockwave4').particlesystem.play();
        }
        
    }
    
    else if (result.other.name === "Plane") {
        
        if (this.ObjectType === 'death') {
            this.app.fire('ball:touchdown');
        }
        
        this.entity.enabled = false;
    }

};

// swap method called for script hot-reloading
// inherit your script state here
// CollideOff.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/