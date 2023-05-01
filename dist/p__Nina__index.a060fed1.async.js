"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[725],{8249:function(k,r,n){n.d(r,{Z:function(){return o}});var i={articleContainer:"articleContainer___CCfza"},l=n(33130),s=function(t){return(0,l.jsx)("div",{className:"".concat(i.articleContainer),children:t.children})},o=s},16206:function(k,r,n){var i=n(33130),l=function(o){var m=o.articleList;return(0,i.jsx)(i.Fragment,{children:m.map(function(t,u){return(0,i.jsx)("p",{children:t},u)})})};r.Z=l},10424:function(k,r,n){var i=n(37066),l=n.n(i),s=n(37184),o=n(59245),m=n(68136),t=n(33130),u=function(c){var x=c.text,_=c.question,d=c.prev,A=c.onClick,f=c.onPrevClick,j=(0,m.useState)(""),C=l()(j,2),h=C[0],e=C[1],v=function(){A(h),e("")};return(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"text-2xl text-white mt-16",children:[(0,t.jsxs)("h4",{children:["DM: ",_.dm]}),(0,t.jsxs)("h4",{className:"mt-4",children:["Question: ",_.question]})]})}),(0,t.jsxs)("div",{className:"flex items-center mt-8",children:[d&&(0,t.jsx)(s.ZP,{onClick:f,className:"w-[200px] h-[60px] text-[30px] mt-4",type:"default",children:d}),(0,t.jsx)("div",{className:"flex-1",children:_&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Z,{onInput:function(P){return e(P.target.value)},value:h,className:"h-[60px] text-2xl",placeholder:"\u8BF7\u56DE\u7B54"})})}),x&&(0,t.jsx)(s.ZP,{onClick:v,className:"w-[200px] h-[60px] text-[30px] ml-4",type:"default",children:x})]})]})};r.Z=u},40044:function(k,r,n){n.d(r,{Z:function(){return o}});var i={title:"title___NDfsu"},l=n(33130),s=function(t){var u=t.title,N=t.color;return(0,l.jsx)("h3",{className:i.title,style:{color:N},children:u})},o=s},58528:function(k,r,n){n.d(r,{Z:function(){return m}});var i=n(37066),l=n.n(i),s=n(97502),o=n(78609);function m(t){var u=t.questionList,N=t.partLength,c=t.setPart,x=o.ZP.useMessage(),_=l()(x,2),d=_[0],A=_[1],f=(0,s.useNavigate)(),j=function(h,e){var v;!u[e]||(v=u[e])!==null&&v!==void 0&&v.verify(h)?(window.scrollTo({top:0,behavior:"smooth"}),e<N-1?c(e+1):f("/ending")):d.open({type:"error",content:"\u597D\u50CF\u4E0D\u592A\u5BF9~"})};return{handleNext:j,contextHolder:A}}},85389:function(k,r,n){n.r(r),n.d(r,{default:function(){return p}});var i=n(37066),l=n.n(i),s=n(68136),o=n(8249),m=n(16206),t=n(10424),u=n(40044),N=n(58528),c=5,x=["\u5E8F\u7AE0","\u7B2C\u4E00\u7AE0","\u7B2C\u4E8C\u7AE0","\u7B2C\u4E09\u7AE0","\u7EC8\u7AE0"],_=["\u5F00\u59CB\u8C03\u67E5","\u7EE7\u7EED","\u7EE7\u7EED","\u7EE7\u7EED","\u843D\u5E55"],d=[null,{dm:"\u5148\u548C\u65C1\u8FB9\u7684\u4EBA\u8BA4\u77E5\u4E00\u4E0B\u5427\uFF0C\u7136\u540E\u8F93\u5165\u4E0B\u9762\u8FD9\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u3002",question:" Ninamika \u6F14\u8BB2\u90A3\u5929\u7A7F\u7684\u4EC0\u4E48\u989C\u8272\u7684\u978B\u5B50\uFF1F",verify:function(a){return!!(a!=null&&a.includes("\u9ED1\u8272"))}},{dm:"\u5148\u548C\u65C1\u8FB9\u7684\u4EBA\u804A\u804A\u9AD8\u4E2D\u7684\u6700\u540E\u4E00\u5E74\u5427\uFF0C\u7136\u540E\u8F93\u5165\u4E0B\u9762\u8FD9\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u3002",question:"\u6BD4\u8D5B\u90A3\u5929\uFF0C Ninamika \u7A7F\u7684\u4EC0\u4E48\u989C\u8272\u7684\u5916\u5957\uFF1F",verify:function(a){return!!(a!=null&&a.includes("\u767D\u8272"))}},{dm:"\u5148\u548C\u65C1\u8FB9\u7684\u4EBA\u804A\u804A\u5DE5\u4F5C\u4E4B\u540E\u7684\u4E8B\u60C5\uFF0C\u7136\u540E\u8F93\u5165\u4E0B\u9762\u8FD9\u4E2A\u95EE\u9898\u7684\u7B54\u6848\u3002",question:"\u4F60\u662F\u8C01\uFF1F",verify:function(a){return!!(a!=null&&a.includes("inamika"))}},null],A=[" Ninamika  \u662F\u4E00\u4F4D\u8457\u540D\u7684\u5BFC\u6F14\u548C\u6444\u5F71\u5E08\uFF0C\u4EE5\u5176\u72EC\u7279\u7684\u89C6\u89D2\u548C\u5BA1\u7F8E\uFF0C\u5728\u827A\u672F\u5708\u5185\u540D\u58F0\u5927\u8D6B\u3002","\u5979\u5728\u521B\u4F5C\u4E2D\u8868\u73B0\u51FA\u7684\u8D64\u5FC3\u548C\u751F\u7684\u529B\u91CF\u8BA9\u5979\u7684\u4F5C\u54C1\u5145\u6EE1\u4E86\u5F20\u529B\u548C\u72EC\u7279\u7684\u6C14\u8D28\uFF0C","2007\u5E742\u670824\u65E5\u4E0A\u6620\u7684\u7535\u5F71\u300A\u6076\u5973\u82B1\u9B41\u300B\uFF0C\u4FBF\u662F\u5979\u9996\u6B21\u62C5\u4EFB\u5BFC\u6F14\u7684\u7535\u5F71\u3002","\u5728\u8FD9\u90E8\u7535\u5F71\u4E2D\uFF0C Ninamika \u8868\u73B0\u51FA\u4E86\u5BF9\u4E8E\u5973\u6027\u8EAB\u4F53\u548C\u6B32\u671B\u7684\u63A2\u7D22\uFF0C\u4EE5\u53CA\u5BF9\u4E8E\u4F20\u7EDF\u4E0E\u73B0\u4EE3\u7684\u78B0\u649E\u548C\u4EA4\u878D\u7684\u6DF1\u5165\u601D\u8003\u3002\u8FD9\u90E8\u7535\u5F71\u5927\u83B7\u6210\u529F\uFF0C\u8BA9 Ninamika \u5728\u827A\u672F\u5708\u5185\u58F0\u540D\u5927\u566A\uFF0C\u6210\u4E3A\u4E86\u5907\u53D7\u77A9\u76EE\u7684\u5E74\u8F7B\u5BFC\u6F14\u548C\u6444\u5F71\u5E08\u3002","\u4ECE\u90A3\u65F6\u8D77\uFF0C Ninamika  \u5C31\u4E00\u53D1\u4E0D\u53EF\u6536\u62FE\u5730\u8D70\u4E0A\u4E86\u827A\u672F\u4E4B\u8DEF\u3002\u5979\u7684\u4F5C\u54C1\u4E0D\u65AD\u5730\u63A8\u9648\u51FA\u65B0\uFF0C\u6BCF\u4E00\u90E8\u4F5C\u54C1\u90FD\u5728\u5448\u73B0\u51FA\u5979\u72EC\u7279\u7684\u89C6\u89D2\u548C\u5BA1\u7F8E\u3002\u5979\u7684\u7167\u7247\u548C\u7535\u5F71\u4F5C\u54C1\u5F15\u9886\u4E86\u4E00\u4E2A\u65F6\u4EE3\u7684\u827A\u672F\u6F6E\u6D41\uFF0C\u6DF1\u53D7\u5E74\u8F7B\u4E00\u4EE3\u7684\u8FFD\u6367\u548C\u559C\u7231\u3002"," Ninamika  \u7684\u4F5C\u54C1\u5145\u6EE1\u4E86\u5BF9\u4E8E\u7F8E\u548C\u6B8B\u9177\u7684\u8FFD\u6C42\u3002\u5979\u70ED\u7231\u7528\u955C\u5934\u8BB0\u5F55\u90A3\u4E9B\u88AB\u5FFD\u7565\u548C\u88AB\u9057\u5FD8\u7684\u7F8E\u4E3D\u77AC\u95F4\uFF0C\u4E5F\u540C\u6837\u559C\u6B22\u7528\u81EA\u5DF1\u7684\u521B\u4F5C\u8868\u8FBE\u51FA\u5BF9\u4E8E\u793E\u4F1A\u548C\u4EBA\u6027\u7684\u5173\u6CE8\u548C\u53CD\u601D\u3002\u5979\u6DF1\u4FE1\u827A\u672F\u662F\u53EF\u4EE5\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF\uFF0C\u6240\u4EE5\u5979\u6BCF\u4E00\u6B21\u7684\u521B\u4F5C\u90FD\u8574\u542B\u7740\u5979\u5BF9\u4E8E\u4E16\u754C\u7684\u8D64\u5FC3\u548C\u6267\u7740\u3002","\u9664\u4E86\u4F5C\u54C1\u7684\u9AD8\u8D28\u91CF\u548C\u72EC\u7279\u6027\uFF0C Ninamika \u7684\u4F5C\u54C1\u4E5F\u56E0\u5176\u72EC\u7279\u7684\u5BA1\u7F8E\u98CE\u683C\u548C\u72EC\u7ACB\u601D\u60F3\u800C\u5907\u53D7\u8D5E\u8A89\u3002\u5979\u7684\u4F5C\u54C1\u4E2D\u8574\u542B\u7740\u5979\u5BF9\u4E8E\u7F8E\u4E0E\u6B8B\u9177\u7684\u6DF1\u5165\u63A2\u7D22\u548C\u5BF9\u4EBA\u6027\u7684\u601D\u8003\u3002\u8FD9\u4E9B\u6DF1\u523B\u7684\u601D\u8003\u548C\u72EC\u7279\u7684\u89C6\u89D2\u4F7F\u5F97\u5979\u7684\u4F5C\u54C1\u5728\u827A\u672F\u754C\u5185\u5907\u53D7\u63A8\u5D07\u548C\u8D5E\u8A89\uFF0C\u540C\u65F6\u4E5F\u5728\u666E\u901A\u89C2\u4F17\u4E2D\u83B7\u5F97\u4E86\u5F88\u9AD8\u7684\u8BC4\u4EF7\u548C\u8BA4\u53EF\u3002","\u5C3D\u7BA1 Ninamika \u7684\u4F5C\u54C1\u5145\u6EE1\u4E86\u521B\u9020\u529B\u548C\u72EC\u7279\u6027\uFF0C\u4F46\u5979\u59CB\u7EC8\u4FDD\u6301\u7740\u5BF9\u4E8E\u81EA\u6211\u548C\u4F5C\u54C1\u7684\u6279\u5224\u548C\u63A2\u7D22\u3002\u5979\u7684\u597D\u5947\u5FC3\u548C\u5BF9\u4E8E\u672A\u77E5\u7684\u6E34\u671B\u4FC3\u4F7F\u5979\u4E0D\u65AD\u5730\u5C1D\u8BD5\u65B0\u7684\u521B\u4F5C\u65B9\u5F0F\u548C\u98CE\u683C\u3002\u8FD9\u79CD\u6279\u5224\u548C\u63A2\u7D22\u4E5F\u4E3A\u5979\u5728\u827A\u672F\u9053\u8DEF\u4E0A\u4FDD\u6301\u4E86\u6301\u7EED\u7684\u521B\u65B0\u548C\u6210\u957F\u3002","\u76F4\u52302023\u5E74\u76845\u670812\u65E5\uFF0C Ninamika  \u7A81\u7136\u5C31\u4ECE\u516C\u4F17\u7684\u89C6\u7EBF\u91CC\u9762\u6D88\u5931\u4E86\uFF0C\u4E0D\u7BA1\u662F\u7EBF\u4E0A\u8FD8\u662F\u7EBF\u4E0B\u90FD\u6CA1\u6709\u4E86 Ninamika \u7684\u8EAB\u5F71\uFF0C\u6CA1\u6709\u4EBA\u77E5\u9053\u5979\u53BB\u4E86\u54EA\u91CC\u3002","\u8FD9\u4E2A\u6D88\u606F\u5F88\u5FEB\u5C31\u4F20\u904D\u4E86\u6574\u4E2A\u827A\u672F\u5708\uFF0C\u5927\u5BB6\u90FD\u5728\u7EB7\u7EB7\u731C\u6D4B Ninamika \u7684\u53BB\u5411\uFF0C\u6709\u4EBA\u8BA4\u4E3A\u5979\u53EF\u80FD\u662F\u5728\u521B\u4F5C\u65B0\u4F5C\u54C1\uFF0C\u6709\u4EBA\u5219\u8BA4\u4E3A\u5979\u53EA\u662F\u60F3\u8FC7\u4E00\u6BB5\u9690\u5C45\u751F\u6D3B\u3002\u4F46\u662F\uFF0C\u6CA1\u6709\u4EBA\u80FD\u591F\u8BC1\u5B9E\u8FD9\u4E9B\u731C\u6D4B\u7684\u6B63\u786E\u6027\u3002","\u7136\u800C\uFF0C\u5728 Ninamika \u6D88\u5931\u4E4B\u540E\u4E0D\u4E45\uFF0C\u4EBA\u4EEC\u5F00\u59CB\u9646\u7EED\u53D1\u73B0\u4E86\u4E00\u4E9B\u5979\u7684\u4F5C\u54C1\u548C\u7559\u8A00\u3002\u8FD9\u4E9B\u4F5C\u54C1\u548C\u7559\u8A00\u5145\u6EE1\u4E86\u4E00\u79CD\u6DF1\u6DF1\u7684\u5BD3\u610F\u548C\u8B66\u793A\uFF0C\u5B83\u4EEC\u8BA9\u4EBA\u4EEC\u5F00\u59CB\u91CD\u65B0\u601D\u8003\u548C\u5173\u6CE8\u8D77\u4E86\u4E00\u4E9B\u88AB\u5FFD\u89C6\u7684\u95EE\u9898\u548C\u73B0\u5B9E\u3002\u8FD9\u4E9B\u4F5C\u54C1\u548C\u7559\u8A00\u7684\u98CE\u683C\u548C\u4E3B\u9898\u4E0E\u4EE5\u5F80 Ninamika \u7684\u521B\u4F5C\u6709\u4E9B\u4E0D\u540C\uFF0C\u5B83\u4EEC\u66F4\u52A0\u76F4\u63A5\u3001\u51B7\u9759\uFF0C\u540C\u65F6\u4E5F\u66F4\u52A0\u5145\u6EE1\u4E86\u5BF9\u4E8E\u73B0\u5B9E\u7684\u6279\u5224\u548C\u5173\u6000\u3002","\u8FD9\u4E9B\u4F5C\u54C1\u548C\u7559\u8A00\u7684\u51FA\u73B0\u5F15\u8D77\u4E86\u5E7F\u6CDB\u7684\u8BA8\u8BBA\u548C\u53CD\u54CD\uFF0C\u4EBA\u4EEC\u5F00\u59CB\u91CD\u65B0\u5BA1\u89C6 Ninamika \u7684\u521B\u4F5C\u548C\u5185\u5FC3\u4E16\u754C\uFF0C\u4E5F\u5F00\u59CB\u5C1D\u8BD5\u7406\u89E3\u548C\u63A5\u7EB3\u5979\u79C1\u4EBA\u7684\u90A3\u4E00\u9762\u3002\u540C\u65F6\uFF0C\u4E5F\u6709\u4E00\u4E9B\u4EBA\u5F00\u59CB\u5C1D\u8BD5\u5BFB\u627E Ninamika \u7684\u8E2A\u8FF9\uFF0C\u60F3\u8981\u5F04\u6E05\u695A\u5979\u7A76\u7ADF\u53BB\u4E86\u54EA\u91CC\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u7A81\u7136\u6D88\u5931\u3002","\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E9B\u4EBA\u5F00\u59CB\u8054\u5408\u8D77\u6765\uFF0C\u7EC4\u6210\u4E86\u4E00\u4E2A\u5C0F\u56E2\u961F\uFF0C\u8BD5\u56FE\u901A\u8FC7\u8C03\u67E5\u548C\u7814\u7A76\uFF0C\u63ED\u5F00 Ninamika \u6D88\u5931\u7684\u8C1C\u56E2\uFF0C\u5E76\u7406\u89E3\u5979\u7684\u521B\u4F5C\u548C\u601D\u60F3\u3002\u800C\u5728\u8FD9\u4E2A\u5C0F\u56E2\u961F\u4E2D\uFF0C\u5C31\u6709\u4E00\u4E2A\u4EBA\uFF0C\u5979\u80FD\u591F\u6DF1\u523B\u5730\u7406\u89E3\u548C\u611F\u53D7 Ninamika \u7684\u521B\u4F5C\u548C\u5185\u5FC3\u4E16\u754C\uFF0C\u5979\u5C31\u662F\u4F60\u2014\u2014\u97E9\u8587\u5A1C\u3002"],f=["\u6211\u51FA\u751F\u5728\u4E00\u4E2A\u827A\u672F\u4E16\u5BB6\uFF0C\u6211\u7684\u7236\u6BCD\u90FD\u662F\u4ECE\u4E8B\u7535\u5F71\u548C\u6587\u5B66\u521B\u4F5C\u7684\u827A\u672F\u5BB6\uFF0C\u5BB6\u4E2D\u9664\u4E86\u7236\u6BCD\u548C\u6211\u4E4B\u5916\uFF0C\u6211\u8FD8\u6709\u4E00\u4E2A\u59D0\u59D0\u3002","\u4ECE\u5C0F\uFF0C\u6211\u5C31\u5BF9\u827A\u672F\u5145\u6EE1\u4E86\u597D\u5947\u548C\u70ED\u7231\u3002\u6211\u5728\u5BB6\u4E2D\u7684\u4E66\u623F\u91CC\u5EA6\u8FC7\u4E86\u5927\u90E8\u5206\u7684\u7AE5\u5E74\u65F6\u5149\uFF0C\u7ECF\u5E38\u7FFB\u9605\u7236\u6BCD\u7684\u4E66\u7C4D\uFF0C\u6216\u8005\u5728\u7236\u4EB2\u7684\u5DE5\u4F5C\u5BA4\u91CC\u770B\u4ED6\u8FDB\u884C\u62CD\u6444\u548C\u540E\u671F\u5236\u4F5C\u3002\u5728\u6211\u7684\u773C\u4E2D\uFF0C\u7236\u4EB2\u7684\u7535\u5F71\u4F5C\u54C1\u5145\u6EE1\u4E86\u795E\u79D8\u548C\u521B\u610F\uFF0C\u6BCD\u4EB2\u7684\u5C0F\u8BF4\u5219\u5145\u6EE1\u4E86\u60C5\u611F\u548C\u5185\u6DB5\uFF0C\u8FD9\u4E9B\u8BA9\u6211\u5BF9\u827A\u672F\u4EA7\u751F\u4E86\u66F4\u6DF1\u523B\u7684\u7406\u89E3\u548C\u8BA4\u8BC6\u3002","\u6211\u5728\u5C0F\u5B66\u65F6\u671F\u5C31\u5C55\u73B0\u51FA\u4E86\u827A\u672F\u5929\u8D4B\uFF0C\u5728\u7ED8\u753B\u548C\u97F3\u4E50\u65B9\u9762\u90FD\u8868\u73B0\u51FA\u8272\uFF0C\u7ECF\u5E38\u5728\u5B66\u6821\u7684\u6587\u827A\u6C47\u6F14\u4E2D\u62C5\u4EFB\u4E3B\u89D2\u3002\u5728\u6211\u7684\u52AA\u529B\u4E0B\uFF0C\u6211\u7684\u624D\u534E\u4E5F\u5F97\u5230\u4E86\u7236\u6BCD\u7684\u8BA4\u53EF\u548C\u652F\u6301\uFF0C\u4ED6\u4EEC\u4E3A\u6211\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u5B66\u4E60\u673A\u4F1A\u548C\u8D44\u6E90\u3002","\u4F46\u662F\uFF0C\u8FD9\u79CD\u770B\u4F3C\u7F8E\u597D\u7684\u751F\u6D3B\u5E76\u4E0D\u662F\u5B8C\u7F8E\u65E0\u7F3A\u7684\u3002\u5728\u6211\u6210\u957F\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7236\u6BCD\u7684\u5DE5\u4F5C\u538B\u529B\u5F88\u5927\uFF0C\u7ECF\u5E38\u5FD9\u788C\u5230\u6DF1\u591C\uFF0C\u5F88\u5C11\u6709\u65F6\u95F4\u966A\u4F34\u6211\u3002\u8FD9\u8BA9\u6211\u7684\u5185\u5FC3\u4EA7\u751F\u4E86\u5B64\u72EC\u548C\u4E0D\u5B89\uFF0C\u6211\u5F00\u59CB\u9010\u6E10\u8FF7\u5931\u81EA\u5DF1\uFF0C\u4E0D\u77E5\u9053\u81EA\u5DF1\u771F\u6B63\u60F3\u8981\u7684\u662F\u4EC0\u4E48\u3002","\u5230\u4E86\u9AD8\u4E2D\u65F6\u671F\uFF0C\u6211\u9010\u6E10\u8D70\u5411\u4E86\u4E00\u4E2A\u5173\u952E\u7684\u5341\u5B57\u8DEF\u53E3\u3002","-----","\u6211\u8BB0\u5F97\u5F88\u6E05\u695A\uFF0C\u90A3\u5929\u662F1990\u5E74\u768410\u670818\u65E5\uFF0C\u662F\u621118\u5C81\u7684\u751F\u65E5\uFF0C\u90A3\u5929\u5929\u6C14\u5341\u5206\u7684\u597D\u3002","\u6211\u7684\u7236\u4EB2\u9080\u8BF7\u4E86\u4E00\u4F4D\u8457\u540D\u7684\u5BFC\u6F14\u6765\u7ED9\u6211\u4EEC\u73ED\u505A\u6F14\u8BB2\uFF0C\u8FD9\u4F4D\u5BFC\u6F14\u5C31\u662F Ninamika \u3002","\u5728\u542C\u5230\u5979\u7684\u540D\u5B57\u4E4B\u524D\uFF0C\u6211\u5BF9\u5BFC\u6F14\u8FD9\u4E2A\u804C\u4E1A\u5E76\u6CA1\u6709\u592A\u591A\u4E86\u89E3\uFF0C\u53EA\u77E5\u9053\u81EA\u5DF1\u5BF9\u7535\u5F71\u548C\u827A\u672F\u6709\u7740\u6D53\u539A\u7684\u5174\u8DA3\u3002","\u201C Ninamika \u7684\u6F14\u8BB2\u5F00\u59CB\u4E86\uFF0C\u5979\u9996\u5148\u5206\u4EAB\u4E86\u81EA\u5DF1\u7684\u521B\u4F5C\u7ECF\u9A8C\uFF0C\u63CF\u8FF0\u4E86\u81EA\u5DF1\u5BFC\u6F14\u7684\u7B2C\u4E00\u90E8\u7535\u5F71\u662F\u5982\u4F55\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u60F3\u6CD5\u5F00\u59CB\u6162\u6162\u53D8\u6210\u4E86\u4E00\u90E8\u6210\u529F\u7684\u4F5C\u54C1\u7684\u3002\u5979\u8FD8\u8BB2\u8FF0\u4E86\u81EA\u5DF1\u5728\u7535\u5F71\u5236\u4F5C\u4E2D\u9047\u5230\u7684\u56F0\u96BE\u548C\u6311\u6218\uFF0C\u4EE5\u53CA\u5982\u4F55\u514B\u670D\u8FD9\u4E9B\u56F0\u96BE\u3002","\u63A5\u4E0B\u6765\uFF0C Ninamika \u5F00\u59CB\u8C08\u8BBA\u827A\u672F\u7684\u610F\u4E49\u548C\u4EF7\u503C\u3002\u5979\u8BF4\uFF0C\u827A\u672F\u4E0D\u4EC5\u662F\u4E00\u79CD\u8868\u8FBE\uFF0C\u66F4\u662F\u4E00\u79CD\u601D\u60F3\u548C\u7406\u5FF5\u7684\u4F20\u9012\u3002","\u5979\u8BF4\uFF0C\u4E00\u4E2A\u597D\u7684\u4F5C\u54C1\u4E0D\u4EC5\u8981\u8868\u73B0\u51FA\u4F5C\u8005\u7684\u4E2A\u4EBA\u60C5\u611F\u548C\u601D\u60F3\uFF0C\u66F4\u8981\u5BF9\u793E\u4F1A\u548C\u4E16\u754C\u6709\u7740\u6DF1\u523B\u7684\u6D1E\u89C1\u548C\u53CD\u601D\u3002","\u5728\u6F14\u8BB2\u7684\u6700\u540E\uFF0C Ninamika \u9F13\u52B1\u6211\u4EEC\u5927\u5BB6\u8981\u8FFD\u6C42\u81EA\u5DF1\u7684\u68A6\u60F3\uFF0C\u5E76\u4E14\u8981\u4E3A\u6B64\u800C\u52AA\u529B\u3002","\u5979\u8BF4\uFF0C\u4EBA\u751F\u5C31\u50CF\u662F\u4E00\u573A\u5192\u9669\uFF0C\u6211\u4EEC\u5FC5\u987B\u52C7\u6562\u5730\u9762\u5BF9\u6BCF\u4E00\u4E2A\u6311\u6218\u548C\u673A\u4F1A\u3002","\u613F\u4F60\u4EEC\u70BD\u70C8\u53C8\u8D64\u5FC3\u5730\u627E\u5BFB\u751F\u7684\u529B\u91CF\u201D","\u542C\u5B8C\u4E86 Ninamika \u7684\u6F14\u8BB2\uFF0C\u6211\u6DF1\u6DF1\u88AB\u5979\u7684\u72EC\u7279\u89C6\u89D2\u548C\u5BA1\u7F8E\u6240\u5438\u5F15\u3002","\u5979\u7684\u8BDD\u8BED\u8BA9\u6211\u91CD\u65B0\u5BA1\u89C6\u4E86\u81EA\u5DF1\u5BF9\u4E8E\u827A\u672F\u7684\u7406\u89E3\uFF0C\u4E5F\u8BA9\u6211\u5F00\u59CB\u601D\u8003\u81EA\u5DF1\u7684\u672A\u6765\u65B9\u5411\u3002","\u90A3\u573A\u6F14\u8BB2\u662F\u6211\u751F\u547D\u4E2D\u7684\u4E00\u4E2A\u8F6C\u6298\u70B9\uFF0C\u5B83\u6FC0\u52B1\u7740\u6211\u4E0D\u65AD\u8FFD\u6C42\u81EA\u5DF1\u7684\u68A6\u60F3\uFF0C\u4ECE\u6B64\u4E4B\u540E\uFF0C\u6211\u51B3\u5B9A\u8981\u8DDF\u968F\u81EA\u5DF1\u7684\u5185\u5FC3\uFF0C\u8FFD\u6C42\u81EA\u5DF1\u7684\u68A6\u60F3\uFF0C\u6210\u4E3A\u4E00\u540D\u5BFC\u6F14\u548C\u827A\u672F\u5BB6\u3002"],j=["\u6211\u7684\u9AD8\u4E2D\u65F6\u671F\u662F\u6211\u4EBA\u751F\u7684\u4E00\u4E2A\u5173\u952E\u65F6\u671F\u3002\u5728\u90A3\u4E2A\u6F14\u8BB2\u4E4B\u540E\uFF0C\u6211\u5F00\u59CB\u5BF9\u81EA\u5DF1\u7684\u672A\u6765\u4EA7\u751F\u4E86\u66F4\u591A\u7684\u601D\u8003\u548C\u7591\u95EE\u3002\u6211\u5BF9\u5BFC\u6F14\u7684\u8BDD\u4EA7\u751F\u4E86\u5F88\u6DF1\u7684\u5171\u9E23\uFF0C\u90A3\u4E2A\u8BB2\u53F0\u4E0A\u7684\u5973\u4EBA\u8BA9\u6211\u611F\u5230\u4E86\u4E00\u79CD\u524D\u6240\u672A\u6709\u7684\u51B2\u52A8\u548C\u52C7\u6C14\u3002","\u5728\u90A3\u4E2A\u6F14\u8BB2\u540E\u7684\u51E0\u5929\u91CC\uFF0C\u6211\u5F00\u59CB\u72EC\u7ACB\u601D\u8003\u81EA\u5DF1\u7684\u4EBA\u751F\u548C\u672A\u6765\u3002\u6211\u53D1\u73B0\u81EA\u5DF1\u5BF9\u827A\u672F\u6709\u7740\u6781\u5927\u7684\u5174\u8DA3\u548C\u5929\u8D4B\uFF0C\u4F46\u662F\u6211\u4E5F\u610F\u8BC6\u5230\u81EA\u5DF1\u8EAB\u5904\u7684\u793E\u4F1A\u73AF\u5883\u5E76\u4E0D\u662F\u5F88\u652F\u6301\u6211\u8FFD\u6C42\u827A\u672F\u7684\u68A6\u60F3\u3002","\u5C3D\u7BA1\u5982\u6B64\uFF0C\u6211\u51B3\u5B9A\u52C7\u6562\u5730\u5411\u524D\u8FC8\u51FA\u4E00\u6B65\u3002\u6211\u5F00\u59CB\u82B1\u8D39\u66F4\u591A\u7684\u65F6\u95F4\u5728\u827A\u672F\u4E0A\uFF0C\u53C2\u52A0\u4E00\u4E9B\u753B\u753B\u3001\u8BBE\u8BA1\u7B49\u76F8\u5173\u7684\u8BFE\u7A0B\u548C\u6D3B\u52A8\u3002\u6211\u7684\u7236\u6BCD\u5E76\u4E0D\u662F\u5F88\u652F\u6301\u6211\u7684\u8FD9\u4E2A\u51B3\u5B9A\uFF0C\u4F46\u6211\u575A\u5B9A\u5730\u76F8\u4FE1\u81EA\u5DF1\u7684\u9009\u62E9\u662F\u6B63\u786E\u7684\u3002","\u5728\u9AD8\u4E2D\u6700\u540E\u4E00\u5E74\uFF0C\u6211\u53C2\u52A0\u4E86\u4E00\u573A\u5173\u4E8E\u73AF\u5883\u4FDD\u62A4\u7684\u6BD4\u8D5B\uFF0C\u6211\u9009\u62E9\u4E86\u4E00\u4E2A\u975E\u5E38\u6709\u521B\u610F\u7684\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u6211\u7684\u4F5C\u54C1\u5C55\u793A\u4E86\u5BF9\u81EA\u7136\u7684\u70ED\u7231\u548C\u4FDD\u62A4\u3002","-----","\u8FD9\u662F\u5728\u6211\u9AD8\u4E2D\u65F6\u671F\u7684\u4E00\u4E2A\u73AF\u5883\u4FDD\u62A4\u6BD4\u8D5B\uFF0C\u6BD4\u8D5B\u7684\u4E3B\u9898\u662F\u201C\u521B\u610F\u73AF\u4FDD\uFF0C\u5171\u5EFA\u7F8E\u597D\u5BB6\u56ED\u201D\u3002","\u800C Ninamika \u90A3\u5929\u5C31\u5750\u5728\u8BC4\u59D4\u5E2D\u3002","\u6BD4\u8D5B\u5F53\u5929\uFF0C\u5929\u6C14\u6674\u6717\uFF0C\u9633\u5149\u660E\u5A9A\uFF0C\u573A\u5730\u8BBE\u7F6E\u5728\u5B66\u6821\u7684\u64CD\u573A\u4E0A\uFF0C\u4E00\u5171\u670912\u652F\u53C2\u8D5B\u7684\u961F\u4F0D\u3002","\u53C2\u8D5B\u8005\u4EEC\u5728\u64CD\u573A\u4E0A\u6446\u653E\u7740\u81EA\u5DF1\u7684\u521B\u610F\u73AF\u4FDD\u4F5C\u54C1\uFF0C\u6709\u7684\u662F\u7528\u5E9F\u65E7\u7269\u54C1\u5236\u4F5C\u7684\u827A\u672F\u54C1\uFF0C\u6709\u7684\u662F\u5173\u4E8E\u5783\u573E\u5206\u7C7B\u7684\u5BA3\u4F20\u6D77\u62A5\uFF0C\u8FD8\u6709\u7684\u662F\u5229\u7528\u81EA\u7136\u80FD\u6E90\u7684\u53D1\u660E\u521B\u9020\u3002","\u5F53\u6211\u8D70\u4E0A\u8BB2\u53F0\uFF0C\u770B\u5230 Ninamika \u5750\u5728\u8BC4\u59D4\u5E2D\u4E0A\uFF0C\u5FC3\u4E2D\u66F4\u52A0\u6FC0\u52A8\u548C\u7D27\u5F20\u3002\u4F46\u6211\u8FD8\u662F\u52AA\u529B\u5730\u514B\u5236\u4F4F\u81EA\u5DF1\u7684\u60C5\u7EEA\uFF0C\u5F00\u59CB\u5C55\u793A\u6211\u7684\u73AF\u4FDD\u7406\u5FF5\u548C\u6240\u505A\u7684\u884C\u52A8\u3002","\u6211\u7684\u6F14\u8BB2\u5185\u5BB9\u5F88\u5145\u5B9E\uFF0C\u5305\u62EC\u4E86\u5BF9\u73AF\u5883\u6C61\u67D3\u95EE\u9898\u7684\u8BA4\u8BC6\u548C\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u53CA\u6211\u81EA\u5DF1\u548C\u56E2\u961F\u6240\u53C2\u4E0E\u7684\u73AF\u4FDD\u884C\u52A8\u548C\u6210\u679C\u3002\u5C55\u793A\u6750\u6599\u4E5F\u975E\u5E38\u4E30\u5BCC\uFF0C\u5305\u62EC\u4E86\u7167\u7247\u3001\u56FE\u8868\u3001\u5B9E\u7269\u7B49\u7B49\uFF0C\u8BA9\u4EBA\u4E00\u76EE\u4E86\u7136\u3002"," Ninamika \u8BA4\u771F\u5730\u542C\u7740\u6BCF\u4E00\u4E2A\u53C2\u8D5B\u8005\u7684\u6F14\u8BB2\uFF0C\u4F46\u5F53\u6211\u4E0A\u53F0\u65F6\uFF0C\u6211\u7684\u76EE\u5149\u4F3C\u4E4E\u683C\u5916\u6CE8\u89C6\u7740\u6211\uFF0C\u8FD9\u8BA9\u6211\u66F4\u52A0\u6FC0\u52A8\u548C\u7D27\u5F20\u3002","\u6F14\u8BB2\u7ED3\u675F\u540E\uFF0C\u8BC4\u59D4\u4EEC\u5F00\u59CB\u8BC4\u9009\u83B7\u80DC\u8005\uFF0C\u6211\u5FC3\u4E2D\u4E00\u76F4\u5728\u7D27\u5F20\u5730\u7B49\u5F85\u7740\u7ED3\u679C\u3002\u6700\u7EC8\uFF0C\u5F53\u4E3B\u6301\u4EBA\u5BA3\u5E03\u6211\u662F\u6BD4\u8D5B\u7684\u51A0\u519B\u65F6\uFF0C\u6211\u6FC0\u52A8\u5F97\u51E0\u4E4E\u8981\u54ED\u51FA\u6765\u4E86\u3002","\u6211\u8D70\u4E0B\u8BB2\u53F0\uFF0C\u770B\u5230 Ninamika \u4E5F\u7AD9\u4E86\u8D77\u6765\uFF0C\u671D\u6211\u5FAE\u7B11\u7740\u70B9\u5934\uFF0C\u8FD9\u8BA9\u6211\u611F\u5230\u683C\u5916\u7684\u8363\u8000\u548C\u9F13\u821E\u3002\u6211\u611F\u8C22\u8BC4\u59D4\u4EEC\u7684\u80AF\u5B9A\uFF0C\u4F46\u66F4\u611F\u8C22 Ninamika \u7ED9\u6211\u5E26\u6765\u7684\u52A8\u529B\u548C\u652F\u6301\u3002"],C=["\u6211\u53C2\u52A0\u5DE5\u4F5C\u540E\uFF0C\u5F00\u59CB\u5C1D\u8BD5\u5BFC\u6F14\u548C\u6444\u5F71\u7684\u5DE5\u4F5C\uFF0C\u5E76\u51ED\u501F\u7740\u72EC\u7279\u7684\u89C6\u89D2\u548C\u654F\u9510\u7684\u5BA1\u7F8E\u80FD\u529B\u83B7\u5F97\u4E86\u5E7F\u6CDB\u8D5E\u8A89\u3002","\u6211\u62CD\u6444\u7684\u7535\u5F71\u3001\u7EAA\u5F55\u7247\u548C\u7167\u7247\u5E38\u5E38\u5E26\u6709\u5F3A\u70C8\u7684\u73B0\u5B9E\u4E3B\u4E49\u548C\u793E\u4F1A\u6279\u5224\u7684\u8272\u5F69\uFF0C\u5F15\u53D1\u4E86\u8BB8\u591A\u4EBA\u7684\u5171\u9E23\u548C\u53CD\u601D\u3002","\u5728\u6211\u7684\u4F5C\u54C1\u4E2D\uFF0C\u7ECF\u5E38\u51FA\u73B0\u4E00\u4E9B\u88AB\u5FFD\u7565\u6216\u88AB\u5FD8\u8BB0\u7684\u4EBA\u548C\u4E8B\uFF0C\u5982\u8FB9\u7F18\u5316\u7684\u793E\u7FA4\u3001\u8D2B\u56F0\u4EBA\u53E3\u3001\u81EA\u7136\u707E\u5BB3\u7B49\uFF0C\u6211\u7528\u955C\u5934\u8BB0\u5F55\u4E0B\u8FD9\u4E9B\u4EBA\u548C\u4E8B\uFF0C\u8BA9\u4EBA\u4EEC\u91CD\u65B0\u5173\u6CE8\u4ED6\u4EEC\u7684\u5B58\u5728\u548C\u56F0\u5883\u3002\u540C\u65F6\uFF0C\u6211\u7684\u4F5C\u54C1\u4E5F\u5C55\u73B0\u51FA\u4E86\u6211\u5BF9\u4E8E\u7F8E\u7684\u72EC\u7279\u89C1\u89E3\u548C\u611F\u77E5\uFF0C\u8BA9\u4EBA\u4EEC\u770B\u5230\u4E86\u4E16\u754C\u7684\u591A\u6837\u6027\u548C\u7F8E\u597D\u3002","\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u6211\u7684\u4F5C\u54C1\u8D8A\u6765\u8D8A\u53D7\u5230\u4E1A\u5185\u4EBA\u58EB\u548C\u516C\u4F17\u7684\u5173\u6CE8\u548C\u8BA4\u53EF\u3002\u6211\u83B7\u5F97\u4E86\u591A\u4E2A\u56FD\u5185\u5916\u7684\u5956\u9879\u548C\u8363\u8A89\uFF0C\u6210\u4E3A\u4E86\u5F53\u4EE3\u4E2D\u56FD\u827A\u672F\u754C\u7684\u4EE3\u8868\u4EBA\u7269\u4E4B\u4E00\u3002\u540C\u65F6\uFF0C\u6211\u4E5F\u79EF\u6781\u53C2\u4E0E\u516C\u76CA\u4E8B\u4E1A\u548C\u793E\u4F1A\u6D3B\u52A8\uFF0C\u4E3A\u5F31\u52BF\u7FA4\u4F53\u53D1\u58F0\uFF0C\u63A8\u52A8\u793E\u4F1A\u8FDB\u6B65\u548C\u53D1\u5C55\u3002","\u6700\u7EC8\uFF0C\u6211\u7528\u6211\u7684\u624D\u534E\u548C\u52AA\u529B\uFF0C\u5728\u827A\u672F\u548C\u793E\u4F1A\u4E0A\u90FD\u53D6\u5F97\u4E86\u5DE8\u5927\u7684\u6210\u5C31\u548C\u5F71\u54CD\uFF0C\u6210\u4E3A\u4E86\u4EBA\u4EEC\u5FC3\u76EE\u4E2D\u7684\u827A\u672F\u5DE8\u5320\u548C\u793E\u4F1A\u9886\u8896\u3002","\u968F\u7740\u6211\u7684\u6210\u540D\uFF0C\u6211\u548C Ninamika \u4E5F\u9010\u6E10\u5F00\u59CB\u6709\u4E86\u66F4\u591A\u7684\u4EA4\u96C6\u3002 Ninamika \u5BF9\u6211\u7684\u521B\u4F5C\u4EA7\u751F\u4E86\u6D53\u539A\u7684\u5174\u8DA3\uFF0C\u5E76\u5E0C\u671B\u80FD\u591F\u548C\u6211\u5408\u4F5C\uFF0C\u5171\u540C\u521B\u4F5C\u4E00\u90E8\u5177\u6709\u6DF1\u523B\u601D\u60F3\u548C\u5185\u6DB5\u7684\u7535\u5F71\u3002","\u5728\u4E00\u6B21\u665A\u5BB4\u4E0A\uFF0C Ninamika \u548C\u6211\u89C1\u4E86\u9762\u3002\u6211\u518D\u6B21\u611F\u53D7\u5230\u4E86 Ninamika \u7684\u795E\u79D8\u548C\u8D85\u51E1\u7684\u6C14\u8D28\uFF0C\u540C\u65F6\u4E5F\u88AB\u5979\u6DF1\u9083\u7684\u76EE\u5149\u6240\u5438\u5F15\u3002\u5728\u63A5\u4E0B\u6765\u7684\u65E5\u5B50\u91CC\uFF0C\u6211\u4EEC\u4E24\u4EBA\u5F00\u59CB\u9891\u7E41\u5730\u4EA4\u6D41\uFF0C\u5E76\u51B3\u5B9A\u5408\u4F5C\u62CD\u6444\u4E00\u90E8\u7535\u5F71\u3002","\u8FD9\u90E8\u7535\u5F71\u4E0D\u540C\u4E8E\u4EE5\u5F80\u7684\u5546\u4E1A\u4F5C\u54C1\uFF0C\u66F4\u591A\u5730\u8868\u8FBE\u4E86\u5973\u6027\u81EA\u4E3B\u4E0E\u53CD\u6297\u7684\u4E3B\u9898\u3002","\u5F71\u7247\u8BB2\u8FF0\u4E86\u4E00\u4F4D\u5973\u5B50\u5728\u7537\u6743\u793E\u4F1A\u4E2D\u53CD\u6297\u7684\u6545\u4E8B\uFF0C\u5F3A\u8C03\u4E86\u5973\u6027\u7684\u81EA\u7531\u548C\u72EC\u7ACB\uFF0C\u540C\u65F6\u4E5F\u63A2\u8BA8\u4E86\u6027\u522B\u6B67\u89C6\u3001\u6743\u529B\u6597\u4E89\u548C\u4EBA\u6027\u7684\u590D\u6742\u6027\u3002"," Ninamika \u7684\u60F3\u8C61\u529B\u548C\u521B\u610F\u4E3A\u7535\u5F71\u6CE8\u5165\u4E86\u795E\u79D8\u548C\u54F2\u5B66\u7684\u6C14\u606F\uFF0C\u800C\u6211\u7684\u6280\u827A\u548C\u8868\u73B0\u5219\u8BA9\u7535\u5F71\u66F4\u52A0\u5B8C\u7F8E\u3002","\u6700\u7EC8\uFF0C\u8FD9\u90E8\u7535\u5F71\u6210\u4E3A\u4E86\u4E00\u90E8\u827A\u672F\u4F73\u4F5C\uFF0C\u53D7\u5230\u4E86\u5E7F\u6CDB\u7684\u8D5E\u8A89\u548C\u80AF\u5B9A\u3002\u800C\u6211\u548C Ninamika \u4E5F\u56E0\u4E3A\u8FD9\u6B21\u5408\u4F5C\u5EFA\u7ACB\u4E86\u6DF1\u539A\u7684\u53CB\u8C0A\uFF0C\u5E76\u5728\u5F7C\u6B64\u7684\u4EBA\u751F\u4E2D\u7559\u4E0B\u4E86\u96BE\u4EE5\u78E8\u706D\u7684\u5370\u8BB0\u3002"],h=[" Ninamika  \u771F\u540D\u53EB\u8737\u5DDD\u5B9E\u82B1","1972\u5E7410\u670818\u65E5\u51FA\u751F","\u8737\u5DDD\u662F\u6F14\u5458\u517C\u5BFC\u6F14\u8737\u5DDD\u5E78\u96C4\u7684\u957F\u5973\uFF0C\u6BCD\u4EB2\u4E3A\u4F5C\u5BB6\u771F\u5C71\u77E5\u5B50\u3001\u5802\u59D0\u662F\u821E\u53F0\u5267\u5973\u6F14\u5458\u8737\u5DDD\u6709\u7EAA\u4EE5\u53CA\u8737\u5DDD\u7F8E\u7A57\u3001\u5802\u5F1F\u662F\u6784\u6210\u4F5C\u5BB6\uFF08\u5373\u7535\u89C6\u7F16\u5267\uFF09\u6A2A\u4E95\u5229\u5149\uFF0C\u66FE\u7956\u7236\u662F\u6F14\u5458\u8C37\u5D0E\u5341\u90CE\u3002","\u867D\u662F\u827A\u672F\u4E16\u5BB6\uFF0C\u4F46\u662F\u771F\u6B63\u5F00\u542F\u8737\u5DDD\u7684\u6444\u5F71\u751F\u6DAF\u662F\u9AD8\u4E00\u90A3\u5E74\u8FC7\u5E74\uFF0C\u4EE5\u81EA\u5DF1\u5168\u90E8\u7684\u538B\u5C81\u94B1\uFF0C\u5230\u4E8C\u624B\u76F8\u673A\u5E97\u4E70\u4E0B\u4EBA\u751F\u7B2C\u4E00\u90E8\u76F8\u673A\uFF1A\u7F8E\u80FD\u8FBE\u4E8E1981\u5E74\u6240\u53D1\u8868\u7684X700\u5355\u53CD\u76F8\u673A\u3002","\u5176\u4F5C\u54C1\u4E2D\u7684\u72EC\u7279\u8272\u5F69\u611F\uFF0C\u662F\u900F\u8FC7\u7231\u514B\u53D1\u6240\u63A8\u51FA\u7684\u8D1F\u7247\u80F6\u5377\u201CULTRA\u201D\u6240\u5851\u9020\u51FA\u6765\u7684\u3002","2005\u5E745\u6708\uFF0C\u7531\u4E8E\u7231\u514B\u53D1\u505C\u6B62\u80F6\u5377\u4E1A\u52A1\uFF0C\u8737\u5DDD\u5F00\u59CB\u4F7F\u7528\u7531\u67EF\u8FBE\u516C\u53F8\u6240\u63A8\u51FA\u7684\u201CULTRA COLOR\u201D\u80F6\u5377\u3002","2007\u5E742\u670824\u65E5\u4E0A\u6620\u7684\u7535\u5F71\u300A\u6076\u5973\u82B1\u9B41\u300B\uFF0C\u662F\u5979\u9996\u6B21\u62C5\u4EFB\u5BFC\u6F14\u7684\u7535\u5F71\u3002"," Ninamika \u5728\u65E5\u672C\u957F\u5927\u5E76\u63A5\u53D7\u4E86\u826F\u597D\u7684\u6559\u80B2\u3002\u5728\u6210\u957F\u8FC7\u7A0B\u4E2D\uFF0C\u5979\u63A5\u89E6\u4E86\u8BB8\u591A\u4E0D\u540C\u7C7B\u578B\u7684\u827A\u672F\u5F62\u5F0F\uFF0C\u5305\u62EC\u7ED8\u753B\u3001\u6444\u5F71\u3001\u7535\u5F71\u3001\u821E\u8E48\u548C\u97F3\u4E50\u7B49\u3002\u8FD9\u4E9B\u827A\u672F\u5F62\u5F0F\u6DF1\u6DF1\u5730\u5F71\u54CD\u4E86\u5979\u7684\u5BA1\u7F8E\u548C\u521B\u4F5C\u65B9\u5F0F\u3002","\u57281990\u5E74\u4EE3\uFF0C Ninamika \u5F00\u59CB\u6D89\u8DB3\u6F14\u827A\u5708\uFF0C\u5E76\u5728\u77ED\u77ED\u7684\u65F6\u95F4\u5185\u83B7\u5F97\u4E86\u6210\u529F\u3002\u5979\u4EE5\u51FA\u4F17\u7684\u5916\u8868\u548C\u6DF1\u539A\u7684\u6F14\u6280\u8D62\u5F97\u4E86\u8BB8\u591A\u5F71\u8FF7\u7684\u559C\u7231\uFF0C\u6210\u4E3A\u4E86\u65E5\u672C\u5F71\u575B\u7684\u4E00\u9897\u65B0\u661F\u3002\u4E0D\u4E45\u4E4B\u540E\uFF0C Ninamika \u5F00\u59CB\u6D89\u8DB3\u5BFC\u6F14\u9886\u57DF\uFF0C\u5E76\u4E14\u5F88\u5FEB\u5C31\u5C55\u73B0\u51FA\u4E86\u5979\u7684\u624D\u534E\u3002\u5979\u7684\u7535\u5F71\u4F5C\u54C1\u4E0D\u4EC5\u83B7\u5F97\u4E86\u5546\u4E1A\u4E0A\u7684\u6210\u529F\uFF0C\u8FD8\u8D62\u5F97\u4E86\u8BC4\u8BBA\u5BB6\u7684\u9AD8\u5EA6\u8BC4\u4EF7\uFF0C\u6210\u4E3A\u4E86\u65E5\u672C\u7535\u5F71\u7684\u4F73\u8BDD\u3002"," Ninamika \u7684\u521B\u4F5C\u6D89\u53CA\u4E86\u5E7F\u6CDB\u7684\u4E3B\u9898\uFF0C\u5305\u62EC\u4EBA\u9645\u5173\u7CFB\u3001\u60C5\u611F\u7EA0\u845B\u3001\u793E\u4F1A\u95EE\u9898\u548C\u4E2A\u4EBA\u6210\u957F\u7B49\u3002\u5979\u7684\u4F5C\u54C1\u4EE5\u72EC\u7279\u7684\u89C6\u89D2\u548C\u6DF1\u523B\u7684\u6D1E\u5BDF\u529B\u95FB\u540D\uFF0C\u4E0D\u4EC5\u5C55\u73B0\u4E86\u5979\u7684\u521B\u9020\u529B\u548C\u624D\u534E\uFF0C\u4E5F\u53CD\u6620\u4E86\u5979\u5BF9\u793E\u4F1A\u548C\u4EBA\u6027\u7684\u5173\u6CE8\u548C\u601D\u8003\u3002"," Ninamika \u7684\u624D\u534E\u548C\u6210\u5C31\u4E0D\u4EC5\u4EC5\u5728\u65E5\u672C\u5883\u5185\u53D7\u5230\u4E86\u8BA4\u53EF\uFF0C\u5979\u7684\u4F5C\u54C1\u4E5F\u5728\u56FD\u9645\u4E0A\u83B7\u5F97\u4E86\u5E7F\u6CDB\u7684\u8D5E\u8A89\u3002\u5979\u66FE\u7ECF\u591A\u6B21\u83B7\u5F97\u56FD\u9645\u7535\u5F71\u8282\u7684\u6B8A\u8363\uFF0C\u6210\u4E3A\u4E86\u65E5\u672C\u7535\u5F71\u7684\u4EE3\u8868\u6027\u4EBA\u7269\u4E4B\u4E00\u3002","\u9664\u4E86\u7535\u5F71\uFF0C Ninamika \u8FD8\u6D89\u8DB3\u4E86\u5176\u4ED6\u827A\u672F\u9886\u57DF\uFF0C\u5305\u62EC\u6444\u5F71\u3001\u7ED8\u753B\u548C\u97F3\u4E50\u7B49\u3002\u5979\u7684\u521B\u4F5C\u8303\u56F4\u4E4B\u5E7F\u548C\u591A\u6837\u6027\u4EE4\u4EBA\u79F0\u5947\uFF0C\u5C55\u793A\u4E86\u5979\u5BF9\u827A\u672F\u7684\u70ED\u7231\u548C\u5BF9\u751F\u547D\u7684\u63A2\u7D22\u3002","\u603B\u4E4B\uFF0C Ninamika \u662F\u4E00\u4E2A\u5177\u6709\u975E\u51E1\u624D\u534E\u548C\u6DF1\u5EA6\u601D\u8003\u7684\u827A\u672F\u5BB6\uFF0C\u5979\u7684\u4F5C\u54C1\u548C\u7ECF\u5386\u5C06\u4E00\u76F4\u88AB\u4EBA\u4EEC\u6240\u94ED\u8BB0\u548C\u63A8\u5D07\u3002","\u4F46\u662F\u5979\u5176\u5B9E\u662F\u4E2A\u5185\u5411\u81EA\u95ED\u7684\u4EBA\uFF0C\u65E9\u5DF2\u538C\u5026\u4E86\u4E16\u4FD7\u7684\u751F\u6D3B\uFF0C\u4F46\u662F\u5979\u6CA1\u6709\u544A\u8BC9\u8FC7\u4EFB\u4F55\u4EBA\u3002","\u76F4\u5230\u6709\u4E00\u5929\uFF0C\u5979\u8BA4\u8BC6\u4E86\u53E6\u5916\u4E00\u4F4D\u827A\u672F\u5BB6\u5317\u5B85\u4E0D\u5B85\uFF0C\u5979\u544A\u8BC9 Ninamika \u5979\u53EF\u4EE5\u5E2E\u52A9\u5979\u53BB\u5F80\u53E6\u5916\u4E00\u4E2A\u66F4\u52A0\u81EA\u7531\u7684\u4E16\u754C\uFF0C\u90A3\u662F\u4E00\u4E2A\u706B\u70ED\u3001\u8D64\u5FC3\u7684\u4E16\u754C\uFF0C\u5979\u53EF\u4EE5\u5728\u90A3\u91CC\u70BD\u70C8\u53C8\u8D64\u5FC3\u5730\u627E\u5BFB\u751F\u7684\u529B\u91CF\uFF0C\u4E8E\u662F Ninamika \u63A5\u53D7\u4E86\u5979\u7684\u5E2E\u52A9\u3002"],e=n(33130),v=function(){var a=(0,s.useState)(0),O=l()(a,2),E=O[0],g=O[1];window.setPart=g;var M=[A,f,j,C,h],L=(0,N.Z)({questionList:d,partLength:c,setPart:g}),D=L.handleNext,T=L.contextHolder;return(0,e.jsxs)(e.Fragment,{children:[T,(0,e.jsxs)(o.Z,{children:[(0,e.jsx)(u.Z,{title:"\u97E9\u8587\u5A1C-".concat(x[E]),color:"#007fdb"}),(0,e.jsx)(m.Z,{articleList:M[E]}),(0,e.jsx)(t.Z,{text:_[E],question:d[E],onClick:function(y){return D(y,E)}})]})]})},p=v}}]);
