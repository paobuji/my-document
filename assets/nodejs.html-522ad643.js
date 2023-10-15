import{_ as e,o as a,c as n,f as s}from"./app-2278246b.js";const i={},d=s(`<h1 id="学习笔记" tabindex="-1"><a class="header-anchor" href="#学习笔记" aria-hidden="true">#</a> 学习笔记</h1><h2 id="每个js文件都自带两个属性值" tabindex="-1"><a class="header-anchor" href="#每个js文件都自带两个属性值" aria-hidden="true">#</a> 每个js文件都自带两个属性值</h2><ul><li><code>__filename</code> 文件名字 <code>__dirname</code> 文件路径</li></ul><h2 id="使用npm命令快速生成package-json文件" tabindex="-1"><a class="header-anchor" href="#使用npm命令快速生成package-json文件" aria-hidden="true">#</a> 使用npm命令快速生成package.json文件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm init <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fs-readfile-和-fs-writefile" tabindex="-1"><a class="header-anchor" href="#fs-readfile-和-fs-writefile" aria-hidden="true">#</a> fs.readFile 和 fs.writeFile</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token punctuation">[</span>encoding<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span> 是异步<span class="token constant">IO</span>操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="process-argv" tabindex="-1"><a class="header-anchor" href="#process-argv" aria-hidden="true">#</a> process.argv</h2><ul><li><code>process.argv</code> 是 <code>Node.js</code> 中的一个全局变量，它返回一个数组，包含了当前 <code>Node.js</code> 进程运行时的命令行参数。其中，第一个参数为 <code>Node.js</code> 可执行文件所在路径，第二个参数为被执行的 <code>JavaScript</code> 文件所在路径，后面的参数则是用户在命令行中传入的其他参数。</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function main(argv) {
    console.log(argv);
}

main(process.argv.slice(2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node读取文件列表" tabindex="-1"><a class="header-anchor" href="#node读取文件列表" aria-hidden="true">#</a> node读取文件列表</h2><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const fs = require(&quot;fs&quot;);
fs.readdir(process.argv[2], (err, files) =&gt; {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file =&gt; {
            if (file.endsWith(&quot;.&quot; + process.argv[3])) {
                console.log(file);
            }
        });
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[d];function r(l,o){return a(),n("div",null,c)}const u=e(i,[["render",r],["__file","nodejs.html.vue"]]);export{u as default};
