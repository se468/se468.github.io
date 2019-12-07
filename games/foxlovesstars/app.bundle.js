/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'My First Name',
    type: Phaser.AUTO,
    scale: {
        width: 1000,
        height: 750,
    },
    scene: scenes_1.default,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            fps: 60,
            debug: false
        },
    },
    parent: 'game',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = helpers_1.getGameWidth(this) * 0.5;
        var halfHeight = helpers_1.getGameHeight(this) * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = value * 100;
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start('MainMenu');
        });
        this.loadAssets();
        this.physics.world.setFPS(120);
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('pause', 'assets/pause.png');
        // new 
        this.load.image('background', 'assets/png/BG/BG.png');
        this.load.spritesheet('character-walk', 'assets/character/walk.png', { frameWidth: 547, frameHeight: 481 });
        this.load.image('tiles', 'assets/maps/Spritesheet/sheet.png');
        this.load.tilemapTiledJSON("map", "assets/maps/level1.json");
        this.load.audio('background-music', 'assets/sound/476547__mrthenoronha__platform-game-theme-loop-3.wav');
        this.load.audio('jump-sound', 'assets/sound/331381__qubodup__public-domain-jump-sound.wav');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __webpack_require__(/*! ../main */ "./src/main.ts");
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.score = 0;
        _this.level = 1;
        _this.gameOver = false;
        _this.paused = false;
        //Sounds
        _this.sounds = {
            bg: null,
            jump: null
        };
        return _this;
    }
    GameScene.prototype.create = function () {
        var _this = this;
        this.gameOver = false;
        this.add.image(1000 / 2, 750 / 2, 'background');
        // Platforms
        var map = this.make.tilemap({ key: 'map' });
        var tileset = map.addTilesetImage('grass', 'tiles');
        this.platforms = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);
        this.platforms.setCollisionByExclusion([-1], true);
        // Player
        this.player = this.physics.add.sprite(100, 600, 'character-walk').setScale(0.18);
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(300, 450).setOffset(75, 0);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('character-walk', {
                start: 0,
                end: 9
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'character-walk', frame: 2 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('character-walk', {
                start: 0,
                end: 9
            }),
            frameRate: 10,
            repeat: -1
        });
        this.physics.add.collider(this.player, this.platforms);
        // Stars
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 13,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
        // Bombs
        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
        // UI
        this.scoreText = this.add.text(1000 - 16, 16, "" + this.score, {
            fill: '#FFB533',
            fontFamily: 'Fredoka One'
        }).setStroke("#FFFFFF", 3).setFontSize(40).setOrigin(1.0, 0);
        this.levelText = this.add.text(1000 / 2, 16, "Level: " + this.level, {
            fill: '#3386FF',
            fontFamily: 'Fredoka One'
        }).setStroke("#FFFFFF", 3).setFontSize(25).setOrigin(0.5, 0);
        this.pauseBtn = this.add.image(16, 16, 'pause').setOrigin(0, 0).setScale(0.5);
        this.pauseBtn.setInteractive({ useHandCursor: true });
        this.pauseBtn.on('pointerup', this.playOrPause);
        // Gameover
        this.gameoverText = this.add.text(1000 / 2, 180, "Game Over", {
            fill: '#3386FF',
            fontFamily: 'Fredoka One'
        }).setFontSize(85).setOrigin(0.5, 0.5).setStroke("#FFFFFF", 16);
        this.gameoverText.visible = false;
        this.toMainMenuBtn = new menu_button_1.MenuButton(this, 1000 / 2 - 180, 450, 'Back to Menu', function () {
            _this.sounds.bg.stop();
            _this.scene.start('MainMenu');
        });
        this.toMainMenuBtn.hide();
        // Background Music
        this.sounds.bg = this.sound.add('background-music', {
            loop: true
        });
        this.sounds.bg.play();
        this.sounds.jump = this.sound.add('jump-sound');
        // Start Game
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.createBomb();
    };
    GameScene.prototype.update = function () {
        if (this.gameOver) {
            return;
        }
        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-300);
            this.player.anims.play('left', true);
            this.player.flipX = true;
        }
        else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(300);
            this.player.anims.play('right', true);
            this.player.flipX = false;
        }
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.cursorKeys.space.isDown && this.player.body.onFloor()) {
            this.player.setVelocityY(-560);
            this.sounds.jump.play();
        }
    };
    GameScene.prototype.playOrPause = function () {
        this.paused = !this.paused;
        if (this.paused) {
            main_1.game.scene.pause('Game');
        }
        else {
            main_1.game.scene.resume('Game');
        }
    };
    GameScene.prototype.hitBomb = function (player, bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.handleGameOver();
    };
    GameScene.prototype.collectStar = function (player, star) {
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText(this.score);
        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
            this.createBomb();
            this.level += 1;
            this.levelText.setText('Level: ' + this.level);
        }
    };
    GameScene.prototype.handleGameOver = function () {
        this.gameOver = true;
        var bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : 0;
        localStorage.setItem('bestScore', Math.max(this.score, bestScore).toString());
        this.score = 0;
        this.level = 1;
        this.gameoverText.visible = true;
        this.toMainMenuBtn.show();
    };
    GameScene.prototype.createBomb = function () {
        var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-100, 100), 20);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
exports.default = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    game_scene_1.GameScene,
];


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        console.log(this.sys.game);
        this.add.image(1000 / 2, 750 / 2, 'background');
        this.add.text(1000 / 2, 180, "FOX LIKES STARS", {
            fill: '#3386FF',
            fontFamily: 'Fredoka One'
        }).setFontSize(85).setOrigin(0.5, 0.5).setStroke("#FFFFFF", 16);
        var bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : 0;
        this.add.text(1000 / 2, 350, "Best Score: " + bestScore, {
            fill: '#FFB533',
            fontFamily: 'Fredoka One'
        }).setFontSize(40).setOrigin(0.5, 0.5).setStroke("#FFFFFF", 3);
        new menu_button_1.MenuButton(this, 1000 / 2 - 80, 450, 'PLAY', function () {
            _this.bgmusic.stop();
            _this.scene.start('Game');
        });
        // Background Music
        this.bgmusic = this.sound.add('background-music', {
            loop: true
        });
        this.bgmusic.play();
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var padding = 15;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add.text(x + padding, y + padding, text, {
            fontFamily: 'Fredoka One',
            fill: '#3386FF',
        }).setFontSize(50).setStroke("#FFFFFF", 5);
        var labelWidth = _this.label.width + padding;
        var labelHeight = _this.label.height + padding;
        _this.width = labelWidth;
        _this.height = labelHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    MenuButton.prototype.show = function () {
        this.label.visible = true;
    };
    MenuButton.prototype.hide = function () {
        this.label.visible = false;
    };
    MenuButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#FFFF00');
    };
    MenuButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#3386FF');
    };
    MenuButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#FFFF00');
    };
    return MenuButton;
}(Phaser.GameObjects.Rectangle));
exports.MenuButton = MenuButton;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ib290LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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Q0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsWUFBVSxJQUFJLENBQUMsS0FBTyxFQUFFO1lBQ25FLElBQUksRUFBRSxTQUFTO1lBQ2YsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFL0MsV0FBVztRQUNYLElBQUksQ0FBQyxZQUFZLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFO1lBQzNELElBQUksRUFBRSxTQUFTO1lBQ2YsVUFBVSxFQUFFLGFBQWE7U0FDMUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxD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SSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLDZDQUF3QixHQUFoQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTywrQ0FBMEIsR0FBbEM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBbEQrQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FrRDNEO0FBbERZLGdDQUFVIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ015IEZpcnN0IE5hbWUnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IDEwMDAsXG4gICAgaGVpZ2h0OiA3NTAsXG4gIH0sXG5cbiAgc2NlbmU6IFNjZW5lcyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBncmF2aXR5OiB7IHk6IDgwMCB9LFxuICAgICAgZnBzOiA2MCxcbiAgICAgIGRlYnVnOiBmYWxzZVxuICAgIH0sXG4gIH0sXG5cbiAgcGFyZW50OiAnZ2FtZScsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0Jvb3QnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41O1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41O1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDA7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCwgaGFsZkhlaWdodCwgcHJvZ3Jlc3NCYXJXaWR0aCwgcHJvZ3Jlc3NCYXJIZWlnaHQsIDB4MDAwMDAwKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LCBoYWxmSGVpZ2h0LCAxMCwgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCwgMHg4ODg4ODgpO1xuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XG5cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcblxuICAgIHRoaXMucGh5c2ljcy53b3JsZC5zZXRGUFMoMTIwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmVcbiAgICogaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgXG4gICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCAnYXNzZXRzL3BsYXRmb3JtLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzdGFyJywgJ2Fzc2V0cy9zdGFyLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKCdib21iJywgJ2Fzc2V0cy9ib21iLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKCdwYXVzZScsICdhc3NldHMvcGF1c2UucG5nJylcbiAgICAvLyBuZXcgXG4gICAgdGhpcy5sb2FkLmltYWdlKCdiYWNrZ3JvdW5kJywgJ2Fzc2V0cy9wbmcvQkcvQkcucG5nJylcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2NoYXJhY3Rlci13YWxrJywgXG4gICAgICAgICdhc3NldHMvY2hhcmFjdGVyL3dhbGsucG5nJyxcbiAgICAgICAgeyBmcmFtZVdpZHRoOiA1NDcsIGZyYW1lSGVpZ2h0OiA0ODEgfVxuICAgIClcblxuICAgIHRoaXMubG9hZC5pbWFnZSgndGlsZXMnLCAnYXNzZXRzL21hcHMvU3ByaXRlc2hlZXQvc2hlZXQucG5nJylcbiAgICB0aGlzLmxvYWQudGlsZW1hcFRpbGVkSlNPTihcIm1hcFwiLCBcImFzc2V0cy9tYXBzL2xldmVsMS5qc29uXCIpXG5cbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2JhY2tncm91bmQtbXVzaWMnLCAnYXNzZXRzL3NvdW5kLzQ3NjU0N19fbXJ0aGVub3JvbmhhX19wbGF0Zm9ybS1nYW1lLXRoZW1lLWxvb3AtMy53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbygnanVtcC1zb3VuZCcsICdhc3NldHMvc291bmQvMzMxMzgxX19xdWJvZHVwX19wdWJsaWMtZG9tYWluLWp1bXAtc291bmQud2F2JylcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi9tYWluJztcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICBwdWJsaWMgc2NvcmU6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBsZXZlbDogbnVtYmVyID0gMTtcblxuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICBcbiAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcGxhdGZvcm1zO1xuICBwcml2YXRlIHBsYXllcjtcbiAgcHJpdmF0ZSBzdGFycztcbiAgcHJpdmF0ZSBib21icztcbiAgXG5cbiAgLy9VSVxuICBwcml2YXRlIHNjb3JlVGV4dDtcbiAgcHJpdmF0ZSBsZXZlbFRleHQ7XG4gIHByaXZhdGUgcGF1c2VCdG47XG5cbiAgLy9HYW1lb3ZlclxuICBwcml2YXRlIGdhbWVvdmVyVGV4dDtcbiAgcHJpdmF0ZSB0b01haW5NZW51QnRuO1xuXG4gIC8vU291bmRzXG4gIHByaXZhdGUgc291bmRzID0ge1xuICAgIGJnOiBudWxsLFxuICAgIGp1bXA6IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmFkZC5pbWFnZSgxMDAwLzIsIDc1MC8yLCAnYmFja2dyb3VuZCcpO1xuXG4gICAgLy8gUGxhdGZvcm1zXG4gICAgY29uc3QgbWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoeyBrZXk6ICdtYXAnIH0pO1xuICAgIGNvbnN0IHRpbGVzZXQgPSBtYXAuYWRkVGlsZXNldEltYWdlKCdncmFzcycsICd0aWxlcycpO1xuICAgIHRoaXMucGxhdGZvcm1zID0gbWFwLmNyZWF0ZVN0YXRpY0xheWVyKCdUaWxlIExheWVyIDEnLCB0aWxlc2V0LCAwLCAwKTtcbiAgICB0aGlzLnBsYXRmb3Jtcy5zZXRDb2xsaXNpb25CeUV4Y2x1c2lvbihbLTFdLCB0cnVlKTtcbiAgICBcblxuICAgIC8vIFBsYXllclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoMTAwLCA2MDAsICdjaGFyYWN0ZXItd2FsaycpLnNldFNjYWxlKDAuMTgpO1xuICAgIHRoaXMucGxheWVyLnNldEJvdW5jZSgwKTtcbiAgICB0aGlzLnBsYXllci5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgdGhpcy5wbGF5ZXIuYm9keS5zZXRTaXplKDMwMCwgNDUwKS5zZXRPZmZzZXQoNzUsIDApO1xuICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnbGVmdCcsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnY2hhcmFjdGVyLXdhbGsnLCB7IFxuICAgICAgICAgIHN0YXJ0OiAwLCBcbiAgICAgICAgICBlbmQ6IDkgXG4gICAgICAgIH0pLFxuICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICByZXBlYXQ6IC0xXG4gICAgfSk7XG4gICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICd0dXJuJyxcbiAgICAgICAgZnJhbWVzOiBbIHsga2V5OiAnY2hhcmFjdGVyLXdhbGsnLCBmcmFtZTogMiB9IF0sXG4gICAgICAgIGZyYW1lUmF0ZTogMjBcbiAgICB9KTtcbiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ3JpZ2h0JyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdjaGFyYWN0ZXItd2FsaycsIHsgXG4gICAgICAgICAgc3RhcnQ6IDAsIFxuICAgICAgICAgIGVuZDogOSBcbiAgICAgICAgfSksXG4gICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgIHJlcGVhdDogLTFcbiAgICB9KTtcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyLCB0aGlzLnBsYXRmb3Jtcyk7XG5cbiAgICAvLyBTdGFyc1xuICAgIHRoaXMuc3RhcnMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtcbiAgICAgICAga2V5OiAnc3RhcicsXG4gICAgICAgIHJlcGVhdDogMTMsXG4gICAgICAgIHNldFhZOiB7IHg6IDEyLCB5OiAwLCBzdGVwWDogNzAgfVxuICAgIH0pO1xuICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5zdGFycywgdGhpcy5wbGF0Zm9ybXMpO1xuICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllciwgdGhpcy5zdGFycywgdGhpcy5jb2xsZWN0U3RhciwgbnVsbCwgdGhpcyk7XG5cbiAgICAvLyBCb21ic1xuICAgIHRoaXMuYm9tYnMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJvbWJzLCB0aGlzLnBsYXRmb3Jtcyk7XG4gICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllciwgdGhpcy5ib21icywgdGhpcy5oaXRCb21iLCBudWxsLCB0aGlzKTtcblxuICAgIC8vIFVJXG4gICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KDEwMDAgLSAxNiwgMTYsIGAke3RoaXMuc2NvcmV9YCwgeyBcbiAgICAgIGZpbGw6ICcjRkZCNTMzJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdGcmVkb2thIE9uZSdcbiAgICB9KS5zZXRTdHJva2UoXCIjRkZGRkZGXCIsIDMpLnNldEZvbnRTaXplKDQwKS5zZXRPcmlnaW4oMS4wLCAwKTtcblxuICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5hZGQudGV4dCgxMDAwIC8gMiwgMTYsIGBMZXZlbDogJHt0aGlzLmxldmVsfWAsIHtcbiAgICAgIGZpbGw6ICcjMzM4NkZGJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdGcmVkb2thIE9uZSdcbiAgICB9KS5zZXRTdHJva2UoXCIjRkZGRkZGXCIsIDMpLnNldEZvbnRTaXplKDI1KS5zZXRPcmlnaW4oMC41LCAwKTtcbiAgICBcbiAgICB0aGlzLnBhdXNlQnRuID0gdGhpcy5hZGQuaW1hZ2UoMTYsIDE2LCAncGF1c2UnKS5zZXRPcmlnaW4oMCwgMCkuc2V0U2NhbGUoMC41KTtcbiAgICB0aGlzLnBhdXNlQnRuLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KTtcbiAgICB0aGlzLnBhdXNlQnRuLm9uKCdwb2ludGVydXAnLCB0aGlzLnBsYXlPclBhdXNlKVxuXG4gICAgLy8gR2FtZW92ZXJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dD0gdGhpcy5hZGQudGV4dCgxMDAwIC8gMiwgMTgwLCBgR2FtZSBPdmVyYCwge1xuICAgICAgZmlsbDogJyMzMzg2RkYnLFxuICAgICAgZm9udEZhbWlseTogJ0ZyZWRva2EgT25lJ1xuICAgIH0pLnNldEZvbnRTaXplKDg1KS5zZXRPcmlnaW4oMC41LCAwLjUpLnNldFN0cm9rZShcIiNGRkZGRkZcIiwgMTYpO1xuICAgIHRoaXMuZ2FtZW92ZXJUZXh0LnZpc2libGUgPSBmYWxzZTtcblxuICAgIHRoaXMudG9NYWluTWVudUJ0biA9IG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMDAgLyAyIC0gMTgwLCA0NTAsICdCYWNrIHRvIE1lbnUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvdW5kcy5iZy5zdG9wKClcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51JylcbiAgICB9KTtcbiAgICB0aGlzLnRvTWFpbk1lbnVCdG4uaGlkZSgpXG5cbiAgICAvLyBCYWNrZ3JvdW5kIE11c2ljXG4gICAgdGhpcy5zb3VuZHMuYmcgPSB0aGlzLnNvdW5kLmFkZCgnYmFja2dyb3VuZC1tdXNpYycsIHtcbiAgICAgIGxvb3A6IHRydWVcbiAgICB9KVxuICAgIHRoaXMuc291bmRzLmJnLnBsYXkoKVxuICAgIHRoaXMuc291bmRzLmp1bXAgPSB0aGlzLnNvdW5kLmFkZCgnanVtcC1zb3VuZCcpXG5cbiAgICAvLyBTdGFydCBHYW1lXG4gICAgdGhpcy5jdXJzb3JLZXlzID0gdGhpcy5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKClcblxuICAgIHRoaXMuY3JlYXRlQm9tYigpXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIFxuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3Vyc29yS2V5cy5sZWZ0LmlzRG93bikge1xuICAgICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVgoLTMwMCk7XG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1zLnBsYXkoJ2xlZnQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZmxpcFggPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JLZXlzLnJpZ2h0LmlzRG93bikge1xuICAgICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVgoMzAwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbXMucGxheSgncmlnaHQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZmxpcFggPSBmYWxzZTtcbiAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlYKDApO1xuICAgICAgICB0aGlzLnBsYXllci5hbmltcy5wbGF5KCd0dXJuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3Vyc29yS2V5cy5zcGFjZS5pc0Rvd24gJiYgdGhpcy5wbGF5ZXIuYm9keS5vbkZsb29yKCkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlZKC01NjApXG4gICAgICAgIHRoaXMuc291bmRzLmp1bXAucGxheSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwbGF5T3JQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIGdhbWUuc2NlbmUucGF1c2UoJ0dhbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZS5zY2VuZS5yZXN1bWUoJ0dhbWUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpdEJvbWIgKHBsYXllciwgYm9tYilcbiAge1xuICAgICAgdGhpcy5waHlzaWNzLnBhdXNlKCk7XG4gICAgICBwbGF5ZXIuc2V0VGludCgweGZmMDAwMCk7XG4gICAgICBwbGF5ZXIuYW5pbXMucGxheSgndHVybicpO1xuICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0U3RhciAocGxheWVyLCBzdGFyKSB7XG4gICAgc3Rhci5kaXNhYmxlQm9keSh0cnVlLCB0cnVlKTtcblxuICAgIHRoaXMuc2NvcmUgKz0gMTA7XG4gICAgdGhpcy5zY29yZVRleHQuc2V0VGV4dCh0aGlzLnNjb3JlKTtcblxuICAgIGlmICh0aGlzLnN0YXJzLmNvdW50QWN0aXZlKHRydWUpID09PSAwKVxuICAgIHtcbiAgICAgIHRoaXMuc3RhcnMuY2hpbGRyZW4uaXRlcmF0ZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBjaGlsZC5lbmFibGVCb2R5KHRydWUsIGNoaWxkLngsIDAsIHRydWUsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNyZWF0ZUJvbWIoKTtcblxuICAgICAgdGhpcy5sZXZlbCArPSAxO1xuICAgICAgdGhpcy5sZXZlbFRleHQuc2V0VGV4dCgnTGV2ZWw6ICcgKyB0aGlzLmxldmVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdhbWVPdmVyKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIGxldCBiZXN0U2NvcmU6IG51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZXN0U2NvcmUnKSA/IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiZXN0U2NvcmUnKSkgOiAwO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiZXN0U2NvcmUnLCBNYXRoLm1heCh0aGlzLnNjb3JlLCBiZXN0U2NvcmUpLnRvU3RyaW5nKCkpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuXG4gICAgdGhpcy5nYW1lb3ZlclRleHQudmlzaWJsZSA9IHRydWU7XG4gICAgdGhpcy50b01haW5NZW51QnRuLnNob3coKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQm9tYigpIHtcbiAgICBsZXQgeCA9ICh0aGlzLnBsYXllci54IDwgNDAwKSA/IFBoYXNlci5NYXRoLkJldHdlZW4oNDAwLCA4MDApIDogUGhhc2VyLk1hdGguQmV0d2VlbigwLCA0MDApO1xuICAgIGxldCBib21iID0gdGhpcy5ib21icy5jcmVhdGUoeCwgMTYsICdib21iJyk7XG4gICAgYm9tYi5zZXRCb3VuY2UoMSk7XG4gICAgYm9tYi5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgYm9tYi5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0xMDAsIDEwMCksIDIwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJztcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIEJvb3RTY2VuZSxcbiAgTWFpbk1lbnVTY2VuZSxcbiAgR2FtZVNjZW5lLFxuXTtcbiIsImltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnTWFpbk1lbnUnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgLy9Tb3VuZHNcbiAgcHJpdmF0ZSBiZ211c2ljO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zeXMuZ2FtZSlcbiAgICB0aGlzLmFkZC5pbWFnZSgxMDAwLzIsIDc1MC8yLCAnYmFja2dyb3VuZCcpO1xuXG4gICAgdGhpcy5hZGQudGV4dCgxMDAwLzIsIDE4MCwgYEZPWCBMSUtFUyBTVEFSU2AsIHsgXG4gICAgICBmaWxsOiAnIzMzODZGRicsXG4gICAgICBmb250RmFtaWx5OiAnRnJlZG9rYSBPbmUnXG4gICAgfSkuc2V0Rm9udFNpemUoODUpLnNldE9yaWdpbigwLjUsIDAuNSkuc2V0U3Ryb2tlKFwiI0ZGRkZGRlwiLCAxNik7XG5cbiAgICBsZXQgYmVzdFNjb3JlOiBudW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmVzdFNjb3JlJykgPyBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmVzdFNjb3JlJykpIDogMDtcbiAgICB0aGlzLmFkZC50ZXh0KDEwMDAvMiwgMzUwLCBgQmVzdCBTY29yZTogJHtiZXN0U2NvcmV9YCwgeyBcbiAgICAgIGZpbGw6ICcjRkZCNTMzJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdGcmVkb2thIE9uZSdcbiAgICB9KS5zZXRGb250U2l6ZSg0MCkuc2V0T3JpZ2luKDAuNSwgMC41KS5zZXRTdHJva2UoXCIjRkZGRkZGXCIsIDMpO1xuXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwMCAvIDIgLSA4MCwgNDUwLCAnUExBWScsICgpID0+IHtcbiAgICAgIHRoaXMuYmdtdXNpYy5zdG9wKClcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKVxuICAgIH0pO1xuXG4gICAgLy8gQmFja2dyb3VuZCBNdXNpY1xuICAgIHRoaXMuYmdtdXNpYyA9IHRoaXMuc291bmQuYWRkKCdiYWNrZ3JvdW5kLW11c2ljJywge1xuICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5iZ211c2ljLnBsYXkoKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuY29uc3QgcGFkZGluZyA9IDE1O1xuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xuICBwcml2YXRlIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkLnRleHQoeCArIHBhZGRpbmcsIHkgKyBwYWRkaW5nLCB0ZXh0LCB7XG4gICAgICBmb250RmFtaWx5OiAnRnJlZG9rYSBPbmUnLFxuICAgICAgZmlsbDogJyMzMzg2RkYnLFxuICAgIH0pLnNldEZvbnRTaXplKDUwKS5zZXRTdHJva2UoXCIjRkZGRkZGXCIsIDUpO1xuXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyBwYWRkaW5nO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nO1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodDtcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy5sYWJlbC52aXNpYmxlID0gdHJ1ZTtcbiAgfVxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICB0aGlzLmxhYmVsLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRjAwJyk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMzM4NkZGJyk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGMDAnKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==