"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2676],{33413:function(Fn,hn,f){var Ve=f(487462),N=f(204942),x=f(297685),V=f(912402),$=f(667294),gn=f(294184),Ae=f.n(gn),mn=f(821770),ie=f(915105),Oe=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],Q=$.forwardRef(function(n,yn){var oe,Re=n.prefixCls,F=Re===void 0?"rc-switch":Re,Cn=n.className,pn=n.checked,En=n.defaultChecked,z=n.disabled,Sn=n.loadingIcon,He=n.checkedChildren,Ce=n.unCheckedChildren,pe=n.onClick,Ee=n.onChange,ue=n.onKeyDown,kn=(0,V.Z)(n,Oe),bn=(0,mn.default)(!1,{value:pn,defaultValue:En}),We=(0,x.Z)(bn,2),X=We[0],_=We[1];function Se(K,ke){var U=X;return z||(U=K,_(U),Ee==null||Ee(U,ke)),U}function Dn(K){K.which===ie.Z.LEFT?Se(!1,K):K.which===ie.Z.RIGHT&&Se(!0,K),ue==null||ue(K)}function xn(K){var ke=Se(!X,K);pe==null||pe(ke,K)}var $e=Ae()(F,Cn,(oe={},(0,N.Z)(oe,"".concat(F,"-checked"),X),(0,N.Z)(oe,"".concat(F,"-disabled"),z),oe));return $.createElement("button",(0,Ve.Z)({},kn,{type:"button",role:"switch","aria-checked":X,disabled:z,className:$e,ref:yn,onKeyDown:Dn,onClick:xn}),Sn,$.createElement("span",{className:"".concat(F,"-inner")},$.createElement("span",{className:"".concat(F,"-inner-checked")},He),$.createElement("span",{className:"".concat(F,"-inner-unchecked")},Ce)))});Q.displayName="Switch",hn.Z=Q},79841:function(Fn,hn,f){f.d(hn,{Qw:function(){return In},FJ:function(){return Fe},hT:function(){return Tn},OF:function(){return z},ZP:function(){return zn}});var Ve=f(487462),N=f(974902),x=f(601413),V=f(297685),$=f(912402),gn=f(671002),Ae=f(388905),mn=f(88708),ie=f(517341),Oe=f(821770),Q=f(580334),n=f(667294),yn=function(e){var t=n.useRef({valueLabels:new Map});return n.useMemo(function(){var r=t.current.valueLabels,u=new Map,a=e.map(function(i){var l,o=i.value,c=(l=i.label)!==null&&l!==void 0?l:r.get(o);return u.set(o,c),(0,x.Z)((0,x.Z)({},i),{},{label:c})});return t.current.valueLabels=u,[a]},[e])},oe=function(e,t,r,u){return n.useMemo(function(){var a=e.map(function(c){var s=c.value;return s}),i=t.map(function(c){var s=c.value;return s}),l=a.filter(function(c){return!u[c]});if(r){var o=(0,ie.S)(a,!0,u);a=o.checkedKeys,i=o.halfCheckedKeys}return[Array.from(new Set([].concat((0,N.Z)(l),(0,N.Z)(a)))),i]},[e,t,r,u])},Re=f(501089),F=function(e,t){return n.useMemo(function(){var r=(0,Re.I8)(e,{fieldNames:t,initWrapper:function(a){return(0,x.Z)((0,x.Z)({},a),{},{valueEntities:new Map})},processEntity:function(a,i){var l=a.node[t.value];if(!1)var o;i.valueEntities.set(l,a)}});return r},[e,t])},Cn=f(204942),pn=f(850344),En=function(){return null},z=En,Sn=["children","value"];function He(e){return(0,pn.Z)(e).map(function(t){if(!n.isValidElement(t)||!t.type)return null;var r=t,u=r.key,a=r.props,i=a.children,l=a.value,o=(0,$.Z)(a,Sn),c=(0,x.Z)({key:u,value:l},o),s=He(i);return s.length&&(c.children=s),c}).filter(function(t){return t})}function Ce(e){if(!e)return e;var t=(0,x.Z)({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return(0,Q.ZP)(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function pe(e,t,r,u,a,i){var l=null,o=null;function c(){function s(h){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return h.map(function(S,Z){var P="".concat(M,"-").concat(Z),A=S[i.value],B=r.includes(A),q=s(S[i.children]||[],P,B),y=n.createElement(z,S,q.map(function(T){return T.node}));if(t===A&&(l=y),B){var O={pos:P,node:y,children:q};return I||o.push(O),O}return null}).filter(function(S){return S})}o||(o=[],s(u),o.sort(function(h,M){var I=h.node.props.value,S=M.node.props.value,Z=r.indexOf(I),P=r.indexOf(S);return Z-P}))}Object.defineProperty(e,"triggerNode",{get:function(){return(0,Q.ZP)(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),c(),l}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return(0,Q.ZP)(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),c(),a?o:o.map(function(h){var M=h.node;return M})}})}var Ee=function(e,t,r){var u=r.treeNodeFilterProp,a=r.filterTreeNode,i=r.fieldNames,l=i.children;return n.useMemo(function(){if(!t||a===!1)return e;var o;if(typeof a=="function")o=a;else{var c=t.toUpperCase();o=function(M,I){var S=I[u];return String(S).toUpperCase().includes(c)}}function s(h){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return h.reduce(function(I,S){var Z=S[l],P=M||o(t,Ce(S)),A=s(Z||[],P);return(P||A.length)&&I.push((0,x.Z)((0,x.Z)({},S),{},(0,Cn.Z)({isLeaf:void 0},l,A))),I},[])}return s(e)},[e,t,l,u,a])};function ue(e){var t=n.useRef();t.current=e;var r=n.useCallback(function(){return t.current.apply(t,arguments)},[]);return r}function kn(e,t){var r=t.id,u=t.pId,a=t.rootPId,i={},l=[],o=e.map(function(c){var s=(0,x.Z)({},c),h=s[r];return i[h]=s,s.key=s.key||h,s});return o.forEach(function(c){var s=c[u],h=i[s];h&&(h.children=h.children||[],h.children.push(c)),(s===a||!h&&a===null)&&l.push(c)}),l}function bn(e,t,r){return n.useMemo(function(){return e?r?kn(e,(0,x.Z)({id:"id",pId:"pId",rootPId:null},r!==!0?r:{})):e:He(t)},[t,r,e])}var We=n.createContext(null),X=We,_=f(915105),Se=f(456982),Dn=f(125530),xn=n.createContext(null),$e=xn;function K(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function ke(e){var t=e||{},r=t.label,u=t.value,a=t.children,i=u||"value";return{_title:r?[r]:["title","label"],value:i,key:i,children:a||"children"}}function U(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function _n(e,t){var r=[];function u(a){a.forEach(function(i){var l=i[t.children];l&&(r.push(i[t.value]),u(l))})}return u(e),r}function Pn(e){return e==null}var Un={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Bn=function(t,r){var u=(0,Ae.lk)(),a=u.prefixCls,i=u.multiple,l=u.searchValue,o=u.toggleOpen,c=u.open,s=u.notFoundContent,h=n.useContext($e),M=h.virtual,I=h.listHeight,S=h.listItemHeight,Z=h.treeData,P=h.fieldNames,A=h.onSelect,B=h.dropdownMatchSelectWidth,q=h.treeExpandAction,y=n.useContext(X),O=y.checkable,T=y.checkedKeys,j=y.halfCheckedKeys,De=y.treeExpandedKeys,_e=y.treeDefaultExpandAll,Ln=y.treeDefaultExpandedKeys,Ue=y.onTreeExpand,Kn=y.treeIcon,Be=y.showTreeIcon,je=y.switcherIcon,Ge=y.treeLine,Je=y.treeNodeFilterProp,Ye=y.loadData,xe=y.treeLoadedKeys,Qe=y.treeMotion,ze=y.onTreeLoad,Xe=y.keyEntities,ee=n.useRef(),Ie=(0,Se.Z)(function(){return Z},[c,Z],function(g,b){return b[0]&&g[1]!==b[1]}),qe=n.useMemo(function(){return O?{checked:T,halfChecked:j}:null},[O,T,j]);n.useEffect(function(){if(c&&!i&&T.length){var g;(g=ee.current)===null||g===void 0||g.scrollTo({key:T[0]})}},[c]);var Te=String(l).toLowerCase(),Le=function(b){return Te?String(b[Je]).toLowerCase().includes(Te):!1},en=n.useState(Ln),ce=(0,V.Z)(en,2),Ke=ce[0],nn=ce[1],tn=n.useState(null),Me=(0,V.Z)(tn,2),Pe=Me[0],rn=Me[1],an=n.useMemo(function(){return De?(0,N.Z)(De):l?Pe:Ke},[Ke,Pe,De,l]);n.useEffect(function(){l&&rn(_n(Z,P))},[l]);var de=function(b){nn(b),rn(b),Ue&&Ue(b)},ne=function(b){b.preventDefault()},se=function(b,re){var R=re.node;O&&U(R)||(A(R.key,{selected:!T.includes(R.key)}),i||o(!1))},W=n.useState(null),ln=(0,V.Z)(W,2),ve=ln[0],fe=ln[1],G=Xe[ve];if(n.useImperativeHandle(r,function(){var g;return{scrollTo:(g=ee.current)===null||g===void 0?void 0:g.scrollTo,onKeyDown:function(re){var R,on=re.which;switch(on){case _.Z.UP:case _.Z.DOWN:case _.Z.LEFT:case _.Z.RIGHT:(R=ee.current)===null||R===void 0||R.onKeyDown(re);break;case _.Z.ENTER:{if(G){var un=(G==null?void 0:G.node)||{},he=un.selectable,cn=un.value;he!==!1&&se(null,{node:{key:ve},selected:!T.includes(cn)})}break}case _.Z.ESC:o(!1)}},onKeyUp:function(){}}}),Ie.length===0)return n.createElement("div",{role:"listbox",className:"".concat(a,"-empty"),onMouseDown:ne},s);var te={fieldNames:P};return xe&&(te.loadedKeys=xe),an&&(te.expandedKeys=an),n.createElement("div",{onMouseDown:ne},G&&c&&n.createElement("span",{style:Un,"aria-live":"assertive"},G.node.value),n.createElement(Dn.Z,(0,Ve.Z)({ref:ee,focusable:!1,prefixCls:"".concat(a,"-tree"),treeData:Ie,height:I,itemHeight:S,virtual:M!==!1&&B!==!1,multiple:i,icon:Kn,showIcon:Be,switcherIcon:je,showLine:Ge,loadData:l?null:Ye,motion:Qe,activeKey:ve,checkable:O,checkStrictly:!0,checkedKeys:qe,selectedKeys:O?[]:T,defaultExpandAll:_e},te,{onActiveChange:fe,onSelect:se,onCheck:se,onExpand:de,onLoad:ze,filterTreeNode:Le,expandAction:q})))},wn=n.forwardRef(Bn);wn.displayName="OptionList";var jn=wn,In="SHOW_ALL",Tn="SHOW_PARENT",Fe="SHOW_CHILD";function Nn(e,t,r,u){var a=new Set(e);return t===Fe?e.filter(function(i){var l=r[i];return!(l&&l.children&&l.children.some(function(o){var c=o.node;return a.has(c[u.value])})&&l.children.every(function(o){var c=o.node;return U(c)||a.has(c[u.value])}))}):t===Tn?e.filter(function(i){var l=r[i],o=l?l.parent:null;return!(o&&!U(o.node)&&a.has(o.key))}):e}function ut(e){var t=e.searchPlaceholder,r=e.treeCheckStrictly,u=e.treeCheckable,a=e.labelInValue,i=e.value,l=e.multiple;warning(!t,"`searchPlaceholder` has been removed."),r&&a===!1&&warning(!1,"`treeCheckStrictly` will force set `labelInValue` to `true`."),(a||r)&&warning(toArray(i).every(function(o){return o&&_typeof(o)==="object"&&"value"in o}),"Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead."),r||l||u?warning(!i||Array.isArray(i),"`value` should be an array when `TreeSelect` is checkable or multiple."):warning(!Array.isArray(i),"`value` should not be array when `TreeSelect` is single mode.")}var ct=null,Gn=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function Jn(e){return!e||(0,gn.Z)(e)!=="object"}var Yn=n.forwardRef(function(e,t){var r=e.id,u=e.prefixCls,a=u===void 0?"rc-tree-select":u,i=e.value,l=e.defaultValue,o=e.onChange,c=e.onSelect,s=e.onDeselect,h=e.searchValue,M=e.inputValue,I=e.onSearch,S=e.autoClearSearchValue,Z=S===void 0?!0:S,P=e.filterTreeNode,A=e.treeNodeFilterProp,B=A===void 0?"value":A,q=e.showCheckedStrategy,y=e.treeNodeLabelProp,O=e.multiple,T=e.treeCheckable,j=e.treeCheckStrictly,De=e.labelInValue,_e=e.fieldNames,Ln=e.treeDataSimpleMode,Ue=e.treeData,Kn=e.children,Be=e.loadData,je=e.treeLoadedKeys,Ge=e.onTreeLoad,Je=e.treeDefaultExpandAll,Ye=e.treeExpandedKeys,xe=e.treeDefaultExpandedKeys,Qe=e.onTreeExpand,ze=e.treeExpandAction,Xe=e.virtual,ee=e.listHeight,Ie=ee===void 0?200:ee,qe=e.listItemHeight,Te=qe===void 0?20:qe,Le=e.onDropdownVisibleChange,en=e.dropdownMatchSelectWidth,ce=en===void 0?!0:en,Ke=e.treeLine,nn=e.treeIcon,tn=e.showTreeIcon,Me=e.switcherIcon,Pe=e.treeMotion,rn=(0,$.Z)(e,Gn),an=(0,mn.ZP)(r),de=T&&!j,ne=T||j,se=j||De,W=ne||O,ln=(0,Oe.default)(l,{value:i}),ve=(0,V.Z)(ln,2),fe=ve[0],G=ve[1],te=n.useMemo(function(){return T?q||Fe:In},[q,T]),g=n.useMemo(function(){return ke(_e)},[JSON.stringify(_e)]),b=(0,Oe.default)("",{value:h!==void 0?h:M,postState:function(d){return d||""}}),re=(0,V.Z)(b,2),R=re[0],on=re[1],un=function(d){on(d),I==null||I(d)},he=bn(Ue,Kn,Ln),cn=F(he,g),w=cn.keyEntities,ae=cn.valueEntities,Zn=n.useCallback(function(v){var d=[],m=[];return v.forEach(function(C){ae.has(C)?m.push(C):d.push(C)}),{missingRawValues:d,existRawValues:m}},[ae]),Vn=Ee(he,R,{fieldNames:g,treeNodeFilterProp:B,filterTreeNode:P}),An=n.useCallback(function(v){if(v){if(y)return v[y];for(var d=g._title,m=0;m<d.length;m+=1){var C=v[d[m]];if(C!==void 0)return C}}},[g,y]),we=n.useCallback(function(v){var d=K(v);return d.map(function(m){return Jn(m)?{value:m}:m})},[]),dn=n.useCallback(function(v){var d=we(v);return d.map(function(m){var C=m.label,L=m.value,k=m.halfChecked,p,E=ae.get(L);if(E){var D;C=(D=C)!==null&&D!==void 0?D:An(E.node),p=E.node.disabled}else if(C===void 0){var J=we(fe).find(function(Ne){return Ne.value===L});C=J.label}return{label:C,value:L,halfChecked:k,disabled:p}})},[ae,An,we,fe]),On=n.useMemo(function(){return we(fe)},[we,fe]),Xn=n.useMemo(function(){var v=[],d=[];return On.forEach(function(m){m.halfChecked?d.push(m):v.push(m)}),[v,d]},[On]),Rn=(0,V.Z)(Xn,2),ge=Rn[0],Hn=Rn[1],Wn=n.useMemo(function(){return ge.map(function(v){return v.value})},[ge]),qn=oe(ge,Hn,de,w),$n=(0,V.Z)(qn,2),me=$n[0],sn=$n[1],et=n.useMemo(function(){var v=Nn(me,te,w,g),d=v.map(function(k){var p,E,D;return(p=(E=w[k])===null||E===void 0||(D=E.node)===null||D===void 0?void 0:D[g.value])!==null&&p!==void 0?p:k}),m=d.map(function(k){var p=ge.find(function(E){return E.value===k});return{value:k,label:p==null?void 0:p.label}}),C=dn(m),L=C[0];return!W&&L&&Pn(L.value)&&Pn(L.label)?[]:C.map(function(k){var p;return(0,x.Z)((0,x.Z)({},k),{},{label:(p=k.label)!==null&&p!==void 0?p:k.value})})},[g,W,me,ge,dn,te,w]),nt=yn(et),tt=(0,V.Z)(nt,1),rt=tt[0],vn=ue(function(v,d,m){var C=dn(v);if(G(C),Z&&on(""),o){var L=v;if(de){var k=Nn(v,te,w,g);L=k.map(function(H){var Y=ae.get(H);return Y?Y.node[g.value]:H})}var p=d||{triggerValue:void 0,selected:void 0},E=p.triggerValue,D=p.selected,J=L;if(j){var Ne=Hn.filter(function(H){return!L.includes(H.value)});J=[].concat((0,N.Z)(J),(0,N.Z)(Ne))}var Ze=dn(J),le={preValue:ge,triggerValue:E},ye=!0;(j||m==="selection"&&!D)&&(ye=!1),pe(le,E,v,he,ye,g),ne?le.checked=D:le.selected=D;var fn=se?Ze:Ze.map(function(H){return H.value});o(W?fn:fn[0],se?null:Ze.map(function(H){return H.label}),le)}}),Mn=n.useCallback(function(v,d){var m,C=d.selected,L=d.source,k=w[v],p=k==null?void 0:k.node,E=(m=p==null?void 0:p[g.value])!==null&&m!==void 0?m:v;if(!W)vn([E],{selected:!0,triggerValue:E},"option");else{var D=C?[].concat((0,N.Z)(Wn),[E]):me.filter(function(Y){return Y!==E});if(de){var J=Zn(D),Ne=J.missingRawValues,Ze=J.existRawValues,le=Ze.map(function(Y){return ae.get(Y).key}),ye;if(C){var fn=(0,ie.S)(le,!0,w);ye=fn.checkedKeys}else{var H=(0,ie.S)(le,{checked:!1,halfCheckedKeys:sn},w);ye=H.checkedKeys}D=[].concat((0,N.Z)(Ne),(0,N.Z)(ye.map(function(Y){return w[Y].node[g.value]})))}vn(D,{selected:C,triggerValue:E},L||"option")}C||!W?c==null||c(E,Ce(p)):s==null||s(E,Ce(p))},[Zn,ae,w,g,W,Wn,vn,de,c,s,me,sn]),at=n.useCallback(function(v){if(Le){var d={};Object.defineProperty(d,"documentClickClose",{get:function(){return(0,Q.ZP)(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),Le(v,d)}},[Le]),lt=ue(function(v,d){var m=v.map(function(C){return C.value});if(d.type==="clear"){vn(m,{},"selection");return}d.values.length&&Mn(d.values[0].value,{selected:!1,source:"selection"})}),it=n.useMemo(function(){return{virtual:Xe,dropdownMatchSelectWidth:ce,listHeight:Ie,listItemHeight:Te,treeData:Vn,fieldNames:g,onSelect:Mn,treeExpandAction:ze}},[Xe,ce,Ie,Te,Vn,g,Mn,ze]),ot=n.useMemo(function(){return{checkable:ne,loadData:Be,treeLoadedKeys:je,onTreeLoad:Ge,checkedKeys:me,halfCheckedKeys:sn,treeDefaultExpandAll:Je,treeExpandedKeys:Ye,treeDefaultExpandedKeys:xe,onTreeExpand:Qe,treeIcon:nn,treeMotion:Pe,showTreeIcon:tn,switcherIcon:Me,treeLine:Ke,treeNodeFilterProp:B,keyEntities:w}},[ne,Be,je,Ge,me,sn,Je,Ye,xe,Qe,nn,Pe,tn,Me,Ke,B,w]);return n.createElement($e.Provider,{value:it},n.createElement(X.Provider,{value:ot},n.createElement(Ae.Ac,(0,Ve.Z)({ref:t},rn,{id:an,prefixCls:a,mode:W?"multiple":void 0,displayValues:rt,onDisplayValuesChange:lt,searchValue:R,onSearch:un,OptionList:jn,emptyOptions:!he.length,onDropdownVisibleChange:at,dropdownMatchSelectWidth:ce}))))}),be=Yn;be.TreeNode=z,be.SHOW_ALL=In,be.SHOW_PARENT=Tn,be.SHOW_CHILD=Fe;var Qn=be,zn=Qn}}]);
