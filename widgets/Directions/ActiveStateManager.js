// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase"],function(b,c,e,d){return c([d,b],{_dijitDirections:null,_widget:null,mapClickActive:!0,constructor:function(a){this._widget=a.widget},postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments)},setDirectionDijit:function(a){this._dijitDirections=a},cacheStates:function(a){this._dijitDirections&&(this.barrierToolActive=this._dijitDirections.barrierToolActive,this.mapClickActive=a&&
a.mapClickActive||this._dijitDirections.mapClickActive)},revertToLastState:function(){this._dijitDirections&&(this.activateDijit(),this.cacheStates())},activateDijit:function(){this._dijitDirections&&("function"===typeof this._dijitDirections.activate&&this._dijitDirections.activate(),this._widget._disableWebMapPopup(),this.barrierToolActive?this._dijitDirections.activateBarrierTool():this._dijitDirections.deactivateBarrierTool(),this.setMapClickActive(this.mapClickActive))},deactivateDijit:function(){this._dijitDirections&&
("function"===typeof this._dijitDirections.deactivate&&this._dijitDirections.deactivate(),this._widget._enableWebMapPopup(),"undefined"!==typeof this._dijitDirections.barrierToolActive&&this._dijitDirections.deactivateBarrierTool(),this.setMapClickActive(!1))},setMapClickActive:function(a){this._dijitDirections&&this._dijitDirections._enqueue&&this._dijitDirections._enqueue(function(){this.set("mapClickActive",a)})},setMapClickActiveImmediately:function(a){this._dijitDirections&&this._dijitDirections.set("mapClickActive",
a)}})});