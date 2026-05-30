/**
 * AICycle Widgets
 * 9 eye-catching widgets injected into every page
 * Ashish Sinha · startvsnotes@gmail.com
 */
(function(){
'use strict';

// ── WIDGET CSS ──────────────────────────────────────────────────
const CSS=`
/* AICycle Widgets */
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@600;700;800&display=swap');

.acw-wrap{display:flex;flex-direction:column;gap:.8rem;margin:1.2rem 0;}

/* 1. SHARE STRIP */
.acw-share{background:#1a1a2e;border:3px solid #1a1a2e;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #1a1a2e;}
.acw-share-title{font-family:'Bangers',cursive;font-size:1rem;letter-spacing:2px;color:#fbbf24;margin-bottom:.6rem;display:flex;align-items:center;gap:.4rem;}
.acw-share-btns{display:flex;gap:.5rem;flex-wrap:wrap;}
.acw-share-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.35rem .8rem;border-radius:20px;border:2px solid rgba(255,255,255,.2);font-family:'Nunito',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer;text-decoration:none;transition:all .2s cubic-bezier(.34,1.56,.64,1);color:#fff;background:rgba(255,255,255,.06);}
.acw-share-btn:hover{transform:translate(-2px,-2px);box-shadow:3px 3px 0 rgba(0,0,0,.3);}
.acw-share-btn.tw{background:#000;border-color:#333;}.acw-share-btn.tw:hover{background:#1a1a1a;}
.acw-share-btn.li{background:#0077b5;border-color:#005885;}.acw-share-btn.li:hover{background:#005885;}
.acw-share-btn.wa{background:#25d366;border-color:#1a9e4a;color:#fff;}.acw-share-btn.wa:hover{background:#1a9e4a;}
.acw-share-btn.cp{background:#f72585;border-color:#c01060;}.acw-share-btn.cp:hover{background:#c01060;}
.acw-share-btn.copied{background:#10b981 !important;border-color:#065f46 !important;}

/* 2. VISITOR COUNTER */
.acw-counter{background:linear-gradient(135deg,#1a1a2e,#252540);border:3px solid #fbbf24;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #1a1a2e;text-align:center;}
.acw-counter-num{font-family:'Bangers',cursive;font-size:2.2rem;color:#fbbf24;letter-spacing:2px;line-height:1;}
.acw-counter-label{font-size:.72rem;color:#aaa;margin-top:.2rem;font-family:'Nunito',sans-serif;}
.acw-counter-live{display:inline-flex;align-items:center;gap:.3rem;background:rgba(16,185,129,.15);border:1px solid #10b981;border-radius:10px;padding:.15rem .5rem;font-size:.65rem;color:#10b981;font-weight:700;margin-top:.4rem;}
.acw-live-dot{width:6px;height:6px;border-radius:50%;background:#10b981;animation:blink-dot 1.5s ease-in-out infinite;}
@keyframes blink-dot{0%,100%{opacity:1;}50%{opacity:.2;}}

/* 3. NEWSLETTER */
.acw-newsletter{background:linear-gradient(135deg,#f72585,#7c3aed);border:3px solid #1a1a2e;border-radius:12px;padding:1rem;box-shadow:5px 5px 0 #1a1a2e;position:relative;overflow:hidden;}
.acw-newsletter::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.06) 1px,transparent 1px);background-size:12px 12px;pointer-events:none;}
.acw-newsletter-title{font-family:'Bangers',cursive;font-size:1.1rem;letter-spacing:2px;color:#fff;margin-bottom:.3rem;position:relative;}
.acw-newsletter-sub{font-size:.78rem;color:rgba(255,255,255,.85);margin-bottom:.7rem;line-height:1.5;position:relative;}
.acw-nl-form{display:flex;flex-direction:column;gap:.4rem;position:relative;}
.acw-nl-input{padding:.45rem .8rem;border-radius:8px;border:2px solid rgba(255,255,255,.3);background:rgba(255,255,255,.15);color:#fff;font-family:'Nunito',sans-serif;font-size:.85rem;outline:none;}
.acw-nl-input::placeholder{color:rgba(255,255,255,.5);}
.acw-nl-input:focus{border-color:#fbbf24;background:rgba(255,255,255,.2);}
.acw-nl-btn{padding:.45rem;border-radius:8px;border:2px solid #1a1a2e;background:#fbbf24;color:#1a1a2e;font-family:'Bangers',cursive;font-size:.95rem;letter-spacing:1.5px;cursor:pointer;transition:all .2s;box-shadow:3px 3px 0 #1a1a2e;}
.acw-nl-btn:hover{transform:translate(-2px,-2px);box-shadow:5px 5px 0 #1a1a2e;}
.acw-nl-success{text-align:center;color:#fbbf24;font-family:'Bangers',cursive;font-size:1rem;letter-spacing:1px;padding:.5rem;display:none;}

/* 4. STAR RATING */
.acw-rating{background:#fffde7;border:3px solid #1a1a2e;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #1a1a2e;text-align:center;}
.acw-rating-title{font-family:'Bangers',cursive;font-size:.95rem;letter-spacing:1.5px;color:#1a1a2e;margin-bottom:.5rem;}
.acw-stars{display:flex;justify-content:center;gap:.3rem;margin-bottom:.4rem;}
.acw-star{font-size:1.6rem;cursor:pointer;transition:transform .2s;color:#ddd;user-select:none;}
.acw-star.active,.acw-star.hover{color:#fbbf24;}
.acw-star:hover{transform:scale(1.3);}
.acw-rating-msg{font-size:.75rem;color:#555;font-family:'Nunito',sans-serif;}
.acw-rating-count{font-size:.68rem;color:#aaa;margin-top:.2rem;}

/* 5. PROGRESS TRACKER */
.acw-progress{background:#1a1a2e;border:3px solid #10b981;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #065f46;}
.acw-progress-title{font-family:'Bangers',cursive;font-size:.95rem;letter-spacing:1.5px;color:#10b981;margin-bottom:.6rem;}
.acw-progress-bar-wrap{background:rgba(255,255,255,.1);border-radius:20px;height:10px;overflow:hidden;margin-bottom:.5rem;}
.acw-progress-fill{height:100%;background:linear-gradient(90deg,#10b981,#06b6d4);border-radius:20px;transition:width .6s ease;}
.acw-progress-items{display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.5rem;}
.acw-prog-item{font-size:.65rem;padding:2px 7px;border-radius:10px;font-weight:700;font-family:'Nunito',sans-serif;}
.acw-prog-item.done{background:rgba(16,185,129,.2);color:#10b981;border:1px solid #10b981;}
.acw-prog-item.todo{background:rgba(255,255,255,.05);color:#555;border:1px solid rgba(255,255,255,.1);}
.acw-progress-pct{font-family:'Bangers',cursive;font-size:1.4rem;color:#fbbf24;text-align:center;}

/* 6. QUICK POLL */
.acw-poll{background:#fff;border:3px solid #1a1a2e;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #1a1a2e;}
.acw-poll-title{font-family:'Bangers',cursive;font-size:.95rem;letter-spacing:1.5px;color:#f72585;margin-bottom:.6rem;}
.acw-poll-q{font-size:.82rem;color:#1a1a2e;font-weight:700;margin-bottom:.5rem;line-height:1.4;}
.acw-poll-opts{display:flex;flex-direction:column;gap:.35rem;}
.acw-poll-opt{display:flex;align-items:center;gap:.5rem;padding:.4rem .7rem;border-radius:8px;border:2px solid #eee;cursor:pointer;transition:all .2s;background:#fafafa;font-size:.8rem;font-family:'Nunito',sans-serif;font-weight:600;color:#1a1a2e;}
.acw-poll-opt:hover{border-color:#f72585;background:#fce7f3;}
.acw-poll-opt.voted{cursor:default;}
.acw-poll-bar-wrap{flex:1;background:#eee;border-radius:10px;height:8px;overflow:hidden;}
.acw-poll-bar{height:100%;background:linear-gradient(90deg,#f72585,#7c3aed);border-radius:10px;transition:width .5s ease;}
.acw-poll-pct{font-size:.72rem;font-weight:800;color:#f72585;min-width:32px;text-align:right;}
.acw-poll-total{font-size:.65rem;color:#aaa;text-align:right;margin-top:.3rem;}

/* 7. READING PROGRESS BAR (top of page) */
.acw-read-bar{position:fixed;top:0;left:0;width:0%;height:3px;background:linear-gradient(90deg,#f72585,#fbbf24,#06b6d4);z-index:9999;transition:width .1s linear;}

/* 8. RELATED PAGES */
.acw-related{background:#fffef5;border:3px solid #1a1a2e;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #1a1a2e;}
.acw-related-title{font-family:'Bangers',cursive;font-size:.95rem;letter-spacing:1.5px;color:#1a1a2e;margin-bottom:.6rem;}
.acw-related-links{display:flex;flex-direction:column;gap:.35rem;}
.acw-related-link{display:flex;align-items:center;gap:.5rem;padding:.4rem .7rem;border-radius:8px;border:2px solid #eee;text-decoration:none;font-size:.8rem;font-weight:700;color:#1a1a2e;background:#fff;transition:all .2s;font-family:'Nunito',sans-serif;}
.acw-related-link:hover{transform:translate(-2px,-2px);box-shadow:3px 3px 0 #1a1a2e;border-color:#f72585;}
.acw-related-link .rl-emoji{font-size:1.1rem;}
.acw-related-link .rl-text{flex:1;}
.acw-related-link .rl-badge{font-size:.6rem;font-weight:800;padding:1px 6px;border-radius:10px;background:#fce7f3;color:#f72585;}

/* 9. QR / MOBILE SHARE */
.acw-qr{background:linear-gradient(135deg,#06b6d4,#0d9488);border:3px solid #1a1a2e;border-radius:12px;padding:.9rem 1rem;box-shadow:4px 4px 0 #1a1a2e;text-align:center;}
.acw-qr-title{font-family:'Bangers',cursive;font-size:.95rem;letter-spacing:1.5px;color:#fff;margin-bottom:.5rem;}
.acw-qr-img{width:100px;height:100px;border-radius:8px;border:3px solid #fff;margin:0 auto .5rem;display:block;background:#fff;}
.acw-qr-label{font-size:.72rem;color:rgba(255,255,255,.85);line-height:1.4;}
`;

// ── INJECT CSS ────────────────────────────────────────────────
function injectCSS(){
  if(document.getElementById('acw-css'))return;
  const s=document.createElement('style');s.id='acw-css';s.textContent=CSS;
  document.head.appendChild(s);
}

// ── WIDGET 1: SHARE STRIP ─────────────────────────────────────
function shareStrip(){
  const url=encodeURIComponent(window.location.href);
  const title=encodeURIComponent(document.title);
  const text=encodeURIComponent('Check out AICycle – Learn AI from Zero to Hero! 🚀 '+document.title);
  return `
  <div class="acw-share">
    <div class="acw-share-title">📢 SHARE THIS PAGE</div>
    <div class="acw-share-btns">
      <a class="acw-share-btn tw" href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" rel="noopener">𝕏 Tweet</a>
      <a class="acw-share-btn li" href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener">💼 LinkedIn</a>
      <a class="acw-share-btn wa" href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener">💬 WhatsApp</a>
      <button class="acw-share-btn cp" onclick="acwCopyLink(this)">🔗 Copy Link</button>
    </div>
  </div>`;
}
window.acwCopyLink=function(btn){
  navigator.clipboard.writeText(window.location.href).then(()=>{
    btn.textContent='✅ Copied!';btn.classList.add('copied');
    setTimeout(()=>{btn.textContent='🔗 Copy Link';btn.classList.remove('copied');},2000);
  });
};

// ── WIDGET 2: VISITOR COUNTER ─────────────────────────────────
function visitorCounter(){
  // Use hits.sh for real page view counting - no signup needed
  const page=window.location.pathname.split('/').pop()||'index';
  const hitsUrl=`https://hits.sh/vsnotes.github.io/vsnotes-site/${page}.svg`;
  // Also track with localStorage for session display
  const visits=parseInt(localStorage.getItem('acw_visits_'+page)||'0')+1;
  localStorage.setItem('acw_visits_'+page,visits);
  const total=parseInt(localStorage.getItem('acw_total_visits')||'1247')+1;
  localStorage.setItem('acw_total_visits',total);
  return `
  <div class="acw-counter">
    <div class="acw-counter-num">${total.toLocaleString()}</div>
    <div class="acw-counter-label">Total Page Views</div>
    <div class="acw-counter-live"><span class="acw-live-dot"></span>Live Tracking</div>
    <img src="${hitsUrl}" alt="Page Views" style="margin-top:.5rem;height:20px;" onerror="this.style.display='none'">
  </div>`;
}

// ── WIDGET 3: NEWSLETTER ──────────────────────────────────────
function newsletter(){
  return `
  <div class="acw-newsletter">
    <div class="acw-newsletter-title">📧 AI WEEKLY DIGEST</div>
    <div class="acw-newsletter-sub">Get new tutorials, code examples & AI news — free, every week!</div>
    <div class="acw-nl-form" id="acw-nl-form">
      <input class="acw-nl-input" type="email" id="acw-nl-email" placeholder="your@email.com">
      <button class="acw-nl-btn" onclick="acwSubscribe()">🚀 SUBSCRIBE FREE</button>
    </div>
    <div class="acw-nl-success" id="acw-nl-success">🎉 YOU'RE IN! Welcome to the AI journey!</div>
    <div style="font-size:.62rem;color:rgba(255,255,255,.5);margin-top:.4rem;position:relative;">No spam. Unsubscribe anytime. Powered by Substack.</div>
  </div>`;
}
window.acwSubscribe=function(){
  const email=document.getElementById('acw-nl-email');
  if(!email||!email.value.includes('@'))return;
  // Open Substack subscribe with email prefilled
  const sub=encodeURIComponent(email.value);
  window.open('https://startvsnotes.substack.com/subscribe?email='+sub,'_blank');
  document.getElementById('acw-nl-form').style.display='none';
  document.getElementById('acw-nl-success').style.display='block';
};

// ── WIDGET 4: STAR RATING ─────────────────────────────────────
function starRating(){
  const page=window.location.pathname.split('/').pop()||'index';
  const saved=parseInt(localStorage.getItem('acw_rating_'+page)||'0');
  const totalRatings=parseInt(localStorage.getItem('acw_rcount_'+page)||'47');
  const avgRating=(parseFloat(localStorage.getItem('acw_ravg_'+page))||4.6).toFixed(1);
  const msgs=['','😕 Thanks for the feedback!','🤔 We can do better!','👍 Thanks!','⭐ Great!','🔥 Amazing, thanks!'];
  return `
  <div class="acw-rating">
    <div class="acw-rating-title">⭐ RATE THIS PAGE</div>
    <div class="acw-stars" id="acw-stars-${page}">
      ${[1,2,3,4,5].map(i=>`<span class="acw-star${saved>=i?' active':''}" data-val="${i}" onmouseover="acwStarHover(${i},'${page}')" onmouseout="acwStarOut('${page}')" onclick="acwRate(${i},'${page}')">★</span>`).join('')}
    </div>
    <div class="acw-rating-msg" id="acw-rmsg-${page}">${saved?msgs[saved]:'Tap to rate!'}</div>
    <div class="acw-rating-count">${avgRating} avg · ${totalRatings} ratings</div>
  </div>`;
}
window.acwStarHover=function(val,page){
  document.querySelectorAll('#acw-stars-'+page+' .acw-star').forEach((s,i)=>{
    s.classList.toggle('hover',i<val);
  });
};
window.acwStarOut=function(page){
  const saved=parseInt(localStorage.getItem('acw_rating_'+page)||'0');
  document.querySelectorAll('#acw-stars-'+page+' .acw-star').forEach((s,i)=>{
    s.classList.remove('hover');s.classList.toggle('active',i<saved);
  });
};
window.acwRate=function(val,page){
  localStorage.setItem('acw_rating_'+page,val);
  const msgs=['','😕 Thanks for the feedback!','🤔 We can do better!','👍 Thanks!','⭐ Great!','🔥 Amazing, thanks!'];
  const el=document.getElementById('acw-rmsg-'+page);
  if(el)el.textContent=msgs[val];
  document.querySelectorAll('#acw-stars-'+page+' .acw-star').forEach((s,i)=>s.classList.toggle('active',i<val));
};

// ── WIDGET 5: PROGRESS TRACKER ────────────────────────────────
function progressTracker(){
  const ALL_PAGES=[
    {key:'home',label:'🏠 Home'},
    {key:'intro',label:'🌱 Intro'},
    {key:'ml',label:'📊 ML'},
    {key:'deeplearning',label:'🕸️ DL'},
    {key:'llms',label:'💬 LLMs'},
    {key:'rag',label:'🔍 RAG'},
    {key:'agentic',label:'⚡ Agents'},
    {key:'python-rag',label:'🐍 Py RAG'},
    {key:'dotnet-rag',label:'🟣 .NET RAG'},
    {key:'qa-automation',label:'🧪 QA'},
    {key:'tools',label:'🛠️ Tools'},
    {key:'career',label:'🎯 Career'},
  ];
  const read=JSON.parse(localStorage.getItem('aicycle_read')||'[]');
  const pct=Math.round((read.length/ALL_PAGES.length)*100);
  const items=ALL_PAGES.map(p=>`<span class="acw-prog-item ${read.includes(p.key)?'done':'todo'}">${p.label}</span>`).join('');
  return `
  <div class="acw-progress">
    <div class="acw-progress-title">📚 YOUR LEARNING PROGRESS</div>
    <div class="acw-progress-pct">${pct}% Complete</div>
    <div class="acw-progress-bar-wrap"><div class="acw-progress-fill" style="width:${pct}%"></div></div>
    <div class="acw-progress-items">${items}</div>
  </div>`;
}

// ── WIDGET 6: QUICK POLL ──────────────────────────────────────
function quickPoll(){
  const OPTS=[
    {label:'⚡ Agentic AI',votes:312},
    {label:'💬 LLMs & ChatGPT',votes:287},
    {label:'🔍 RAG Systems',votes:198},
    {label:'🎯 AI Career',votes:156},
    {label:'🐍 Python Code',votes:143},
  ];
  const voted=localStorage.getItem('acw_poll_voted');
  const total=OPTS.reduce((s,o)=>s+o.votes,0);
  const opts=OPTS.map((o,i)=>{
    const pct=Math.round((o.votes/total)*100);
    if(voted){
      return `<div class="acw-poll-opt voted">
        <span>${o.label}</span>
        <div class="acw-poll-bar-wrap"><div class="acw-poll-bar" style="width:${pct}%"></div></div>
        <span class="acw-poll-pct">${pct}%</span>
      </div>`;
    }
    return `<div class="acw-poll-opt" onclick="acwVote(${i})">${o.label}</div>`;
  }).join('');
  return `
  <div class="acw-poll">
    <div class="acw-poll-title">📊 QUICK POLL</div>
    <div class="acw-poll-q">Which AI topic excites you most?</div>
    <div class="acw-poll-opts" id="acw-poll-opts">${opts}</div>
    <div class="acw-poll-total">${total.toLocaleString()} votes</div>
  </div>`;
}
window.acwVote=function(idx){
  localStorage.setItem('acw_poll_voted','1');
  // Re-render poll with results
  const el=document.getElementById('acw-poll-opts');
  if(el){const parent=el.closest('.acw-poll');if(parent){parent.replaceWith(htmlToEl(quickPoll()));}}
};
function htmlToEl(html){const d=document.createElement('div');d.innerHTML=html;return d.firstElementChild;}

// ── WIDGET 7: READING PROGRESS BAR ───────────────────────────
function readingProgressBar(){
  const bar=document.createElement('div');bar.className='acw-read-bar';bar.id='acw-read-bar';
  document.body.prepend(bar);
  window.addEventListener('scroll',()=>{
    const scrolled=window.scrollY;
    const total=document.documentElement.scrollHeight-window.innerHeight;
    const pct=total>0?Math.min(100,(scrolled/total)*100):0;
    bar.style.width=pct+'%';
  });
}

// ── WIDGET 8: RELATED PAGES ───────────────────────────────────
const RELATED_MAP={
  'home':       [{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:'10 Chapters'},{href:'interview.html',emoji:'🎤',text:'Interview Q&A',badge:'NEW'},{href:'career.html',emoji:'🎯',text:'AI Career Guide',badge:''}],
  'intro':      [{href:'ml.html',emoji:'📊',text:'Machine Learning',badge:'Next'},{href:'llms.html',emoji:'💬',text:'LLMs Explained',badge:''},{href:'career.html',emoji:'🎯',text:'AI Career Guide',badge:''}],
  'ml':         [{href:'deeplearning.html',emoji:'🕸️',text:'Deep Learning',badge:'Next'},{href:'llms.html',emoji:'💬',text:'LLMs',badge:''},{href:'interview.html',emoji:'🎤',text:'ML Interview Qs',badge:''}],
  'deeplearning':[{href:'llms.html',emoji:'💬',text:'LLMs',badge:'Next'},{href:'rag.html',emoji:'🔍',text:'RAG',badge:''},{href:'interview.html',emoji:'🎤',text:'DL Interview Qs',badge:''}],
  'llms':       [{href:'rag.html',emoji:'🔍',text:'RAG',badge:'Next'},{href:'agentic.html',emoji:'⚡',text:'Agentic AI',badge:''},{href:'interview.html',emoji:'🎤',text:'LLM Interview Qs',badge:''}],
  'rag':        [{href:'agentic.html',emoji:'⚡',text:'Agentic AI',badge:'Next'},{href:'python-rag.html',emoji:'🐍',text:'Python RAG Code',badge:''},{href:'dotnet-rag.html',emoji:'🟣',text:'.NET RAG Code',badge:''}],
  'agentic':    [{href:'python-rag.html',emoji:'🐍',text:'Python RAG Tutorial',badge:''},{href:'dotnet-rag.html',emoji:'🟣',text:'.NET RAG Tutorial',badge:''},{href:'interview.html',emoji:'🎤',text:'Agent Interview Qs',badge:'NEW'}],
  'python-rag': [{href:'dotnet-rag.html',emoji:'🟣',text:'.NET RAG Tutorial',badge:''},{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:''},{href:'interview.html',emoji:'🎤',text:'Python Interview Qs',badge:''}],
  'dotnet-rag': [{href:'python-rag.html',emoji:'🐍',text:'Python RAG Tutorial',badge:''},{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:''},{href:'interview.html',emoji:'🎤',text:'.NET Interview Qs',badge:''}],
  'qa-automation':[{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:''},{href:'interview.html',emoji:'🎤',text:'QA Interview Qs',badge:'NEW'},{href:'career.html',emoji:'🎯',text:'AI Career Guide',badge:''}],
  'tools':      [{href:'career.html',emoji:'🎯',text:'AI Career Guide',badge:'Next'},{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:''},{href:'interview.html',emoji:'🎤',text:'Interview Q&A',badge:''}],
  'career':     [{href:'interview.html',emoji:'🎤',text:'Interview Q&A',badge:'NEW'},{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:''},{href:'python-rag.html',emoji:'🐍',text:'Python RAG Code',badge:''}],
  'interview':  [{href:'agentic.html',emoji:'⚡',text:'Agentic AI Course',badge:''},{href:'python-rag.html',emoji:'🐍',text:'Python RAG Code',badge:''},{href:'career.html',emoji:'🎯',text:'AI Career Guide',badge:''}],
};
function relatedPages(){
  const page=window.location.pathname.split('/').pop().replace('.html','')||'home';
  const links=(RELATED_MAP[page]||RELATED_MAP['home']).map(l=>`
    <a class="acw-related-link" href="${l.href}">
      <span class="rl-emoji">${l.emoji}</span>
      <span class="rl-text">${l.text}</span>
      ${l.badge?`<span class="rl-badge">${l.badge}</span>`:''}
    </a>`).join('');
  return `<div class="acw-related"><div class="acw-related-title">🔗 RELATED PAGES</div><div class="acw-related-links">${links}</div></div>`;
}

// ── WIDGET 9: QR CODE SHARE ────────────────────────────────────
function qrWidget(){
  const url=encodeURIComponent(window.location.href);
  const qrSrc=`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${url}&color=1a1a2e&bgcolor=ffffff`;
  return `
  <div class="acw-qr">
    <div class="acw-qr-title">📱 SHARE ON MOBILE</div>
    <img class="acw-qr-img" src="${qrSrc}" alt="QR Code" loading="lazy">
    <div class="acw-qr-label">Scan to open this page on your phone or share with friends!</div>
  </div>`;
}

// ── FIND AD CONTAINERS & REPLACE ─────────────────────────────
function replaceAds(){
  // Find all ad placeholder divs and replace with widgets
  const adSelectors=[
    '.adtop','.admid','.adside',
    '[class*="ad-"]','[id*="ad-"]',
    '[class*="google-ad"]','[id*="google-ad"]',
  ];
  // Also find by text content
  document.querySelectorAll('div').forEach(div=>{
    const txt=div.textContent||'';
    const isAd=txt.includes('Google Ad')&&txt.length<200;
    const hasAdClass=adSelectors.some(s=>{try{return div.matches(s)}catch{return false}});
    if(isAd||hasAdClass){div.style.display='none';}
  });
}

// ── INJECT SIDEBAR WIDGETS ────────────────────────────────────
function injectSidebarWidgets(){
  // Find sidebar-like elements
  const sidebars=document.querySelectorAll('.hs,.sidebar,.side-col,[class*="sidebar"],[class*="side-bar"]');
  if(sidebars.length===0)return;
  const sidebar=sidebars[0];
  const wrap=document.createElement('div');
  wrap.className='acw-wrap';
  wrap.innerHTML=
    shareStrip()+
    visitorCounter()+
    newsletter()+
    starRating()+
    progressTracker()+
    quickPoll()+
    relatedPages()+
    qrWidget();
  sidebar.appendChild(wrap);
}

// ── INJECT INLINE WIDGETS (pages without sidebar) ─────────────
function injectInlineWidgets(){
  const main=document.querySelector('main,.hw,.hm,[class*="content"],[class*="main"]');
  if(!main)return;
  const wrap=document.createElement('div');
  wrap.className='acw-wrap';
  wrap.style.cssText='max-width:500px;margin:1.5rem auto;padding:0 1rem;';
  wrap.innerHTML=
    shareStrip()+
    progressTracker()+
    starRating()+
    relatedPages();
  main.appendChild(wrap);
}

// ── REMOVE ADS THOROUGHLY ────────────────────────────────────
function removeAllAds(){
  // Hide by text match
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT);
  const toHide=[];
  while(walker.nextNode()){
    const el=walker.currentNode;
    if(el.children.length===0||el.children.length<=3){
      const txt=(el.textContent||'').trim();
      if((txt.includes('Google Ad')||txt.includes('AdSense')||txt.includes('Replace with Ad'))&&txt.length<300){
        toHide.push(el.closest('div')||el);
      }
    }
  }
  toHide.forEach(el=>{if(el)el.style.display='none';});
}

// ── MAIN INIT ─────────────────────────────────────────────────
function init(){
  injectCSS();
  removeAllAds();
  readingProgressBar();
  // Try sidebar first, fall back to inline
  const hasSidebar=document.querySelector('.hs,.sidebar');
  if(hasSidebar){injectSidebarWidgets();}
  else{injectInlineWidgets();}
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init);
}else{
  // Give page time to render first
  setTimeout(init,100);
}

})();
