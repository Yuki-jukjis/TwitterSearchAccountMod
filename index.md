---
layout: default
title: Twitterのアカウント内検索MOD
---

PCブラウザ版Twitter(Twitter Web Client)で簡単にアカウント内検索できるブックマークレットです。
プロフィールページから2クリックでアカウント内検索を実現します。

![使用例 ツイートやフォロワーの並びにアカウント内検索の欄がある](example.png)

## 使い方

以下のコードをコピーし、使っているブラウザのブックマークを作成し、URLの欄に以下のコードをコピペしてください。

Twitterのプロフィールページ（自分のでなくても構いません）を表示した状態で、作成したブックマークをクリックする（ブックマークバーなどを表示しておいてください）と、「アカウント内検索」という検索窓が表示されます。

ページを移動したり更新したりすると消えてしまうので毎回ブックマークを開く必要はありますが、それでも今まで以上に簡単に検索することができるようになりました。

Google Chromeでのみ動作確認を行っております。また、導入は自己責任でお願いします。

### 完全版
<textarea style="width:100%; height:10em" readonly>
javascript:var TSAM0=document.location.href;if(new RegExp('^https://twitter.com/[A-Za-z0-9_]+$').test(TSAM0)){var TSAM1=document.createElement('li');TSAM1.classList.add('ProfileNav-item');TSAM1.innerHTML='<div style="float:left;height:33px;font-size:12px;width:221px;position:relative"><input type="text" placeholder="アカウント内検索" id="TSAMi" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-8" style="background-color:#f5f8fa;border-radius:21px;border:1px solid #e6ecf0;-moz-box-sizing:border-box;box-sizing:border-box;color:#14171a;display:block;font-size:12px;height:32px;line-height:16px;padding:8px 32px 8px 12px;transition:all .2s ease-in-out;width:100%"><span style="cursor:pointer;display:block;height:26px;position:absolute;right:3px;top:6px;width:26px"><button class="Icon Icon--medium Icon--search" tabindex="-1" id="TSAMb" style="color:#66757f"></button></span></div>';var TSAM2=document.getElementsByClassName('ProfileNav-list')[0];TSAM2.insertBefore(TSAM1,TSAM2.lastChild);var TSAM3=function(){document.location.href='https://twitter.com/search?q=from:@'+/[A-Za-z0-9_]+$/.exec(TSAM0)[0]+' '+document.getElementById('TSAMi').value};document.getElementById('TSAMb').onclick=TSAM3;document.getElementById('TSAMi').onkeydown=function(e){if(e.keyCode==13)TSAM3()}}
</textarea>

### 簡易版
表示を単純にした分、コードが短くなっています。

<textarea style="width:100%; height:10em" readonly>
javascript:var TSAM0=document.location.href;if(new RegExp('^https://twitter.com/[A-Za-z0-9_]+$').test(TSAM0)){var TSAM1=document.createElement('li');TSAM1.classList.add('ProfileNav-item');TSAM1.innerHTML='<input type="text" placeholder="アカウント内検索" id="TSAMi" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-8"><button class="Icon Icon--medium Icon--search" tabindex="-1" id="TSAMb"></button>';var TSAM2=document.getElementsByClassName('ProfileNav-list')[0];TSAM2.insertBefore(TSAM1,TSAM2.lastChild);var TSAM3=function(){document.location.href='https://twitter.com/search?q=from:@'+/[A-Za-z0-9_]+$/.exec(TSAM0)[0]+' '+document.getElementById('TSAMi').value};document.getElementById('TSAMb').onclick=TSAM3;document.getElementById('TSAMi').onkeydown=function(e){if(e.keyCode==13)TSAM3()}}
</textarea>
