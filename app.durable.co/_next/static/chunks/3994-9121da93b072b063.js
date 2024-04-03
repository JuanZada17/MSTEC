"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3994],{40487:function(e,t,n){n.d(t,{k:function(){return o}});var i=n(85893),r=n(16494),o=function(e){var t=e.text;return(0,i.jsx)("div",{className:"flex items-center z-100 justify-center fixed inset-0 bg-black bg-opacity-80 backdrop-blur-2xs",children:(0,i.jsx)(r.Z,{text:null!==t&&void 0!==t?t:"Loading...",className:"text-body-lg text-white"})})}},12280:function(e,t,n){n.d(t,{u:function(){return u}});var i=n(85893),r=n(11355),o=n(69737),s=n(67294),a=n(91957),l=n(40487),d=n(3732),u=function(e){var t=e.children,n=e.title,u=e.buttons,c=e.open,f=e.setOpen,m=e.isLoading,h=e.loaderText,p=e.contentClassName,v=e.fixedHeight,g=void 0===v||v,x=e.footerHasMarginTop,y=void 0===x||x,b=e.hasCustomBody,j=void 0!==b&&b,w=(0,s.useRef)(null);return(0,i.jsx)(r.u.Root,{show:c,as:s.Fragment,children:(0,i.jsxs)(o.V,{as:"div",className:"fixed z-100 md:inset-0 w-full md:w-auto overflow-hidden bottom-0",initialFocus:w,onClose:function(){return f(!1)},children:[m&&(0,i.jsx)(l.k,{text:h}),(0,i.jsxs)("div",{className:"flex items-end justify-center min-h-screen text-center md:block",children:[(0,i.jsx)(r.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)(o.V.Overlay,{className:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-2xs transition-opacity"})}),(0,i.jsx)("span",{className:"hidden md:inline-block md:align-middle md:h-screen","aria-hidden":"true",children:"\u200b"}),(0,i.jsx)(r.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",enterTo:"opacity-100 translate-y-0 md:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 md:scale-100",leaveTo:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",children:(0,i.jsxs)("div",{ref:w,className:"inline-block align-middle w-full md:w-auto bg-white rounded-t-lg md:rounded-lg md:my-8 text-left overflow-hidden shadow-xl transform transition-all",children:[n&&(0,i.jsxs)("div",{className:"flex items-center justify-between p-4 md:py-5 md:px-6 border-b border-gray-200",children:[(0,i.jsx)(o.V.Title,{className:"font-bold text-gray-900",children:n}),(0,i.jsx)("button",{type:"button",className:"bg-white rounded-md text-gray-600 border-1 border-transparent transition-all hover:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500",onClick:function(){return f(!1)},children:(0,i.jsx)(a.Z,{icon:"XSolidIcon",className:"h-6 w-6","aria-hidden":"true"})})]}),j?t:(0,i.jsx)("div",{className:(0,d.AK)("p-4 lg:p-6 flex flex-col gap-5",p,g?"overflow-y-auto max-h-[80vh]":"block h-auto"),children:t}),u&&(0,i.jsx)("div",{className:(0,d.AK)("flex justify-end p-4 lg:px-6 border-t border-gray-200",y&&"mt-4"),children:u})]})})]})]})})}},43994:function(e,t,n){n.d(t,{w:function(){return ne}});var i=n(26042),r=n(69396),o=n(29815),s=n(85893),a=n(67294),l=n(38622),d=n(33347),u=n(3732),c=n(52077),f=n(51351),m=n(36338),h=n(13840),p=n(57349),v=n(53901);function g(e){var t=e.type,n=e.className,i=function(e){switch(e){case"number":return"#";case"money":return"$";case"text":return"A";default:return null}}(t);return i?(0,s.jsx)("div",{className:(0,u.AK)("relative bg-white bg-opacity-0 h-5 w-5",n),children:(0,s.jsxs)("div",{className:"h-fit left-0 top-0 absolute text-center group-hover:text-indigo-600 text-gray-500 text-lg font-normal font-['SF Pro Rounded'] leading-tight ",children:[i,(0,s.jsx)("span",{className:"pr-[2px] border-r-1 border-r-gray-500 h-4 inline-block relative top-[1px]"})]})}):function(e,t){var n="rounded border border-gray-500";switch(e){case"date":return(0,s.jsx)(m.Z,{className:t});case"checkbox":return(0,s.jsx)(h.Z,{className:(0,u.AK)(t,n)});case"dropdown":return(0,s.jsx)(p.Z,{className:(0,u.AK)(t,n)});case"rating":return(0,s.jsx)(v.Z,{className:t});default:throw new Error("Unknown type ".concat(e))}}(t,(0,u.AK)("flex-none text-gray-500 group-hover:text-indigo-600 h-5 w-5",n))}var x=(0,a.createContext)((function(){})),y=(0,a.createContext)((function(){})),b=[{id:1,value:"text",name:"Text",description:"Type in a single line of text, like a name or note"},{id:2,value:"number",name:"Number",description:"Type in in a number without decimals or fractions"},{id:3,value:"money",name:"Money",description:"Type in a monetary value, with currency"},{id:4,value:"date",name:"Date",description:"Select a day of the year from a calendar"},{id:5,value:"checkbox",name:"Checkbox",description:"One or more yes or no choices"},{id:6,value:"dropdown",name:"Dropdown",description:"Select a single choice from a menu of options you define"},{id:7,value:"rating",name:"Rating",description:"An input for a rating from 1 to 5 stars"}];function j(e){e=null!==e?e:(0,f.Z)(new TypeError("Cannot destructure undefined"));var t=function(e){var t=e.value,o=[];"dropdown"!==t&&"checkbox"!==t||o.push({id:0,name:"",default:!1}),d("edit"),l((function(e){return(0,r.Z)((0,i.Z)({},e),{type:t,category:n,options:o})}))},n=(0,a.useContext)(x).data.category,o=(0,a.useContext)(y),l=o.setActiveField,d=o.updateView;return(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{className:"text-gray-900 text-sm font-normal leading-none mb-4",children:"Select the type of input"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:b.map((function(e){return(0,s.jsx)("div",{className:"p-4 bg-white bg-opacity-0 rounded-lg border border-gray-300 justify-start items-center gap-4 inline-flex hover:bg-indigo-50 hover:border-indigo-600 cursor-pointer focus:border-1",onKeyDown:function(n){return function(e,n){"Enter"===e.key&&t(n)}(n,e)},onClick:function(){return t(e)},autoFocus:!0,role:"button",tabIndex:0,children:(0,s.jsxs)("div",{className:"grow shrink basis-0 justify-start items-start gap-3 flex",children:[(0,s.jsx)(g,{type:e.value,className:"flex-none"}),(0,s.jsxs)("div",{className:"grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex",children:[(0,s.jsx)("div",{className:"self-stretch text-gray-900 text-base font-semibold leading-tight",children:e.name}),(0,s.jsx)("div",{className:"self-stretch text-gray-500 text-sm font-normal leading-tight",children:e.description})]})]})},e.id)}))})]})}var w=n(91957),C=n(78680);function F(e){var t=e.title,n=e.onClick,i=e.className,r=e.disabled,o=e.fullWidth;return(0,s.jsxs)("button",{className:(0,u.AK)("link flex items-center gap-4 cursor-pointer text-indigo-700 hover:bg-gray-50 py-2 focus:border-1 focus:ring-indigo-500 focus:border-indigo-500",o&&"w-full py-4 px-4",i),onClick:n,disabled:r,children:[(0,s.jsx)(C.Z,{className:"w-5 h-5"}),(0,s.jsx)("p",{className:"text-sm font-medium leading-non",children:t})]})}var N=n(60728),Z=n(47568),k=n(51438),_=n(52951),A=n(97582),S=function(){function e(t){var n=t.get,i=t.post,r=t.remove,o=t.put;(0,k.Z)(this,e),this.get=n,this.post=i,this.put=o,this.delete=r}return(0,_.Z)(e,[{key:"getCustomFields",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"customer",t=this;return(0,Z.Z)((function(){var n;return(0,A.__generator)(this,(function(i){switch(i.label){case 0:return[4,t.get("/custom-field/get-by-category",{category:e})];case 1:if(!0===(null===(n=i.sent())||void 0===n?void 0:n.status)&&(null===n||void 0===n?void 0:n.content))return(0,u.Fs)("".concat(e,'.custom-fields", response.content')),[2,n.content];throw new Error("Failed to get custom fields: ".concat(null===n||void 0===n?void 0:n.message))}}))}))()}},{key:"deleteCustomField",value:function(e){var t=this;return(0,Z.Z)((function(){var n;return(0,A.__generator)(this,(function(i){switch(i.label){case 0:return[4,t.post("/custom-field/delete",{idCustomField:e._id})];case 1:if((n=i.sent())&&!0===n.status)return[2,n.content];throw new Error("Failed to delete custom field: ".concat(null===n||void 0===n?void 0:n.message))}}))}))()}},{key:"createCustomField",value:function(e){var t=this;return(0,Z.Z)((function(){var n;return(0,A.__generator)(this,(function(i){switch(i.label){case 0:return[4,t.post("/custom-field/create",e)];case 1:if((n=i.sent())&&!0===n.status)return[2,n.content];throw new Error("Failed to create custom field: ".concat(null===n||void 0===n?void 0:n.message))}}))}))()}},{key:"updateCustomField",value:function(e){var t=this;return(0,Z.Z)((function(){var n;return(0,A.__generator)(this,(function(o){switch(o.label){case 0:return[4,t.post("/custom-field/edit",(0,r.Z)((0,i.Z)({},e),{idCustomField:e._id}))];case 1:if((n=o.sent())&&!0===n.status)return[2,n.content];throw new Error("Failed to create custom field: ".concat(null===n||void 0===n?void 0:n.message))}}))}))()}}]),e}(),E=n(16494),T=n(20402),M=n(78017),D=n(51121),K="focus:border-1 focus:ring-indigo-500 focus:border-indigo-500";function L(e){var t=e.field,n=e.confirm,o=e.loading,l=e.editable,c=e.selectable,f=e.selected,m=e.disabled,p=e.onSelectChange,v=e.required,g=e.hideType,x=function(e){e&&e.stopPropagation(),N("edit"),w(t)},b=(0,a.useContext)(y),j=b.onError,w=b.setActiveField,C=b.setCustomFields,F=b.setLoading,N=b.updateView,Z=(0,d.Z)(),k=new S(Z),_=t.name,A=t.type;return(0,s.jsxs)("div",{className:(0,u.AK)("w-full py-2 px-4 rounded-lg justify-start items-center gap-4 inline-flex cursor-pointer",v?"bg-gray-50":"bg-white bg-opacity-0",!m&&"hover:bg-gray-50",A&&!g?"h-14":"h-10"),onClick:function(){if(c&&!m)return p(t,!f);l&&x()},children:[c?v?(0,s.jsx)(h.Z,{className:"w-5 h-5 relative text-gray-300"}):(0,s.jsx)(D.Z,{type:"checkbox",disabled:m,checked:f,onChange:function(e,n){var i=n.target;p(t,i.checked)}}):null,(0,s.jsxs)("div",{className:"w-full grow shrink basis-1 flex-col justify-start items-start inline-flex",onClick:function(){if(c&&!m)return p(t,!f);l&&x()},children:[(0,s.jsx)("div",{className:(0,u.AK)("self-stretch text-sm font-medium leading-tight cursor-pointer",m?"text-gray-400":"text-gray-900"),children:_}),A&&!g&&(0,s.jsx)("div",{className:"self-stretch text-gray-500 text-sm font-normal leading-tight capitalize cursor-pointer",children:A})]}),(0,s.jsx)("div",{className:"bg-white bg-opacity-0 justify-end items-start gap-1 flex",children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:(0,u.AK)("link w-10 h-10 bg-white bg-opacity-0 rounded justify-center items-center flex",K),disabled:o,onClick:x,children:(0,s.jsx)(T.Z,{className:"w-5 h-5 relative text-indigo-600"})}),(0,s.jsx)("button",{className:(0,u.AK)("link w-10 h-10 bg-white bg-opacity-0 rounded justify-center items-center flex cursor-pointer",K),disabled:o,onClick:function(e){e.stopPropagation(),n(null,null,(function(){F((function(e){return(0,r.Z)((0,i.Z)({},e),{deleteField:!0})})),k.deleteCustomField(t).then((function(){C((function(e){return(0,r.Z)((0,i.Z)({},e),{customFields:e.customFields.filter((function(e){return e._id!==t._id}))})})),c&&f&&p(t,!1),F((function(e){return(0,r.Z)((0,i.Z)({},e),{deleteField:!1})})),u.Z9.success("Custom field deleted")})).catch((function(e){j(e),F((function(e){return(0,r.Z)((0,i.Z)({},e),{deleteField:!1})}))}))}),null)},children:o?(0,s.jsx)(E.Z,{text:""}):(0,s.jsx)(M.Z,{className:"w-5 h-5 relative text-red-600"})})]}):null})]})}function I(e){e=null!==e?e:(0,f.Z)(new TypeError("Cannot destructure undefined"));var t=(0,a.useContext)(x),n=t.data.customFields,i=t.ui.loading,r=(0,a.useContext)(y).updateView,o=(0,N.Z)(),l=o.confirm,d=o.ConfirmDialog;return n&&n.length?(0,s.jsxs)("div",{className:"flex-col justify-start items-start gap-0 inline-flex",children:[n.map((function(e){return(0,s.jsx)(L,{field:e,confirm:l,loading:i.deleteField,editable:!0},e._id)})),(0,s.jsx)(F,{title:"Add field",onClick:function(){return r("add")},fullWidth:!0,disabled:i.deleteField}),(0,s.jsxs)(d,{attention:!0,confirmText:"Delete",title:"Delete custom field",children:[(0,s.jsx)("p",{children:"Are you sure you want to delete this custom field?"}),(0,s.jsxs)("div",{className:"alert danger mt-4",children:[(0,s.jsx)(w.Z,{icon:"ExclamationIcon"}),(0,s.jsx)("p",{children:"Removing this field, will remove it from every contact, not only this one. It will also be removed from any contact forms."})]})]})]}):(0,s.jsx)("div",{children:(0,s.jsx)(F,{title:"Add field",onClick:function(){return r("add")},fullWidth:!0})})}var B=n(12280),O=n(43443),R=n(828);function P(e){return Array.isArray(e)?{customFields:e.filter((function(e){return!e.default})),defaultFields:e.filter((function(e){return e.default}))}:{customFields:[],defaultFields:[]}}function W(e){switch(e){case"manage":default:return"list";case"new":case"add":return"add";case"edit":return"edit";case"select":return"select"}}function q(e){switch(e){case"add":case"create":return"Fields added here are also added to contacts in your CRM";case"edit":return"Changes made here will be reflected on contacts in your CRM";default:return""}}function z(e,t){var n=t.oldIndex,i=t.newIndex;return e.default&&0===i&&(i=1),(0,O.Rp)(e.options,n,i)}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e((function(e){var n=e.options||[],s=n.every((function(e){return!!e.name}))&&!t.length;return(0,r.Z)((0,i.Z)({},e),{options:s?(0,o.Z)(n).concat([{id:n.length,name:"",new:!0}]):n})}))}function J(e){var t=e.filter((function(e){return!e.deleted})).map((function(e){return e.name.toLowerCase().trim()})),n=new Set(t);return t.length!==n.size}var H=(0,O.W6)((function(e){var t=e.disabled;return(0,s.jsx)(w.Z,{icon:"DragIcon",className:(0,u.AK)("w-5 h-5 relative",t?"text-gray-300":"text-gray-900 cursor-move")})})),U=(0,O.W8)((function(e){var t=e.option,n=e.isDisabled,o=e.disableDelete,l=e.error,d=e.focused,c=function(e){f((function(n){return(0,r.Z)((0,i.Z)({},n),{options:n.options.map((function(n){return n.id===t.id?(0,r.Z)((0,i.Z)({},n),{name:e}):n}))})}))},f=(0,a.useContext)(y).setActiveField,m=(0,a.useContext)(x).ui.optionDuplicateIds;return(0,s.jsxs)("div",{className:"self-stretch py-2 bg-white bg-opacity-0 justify-start items-center gap-4 inline-flex w-full z-100",children:[(0,s.jsx)(H,{disabled:n}),(0,s.jsx)(D.Z,{value:t.name,disabled:n,inputClassName:"w-full",className:"w-full",title:n?"Default fields cannot be deleted":"",onKeyUp:function(e){"Enter"===e.key&&t.name.length&&V(f,m)},onBlur:function(){var e;c(null===(e=t.name)||void 0===e?void 0:e.trim())},onChange:c,error:l,autoFocus:d}),(0,s.jsx)("button",{className:(0,u.AK)("link w-10 h-10 bg-white bg-opacity-0 rounded justify-center items-center flex",!n&&"cursor-pointer"),disabled:n||o,onClick:function(){n||f((function(e){var n=function(e,t){var n=t.id;return e._id?t.new?e.options.filter((function(e){return e.id!==n})):e.options.map((function(e){return e.id===n?(0,r.Z)((0,i.Z)({},e),{deleted:!0}):e})):e.options.filter((function(e){return e.id!==n}))}(e,t);return(0,r.Z)((0,i.Z)({},e),{options:n})}))},children:(0,s.jsx)(M.Z,{className:(0,u.AK)("w-5 h-5 relative",n||o?"text-gray-300":"text-red-600")})})]})})),X=(0,O.JN)((function(e){var t=e.children;return(0,s.jsx)("div",{className:"bg-white relative z-5 w-full",children:t})}));function $(e){var t,n=e.field,o=e.onSave,l=e.loading,d=function(e){m((function(t){return(0,r.Z)((0,i.Z)({},t),{name:e||""})}))},u=(0,a.useContext)(x).ui,c=u.validationErrors,f=u.optionDuplicateIds,m=(0,a.useContext)(y).setActiveField,h=n.name,p=(0,a.useMemo)((function(){var e,t;return!(null===(e=n.options)||void 0===e?void 0:e.length)||(null===(t=n.options[n.options.length-1].name)||void 0===t?void 0:t.trim().length)}),[n.options]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"self-stretch justify-start items-start gap-6 inline-flex",children:(0,s.jsx)(D.Z,{label:"Label",inputClassName:"w-full",className:"w-full",value:h,onKeyUp:function(e){var t;if("Enter"===e.key&&h.trim().length&&!(null===(t=n.options)||void 0===t?void 0:t.length)){var i=h.trim();d(i),o()}},onBlur:function(){var e=h.trim();d(e)},onChange:function(e){return d(e)},disabled:n.default||l,error:null===c||void 0===c?void 0:c.label,autofocus:!0})}),(null===(t=n.options)||void 0===t?void 0:t.length)?(0,s.jsxs)("div",{className:"self-stretch flex-col justify-start items-start gap-2 flex",children:[(0,s.jsxs)("div",{className:"text-gray-900 text-sm font-normal leading-none mt-4",children:[(0,s.jsx)("span",{className:"capitalize",children:n.type})," options"]}),(0,s.jsx)(X,{onSortEnd:function(e){m((function(t){return(0,r.Z)((0,i.Z)({},t),{options:z(t,e)})}))},distance:10,useDragHandle:!0,helperClass:"border-t border-b after:hidden",lockAxis:"y",lockToContainerEdges:!0,children:n.options.map((function(e,t){if(e.deleted)return null;var i=n.default&&0===t;return(0,s.jsx)(U,{index:t,option:e,disabled:i||l,isDisabled:i||l,disableDelete:1===n.options.length,error:f.includes(e.id),focused:!!h},e.id)}))}),(null===c||void 0===c?void 0:c.options)&&(0,s.jsx)("p",{className:"mt-2 text-sm text-red-500",children:c.options}),(0,s.jsx)(F,{title:"Add option",onClick:function(){return V(m,f)},fullWidth:!0,disabled:!p})]}):null]})}var G=n(94874),Q=[{_id:"name",name:"Name",fieldName:"fullName",required:!0,fieldType:"standard"},{_id:"email",name:"Email",fieldName:"email",required:!0,fieldType:"standard"},{_id:"phone",name:"Phone",fieldName:"phone",fieldType:"standard"},{_id:"company",name:"Company",fieldName:"company",fieldType:"standard"}];function Y(e,t){return!(!e||!e.length)&&e.includes(t._id)}function ee(e){var t=e.country,n=e.selectedFields,i=e.onSelectedFieldsChange,r=function(e,t){var r=function(e,t,n){if(n){var i=(0,o.Z)(e).concat([t._id]);return"address:full"===t._id?i.filter((function(e){return"address:full"===e._id&&"address"!==e.type||!e.startsWith("address:")})):[]}return e.filter((function(e){return e!==t._id}))}(n,e,t);i(r,e,t)},l=(0,a.useContext)(x),d=l.data.customFields,u=l.ui.loading,c=(0,N.Z)(),f=c.confirm,m=c.ConfirmDialog,h=(0,a.useContext)(y).updateView,p=(0,a.useMemo)((function(){return function(e){return[{_id:"address:full",name:"Full address",fieldName:"address:full",fieldType:"address"},{_id:"address:city",name:"City",fieldName:"address:city",fieldType:"address"},{_id:"address:state",name:(0,G.rv)(e),fieldName:"address:state",fieldType:"address"},{_id:"address:country",name:"Country",type:"dropdown",fieldName:"address:country",fieldType:"address"},{_id:"address:postalCode",name:(0,G.p2)(e),fieldName:"address:postalCode",fieldType:"address"}]}(t)}),[t]);return(0,s.jsxs)("div",{className:"flex-col justify-start items-start gap-2 inline-flex",children:[(0,s.jsx)("div",{className:"self-stretch flex-col justify-start items-start gap-2 flex pb-4",children:(0,s.jsx)("div",{className:"text-gray-900 text-sm font-normal leading-none",children:"Fields from your CRM contacts"})}),Q.map((function(e){return(0,s.jsx)(L,{field:e,selectable:!0,selected:e.required||Y(n,e),disabled:e.required,required:e.required,onSelectChange:r},e.id)})),(0,s.jsx)("hr",{className:"my-0 w-full"}),p.map((function(e){var t=function(e,t){var n=t.some((function(e){return e.startsWith("address:")}));if(!n)return!1;var i=t.includes("address:full");return("address:full"!==e._id||!i)&&i}(e,n);return(0,s.jsx)(L,{field:e,selectable:!0,selected:t||Y(n,e),onSelectChange:r,disabled:t,hideType:!0},e.id)})),(0,s.jsx)("hr",{className:"my-0 w-full"}),d.map((function(e){return(0,s.jsx)(L,{field:e,confirm:f,loading:u.deleteField,selectable:!0,editable:!0,selected:Y(n,e),onSelectChange:r},e._id)})),(0,s.jsx)(F,{title:"Add field",onClick:function(){return h("add")},fullWidth:!0,disabled:u.deleteField}),(0,s.jsxs)(m,{attention:!0,confirmText:"Delete",title:"Delete custom field",children:[(0,s.jsx)("p",{children:"Are you sure you want to delete this custom field?"}),(0,s.jsxs)("div",{className:"alert danger mt-4",children:[(0,s.jsx)(w.Z,{icon:"ExclamationIcon"}),(0,s.jsx)("p",{children:"Removing this field, will remove it from any contact forms as well as from all contacts in your CRM."})]})]})]})}var te={_id:null,name:"",type:null,options:[]},ne=(0,a.memo)((function(e){var t=e.action,n=void 0===t?"list":t,f=e.category,m=e.country,h=void 0===m?"us":m,p=e.customFields,v=e.customFieldsLoading,g=e.field,b=e.info,w=e.onUpdate,C=e.open,F=e.setOpen,N=e.selectedFields,Z=void 0===N?[]:N,k=e.onSelectedFieldsChange,_=function(e){var t=P(e);H(t),oe((function(e){return(0,r.Z)((0,i.Z)({},e),{customFields:!1})}))},A=function(e){u.Z9.error((null===e||void 0===e?void 0:e.message)||e||""),console.error(e)},T=function(e){e&&he((function(t){return t[t.length-1]===e?t:(0,o.Z)(t).concat([e])}))},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(0===me.length)return ve("list",!0),void le(g||te);var n=me[me.length-1],o=1;t&&"add"===n&&(n=me[me.length-2],o=2),H((function(t){return(0,r.Z)((0,i.Z)({},t),{customFields:(null===e||void 0===e?void 0:e.customFields)?e.customFields:t.customFields,defaultFields:(null===e||void 0===e?void 0:e.defaultFields)?e.defaultFields:t.defaultFields})})),ve(n,!0),le(g||te),he((function(e){return e.slice(0,e.length-o)}))},D=function(){me.length>0?M():F(!1)},K=function(e){var t=ae._id?V.customFields.map((function(t){return t._id===e._id?e:t})):(0,o.Z)(V.customFields).concat([e]),s=V.defaultFields.map((function(t){return t._id===e._id?e:t}));if(oe((function(e){return(0,r.Z)((0,i.Z)({},e),{saveField:!1})})),"edit"===n&&(null===g||void 0===g?void 0:g._id)===e._id)return H((function(e){return(0,r.Z)((0,i.Z)({},e),{customFields:t,defaultFields:s})})),he([]),F(!1);M({customFields:t,defaultFields:s},!0)},L=(0,d.Z)(),O=(0,a.useMemo)((function(){return new S(L)}),[L]),z=(0,a.useState)(P(p)),V=z[0],H=z[1],U=(0,a.useState)(f),X=U[0],G=U[1],Q=(0,a.useState)(W(n)),Y=Q[0],ne=Q[1],ie=(0,a.useState)({customFields:!1,deleteField:!1,saveField:!1}),re=ie[0],oe=ie[1],se=(0,a.useState)(g||te),ae=se[0],le=se[1],de=(0,a.useState)(""),ue=de[0],ce=de[1],fe=(0,a.useState)([]),me=fe[0],he=fe[1],pe=(0,a.useMemo)((function(){return v||Object.values(re).some((function(e){return e}))}),[re,v]),ve=(0,a.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t||T(Y),ne(W(e)),ce(q(e))}),[Y,n]);(0,a.useEffect)((function(){void 0===p&&void 0===v&&(oe((function(e){return(0,r.Z)((0,i.Z)({},e),{customFields:!0})})),O.getCustomFields(X).then(_).catch((function(e){A(e),oe((function(e){return(0,r.Z)((0,i.Z)({},e),{customFields:!1})}))})))}),[]),(0,a.useEffect)((function(){_(p)}),[p]),(0,a.useEffect)((function(){G(f)}),[f]),(0,a.useEffect)((function(){le(g||te)}),[g]),(0,a.useEffect)((function(){ve(n)}),[n]),(0,a.useEffect)((function(){C&&he([])}),[C]),(0,a.useEffect)((function(){if(!Y&&me.length<1&&C)return F(!1)}),[me.length,Y,F,C]),(0,a.useEffect)((function(){if(C&&!v&&w){var e=(0,o.Z)(V.defaultFields).concat((0,o.Z)(V.customFields));JSON.stringify(e)!==JSON.stringify(p)&&w(e)}}),[V]);var ge=(0,a.useCallback)((function(){if(ye&&!pe){oe((function(e){return(0,r.Z)((0,i.Z)({},e),{saveField:!0})}));var e=function(e){if(!(null===e||void 0===e?void 0:e.options)||!Array.isArray(e.options))return e;if(!e._id)return e;if(e.options.filter((function(e){return e.deleted})).length<1)return e;var t=Map.groupBy?Map.groupBy(e.options,(function(e){return e.name.toLowerCase()})):Array.prototype.groupToMap(e.options,(function(e){return e.name.toLowerCase()})),n=!0,r=!1,o=void 0;try{for(var s,a=function(){var t=(0,R.Z)(s.value,2),n=(t[0],t[1]);if(n.length<2)return"continue";var i=n.find((function(e){return e.deleted}));e.options=e.options.filter((function(e){return e.id!==i.id})),i.deleted=!1;var r=e.options.findLastIndex((function(e){return e.id===n[n.length-1].id}));e.options.splice(r,1,i)},l=t[Symbol.iterator]();!(n=(s=l.next()).done);n=!0)a()}catch(d){r=!0,o=d}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return(0,i.Z)({},e)}(ae);(e._id?O.updateCustomField(e):O.createCustomField(e)).then(K).catch((function(e){A(e),oe((function(e){return(0,r.Z)((0,i.Z)({},e),{saveField:!1})}))}))}}),[O,ae,ye,pe]),xe=(0,a.useMemo)((function(){if("edit"!==Y)return!1;var e=function(e,t){return t._id?e.find((function(e){return e._id===t._id})):null}(V.customFields,ae);if(!e){var t=ae.name,n=ae.options;return!!t||n.length>0&&n[0].name}return JSON.stringify(e)!==JSON.stringify(ae)}),[V.customFields,ae,Y]),ye=(0,a.useMemo)((function(){var e;if("edit"!==Y)return!0;if(!(null===(e=ae.name)||void 0===e?void 0:e.trim().length))return!1;if("dropdown"===ae.type||"checkbox"===ae.type){var t=ae.options.some((function(e){return!e.name||e.name.trim().length<1}));return!J(ae.options)&&(t?!t:ae.options.length>1)}return!0}),[Y,ae]),be=(0,a.useMemo)((function(){var e="Back",t=!0;switch(Y){case"add":e="Back";break;case"edit":e=xe?"Cancel":"Back";break;case"list":e="Cancel";break;case"select":e="Cancel",t=!1}return"Back"===e&&me.length<1&&(e="Close"),(0,s.jsxs)("div",{className:"flex items-end gap-4",children:[t&&(0,s.jsx)("button",{type:"button",className:"light",onClick:D,disabled:pe,children:e}),"select"===Y&&(0,s.jsx)(c.Z,{type:"button",className:"primary",onClick:function(){return F(!1)},loading:pe,children:"Done"}),"edit"===Y&&(0,s.jsx)(c.Z,{type:"button",className:"primary",onClick:ge,loading:pe,disabled:!xe||!ye,children:"Save"})]})}),[Y,xe,ye,ge,pe,me.length]),je=(0,a.useMemo)((function(){if(!b)return null;var e="string"===typeof b?b:ue;return e?(0,s.jsx)(l.Callout,{variant:"info",text:e}):e}),[b,ue]),we=(0,a.useMemo)((function(){return function(e,t){switch(e){case"add":return"Add ".concat(t?t.toLowerCase():"a custom"," field");case"edit":return"Edit the ".concat(t?t.toLowerCase():"custom"," field");case"select":return"Manage fields";default:return"Manage custom fields"}}(Y,null===ae||void 0===ae?void 0:ae.type)}),[Y,ae]),Ce=(0,a.useMemo)((function(){var e,t=function(e){var t=e.options;if(!Array.isArray(t))return[];if(!J(t))return[];var n=Map.groupBy?Map.groupBy(t,(function(e){return e.name.toLowerCase()})):Array.prototype.groupToMap(t,(function(e){return e.name.toLowerCase()})),i=[],r=!0,s=!1,a=void 0;try{for(var l,d=n[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var u,c=(0,R.Z)(l.value,2),f=(c[0],c[1]);f.length<2||(u=i).push.apply(u,(0,o.Z)(f.map((function(e){return e.id}))))}}catch(m){s=!0,a=m}finally{try{r||null==d.return||d.return()}finally{if(s)throw a}}return i}(ae);return{data:{customFields:V.customFields,defaultFields:V.defaultFields,category:X,activeField:ae,valid:ye},ui:{optionDuplicateIds:t,validationErrors:{options:xe&&t.length?"Options must be unique":null,label:xe&&(null===(e=ae.name)||void 0===e?void 0:e.trim().length)<1?"Field must have a label":null},view:Y,loading:re}}}),[ae,X,V.customFields,V.defaultFields,xe,ye,re,Y]),Fe=(0,a.useMemo)((function(){return{setCustomFields:H,setCategory:G,setActiveField:le,setLoading:oe,onError:A,updateView:ve}}),[ve]);return(0,s.jsx)(y.Provider,{value:Fe,children:(0,s.jsx)(x.Provider,{value:Ce,children:(0,s.jsxs)(B.u,{contentClassName:(0,u.AK)("w-full md:w-140 lg:pb-4 gap-0","list"===Y&&"lg:px-2"),open:C,setOpen:F,title:we,buttons:be,footerHasMarginTop:!1,children:[je&&"select"!==Y?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-full mb-0 bg-slate-50 rounded-md justify-start items-start gap-3 inline-flex bg-blue-50",children:je}),(0,s.jsx)("hr",{className:"w-full border-gray-200 my-4"})]}):null,function(){if(re.customFields)return(0,s.jsx)(E.Z,{variant:"list"});if(me.length<1&&!Y)return null;switch(Y){case"add":return(0,s.jsx)(j,{});case"edit":return(0,s.jsx)($,{field:ae,onSave:ge,loading:pe});case"select":return(0,s.jsx)(ee,{country:h,selectedFields:Z,onSelectedFieldsChange:k});case"list":return(0,s.jsx)(I,{});default:return console.error("Invalid view ".concat(Y)),(0,s.jsx)(I,{})}}()]})})})}))},94874:function(e,t,n){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us";return"ca"===e.toLowerCase()?"Province":"State"}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us";return"us"===e.toLowerCase()?"ZIP code":"Postal code"}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us";return"us"===e.toLowerCase()?"label.zipCode":"label.postalCode"}n.d(t,{oj:function(){return o},p2:function(){return r},rv:function(){return i}})}}]);