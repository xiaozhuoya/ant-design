"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8312],{825035:function(W,u,n){n.d(u,{Z:function(){return v}});var M=n(487462),r=n(667294),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},e=d,a=n(713401),h=function(S,p){return r.createElement(a.Z,(0,M.Z)({},S,{ref:p,icon:e}))},v=r.forwardRef(h)},455759:function(W,u,n){n.d(u,{Z:function(){return f}});var M=n(97857),r=n.n(M),d=n(805574),e=n.n(d),a=n(513769),h=n.n(a),v=n(642461),m=n.n(v),S=n(294184),p=n.n(S),N=n(427712),P=n(260869),$=n(518475),E=n(667294),U=n(106465),I=n(73287),z=n(344682),X=n(218283),_=n(586775),L=n(905303),G=n(801971),k=n(824504),F=n(667128),R=n(974638),q=n(9783),w=n.n(q),ln=n(141035),sn=function(i){var s,x,A=i.componentCls,H=i.iconCls,Z=i.antCls,B=i.zIndexPopup,K=i.colorText,O=i.colorWarning,Q=i.marginXXS,y=i.marginXS,T=i.fontSize,Y=i.fontWeightStrong,b=i.colorTextHeading;return w()({},A,(x={zIndex:B},w()(x,"&".concat(Z,"-popover"),{fontSize:T}),w()(x,"".concat(A,"-message"),(s={marginBottom:y,display:"flex",flexWrap:"nowrap",alignItems:"start"},w()(s,"> ".concat(A,"-message-icon ").concat(H),{color:O,fontSize:T,lineHeight:1,marginInlineEnd:y}),w()(s,"".concat(A,"-title"),{fontWeight:Y,color:b,"&:only-child":{fontWeight:"normal"}}),w()(s,"".concat(A,"-description"),{marginTop:Q,color:K}),s)),w()(x,"".concat(A,"-buttons"),{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:y}}),x))},nn=(0,ln.Z)("Popconfirm",function(l){return sn(l)},function(l){var i=l.zIndexPopupBase;return{zIndexPopup:i+60}}),C=n(785893),rn=["prefixCls","placement","className","style"],V=function(i){var s=i.prefixCls,x=i.okButtonProps,A=i.cancelButtonProps,H=i.title,Z=i.description,B=i.cancelText,K=i.okText,O=i.okType,Q=O===void 0?"primary":O,y=i.icon,T=y===void 0?(0,C.jsx)(m(),{}):y,Y=i.showCancel,b=Y===void 0?!0:Y,tn=i.close,hn=i.onConfirm,un=i.onCancel,mn=i.onPopupClick,en=E.useContext(I.E_),an=en.getPrefixCls,Cn=(0,k.Z)("Popconfirm",F.Z.Popconfirm),cn=e()(Cn,1),J=cn[0],vn=(0,_.Z)(H),gn=(0,_.Z)(Z);return(0,C.jsxs)("div",{className:"".concat(s,"-inner-content"),onClick:mn,children:[(0,C.jsxs)("div",{className:"".concat(s,"-message"),children:[T&&(0,C.jsx)("span",{className:"".concat(s,"-message-icon"),children:T}),(0,C.jsxs)("div",{className:"".concat(s,"-message-text"),children:[vn&&(0,C.jsx)("div",{className:p()("".concat(s,"-title")),children:vn}),gn&&(0,C.jsx)("div",{className:"".concat(s,"-description"),children:gn})]})]}),(0,C.jsxs)("div",{className:"".concat(s,"-buttons"),children:[b&&(0,C.jsx)(L.ZP,r()(r()({onClick:un,size:"small"},A),{},{children:B!=null?B:J==null?void 0:J.cancelText})),(0,C.jsx)(X.Z,{buttonProps:r()(r()({size:"small"},(0,G.n)(Q)),x),actionFn:hn,close:tn,prefixCls:an("btn"),quitOnNullishReturnValue:!0,emitEvent:!0,children:K!=null?K:J==null?void 0:J.okText})]})]})},dn=function(i){var s=i.prefixCls,x=i.placement,A=i.className,H=i.style,Z=h()(i,rn),B=E.useContext(I.E_),K=B.getPrefixCls,O=K("popconfirm",s),Q=nn(O),y=e()(Q,1),T=y[0];return T((0,C.jsx)(R.ZP,{placement:x,className:p()(O,A),style:H,content:(0,C.jsx)(V,r()({prefixCls:O},Z))}))},g=dn,t=["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"],c=void 0,o=E.forwardRef(function(l,i){var s=l.prefixCls,x=l.placement,A=x===void 0?"top":x,H=l.trigger,Z=H===void 0?"click":H,B=l.okType,K=B===void 0?"primary":B,O=l.icon,Q=O===void 0?(0,C.jsx)(m(),{}):O,y=l.children,T=l.overlayClassName,Y=l.onOpenChange,b=l.onVisibleChange,tn=h()(l,t),hn=E.useContext(I.E_),un=hn.getPrefixCls,mn=(0,P.default)(!1,{value:l.open,defaultValue:l.defaultOpen}),en=e()(mn,2),an=en[0],Cn=en[1],cn=function(D,j){Cn(D,!0),b==null||b(D),Y==null||Y(D,j)},J=function(D){cn(!1,D)},vn=function(D){var j;return(j=l.onConfirm)===null||j===void 0?void 0:j.call(c,D)},gn=function(D){var j;cn(!1,D),(j=l.onCancel)===null||j===void 0||j.call(c,D)},xn=function(D){D.keyCode===N.Z.ESC&&an&&cn(!1,D)},En=function(D){var j=l.disabled,fn=j===void 0?!1:j;fn||cn(D)},Pn=un("popconfirm",s),Mn=p()(Pn,T),Sn=nn(Pn),pn=e()(Sn,1),In=pn[0];return In((0,C.jsx)(z.Z,r()(r()({},(0,$.default)(tn,["title"])),{},{trigger:Z,placement:A,onOpenChange:En,open:an,ref:i,overlayClassName:Mn,content:(0,C.jsx)(V,r()(r()({okType:K,icon:Q},l),{},{prefixCls:Pn,close:J,onConfirm:vn,onCancel:gn})),"data-popover-inject":!0,children:(0,U.Tm)(y,{onKeyDown:function(D){if(E.isValidElement(y)){var j,fn;y==null||(j=(fn=y.props).onKeyDown)===null||j===void 0||j.call(fn,D)}xn(D)}})})))});o._InternalPanelDoNotUseOrYouWillBeFired=g;var f=o},979331:function(W,u,n){n.d(u,{Z:function(){return dn}});var M=n(97857),r=n.n(M),d=n(9783),e=n.n(d),a=n(805574),h=n.n(a),v=n(513769),m=n.n(v),S=n(100628),p=n.n(S),N=n(294184),P=n.n(N),$=n(33413),E=n(667294),U=n(544695),I=n(189265),z=n(73287),X=n(147315),_=n(947170),L=n(510274),G=n(548073),k=n(141035),F=n(986943),R=function(t){var c,o,f,l,i,s=t.componentCls,x="".concat(s,"-inner");return e()({},s,e()({},"&".concat(s,"-small"),(i={minWidth:t.switchMinWidthSM,height:t.switchHeightSM,lineHeight:"".concat(t.switchHeightSM,"px")},e()(i,"".concat(s,"-inner"),(c={paddingInlineStart:t.switchInnerMarginMaxSM,paddingInlineEnd:t.switchInnerMarginMinSM},e()(c,"".concat(x,"-checked"),{marginInlineStart:"calc(-100% + ".concat(t.switchPinSizeSM+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(100% - ".concat(t.switchPinSizeSM+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMaxSM*2,"px)")}),e()(c,"".concat(x,"-unchecked"),{marginTop:-t.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),c)),e()(i,"".concat(s,"-handle"),{width:t.switchPinSizeSM,height:t.switchPinSizeSM}),e()(i,"".concat(s,"-loading-icon"),{top:(t.switchPinSizeSM-t.switchLoadingIconSize)/2,fontSize:t.switchLoadingIconSize}),e()(i,"&".concat(s,"-checked"),(f={},e()(f,"".concat(s,"-inner"),(o={paddingInlineStart:t.switchInnerMarginMinSM,paddingInlineEnd:t.switchInnerMarginMaxSM},e()(o,"".concat(x,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(o,"".concat(x,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(t.switchPinSizeSM+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(t.switchPinSizeSM+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMaxSM*2,"px)")}),o)),e()(f,"".concat(s,"-handle"),{insetInlineStart:"calc(100% - ".concat(t.switchPinSizeSM+t.switchPadding,"px)")}),f)),e()(i,"&:not(".concat(s,"-disabled):active"),(l={},e()(l,"&:not(".concat(s,"-checked) ").concat(x),e()({},"".concat(x,"-unchecked"),{marginInlineStart:t.marginXXS/2,marginInlineEnd:-t.marginXXS/2})),e()(l,"&".concat(s,"-checked ").concat(x),e()({},"".concat(x,"-checked"),{marginInlineStart:-t.marginXXS/2,marginInlineEnd:t.marginXXS/2})),l)),i)))},q=function(t){var c,o=t.componentCls;return e()({},o,(c={},e()(c,"".concat(o,"-loading-icon").concat(t.iconCls),{position:"relative",top:(t.switchPinSize-t.fontSize)/2,color:t.switchLoadingIconColor,verticalAlign:"top"}),e()(c,"&".concat(o,"-checked ").concat(o,"-loading-icon"),{color:t.switchColor}),c))},w=function(t){var c,o,f=t.componentCls,l=t.motion,i="".concat(f,"-handle");return e()({},f,(o={},e()(o,i,{position:"absolute",top:t.switchPadding,insetInlineStart:t.switchPadding,width:t.switchPinSize,height:t.switchPinSize,transition:"all ".concat(t.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:t.colorWhite,borderRadius:t.switchPinSize/2,boxShadow:t.switchHandleShadow,transition:"all ".concat(t.switchDuration," ease-in-out"),content:'""'}}),e()(o,"&".concat(f,"-checked ").concat(i),{insetInlineStart:"calc(100% - ".concat(t.switchPinSize+t.switchPadding,"px)")}),e()(o,"&:not(".concat(f,"-disabled):active"),l?(c={},e()(c,"".concat(i,"::before"),{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0}),e()(c,"&".concat(f,"-checked ").concat(i,"::before"),{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}),c):{}),o))},ln=function(t){var c,o,f,l,i=t.componentCls,s="".concat(i,"-inner");return e()({},i,(l={},e()(l,s,(c={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:t.switchInnerMarginMax,paddingInlineEnd:t.switchInnerMarginMin,transition:"padding-inline-start ".concat(t.switchDuration," ease-in-out, padding-inline-end ").concat(t.switchDuration," ease-in-out")},e()(c,"".concat(s,"-checked, ").concat(s,"-unchecked"),{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:"margin-inline-start ".concat(t.switchDuration," ease-in-out, margin-inline-end ").concat(t.switchDuration," ease-in-out"),pointerEvents:"none"}),e()(c,"".concat(s,"-checked"),{marginInlineStart:"calc(-100% + ".concat(t.switchPinSize+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(100% - ".concat(t.switchPinSize+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMax*2,"px)")}),e()(c,"".concat(s,"-unchecked"),{marginTop:-t.switchHeight,marginInlineStart:0,marginInlineEnd:0}),c)),e()(l,"&".concat(i,"-checked ").concat(s),(o={paddingInlineStart:t.switchInnerMarginMin,paddingInlineEnd:t.switchInnerMarginMax},e()(o,"".concat(s,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(o,"".concat(s,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(t.switchPinSize+t.switchPadding*2,"px + ").concat(t.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(t.switchPinSize+t.switchPadding*2,"px - ").concat(t.switchInnerMarginMax*2,"px)")}),o)),e()(l,"&:not(".concat(i,"-disabled):active"),(f={},e()(f,"&:not(".concat(i,"-checked) ").concat(s),e()({},"".concat(s,"-unchecked"),{marginInlineStart:t.switchPadding*2,marginInlineEnd:-t.switchPadding*2})),e()(f,"&".concat(i,"-checked ").concat(s),e()({},"".concat(s,"-checked"),{marginInlineStart:-t.switchPadding*2,marginInlineEnd:t.switchPadding*2})),f)),l))},sn=function(t){var c,o=t.componentCls;return e()({},o,r()(r()(r()({},(0,G.Wf)(t)),{},e()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:t.switchMinWidth,height:t.switchHeight,lineHeight:"".concat(t.switchHeight,"px"),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(t.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(o,"-disabled)"),{background:t.colorTextTertiary}),(0,G.Qy)(t)),{},(c={},e()(c,"&".concat(o,"-checked"),e()({background:t.switchColor},"&:hover:not(".concat(o,"-disabled)"),{background:t.colorPrimaryHover})),e()(c,"&".concat(o,"-loading, &").concat(o,"-disabled"),{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e()(c,"&".concat(o,"-rtl"),{direction:"rtl"}),c)))},nn=(0,k.Z)("Switch",function(g){var t=g.fontSize*g.lineHeight,c=g.controlHeight/2,o=2,f=t-o*2,l=c-o*2,i=(0,F.TS)(g,{switchMinWidth:f*2+o*4,switchHeight:t,switchDuration:g.motionDurationMid,switchColor:g.colorPrimary,switchDisabledOpacity:g.opacityLoading,switchInnerMarginMin:f/2,switchInnerMarginMax:f+o+o*2,switchPadding:o,switchPinSize:f,switchBg:g.colorBgContainer,switchMinWidthSM:l*2+o*2,switchHeightSM:c,switchInnerMarginMinSM:l/2,switchInnerMarginMaxSM:l+o+o*2,switchPinSizeSM:l,switchHandleShadow:"0 2px 4px 0 ".concat(new L.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:g.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(g.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[sn(i),ln(i),w(i),q(i),R(i)]}),C=n(785893),rn=["prefixCls","size","disabled","loading","className","rootClassName","style"],V=E.forwardRef(function(g,t){var c,o=g.prefixCls,f=g.size,l=g.disabled,i=g.loading,s=g.className,x=g.rootClassName,A=g.style,H=m()(g,rn);(0,U.ZP)("checked"in g||!("value"in g),"Switch","`value` is not a valid prop, do you mean `checked`?");var Z=E.useContext(z.E_),B=Z.getPrefixCls,K=Z.direction,O=Z.switch,Q=E.useContext(X.Z),y=(l!=null?l:Q)||i,T=B("switch",o),Y=(0,C.jsx)("div",{className:"".concat(T,"-handle"),children:i&&(0,C.jsx)(p(),{className:"".concat(T,"-loading-icon")})}),b=nn(T),tn=h()(b,2),hn=tn[0],un=tn[1],mn=(0,_.Z)(f),en=P()(O==null?void 0:O.className,(c={},e()(c,"".concat(T,"-small"),mn==="small"),e()(c,"".concat(T,"-loading"),i),e()(c,"".concat(T,"-rtl"),K==="rtl"),c),s,x,un),an=r()(r()({},O==null?void 0:O.style),A);return hn((0,C.jsx)(I.Z,{component:"Switch",children:(0,C.jsx)($.Z,r()(r()({},H),{},{prefixCls:T,className:en,style:an,disabled:y,ref:t,loadingIcon:Y}))}))});V.__ANT_SWITCH=!0;var dn=V},351713:function(W,u,n){n.r(u);var M=n(805574),r=n.n(M),d=n(667294),e=n(455759),a=n(905303),h=n(785893),v=function(){var S=(0,d.useState)(!1),p=r()(S,2),N=p[0],P=p[1],$=(0,d.useState)(!1),E=r()($,2),U=E[0],I=E[1],z=function(){P(!0)},X=function(){I(!0),setTimeout(function(){P(!1),I(!1)},2e3)},_=function(){console.log("Clicked cancel button"),P(!1)};return(0,h.jsx)(e.Z,{title:"Title",description:"Open Popconfirm with async logic",open:N,onConfirm:X,okButtonProps:{loading:U},onCancel:_,children:(0,h.jsx)(a.ZP,{type:"primary",onClick:z,children:"Open Popconfirm with async logic"})})};u.default=v},7280:function(W,u,n){n.r(u);var M=n(667294),r=n(373656),d=n(455759),e=n(905303),a=n(785893),h=function(p){console.log(p),r.ZP.success("Click on Yes")},v=function(p){console.log(p),r.ZP.error("Click on No")},m=function(){return(0,a.jsx)(d.Z,{title:"Delete the task",description:"Are you sure to delete this task?",onConfirm:h,onCancel:v,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{danger:!0,children:"Delete"})})};u.default=m},126005:function(W,u,n){n.r(u);var M=n(805574),r=n.n(M),d=n(667294),e=n(373656),a=n(455759),h=n(905303),v=n(979331),m=n(785893),S=function(){var N=(0,d.useState)(!1),P=r()(N,2),$=P[0],E=P[1],U=(0,d.useState)(!0),I=r()(U,2),z=I[0],X=I[1],_=function(R){X(R)},L=function(){E(!1),e.ZP.success("Next step.")},G=function(){E(!1),e.ZP.error("Click on cancel.")},k=function(R){if(!R){E(R);return}console.log(z),z?L():E(R)};return(0,m.jsxs)("div",{children:[(0,m.jsx)(a.Z,{title:"Delete the task",description:"Are you sure to delete this task?",open:$,onOpenChange:k,onConfirm:L,onCancel:G,okText:"Yes",cancelText:"No",children:(0,m.jsx)(h.ZP,{danger:!0,children:"Delete a task"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),"Whether directly execute\uFF1A",(0,m.jsx)(v.Z,{defaultChecked:!0,onChange:_})]})};u.default=S},645327:function(W,u,n){n.r(u);var M=n(825035),r=n(667294),d=n(455759),e=n(905303),a=n(785893),h=function(){return(0,a.jsx)(d.Z,{title:"Delete the task",description:"Are you sure to delete this task?",icon:(0,a.jsx)(M.Z,{style:{color:"red"}}),children:(0,a.jsx)(e.ZP,{danger:!0,children:"Delete"})})};u.default=h},526587:function(W,u,n){n.r(u);var M=n(667294),r=n(455759),d=n(905303),e=n(785893),a=function(){return(0,e.jsx)(r.Z,{title:"Delete the task",description:"Are you sure to delete this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(d.ZP,{danger:!0,children:"Delete"})})};u.default=a},890255:function(W,u,n){n.r(u);var M=n(667294),r=n(373656),d=n(455759),e=n(905303),a=n(785893),h="Are you sure to delete this task?",v="Delete the task",m=function(){r.ZP.info("Clicked on Yes.")},S=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{marginLeft:70,whiteSpace:"nowrap"},children:[(0,a.jsx)(d.Z,{placement:"topLeft",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"TL"})}),(0,a.jsx)(d.Z,{placement:"top",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Top"})}),(0,a.jsx)(d.Z,{placement:"topRight",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"TR"})})]}),(0,a.jsxs)("div",{style:{width:70,float:"left"},children:[(0,a.jsx)(d.Z,{placement:"leftTop",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"LT"})}),(0,a.jsx)(d.Z,{placement:"left",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Left"})}),(0,a.jsx)(d.Z,{placement:"leftBottom",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"LB"})})]}),(0,a.jsxs)("div",{style:{width:70,marginLeft:304},children:[(0,a.jsx)(d.Z,{placement:"rightTop",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"RT"})}),(0,a.jsx)(d.Z,{placement:"right",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Right"})}),(0,a.jsx)(d.Z,{placement:"rightBottom",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"RB"})})]}),(0,a.jsxs)("div",{style:{marginLeft:70,clear:"both",whiteSpace:"nowrap"},children:[(0,a.jsx)(d.Z,{placement:"bottomLeft",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"BL"})}),(0,a.jsx)(d.Z,{placement:"bottom",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"Bottom"})}),(0,a.jsx)(d.Z,{placement:"bottomRight",title:h,description:v,onConfirm:m,okText:"Yes",cancelText:"No",children:(0,a.jsx)(e.ZP,{children:"BR"})})]})]})};u.default=S},22053:function(W,u,n){n.r(u);var M=n(667294),r=n(455759),d=n(905303),e=n(785893),a=function(){var v=function(){return new Promise(function(S){setTimeout(function(){return S(null)},3e3)})};return(0,e.jsx)(r.Z,{title:"Title",description:"Open Popconfirm with Promise",onConfirm:v,onOpenChange:function(){return console.log("open change")},children:(0,e.jsx)(d.ZP,{type:"primary",children:"Open Popconfirm with Promise"})})};u.default=a},935642:function(W,u,n){n.r(u);var M=n(667294),r=n(455759),d=n(785893),e=r.Z._InternalPanelDoNotUseOrYouWillBeFired,a=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e,{title:"Are you OK?",description:"Does this look good?"}),(0,d.jsx)(e,{title:"Are you OK?",description:"Does this look good?",placement:"bottomRight",style:{width:250}}),(0,d.jsx)(e,{icon:null,title:"Are you OK?"}),(0,d.jsx)(e,{icon:null,title:"Are you OK?",description:"Does this look good?"})]})};u.default=a},913019:function(W,u,n){n.r(u);var M=n(667294),r=n(455759),d=n(879348),e=n(785893),a=r.Z._InternalPanelDoNotUseOrYouWillBeFired,h=function(){return(0,e.jsxs)(d.ZP,{theme:{token:{wireframe:!0}},children:[(0,e.jsx)(a,{title:"Are you OK?"}),(0,e.jsx)(a,{title:"Are you OK?",placement:"bottomRight",style:{width:250}})]})};u.default=h},33413:function(W,u,n){var M=n(487462),r=n(204942),d=n(297685),e=n(912402),a=n(667294),h=n(294184),v=n.n(h),m=n(821770),S=n(915105),p=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],N=a.forwardRef(function(P,$){var E,U=P.prefixCls,I=U===void 0?"rc-switch":U,z=P.className,X=P.checked,_=P.defaultChecked,L=P.disabled,G=P.loadingIcon,k=P.checkedChildren,F=P.unCheckedChildren,R=P.onClick,q=P.onChange,w=P.onKeyDown,ln=(0,e.Z)(P,p),sn=(0,m.default)(!1,{value:X,defaultValue:_}),nn=(0,d.Z)(sn,2),C=nn[0],rn=nn[1];function V(c,o){var f=C;return L||(f=c,rn(f),q==null||q(f,o)),f}function dn(c){c.which===S.Z.LEFT?V(!1,c):c.which===S.Z.RIGHT&&V(!0,c),w==null||w(c)}function g(c){var o=V(!C,c);R==null||R(o,c)}var t=v()(I,z,(E={},(0,r.Z)(E,"".concat(I,"-checked"),C),(0,r.Z)(E,"".concat(I,"-disabled"),L),E));return a.createElement("button",(0,M.Z)({},ln,{type:"button",role:"switch","aria-checked":C,disabled:L,className:t,ref:$,onKeyDown:dn,onClick:g}),G,a.createElement("span",{className:"".concat(I,"-inner")},a.createElement("span",{className:"".concat(I,"-inner-checked")},k),a.createElement("span",{className:"".concat(I,"-inner-unchecked")},F)))});N.displayName="Switch",u.Z=N}}]);
