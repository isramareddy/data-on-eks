"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),s=n(2466),i=n(6550),o=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,p]=k({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=o??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},769:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),r=n(5697),l=n.n(r),s=n(6010);const i="collapsibleContent_q3kw",o="header_QCEw",p="icon_PckA",u="content_qLC1",c="expanded_iGsi";function m(e){let{children:t,header:n}=e;const[r,l]=(0,a.useState)(!1);return a.createElement("div",{className:i},a.createElement("div",{className:(0,s.Z)(o,{[c]:r}),onClick:()=>{l(!r)}},n,a.createElement("span",{className:(0,s.Z)(p,{[c]:r})})),r&&a.createElement("div",{className:u},t))}m.propTypes={children:l().node.isRequired,header:l().node.isRequired};const d=m},6739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),s=n(5162),i=n(769);const o={title:"Flink Operator on EKS",sidebar_position:3},p=void 0,u={unversionedId:"blueprints/streaming-platforms/flink",id:"blueprints/streaming-platforms/flink",title:"Flink Operator on EKS",description:"Please note that we are working on adding more features to this blueprint such as Flink examples with multiple connectors, Ingress for WebUI, Grafana dashboards etc.",source:"@site/docs/blueprints/streaming-platforms/flink.md",sourceDirName:"blueprints/streaming-platforms",slug:"/blueprints/streaming-platforms/flink",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/flink",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/streaming-platforms/flink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Flink Operator on EKS",sidebar_position:3},sidebar:"blueprints",previous:{title:"Amazon EMR NVIDIA Spark RAPIDS on EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-nvidia-spark-rapids"},next:{title:"Kafka on EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/kafka"}},c={},m=[{value:"Introduction to Apache Flink",id:"introduction-to-apache-flink",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Flink Kubernetes Operator",id:"flink-kubernetes-operator",level:2},{value:"Best Practices for Running Flink Jobs on Kubernetes",id:"best-practices-for-running-flink-jobs-on-kubernetes",level:2},{value:"Flink Upgrade",id:"flink-upgrade",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3}],d={toc:m},k="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(k,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that we are working on adding more features to this blueprint such as Flink examples with multiple connectors, Ingress for WebUI, Grafana dashboards etc.")),(0,r.kt)("h2",{id:"introduction-to-apache-flink"},"Introduction to Apache Flink"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," is an open-source, unified stream processing and batch processing framework that was designed to process large amounts of data. It provides fast, reliable, and scalable data processing with fault tolerance and exactly-once semantics.\nSome of the key features of Flink are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distributed Processing"),": Flink is designed to process large volumes of data in a distributed fashion, making it horizontally scalable and fault-tolerant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stream Processing and Batch Processing"),": Flink provides APIs for both stream processing and batch processing. This means you can process data in real-time, as it's being generated, or process data in batches."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fault Tolerance"),": Flink has built-in mechanisms for handling node failures, network partitions, and other types of failures."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exactly-once Semantics"),": Flink supports exactly-once processing, which ensures that each record is processed exactly once, even in the presence of failures."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Low Latency"),": Flink's streaming engine is optimized for low-latency processing, making it suitable for use cases that require real-time processing of data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extensibility"),": Flink provides a rich set of APIs and libraries, making it easy to extend and customize to fit your specific use case.")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Flink Architecture high level design with EKS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flink Design UI",src:n(7697).Z,width:"5078",height:"2207"})),(0,r.kt)("h2",{id:"flink-kubernetes-operator"},"Flink Kubernetes Operator"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-main/"},"Flink Kubernetes Operator")," is a powerful tool for managing Flink clusters on Kubernetes. Flink Kubernetes Operator (Operator) acts as a control plane to manage the complete deployment lifecycle of Apache Flink applications. The Operator can be installed on a Kubernetes cluster using Helm. The core responsibility of the Flink operator is to manage the full production lifecycle of Flink applications."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Running, suspending and deleting applications"),(0,r.kt)("li",{parentName:"ol"},"Stateful and stateless application upgrades"),(0,r.kt)("li",{parentName:"ol"},"Triggering and managing savepoints"),(0,r.kt)("li",{parentName:"ol"},"Handling errors, rolling-back broken upgrades")),(0,r.kt)("p",null,"Flink Operator defines two types of Custom Resources(CR) which are the extensions of the Kubernetes API."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"FlinkDeployment",label:"FlinkDeployment",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FlinkDeployment")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FlinkDeployment CR defines ",(0,r.kt)("strong",{parentName:"p"},"Flink Application")," and ",(0,r.kt)("strong",{parentName:"p"},"Session Cluster")," deployments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Application deployments manage a single job deployment on a dedicated Flink cluster in Application mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Session clusters allows you to run multiple Flink Jobs on an existing Session cluster."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"FlinkDeployment in Application modes, Click to toggle content!"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flink.apache.org/v1beta1\nkind: FlinkDeployment\nmetadata:\nnamespace: default\nname: basic-example\nspec:\nimage: flink:1.16\nflinkVersion: v1_16\nflinkConfiguration:\n    taskmanager.numberOfTaskSlots: "2"\nserviceAccount: flink\njobManager:\n    resource:\n    memory: "2048m"\n    cpu: 1\ntaskManager:\n    resource:\n    memory: "2048m"\n    cpu: 1\njob:\n    jarURI: local:///opt/flink/examples/streaming/StateMachineExample.jar\n    parallelism: 2\n    upgradeMode: stateless\n    state: running\n')))))),(0,r.kt)(s.Z,{value:"FlinkSessionJob",label:"FlinkSessionJob",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FlinkSessionJob")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FlinkSessionJob")," CR defines the session job on the ",(0,r.kt)("strong",{parentName:"p"},"Session cluster")," and each Session cluster can run multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"FlinkSessionJob"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Session deployments manage Flink Session clusters without providing any job management for it"),(0,r.kt)("details",null,(0,r.kt)("summary",null,'FlinkSessionJob using an existing "basic-session-cluster" session cluster deployment'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: flink.apache.org/v1beta1\nkind: FlinkSessionJob\nmetadata:\nname: basic-session-job-example\nspec:\ndeploymentName: basic-session-cluster\njob:\n    jarURI: https://repo1.maven.org/maven2/org/apache/flink/flink-examples-streaming_2.12/1.15.3/flink-examples-streaming_2.12-1.15.3-TopSpeedWindowing.jar\n    parallelism: 4\n    upgradeMode: stateless\n"))))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Session clusters use a similar spec to Application clusters with the only difference that ",(0,r.kt)("inlineCode",{parentName:"p"},"job")," is not defined in the yaml spec.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"According to the Flink documentation, it is recommended to use FlinkDeployment in Application mode for production environments.")),(0,r.kt)("p",null,"On top of the deployment types the Flink Kubernetes Operator also supports two modes of deployments: ",(0,r.kt)("inlineCode",{parentName:"p"},"Native")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Standalone"),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Native",label:"Native",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Native")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Native cluster deployment is the default deployment mode and uses Flink\u2019s built in integration with Kubernetes when deploying the cluster."),(0,r.kt)("li",{parentName:"ul"},"Flink cluster communicates directly with Kubernetes and allows it to manage Kubernetes resources, e.g. dynamically allocate and de-allocate TaskManager pods."),(0,r.kt)("li",{parentName:"ul"},"Flink Native can be useful for advanced users who want to build their own cluster management system or integrate with existing management systems."),(0,r.kt)("li",{parentName:"ul"},"Flink Native allows for more flexibility in terms of job scheduling and execution."),(0,r.kt)("li",{parentName:"ul"},"For standard Operator use running your own Flink Jobs Native mode is recommended")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: flink.apache.org/v1beta1\nkind: FlinkDeployment\n...\nspec:\n...\nmode: native\n"))),(0,r.kt)(s.Z,{value:"Standalone",label:"Standalone",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Standalone")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Standalone cluster deployment simply uses Kubernetes as an orchestration platform that the Flink cluster is running on.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Flink is unaware that it is running on Kubernetes and therefore all Kubernetes resources need to be managed externally, by the Kubernetes Operator."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: flink.apache.org/v1beta1\nkind: FlinkDeployment\n...\nspec:\n...\nmode: standalone\n")))))),(0,r.kt)("h2",{id:"best-practices-for-running-flink-jobs-on-kubernetes"},"Best Practices for Running Flink Jobs on Kubernetes"),(0,r.kt)("p",null,"To get the most out of Flink on Kubernetes, here are some best practices to follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use the Kubernetes Operator"),": Install and use the Flink Kubernetes Operator to automate the deployment and management of Flink clusters on Kubernetes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deploy in dedicated namespaces"),": Create a separate namespace for the Flink Kubernetes Operator and another one for Flink jobs/workloads. This ensures that the Flink jobs are isolated and have their own resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use high-quality storage"),": Store Flink checkpoints and savepoints in high-quality storage such as Amazon S3 or another durable external storage. These storage options are reliable, scalable, and offer durability for large volumes of data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optimize resource allocation"),": Allocate sufficient resources to Flink jobs to ensure optimal performance. This can be done by setting resource requests and limits for Flink containers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proper network isolation"),": Use Kubernetes Network Policies to isolate Flink jobs from other workloads running on the same Kubernetes cluster. This ensures that Flink jobs have the required network access without being impacted by other workloads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configure Flink optimally"),": Tune Flink settings according to your use case. For example, adjust Flink's parallelism settings to ensure that Flink jobs are scaled appropriately based on the size of the input data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use checkpoints and savepoints"),": Use checkpoints for periodic snapshots of Flink application state and savepoints for more advanced use cases such as upgrading or downgrading the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Store checkpoints and savepoints in the right places"),": Store checkpoints in distributed file systems or key-value stores like Amazon S3 or another durable external storage. Store savepoints in a durable external storage like Amazon S3.")),(0,r.kt)("h2",{id:"flink-upgrade"},"Flink Upgrade"),(0,r.kt)("p",null,"Flink Operator provides three upgrade modes for Flink jobs. Checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-main/docs/custom-resource/job-management/#stateful-and-stateless-application-upgrades"},"Flink upgrade docs")," for up-to-date information."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"stateless"),": Stateless application upgrades from empty state"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"last-state"),": Quick upgrades in any application state (even for failing jobs), does not require a healthy job as it always uses the latest checkpoint information. Manual recovery may be necessary if HA metadata is lost."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"savepoint"),": Use savepoint for upgrade, providing maximal safety and possibility to serve as backup/fork point. The savepoint will be created during the upgrade process. Note that the Flink job needs to be running to allow the savepoint to get created. If the job is in an unhealthy state, the last checkpoint will be used (unless kubernetes.operator.job.upgrade.last-state-fallback.enabled is set to false). If the last checkpoint is not available, the job upgrade will fail.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"last-state")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"savepoint")," are recommended modes for production")),(0,r.kt)(i.Z,{header:(0,r.kt)("h2",null,(0,r.kt)("span",null,"Deploying the Solution")),mdxType:"CollapsibleContent"},(0,r.kt)("p",null,"In this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/streaming/flink"},"example"),", you will provision the following resources required to run Flink Jobs with Flink Operator and Apache YuniKorn."),(0,r.kt)("p",null,"This example deploys an EKS Cluster running the Flink Operator into a new VPC."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates a new sample VPC, 2 Private Subnets and 2 Public Subnets"),(0,r.kt)("li",{parentName:"ul"},"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"),(0,r.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with core managed node group, on-demand node group and Spot node group for Flink workloads."),(0,r.kt)("li",{parentName:"ul"},"Deploys Metrics server, Cluster Autoscaler, Apache YuniKorn, Karpenter, Grafana, AMP and Prometheus server."),(0,r.kt)("li",{parentName:"ul"},"Deploys Cert Manager and Flink Operator add-ons. Flink Operator has dependency on Cert Manager"),(0,r.kt)("li",{parentName:"ul"},"Creates a new Flink Data team resources that includes namespace, service account, IRSA, Role and Role binding."),(0,r.kt)("li",{parentName:"ul"},"Deploys three Karpenter provisioners for different compute types")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,r.kt)("p",null,"Navigate into one of the example directories and run ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/streaming/flink\nchmod +x install.sh\n./install.sh\n")),(0,r.kt)("p",null,"Verify the cluster status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c kubectl get nodes -A\nNAME                                         STATUS   ROLES    AGE   VERSION\nip-10-1-160-150.us-west-2.compute.internal   Ready    <none>   24h   v1.24.11-eks-a59e1f0\nip-10-1-169-249.us-west-2.compute.internal   Ready    <none>   6d    v1.24.11-eks-a59e1f0\nip-10-1-69-244.us-west-2.compute.internal    Ready    <none>   6d    v1.24.11-eks-a59e1f0\n\n\u279c  ~ kubectl get pods -n flink-kubernetes-operator\nNAME                                         READY   STATUS    RESTARTS   AGE\nflink-kubernetes-operator-77697fb949-rwqqm   2/2     Running   0          24h\n\n\u279c  ~ kubectl get pods -n cert-manager\nNAME                                      READY   STATUS    RESTARTS   AGE\ncert-manager-77fc7548dc-dzdms             1/1     Running   0          24h\ncert-manager-cainjector-8869b7ff7-4w754   1/1     Running   0          24h\ncert-manager-webhook-586ddf8589-g6s87     1/1     Running   0          24h\n")),(0,r.kt)("p",null,"To list all the resources created for Flink team to run Flink jobs using this namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  ~ kubectl get all,role,rolebinding,serviceaccount --namespace flink-team-a-ns\nNAME                                               CREATED AT\nrole.rbac.authorization.k8s.io/flink-team-a-role   2023-04-06T13:17:05Z\n\nNAME                                                              ROLE                     AGE\nrolebinding.rbac.authorization.k8s.io/flink-team-a-role-binding   Role/flink-team-a-role   22h\n\nNAME                             SECRETS   AGE\nserviceaccount/default           0         22h\nserviceaccount/flink-team-a-sa   0         22h\n"))),(0,r.kt)(i.Z,{header:(0,r.kt)("h2",null,(0,r.kt)("span",null,"Execute Sample Flink job with Karpenter")),mdxType:"CollapsibleContent"},(0,r.kt)("p",null,"Navigate to example directory and submit the Flink job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/streaming/flink/examples/karpenter\nkubectl apply -f flink-sample-job.yaml\n")),(0,r.kt)("p",null,"Monitor the job status using the below command.\nYou should see the new nodes triggered by the karpenter and the YuniKorn will schedule one Job manager pod and one Taskmanager pods on this node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments -n flink-team-a-ns\nNAME            READY   UP-TO-DATE   AVAILABLE   AGE\nbasic-example   1/1     1            1           5m9s\n\nkubectl get pods -n flink-team-a-ns\nNAME                            READY   STATUS    RESTARTS   AGE\nbasic-example-bf467dff7-zwhgc   1/1     Running   0          102s\nbasic-example-taskmanager-1-1   1/1     Running   0          87s\nbasic-example-taskmanager-1-2   1/1     Running   0          87s\n\nkubectl get services -n flink-team-a-ns\nNAME                 TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE\nbasic-example-rest   ClusterIP   172.20.74.9   <none>        8081/TCP   3m43s\n")),(0,r.kt)("p",null,"To access the Flink WebUI for the job run this command locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/basic-example-rest 8081 -n flink-team-a-ns\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flink Job UI",src:n(2760).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(8454).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(6877).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(6534).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(298).Z,width:"3022",height:"1604"}))),(0,r.kt)(i.Z,{header:(0,r.kt)("h2",null,(0,r.kt)("span",null,"Execute Sample Flink job with Managed Node Groups and Cluster Autoscaler")),mdxType:"CollapsibleContent"},(0,r.kt)("p",null,"Navigate to example directory and submit the Spark job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/streaming/flink/examples/cluster-autoscaler\nkubectl apply -f flink-sample-job.yaml\n")),(0,r.kt)("p",null,"Monitor the job status using the below command.\nYou should see the new nodes triggered by the Cluster Autoscaler and the YuniKorn will schedule one Job manager pod and one Taskmanager pods on this node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments -n flink-team-a-ns\nNAME            READY   UP-TO-DATE   AVAILABLE   AGE\nbasic-example   1/1     1            1           5m9s\n\nkubectl get pods -n flink-team-a-ns\nNAME                            READY   STATUS    RESTARTS   AGE\nbasic-example-bf467dff7-zwhgc   1/1     Running   0          102s\nbasic-example-taskmanager-1-1   1/1     Running   0          87s\nbasic-example-taskmanager-1-2   1/1     Running   0          87s\n\nkubectl get services -n flink-team-a-ns\nNAME                 TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE\nbasic-example-rest   ClusterIP   172.20.74.9   <none>        8081/TCP   3m43s\n")),(0,r.kt)("p",null,"To access the Flink WebUI for the job run this command locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/basic-example-rest 8081 -n flink-team-a-ns\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flink Job UI",src:n(2760).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(8454).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(6877).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(6534).Z,width:"3022",height:"1604"}),"\n",(0,r.kt)("img",{alt:"Flink Job UI",src:n(298).Z,width:"3022",height:"1604"}))),(0,r.kt)(i.Z,{header:(0,r.kt)("h2",null,(0,r.kt)("span",null,"Cleanup")),mdxType:"CollapsibleContent"},(0,r.kt)("p",null,"This script will cleanup the environment using ",(0,r.kt)("inlineCode",{parentName:"p"},"-target")," option to ensure all the resources are deleted in correct order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/streaming/flink && chmod +x cleanup.sh\n./cleanup.sh\n"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}h.isMDXComponent=!0},7697:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flink-design-76636a1cd4f5b26cb4c136a805d8edb9.png"},2760:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flink1-917ff73ed2e0467f8f5c3c4c3150bb85.png"},8454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flink2-61b9b18791139dd0b8412509e14a1d4a.png"},6877:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flink3-ce2609f46e015076be7e99da7c953e55.png"},6534:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flink4-191396cf259ff9c97125466de6b84a9a.png"},298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flink5-d8e8a986eab75fe25b338df4f9a0d031.png"}}]);