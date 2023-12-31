import { scene } from './constants';
import Phaser from 'phaser';
import backgroundJson from '@/assets/board/background.json';
import gameJson from '@/assets/board/game.json';
import chickenJson from '@/assets/character/chicken.json';
import chickenImg from '@/assets/character/chicken.png';
import characterJson from '@/assets/character/sprites.json';
import characterImg from '@/assets/character/spritesheet.png';
import flowerImg from '@/assets/objects/Flowers.png';
import houseImg from '@/assets/objects/Houses.png';
import plantImg from '@/assets/objects/Plants.png';
import treeImg from '@/assets/objects/Trees.png';
import rainParticleImg from '@/assets/particles/rain.png';
import starParticleImg from '@/assets/particles/star.png';
import fenceImg from '@/assets/tilesets/Fences.png';
import grassImg from '@/assets/tilesets/Grass.png';
import grassHillImg from '@/assets/tilesets/Grass_Hill.png';
import slopeImg from '@/assets/tilesets/Slopes.png';
import soilImg from '@/assets/tilesets/Soil.png';
import waterImg from '@/assets/tilesets/Water.png';

export default class Loading extends Phaser.Scene {
  constructor() {
    super(scene.loading);
  }

  preload() {
    // tilesets
    this.load.image('water_tiles', waterImg);
    this.load.image('grass_tiles', grassImg);
    this.load.image('grass_hill_tiles', grassHillImg);
    this.load.image('fence_tiles', fenceImg);
    this.load.image('flower_tiles', flowerImg);
    this.load.image('tree_tiles', treeImg);
    this.load.image('house_tiles', houseImg);
    this.load.image('plant_tiles', plantImg);
    this.load.image('slope_tiles', slopeImg);
    this.load.image('soil_tiles', soilImg);

    // characters
    this.load.atlas('character', characterImg, characterJson);
    this.load.atlas('chicken', chickenImg, chickenJson);

    //board
    this.load.tilemapTiledJSON('quiz', gameJson);
    this.load.tilemapTiledJSON('background', backgroundJson);

    // particles
    this.load.image('star-particle', starParticleImg);
    this.load.image('rain-particle', rainParticleImg);
  }
  create() {
    this.add.text(20, 20, 'loading...');
    this.scene.start(scene.town);
  }
}
