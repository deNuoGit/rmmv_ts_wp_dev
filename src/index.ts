//=============================================================================
// firstTsPlugin.js
//=============================================================================

/*:
  @plugindesc typescript weback compile plugin
  @author なおキーヌ
 
  @param Offset X
  @desc The offset value for the x coordinate.
  @default 0
 
  @param Offset Y
  @desc The offset value for the y coordinate.
  @default 0
 
  @param Width
  @desc The width of the command window.
  @default 240
 
  @param Background
  @desc The background type. 0: Normal, 1: Dim, 2: Transparent
  @default 0
 
  @help This plugin does not provide plugin commands.
*/

/*:ja
  @plugindesc タイトルコマンドウィンドウの位置を変更します。
  @author なおキーヌ
 
  @param Offset X
  @desc X座標のオフセット値です。
  @default 0
 
  @param Offset Y
  @desc Y座標のオフセット値です。
  @default 0
 
  @param Width
  @desc コマンドウィンドウの幅です。
  @default 240
 
  @param Background
  @desc 背景タイプです。0: 通常、1: 暗くする、2: 透明
  @default 0
 
  @help このプラグインには、プラグインコマンドはありません。
 */

import CalcTest from "./lib/calc";

const hoge: CalcTest = new CalcTest();

hoge.a_plus_b();
