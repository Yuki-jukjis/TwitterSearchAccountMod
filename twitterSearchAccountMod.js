(function(){
	//�Z�k�̂���
	var $ = function(f){ return document.getElementById(f); };
	//URL���擾
	var url = document.location.href;
	//URL��Twitter�̃��[�U�[�y�[�W�ŁA���Ǝ��̌����������݂��Ȃ��ꍇ�̂ݏ���
	if(new RegExp('^https://twitter.com/[A-Za-z0-9_]+$').test(url)&&$('TSAMi')==null)
	{
		//�ǉ����錟�����̃I�u�W�F�N�g�����iTwitter�y�[�W�̃\�[�X��ǂ�ŁA�����̌������̃X�^�C�����Č��j
		var myObject = document.createElement('li');
		myObject.classList.add('ProfileNav-item');
		myObject.innerHTML = '<div style="float:left;height:33px;font-size:12px;width:221px;position:relative"><input type="text" placeholder="�A�J�E���g������" id="TSAMi" autocomplete="off" spellcheck="false" aria-autocomplete="list" aria-expanded="false" aria-owns="typeahead-dropdown-8" style="background-color:#f5f8fa;border-radius:21px;border:1px solid #e6ecf0;-moz-box-sizing:border-box;box-sizing:border-box;color:#14171a;display:block;font-size:12px;height:32px;line-height:16px;padding:8px 32px 8px 12px;transition:all .2s ease-in-out;width:100%" /><span style="cursor:pointer;display:block;height:26px;position:absolute;right:3px;top:6px;width:26px"><button class="Icon Icon--medium Icon--search" tabindex="-1" id="TSAMb" style="color:#66757f"></button></span></div>';
		
		//���[�U�[�y�[�W�̃i�r�Q�[�V�����o�[�ɒǉ�
		var naviBarObject = document.getElementsByClassName('ProfileNav-list')[0]
		naviBarObject.insertBefore(myObject, naviBarObject.lastChild);
		
		//�������̃e�L�X�g��ǂݎ��Afrom:@���[�U�[�l�[���������t���Č����y�[�W�ɔ�ԃA�N�V����
		var searchAction = function(){
			document.location.href =
				'https://twitter.com/search?q=' + 
				encodeURIComponent(
					'from:@' + 
					/[A-Za-z0-9_]+$/.exec(url)[0] + //���[�U�[��
					' ' + 
					$('TSAMi').value //�������̓��͓��e
				);
			};
		
		//�{�^���N���b�N����Enter�L�[�������ɃA�N�V����������悤�ɐݒ�iHTML�^�O�ɒ��ڑ����Ƃ��ď������ނƓ{��ꂽ�j
		$('TSAMb').onclick = searchAction;
		$('TSAMi').onkeydown = function(f){ if(f.keyCode==13) searchAction(); };
	}
})();