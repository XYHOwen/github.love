
/*字符拼接区*/
var introduce =' \/*\n  * Hi,亲爱的林茜小姐姐： \n  * 我们又见面啦！有没有很惊喜呀！ \n  * 不知不觉2024年已经开始了，一直都没有好好陪你～ \n  * 难得我有时间和闲心，很多话也不知道从何开口～ \n  * 我知道你一定会来到这里～ \n  * 那就让这个虚拟的独白就当作我们今年快乐时光的开始吧！ \n  * 有点冷清哎～那就先来点音乐吧～ \n  * 如果没有听见背景音乐请你轻点两下屏幕哦～ \n  * 你总让我用自己的方式表达爱意～ \n  * 那么作为一个程序猿,发挥程序猿的特长就送你张网页吧~ \n  * 请原谅我用这种敷衍的形式～  \n  * 好啦，就说这么多啦，那我就要开始啦～ \n  * 你那么爱美那我就先从网页的美化开始吧！\n */';
	var sty1='\n  /* 那就先从背景开始吧～ 既然是仙女那就要粉粉的～ */ \n  body{\n\t background:-webkit-linear-gradient(#f54ea2,#ff7676);\n\t font-family:"微软雅黑";\n   }\n   /* 搬个凳子坐下来酝酿一下，哈哈哈，让代码也歇会儿～ */\n   #wrap{\n\t overflow:auto;\n\t width:40%;\n\t height:420px;\n\t border-radius:5px;\n\t box-shadow:0 0 15px #fff;\n\t font-size:14px;\n\t font-weight:bold;\n   }';
	var trs1 = '\n  \/* 代码也很丑，那我也要让它变得漂亮起来～ *\/';
var lightheight = '\n  #wrap{\n\t background:#002B36;\n\t color: #BE84F2;\n   }\n  .token.property{\n\t color:#64d5ea;\n   }\n   .token.comment{\n\t color:857F6B;\n   }\n';
    var trs2 = '  \/* 现在我也酝酿的差不多啦～ \n  * 那就随便说点吧～先让代码到一边凉快一会～ *\/';
    var scrollRight = '\n  #wrap{\n\t transform: rotateY(-10deg);\n\t position:fixed;\n\t left:53%;\n\t top: 4%;\n\t height: 85%\n   } \n   \/* 嗯～～～，还是正式一点吧～ \n  * 我准备一张纸，慢慢写下来吧～ \n  * 稍坐会儿哈，我马上就来～ *\/\n  ';
var drawBoard = '#loveme{\n\t background: url(1.png);\n\t background-repeat: no-repeat;\n\t background-size: cover;\n\t background-position: center center;\n\t overflow:auto;\n\t position:fixed;\n\t top:40px;\n\t left:5%;\n\t width:45%;\n\t height:85%;\n\t color:#000;\n\t white-space: pre-wrap;\n\t box-shadow:0 0 15px #fff;\n\t border-radius:5px;\n\t transform:rotateY(10deg);\n  /* 久等啦～我来啦我的小公主～ */ \n   }';
//var audio = new Audio("/Users/xyhowen/Desktop/LoveDebug/归档/MySoul.mp3");audio.play();
var loveme = '\n<div><Temp>致林小姐的一封信</Temp></div><p>遇见你是一件特别美好、幸福开心的事情，一路上走过了多少磕磕绊绊。其中有过争吵，有过心酸，有过开心，有过难过，也有过悲伤，正式因为这些，才让我们彼此的感情更加深厚，才让我们更了解彼此！</p><h2>在长沙的时候</h2><p>还记得在长沙工作你刚来公司的时候,感觉你很高冷,没怎么说过话对你也不怎么了解,都不记得我们是怎么搭上话的,如果没记错的话应该是抖音让我们相识.</p><h2>最好的回忆</h2><p>还记得以前每周都会给你买酸奶一起分赃,呸不对,是一起分享.每次拿给你感觉你都挺不好意思的,我一直觉都得你是比较内向的女孩.第一次问你喜欢吃什么味道你说草莓,我以为你喜欢草莓以后就都是买的这一款,原来特喵的你并不是特别喜欢只是随便说的.尽管如此想想还是很好玩.</p><h2>零体验</h2><p>本来以为你是很正紧的,没想到那段期间我拿你当朋友,你竟然拿我当男友,贪图我的美色,哎呀说出来真是有点不太好意思.认识你之后我们从学英语到学韩剧学了各种各样的语言,掌握了多国的换算人民币汇率~感谢你带给我的欢乐.</p><h2>Ending</h2><div><p>You are my today and all of my tomorrows.<br>你是我的今天和所有的明天。</p></div>';
var trs3 = ' \n   \/* 嗯～～好像还是不太好看！让我再微调一下吧～ *\/\n   #loveme h2{\n\t display: inline-block;\n\t border-bottom: 1px solid;\n\t margin: 1em 0 .5em;\n\t font-size: 15px;\n\t font-weight: 700;\n\t line-height: 2;\n\t font-family: microsoft yahei;\n   }\n   #loveme p{\n\t line-height: 1.5; padding: 1em;  }\n   #loveme div p{\n\t margin: 1em;\n\t padding: 1.5em;\n\t background: rgba(221,221,221,.5);\n   } \n  #loveme div Temp{\n\t font-size: 20px; text-align:center ;\n\t padding: .5em;\n\t background: rgba(255,0,0,.5);\n   }\n\t\/*美感不怎么滴,只能这样了~*/';/* *** 最后为大家带来一个小惊喜，倒数三个数  \n\t* 3\n\t* 2\n\t* 1\n\t*** */
	var str = introduce.concat(sty1).concat(trs1).concat(lightheight).concat(trs2).concat(scrollRight).concat(drawBoard).concat(loveme).concat(trs3);


	var styleTag = document.getElementById('styleTag');
	var sourceBoard = document.getElementById('wrap');
	//var Mytemp = document.getElementById('Temp');
	var n = 0;
	var No_One = 320 ;  //Scroll_Start 开始滚动
	var highlight_No = 505 ; //代码高亮起始
	var languagesJudge_No = 1278 ;//独白结束
	var languages_No = 1362 ; //独白开始，代码结束
	var languageTotal_No = 1951 ;  //总结束
	var SpellSpeed = 120 ;

	//Mytemp.style.textAlign = "Center" ;
	const MySoulAudio = document.getElementById('MySoul');
	const AutumnMissAudio = document.getElementById('AutumnMiss')
	//const button = document.getElementById('MyButton');
	// if (n>languages_No){
	// 	audio.play();
	// }
	
	// button.addEventListener('click',(Test) => {
	// 	Audio.play();
	// });


var controller= setInterval(put,SpellSpeed);
	 function put(){

			n++;

			if (n>=145){
				AutumnMissAudio.play();
				//SpellSpeed = 80 ;
				}
				
			if(n>0 && n<=languages_No){
					sourceBoard.innerHTML =str.substring(0,n)

				styleTag.innerHTML =str.substring(0,n);

			}

			if(n>=No_One){
					$('#wrap').animate({
						scrollTop: 1000
						}, 50);
			}

			if(n>=highlight_No && n<=languages_No){
				sourceBoard.innerHTML =  Prism.highlight(str.substring(0,n), Prism.languages.css);

			}

			if(n>=languagesJudge_No && n<=languages_No){

				if(document.getElementById('loveme')){
					console.log('loveme元素已经存在');

				}
				else{
					var drawBoard = document.createElement('pre');
				    drawBoard.id = 'loveme';
				    document.body.appendChild(drawBoard);

				}

			}

			if (n>languages_No){
				MySoulAudio.play();
				AutumnMissAudio.pause();
				SpellSpeed = 520 ;
				}

			if(n>languages_No && n<languageTotal_No && AutumnMissAudio.paused){
			var drawBoard = document.getElementById('loveme');
				drawBoard.innerHTML =str.substring(languages_No,n);
					$('#loveme').animate({
						scrollTop: 1000
						}, 50);
			}

			if(n>=languageTotal_No){
				sourceBoard.innerHTML +=str.substring(n,n+1)
			    styleTag.innerHTML +=str.substring(n,n+1);
				//sourceBoard.innerHTML =  Prism.highlight(str.substring(0,languages_No), Prism.languages.css);

			}
	     if(n>=languageTotal_No){
	     	  sourceBoard.innerHTML =  Prism.highlight(str.substring(0,languages_No), Prism.languages.css)+Prism.highlight(str.substring(languageTotal_No,n), Prism.languages.css);

	     }

		if(n>str.length)
		
			{window.clearInterval(controller)}





};
