"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6226],{9151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(4848),s=t(8453);const c={},a="Using a database's native vector search",o={id:"execute_api/native_vector_search",title:"Using a database's native vector search",description:"Increasing databases include their own vector-comparison and search operations",source:"@site/content/execute_api/native_vector_search.md",sourceDirName:"execute_api",slug:"/execute_api/native_vector_search",permalink:"/docs/execute_api/native_vector_search",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/execute_api/native_vector_search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector search queries",permalink:"/docs/execute_api/vector_search_queries"},next:{title:"Sidecar vector-comparison integration",permalink:"/docs/execute_api/sidecar_index_vector_search"}},i={},d=[];function u(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-a-databases-native-vector-search",children:"Using a database's native vector search"}),"\n",(0,r.jsx)(n.p,{children:"Increasing databases include their own vector-comparison and search operations\n(comparing one vector with others). In order to use this, include\nthis configuration in your configuration setup:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"cluster:\n  vector_search:\n    type: native\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"or"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export SUPERDUPER_CLUSTER_VECTOR_SEARCH_TYPE=native\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"superduperdb"})," detects this configuration, it uses the inbuilt mechanism\nof your ",(0,r.jsx)(n.code,{children:"db.databackend"})," to perform the vector-comparison."]}),"\n",(0,r.jsxs)(n.p,{children:["Currently ",(0,r.jsx)(n.code,{children:"superduperdb"})," supports the native implementation of these databases:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MongoDB Atlas"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"More integrations are on the way."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},c=r.createContext(s);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);