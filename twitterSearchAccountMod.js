(function(){
	//短縮のため
	var $ = function(f){ return document.getElementById(f); };
	//URLを取得
	var url = document.location.href;
	//URLがTwitterのユーザーページで、かつ独自の検索窓が存在しない場合のみ処理
	if(new RegExp('^https://twitter.com/[A-Za-z0-9_]+$').test(url)&&$('TSAMi')==null)
	{
		//追加する検索窓のオブジェクトを作る（Twitterページのソースを読んで、公式の検索窓のスタイルを再現）
		var myObject = document.createElement('li');
		myObject.classList.add('ProfileNav-item');
		myObject.innerHTML = '<div style="float:left;height:33px;font-size:12px;width:221px;position:relative"><input type="text" placeholder="アカウント内検索" id="TSAMi" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-8" style="background-color:#f5f8fa;border-radius:21px;border:1px solid #e6ecf0;-moz-box-sizing:border-box;box-sizing:border-box;color:#14171a;display:block;font-size:12px;height:32px;line-height:16px;padding:8px 32px 8px 12px;transition:all .2s ease-in-out;width:100%" /><span style="cursor:pointer;display:block;height:26px;position:absolute;right:3px;top:6px;width:26px"><button class="Icon Icon--medium Icon--search" tabindex="-1" id="TSAMb" style="color:#66757f"></button></span></div>';
		
		//ユーザーページのナビゲーションバーに追加
		var naviBarObject = document.getElementsByClassName('ProfileNav-list')[0]
		naviBarObject.insertBefore(myObject, naviBarObject.lastChild);
		
		//検索窓のテキストを読み取り、from:@ユーザーネームをくっ付けて検索ページに飛ぶアクション
		var searchAction = function(){
			document.location.href =
				'https://twitter.com/search?q=' + 
				encodeURIComponent(
					'from:@' + 
					/[A-Za-z0-9_]+$/.exec(url)[0] + //ユーザー名
					' ' + 
					$('TSAMi').value //検索窓の入力内容
				);
			};
		
		//ボタンクリック時とEnterキー押下時にアクションが走るように設定（HTMLタグに直接属性として書き込むと怒られた）
		$('TSAMb').onclick = searchAction;
		$('TSAMi').onkeydown = function(f){ if(f.keyCode==13) searchAction(); };
	}
})();