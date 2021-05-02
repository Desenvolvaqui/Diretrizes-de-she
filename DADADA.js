(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DADADA_atlas_", frames: [[565,342,108,340],[651,0,108,340],[0,474,192,340],[194,474,192,340],[388,474,175,340],[474,0,175,340],[0,0,472,472]]}
];


// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["DADADA_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2962,2962);


(lib.Interpolação8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-27.05,-85.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-85,54,170);


(lib.Interpolação7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-27.05,-85.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-85,54,170);


(lib.Interpolação6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-47.9,-85.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-85,96,170);


(lib.Interpolação5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-47.9,-85.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-85,96,170);


(lib.Interpolação4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-43.8,-85.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-85,87.5,170);


(lib.Interpolação3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-43.8,-85.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-85,87.5,170);


(lib.Interpolação2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-118.05,-118.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-118,236,236);


(lib.Interpolação1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-118,-118,0.0797,0.0797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-118,236.1,236.1);


// stage content:
(lib.DADADA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// i
	this.instance = new lib.Interpolação7("synched",0);
	this.instance.setTransform(623.8,-50.6);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolação8("synched",0);
	this.instance_1.setTransform(623.8,160.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},152).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152).to({_off:false},0).to({_off:true,y:160.05},7).wait(1));

	// l
	this.instance_2 = new lib.Interpolação5("synched",0);
	this.instance_2.setTransform(548.85,-76);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolação6("synched",0);
	this.instance_3.setTransform(548.85,160.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},144).to({state:[{t:this.instance_3}]},8).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({_off:true,y:160.05},8).wait(8));

	// p
	this.instance_4 = new lib.Interpolação3("synched",0);
	this.instance_4.setTransform(470.15,-58.25);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpolação4("synched",0);
	this.instance_5.setTransform(470.15,160.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},137).to({state:[{t:this.instance_5}]},7).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(137).to({_off:false},0).to({_off:true,y:160.05},7).wait(16));

	// Camada_1
	this.instance_6 = new lib.Interpolação1("synched",0);
	this.instance_6.setTransform(963.15,559.65,6.2722,6.2722,0,0,0,0.1,0);

	this.instance_7 = new lib.Interpolação2("synched",0);
	this.instance_7.setTransform(963.3,559.65);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,regX:0,scaleX:1,scaleY:1,x:963.3},42).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},42).to({y:1077.45},23).to({x:1.35},17).to({y:3.8},16).to({x:1910.05},20).to({y:1074.9},19).to({x:960},22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(843.3,359.6,1184.7,940.8000000000001);
// library properties:
lib.properties = {
	id: 'A623F8872DBD60489A7FC2113853F584',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1619920674771", id:"CachedBmp_1"},
		{src:"images/DADADA_atlas_.png?1619920674719", id:"DADADA_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A623F8872DBD60489A7FC2113853F584'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;