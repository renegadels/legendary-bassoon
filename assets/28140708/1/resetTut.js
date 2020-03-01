var ResetTut = pc.createScript('resetTut');

// initialize code called once per entity
ResetTut.prototype.initialize = function() {
    this.entity.element.on('click', function (event) {
        this.app.root.findByName('Tutorial Entity').enabled = false;
        this.app.root.findByName('Bg_Tut').enabled = false;
        this.app.root.findByName('Tutorial_Stuff').enabled = false;
        this.app.root.findByName('Start').enabled = true;
        //this.app.root.findByName("Mobile_Controls").enabled = false;
        
        var green_object = this.app.root.findByName('GreenTutObject');
        var red_object2 = this.app.root.findByName('RedTutObject2');
        var yellow_object = this.app.root.findByName('YellowTutObject');
        
        green_object.rigidbody.teleport(-1.934, 7.573, 0.035, [0], [0], [0]);
        red_object2.rigidbody.teleport(1.487, 7.615, 0.111, [0], [0], [0]);
        yellow_object.rigidbody.teleport(-1.934, 7.573, 0.035, [0], [0], [0]);
        
        green_object.enabled = false;
        red_object2.enabled = false;
        yellow_object.enabled = false;
        
        this.app.root.findByName("Mobile_Controls").enabled = false;
        
        
    }, this);
};

// update code called every frame
ResetTut.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// ResetTut.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/