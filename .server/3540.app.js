"use strict";
exports.id = 3540;
exports.ids = [3540];
exports.modules = {

/***/ 18894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-75c5e160",
  "path": "/4.x/wework/contacts.html",
  "title": "通讯录",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "成员管理",
      "slug": "成员管理",
      "children": [
        {
          "level": 3,
          "title": "创建成员",
          "slug": "创建成员",
          "children": []
        },
        {
          "level": 3,
          "title": "读取成员",
          "slug": "读取成员",
          "children": []
        },
        {
          "level": 3,
          "title": "更新成员",
          "slug": "更新成员",
          "children": []
        },
        {
          "level": 3,
          "title": "删除成员",
          "slug": "删除成员",
          "children": []
        },
        {
          "level": 3,
          "title": "获取部门成员",
          "slug": "获取部门成员",
          "children": []
        },
        {
          "level": 3,
          "title": "获取部门成员详情",
          "slug": "获取部门成员详情",
          "children": []
        },
        {
          "level": 3,
          "title": "用户 ID 转为 openid",
          "slug": "用户-id-转为-openid",
          "children": []
        },
        {
          "level": 3,
          "title": "openid 转为用户 ID",
          "slug": "openid-转为用户-id",
          "children": []
        },
        {
          "level": 3,
          "title": "手机号转为用户 ID",
          "slug": "手机号转为用户-id",
          "children": []
        },
        {
          "level": 3,
          "title": "二次验证",
          "slug": "二次验证",
          "children": []
        },
        {
          "level": 3,
          "title": "邀请成员",
          "slug": "邀请成员",
          "children": []
        },
        {
          "level": 3,
          "title": "获取邀请二维码",
          "slug": "获取邀请二维码",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "部门管理",
      "slug": "部门管理",
      "children": [
        {
          "level": 3,
          "title": "创建部门",
          "slug": "创建部门",
          "children": []
        },
        {
          "level": 3,
          "title": "更新部门",
          "slug": "更新部门",
          "children": []
        },
        {
          "level": 3,
          "title": "删除部门",
          "slug": "删除部门",
          "children": []
        },
        {
          "level": 3,
          "title": "获取部门列表",
          "slug": "获取部门列表",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "标签管理",
      "slug": "标签管理",
      "children": [
        {
          "level": 3,
          "title": "创建标签",
          "slug": "创建标签",
          "children": []
        },
        {
          "level": 3,
          "title": "更新标签名字",
          "slug": "更新标签名字",
          "children": []
        },
        {
          "level": 3,
          "title": "删除标签",
          "slug": "删除标签",
          "children": []
        },
        {
          "level": 3,
          "title": "获取标签列表",
          "slug": "获取标签列表",
          "children": []
        },
        {
          "level": 3,
          "title": "获取标签成员(标签详情)",
          "slug": "获取标签成员-标签详情",
          "children": []
        },
        {
          "level": 3,
          "title": "增加标签成员",
          "slug": "增加标签成员",
          "children": []
        },
        {
          "level": 3,
          "title": "删除标签成员",
          "slug": "删除标签成员",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/wework/contacts.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 54466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contacts_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/wework/contacts.html.vue?vue&type=template&id=18f6402d

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="通讯录" tabindex="-1"><a class="header-anchor" href="#通讯录" aria-hidden="true">#</a> 通讯录</h1><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;corp_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 通讯录的 secret</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$contacts</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="成员管理" tabindex="-1"><a class="header-anchor" href="#成员管理" aria-hidden="true">#</a> 成员管理</h2><h3 id="创建成员" tabindex="-1"><a class="header-anchor" href="#创建成员" aria-hidden="true">#</a> 创建成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;userid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;overtrue&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;超哥&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;english_name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;overtrue&quot;</span>
    <span class="token string double-quoted-string">&quot;mobile&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;1818888888&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="读取成员" tabindex="-1"><a class="header-anchor" href="#读取成员" aria-hidden="true">#</a> 读取成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="更新成员" tabindex="-1"><a class="header-anchor" href="#更新成员" aria-hidden="true">#</a> 更新成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;isleader&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;position&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;PHP 酱油工程师&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="删除成员" tabindex="-1"><a class="header-anchor" href="#删除成员" aria-hidden="true">#</a> 删除成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者删除多个</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;wangwu&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取部门成员" tabindex="-1"><a class="header-anchor" href="#获取部门成员" aria-hidden="true">#</a> 获取部门成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">getDepartmentUsers</span><span class="token punctuation">(</span><span class="token variable">\$departmentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 递归获取子部门下面的成员</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">getDepartmentUsers</span><span class="token punctuation">(</span><span class="token variable">\$departmentId</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取部门成员详情" tabindex="-1"><a class="header-anchor" href="#获取部门成员详情" aria-hidden="true">#</a> 获取部门成员详情</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">getDetailedDepartmentUsers</span><span class="token punctuation">(</span><span class="token variable">\$departmentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 递归获取子部门下面的成员</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">getDetailedDepartmentUsers</span><span class="token punctuation">(</span><span class="token variable">\$departmentId</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="用户-id-转为-openid" tabindex="-1"><a class="header-anchor" href="#用户-id-转为-openid" aria-hidden="true">#</a> 用户 ID 转为 openid</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">userIdToOpenid</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者指定应用 ID</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">userIdToOpenid</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">,</span> <span class="token variable">\$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="openid-转为用户-id" tabindex="-1"><a class="header-anchor" href="#openid-转为用户-id" aria-hidden="true">#</a> openid 转为用户 ID</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">openidToUserId</span><span class="token punctuation">(</span><span class="token variable">\$openid</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="手机号转为用户-id" tabindex="-1"><a class="header-anchor" href="#手机号转为用户-id" aria-hidden="true">#</a> 手机号转为用户 ID</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">mobileToUserId</span><span class="token punctuation">(</span><span class="token variable">\$mobile</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="二次验证" tabindex="-1"><a class="header-anchor" href="#二次验证" aria-hidden="true">#</a> 二次验证</h3><p>企业在成员验证成功后，调用如下接口即可让成员加入成功</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="邀请成员" tabindex="-1"><a class="header-anchor" href="#邀请成员" aria-hidden="true">#</a> 邀请成员</h3><p>企业可通过接口批量邀请成员使用企业微信，邀请后将通过短信或邮件下发通知。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;user&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;UserID1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserID2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserID3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token comment">// 成员ID列表, 最多支持1000个</span>
    <span class="token string single-quoted-string">&#39;party&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PartyID1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;PartyID2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>            <span class="token comment">// 部门ID列表，最多支持100个</span>
    <span class="token string single-quoted-string">&#39;tag&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;TagID1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;TagID2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                  <span class="token comment">// 标签ID列表，最多支持100个</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">invite</span><span class="token punctuation">(</span><span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>user</code>, <code>party</code>, <code>tag</code> 三者不能同时为空</p></blockquote><h3 id="获取邀请二维码" tabindex="-1"><a class="header-anchor" href="#获取邀请二维码" aria-hidden="true">#</a> 获取邀请二维码</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$sizeType</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// qrcode尺寸类型，1: 171 x 171; 2: 399 x 399; 3: 741 x 741; 4: 2052 x 2052</span>

<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">getInvitationQrCode</span><span class="token punctuation">(</span><span class="token variable">\$sizeType</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="部门管理" tabindex="-1"><a class="header-anchor" href="#部门管理" aria-hidden="true">#</a> 部门管理</h2><h3 id="创建部门" tabindex="-1"><a class="header-anchor" href="#创建部门" aria-hidden="true">#</a> 创建部门</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">department</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;广州研发中心&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;parentid&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="更新部门" tabindex="-1"><a class="header-anchor" href="#更新部门" aria-hidden="true">#</a> 更新部门</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">department</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;广州研发中心&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;parentid&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="删除部门" tabindex="-1"><a class="header-anchor" href="#删除部门" aria-hidden="true">#</a> 删除部门</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">department</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取部门列表" tabindex="-1"><a class="header-anchor" href="#获取部门列表" aria-hidden="true">#</a> 获取部门列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">department</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取指定部门及其下的子部门</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">department</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="标签管理" tabindex="-1"><a class="header-anchor" href="#标签管理" aria-hidden="true">#</a> 标签管理</h2><h3 id="创建标签" tabindex="-1"><a class="header-anchor" href="#创建标签" aria-hidden="true">#</a> 创建标签</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$tagName</span><span class="token punctuation">,</span> <span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="更新标签名字" tabindex="-1"><a class="header-anchor" href="#更新标签名字" aria-hidden="true">#</a> 更新标签名字</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token variable">\$tagName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除标签" tabindex="-1"><a class="header-anchor" href="#删除标签" aria-hidden="true">#</a> 删除标签</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取标签列表" tabindex="-1"><a class="header-anchor" href="#获取标签列表" aria-hidden="true">#</a> 获取标签列表</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取标签成员-标签详情" tabindex="-1"><a class="header-anchor" href="#获取标签成员-标签详情" aria-hidden="true">#</a> 获取标签成员(标签详情)</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="增加标签成员" tabindex="-1"><a class="header-anchor" href="#增加标签成员" aria-hidden="true">#</a> 增加标签成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">tagUsers</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$userId1</span><span class="token punctuation">,</span> <span class="token variable">\$userId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定部门</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">tagDepartments</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$departmentId1</span><span class="token punctuation">,</span> <span class="token variable">\$departmentId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="删除标签成员" tabindex="-1"><a class="header-anchor" href="#删除标签成员" aria-hidden="true">#</a> 删除标签成员</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">untagUsers</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$userId1</span><span class="token punctuation">,</span> <span class="token variable">\$userId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定部门</span>
<span class="token variable">\$contacts</span><span class="token operator">-&gt;</span><span class="token property">tag</span><span class="token operator">-&gt;</span><span class="token function">untagDepartments</span><span class="token punctuation">(</span><span class="token variable">\$tagId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">\$departmentId1</span><span class="token punctuation">,</span> <span class="token variable">\$departmentId2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/wework/contacts.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/wework/contacts.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const contacts_html = (script);

/***/ })

};
;
//# sourceMappingURL=3540.app.js.map