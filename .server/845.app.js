"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 24002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4d2b10b2",
  "path": "/5.x/open-work/server.html",
  "title": "服务端",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "企业微信第三方回调协议",
      "slug": "企业微信第三方回调协议",
      "children": []
    }
  ],
  "filePathRelative": "5.x/open-work/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 5033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ server_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/open-work/server.html.vue?vue&type=template&id=722d4371

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h1><h2 id="企业微信第三方回调协议" tabindex="-1"><a class="header-anchor" href="#企业微信第三方回调协议" aria-hidden="true">#</a> 企业微信第三方回调协议</h2><p>SDK 默认会处理事件 <code>suite_ticket</code> ，并会缓存 <code>suite_ticket</code></p><blockquote><p>{info} 需要注意的是：授权成功、变更授权、取消授权通知时间的响应必须在1000ms内完成，以保证用户安装应用的体验。建议在接收到此事件时 立即回应企业微信，之后再做相关业务的处理。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//指令回调</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;InfoType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;InfoType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//推送suite_ticket</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;suite_ticket&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token comment">//授权成功通知</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;create_auth&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token comment">//变更授权通知</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;cancel_auth&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token comment">//通讯录事件通知</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;change_contact&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ChangeType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;create_user&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;新增成员事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;update_user&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;更新成员事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;delete_user&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;删除成员事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;create_party&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;新增部门事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;update_party&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;更新部门事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;delete_party&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;删除部门事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;update_tag&#39;</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;标签成员变更事件&#39;</span><span class="token punctuation">;</span>
                        <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;fail&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//数据回调</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;MsgType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;MsgType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;event&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;事件消息&#39;</span><span class="token punctuation">;</span><span class="token comment">//详情 https://work.weixin.qq.com/api/doc/90001/90143/90376#%E5%88%A0%E9%99%A4%E6%88%90%E5%91%98%E4%BA%8B%E4%BB%B6</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;文本消息&#39;</span><span class="token punctuation">;</span><span class="token comment">//详情 https://work.weixin.qq.com/api/doc/90001/90143/90375#%E5%9B%BE%E7%89%87%E6%B6%88%E6%81%AF</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;图片消息&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token comment">//等等...不再一一举例</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;其他消息&#39;</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/open-work/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/open-work/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=845.app.js.map