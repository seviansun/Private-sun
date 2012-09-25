
var PageName = 'home';
var PageId = 'p0ef28c2afe224a8caba2ec33f405ee8d'
var PageUrl = 'home.html'
document.title = 'home';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $subtext = '';

var $shurutishi = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&subtext=' + encodeURIComponent($subtext) + '&shurutishi=' + encodeURIComponent($shurutishi) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[subtext\]\]/g, $subtext);
  value = value.replace(/\[\[shurutishi\]\]/g, $shurutishi);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

eval(GetDynamicPanelScript('u10', 1));

eval(GetDynamicPanelScript('u14', 2));

var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{

if ((GetGlobalVariableValue('$OnLoadVariable')) == (PopulateVariables(''))) {
function waitu263c42a6c129418494929c5a9b5e90171() {

	SetPanelStateu14("pd0u14");

	MoveWidgetBy('u10',0,-20);
}
setTimeout(waitu263c42a6c129418494929c5a9b5e90171, 0);
}

if (true) {
function waitu18ebabc84c61421287f2e85b4f85422e1() {

	MoveWidgetBy('u10',0,-20);
}
setTimeout(waitu18ebabc84c61421287f2e85b4f85422e1, 50);
}

if (true) {
function waitu6e52992777b642d9a0a561af373984471() {

	MoveWidgetBy('u10',0,-20);
}
setTimeout(waitu6e52992777b642d9a0a561af373984471, 100);
}

if (true) {
function waitu09091e4ade474bb2869b1a85fac3c8fc1() {

	MoveWidgetBy('u10',0,-20);
}
setTimeout(waitu09091e4ade474bb2869b1a85fac3c8fc1, 150);
}

if (true) {
function waituf0718b85e2a34ef4aab37f7187ae76121() {

	MoveWidgetBy('u10',0,-20);
}
setTimeout(waituf0718b85e2a34ef4aab37f7187ae76121, 200);
}

}
gv_vAlignTable['u16'] = 'top';
var u7 = document.getElementById('u7');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if ((GetGlobalVariableValue('$OnLoadVariable')) == (PopulateVariables(''))) {
function waitu2c579df3a555464fb77b8e643785ddb71() {

	SetPanelStateu14("pd1u14");

	MoveWidgetBy('u10',0,20);
}
setTimeout(waitu2c579df3a555464fb77b8e643785ddb71, 0);
}

if (true) {
function waitu57be645e72754fa7baefec0c633e99be1() {

	MoveWidgetBy('u10',0,20);
}
setTimeout(waitu57be645e72754fa7baefec0c633e99be1, 50);
}

if (true) {
function waitufb204871668e4696bf16aee1c39eaf8d1() {

	MoveWidgetBy('u10',0,20);
}
setTimeout(waitufb204871668e4696bf16aee1c39eaf8d1, 100);
}

if (true) {
function waitudaceae56f8344a8789124acace1bc9cd1() {

	MoveWidgetBy('u10',0,20);
}
setTimeout(waitudaceae56f8344a8789124acace1bc9cd1, 150);
}

if (true) {
function waitu0f3092eb9f93403b99452b1ebb971ece1() {

	MoveWidgetBy('u10',0,20);
}
setTimeout(waitu0f3092eb9f93403b99452b1ebb971ece1, 200);
}

}
gv_vAlignTable['u15'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u5 = document.getElementById('u5');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u25 = document.getElementById('u25');

var u21 = document.getElementById('u21');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u3 = document.getElementById('u3');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u14 = document.getElementById('u14');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="http://www.webppd.com" + "";

}

}
gv_vAlignTable['u20'] = 'top';
var u1 = document.getElementById('u1');

var u11 = document.getElementById('u11');

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="http://www.webppd.com/thread-66-1-1.html" + "";

}

}
gv_vAlignTable['u18'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
if (window.OnLoad) OnLoad();
