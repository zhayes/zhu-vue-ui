(self.webpackChunkzhu_ui_doc=self.webpackChunkzhu_ui_doc||[]).push([[369],{7588:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-20058708",path:"/input.html",title:"Input",lang:"en-US",frontmatter:{title:"Input"},excerpt:"",headers:[{level:3,title:"props",slug:"props",children:[]}],filePathRelative:"input.md",git:{}}},2865:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="input"><a class="header-anchor" href="#input">#</a> Input</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zhu-vue-ui&#39;</span><span class="token punctuation">;</span>\n    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;Input&quot;</span><span class="token punctuation">,</span> Input<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>支持双向数据绑定</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">@model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n        <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                    inputValue<span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="props"><a class="header-anchor" href="#props">#</a> props</h3><table><thead><tr><th>props</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>readonly</td><td>是否只读。</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否被禁用。</td><td>boolean</td><td>false</td></tr><tr><td>type</td><td>定义类型。可选值:text/password</td><td>string</td><td>text</td></tr><tr><td>lineType</td><td>定义边框线样式。可选值:default/single_line(下划线输入框)</td><td>string</td><td>default</td></tr></tbody></table>',6),p={render:function(n,s){return t}}}}]);