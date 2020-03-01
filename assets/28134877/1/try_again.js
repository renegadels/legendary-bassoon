var TryAgain = pc.createScript('tryAgain');

TryAgain.attributes.add('StartEntity', {
    type: 'entity'
});

// initialize code called once per entity
TryAgain.prototype.initialize = function() {
    this.entity.element.on('click', function (event) {
        this.app.root.findByName('Start').enabled = true;
        this.app.root.findByName('Cloning Entity').enabled = false;
        this.app.root.findByName("Mobile_Controls").enabled = false;
        this.StartEntity.enabled = false;
    }, this);
};

// update code called every frame
TryAgain.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// TryAgain.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/