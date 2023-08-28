"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1176],{631126:function(p,s,n){n.r(s);var u=n(502143),_=n(968521),h=n(720719),x=n(521587),t=n(759907),i=n(828089),j=n(825673),g=n(902068),v=n(574399),k=n(863942),b=n(316073),f=n(24628),P=n(719260),y=n(956140),o=n(127179),a=n(905388),T=n(245583),E=n(606965),D=n(268696),w=n(587302),c=n(424128),O=n(249706),C=n(795127),A=n(116846),M=n(720538),R=n(212039),L=n(73024),I=n(553913),d=n(830084),B=n(667294),e=n(785893);function l(){var m=(0,d.eL)(),r=m.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:r[1].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"time-picker-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/time-picker/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
);
export default App;
`,description:"<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>"}},{demo:{id:"time-picker-demo-value"},previewerProps:{title:"\u53D7\u63A7\u7EC4\u4EF6",filename:"components/time-picker/demo/value.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { TimePicker } from 'antd';
const App = () => {
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};
export default App;
`,description:"<p>value \u548C onChange \u9700\u8981\u914D\u5408\u4F7F\u7528\u3002</p>"}},{demo:{id:"time-picker-demo-size"},previewerProps:{title:"\u4E09\u79CD\u5927\u5C0F",filename:"components/time-picker/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import { Space, TimePicker } from 'antd';
const App = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
  </Space>
);
export default App;
`,description:"<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u5927\u7684\u7528\u5728\u8868\u5355\u4E2D\uFF0C\u4E2D\u7684\u4E3A\u9ED8\u8BA4\u3002</p>"}},{demo:{id:"time-picker-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/time-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
dayjs.extend(customParseFormat);
const App = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
`,description:"<p>\u7981\u7528\u65F6\u95F4\u9009\u62E9\u3002</p>"}},{demo:{id:"time-picker-demo-hide-column"},previewerProps:{title:"\u9009\u62E9\u65F6\u5206",filename:"components/time-picker/demo/hide-column.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
const format = 'HH:mm';
const App = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default App;
`,description:"<p>TimePicker \u6D6E\u5C42\u4E2D\u7684\u5217\u4F1A\u968F\u7740 <code>format</code> \u53D8\u5316\uFF0C\u5F53\u7565\u53BB <code>format</code> \u4E2D\u7684\u67D0\u90E8\u5206\u65F6\uFF0C\u6D6E\u5C42\u4E2D\u5BF9\u5E94\u7684\u5217\u4E5F\u4F1A\u6D88\u5931\u3002</p>"}},{demo:{id:"time-picker-demo-interval-options"},previewerProps:{title:"\u6B65\u957F\u9009\u9879",filename:"components/time-picker/demo/interval-options.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const App = () => <TimePicker minuteStep={15} secondStep={10} hourStep={1} />;
export default App;
`,description:"<p>\u53EF\u4EE5\u4F7F\u7528 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> \u6309\u6B65\u957F\u5C55\u793A\u53EF\u9009\u7684\u65F6\u5206\u79D2\u3002</p>"}},{demo:{id:"time-picker-demo-addon"},previewerProps:{title:"\u9644\u52A0\u5185\u5BB9",filename:"components/time-picker/demo/addon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, TimePicker } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default App;
`,description:"<p>\u5728 TimePicker \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u3002</p>"}},{demo:{id:"time-picker-demo-12hours"},previewerProps:{title:"12 \u5C0F\u65F6\u5236",filename:"components/time-picker/demo/12hours.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </Space>
);
export default App;
`,description:"<p>12 \u5C0F\u65F6\u5236\u7684\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u7684 format \u4E3A <code>h:mm:ss a</code>\u3002</p>"}},{demo:{id:"time-picker-demo-colored-popup"},previewerProps:{debug:!0,title:"\u8272\u4ED8\u304D\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7",filename:"components/time-picker/demo/colored-popup.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
export default App;
`,description:"<p>\u5C06\u81EA\u5B9A\u4E49 class \u4F20\u7ED9 <code>TimePicker</code> \u5F39\u6846\u3002</p>"}},{demo:{id:"time-picker-demo-range-picker"},previewerProps:{title:"\u8303\u56F4\u9009\u62E9\u5668",filename:"components/time-picker/demo/range-picker.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const App = () => <TimePicker.RangePicker />;
export default App;
`,description:"<p>\u901A\u8FC7 <code>TimePicker.RangePicker</code> \u4F7F\u7528\u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668\u3002</p>"}},{demo:{id:"time-picker-demo-bordered"},previewerProps:{title:"\u65E0\u8FB9\u6846",filename:"components/time-picker/demo/bordered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;
const App = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);
export default App;
`,description:"<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>"}},{demo:{id:"time-picker-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/time-picker/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Space, TimePicker } from 'antd';
const App = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A TimePicker \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"time-picker-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/time-picker/demo/suffix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
  />
);
export default App;
`,description:"<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>"}},{demo:{id:"time-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/time-picker/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.15.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.14.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.36.0","rc-image":"~7.1.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.6.0","rc-picker":"~3.13.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.7.1","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.11.0","rc-upload":"~4.3.0","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { TimePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;
const App = () => <InternalTimePicker />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsx)("hr",{}),(0,e.jsxs)("p",{children:[r[2].value,(0,e.jsx)(c.Z,{to:"/docs/react/common-props",sourceType:"Link",children:r[3].value})]}),(0,e.jsx)(t.Z,{lang:"jsx",children:r[4].value}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[5].value}),(0,e.jsx)("th",{children:r[6].value}),(0,e.jsx)("th",{children:r[7].value}),(0,e.jsx)("th",{children:r[8].value}),(0,e.jsx)("th",{children:r[9].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[10].value}),(0,e.jsx)("td",{children:r[11].value}),(0,e.jsx)("td",{children:r[12].value}),(0,e.jsx)("td",{children:r[13].value}),(0,e.jsx)("td",{children:r[14].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[15].value}),(0,e.jsx)("td",{children:r[16].value}),(0,e.jsx)("td",{children:r[17].value}),(0,e.jsx)("td",{children:r[18].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[19].value}),(0,e.jsx)("td",{children:r[20].value}),(0,e.jsx)("td",{children:r[21].value}),(0,e.jsx)("td",{children:r[22].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[23].value}),(0,e.jsx)("td",{children:r[24].value}),(0,e.jsx)("td",{children:r[25].value}),(0,e.jsx)("td",{children:r[26].value}),(0,e.jsx)("td",{children:r[27].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[28].value}),(0,e.jsxs)("td",{children:[r[29].value,(0,e.jsx)("code",{children:r[30].value}),r[31].value]}),(0,e.jsx)("td",{children:r[32].value}),(0,e.jsx)("td",{children:r[33].value}),(0,e.jsx)("td",{children:r[34].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[35].value}),(0,e.jsx)("td",{children:r[36].value}),(0,e.jsx)("td",{children:r[37].value}),(0,e.jsx)("td",{children:r[38].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[39].value}),(0,e.jsx)("td",{children:r[40].value}),(0,e.jsx)("td",{children:r[41].value}),(0,e.jsx)("td",{children:r[42].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[43].value}),(0,e.jsx)("td",{children:r[44].value}),(0,e.jsx)("td",{children:r[45].value}),(0,e.jsx)("td",{children:r[46].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[47].value}),(0,e.jsx)("td",{children:r[48].value}),(0,e.jsx)("td",{children:(0,e.jsx)(c.Z,{href:"http://day.js.org/",sourceType:"a",children:r[49].value})}),(0,e.jsx)("td",{children:r[50].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[51].value}),(0,e.jsx)("td",{children:r[52].value}),(0,e.jsx)("td",{children:r[53].value}),(0,e.jsx)("td",{children:r[54].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[55].value}),(0,e.jsx)("td",{children:r[56].value}),(0,e.jsx)("td",{children:(0,e.jsx)(c.Z,{to:"#disabledtime",sourceType:"Link",children:r[57].value})}),(0,e.jsx)("td",{children:r[58].value}),(0,e.jsx)("td",{children:r[59].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[60].value}),(0,e.jsx)("td",{children:r[61].value}),(0,e.jsx)("td",{children:r[62].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[63].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[64].value}),(0,e.jsx)("td",{children:r[65].value}),(0,e.jsx)("td",{children:r[66].value}),(0,e.jsx)("td",{children:r[67].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[68].value}),(0,e.jsx)("td",{children:r[69].value}),(0,e.jsx)("td",{children:r[70].value}),(0,e.jsx)("td",{children:r[71].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[72].value}),(0,e.jsx)("td",{children:r[73].value}),(0,e.jsx)("td",{children:r[74].value}),(0,e.jsx)("td",{children:r[75].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[76].value}),(0,e.jsx)("td",{children:r[77].value}),(0,e.jsx)("td",{children:r[78].value}),(0,e.jsx)("td",{children:r[79].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[80].value}),(0,e.jsx)("td",{children:r[81].value}),(0,e.jsx)("td",{children:r[82].value}),(0,e.jsx)("td",{children:r[83].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[84].value}),(0,e.jsx)("td",{children:r[85].value}),(0,e.jsx)("td",{children:r[86].value}),(0,e.jsx)("td",{children:r[87].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[88].value}),(0,e.jsx)("td",{children:r[89].value}),(0,e.jsx)("td",{children:r[90].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[91].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[92].value}),(0,e.jsx)("td",{children:r[93].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[94].value}),r[95].value,(0,e.jsx)("code",{children:r[96].value}),r[97].value,(0,e.jsx)("code",{children:r[98].value}),r[99].value,(0,e.jsx)("code",{children:r[100].value})]}),(0,e.jsx)("td",{children:r[101].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[102].value}),(0,e.jsx)("td",{children:r[103].value}),(0,e.jsx)("td",{children:r[104].value}),(0,e.jsx)("td",{children:r[105].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[106].value}),(0,e.jsx)("td",{children:r[107].value}),(0,e.jsx)("td",{children:r[108].value}),(0,e.jsx)("td",{children:r[109].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[110].value}),(0,e.jsx)("td",{children:r[111].value}),(0,e.jsx)("td",{children:r[112].value}),(0,e.jsx)("td",{children:r[113].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[114].value}),(0,e.jsx)("td",{children:r[115].value}),(0,e.jsx)("td",{children:r[116].value}),(0,e.jsx)("td",{children:r[117].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[118].value}),(0,e.jsx)("td",{children:r[119].value}),(0,e.jsx)("td",{children:r[120].value}),(0,e.jsx)("td",{children:r[121].value}),(0,e.jsx)("td",{children:r[122].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[123].value}),(0,e.jsxs)("td",{children:[r[124].value,(0,e.jsx)("code",{children:r[125].value}),r[126].value,(0,e.jsx)("code",{children:r[127].value}),r[128].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[129].value}),r[130].value,(0,e.jsx)("code",{children:r[131].value}),r[132].value,(0,e.jsx)("code",{children:r[133].value})]}),(0,e.jsx)("td",{children:r[134].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[135].value}),(0,e.jsx)("td",{children:r[136].value}),(0,e.jsx)("td",{children:r[137].value}),(0,e.jsx)("td",{children:r[138].value}),(0,e.jsx)("td",{children:r[139].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[140].value}),(0,e.jsx)("td",{children:r[141].value}),(0,e.jsx)("td",{children:r[142].value}),(0,e.jsx)("td",{children:r[143].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[144].value}),(0,e.jsxs)("td",{children:[r[145].value,(0,e.jsx)("code",{children:r[146].value}),r[147].value,(0,e.jsx)("code",{children:r[148].value})]}),(0,e.jsx)("td",{children:r[149].value}),(0,e.jsx)("td",{children:r[150].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[151].value}),(0,e.jsx)("td",{children:r[152].value}),(0,e.jsx)("td",{children:(0,e.jsx)(c.Z,{href:"http://day.js.org/",sourceType:"a",children:r[153].value})}),(0,e.jsx)("td",{children:r[154].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[155].value}),(0,e.jsx)("td",{children:r[156].value}),(0,e.jsx)("td",{children:r[157].value}),(0,e.jsx)("td",{children:r[158].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[159].value}),(0,e.jsx)("td",{children:r[160].value}),(0,e.jsx)("td",{children:r[161].value}),(0,e.jsx)("td",{children:r[162].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"disabledtime",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#disabledtime",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DisabledTime"]}),(0,e.jsx)(t.Z,{lang:"typescript",children:r[163].value}),(0,e.jsxs)("h2",{id:"\u65B9\u6CD5",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u65B9\u6CD5"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[164].value}),(0,e.jsx)("th",{children:r[165].value}),(0,e.jsx)("th",{children:r[166].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[167].value}),(0,e.jsx)("td",{children:r[168].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[169].value}),(0,e.jsx)("td",{children:r[170].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h2",{id:"rangepicker",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"RangePicker"]}),(0,e.jsxs)("p",{children:[r[171].value,(0,e.jsx)(c.Z,{to:"/components/date-picker-cn#rangepicker",sourceType:"Link",children:r[172].value}),r[173].value]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[174].value}),(0,e.jsx)("th",{children:r[175].value}),(0,e.jsx)("th",{children:r[176].value}),(0,e.jsx)("th",{children:r[177].value}),(0,e.jsx)("th",{children:r[178].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[179].value}),(0,e.jsx)("td",{children:r[180].value}),(0,e.jsx)("td",{children:(0,e.jsx)(c.Z,{to:"#rangedisabledtime",sourceType:"Link",children:r[181].value})}),(0,e.jsx)("td",{children:r[182].value}),(0,e.jsx)("td",{children:r[183].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[184].value}),(0,e.jsx)("td",{children:r[185].value}),(0,e.jsx)("td",{children:r[186].value}),(0,e.jsx)("td",{children:r[187].value}),(0,e.jsx)("td",{children:r[188].value})]})]})]}),(0,e.jsxs)("h3",{id:"rangedisabledtime",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangedisabledtime",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"RangeDisabledTime"]}),(0,e.jsx)(t.Z,{lang:"typescript",children:r[189].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(o.Z,{component:"DatePicker"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(c.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)(c.Z,{to:"/docs/react/use-custom-date-library#timepicker",sourceType:"Link",children:r[190].value})})})]})]})})}s.default=l}}]);
