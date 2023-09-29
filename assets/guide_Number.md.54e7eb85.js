import{_ as s,o as a,c as n,a as o}from"./app.f9412d2b.js";const m=JSON.parse('{"title":"Number","description":"","frontmatter":{},"headers":[{"level":2,"title":"thousandthTransfromer","slug":"thousandthtransfromer","link":"#thousandthtransfromer","children":[]},{"level":2,"title":"thousandthTransfromerByRegex","slug":"thousandthtransfromerbyregex","link":"#thousandthtransfromerbyregex","children":[]},{"level":2,"title":"numberToChinese","slug":"numbertochinese","link":"#numbertochinese","children":[]}],"relativePath":"guide/Number.md","lastUpdated":1695695452000}'),e={name:"guide/Number.md"},l=o(`<h1 id="number" tabindex="-1">Number <a class="header-anchor" href="#number" aria-hidden="true">#</a></h1><h2 id="thousandthtransfromer" tabindex="-1">thousandthTransfromer <a class="header-anchor" href="#thousandthtransfromer" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 数字千分位展示</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">thousandthTransfromer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> params </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">thousandthTransfromer</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">1234.23</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;1,234.23&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="thousandthtransfromerbyregex" tabindex="-1">thousandthTransfromerByRegex <a class="header-anchor" href="#thousandthtransfromerbyregex" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 通过正则实现数字千分位展示</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">thousandthTransfromerByRegex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> params </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">thousandthTransfromerByRegex</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">998656</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;998,656&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="numbertochinese" tabindex="-1">numberToChinese <a class="header-anchor" href="#numbertochinese" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 数字金额转化为大写人民币汉字</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">numberToChinese</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> params </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">numberToChinese</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">345.44998</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;叁佰肆拾伍元肆角肆分玖毫玖厘&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> params2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">numberToChinese</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">554443</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;伍拾伍万肆仟肆佰肆拾叁元整&#39;</span></span>
<span class="line"></span></code></pre></div>`,13),t=[l];function p(r,c,i,y,d,h){return a(),n("div",null,t)}const u=s(e,[["render",p]]);export{m as __pageData,u as default};
