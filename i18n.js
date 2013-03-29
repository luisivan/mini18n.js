/* Mini18n.js by Luis Iván Cuende */
String.prototype.replaceAll = function(str1, str2, ignore) {
   return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), str2);
};

var lang;

// Fix for Android. See http://stackoverflow.com/questions/6547642/get-the-language-of-user-in-android
if (navigator.userAgent && (lang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i)))
  lang = lang[1];
else
  lang = (navigator.language || navigator.userLanguage).substr(0, 2);

var i18n = {};
i18n.dict = [];

i18n.translate = function() {
  if (lang == 'en') {
    document.body.innerHTML = document.body.innerHTML.replace(/\{\{/g,'').replace(/\}\}/g,'');
    return;
  }
  var html = document.body.innerHTML;
  for (var entry in i18n.dict[lang]) {
    html = html.replaceAll('{{'+entry+'}}', i18n.dict[lang][entry]);
  }  
  document.body.innerHTML = html;
}

i18n._ = _ = function(string, arr) {
  string = i18n.dict[lang][string];
  if (arr) {
    for (var i=0; i<arr.length; i++) {
      string = string.replace("%s", arr[i]);
    }
  }
  return string;
}
