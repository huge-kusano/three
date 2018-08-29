var App = App || {};



;(function() {

	'use strict';
	

	var AppMain = AppMain || {};


	AppMain = function() {
		this.init();
	};

	// ----------------------------------------------
	// 変数定義
	// ----------------------------------------------	
	AppMain.prototype.value1 = "value1";
	AppMain.prototype.value2 = "value2";


	// ----------------------------------------------
	// コンストラクタ
	// ----------------------------------------------
	AppMain.prototype.init = function(){

		this.pluginSet();


		// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
		// ここに必要なスクリプトを書いてください。
		console.log(this.value1,this.value2);
		this.kansu();
		// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼


	}

	// ----------------------------------------------
	// プラグイン実行関数
	// ----------------------------------------------
	AppMain.prototype.pluginSet = function(){

		console.log('[pluginSet]');

		this.pluginSetScroll();
		this.pluginSetTweenMax();
		this.pluginSetSlick();
		this.pluginSetColorBox();

	}

	AppMain.prototype.pluginSetScroll = function(){

		// スムーズスクロール
		$('a[href^=#]').click(function(){
			var speed = 400;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "easeOutQuart");
			return false;
		});
		
	}

	AppMain.prototype.pluginSetTweenMax = function(){

		// TweenMax
		// delay：開始するタイミングを遅延させる（secondで設定）
		TweenMax.to('#obj1', 2, { left: 300, delay: 0.5 });
		// repeat：リピート回数を設定。-1を設定すると無限リピート
		TweenMax.to('#obj2', 2, { left: 300, repeat: 2 });
		// yoyo：往復リピートさせる。repeatの設定が必要
		TweenMax.to('#obj3', 2, { left: 300, repeat: -1, yoyo: true });
		// onComplete：アニメーション完了時にcompFuncを実行
		TweenMax.to('#obj4', 2, { left: 300, onComplete: compFunc });
		function compFunc() {
		  TweenMax.to('#obj4', 2, { autoAlpha: 0.2 });
		};

	}

	AppMain.prototype.pluginSetSlick = function(){

		$('.single-item').slick();

	}

	AppMain.prototype.pluginSetColorBox = function(){

		//Examples of how to assign the Colorbox event to elements
		$(".group1").colorbox({rel:'group1'});
		$(".group2").colorbox({rel:'group2', transition:"fade"});
		$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
		$(".group4").colorbox({rel:'group4', slideshow:true});
		$(".ajax").colorbox();
		$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
		$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
		$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
		$(".inline").colorbox({inline:true, width:"50%"});
		$(".callbacks").colorbox({
			onOpen:function(){ alert('onOpen: colorbox is about to open'); },
			onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
			onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
			onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
			onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
		});

		$('.non-retina').colorbox({rel:'group5', transition:'none'})
		$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
		
		//Example of preserving a JavaScript event for inline calls.
		$("#click").click(function(){ 
			$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
			return false;
		});

	}

	// ----------------------------------------------
	// 任意の関数を以下に書いてください。
	// ----------------------------------------------
	AppMain.prototype.kansu = function(){

		console.log('[kansu]');

	}



	// ----------------------------------------------
	// 初期実行
	// ----------------------------------------------

	$(function() {
	// $(window).load(function() {
		 App.insMain = new AppMain();
	} );




})();









