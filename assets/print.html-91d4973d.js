import{_ as n,o as s,c as a,f as p}from"./app-2278246b.js";const t={},e=p(`<h1 id="树状结构数据" tabindex="-1"><a class="header-anchor" href="#树状结构数据" aria-hidden="true">#</a> 树状结构数据</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Service <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;egg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 根据menuId和parentId生成树形结构</span>
<span class="token keyword">function</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> parentId <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>parentId <span class="token operator">===</span> parentId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> item<span class="token punctuation">.</span>menuId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 如果没有子节点，赋值一个空数组</span>
      <span class="token punctuation">}</span>
      tree<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MenuSerice</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">getAllMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> app <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span>
      <span class="token string">&quot;SELECT menu_id as menuId, parent_id as parentId, name, path, component FROM menu&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 假如 我们拿到用户 id 从数据库获取用户详细信息</span>
    <span class="token keyword">return</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">updateMenu</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> app <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span>
      <span class="token string">&quot;UPDATE menu SET parent_id = ?, name = ?, path = ?,component= ? WHERE menu_id = ?&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span>
      params<span class="token punctuation">.</span>parentId<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>component<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>menuId<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">addMenu</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> app <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> sql <span class="token operator">=</span>
      <span class="token string">&quot;INSERT INTO menu (parent_id, name, path, component) VALUES (?, ?, ?, ?)&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">[</span>
      params<span class="token punctuation">.</span>parentId<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>component<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MenuSerice<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","print.html.vue"]]);export{k as default};
