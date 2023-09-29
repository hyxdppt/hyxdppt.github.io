import{_ as s,o as a,c as l,a as n}from"./app.f9412d2b.js";const B=JSON.parse('{"title":"URL 操作","description":"","frontmatter":{},"headers":[{"level":2,"title":"parseUrl","slug":"parseurl","link":"#parseurl","children":[]},{"level":2,"title":"getKeyValue","slug":"getkeyvalue","link":"#getkeyvalue","children":[]},{"level":2,"title":"getKeyValueAll","slug":"getkeyvalueall","link":"#getkeyvalueall","children":[]},{"level":2,"title":"hasKey","slug":"haskey","link":"#haskey","children":[]},{"level":2,"title":"delParamsUrl","slug":"delparamsurl","link":"#delparamsurl","children":[]},{"level":2,"title":"params2Url","slug":"params2url","link":"#params2url","children":[]}],"relativePath":"guide/Url.md","lastUpdated":1695884087000}'),p={name:"guide/Url.md"},o=n(`<h1 id="url-操作" tabindex="-1">URL 操作 <a class="header-anchor" href="#url-操作" aria-hidden="true">#</a></h1><h2 id="parseurl" tabindex="-1">parseUrl <a class="header-anchor" href="#parseurl" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉解析 url,返回 url 参数</p><p>参数为操作 url</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">parseUrl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> params </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">parseUrl</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://10.126.124.130:7001/pm/CockpitNewAction.do?operation=projectSummary</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// { operation: &#39;projectSummary&#39; }</span></span>
<span class="line"></span></code></pre></div><h2 id="getkeyvalue" tabindex="-1">getKeyValue <a class="header-anchor" href="#getkeyvalue" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉返回第一个与搜索参数对应的值 string。返回对应的值 ；如果没找到，返回 null.</p><p>参数 1 为操作 url,参数 2 为需要查找的参数 key</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">getKeyValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getKeyValue</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://10.126.124.130:7001/pm/CockpitNewAction.do?operation=projectSummary&amp;name=xiaoming&amp;age=18&amp;id=[1,2,3,4]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;[1,2,3,4]&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="getkeyvalueall" tabindex="-1">getKeyValueAll <a class="header-anchor" href="#getkeyvalueall" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉以数组的形式返回与指定搜索参数对应的所有值 ；如果没找到，返回[].</p><p>参数 1 为操作 url,参数 2 为需要查找的参数 key</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">getKeyValueAll</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getKeyValueAll</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://10.126.124.130:7001/pm/CockpitNewAction.do?operation=projectSummary&amp;name=xiaoming&amp;age=18&amp;id=[1,2,3,4]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">operation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// { id: &#39;[1,2,3,4]&#39;, age: &#39;18&#39;, operation: &#39;projectSummary&#39; }</span></span>
<span class="line"></span></code></pre></div><h2 id="haskey" tabindex="-1">hasKey <a class="header-anchor" href="#haskey" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉查询 url 是否拥有某参数，有返回 true, 否则返回 false</p><p>参数 1 为操作 url,参数 2 为需要查找的参数 key</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">hasKey</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">hasKey</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://10.126.124.130:7001/pm/CockpitNewAction.do</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">score</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="delparamsurl" tabindex="-1">delParamsUrl <a class="header-anchor" href="#delparamsurl" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉删除 url 指定参数，返回 url</p><p>参数 1 为操作 url,参数 2 为需要删除的参数 key</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">delParamsUrl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">delParamsUrl</span><span style="color:#BABED8;">(</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://10.126.124.130:7001/pm/CockpitNewAction.do?score=99&amp;age=19</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">score</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;http://10.126.124.130:7001/pm/CockpitNewAction.do?age=19&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="params2url" tabindex="-1">params2Url <a class="header-anchor" href="#params2url" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉键值对拼接成 URL 参数</p><p>参数 1 为操作 url,参数 2 为需要凭借的键值对对象</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">params2Url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">params2Url</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://10.126.124.130:7001/pm/CockpitNewAction.do</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">score</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">99</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// &#39;http://10.126.124.130:7001/pm/CockpitNewAction.do?score=99&amp;age=19&#39;</span></span>
<span class="line"></span></code></pre></div>`,25),e=[o];function t(c,r,y,i,D,F){return a(),l("div",null,e)}const u=s(p,[["render",t]]);export{B as __pageData,u as default};
