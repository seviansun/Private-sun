
var PageName = '我的闲置';
var PageId = '0932aaf2da184bf49290b2a3702bf2f1'
var PageUrl = '我的闲置.html'
document.title = '我的闲置';
var PageNotes = 
{
"pageName":"我的闲置",
"showNotesNames":"False"}
var $OnLoadVariable = '';

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
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '25');
  value = value.replace(/\[\[GenMonth\]\]/g, '7');
  value = value.replace(/\[\[GenMonthName\]\]/g, '七月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期三');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{
windowEvent = e;


if (true) {

	self.location.href="发布闲置.html" + GetQuerystring();

}

}
gv_vAlignTable['u95'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u80 = document.getElementById('u80');

var u93 = document.getElementById('u93');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u8 = document.getElementById('u8');

var u32 = document.getElementById('u32');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u4 = document.getElementById('u4');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u10 = document.getElementById('u10');

var u30 = document.getElementById('u30');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u34 = document.getElementById('u34');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{
windowEvent = e;


if (true) {

	NewWindow("#" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}
gv_vAlignTable['u100'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

	self.location.href="发布闲置.html" + GetQuerystring();

}

}
gv_vAlignTable['u49'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd1u84','none','',500,'none','',500);

}

}

var u85 = document.getElementById('u85');

var u11 = document.getElementById('u11');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u71 = document.getElementById('u71');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u36 = document.getElementById('u36');

var u75 = document.getElementById('u75');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{
windowEvent = e;


if (true) {

	self.location.href="发布闲置.html" + GetQuerystring();

}

}
gv_vAlignTable['u92'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u22 = document.getElementById('u22');

var u98 = document.getElementById('u98');

var u52 = document.getElementById('u52');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u77 = document.getElementById('u77');

var u90 = document.getElementById('u90');

var u73 = document.getElementById('u73');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd1u10','none','',500,'none','',500);

}

}

var u28 = document.getElementById('u28');

var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');

var u14 = document.getElementById('u14');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u69 = document.getElementById('u69');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", u96Click);
else u96.addEventListener("click", u96Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u96LinksClick'></DIV>")
var u96LinksClick = document.getElementById('u96LinksClick');
function u96Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clickubb8327e65a8c4cac9465ff0fe1874df9(event)'>Case 1</div>");
function u96Clickubb8327e65a8c4cac9465ff0fe1874df9(e)
{

	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clickub7d3b33ead4d40efb23fafac382563e9(event)'>Case 2</div>");
function u96Clickub7d3b33ead4d40efb23fafac382563e9(e)
{

	ToggleLinks(e, 'u96LinksClick');
}

var u61 = document.getElementById('u61');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u82 = document.getElementById('u82');

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u10', 'pd0u10','none','',500,'none','',500);

}

}

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u20 = document.getElementById('u20');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u63 = document.getElementById('u63');

var u13 = document.getElementById('u13');

var u2 = document.getElementById('u2');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u57 = document.getElementById('u57');

var u84 = document.getElementById('u84');

var u6 = document.getElementById('u6');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u18 = document.getElementById('u18');

var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{
windowEvent = e;


if (true) {

	self.location.href="发布闲置.html" + GetQuerystring();

}

}
gv_vAlignTable['u44'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u39 = document.getElementById('u39');

var u59 = document.getElementById('u59');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u47 = document.getElementById('u47');

var u67 = document.getElementById('u67');

if (window.OnLoad) OnLoad();
