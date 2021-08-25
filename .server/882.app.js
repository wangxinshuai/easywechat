"use strict";
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 40535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-580fd334",
  "path": "/4.x/payment/security.html",
  "title": "安全与风控",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取 RSA 公钥",
      "slug": "获取-rsa-公钥",
      "children": []
    }
  ],
  "filePathRelative": "4.x/payment/security.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 64614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ security_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/payment/security.html.vue?vue&type=template&id=3be731e8

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="安全与风控" tabindex="-1"><a class="header-anchor" href="#安全与风控" aria-hidden="true">#</a> 安全与风控</h1><blockquote><p>{info} EasyWeChat 4.0.7+</p></blockquote><h2 id="获取-rsa-公钥" tabindex="-1"><a class="header-anchor" href="#获取-rsa-公钥" aria-hidden="true">#</a> 获取 RSA 公钥</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">security</span><span class="token operator">-&gt;</span><span class="token function">getPublicKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 存成文件</span>

<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./public.pem&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>将会得到 PKCS#1 格式密钥：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEArT82k67xybiJS9AD8nNAeuDYdrtCRaxkS6cgs8L9h83eqlDTlrdw
zBVSv5V4imTq/URbXn4K0V/KJ1TwDrqOI8hamGB0fvU13WW1NcJuv41RnJVua0QA
lS3tS1JzOZpMS9BEGeFvyFF/epbi/m9+2kUWG94FccArNnBtBqqvFncXgQsm98JB
3a62NbS1ePP/hMI7Kkz+JNMyYsWkrOUFDCXAbSZkWBJekY4nGZtK1erqGRve8Jbx
TWirAm/s08rUrjOuZFA21/EI2nea3DidJMTVnXVPY2qcAjF+595shwUKyTjKB8v1
REPB3hPF1Z75O6LwuLfyPiCrCTmVoyfqjwIDAQAB
-----END RSA PUBLIC KEY-----
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>使用 OpenSSL 转换 PKCS#1 为 PKCS#8 格式密钥：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl rsa -RSAPublicKey_in -in public.pem -out public.pem
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>PKCS#8 格式密钥：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArT82k67xybiJS9AD8nNA
euDYdrtCRaxkS6cgs8L9h83eqlDTlrdwzBVSv5V4imTq/URbXn4K0V/KJ1TwDrqO
I8hamGB0fvU13WW1NcJuv41RnJVua0QAlS3tS1JzOZpMS9BEGeFvyFF/epbi/m9+
lkUWG94FccArNnBtBqqvFncXgQsm98JB3a42NbS1ePP/hMI7Kkz+JNMyYsWkrOUF
DCXAbSZkWBJekY4nGZtK1erqGRve8JbxTWirAm/s08rUrjOuZFA21/EI2nea3Did
JMTVnXVPY2qcAjF+595shwUKyTjKB8v1REPB3hPF1Z75O6LwuLfyPiCrCTmVoyfq
jwIDAQAB
-----END PUBLIC KEY-----
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/payment/security.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/payment/security.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const security_html = (script);

/***/ })

};
;
//# sourceMappingURL=882.app.js.map