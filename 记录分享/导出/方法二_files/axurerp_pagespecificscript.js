for(var i = 0; i < 11; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if ((GetCheckState('u4')) == (true)) {

	SetPanelState('u6', 'pd1u6','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

}
});
gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u8'] = 'center';