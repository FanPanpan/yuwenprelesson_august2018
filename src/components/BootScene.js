import * as PIXI from 'pixi.js'
import PIXISlider from './PixiSlider.js'
import PIXIScroll from './PIXIScroll.js'
import SingleAlpha from "./SingleAlpha.js";
import {MenuBar} from "./gameUI";
class BootScene extends PIXI.Container{
  constructor($option){
    super();
    this.startBtn = null;
    this.vueInstance = $option.vueInstance;

    this.on('added',this.addedToStage,this);
  }

  addedToStage(){
    var self = this;
    var pageImg;
    var pixiScroll;

    this.startBtn = new PIXI.Graphics();
    this.startBtn.beginFill(0xff0000);
    this.startBtn.drawRect(0,0,200,100);
    this.startBtn.endFill();
    this.addChild(this.startBtn);

    this.startBtn.interactive = true;
    this.startBtn.once('pointertap',this.enterGame_handler,this);

    pageImg = new PIXI.Sprite(PIXI.Texture.from('page_png'));
  //I changed somtyhing;...

  
    // //pageImg.height = 200;
    // pixiScroll = new PIXIScroll({
    //   width:400,
    //   height:300,
    //   stage:self.parent,
    //   content:pageImg
    // });
    //






  }
  enterGame_handler(){
    //åååthis.vueInstance.$router
    this.vueInstance.$router.push('/index');
  }

}
export default BootScene;
