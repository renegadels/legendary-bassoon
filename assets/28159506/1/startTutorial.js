var StartTutorial = pc.createScript('startTutorial');

StartTutorial.attributes.add('StartEntity', {
    type: 'entity'
});

// initialize code called once per entity
StartTutorial.prototype.initialize = function() {
    this.entity.element.on('click', function (event) {
        this.app.root.findByName('Start').enabled = false;
        this.StartEntity.enabled = true;
        var green_object = this.app.root.findByName('GreenTutObject');
        var red_object2 = this.app.root.findByName('RedTutObject2');
        var yellow_object = this.app.root.findByName('YellowTutObject');
        green_object.enabled = true;
        red_object2.enabled = true;
        yellow_object.enabled = true;
    }, this);
};

// update code called every frame
StartTutorial.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// StartTutorial.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/