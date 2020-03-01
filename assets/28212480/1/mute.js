var Mute = pc.createScript('mute');

// initialize code called once per entity
Mute.prototype.initialize = function() {
    this.check = false;
    
    this.entity.element.on('click', function (event) {
        //alert('check');
        if (this.check === false) {
            this.app.systems.sound.volume = 0;
            this.app.root.findByName("Mute").enabled = false;
            this.app.root.findByName("UnMute").enabled = true;
            this.check = true;
        }
        
        else {
            this.app.systems.sound.volume = 1;
            this.app.root.findByName("Mute").enabled = true;
            this.app.root.findByName("UnMute").enabled = false;
            this.check = false;
        }
        
    }, this);
    
};

// update code called every frame
Mute.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// Mute.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/