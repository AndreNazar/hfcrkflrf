(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const o=["q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","`","~","Q","W","E","R","T","Y","U","I","O","P","{","}","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","#"],c=["й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","я","ч","с","м","и","т","ь","ё","Ё","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Я","Ч","С","М","И","Т","Ь","№"],d=(n,e)=>{const s=n[e-1];return e-1<0?"none":o.includes(s)?"en":c.includes(s)?"ru":d(n,e-1)},y=(n,e,s)=>{const u=d(n,s)=="ru",r=d(n,s)=="en";return o.includes(e)?c[o.indexOf(e)]:c.includes(e)?o[c.indexOf(e)]:e=="/"&&u?"|":e=="|"&&r?"/":e=='"'&&u?"@":e=="@"&&r?'"':e==";"&&u?"$":e=="$"&&r?";":e==":"&&u?"^":e=="^"&&r?":":e=="?"&&u?"&":e=="&"&&r||e==","&&u?"?":e=="?"&&r?",":e=="."&&u||e=="/"&&r?"/":e=="."&&r?"ю":e==">"&&r?"Ю":e==","&&r?"б":e=="<"&&r?"Б":e=="'"&&r?"э":e=='"'&&r?"Э":e==";"&&r?"ж":e==":"&&r?"Ж":e=="ю"?".":e=="Ю"?">":e=="б"?",":e=="Б"?"<":e=="э"?"'":e=="Э"?'"':e=="ж"?";":e=="Ж"?":":e},t=document.querySelector(".text_input"),f=document.querySelector(".text_output"),a=n=>Math.round(t.clientWidth/10)-t.value.length*n,g=()=>{let n=2;a(n)>=16?t.style.fontSize=f.style.fontSize=`${a(n)}px`:t.style.fontSize=f.style.fontSize="16px"},p=(n,e)=>{g(),e.value="";for(let s=0;s<n.value.length;s++)e.value+=y(n.value,n.value[s],s)};t.addEventListener("input",()=>p(t,f));f.addEventListener("input",()=>p(f,t));
