var ScoreKeeper = pc.createScript('scoreKeeper');

// initialize code called once per entity
ScoreKeeper.prototype.initialize = function() {
    this.timer = 0;
    
    this.score = 0;
    
    this.app.on('player:death', this.onPlayerDeath, this);
    
    this.app.on('ball:touchdown', this.onTouchDown, this);
    
    this.app.on('score:reset', this.onReset, this);
    
    this.check = false;
    
};

// update code called every frame
ScoreKeeper.prototype.update = function(dt) {
    /*this.timer += dt;
    
    if (this.timer >= 2 && this.check === false) {
        this.score ++;
        this.timer = 0;
    }*/
};

ScoreKeeper.prototype.onPlayerDeath = function() {
    
    this.check = true;
    
    if (localStorage.length === 0) {
        localStorage.setItem('highScore', this.score);
    }
    
    else {
        if (localStorage.getItem('highScore') < this.score) {
            localStorage.setItem('highScore', this.score);
        } 
    }
    
    setTimeout(function (){
        this.app.root.findByName('Cloning Entity').enabled = false;
        this.app.root.findByName("Score").enabled = false;
    }.bind(this), 1000);
    
    this.app.root.findByName('ScoreNumber').element.text = this.score.toString();
    this.app.root.findByName('BestNumber').element.text = localStorage.getItem('highScore').toString();

};

ScoreKeeper.prototype.onTouchDown = function() {
    this.score ++;
    this.app.root.findByName('ScoreDisp').element.text = this.score.toString();
    
};

ScoreKeeper.prototype.onReset = function() {
    this.score = 0;
    this.app.root.findByName('ScoreDisp').element.text = this.score.toString();
};




// swap method called for script hot-reloading
// inherit your script state here
// ScoreKeeper.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/