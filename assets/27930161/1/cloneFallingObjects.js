/* jshint esversion: 6*/

var CloneFallingObjects = pc.createScript('cloneFallingObjects');

// initialize code called once per entity
CloneFallingObjects.prototype.initialize = function() {
    
    this.timer = 0;
    
    
};

var object_array = ["GreenObject", "RedObject", "YellowObject"];
var position_array = [new pc.Vec3(-2.017, 7.573, 0.035, [0], [0], [0]), new pc.Vec3(-0.318, 7.594, 0.035, [0], [0], [0]), new pc.Vec3(1.404, 7.615, 0.111), [0], [0], [0]];

// update code called every frame
CloneFallingObjects.prototype.update = function(dt) {
    
    if (this.app.root.findByName("Game_Over").enabled === false && this.app.root.findByName("Start").enabled === false) {
    
        this.timer += dt;
        if (this.timer >= 1) {
            var newEntity = new pc.Entity();

            var randomObjectIndex = Math.floor(Math.random() * object_array.length);
            var randomPositionIndex = Math.floor(Math.random() * position_array.length);

            newEntity = this.entity.findByName(object_array[(randomObjectIndex)]).clone();

            this.entity.addChild(newEntity);    

            newEntity.rigidbody.teleport(position_array[(randomPositionIndex)]);

            this.timer -= 1;
        }
    }
};


// swap method called for script hot-reloading
// inherit your script state here
// CloneFallingObjects.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/