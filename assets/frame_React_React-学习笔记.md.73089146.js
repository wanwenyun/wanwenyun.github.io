import{_ as e,o as a,c as t,a as s}from"./app.967f7d24.js";const h=JSON.parse('{"title":"了解 useCallback、useMemo、React.memo 的使用时机","description":"","frontmatter":{},"headers":[],"relativePath":"frame/React/React-学习笔记.md"}'),c={name:"frame/React/React-学习笔记.md"},o=s('<p>React 篇（建议可以从第四点的 reack-hooks 学习大全开始看）</p><h1 id="了解-usecallback、usememo、react-memo-的使用时机" tabindex="-1">了解 useCallback、useMemo、React.memo 的使用时机 <a class="header-anchor" href="#了解-usecallback、usememo、react-memo-的使用时机" aria-hidden="true">#</a></h1><blockquote><p>学习地址： <a href="https://juejin.cn/post/7010278471473594404%E3%80%81https://juejin.cn/post/6844904001998176263" target="_blank" rel="noreferrer">https://juejin.cn/post/7010278471473594404、https://juejin.cn/post/6844904001998176263</a></p></blockquote><h1 id="react-useref" tabindex="-1">React.useRef <a class="header-anchor" href="#react-useref" aria-hidden="true">#</a></h1><p><strong>基础用法：</strong><code>const valueRef = useRef(value);</code></p><p><strong>useRef 特性：</strong></p><ul><li><p>组件重新渲染（在组件的整个生命周期内），useRef 的引用仍<em>不会改变</em>；</p></li><li><p>useRef 的改变不会让组件重新渲染（render）；</p></li><li><p>useRef 能够获取到<code>dom</code>；</p></li></ul>',7),r=[o];function n(p,u,_,l,i,d){return a(),t("div",null,r)}const f=e(c,[["render",n]]);export{h as __pageData,f as default};
