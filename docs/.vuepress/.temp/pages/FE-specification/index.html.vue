<template><div><h1 id="前端开发环境搭建" tabindex="-1"><a class="header-anchor" href="#前端开发环境搭建"><span>前端开发环境搭建</span></a></h1>
<blockquote>
<p>仅适用于 macOS</p>
</blockquote>
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建"><span>环境搭建</span></a></h2>
<p>前端环境最小配置要求</p>
<ul>
<li>Node.js ≥ 14.17.0</li>
<li>包管理工具：<a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a></li>
</ul>
<h3 id="ohmyzsh-配置" tabindex="-1"><a class="header-anchor" href="#ohmyzsh-配置"><span>ohmyzsh 配置</span></a></h3>
<p>macOS 10.15 及以后的版本默认为 <code v-pre>zsh</code></p>
<p>安装 ohmyzsh（因网络环境问题问题，可能需要搭配科学上网）：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装之后：</p>
<p><img src="@source/FE-specification/images/oh_my_zsh.png" alt="oh_my_zsh"></p>
<p>配置了 ohmyzsh 之后，很多都清晰可见，例如：当前项目 repo 的状态信息。</p>
<p>除此之外，可以添加一些插件，满足个性化配置。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git <span class="token function">history</span> vscode xcode autojump tig git-open zsh-autosuggestions zsh-syntax-highlighting<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew"><span>Homebrew</span></a></h3>
<p>Homebrew 是 macOS 上不可或缺的套件管理器。拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况。</p>
<p>将以下命令粘贴到终端：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>对于使用 Apple Silicon Mac 需要额外在 <code v-pre>～/.zshrc</code> 添加配置：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/homebrew/bin:<span class="token environment constant">$PATH</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Homebrew 安装的插件推荐如下：</p>
<ul>
<li>
<p><a href="https://github.com/wting/autojump" target="_blank" rel="noopener noreferrer">autojump</a>，目录间快速跳转</p>
</li>
<li>
<p><a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank" rel="noopener noreferrer">zsh-autosuggestions</a>，命令提示</p>
</li>
<li>
<p><a href="https://github.com/zsh-users/zsh-syntax-highlighting" target="_blank" rel="noopener noreferrer">zsh-syntax-highlighting</a>，命令高亮</p>
</li>
<li>
<p><a href="https://github.com/sharkdp/bat" target="_blank" rel="noopener noreferrer">bat</a>，更好的 cat，可以配置 <code v-pre>alias cat=&quot;bat&quot;</code></p>
</li>
<li>
<p><a href="https://github.com/stedolan/jq" target="_blank" rel="noopener noreferrer">jq</a>，JSON 处理器，配合 <code v-pre>pbcopy</code> &amp; <code v-pre>pbpaste</code> 使用</p>
</li>
<li>
<p><a href="https://github.com/nvbn/thefuck" target="_blank" rel="noopener noreferrer">thefuck</a>，纠正控制台中错误的命令</p>
</li>
<li>
<p><a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>，包管理工具</p>
</li>
<li>
<p><a href="https://github.com/jonas/tig" target="_blank" rel="noopener noreferrer">tig</a>，命令交互式浏览 Git 日志</p>
</li>
<li>
<p><a href="https://github.com/paulirish/git-open" target="_blank" rel="noopener noreferrer">git-open</a>，在浏览器打开当前项目的远程仓库地址</p>
</li>
</ul>
<h3 id="node-js-lts-≥-14-17-0" tabindex="-1"><a class="header-anchor" href="#node-js-lts-≥-14-17-0"><span>Node.js(LTS &amp;&amp; ≥ 14.17.0)</span></a></h3>
<p>Node.js 因为多版本问题，推荐使用 <code v-pre>nvm</code> 进行管理。</p>
<p>将以下命令粘贴到终端：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">curl</span> https://raw.githubusercontent.com/creationix/nvm/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打开 <code v-pre>～/.zshrc</code> 添加下列代码片段（对于 macOS Catalina 10.15.6 版本下使用 <code v-pre>~/.bash_profile</code>）：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">"<span class="token environment constant">$HOME</span>/.nvm"</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable">$NVM_DIR</span>/nvm.sh"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>. <span class="token string">"<span class="token variable">$NVM_DIR</span>/nvm.sh"</span>  <span class="token comment"># This loads nvm</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable">$NVM_DIR</span>/bash_completion"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>. <span class="token string">"<span class="token variable">$NVM_DIR</span>/bash_completion"</span>  <span class="token comment"># This loads nvm bash_completion</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/FE-specification/images/node_version.png" alt="node_version"></p>
<p>添加完之后执行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token builtin class-name">source</span> ~/.zshrc</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>接下来安装 Node.js</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 先查看最新的 Node.js 14（fermium） LTS 版本</span></span>
<span class="line">nvm ls-remote <span class="token parameter variable">--lts</span></span>
<span class="line"></span>
<span class="line">nvm <span class="token function">install</span> v16.13.0</span>
<span class="line">nvm use v16.13.0</span>
<span class="line">nvm <span class="token builtin class-name">alias</span> default v16.13.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 也可直接使用 stable</span></span>
<span class="line">nvm <span class="token function">install</span> stable</span>
<span class="line">nvm <span class="token builtin class-name">alias</span> default stable</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端包管理工具-pnpm" tabindex="-1"><a class="header-anchor" href="#前端包管理工具-pnpm"><span>前端包管理工具：pnpm</span></a></h3>
<p><a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a> 是目前前端最佳包管理工具（不推荐使用 npm、yarn）。</p>
<p>安装即可：（使用方式同 npm or yarn，详细请见：<a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">https://pnpm.io/</a>）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line">brew <span class="token function">install</span> <span class="token function">pnpm</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 升级</span></span>
<span class="line">brew upgrade <span class="token function">pnpm</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发工具及其配置" tabindex="-1"><a class="header-anchor" href="#开发工具及其配置"><span>开发工具及其配置</span></a></h2>
<h3 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code"><span>Visual Studio Code</span></a></h3>
<p>前端开发工具推荐使用 Visual Studio Code（简称 vscode）</p>
<p>通用拓展推荐：</p>
<ul>
<li>Bracket Pair Colorizer 2：用颜色标识匹配的括号</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=algorizen.javascript-snippets" target="_blank" rel="noopener noreferrer">Javascript Snippets</a>：JavaScript 代码片段补全</li>
<li>DotENV：支持 .env 文件</li>
<li>ESLint：代码规范 ESLint</li>
<li>EditorConfig for VS Code</li>
<li>Prettier - Code formatter：代码格式化</li>
<li>GitLens：查看 Git 信息</li>
<li>Visual Studio IntelliCode：代码补全</li>
<li>CSS Peek</li>
<li>Vetur：适用于 Vue 2 开发</li>
<li>Vue Language Features (Volar)：适用于 Vue 3 开发</li>
</ul>
<h3 id="iterm2" tabindex="-1"><a class="header-anchor" href="#iterm2"><span>iTerm2</span></a></h3>
<p>终端工具推荐 <a href="https://iterm2.com/" target="_blank" rel="noopener noreferrer">iTerm2</a></p>
<h1 id="git-规范" tabindex="-1"><a class="header-anchor" href="#git-规范"><span>Git 规范<Badge text="WIP" /></span></a></h1>
<h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理"><span>Git 分支管理</span></a></h2>
<p><img src="@source/FE-specification/images/git_branch.png" alt="Git%20%E8%A7%84%E8%8C%83%20df98d5cbced54a18afa51e0b54c1901a/git.png"></p>
<h3 id="git-规范-1" tabindex="-1"><a class="header-anchor" href="#git-规范-1"><span>Git 规范</span></a></h3>
<p><strong>1. 分支规范</strong></p>
<p>我们遵循 <code v-pre>主干（master）集成、release上线分支、feat需求分支、dev开发分支</code>。</p>
<ul>
<li>使用 <code v-pre>master</code> 作为稳定主分支。唯一性，不允许其他类似命名。</li>
<li>使用 <code v-pre>release</code> 作为上线分支。唯一性，不允许其他类似命名。</li>
<li>使用 <code v-pre>hotfix</code> 作为紧急Bug修复分支。</li>
<li>使用 <code v-pre>feat</code> 而非 <code v-pre>feature</code>。</li>
<li>使用 <code v-pre>dev</code> 而非 <code v-pre>development</code>、<code v-pre>develop</code> 等。</li>
<li>分支连接符使用 `` 而非 <code v-pre>_</code>， <code v-pre>.</code>等。例如：使用 <code v-pre>feat-</code> 而非 <code v-pre>feat_</code>。（因为分支名在非生产环境构建会被当作访问域名的一部分，不符合 <a href="https://datatracker.ietf.org/doc/html/rfc3986" target="_blank" rel="noopener noreferrer">RFC 3986</a> 规范）</li>
<li>分支全部采用小写。</li>
</ul>
<p><strong>2. 命名规范</strong></p>
<p>命名规则：<strong>[类型]-([描述]｜[需求地址])-[开发者]</strong></p>
<ol>
<li><strong>类型</strong>：<code v-pre>feat</code>、<code v-pre>dev</code>、<code v-pre>hotfix</code>等</li>
<li><strong>开发者</strong>：开发者姓名简拼，若有冲突可后缀添加工号。</li>
<li><strong>描述</strong>：简要描述开发任务，使用英文字母/数字/连接符，禁止中文。</li>
<li><strong>需求地址</strong>：可根据情况命名
<ul>
<li>有 JIRA 地址的使用 [JIRA_ID]，例如：<code v-pre>hotfix-fe-14</code>、<code v-pre>feat-fe-14</code></li>
<li>有根据线上 Tag 版本的使用 [TAG_ID]，把<code v-pre>.</code>替换为``，例如：<code v-pre>hotfix-v1-2-3</code></li>
<li>对于 dev 开发分支，例如：<code v-pre>dev-feat-fe-14-hcy</code></li>
</ul>
</li>
</ol>
<p><strong>3. Tag 规范</strong></p>
<p>Tag 需遵循 <a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">语义化版本 semver</a> 规范</p>
<p>命名规则：<strong>[类型][release版本]-[stages版本]</strong></p>
<p>例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">v3<span class="token punctuation">.</span><span class="token number">0.1</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>rc<span class="token punctuation">.</span><span class="token number">3</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>rc<span class="token punctuation">.</span><span class="token number">2</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>rc<span class="token punctuation">.</span><span class="token number">1</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">2.0</span><span class="token operator">-</span>beta<span class="token punctuation">.</span><span class="token number">3</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">2.0</span><span class="token operator">-</span>beta<span class="token punctuation">.</span><span class="token number">2</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>beta<span class="token punctuation">.</span><span class="token number">1</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>alpha<span class="token punctuation">.</span><span class="token number">2</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>alpha<span class="token punctuation">.</span><span class="token number">1</span></span>
<span class="line">v3<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token operator">-</span>alpha<span class="token punctuation">.</span><span class="token number">0</span></span>
<span class="line">v2<span class="token punctuation">.</span><span class="token number">7.8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="代码注释规范" tabindex="-1"><a class="header-anchor" href="#代码注释规范"><span>代码注释规范</span></a></h1>
<p>代码写出来是给人看的，附带能在机器上运行。既然是写给人看的，有两个方面比较重要。</p>
<ol>
<li>代码写的好。好的代码依赖 coder 的功底，想要写出好的代码，需要多修炼内功。</li>
<li>注释写的好。就像我们上学的时候看文言文，字基本都认识，但是连在一起就是不知道什么意思。这个时候就依赖于注释了，注释能把文言文中难懂的词汇翻译成白话。代码注释也是一样的道理，用来解释代码的意义。</li>
</ol>
<p>哪如何写好注释呢？</p>
<h2 id="注释目的" tabindex="-1"><a class="header-anchor" href="#注释目的"><span>注释目的</span></a></h2>
<ol>
<li>提高代码的可读性和可维护性</li>
<li>提高代码编写效率和准确性，从而最终提高代码质量。</li>
<li>快速导出接口文档</li>
</ol>
<h2 id="注释原则" tabindex="-1"><a class="header-anchor" href="#注释原则"><span>注释原则</span></a></h2>
<p>一个原则「<strong>As short as possible, As long as necessary</strong>」。</p>
<ul>
<li>如无必要，勿增注释 ( As short as possible )</li>
<li>如有必要，尽量详尽 ( As long as necessary )</li>
</ul>
<p>「<strong>如无必要，勿增注释</strong>」是指注释能不写就不写，不要为了注释而注释。多余的注释等价于冗余的代码，除了不能增加可读性，一旦代码需要修改，修改注释也会是一大负担。</p>
<p>我们应当追求「<strong>代码自注释</strong>」，即代码本身就拥有较高的可读性（通过清晰的命名、合理的结构等）。举个例子：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token comment">// 如果已经准备好数据，就渲染表格</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">renderTable</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">const</span> isTableDataReady <span class="token operator">=</span> data<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">isTableDataReady <span class="token operator">&amp;&amp;</span> <span class="token function">renderTable</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>「<strong>如有必要，尽量详尽</strong>」是指需要注释的地方应该尽量详尽地去写，让阅读者可以更好的了解代码的逻辑和意图。</p>
<h2 id="注释规约" tabindex="-1"><a class="header-anchor" href="#注释规约"><span>注释规约</span></a></h2>
<h3 id="使用-作为单行注释" tabindex="-1"><a class="header-anchor" href="#使用-作为单行注释"><span>使用 <code v-pre>//</code> 作为单行注释</span></a></h3>
<p>注释尽可能写在被注释对象的上方，不要追加在某条语句的后面。</p>
<p>注释行的上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性。</p>
<p>注释内容和注释符之间需要有一个空格，以增加可读性。</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// is current tag</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token comment">//is current tag</span></span>
<span class="line"><span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token comment">// is current tag</span></span>
<span class="line"><span class="token keyword">const</span> active <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetching type...'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// set the default type to 'no type'</span></span>
<span class="line">  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">'no type'</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> type</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fetching type...'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// set the default type to 'no type'</span></span>
<span class="line">  <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_type <span class="token operator">||</span> <span class="token string">'no type'</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> type</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isPageLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//页面loading</span></span>
<span class="line">    <span class="token literal-property property">isPageNetError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// 网络错误</span></span>
<span class="line">    <span class="token literal-property property">isPageNoSupport</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//兜底页</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isPageLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 页面loading</span></span>
<span class="line">    <span class="token literal-property property">isPageNetError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 网络错误</span></span>
<span class="line">    <span class="token literal-property property">isPageNoSupport</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 兜底页</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-作为多行注释" tabindex="-1"><a class="header-anchor" href="#使用-作为多行注释"><span>使用 <code v-pre>/** ... */</code> 作为多行注释</span></a></h3>
<p>注释包含描述、指定所有参数和返回值的类型和值。</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token comment">// bad</span></span>
<span class="line"><span class="token comment">// make() 返回一个新元素</span></span>
<span class="line"><span class="token comment">// 根据传入的 tag 名称</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> element</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// good</span></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * make() 返回一个新元素</span>
<span class="line"> * 根据传入的 tag 名称</span>
<span class="line"> * </span>
<span class="line"> * @param {string} tag</span>
<span class="line"> * @return {element} element</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> element</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-comment-tag" tabindex="-1"><a class="header-anchor" href="#使用-comment-tag"><span>使用 Comment Tag</span></a></h2>
<p>给注释增加 <code v-pre>FIXME</code>，<code v-pre>TODO</code> 等 Tag 前缀可以帮助其它开发者快速了解这是一个需要注意的问题。</p>
<p>常用的特殊标记如下：</p>
<ul>
<li><strong>BUG</strong> - 应该修复的bug</li>
<li><strong>FIXME</strong> - 应该更正</li>
<li><strong>HACK</strong> - 解决方法</li>
<li><strong>TODO</strong> - 需要做的事</li>
<li><strong>UNDONE</strong> - 撤销或回滚之前的代码</li>
<li><strong>XXX</strong> - 警告其他程序员有问题或错误引导的代码</li>
</ul>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token comment">// FIXME</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">errorCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="档类注释-如函数、类、文件、事件等-使用-jsdoc-规范" tabindex="-1"><a class="header-anchor" href="#档类注释-如函数、类、文件、事件等-使用-jsdoc-规范"><span>档类注释，如函数、类、文件、事件等，使用 JSDoc 规范</span></a></h3>
<p><a href="https://en.wikipedia.org/wiki/JSDoc" target="_blank" rel="noopener noreferrer">JSDoc 规范</a></p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token comment">/**</span>
<span class="line"> * 接口 - 获取榜单页面数据</span>
<span class="line"> * </span>
<span class="line"> * 请求数据接口param参数</span>
<span class="line"> * @param {string} rankType 榜单类型</span>
<span class="line"> * @param {number} rankDataId 榜单ID</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token function">getBrandRankInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h2>
<ul>
<li>Better Comments：更人性化的注释</li>
</ul>
<p>Better Comments 是一款开发插件，可以帮助开发者在代码中创建更人性化的注释。</p>
<h1 id="code-review" tabindex="-1"><a class="header-anchor" href="#code-review"><span>Code Review</span></a></h1>
<p>Code Review 不仅仅保证代码质量，更重要的是通过代码交流学习各自的<strong>代码设计</strong>、<strong>系统设计</strong></p>
<h2 id="工具与角色" tabindex="-1"><a class="header-anchor" href="#工具与角色"><span>工具与角色</span></a></h2>
<p>Code Review 所依赖的工具是 <strong>GitLab</strong>。</p>
<p>整个 Code Review 流程在 GitLab 项目中有两个点比较关键：</p>
<ul>
<li><code v-pre>Merge Request</code>（简称：<em><strong>MR</strong></em>）</li>
<li><code v-pre>Discussion</code>（简称：<em><strong>Diss</strong></em>）</li>
</ul>
<p>同时需要针对 GitLab 的项目进行配置：</p>
<ul>
<li>GitLab 和 钉钉 打通，每次有 MR 时会推送到钉钉</li>
<li>项目进行配置合并检查，所有的 Diss 都必须解决才能合并（Settings - General - Merge requests - Merge checks - All discussions must be resolved）</li>
</ul>
<p>在 Code Review 过程中几个角色：</p>
<ul>
<li><em><strong>Owner</strong></em>（MR 发起者，需求负责人，代码改动提交者）</li>
<li><em><strong>Reviewers</strong></em>（负责 Review 代码，MR 参与者，前端团队的同事，可能不止一个人）</li>
<li><em><strong>Disser</strong></em>（某个 Reviewer，对某个 MR 发起 Discussion 的人）</li>
</ul>
<h2 id="原则" tabindex="-1"><a class="header-anchor" href="#原则"><span>原则</span></a></h2>
<ol>
<li>Owner 发起 MR 之前的代码需要进行充分自测</li>
<li>如果版本改动较大，应提前在测试介入时就进行 Code Review（可通过 Repository - Compare）</li>
<li>尽快响应 Code Review 请求，不阻塞他人的工作</li>
<li>如果某个 MR 紧急，可以告知 Reviewers</li>
<li>除有必要，Owner 不要在测试、验收阶段删除分支，应等待分支合入 Master 分支后移除</li>
<li>定期回顾和总结 Code Review 执行情况</li>
</ol>
<h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h2>
<ol>
<li>Owner 在本地某分支开发完成，充分自测之后将代码推送到 GitLab。</li>
<li>在 GitLab 发起 MR 之前，需保证当前分支代码已合并远端 Master 分支最新的代码<strong><strong>无冲突</strong></strong>并做 <strong><strong>git rebase</strong></strong>。</li>
<li>Owner 成功发起 MR 后，会自动通过钉钉告知到群里，告知 Reviewers 有 MR 需要进行 Code Review，Owner 可告知 Reviewers 紧急程度。</li>
<li>Reviewers 基于 MR 进行进行 Code Review。如果对 MR 有任何问题，在 GitLab 上针对具体代码进行发起 Discussion，Review 完成后通知 Owner 结果（本次 MR 通过 / 本次 MR 有多少个 Diss）。如果有 Diss，Owner 需要对每一个 Diss 进行回复，直至所有 Diss 的状态变更为 Resolved。</li>
<li>Reviewers 对 MR 进行 Merge 操作，Owner 在测试环境发布代码，通知相关 QA 同学回归测试。</li>
<li>如果测试或者验收环节发现问题，Owner 需要对代码进行修改，然后发起新一轮的 MR，直至测试环境代码通过验收。</li>
<li>和 QA 同学确认代码可以发布至生产环境，并进行代码发布。</li>
</ol>
<h2 id="边界" tabindex="-1"><a class="header-anchor" href="#边界"><span>边界</span></a></h2>
<ol>
<li>线上出现紧急 bug 时（Hotfix 分支）可不进行 Code Review。</li>
<li>某个需求（项目）留给开发时间非常紧张时可不进行 Code Review，优先保证按时上线。</li>
<li>Code Review 后改动的影响面太大，可考虑暂不优化。</li>
</ol>
</div></template>


