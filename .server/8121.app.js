"use strict";
exports.id = 8121;
exports.ids = [8121];
exports.modules = {

/***/ 87439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-daf34316",
  "path": "/4.x/wework/external-contact.html",
  "title": "外部联系人管理",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取实例",
      "slug": "获取实例",
      "children": []
    },
    {
      "level": 2,
      "title": "基础接口",
      "slug": "基础接口",
      "children": [
        {
          "level": 3,
          "title": "获取配置了客户联系功能的成员列表",
          "slug": "获取配置了客户联系功能的成员列表",
          "children": []
        },
        {
          "level": 3,
          "title": "获取外部联系人列表",
          "slug": "获取外部联系人列表",
          "children": []
        },
        {
          "level": 3,
          "title": "获取外部联系人详情",
          "slug": "获取外部联系人详情",
          "children": []
        },
        {
          "level": 3,
          "title": "获取离职成员的客户列表",
          "slug": "获取离职成员的客户列表",
          "children": []
        },
        {
          "level": 3,
          "title": "离职成员的外部联系人再分配",
          "slug": "离职成员的外部联系人再分配",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "配置客户联系「联系我」方式",
      "slug": "配置客户联系「联系我」方式",
      "children": [
        {
          "level": 3,
          "title": "增加「联系我」方式",
          "slug": "增加「联系我」方式",
          "children": []
        },
        {
          "level": 3,
          "title": "获取「联系我」方式",
          "slug": "获取「联系我」方式",
          "children": []
        },
        {
          "level": 3,
          "title": "更新「联系我」方式",
          "slug": "更新「联系我」方式",
          "children": []
        },
        {
          "level": 3,
          "title": "删除「联系我」方式",
          "slug": "删除「联系我」方式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "消息管理",
      "slug": "消息管理",
      "children": [
        {
          "level": 3,
          "title": "添加企业群发消息模板",
          "slug": "添加企业群发消息模板",
          "children": []
        },
        {
          "level": 3,
          "title": "获取企业群发消息发送结果",
          "slug": "获取企业群发消息发送结果",
          "children": []
        },
        {
          "level": 3,
          "title": "发送新客户欢迎语",
          "slug": "发送新客户欢迎语",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "数据统计",
      "slug": "数据统计",
      "children": [
        {
          "level": 3,
          "title": "获取员工行为数据",
          "slug": "获取员工行为数据",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/wework/external-contact.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 87760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ external_contact_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/wework/external-contact.html.vue?vue&type=template&id=d72394da

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="外部联系人管理" tabindex="-1"><a class="header-anchor" href="#外部联系人管理" aria-hidden="true">#</a> 外部联系人管理</h1><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> 
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 基础接口</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact</span><span class="token punctuation">;</span>

<span class="token comment">// 「联系我」</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contact_way</span><span class="token punctuation">;</span>

<span class="token comment">// 消息管理</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact_message</span><span class="token punctuation">;</span>

<span class="token comment">// 数据统计</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact_statistics</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="基础接口" tabindex="-1"><a class="header-anchor" href="#基础接口" aria-hidden="true">#</a> 基础接口</h2><h3 id="获取配置了客户联系功能的成员列表" tabindex="-1"><a class="header-anchor" href="#获取配置了客户联系功能的成员列表" aria-hidden="true">#</a> 获取配置了客户联系功能的成员列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact</span><span class="token operator">-&gt;</span><span class="token function">getFollowUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取外部联系人列表" tabindex="-1"><a class="header-anchor" href="#获取外部联系人列表" aria-hidden="true">#</a> 获取外部联系人列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;zhangsan&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取外部联系人详情" tabindex="-1"><a class="header-anchor" href="#获取外部联系人详情" aria-hidden="true">#</a> 获取外部联系人详情</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$externalUserId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;woAJ2GCAAAXtWyujaWJHDDGi0mACH71w&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$externalUserId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取离职成员的客户列表" tabindex="-1"><a class="header-anchor" href="#获取离职成员的客户列表" aria-hidden="true">#</a> 获取离职成员的客户列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$pageId</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token variable">\$pageSize</span> <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact</span><span class="token operator">-&gt;</span><span class="token function">getUnassigned</span><span class="token punctuation">(</span><span class="token variable">\$pageId</span><span class="token punctuation">,</span> <span class="token variable">\$pageSize</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="离职成员的外部联系人再分配" tabindex="-1"><a class="header-anchor" href="#离职成员的外部联系人再分配" aria-hidden="true">#</a> 离职成员的外部联系人再分配</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$externalUserId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;woAJ2GCAAAXtWyujaWJHDDGi0mACH71w&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$handoverUserId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;zhangsan&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$takeoverUserId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;lisi&#39;</span><span class="token punctuation">;</span>
 
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact</span><span class="token operator">-&gt;</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token variable">\$externalUserId</span><span class="token punctuation">,</span> <span class="token variable">\$handoverUserId</span><span class="token punctuation">,</span> <span class="token variable">\$takeoverUserId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="配置客户联系「联系我」方式" tabindex="-1"><a class="header-anchor" href="#配置客户联系「联系我」方式" aria-hidden="true">#</a> 配置客户联系「联系我」方式</h2><blockquote><p>{warning} 注意：</p><ol><li>通过API添加的「联系我」不会在管理端进行展示。</li><li>每个企业可通过API最多配置10万个「联系我」。</li><li>截止 2019-06-21 官方文档没有提供获取所有「联系我」列表的接口，请开发者注意自行保管处理 configId，避免无法溯源。</li></ol></blockquote><h3 id="增加「联系我」方式" tabindex="-1"><a class="header-anchor" href="#增加「联系我」方式" aria-hidden="true">#</a> 增加「联系我」方式</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$type</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">\$scene</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token string single-quoted-string">&#39;style&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;remark&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;渠道客户&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;skip_verify&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;state&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;teststate&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;user&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;UserID1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserID2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserID3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contact_way</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$type</span><span class="token punctuation">,</span> <span class="token variable">\$scene</span><span class="token punctuation">,</span> <span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//   &quot;errcode&quot;: 0,</span>
<span class="token comment">//   &quot;errmsg&quot;: &quot;ok&quot;,</span>
<span class="token comment">//   &quot;config_id&quot;:&quot;42b34949e138eb6e027c123cba77fad7&quot;　　</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="获取「联系我」方式" tabindex="-1"><a class="header-anchor" href="#获取「联系我」方式" aria-hidden="true">#</a> 获取「联系我」方式</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$configId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;42b34949e138eb6e027c123cba77fad7&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contact_way</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$configId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="更新「联系我」方式" tabindex="-1"><a class="header-anchor" href="#更新「联系我」方式" aria-hidden="true">#</a> 更新「联系我」方式</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$configId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;42b34949e138eb6e027c123cba77fad7&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token string single-quoted-string">&#39;style&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;remark&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;渠道客户2&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;skip_verify&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;state&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;teststate2&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;user&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;UserID4&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserID5&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserID6&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contact_way</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$configId</span><span class="token punctuation">,</span> <span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="删除「联系我」方式" tabindex="-1"><a class="header-anchor" href="#删除「联系我」方式" aria-hidden="true">#</a> 删除「联系我」方式</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$configId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;42b34949e138eb6e027c123cba77fad7&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">contact_way</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$configId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="消息管理" tabindex="-1"><a class="header-anchor" href="#消息管理" aria-hidden="true">#</a> 消息管理</h2><h3 id="添加企业群发消息模板" tabindex="-1"><a class="header-anchor" href="#添加企业群发消息模板" aria-hidden="true">#</a> 添加企业群发消息模板</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$msg</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;external_userid&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;woAJ2GCAAAXtWyujaWJHDDGi0mACas1w&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;wmqfasd1e1927831291723123109r712&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;sender&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;text&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;content&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;文本消息内容&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;image&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;MEDIA_ID&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;link&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;消息标题&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;picurl&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://example.pic.com/path&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;消息描述&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://example.link.com/path&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;miniprogram&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;消息标题&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;pic_media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;MEDIA_ID&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;appid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx8bd80126147df384&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;page&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/index&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact_message</span><span class="token operator">-&gt;</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token variable">\$msg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//     &quot;errcode&quot;: 0,</span>
<span class="token comment">//     &quot;errmsg&quot;: &quot;ok&quot;,</span>
<span class="token comment">//     &quot;fail_list&quot;:[&quot;wmqfasd1e19278asdasdasd&quot;],</span>
<span class="token comment">//     &quot;msgid&quot;:&quot;msgGCAAAXtWyujaWJHDDGi0mACas1w&quot;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="获取企业群发消息发送结果" tabindex="-1"><a class="header-anchor" href="#获取企业群发消息发送结果" aria-hidden="true">#</a> 获取企业群发消息发送结果</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$msgId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;msgGCAAAXtWyujaWJHDDGi0mACas1w&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact_message</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$msgId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="发送新客户欢迎语" tabindex="-1"><a class="header-anchor" href="#发送新客户欢迎语" aria-hidden="true">#</a> 发送新客户欢迎语</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$welcomeCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;WELCOMECODE&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$msg</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;text&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;content&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;文本消息内容&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;image&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;MEDIA_ID&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;link&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;消息标题&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;picurl&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://example.pic.com/path&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;desc&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;消息描述&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://example.link.com/path&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;miniprogram&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;消息标题&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;pic_media_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;MEDIA_ID&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;appid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;wx8bd80126147df384&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;page&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/index&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact_message</span><span class="token operator">-&gt;</span><span class="token function">sendWelcome</span><span class="token punctuation">(</span><span class="token variable">\$welcomeCode</span><span class="token punctuation">,</span> <span class="token variable">\$msg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="数据统计" tabindex="-1"><a class="header-anchor" href="#数据统计" aria-hidden="true">#</a> 数据统计</h2><h3 id="获取员工行为数据" tabindex="-1"><a class="header-anchor" href="#获取员工行为数据" aria-hidden="true">#</a> 获取员工行为数据</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userIds</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;lisi&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$from</span> <span class="token operator">=</span> <span class="token number">1536508800</span><span class="token punctuation">;</span>
<span class="token variable">\$to</span> <span class="token operator">=</span> <span class="token number">1536940800</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">external_contact_statistics</span><span class="token operator">-&gt;</span><span class="token function">userBehavior</span><span class="token punctuation">(</span><span class="token variable">\$userIds</span><span class="token punctuation">,</span> <span class="token variable">\$from</span><span class="token punctuation">,</span> <span class="token variable">\$to</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/wework/external-contact.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/wework/external-contact.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const external_contact_html = (script);

/***/ })

};
;
//# sourceMappingURL=8121.app.js.map