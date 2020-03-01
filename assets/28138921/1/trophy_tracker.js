var TrophyTracker = pc.createScript('trophyTracker');

// initialize code called once per entity
TrophyTracker.prototype.initialize = function() {
    
    this.yellowTracker = 0;
    
    this.app.on('yellow:ball', this.onTouchDown, this);
};

// update code called every frame
TrophyTracker.prototype.update = function(dt) {
    if (this.app.root.findByName('Trophies').enabled === true) {
        if (localStorage.getItem('yellowCount') >= 10) {
            this.app.root.findByName('Lock1').enabled = false;
        }
        
        if (localStorage.getItem('yellowCount') >= 15) {
            this.app.root.findByName('Lock2').enabled = false;
        }
        
        if (localStorage.getItem('yellowCount') >= 20) {
            this.app.root.findByName('Lock3').enabled = false;
        }
        
        if (localStorage.getItem('yellowCount') >= 25) {
            this.app.root.findByName('Lock4').enabled = false;
        }
        
        if (localStorage.getItem('yellowCount') >= 30) {
            this.app.root.findByName('Lock5').enabled = false;
        }
        
        if (localStorage.getItem('yellowCount') >= 35) {
            this.app.root.findByName('Lock6').enabled = false;
        }
    }
};

TrophyTracker.prototype.onTouchDown = function() {
    localStorage.setItem('yellowCount', (parseInt(localStorage.getItem('yellowCount'))+1));
};

// swap method called for script hot-reloading
// inherit your script state here
// TrophyTracker.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/