
for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

function OnLoad(e) {

}
gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u16'] = 'top';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (((GetWidgetText('u10')) == ('liufei')) && ((GetWidgetText('u12')) == ('123456'))) {

	SetPanelState('u2', 'pd1u2','none','',500,'none','',500);

	SetPanelVisibility('u6','hidden','none',500);

}

if (((GetWidgetText('u10')) != ('liufei')) && ((GetWidgetText('u10')) != (''))) {

SetWidgetFormText('u10', '请输入正确的登录名');

}

if (((GetWidgetText('u12')) != ('123456')) && ((GetWidgetText('u12')) != (''))) {

SetWidgetFormText('u12', '请输入正确的登录密码');

}

if (((GetWidgetText('u10')) == ('')) && ((GetWidgetText('u12')) == (''))) {

SetWidgetRichText('u5', '<p style="text-align:left;"><span style="font-family:宋体;font-size:15px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">登录</span></p>');

	SetPanelVisibility('u6','hidden','none',500);

}
});
gv_vAlignTable['u15'] = 'top';u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

SetWidgetRichText('u5', '<p style="text-align:left;"><span style="font-family:宋体;font-size:15px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">登录</span></p>');

	SetPanelState('u2', 'pd0u2','none','',500,'none','',500);

	SetPanelVisibility('u2','','none',500);

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u17'] = 'top';u5.tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

SetWidgetRichText('u5', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">&nbsp;</span></p>');

	SetPanelVisibility('u6','','none',500);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u11'] = 'top';
if (window.OnLoad) OnLoad();
