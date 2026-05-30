/**
 * AICycle Analytics & SEO
 * Ashish Sinha · startvsnotes@gmail.com
 * Injects: GA4 · Open Graph · Twitter Card · JSON-LD · Read Tracker
 * Replace G-XXXXXXXXXX with your real Google Analytics ID
 */
(function(){
'use strict';
const CONFIG={
  ga4Id:'G-XXXXXXXXXX',
  siteUrl:'https://vsnotes.github.io/vsnotes-site',
  siteName:'AICycle – Learn AI from Zero to Hero',
  author:'Ashish Sinha',
  twitterHandle:'@startvsnotes',
  defaultImage:'https://vsnotes.github.io/vsnotes-site/og-image.png',
};
const PAGE_META={
  'home':        {title:'AICycle – Learn AI from Zero to Hero',desc:'Complete visual guide to AI, ML, Deep Learning, LLMs, RAG and Agentic AI. Comic-style, beginner-friendly, with real Python and .NET code.',color:'#f72585'},
  'intro':       {title:'What is AI? Introduction | AICycle',desc:'History of AI, types, the AI family tree, myths vs reality — everything to start your AI journey.',color:'#fbbf24'},
  'ml':          {title:'Machine Learning Explained | AICycle',desc:'Supervised, unsupervised, reinforcement learning, key algorithms and Python examples.',color:'#2563eb'},
  'deeplearning':{title:'Deep Learning – Neural Networks | AICycle',desc:'CNNs, RNNs, Transformers, GANs and PyTorch code explained visually.',color:'#7c3aed'},
  'llms':        {title:'Large Language Models (LLMs) | AICycle',desc:'How GPT, Claude and Gemini work — tokenization, attention, prompting and comparison.',color:'#06b6d4'},
  'rag':         {title:'RAG – Retrieval Augmented Generation | AICycle',desc:'Ground LLMs in private data — vector databases, embeddings, FAISS, Chroma and Qdrant.',color:'#10b981'},
  'agentic':     {title:'Agentic AI Course – Python & .NET | AICycle',desc:'10-chapter course: autonomous AI agents with LangChain/LangGraph and Semantic Kernel.',color:'#f72585'},
  'python-rag':  {title:'Python RAG + Agentic AI Tutorial | AICycle',desc:'Build RAG-based Agentic AI with LangChain, FAISS, LangGraph and FastAPI.',color:'#2563eb'},
  'dotnet-rag':  {title:'.NET RAG + Agentic AI | AICycle',desc:'Enterprise RAG with Semantic Kernel, Azure OpenAI, Qdrant and ASP.NET Core in C#.',color:'#7c3aed'},
  'qa-automation':{title:'QA Automation with AI | AICycle',desc:'8-chapter course: Playwright/pytest (Python) and NUnit/.NET with AI self-healing.',color:'#0d9488'},
  'tools':       {title:'Best AI Tools 2025 | AICycle',desc:'ChatGPT, Claude, Gemini, Cursor, Midjourney — complete guide to the best AI tools.',color:'#f59e0b'},
  'career':      {title:'AI Career Guide – Jobs & Roadmap | AICycle',desc:'AI job roles, salary ranges (India/UK/USA), 12-month roadmap and certifications.',color:'#10b981'},
  'interview':   {title:'AI Interview Questions – Python & .NET | AICycle',desc:'Beginner to professional AI interview questions — ML, LLMs, RAG, Agentic AI, system design.',color:'#f72585'},
};
function getPageKey(){
  const p=window.location.pathname.split('/').pop().replace('.html','')||'home';
  return PAGE_META[p]?p:'home';
}
function injectGA4(){
  if(document.querySelector('[data-ga4]'))return;
  const s1=document.createElement('script');
  s1.async=true;s1.src='https://www.googletagmanager.com/gtag/js?id='+CONFIG.ga4Id;
  s1.setAttribute('data-ga4','1');document.head.appendChild(s1);
  const s2=document.createElement('script');s2.setAttribute('data-ga4','1');
  s2.textContent='window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","'+CONFIG.ga4Id+'",{page_title:document.title,page_location:window.location.href,send_page_view:true});';
  document.head.appendChild(s2);
}
function injectMeta(){
  const key=getPageKey();const m=PAGE_META[key]||PAGE_META['home'];
  const url=CONFIG.siteUrl+'/'+(key==='home'?'':key+'.html');
  const tags=[
    {name:'description',content:m.desc},{name:'author',content:CONFIG.author},
    {name:'robots',content:'index, follow'},{name:'theme-color',content:m.color},
    {property:'og:type',content:'website'},{property:'og:url',content:url},
    {property:'og:title',content:m.title},{property:'og:description',content:m.desc},
    {property:'og:image',content:CONFIG.defaultImage},{property:'og:site_name',content:CONFIG.siteName},
    {name:'twitter:card',content:'summary_large_image'},{name:'twitter:site',content:CONFIG.twitterHandle},
    {name:'twitter:title',content:m.title},{name:'twitter:description',content:m.desc},
    {name:'twitter:image',content:CONFIG.defaultImage},
    {name:'keywords',content:'AI, Machine Learning, Deep Learning, LLMs, RAG, Agentic AI, LangChain, Semantic Kernel, Python AI, .NET AI'},
  ];
  tags.forEach(a=>{
    const k=a.name?'name':'property';const v=a.name||a.property;
    if(document.querySelector('meta['+k+'="'+v+'"]'))return;
    const el=document.createElement('meta');
    Object.entries(a).forEach(([k2,v2])=>el.setAttribute(k2,v2));
    document.head.appendChild(el);
  });
  if(!document.querySelector('link[rel="canonical"]')){
    const l=document.createElement('link');l.rel='canonical';l.href=url;document.head.appendChild(l);
  }
  const schema={
    "@context":"https://schema.org","@type":"LearningResource",
    "name":m.title,"description":m.desc,"url":url,
    "author":{"@type":"Person","name":CONFIG.author,"email":"startvsnotes@gmail.com"},
    "publisher":{"@type":"Organization","name":"AICycle"},
    "educationalLevel":"Beginner to Advanced","inLanguage":"en","isAccessibleForFree":true
  };
  const ld=document.createElement('script');ld.type='application/ld+json';
  ld.textContent=JSON.stringify(schema);document.head.appendChild(ld);
}
function trackPageRead(){
  const key=getPageKey();
  const read=JSON.parse(localStorage.getItem('aicycle_read')||'[]');
  if(!read.includes(key)){read.push(key);localStorage.setItem('aicycle_read',JSON.stringify(read));}
}
function init(){injectGA4();injectMeta();trackPageRead();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
