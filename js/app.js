window.__ARENA_GALLERY=[{"src": "assets/gallery/g1/7g2gE.jpg", "g": "g1"}, {"src": "assets/gallery/g1/AOFBn.jpg", "g": "g1"}, {"src": "assets/gallery/g1/CDW0D.jpg", "g": "g1"}, {"src": "assets/gallery/g1/TTX3a.jpg", "g": "g1"}, {"src": "assets/gallery/g1/bVPaz.jpg", "g": "g1"}, {"src": "assets/gallery/g1/e82K8.jpg", "g": "g1"}, {"src": "assets/gallery/g1/h5mGD.jpg", "g": "g1"}, {"src": "assets/gallery/g1/hQI8Z.jpg", "g": "g1"}, {"src": "assets/gallery/g1/lL2DG.jpg", "g": "g1"}, {"src": "assets/gallery/g1/rbDQO.jpg", "g": "g1"}, {"src": "assets/gallery/g2/7mjcV.jpg", "g": "g2"}, {"src": "assets/gallery/g2/E5yGK.jpg", "g": "g2"}, {"src": "assets/gallery/g2/FTAFi.jpg", "g": "g2"}, {"src": "assets/gallery/g2/GbDSt.jpg", "g": "g2"}, {"src": "assets/gallery/g2/IBfC7.jpg", "g": "g2"}, {"src": "assets/gallery/g2/NOpA6.jpg", "g": "g2"}, {"src": "assets/gallery/g2/WFp4Q.jpg", "g": "g2"}, {"src": "assets/gallery/g2/gAQrx.jpg", "g": "g2"}, {"src": "assets/gallery/g2/oWrkT.jpg", "g": "g2"}, {"src": "assets/gallery/g2/oqRpc.jpg", "g": "g2"}, {"src": "assets/gallery/g3/RAZTQ.jpg", "g": "g3"}, {"src": "assets/gallery/g3/XZzTh.jpg", "g": "g3"}, {"src": "assets/gallery/g3/YFGk2.jpg", "g": "g3"}, {"src": "assets/gallery/g3/d3Vil.jpg", "g": "g3"}, {"src": "assets/gallery/g3/fv5OG.jpg", "g": "g3"}, {"src": "assets/gallery/g3/fvZpM.jpg", "g": "g3"}, {"src": "assets/gallery/g3/ltFMB.jpg", "g": "g3"}, {"src": "assets/gallery/g3/n91zw.jpg", "g": "g3"}, {"src": "assets/gallery/g3/pPd26.jpg", "g": "g3"}, {"src": "assets/gallery/g3/xpHw2.jpg", "g": "g3"}, {"src": "assets/gallery/g4/7uNmr.jpg", "g": "g4"}, {"src": "assets/gallery/g4/88AVF.jpg", "g": "g4"}, {"src": "assets/gallery/g4/BuFZv.jpg", "g": "g4"}, {"src": "assets/gallery/g4/QiQXW.jpg", "g": "g4"}, {"src": "assets/gallery/g4/Ryq8t.jpg", "g": "g4"}, {"src": "assets/gallery/g4/VEfwg.jpg", "g": "g4"}, {"src": "assets/gallery/g4/bZdbA.jpg", "g": "g4"}, {"src": "assets/gallery/g4/km07F.jpg", "g": "g4"}, {"src": "assets/gallery/g4/yUSqL.jpg", "g": "g4"}, {"src": "assets/gallery/g4/z3J0J.jpg", "g": "g4"}, {"src": "assets/gallery/g5/2WwWj.jpg", "g": "g5"}, {"src": "assets/gallery/g5/5GlWA.jpg", "g": "g5"}, {"src": "assets/gallery/g5/Kneyw.jpg", "g": "g5"}, {"src": "assets/gallery/g5/XeXYN.jpg", "g": "g5"}, {"src": "assets/gallery/g5/Z1Ans.jpg", "g": "g5"}, {"src": "assets/gallery/g5/ZQDiV.jpg", "g": "g5"}, {"src": "assets/gallery/g5/eOv7L.jpg", "g": "g5"}, {"src": "assets/gallery/g5/guEL7.jpg", "g": "g5"}, {"src": "assets/gallery/g5/rvm2y.jpg", "g": "g5"}, {"src": "assets/gallery/g5/wlm8S.jpg", "g": "g5"}, {"src": "assets/gallery/g6/27M4K.jpg", "g": "g6"}, {"src": "assets/gallery/g6/4AcHY.jpg", "g": "g6"}, {"src": "assets/gallery/g6/81UuQ.jpg", "g": "g6"}, {"src": "assets/gallery/g6/DK8td.jpg", "g": "g6"}, {"src": "assets/gallery/g6/N6lGi.jpg", "g": "g6"}, {"src": "assets/gallery/g6/QZNuK.jpg", "g": "g6"}, {"src": "assets/gallery/g6/VGGO8.jpg", "g": "g6"}, {"src": "assets/gallery/g6/fbd9l.jpg", "g": "g6"}, {"src": "assets/gallery/g6/hKWDN.jpg", "g": "g6"}, {"src": "assets/gallery/g6/uVUCt.jpg", "g": "g6"}];

/* ArenaCore Site JS — lightweight, fast, framework-free */
(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // QC PATCH v1.2: prevent any runtime crash from stopping the site
  const __AC_DEBUG = !!window.__AC_DEBUG;
  const safe = (fn) => { try{ fn(); } catch(e){ if(__AC_DEBUG) console.error('[ArenaCore]', fn.name, e); } };

  /* Theme */
  const THEME_KEY = "arenacore_theme";
  const rootEl = document.documentElement;

  function getSystemTheme(){
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function applyTheme(theme){
    const t = theme || getSystemTheme();
    rootEl.setAttribute("data-theme", t);
    const btn = $("#themeToggle");
    if(btn){
      btn.setAttribute("aria-pressed", t === "light" ? "true" : "false");
      btn.setAttribute("aria-label", t === "light" ? "Switch to dark mode" : "Switch to light mode");
    }
  }
  function initTheme(){
    const saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved);
    const btn = $("#themeToggle");
    if(btn){
      btn.addEventListener("click", () => {
        const current = rootEl.getAttribute("data-theme") || getSystemTheme();
        const next = current === "light" ? "dark" : "light";
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });
    }
    // Live update if user hasn't chosen
    if(!localStorage.getItem(THEME_KEY) && window.matchMedia){
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      mq.addEventListener?.("change", () => applyTheme(null));
    }
  }

  /* Mobile nav */
  function initMobileNav(){
    const burger = $("#burger");
    const panel = $("#mobilePanel");
    if(!burger || !panel) return;
    burger.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("show");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    $$("#mobilePanel a").forEach(a => a.addEventListener("click", () => {
      panel.classList.remove("show");
      burger.setAttribute("aria-expanded","false");
    }));
  }

  /* Bars animate */
  function initBars(){
    const bars = $$(".bar > span");
    if(!bars.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(!e.isIntersecting) return;
        const el = e.target;
        const w = el.getAttribute("data-w") || "70";
        el.style.width = `${w}%`;
        io.unobserve(el);
      });
    }, { threshold: 0.25 });
    bars.forEach(b => io.observe(b));
  }

  /* Counters */
  function initCounters(){
    const nums = $$(".num[data-count]");
    if(!nums.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(!e.isIntersecting) return;
        const el = e.target;
        const target = Number(el.getAttribute("data-count") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const prefix = el.getAttribute("data-prefix") || "";
        const duration = 900;
        const start = performance.now();
        const from = 0;

        function tick(now){
          const p = Math.min(1, (now - start) / duration);
          const val = Math.round(from + (target - from) * (1 - Math.pow(1-p, 3)));
          el.textContent = `${prefix}${val.toLocaleString()}${suffix}`;
          if(p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.35 });

    nums.forEach(n => io.observe(n));
  }

    /* ROI Calculator */
  function initROICalc(){
    const form = $("#roiForm");
    if(!form) return;

    // QC PATCH v1.1: switchable product mode
    let product = "ArenaCore";
    const productBtns = $$('[data-roi-product]');
    if(productBtns.length){
      productBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          productBtns.forEach(b => b.setAttribute('aria-pressed','false'));
          btn.setAttribute('aria-pressed','true');
          product = btn.getAttribute('data-roi-product') || 'ArenaCore';
          // Optional default tweaks when switching
          if(product === 'VERSUS'){
            // Favor a slightly higher default license to represent a full game license
            const lic = $("#roiLicense");
            if(lic && String(lic.value||'') === '75000') lic.value = '95000';
          }
          calc();
        });
      });
    }

    const outSavings = $("#roiSavings");
    const outRoi = $("#roiROI");
    const outPayback = $("#roiPayback");
    const outSummary = $("#roiSummary");

    const inputs = {
      team: $("#roiTeam"),
      cost: $("#roiCost"),
      months: $("#roiMonths"),
      rev: $("#roiRevenue"),
      timeSaved: $("#roiTimeSaved"),
      infraSave: $("#roiInfra"),
      license: $("#roiLicense")
    };

    function num(el){
      const v = Number(String(el?.value ?? "0").replace(/,/g,""));
      return isFinite(v) ? v : 0;
    }
    function money(n){
      return "$" + Math.round(n).toLocaleString();
    }

    // QC PATCH v1.4: Chart.js visuals (fix stretched canvases by enforcing CSS height)
    const hasChart = typeof window.Chart !== 'undefined';
    const lineCanvas = $("#roiChartLine");
    const barCanvas  = $("#roiChartBar");

    function enforceCanvasSize(c){
      if(!c) return;
      try{
        const cssH = parseFloat(getComputedStyle(c).height) || 0;
        if(cssH > 0){
          const dpr = window.devicePixelRatio || 1;
          c.height = Math.round(cssH * dpr);
          c.style.height = cssH + 'px';
        }
      }catch{}
    }

    enforceCanvasSize(lineCanvas);
    enforceCanvasSize(barCanvas);

    const lineCtx = lineCanvas?.getContext?.('2d');
    const barCtx  = barCanvas?.getContext?.('2d');
    let lineChart = null;
    let barChart = null;
    let chartsResizeBound = false;

    function cssVar(name, fallback){
      try{
        const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        return v || fallback;
      }catch{ return fallback; }
    }

    function initCharts(){
      if(!hasChart || !lineCtx || !barCtx) return;
      const c1 = cssVar('--accent', '#FF2E63');
      const c2 = cssVar('--accent2', '#FF3B4A');
      const grid = cssVar('--border', 'rgba(255,255,255,.10)');
      const txt = cssVar('--muted', '#A7B3C7');

      lineChart = new Chart(lineCtx, {
        type:'line',
        data:{ labels:[], datasets:[
          {label:'Baseline', data:[], borderColor:'rgba(255,255,255,.35)', tension:.35},
          {label:'With License', data:[], borderColor:c1, tension:.35}
        ]},
        options:{ responsive:true, maintainAspectRatio:false,
          animation:{ duration:380, easing:'easeOutCubic' },
          plugins:{ legend:{ labels:{ color: txt } } },
          scales:{ x:{ grid:{ color:grid }, ticks:{ color: txt } },
                  y:{ grid:{ color:grid }, ticks:{ color: txt } } }
        }
      });

      barChart = new Chart(barCtx, {
        type:'bar',
        data:{ labels:['License + Onboarding','Net Benefit'], datasets:[
          {label:'USD', data:[0,0], backgroundColor:[c2, c1], borderRadius:10}
        ]},
        options:{ responsive:true, maintainAspectRatio:false,
          animation:{ duration:380, easing:'easeOutCubic' },
          plugins:{ legend:{ display:false } },
          scales:{ x:{ grid:{ display:false }, ticks:{ color: txt } },
                  y:{ grid:{ color:grid }, ticks:{ color: txt } } }
        }
      });
    }

    function computeSeries({launchAt, rev, horizon, growth}){
      const points = [0,6,12,18,24,30,36];
      const out = [];
      const annual = 0.1054; // Battle Royale CAGR used in VERSUS projection charts
      const monthlyFactor = Math.pow(1+annual, 1/12);
      for(const m of points){
        let cum = 0;
        for(let i=0;i<=m;i++){
          if(i < launchAt) continue;
          const k = i - launchAt;
          const r = (growth === 'cagr') ? (rev * Math.pow(monthlyFactor, k)) : rev;
          cum += r;
        }
        out.push(Math.round(cum));
      }
      return {labels: points.map(x=>String(x)), data: out};
    }

    function updateCharts(devMonths, timeSaved, rev){
      if(!lineChart || !barChart) return;
      const baseLaunch = Math.max(0, devMonths);
      const fastLaunch = Math.max(0, devMonths - timeSaved);

      const base = computeSeries({launchAt: baseLaunch, rev, horizon: 36, growth: (product==='VERSUS'?'cagr':'flat')});
      const withLic = computeSeries({launchAt: fastLaunch, rev, horizon: 36, growth: (product==='VERSUS'?'cagr':'flat')});

      lineChart.data.labels = base.labels;
      lineChart.data.datasets[0].label = (product==='VERSUS') ? 'Build from scratch' : 'Baseline';
      lineChart.data.datasets[1].label = (product==='VERSUS') ? 'With VERSUS license' : 'With ArenaCore';
      lineChart.data.datasets[0].data = base.data;
      lineChart.data.datasets[1].data = withLic.data;
      lineChart.update('active');
    }

    initCharts();

    // QC PATCH v1.3: fix stretched/oversized chart rendering by forcing a safe resize
    if(!chartsResizeBound){
      chartsResizeBound = true;
      const r = () => { try{ enforceCanvasSize(lineCanvas); enforceCanvasSize(barCanvas); lineChart?.resize?.(); barChart?.resize?.(); }catch{} };
      window.addEventListener('resize', r, { passive:true });
      requestAnimationFrame(r);
      setTimeout(r, 0);
    }

    function calc(){
      const team = num(inputs.team);
      const cost = num(inputs.cost);
      const months = Math.max(1, num(inputs.months));
      const rev = Math.max(0, num(inputs.rev));
      const timeSaved = Math.max(0, num(inputs.timeSaved));
      const infra = Math.max(0, num(inputs.infraSave));
      const license = Math.max(0, num(inputs.license));

      const currentDevCost = team * cost * months;
      const currentInfra = infra * months;
      const currentTotal = currentDevCost + currentInfra;

      // ArenaCore / VERSUS license model (simple, transparent)
      const onboardingRate = (product === 'VERSUS') ? 0.04 : 0.06;
      const onboarding = Math.max(3500, currentDevCost * onboardingRate);
      const licTotal = license + onboarding;

      // Benefit model: revenue accelerated by timeSaved + infra savings
      const benefit = (rev * timeSaved) + currentInfra;
      const net = benefit - licTotal;
      const roi = licTotal > 0 ? (net / licTotal) * 100 : 0;

      const savings = Math.max(0, currentTotal - licTotal);
      const monthlyBenefit = (rev * (timeSaved / months)) + infra;
      const payback = monthlyBenefit > 0 ? (licTotal / monthlyBenefit) : Infinity;

      if(outSavings) outSavings.textContent = money(savings);
      if(outRoi) outRoi.textContent = (isFinite(roi) ? Math.round(roi) : 0) + "%";
      if(outPayback) outPayback.textContent = isFinite(payback) ? (payback.toFixed(1) + " mo") : "—";

      if(outSummary){
        const label = (product === 'VERSUS') ? 'VERSUS license' : 'ArenaCore license';
        outSummary.textContent = `${label}: ${money(licTotal)} | Net benefit: ${money(Math.max(0, net))}`;
      }

      updateCharts(months, timeSaved, rev);
      if(barChart){
        barChart.data.datasets[0].data = [Math.round(licTotal), Math.round(Math.max(0, net))];
        barChart.update('active');
      }
    }

    // Presets (kept)
    $$(".pill[data-preset]").forEach(btn => {
      btn.addEventListener("click", () => {
        const p = btn.getAttribute("data-preset");
        if(p === "indie"){
          inputs.team.value = 10; inputs.cost.value = 5500; inputs.months.value = 10;
          inputs.rev.value = 45000; inputs.timeSaved.value = 2; inputs.infraSave.value = 1200; inputs.license.value = 35000;
        }else if(p === "aa"){
          inputs.team.value = 28; inputs.cost.value = 8500; inputs.months.value = 14;
          inputs.rev.value = 180000; inputs.timeSaved.value = 3; inputs.infraSave.value = 4200; inputs.license.value = 75000;
        }else if(p === "aaa"){
          inputs.team.value = 65; inputs.cost.value = 12000; inputs.months.value = 18;
          inputs.rev.value = 520000; inputs.timeSaved.value = 4; inputs.infraSave.value = 12000; inputs.license.value = 155000;
        }
        calc();
      });
    });

    form.addEventListener("input", calc);
    form.addEventListener("submit", (e) => { e.preventDefault(); calc(); });

    $("#roiCopy")?.addEventListener("click", () => {
      calc();
      const text = `ROI Summary
${outSummary?.textContent || ""}
Savings: ${outSavings?.textContent || ""}
ROI: ${outRoi?.textContent || ""}
Payback: ${outPayback?.textContent || ""}`;
      navigator.clipboard?.writeText(text);
      const btn = $("#roiCopy");
      if(btn){
        const old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(()=>btn.textContent=old, 900);
      }
    });

    $("#roiPrint")?.addEventListener("click", () => window.print());

    calc();
  }

  /* Quote Builder */
  function initQuoteBuilder(){
    const qb = $("#quoteBuilder");
    if(!qb) return;

    const state = {
      tier: "studio",
      platforms: new Set(["PC"]),
      ccu: 5000,
      regions: "MENA",
      timeline: 6,
      fps: 120,
      tick: 60,
      authority: "Authoritative",
      product: "ArenaCore",
      addons: new Set(),
      name: "", email:"", company:"", notes:""
    };

    const pricing = {
      studio: 35000,
      pro: 75000,
      enterprise: 155000
    };
    const addonPrices = {
      "Dedicated Matchmaking": 9000,
      "Anti-Cheat Toolkit": 12000,
      "LiveOps Analytics": 8000,
      "Custom Rendering Pipeline": 15000,
      "White-Label Admin Portal": 6000,
      "Priority Support SLA": 14000,
      // QC PATCH v1.1: VERSUS license add-ons
      "Royalty Model & Publishing Rights": 18000,
      "Web3 NFT Layer": 22000,
      "Battle Royale Content Pack": 25000,
      // Arabic labels (same pricing)
      "نموذج العوائد وحقوق النشر": 18000,
      "طبقة Web3 / NFT": 22000,
      "حزمة محتوى Battle Royale": 25000
    };



    // QC PATCH v1.1: Quote Builder product toggle (ArenaCore vs VERSUS)
    const qbProdRadios = $$('input[name="product"]', qb);
    const qbVersusCards = $$('[data-versus="1"]', qb);

    function applyQBProduct(p){
      state.product = (p === 'VERSUS') ? 'VERSUS' : 'ArenaCore';
      // Show/hide VERSUS-only add-ons
      qbVersusCards.forEach(el => el.style.display = (state.product === 'VERSUS') ? '' : 'none');

      // Auto-configure modules based on product
      const mustEN = ["Royalty Model & Publishing Rights","Web3 NFT Layer","Battle Royale Content Pack"];
      const mustAR = ["نموذج العوائد وحقوق النشر","طبقة Web3 / NFT","حزمة محتوى Battle Royale"];
      $$(".chk-addon", qb).forEach(chk => {
        const v = chk.value;
        const isMust = mustEN.includes(v) || mustAR.includes(v);
        if(state.product === 'VERSUS'){
          if(isMust){ chk.checked = true; state.addons.add(v); }
        }else{
          if(isMust){ chk.checked = false; state.addons.delete(v); }
        }
      });
      update();
    }

    // Init from URL param (?product=VERSUS)
    const qp = new URLSearchParams(location.search);
    const qpProd = (qp.get('product') || '').toUpperCase();
    if(qpProd === 'VERSUS') applyQBProduct('VERSUS');

    // Init radios + listeners
    if(qbProdRadios.length){
      qbProdRadios.forEach(r => {
        r.checked = (r.value === state.product);
        r.addEventListener('change', () => applyQBProduct(r.value));
      });
    }

    const stepEls = $$(".step", qb);
    const stepPanels = $$(".step-panel", qb);
    let step = 1;

    function money(n){ return "$" + Math.round(n).toLocaleString(); }
    function setStep(n){
      step = Math.max(1, Math.min(4, n));
      stepEls.forEach((el,i)=>{
        el.classList.toggle("active", i+1 === step);
        el.classList.toggle("done", i+1 < step);
      });
      stepPanels.forEach((p,i)=> p.style.display = (i+1===step) ? "block" : "none");
      $("#qbPrev")?.toggleAttribute("disabled", step===1);
      $("#qbNext")?.toggleAttribute("disabled", step===4);
      $("#qbSubmit")?.style.setProperty("display", step===4 ? "inline-flex" : "none");
      $("#qbNext")?.style.setProperty("display", step===4 ? "none" : "inline-flex");
      update();
    }

    function update(){
      // Summary fields
      const isAr = (document.documentElement.lang === "ar") || (document.documentElement.dir === "rtl") || location.pathname.includes("/arabic/");
      const tierLabel = isAr
        ? ({studio:"استوديو", pro:"احترافي", enterprise:"مؤسسي"}[state.tier] || state.tier)
        : ({studio:"Studio", pro:"Pro", enterprise:"Enterprise"}[state.tier] || state.tier);

      const platformLabel = (p) => isAr
        ? ({PC:"PC", Console:"Console", Mobile:"Mobile"}[p] || p)
        : p;

      const authorityLabel = isAr
        ? ({Authoritative:"Authoritative (سلطوي)", Hybrid:"Hybrid (هجين)", Client:"Client-Heavy (عميل)"}[state.authority] || state.authority)
        : state.authority;

      const _sumTier = $("#sumTier"); if(_sumTier) _sumTier.textContent = tierLabel;
      const _sumPlatforms = $("#sumPlatforms"); if(_sumPlatforms) _sumPlatforms.textContent = Array.from(state.platforms).map(platformLabel).join(isAr ? "، " : ", ");
      const _sumCCU = $("#sumCCU"); if(_sumCCU) _sumCCU.textContent = state.ccu.toLocaleString();
      const _sumTimeline = $("#sumTimeline"); if(_sumTimeline) _sumTimeline.textContent = isAr ? `${state.timeline} شهر` : `${state.timeline} mo`;
      const _sumFPS = $("#sumFPS"); if(_sumFPS) _sumFPS.textContent = `${state.fps} FPS`;
      const _sumTick = $("#sumTick"); if(_sumTick) _sumTick.textContent = isAr ? `${state.tick} هرتز` : `${state.tick} Hz`;
      const _sumAuthority = $("#sumAuthority"); if(_sumAuthority) _sumAuthority.textContent = authorityLabel;

      // Pricing
      let total = pricing[state.tier] || 0;

      // Scale factors (simple, transparent)
      if(state.ccu > 20000) total += 20000;
      else if(state.ccu > 10000) total += 12000;
      else if(state.ccu > 5000) total += 7000;

      if(state.platforms.has("Console")) total += 14000;
      if(state.platforms.has("Mobile")) total += 9000;
      if(state.regions.includes("Global")) total += 10000;

      let addonsTotal = 0;
      state.addons.forEach(a => { addonsTotal += addonPrices[a] || 0; });
      total += addonsTotal;

      const _sumBase = $("#sumBase"); if(_sumBase) _sumBase.textContent = money(pricing[state.tier] || 0);
      const _sumScale = $("#sumScale"); if(_sumScale) _sumScale.textContent = money(total - (pricing[state.tier]||0) - addonsTotal);
      const _sumAddons = $("#sumAddons"); if(_sumAddons) _sumAddons.textContent = money(addonsTotal);
      const _sumTotal = $("#sumTotal"); if(_sumTotal) _sumTotal.textContent = money(total);

      // Share payload
      const payload = {
        tier: state.tier,
        platforms: Array.from(state.platforms),
        ccu: state.ccu,
        regions: state.regions,
        timeline: state.timeline,
        fps: state.fps,
        tick: state.tick,
        authority: state.authority,
        product: state.product,
        addons: Array.from(state.addons),
        name: state.name, email: state.email, company: state.company, notes: state.notes
      };
      const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
        .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/,"");
      const _share = $("#qbShareLink"); if(_share){ const _origin = (location.origin && location.origin !== "null") ? location.origin : ""; const _base = _origin ? (_origin + location.pathname) : location.pathname; _share.value = `${_base}#q=${encoded}`; }

      // Email link
      const subject = encodeURIComponent(`ArenaCore License Quote — ${payload.company || "Client"}`);
      const body = encodeURIComponent(
        `Hello ArenaCore Sales,\n\nPlease send a formal quote for the following configuration:\n\n` +
        `Tier: ${payload.tier}\nPlatforms: ${payload.platforms.join(", ")}\nCCU: ${payload.ccu}\nRegions: ${payload.regions}\nTimeline: ${payload.timeline} months\nTarget FPS: ${payload.fps}\nTick Rate: ${payload.tick}Hz\nAuthority: ${payload.authority}\nAdd-ons: ${payload.addons.join(", ") || "None"}\n\n` +
        `Client: ${payload.name} (${payload.email})\nCompany: ${payload.company}\nNotes: ${payload.notes}\n\nThanks.`
      );
      const _qbEmail = $("#qbEmail"); if(_qbEmail) _qbEmail.setAttribute("href", `mailto:sales@arenacore.com?subject=${subject}&body=${body}`);
    }

    // Load state from hash
    try{
      const m = location.hash.match(/q=([A-Za-z0-9\-_]+)/);
      if(m){
        const s = m[1].replace(/-/g,"+").replace(/_/g,"/");
        const json = decodeURIComponent(escape(atob(s)));
        const p = JSON.parse(json);
        if(p.tier) state.tier = p.tier;
        if(Array.isArray(p.platforms)) state.platforms = new Set(p.platforms);
        if(Number.isFinite(p.ccu)) state.ccu = p.ccu;
        if(p.regions) state.regions = p.regions;
        if(Number.isFinite(p.timeline)) state.timeline = p.timeline;
        if(Number.isFinite(p.fps)) state.fps = p.fps;
        if(Number.isFinite(p.tick)) state.tick = p.tick;
        if(p.authority) state.authority = p.authority;
        if(Array.isArray(p.addons)) state.addons = new Set(p.addons);
        state.name = p.name || ""; state.email = p.email || ""; state.company = p.company || ""; state.notes = p.notes || "";
      }
    }catch(_){ /* ignore */ }

    // Tier selection
    $$(".tier", qb).forEach(el => {
      el.addEventListener("click", () => {
        $$(".tier", qb).forEach(t=>t.classList.remove("selected"));
        el.classList.add("selected");
        state.tier = el.getAttribute("data-tier");
        update();
      });
    });
    // Init tier highlight
    const selected = $(`.tier[data-tier="${state.tier}"]`, qb);
    if(selected){ selected.classList.add("selected"); }

    // Inputs
    const bind = (sel, key, parseFn=(v)=>v) => {
      const el = $(sel, qb);
      if(!el) return;
      if(el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT"){
        el.value = String(state[key] ?? el.value ?? "");
        el.addEventListener("input", () => { state[key] = parseFn(el.value); update(); });
      }
    };
    bind("#qbCCU","ccu", v=>Math.max(0, Number(v)||0));
    bind("#qbTimeline","timeline", v=>Math.max(1, Number(v)||1));
    bind("#qbRegions","regions", v=>v);
    bind("#qbFPS","fps", v=>Math.max(30, Number(v)||120));
    bind("#qbTick","tick", v=>Math.max(20, Number(v)||60));
    bind("#qbAuthority","authority", v=>v);

    bind("#qbName","name", v=>v);
    bind("#qbEmailIn","email", v=>v);
    bind("#qbCompany","company", v=>v);
    bind("#qbNotes","notes", v=>v);

    // Platforms
    $$(".chk-platform", qb).forEach(chk => {
      const val = chk.value;
      chk.checked = state.platforms.has(val);
      chk.addEventListener("change", () => {
        if(chk.checked) state.platforms.add(val); else state.platforms.delete(val);
        update();
      });
    });

    // Addons
    $$(".chk-addon", qb).forEach(chk => {
      const val = chk.value;
      chk.checked = state.addons.has(val);
      chk.addEventListener("change", () => {
        if(chk.checked) state.addons.add(val); else state.addons.delete(val);
        update();
      });
    });

    // Step buttons
    $("#qbPrev")?.addEventListener("click", () => setStep(step-1));
    $("#qbNext")?.addEventListener("click", () => setStep(step+1));
    $("#qbSubmit")?.addEventListener("click", () => {
      // minimal validation
      const email = (state.email || "").trim();
      if(!email || !email.includes("@")){
        alert("Please enter a valid email to request a formal quote.");
        setStep(4);
        return;
      }
      alert("Quote prepared. Use Email, PDF export, or Share link.");
    });

    $("#qbCopyLink")?.addEventListener("click", async () => {
      const el = $("#qbShareLink");
      el.select();
      try{ await navigator.clipboard.writeText(el.value); }catch(_){}
      const btn = $("#qbCopyLink");
      const old = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(()=>btn.textContent=old, 900);
    });

    $("#qbPDF")?.addEventListener("click", () => window.print());

    setStep(1);
    update();
  }

  /* Contact form (CRM-ready + mailto fallback) */
  function initContactForm(){
    const form = $("#contactForm");
    if(!form) return;
    const msg = $("#contactMsg");
    const hp = $("#company_website"); // honeypot
    const human = $("#humanCheck");
    const humanAns = $("#humanAnswer");
    const isAr = (document.documentElement.lang === "ar") || (document.documentElement.dir === "rtl") || location.pathname.includes("/arabic/");

    // Generate a simple math question
    if(human && humanAns){
      const a = 2 + Math.floor(Math.random()*7);
      const b = 2 + Math.floor(Math.random()*8);
      human.textContent = isAr ? `${a} + ${b} = ؟` : `${a} + ${b} = ?`;
      humanAns.dataset.expected = String(a+b);
    }

    function setMessage(ok, text){
      if(!msg) return;
      msg.innerHTML = `<div class="${ok ? "success":"error"}">${text}</div>`;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(hp && hp.value.trim()){
        setMessage(false, isAr ? "تم حظر الإرسال." : "Submission blocked.");
        return;
      }
      const expected = humanAns?.dataset.expected || "";
      if(humanAns && humanAns.value.trim() !== expected){
        setMessage(false, isAr ? "يرجى إكمال التحقق البشري." : "Please complete the human check.");
        humanAns.focus();
        return;
      }

      // Required fields
      const required = $$("[data-required='1']", form);
      for(const el of required){
        if(!String(el.value||"").trim()){
          el.focus();
          setMessage(false, isAr ? "يرجى تعبئة الحقول المطلوبة." : "Please fill the required fields.");
          return;
        }
      }

      const data = Object.fromEntries(new FormData(form).entries());
      // CRM-ready: you can POST `data` to your endpoint in one place:
      // fetch("/api/lead", {method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)})

      // Mailto fallback
      const subject = encodeURIComponent(`ArenaCore Licensing Inquiry — ${data.company || "Company"}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nRole: ${data.role}\nCountry: ${data.country}\n\nProject:\n${data.message}\n\nPreferred Tier: ${data.tier}\nCCU: ${data.ccu}\nPlatforms: ${data.platforms}\nTimeline: ${data.timeline}\n`
      );
      const mail = `mailto:sales@arenacore.com?subject=${subject}&body=${body}`;

      setMessage(true, isAr ? `شكرًا لك — رسالتك جاهزة للإرسال. إذا لم يفتح البريد تلقائيًا اضغط <a href="${mail}">إرسال البريد</a>.` : `Thanks — your message is ready to send. If nothing opens automatically, click <a href="${mail}">send email</a>.`);
      window.location.href = mail;
      form.reset();
    });
  }

  /* 404 search */
  function init404(){
    const input = $("#siteSearch");
    const results = $("#searchResults");
    if(!input || !results) return;
    const isAr = (document.documentElement.lang === "ar") || (document.documentElement.dir === "rtl") || location.pathname.includes("/arabic/");
    const links = isAr ? [
      {t:"الرئيسية", u:"index.html"},
      {t:"منشئ العرض السعري", u:"quote-builder/"},
      {t:"حاسبة العائد", u:"index.html#roi"},
      {t:"فيديوهات العرض", u:"index.html#demos"},
      {t:"المواصفات التقنية", u:"index.html#specs"},
      {t:"تواصل معنا", u:"index.html#contact"}
    ] : [
      {t:"Home", u:"/"},
      {t:"Quote Builder", u:"/quote-builder/"},
      {t:"ROI Calculator", u:"/#roi"},
      {t:"Demo Videos", u:"/#demos"},
      {t:"Technical Specs", u:"/#specs"},
      {t:"Contact", u:"/#contact"}
    ];
    function render(q){
      const query = (q||"").trim().toLowerCase();
      const filtered = query ? links.filter(l => l.t.toLowerCase().includes(query)) : links;
      results.innerHTML = filtered.map(l => `<a class="btn" href="${l.u}">${l.t}</a>`).join(" ");
    }
    input.addEventListener("input", () => render(input.value));
    render("");
  }


  /* QC PATCH v1.1: Hero slider */
  function initHeroSlider(){
    const hero = $('.hero');
    if(!hero) return;
    const isAr = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar' || location.pathname.includes('/arabic/');
    const slides = $$('.hero-slide', hero);
    const dots = $$('.hero-dot', hero);
    const copyCol = $('.hero-grid > :first-child', hero);
    const badge = $('.badge', hero);
    const title = $('h1', hero);
    const lead = $('.hero-lead', hero);
    const actions = $$('.hero-actions .btn', hero);
    const heroCard = $('.hero-card', hero);
    if(slides.length < 2 || !title || !lead || !heroCard) return;

    copyCol?.classList.add('hero-copy');
    heroCard.classList.add('hero-card--emoji');
    heroCard.innerHTML = '<div class="hero-emoji-shell"><img class="hero-slide-emoji" src="" alt="" aria-hidden="true"></div>';
    const heroEmoji = $('.hero-slide-emoji', heroCard);
    $$('.hero .small, .hero .hero-target-mini, .hero [data-hero-target-mini]').forEach((el)=> el.remove());

    dots.forEach((dot, dotIndex)=>{
      dot.setAttribute('role', 'button');
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('aria-label', `${isAr ? 'الانتقال إلى الشريحة' : 'Go to slide'} ${dotIndex + 1}`);
      if(dot.dataset.loaderReady === '1') return;
      dot.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="hero-dot-track" cx="12" cy="12" r="10"></circle><circle class="hero-dot-progress" cx="12" cy="12" r="10"></circle></svg>';
      dot.dataset.loaderReady = '1';
    });

    const content = isAr ? [
      {
        badge: 'ترخيص محرك احتكاري • FPS / Arena / Esports',
        titleMain: 'حوّل مشروع الـFPS القادم إلى ساحة تنافسية حقيقية',
        titleAccent: '— مرخّص، محسّن، وجاهز للانطلاق.',
        lead: 'امنح فريقك محرك FPS احترافيًا مع أدوات تشغيل وبنية متعددة اللاعبين تساعدك على تقليل الهدر وتسريع الوصول إلى الإطلاق.',
        ctas: [
          {text:'ابنِ عرض ArenaCore', href:'quote-builder/'},
          {text:'احسب العائد', href:'#roi'},
          {text:'استعرض المزايا', href:'#features'}
        ],
        // QC Patch – Issue 2 fixed (bilingual)
        emoji: 'assets/emoji/Emoji_12_Weapon_Mods.png'
      },
      {
        badge: 'جاهزية اللعب الجماعي • مطابقة • تشغيل حي',
        titleMain: 'وسّع قتال الفرق بثقة',
        titleAccent: '— أنظمة Multiplayer مبنية للتشغيل الحي.',
        lead: 'من الـLobby والـMatchmaking إلى أنماط السيرفر السلطوي، يقدّم ArenaCore انتقالًا أنظف من النماذج الأولية إلى مباريات مستقرة على الإنترنت.',
        ctas: [
          {text:'استكشف قدرات اللعب الجماعي', href:'#features'},
          {text:'شاهد عروض الأنظمة', href:'#demos'},
          {text:'راجع المعايير التقنية', href:'#specs'}
        ],
        emoji: 'assets/emoji/Emoji_16_Multiplayer.png'
      },
      {
        badge: 'تسعير وترخيص • اقتصاديات الإطلاق • قياس الأثر',
        titleMain: 'حوّل اقتصاديات لعبتك إلى أرقام أوضح',
        titleAccent: '— ترخيص، أدوات، وتشغيل حي ضمن حزمة واحدة.',
        lead: 'قارن مسارات البناء، واحسب التوفير المتوقع، وقدّم مشروعك بلغة أداء وعائد يمكن للمستثمر والناشر فهمها بسرعة.',
        ctas: [
          {text:'احسب أثر الإيرادات', href:'#roi'},
          {text:'افتح منشئ العرض السعري', href:'quote-builder/'},
          {text:'اعرض إحصاءات السوق', href:'#stats'}
        ],
        emoji: 'assets/emoji/Emoji_03_Price_Quotation.png'
      },
      {
        badge: 'حزم عرض احترافية • مواد قرار • صيغ تقديم',
        titleMain: 'اكسب ثقة الناشرين أسرع',
        titleAccent: '— عرض بصري قوي وخط إنتاج جاهز لاتخاذ القرار.',
        lead: 'استخدم حزم العرض، المواد التوضيحية، وإطار المقارنة التجارية لتقديم مشروع الـFPS كفرصة شراء وترخيص احترافية.',
        ctas: [
          {text:'تصفّح حزم العرض', href:'#demos'},
          {text:'راجع بوابة المقارنة', href:'#stats'},
          {text:'اطلب حزمة التقديم', href:'#contact'}
        ],
        emoji: 'assets/emoji/Emoji_25_Media_Gallery.png'
      },
      {
        badge: 'صفقات B2B • دعم وتشغيل • ثقة الشركاء',
        titleMain: 'انتقل من المفهوم إلى الصفقة',
        titleAccent: '— حزمة ترخيص تقنع المشترين من أول نظرة.',
        lead: 'اجمع قدرات المحرك، التسعير، والدعم ضمن قصة تجارية أوضح تساعد المؤسسين والناشرين والمشترين B2B على اتخاذ القرار بثقة.',
        ctas: [
          {text:'تواصل مع فريق التراخيص', href:'#contact'},
          {text:'قارن مسارات النشر', href:'#specs'},
          {text:'ابدأ طلبًا مخصصًا', href:'quote-builder/'}
        ],
        // QC Patch – Issue 2 fixed (bilingual)
        emoji: 'assets/emoji/Emoji_07_License_Key.png'
      }
    ] : [
      {
        badge: 'Proprietary Engine Licensing • FPS / Arena / Esports',
        // QC Patch – Issue 1 fixed (bilingual)
        titleMain: 'Launch your next FPS franchise faster',
        titleAccent: '— licensed, optimized, and tournament-ready.',
        lead: 'Give your studio a production FPS stack with competitive loops, backend hooks, and deployment patterns designed to cut runway waste from day one.',
        ctas: [
          {text:'Build Your Arena Quote', href:'quote-builder/'},
          {text:'Model Launch ROI', href:'#roi'},
          {text:'Review Core Features', href:'#features'}
        ],
        // QC Patch – Issue 2 fixed (bilingual)
        emoji: 'assets/emoji/Emoji_12_Weapon_Mods.png'
      },
      {
        badge: 'Multiplayer Readiness • Match Flow • Live Operations',
        titleMain: 'Scale squad combat with confidence',
        titleAccent: '— multiplayer systems tuned for live operations.',
        lead: 'From lobbies and matchmaking flows to authoritative server patterns, ArenaCore helps teams move from prototype friction to stable online play.',
        ctas: [
          {text:'Explore Multiplayer Systems', href:'#features'},
          {text:'Watch Systems Demos', href:'#demos'},
          {text:'See Technical Specs', href:'#specs'}
        ],
        emoji: 'assets/emoji/Emoji_16_Multiplayer.png'
      },
      {
        badge: 'Licensing Economics • Revenue Modeling • Commercial Framing',
        titleMain: 'Monetize your shooter with clearer economics',
        titleAccent: '— licensing, tooling, and live-ops in one stack.',
        lead: 'Estimate cost savings, compare build paths, and frame your release around measurable performance, retention, and operating efficiency.',
        ctas: [
          {text:'Estimate Revenue Impact', href:'#roi'},
          {text:'Open Quote Builder', href:'quote-builder/'},
          {text:'View Industry Stats', href:'#stats'}
        ],
        emoji: 'assets/emoji/Emoji_03_Price_Quotation.png'
      },
      {
        badge: 'Publisher-Ready Presentation • Style Packs • Decision Support',
        titleMain: 'Win faster approvals from publishers',
        titleAccent: '— premium visuals, clean pipelines, and decision-ready proof.',
        lead: 'Use showcase assets, benchmark framing, and structured product packages to present your FPS project as a serious commercial opportunity.',
        ctas: [
          {text:'Browse Style Packs', href:'#demos'},
          {text:'Review Decision Portal', href:'#stats'},
          {text:'Request a Pitch Pack', href:'#contact'}
        ],
        emoji: 'assets/emoji/Emoji_25_Media_Gallery.png'
      },
      {
        badge: 'B2B Licensing • Support Structure • Buyer Confidence',
        titleMain: 'Move from concept reel to commercial engine deal',
        titleAccent: '— present a licensing package buyers can trust.',
        lead: 'Wrap engine capability, quote logic, and support framing into a cleaner commercial narrative for founders, publishers, and B2B buyers.',
        ctas: [
          {text:'Talk to Licensing Team', href:'#contact'},
          {text:'Compare Deployment Paths', href:'#specs'},
          {text:'Start a Custom Request', href:'quote-builder/'}
        ],
        // QC Patch – Issue 2 fixed (bilingual)
        // QC Patch – Issue 2 fixed (bilingual)
        emoji: 'assets/emoji/Emoji_07_License_Key.png'
      }
    ];

    let current = 0;
    let timer = null;
    let raf = null;
    const slideDuration = 10000;
    const circumference = 2 * Math.PI * 10;

    function setTitle(item){
      title.innerHTML = `<span class="hero-title-main">${item.titleMain}</span> <span class="hero-title-accent">${item.titleAccent}</span>`;
    }

    // QC Patch – Issue 1 fixed (bilingual)
    function forceHeroTitleThreeLines(){
      if(!title) return;
      const computed = window.getComputedStyle(title);
      const baseSize = parseFloat(title.dataset.qcBaseFontSize || computed.fontSize);
      const lineHeightRatio = (parseFloat(computed.lineHeight) / baseSize) || 1.08;
      const minSize = Math.max(24, baseSize - 10);

      title.dataset.qcBaseFontSize = String(baseSize);
      title.style.fontSize = `${baseSize}px`;

      let currentSize = baseSize;
      let lines = Math.round(title.scrollHeight / (currentSize * lineHeightRatio));

      while(lines > 3 && currentSize > minSize){
        currentSize = Math.max(minSize, currentSize - 0.5);
        title.style.fontSize = `${currentSize}px`;
        lines = Math.round(title.scrollHeight / (currentSize * lineHeightRatio));
      }
    }

    function applyContent(index){
      const item = content[index] || content[0];
      if(badge) badge.innerHTML = `<span class="dot"></span> ${item.badge}`;
      setTitle(item);
      lead.textContent = item.lead;
      actions.forEach((btn, idx) => {
        const cta = item.ctas[idx];
        if(!cta) return;
        btn.textContent = cta.text;
        btn.setAttribute('href', cta.href);
      });
      if(heroEmoji){ heroEmoji.src = item.emoji; }
      forceHeroTitleThreeLines();
      hero.classList.remove('hero-animating');
      void hero.offsetWidth;
      hero.classList.add('hero-animating');
      window.setTimeout(()=> hero.classList.remove('hero-animating'), 520);
    }

    function updateSlides(index){
      slides.forEach((slide, idx) => {
        const active = idx === index;
        slide.classList.toggle('is-active', active);
        const video = $('video', slide);
        if(video){
          if(active){
            video.currentTime = 0;
            video.play().catch(()=>{});
          } else {
            video.pause();
          }
        }
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === index);
        const progress = $('.hero-dot-progress', dot);
        if(progress){
          progress.style.strokeDasharray = `${circumference}`;
          progress.style.strokeDashoffset = `${circumference}`;
        }
      });
      current = index;
      applyContent(index);
      startLoader();
    }

    function animateLoader(ts){
      if(!dots[current]) return;
      if(!animateLoader.startTs) animateLoader.startTs = ts;
      const elapsed = ts - animateLoader.startTs;
      const ratio = Math.max(0, Math.min(1, elapsed / slideDuration));
      const progress = $('.hero-dot-progress', dots[current]);
      if(progress){
        progress.style.strokeDashoffset = `${circumference * (1 - ratio)}`;
      }
      if(ratio < 1){
        raf = requestAnimationFrame(animateLoader);
      }
    }

    function startLoader(){
      cancelAnimationFrame(raf);
      animateLoader.startTs = null;
      raf = requestAnimationFrame(animateLoader);
    }

    function next(){
      updateSlides((current + 1) % slides.length);
    }

    function start(){
      stop();
      startLoader();
      timer = window.setInterval(next, slideDuration);
    }

    function stop(){
      if(timer){ window.clearInterval(timer); timer = null; }
      if(raf){ cancelAnimationFrame(raf); raf = null; }
    }

    window.addEventListener('resize', forceHeroTitleThreeLines, { passive: true });

    dots.forEach((dot, idx) => {
      const activateDot = () => {
        updateSlides(idx);
        start();
      };
      dot.addEventListener('click', activateDot);
      dot.addEventListener('keydown', (event) => {
        if(event.key === 'Enter' || event.key === ' '){
          event.preventDefault();
          activateDot();
        }
      });
    });

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

    updateSlides(0);
    start();
  }

  /* QC PATCH v1.1: Quote Modal (AceQuest-style portlet) */
  function initQuoteModal(){
    // QC PATCH v1.2: Inline Quote Builder portlet (no iframe / no separate page)
    const modal = $('#quoteModal');
    if(!modal) return;

    const closeBtn = $('[data-quote-close="1"]', modal);
    const openers = $$('[data-quote-open="1"]');

    function open(){
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
    }

    function close(){
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }

    openers.forEach(a => a.addEventListener('click', (e) => {
      // If a page ever uses ?embed=1, don't open modal recursively
      if(new URLSearchParams(window.location.search).get('embed') === '1') return;
      e.preventDefault();
      open();
    }));

    closeBtn?.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if(e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && modal.classList.contains('show')) close(); });
  }

  /* QC PATCH v1.1: embed mode */
  function initEmbed(){
    const p = new URLSearchParams(window.location.search);
    if(p.get('embed') === '1') document.body.classList.add('embed');
  }

  /* QC PATCH v1.1: Gallery + Lightbox */
  function initGallery(){
    const grid = $('#galleryGrid');
    const lb = $('#lightbox');
    const lbImg = $('#lbImg');
    if(!grid) return;

    const items = Array.isArray(window.__ARENA_GALLERY) ? window.__ARENA_GALLERY : [];
    grid.innerHTML = items.map(it => {
      const g = it.g;
      const src = it.src;
      return `<a href="${src}" data-g="${g}" aria-label="Open image"><img loading="lazy" src="${src}" alt="ArenaCore demo image"></a>`;
    }).join('');

    // Filtering
    const tabs = $$('.gallery-tab');
    const cards = $$('.subgallery-card');
    function apply(filter){
      const f = filter || 'all';
      tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-g') === f));
      cards.forEach(c => {
        const on = c.getAttribute('data-g') === f;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      $$('#galleryGrid a').forEach(a => {
        const g = a.getAttribute('data-g');
        a.style.display = (f==='all' || g===f) ? 'block' : 'none';
      });
    }
    tabs.forEach(t => t.addEventListener('click', ()=> apply(t.getAttribute('data-g') || 'all')));
    cards.forEach(c => c.addEventListener('click', ()=> apply(c.getAttribute('data-g') || 'all')));
    apply('all');

    // Lightbox
    if(!lb || !lbImg) return;
    function lbOpen(src){
      lbImg.src = src;
      lb.classList.add('show');
      lb.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    }
    function lbClose(){
      lb.classList.remove('show');
      lb.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      lbImg.src='';
    }

    grid.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if(!a) return;
      e.preventDefault();
      lbOpen(a.getAttribute('href'));
    });
    $('[data-lb-close="1"]')?.addEventListener('click', lbClose);
    lb.addEventListener('click', (e)=>{ if(e.target===lb) lbClose(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && lb.classList.contains('show')) lbClose(); });
  }

  /* QC PATCH v1.1: Industry Charts */
  function initIndustryCharts(){
    if(typeof window.Chart === 'undefined') return;
    const br = $('#chartBR')?.getContext?.('2d');
    const mea = $('#chartMEA')?.getContext?.('2d');
    if(!br || !mea) return;

    let brChart = null;
    let meaChart = null;

    const txt = getComputedStyle(document.documentElement).getPropertyValue('--muted').trim() || '#A7B3C7';
    const grid = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || 'rgba(255,255,255,.10)';
    const c1 = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00FF9F';

    // BR market: 2024 $10.13B -> 2032 $22.42B (CAGR 10.54%)
    const yearsBR = [2024,2025,2026,2027,2028,2029,2030,2031,2032];
    const startBR = 10.13;
    const cagrBR = 0.1054;
    const dataBR = yearsBR.map((y,i)=> +(startBR * Math.pow(1+cagrBR, i)).toFixed(2));

    brChart = new Chart(br, {
      type:'line',
      data:{ labels: yearsBR.map(String), datasets:[{ label:'USD (Billions)', data:dataBR, borderColor:c1, tension:.35 }]},
      options:{ responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ labels:{ color:txt } } },
        scales:{ x:{ grid:{ color:grid }, ticks:{ color:txt } }, y:{ grid:{ color:grid }, ticks:{ color:txt } } }
      }
    });

    // MEA gaming market (Grand View Research): 2024 revenue (USD millions) + 8.5% CAGR 2025-2030
    const yearsMEA = [2024,2025,2026,2027,2028,2029,2030];
    const startMEA = 10583.3/1000; // convert to billions for chart (≈10.58B)
    const cagrMEA = 0.085;
    const dataMEA = yearsMEA.map((y,i)=> +(startMEA * Math.pow(1+cagrMEA, i)).toFixed(2));

    meaChart = new Chart(mea, {
      type:'bar',
      data:{ labels: yearsMEA.map(String), datasets:[{ label:'USD (Billions)', data:dataMEA, backgroundColor:c1, borderRadius:10 }]},
      options:{ responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ labels:{ color:txt } } },
        scales:{ x:{ grid:{ display:false }, ticks:{ color:txt } }, y:{ grid:{ color:grid }, ticks:{ color:txt } } }
      }
    });

    // QC PATCH v1.3: charts were rendering oversized — force a safe resize
    const r = () => { try{ enforceCanvasSizeLocal(brCanvas); enforceCanvasSizeLocal(meaCanvas); brChart?.resize?.(); meaChart?.resize?.(); }catch{} };
    window.addEventListener('resize', r, { passive:true });
    requestAnimationFrame(r);
    setTimeout(r, 0);
  }

  /* QC PATCH v1.1: Benchmark portal */
  function initBenchmarkPortal(){
    const grid = $('#benchGrid');
    if(!grid) return;

    const tabs = $$('.bench-tab');
    const arenacore = [
      {t:'Latency Patterns', v:'Low-latency netcode scaffolding', s:'Competitive-friendly authority hooks'},
      {t:'Player Capacity', v:'Designed for high CCU patterns', s:'Room/lobby scaling assumptions'},
      {t:'Cross-Platform', v:'PC-first, extendable', s:'Console/mobile pathways'},
      {t:'Rendering', v:'FPS-oriented profiling', s:'Data-driven performance decisions'},
      {t:'Tooling', v:'Editor → Build → Play loop', s:'Faster iteration & balancing'}
    ];
    const neutral = [
      {t:'Comparison', v:'Provide your approved benchmark PDF', s:'This portal stays neutral by default'},
      {t:'Methodology', v:'Same scene + same platform', s:'Repeatable test plan'},
      {t:'KPIs', v:'FPS stability, latency, memory', s:'Server tick + net jitter'}
    ];

    let mode = 'arenacore';
    function render(){
      const list = (mode==='neutral') ? neutral : arenacore;
      grid.innerHTML = list.map(x => `
        <div class="card bench-kpi">
          <h3 style="margin:0 0 8px;">${x.t}</h3>
          <p style="margin:0 0 6px;">${x.v}</p>
          <div class="small">${x.s}</div>
        </div>
      `).join('');
    }
    tabs.forEach(t => t.addEventListener('click', ()=>{
      tabs.forEach(a=>a.classList.remove('active'));
      t.classList.add('active');
      mode = t.getAttribute('data-bench') || 'arenacore';
      render();
    }));
    render();
  }

  /* boot */
  document.addEventListener("DOMContentLoaded", () => {
    safe(initEmbed);
    safe(initQuoteModal);
    safe(initHeroSlider);
    safe(initGallery);
    safe(initIndustryCharts);
    safe(initBenchmarkPortal);
    safe(initTheme);
    safe(initMobileNav);
    safe(initBars);
    safe(initCounters);
    safe(initROICalc);
    safe(initQuoteBuilder);
    safe(initContactForm);
    safe(init404);
  });
})();


/* QC PATCH FINAL — enhanced requested behaviors without structural rebuild */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const isAr = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar' || location.pathname.includes('/arabic/');
  function initHeroVideoSlider(){ /* QC Patch – handled inside initHeroSlider */ }
  function initGroupedGalleries(){
    if(!window.__ARENA_GALLERY) return;
    const descMap = isAr ? {
      g1:'لقطة عرض سريعة لهوية Classic Arena.',
      g2:'لقطة عرض سريعة لهوية Wacky Arena.',
      g3:'لقطة عرض سريعة لهوية Military Arena.',
      g4:'لقطة عرض سريعة لهوية Cubic Arena.',
      g5:'لقطة عرض سريعة لهوية Swords & Guns Arena.',
      g6:'لقطة عرض سريعة لهوية Horror Arena.'
    } : {
      g1:'Quick showcase snapshot for the Classic Arena pack.',
      g2:'Quick showcase snapshot for the Wacky Arena pack.',
      g3:'Quick showcase snapshot for the Military Arena pack.',
      g4:'Quick showcase snapshot for the Cubic Arena pack.',
      g5:'Quick showcase snapshot for the Swords & Guns Arena pack.',
      g6:'Quick showcase snapshot for the Horror Arena pack.'
    };
    $$('[data-gallery]').forEach(box=>{
      const g=box.getAttribute('data-gallery');
      const items=window.__ARENA_GALLERY.filter(x=>x.g===g);
      const desc = descMap[g] || (isAr ? 'لقطة عرض سريعة.' : 'Quick showcase snapshot.');
      box.innerHTML=items.map((it,idx)=>`<a href="${it.src}" data-lightbox="1"><img loading="lazy" src="${it.src}" alt="${g} showcase ${idx+1}"><span class="gallery-item-desc">${desc}</span></a>`).join('');
    });
  }
  function initLightboxPatched(){
    const links=$$('[data-lightbox="1"]');
    const launchers=$$('[data-gallery-launch]');
    if(!links.length && !launchers.length) return;
    let lb=$('#acLightbox');
    if(!lb){
      lb=document.createElement('div');
      lb.id='acLightbox';
      lb.className='lightbox';
      lb.innerHTML=`<div class="lb-inner"><button class="lb-close" type="button" aria-label="${isAr?'إغلاق':'Close'}">×</button><button class="lb-nav prev" type="button" aria-label="${isAr?'السابق':'Previous'}">‹</button><img alt="Preview"><button class="lb-nav next" type="button" aria-label="${isAr?'التالي':'Next'}">›</button></div>`;
      document.body.appendChild(lb);
    }
    const img=$('img',lb);
    const closeBtn=$('.lb-close',lb);
    const prevBtn=$('.lb-nav.prev',lb);
    const nextBtn=$('.lb-nav.next',lb);
    let album=[];
    let idx=0;
    const show=(i)=>{
      if(!album.length) return;
      idx=(i+album.length)%album.length;
      img.src=album[idx];
      lb.classList.add('show');
    };
    const close=()=>{
      lb.classList.remove('show');
      img.removeAttribute('src');
      album=[];
      idx=0;
    };
    const collect=(g)=>$$(`[data-gallery="${g}"] a[data-lightbox="1"]`).map(a=>a.getAttribute('href')).filter(Boolean);
    closeBtn?.addEventListener('click',()=>close());
    prevBtn?.addEventListener('click',(e)=>{ e.stopPropagation(); show(idx-1); });
    nextBtn?.addEventListener('click',(e)=>{ e.stopPropagation(); show(idx+1); });
    lb.addEventListener('click',(e)=>{ if(e.target===lb) close();});
    links.forEach(a=>a.addEventListener('click',(e)=>{
      e.preventDefault();
      const box=a.closest('[data-gallery]');
      album=box ? $$('a[data-lightbox="1"]', box).map(x=>x.getAttribute('href')).filter(Boolean) : [a.getAttribute('href')];
      idx=Math.max(0, album.indexOf(a.getAttribute('href')));
      show(idx);
    }));
    launchers.forEach(a=>a.addEventListener('click',(e)=>{
      const g=a.getAttribute('data-gallery-launch');
      const shots=collect(g);
      if(!shots.length) return;
      e.preventDefault();
      album=shots;
      show(0);
    }));
    document.addEventListener('keydown',(e)=>{
      if(!lb.classList.contains('show')) return;
      if(e.key==='Escape'){ close(); return; }
      if(e.key==='ArrowRight'){ e.preventDefault(); show(idx+1); }
      if(e.key==='ArrowLeft'){ e.preventDefault(); show(idx-1); }
    });
  }
  function initRoiVisualProductLabels(){ const btns=$$('[data-roi-product]'); const lineTitle=$('#roi .charts .chart-title b'); const lineSub=$('#roi .charts .chart-title .small'); const barTitle=$$('#roi .charts .chart-title b')[1]; const barSub=$$('#roi .charts .chart-title .small')[1]; const license=$('#roiLicense'); const revenue=$('#roiRevenue'); const infra=$('#roiInfra'); const lead=$('#roi .section-sub'); const apply=(product)=>{ if(product==='VERSUS'){ if(lineTitle) lineTitle.textContent=isAr?'منحنى نمو VERSUS':'VERSUS Revenue Curve'; if(lineSub) lineSub.textContent=isAr?'ترخيص لعبة Battle Royale + تشغيل مباشر':'Battle Royale license + live-ops profile'; if(barTitle) barTitle.textContent=isAr?'تفصيل القيمة':'Value Breakdown'; if(barSub) barSub.textContent=isAr?'ترخيص لعبة، محتوى، تشغيل، وتحليلات':'Game license, content, operations, analytics'; if(lead) lead.textContent=isAr?'حاسبة منفصلة لمنتج VERSUS مقابل ArenaCore مع تحديثات فورية ومقاييس مختلفة حسب طبيعة كل منتج.':'Separate live modeling for ArenaCore and VERSUS with different economics for each product type.'; if(license && Number(license.value)<95000) license.value=95000; if(revenue && Number(revenue.value)<240000) revenue.value=240000; if(infra && Number(infra.value)<6000) infra.value=6000; } else { if(lineTitle) lineTitle.textContent=isAr?'توقع الإيرادات':'Revenue Projection'; if(lineSub) lineSub.textContent=isAr?'محرك FPS + توفير وقت التطوير':'FPS engine + faster delivery economics'; if(barTitle) barTitle.textContent=isAr?'تفصيل':'Breakdown'; if(barSub) barSub.textContent=isAr?'التوفير مقابل الترخيص':'Savings vs license'; } $('#roiForm')?.dispatchEvent(new Event('input',{bubbles:true}));}; btns.forEach(btn=>btn.addEventListener('click',()=>apply(btn.getAttribute('data-roi-product')||'ArenaCore'))); }
  function initQuoteBuilderEnhancements(){ const qb=$('#quoteBuilder'); if(!qb) return; const currency=$('#qbCurrency',qb), pack=$('#qbPackage',qb), hosting=$('#qbHosting',qb), components=$('#qbComponents',qb); const modules=$$('.chk-module',qb), productRadios=$$('input[name="product"]',qb), addOns=$$('.chk-addon',qb), tierEls=$$('.tier',qb); const ccu=$('#qbCCU',qb), timeline=$('#qbTimeline',qb), fps=$('#qbFPS',qb), tick=$('#qbTick',qb), regions=$('#qbRegions',qb), authority=$('#qbAuthority',qb); const ids=['sumCurrency','sumPackage','sumHosting','sumComponents','sumModules','sumBase','sumScale','sumAddons','sumTotal','sumTier','sumPlatforms','sumCCU','sumTimeline','sumFPS','sumTick','sumAuthority']; const el=Object.fromEntries(ids.map(id=>[id,$('#'+id,qb)])); if(!el.sumCurrency) return; const fx={USD:1,EUR:.92,GBP:.79,JOD:.71,SAR:3.75}, symbols={USD:'$',EUR:'€',GBP:'£',JOD:'JOD ',SAR:'SAR '}, packageCosts={starter:0,growth:9000,scale:22000,enterprise:48000}, hostingCosts={self:0,managed:12000,dedicated:28000}, componentCosts={engine:0,engine_backend:18000,fullstack:42000}, moduleCosts={matchmaking:9000,telemetry:7000,security:11000,liveops:9500}, tierCosts={studio:35000,pro:75000,enterprise:155000}; const money=(n)=>{ const cur=currency?.value||'USD'; return `${symbols[cur]||''}${Math.round(n*(fx[cur]||1)).toLocaleString()}`; }; const getTier=()=>($('.tier.active',qb)?.dataset.tier)||'studio'; const selectedPlatforms=()=>$$('.chk-platform:checked',qb).map(x=>x.value); const selectedModules=()=>modules.filter(x=>x.checked).map(x=>x.value); const selectedAddons=()=>addOns.filter(x=>x.checked).map(x=>x.value); const currentProduct=()=>($('input[name="product"]:checked',qb)?.value)||'ArenaCore'; const update=()=>{ const tier=getTier(), platforms=selectedPlatforms(), mods=selectedModules(), addons=selectedAddons(); let total=tierCosts[tier]||0; total+=packageCosts[pack?.value||'starter']||0; total+=hostingCosts[hosting?.value||'self']||0; total+=componentCosts[components?.value||'engine']||0; total+=mods.reduce((s,m)=>s+(moduleCosts[m]||0),0); total+=addons.length*6000; const ccuVal=Number(ccu?.value||0); if(ccuVal>5000) total+=7000; if(ccuVal>10000) total+=8000; if((regions?.value||'')==='Global') total+=10000; if(currentProduct()==='VERSUS') total+=18000; if((fps?.value||0)>=144) total+=7000; if((tick?.value||0)>=90) total+=5000; const base=tierCosts[tier]||0, extras=total-base; el.sumTier.textContent=tier.charAt(0).toUpperCase()+tier.slice(1); el.sumPlatforms.textContent=platforms.join(', ')||'PC'; el.sumCCU.textContent=ccuVal.toLocaleString(); el.sumTimeline.textContent=`${timeline?.value||6} ${isAr?'شهر':'mo'}`; el.sumFPS.textContent=`${fps?.value||120} FPS`; el.sumTick.textContent=`${tick?.value||60} Hz`; el.sumAuthority.textContent=authority?.value||'Authoritative'; el.sumCurrency.textContent=currency?.value||'USD'; el.sumPackage.textContent=pack?.selectedOptions?.[0]?.textContent||'Starter'; el.sumHosting.textContent=hosting?.selectedOptions?.[0]?.textContent||'Self-managed'; el.sumComponents.textContent=components?.selectedOptions?.[0]?.textContent||'Engine + Tools'; el.sumModules.textContent=mods.length?mods.join(', '):'—'; el.sumBase.textContent=money(base); el.sumScale.textContent=money(Math.max(extras-addons.length*6000,0)); el.sumAddons.textContent=money(addons.length*6000); el.sumTotal.textContent=money(total); const qbEmail=$('#qbEmail',qb); if(qbEmail){ const subject=encodeURIComponent('ArenaCore / VERSUS Quote Request'); const body=encodeURIComponent(`Product: ${currentProduct()}
Tier: ${tier}
Currency: ${currency?.value||'USD'}
Package: ${pack?.value||'starter'}
Hosting: ${hosting?.value||'self'}
Components: ${components?.value||'engine'}
Modules: ${mods.join(', ')||'None'}
Add-ons: ${addons.join(', ')||'None'}
CCU: ${ccuVal}
Regions: ${regions?.value||'MENA'}
Timeline: ${timeline?.value||6} months
FPS: ${fps?.value||120}
Tick: ${tick?.value||60} Hz`); qbEmail.href=`mailto:sales@arenacore.com?subject=${subject}&body=${body}`; }}; [currency,pack,hosting,components,ccu,timeline,fps,tick,regions,authority,...modules,...addOns,...productRadios,...$$('.chk-platform',qb)].forEach(e=>e&&e.addEventListener('input',update)); tierEls.forEach(e=>e.addEventListener('click',()=>setTimeout(update,0))); productRadios.forEach(e=>e.addEventListener('change',update)); update(); }
  function fixBrokenLocalLinks(){ $$('a[href=""]').forEach(a=>a.setAttribute('href','./')); }
  initHeroVideoSlider(); initGroupedGalleries(); initLightboxPatched(); initRoiVisualProductLabels(); initQuoteBuilderEnhancements(); fixBrokenLocalLinks();
})();


(() => {
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  function mergeModulesIntoAddons(){ const panels=$$('.step-panel'); if(panels.length>=5){ const addons=panels[2], modules=panels[3]; const grid=$('.modules-grid', modules); if(addons && modules && grid && !$('.modules-grid', addons)){ const wrap=document.createElement('div'); wrap.innerHTML=`<div style="height:14px"></div><h3 style="margin:0 0 10px;">${document.documentElement.dir==='rtl'?'الوحدات الأساسية':'Core Modules'}</h3>`; addons.appendChild(wrap); addons.appendChild(grid); modules.remove(); } } }
  function refreshHeroVideos(){ $$('.hero-bg-video').forEach((v,i)=>{ v.muted=true; v.playsInline=true; if(i===0) v.play().catch(()=>{}); }); }
  mergeModulesIntoAddons(); refreshHeroVideos();
})();

/* QC PATCH — AceQuest-style Quote Builder product tabs (ArenaCore / VERSUS only) */
document.addEventListener('DOMContentLoaded', () => {
  if (window.__AC_QB_ACE_PATCH) return;
  window.__AC_QB_ACE_PATCH = true;

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const isAr = document.documentElement.dir === 'rtl' || (document.documentElement.lang || '').toLowerCase().startsWith('ar') || location.pathname.includes('/arabic/');
  const RECIPIENT_EMAIL = 'sales@arenacore.com';

  const T = {
    en: {
      quoteTitle: 'Build a Quick Quote',
      productTabs: {
        ArenaCore: { title: 'ArenaCore', sub: 'Modern FPS / BR engine systems' },
        VERSUS: { title: 'VERSUS', sub: 'Battle royale game license packs' }
      },
      selectPackage: 'Choose a package',
      gamesTitle: 'Select modules',
      gamesSearch: 'Search modules…',
      featuresTitle: 'Extra features',
      scaleTitle: 'Scale & capacity',
      addCustom: 'Add custom item',
      add: 'Add',
      reset: 'Reset',
      package: 'Package',
      games: 'Modules',
      features: 'Features',
      scale: 'Scale',
      yourQuote: 'Your Quote:',
      requestSubject: 'ArenaCore / VERSUS Licensing Quote Request',
      requestCta: 'Request Final Quote',
      callCta: 'Request a licensing call',
      capacityUsers: 'User capacity tier',
      capacityRooms: 'Concurrent sessions tier',
      supportTier: 'Support tier',
      notes: 'Notes / requirements',
      placeholderNotes: 'Tell us your region, target platforms, launch timeline, and any must-have systems…',
      plus: '+',
      month: 'mo',
      categoryCore: '🧩 Core modules',
      categoryGameplay: '🎯 Gameplay systems',
      categoryInfra: '🛡️ Infrastructure & services',
      categoryOther: 'Other / add-ons',
      categoryStylePacks: 'Style packs',
      versusStylesTitle: 'Select VERSUS arena packs',
      versusLicensingTitle: 'Licensing components',
      billing: 'Billing plan',
      summary: 'Summary',
      contact: 'Contact details',
      fullName: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      printable: 'Also generate a printable PDF (opens print dialog)',
      payment: 'Preferred payment method',
      paymentChoose: 'Choose…',
      saveDraft: 'Save draft',
      loadDraft: 'Load draft',
      finalTerms: 'We’ll confirm scope and send final commercial terms after a short call.',
      packageHint: 'Choose a package to prefill the builder, then fine-tune modules, features, hosting, and scale.',
      pricingHint: 'Live quote updates instantly from package, modules, capacity, hosting, and feature selections.',
      hostingTitle: 'Hosting Plan Options',
      hostingNote: 'Start with a VPS, then upgrade to dedicated hardware as you scale.',
      customName: 'Item name',
      customPrice: 'Monthly add (+)',
      packageBase: 'Base',
      paymentOptions: { bank_wire:'Bank wire transfer', crypto_wallet:'Crypto wallet', western_union:'Western Union', cliq:'CliQ (Jordan)', bank_cheque:'Bank cheque' },
      billingOptions: {
        monthly: { title:'Monthly', meta:'12-month commitment' },
        quarterly: { title:'Quarterly', badge:'-5%', meta:'Monthly × 3 × 0.95' },
        yearly: { title:'Yearly', badge:'-10%', meta:'Monthly × 12 × 0.90' },
        lifetime: { title:'Life-Time', meta:'Custom pricing after consultation' }
      },
      restore: 'Restore quote',
      summaryEmpty: 'Select a product, package, modules, and features, and your live quote will update here.',
      formOk: 'Ready — your email client will open with the full quote summary.',
      formBad: 'Please enter a valid email and phone number first.',
      draftSaved: 'Draft saved locally on this device.',
      draftLoaded: 'Draft loaded successfully.'
    },
    ar: {
      quoteTitle: 'ابنِ عرض سعر سريع',
      productTabs: {
        ArenaCore: { title: 'ArenaCore', sub: 'ترخيص محرك FPS + أنظمة تنافسية' },
        VERSUS: { title: 'VERSUS', sub: 'ترخيص باتل رويال + أنظمة تشغيل مباشر' }
      },
      selectPackage: 'اختر باقة',
      gamesTitle: 'اختر الوحدات',
      gamesSearch: 'ابحث عن وحدة…',
      featuresTitle: 'ميزات إضافية',
      scaleTitle: 'السعة والتوسع',
      addCustom: 'أضف عنصرًا مخصصًا',
      add: 'إضافة',
      reset: 'إعادة ضبط',
      package: 'الباقة',
      games: 'الوحدات',
      features: 'الميزات',
      scale: 'السعة',
      yourQuote: 'عرضك التقديري:',
      requestSubject: 'طلب عرض ترخيص ArenaCore / VERSUS',
      requestCta: 'اطلب عرضًا نهائيًا',
      callCta: 'اطلب مكالمة ترخيص',
      capacityUsers: 'شريحة عدد المستخدمين',
      capacityRooms: 'شريحة عدد الجلسات المتزامنة',
      supportTier: 'شريحة الدعم',
      notes: 'ملاحظات / متطلبات',
      placeholderNotes: 'اكتب المنطقة، المنصات المستهدفة، موعد الإطلاق، وأي أنظمة أساسية مطلوبة…',
      plus: '+',
      month: 'شهر',
      categoryCore: '🧩 الوحدات الأساسية',
      categoryGameplay: '🎯 أنظمة اللعب',
      categoryInfra: '🛡️ البنية التحتية والخدمات',
      categoryOther: '✨ أخرى / إضافات',
      billing: 'خطة الدفع',
      summary: 'الملخص',
      contact: 'بيانات التواصل',
      fullName: 'الاسم الكامل',
      company: 'الشركة',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف / واتساب',
      printable: 'أنشئ أيضًا نسخة قابلة للطباعة (سيفتح مربع الطباعة)',
      payment: 'طريقة الدفع المفضلة',
      paymentChoose: 'اختر…',
      saveDraft: 'حفظ المسودة',
      loadDraft: 'تحميل المسودة',
      finalTerms: 'سنؤكد النطاق ونرسل الشروط التجارية النهائية بعد مكالمة قصيرة.',
      packageHint: 'اختر باقة لتعبئة الحاسبة تلقائيًا ثم عدّل الوحدات والميزات والاستضافة والسعة.',
      pricingHint: 'يتم تحديث عرض السعر مباشرة حسب الباقة والوحدات والسعة والاستضافة والميزات.',
      hostingTitle: 'خيارات خطط الاستضافة',
      hostingNote: 'ابدأ بـ VPS ثم قم بالترقية لاحقًا إلى هاردوير مخصص عند التوسع.',
      customName: 'اسم العنصر',
      customPrice: 'إضافة شهرية (+)',
      packageBase: 'الأساس',
      paymentOptions: { bank_wire:'تحويل بنكي', crypto_wallet:'محفظة كريبتو', western_union:'ويسترن يونيون', cliq:'كليك (الأردن)', bank_cheque:'شيك بنكي' },
      billingOptions: {
        monthly: { title:'شهري', meta:'التزام 12 شهرًا' },
        quarterly: { title:'ربع سنوي', badge:'-5%', meta:'شهري × 3 × 0.95' },
        yearly: { title:'سنوي', badge:'-10%', meta:'شهري × 12 × 0.90' },
        lifetime: { title:'مدى الحياة', meta:'تسعير مخصص بعد التشاور' }
      },
      restore: 'استعادة عرض السعر',
      summaryEmpty: 'اختر المنتج والباقة والوحدات والميزات وسيظهر عرض السعر المباشر هنا.',
      formOk: 'جاهز — سيفتح برنامج البريد لديك مع ملخص عرض السعر الكامل.',
      formBad: 'يرجى إدخال بريد إلكتروني ورقم هاتف صحيحين أولًا.',
      draftSaved: 'تم حفظ المسودة محليًا على هذا الجهاز.',
      draftLoaded: 'تم تحميل المسودة بنجاح.'
    }
  };
  const L = isAr ? T.ar : T.en;

  const CURRENCY = {
    USD:{ code:'USD', symbol:'$', rate:1, step:10, format:'symbol' },
    EUR:{ code:'EUR', symbol:'€', rate:0.92, step:10, format:'symbol' },
    GBP:{ code:'GBP', symbol:'£', rate:0.79, step:10, format:'symbol' },
    JOD:{ code:'JOD', symbol:(isAr?'د.أ':'JOD'), rate:0.71, step:1, format:'code' },
    SAR:{ code:'SAR', symbol:'⃁', rate:3.75, step:10, format:'code' },
    AED:{ code:'AED', symbol:'د.إ', rate:3.6725, step:10, format:'code' },
    USDT:{ code:'USDT', symbol:'USDT', rate:1, step:10, format:'code', crypto:true, discount:0.10 },
    USDC:{ code:'USDC', symbol:'USDC', rate:1, step:10, format:'code', crypto:true, discount:0.10 },
    PYUSD:{ code:'PYUSD', symbol:'PYUSD', rate:1, step:10, format:'code', crypto:true, discount:0.10 },
    PAXG:{ code:'PAXG', symbol:'PAXG', rate:0.0005, step:0.01, format:'code', crypto:true, discount:0.10 }
  };

  const sharedHosting = [
    { id:'basic_vps', en:'Basic VPS', ar:'VPS أساسي', price:25, specs:{vCPU:'2 vCPU', ram:'4 GB', storage:'60 GB SSD', bandwidth:'2 TB'}, extraEn:{locations:'Germany / UK / US / MENA', security:'Basic DDoS + firewall + daily backups'}, extraAr:{locations:'ألمانيا / بريطانيا / أمريكا / MENA', security:'حماية DDoS أساسية + جدار ناري + نسخ يومية'} },
    { id:'advanced_vps', en:'Advanced VPS', ar:'VPS متقدم', price:69, specs:{vCPU:'4 vCPU', ram:'8 GB', storage:'160 GB NVMe', bandwidth:'4 TB'}, extraEn:{locations:'Germany / UK / US / MENA', security:'Enhanced DDoS + monitoring + snapshots'}, extraAr:{locations:'ألمانيا / بريطانيا / أمريكا / MENA', security:'حماية DDoS محسّنة + مراقبة + لقطات احتياطية'} },
    { id:'entry_dedicated', en:'Entry Dedicated Server', ar:'سيرفر مخصص (مدخل)', price:129, specs:{vCPU:'8 cores', ram:'32 GB', storage:'1 TB SSD', bandwidth:'10 TB'}, extraEn:{locations:'Germany / UK / US / MENA', security:'Dedicated isolation + firewall + monitoring'}, extraAr:{locations:'ألمانيا / بريطانيا / أمريكا / MENA', security:'عزل مخصص + جدار ناري + مراقبة'} },
    { id:'premium_dedicated', en:'Premium Dedicated Real Hardware Server', ar:'سيرفر مخصص فاخر (هاردوير)', price:349, specs:{vCPU:'16 cores', ram:'64 GB', storage:'2 TB NVMe', bandwidth:'20 TB'}, extraEn:{locations:'Germany / UK / US / MENA', security:'Advanced DDoS + private networking + hardened access'}, extraAr:{locations:'ألمانيا / بريطانيا / أمريكا / MENA', security:'حماية DDoS متقدمة + شبكة خاصة + وصول مُحصّن'} }
  ];

  const sharedTiers = {
    users:[
      {id:'u10k', labelEn:'Up to 10k monthly active users', labelAr:'حتى 10 آلاف مستخدم نشط شهريًا', add:0},
      {id:'u50k', labelEn:'Up to 50k MAU', labelAr:'حتى 50 ألف مستخدم نشط', add:600},
      {id:'u200k', labelEn:'Up to 200k MAU', labelAr:'حتى 200 ألف مستخدم نشط', add:1400},
      {id:'u500k', labelEn:'Up to 500k MAU', labelAr:'حتى 500 ألف مستخدم نشط', add:2600},
      {id:'u1m', labelEn:'Up to 1M MAU', labelAr:'حتى 1 مليون مستخدم نشط', add:4200}
    ],
    rooms:[
      {id:'r200', labelEn:'Up to 200 concurrent sessions', labelAr:'حتى 200 جلسة متزامنة', add:0},
      {id:'r500', labelEn:'Up to 500 concurrent sessions', labelAr:'حتى 500 جلسة متزامنة', add:400},
      {id:'r1200', labelEn:'Up to 1,200 concurrent sessions', labelAr:'حتى 1,200 جلسة متزامنة', add:900},
      {id:'r2500', labelEn:'Up to 2,500 concurrent sessions', labelAr:'حتى 2,500 جلسة متزامنة', add:1600},
      {id:'r5k', labelEn:'Up to 5,000 concurrent sessions', labelAr:'حتى 5,000 جلسة متزامنة', add:2800}
    ],
    support:[
      {id:'standard', labelEn:'Standard', labelAr:'قياسي', add:0},
      {id:'priority', labelEn:'Priority', labelAr:'أولوية', add:450},
      {id:'dedicated', labelEn:'Dedicated AM', labelAr:'مدير حساب مخصص', add:900}
    ]
  };

  const PRODUCTS = {
    ArenaCore: {
      packages: {
        starter:{ nameEn:'ArenaCore Starter License', nameAr:'باقة ArenaCore Starter', baseMonthly:2400, defaults:{ games:['core_runtime','network_stack','weapon_ballistics','movement_stack'], features:['anti_cheat_hooks','telemetry_admin'], tiers:{users:'u10k',rooms:'r200',support:'standard'} } },
        growth:{ nameEn:'ArenaCore Growth License', nameAr:'باقة ArenaCore Growth', baseMonthly:4200, defaults:{ games:['core_runtime','network_stack','weapon_ballistics','movement_stack','ai_bots_eqs','map_streaming','loot_zone_systems'], features:['anti_cheat_hooks','telemetry_admin','crossplay_accounts','liveops_tooling'], tiers:{users:'u50k',rooms:'r500',support:'priority'} } },
        enterprise:{ nameEn:'ArenaCore Enterprise License', nameAr:'باقة ArenaCore Enterprise', baseMonthly:7600, defaults:{ games:['core_runtime','network_stack','weapon_ballistics','movement_stack','ai_bots_eqs','map_streaming','loot_zone_systems','spectator_replay','dedicated_servers'], features:['anti_cheat_hooks','telemetry_admin','crossplay_accounts','liveops_tooling','custom_backend_api','white_label_launcher','priority_support'], tiers:{users:'u200k',rooms:'r1200',support:'dedicated'} } },
        oem:{ nameEn:'ArenaCore Custom / OEM', nameAr:'حل ArenaCore مخصص / OEM', baseMonthly:9800, defaults:{ games:['core_runtime','network_stack','weapon_ballistics','movement_stack','ai_bots_eqs','map_streaming','loot_zone_systems','spectator_replay','dedicated_servers','ugc_modding_sdk'], features:['anti_cheat_hooks','telemetry_admin','crossplay_accounts','liveops_tooling','custom_backend_api','white_label_launcher','priority_support','source_extension','launch_services'], tiers:{users:'u500k',rooms:'r2500',support:'dedicated'} } }
      },
      games:[
        {id:'core_runtime', cat:'core', en:'Core gameplay runtime & physics', ar:'النواة الأساسية للعب والفيزياء', price:480},
        {id:'network_stack', cat:'core', en:'Authoritative multiplayer networking', ar:'شبكات اللعب الجماعي Authoritative', price:520},
        {id:'weapon_ballistics', cat:'core', en:'Weapons, recoil & ballistics stack', ar:'منظومة الأسلحة والارتداد والبالستية', price:410},
        {id:'movement_stack', cat:'gameplay', en:'Movement stack (slide / mantle / vault)', ar:'حزمة الحركة (انزلاق / تسلق / تجاوز)', price:320},
        {id:'ai_bots_eqs', cat:'gameplay', en:'AI bots, behavior trees & EQS', ar:'بوتات الذكاء الاصطناعي وBehavior Trees وEQS', price:390},
        {id:'map_streaming', cat:'infra', en:'World partition & map streaming', ar:'تقسيم العالم وبث الخرائط', price:360},
        {id:'loot_zone_systems', cat:'gameplay', en:'Battle royale zone & loot systems', ar:'أنظمة الدائرة واللوت للباتل رويال', price:420},
        {id:'spectator_replay', cat:'infra', en:'Spectator, replay & observer tools', ar:'أدوات المشاهدة والإعادة والتحكيم', price:300},
        {id:'dedicated_servers', cat:'infra', en:'Dedicated servers & session services', ar:'الخوادم المخصصة وخدمات الجلسات', price:440},
        {id:'ugc_modding_sdk', cat:'other', en:'UGC / modding SDK hooks', ar:'واجهات UGC وSDK للتعديل', price:460}
      ],
      features:[
        {id:'anti_cheat_hooks', en:'Anti-cheat hooks & trust signals', ar:'واجهات مكافحة الغش وإشارات الثقة', price:390},
        {id:'telemetry_admin', en:'Telemetry, dashboards & admin controls', ar:'التيليمتري ولوحات التحكم وأدوات الإدارة', price:270},
        {id:'crossplay_accounts', en:'Cross-play accounts & identity routing', ar:'حسابات اللعب المشترك وتوجيه الهوية', price:320},
        {id:'liveops_tooling', en:'Live-ops events & balancing tooling', ar:'أدوات الفعاليات والتوازن للتشغيل الحي', price:330},
        {id:'custom_backend_api', en:'Custom backend / economy API layer', ar:'طبقة API مخصصة للباك إند والاقتصاد', price:520},
        {id:'white_label_launcher', en:'White-label launcher & branding kit', ar:'حزمة المشغل والهوية بنمط White-Label', price:540},
        {id:'priority_support', en:'Priority engineering support', ar:'دعم هندسي بأولوية', price:280},
        {id:'source_extension', en:'Custom source extensions', ar:'توسعات مخصصة على المصدر', price:650},
        {id:'launch_services', en:'Launch, certification & rollout support', ar:'دعم الإطلاق والاعتماد والنشر', price:430}
      ]
    },
    VERSUS: {
      packages: {
        starter:{ nameEn:'VERSUS Starter License', nameAr:'باقة VERSUS Starter', baseMonthly:2900, defaults:{ games:['classic_arena'], features:['usage_tier_standard','player_cap_10k','support_updates_standard'], tiers:{users:'u10k',rooms:'r200',support:'standard'} } },
        growth:{ nameEn:'VERSUS Growth License', nameAr:'باقة VERSUS Growth', baseMonthly:4900, defaults:{ games:['classic_arena','wacky_arena','military_arena'], features:['usage_tier_commercial','player_cap_50k','monetization_iap','white_label_mid','support_updates_priority'], tiers:{users:'u50k',rooms:'r500',support:'priority'} } },
        enterprise:{ nameEn:'VERSUS Enterprise License', nameAr:'باقة VERSUS Enterprise', baseMonthly:8200, defaults:{ games:['classic_arena','wacky_arena','military_arena','cubic_arena','swords_guns_arena'], features:['usage_tier_commercial','player_cap_200k','monetization_full','white_label_full','regional_localization','support_updates_dedicated'], tiers:{users:'u200k',rooms:'r1200',support:'dedicated'} } },
        oem:{ nameEn:'VERSUS Custom / OEM', nameAr:'حل VERSUS مخصص / OEM', baseMonthly:10800, defaults:{ games:['classic_arena','wacky_arena','military_arena','cubic_arena','swords_guns_arena','horror_arena'], features:['usage_tier_enterprise','player_cap_unlimited','monetization_full','white_label_full','regional_localization','source_protection','support_updates_dedicated'], tiers:{users:'u500k',rooms:'r2500',support:'dedicated'} } }
      },
      games:[
        {id:'classic_arena', cat:'stylepacks', en:'Classic Arena', ar:'الحلبة الكلاسيكية', price:260},
        {id:'wacky_arena', cat:'stylepacks', en:'Wacky Arena', ar:'الحلبة المرحة', price:260},
        {id:'military_arena', cat:'stylepacks', en:'Military Arena', ar:'الحلبة العسكرية', price:280},
        {id:'cubic_arena', cat:'stylepacks', en:'Cubic Arena', ar:'الحلبة المكعبة', price:240},
        {id:'swords_guns_arena', cat:'stylepacks', en:'Swords & Guns Arena', ar:'ساحة السيوف والأسلحة', price:300},
        {id:'horror_arena', cat:'stylepacks', en:'Horror Arena', ar:'حلبة الرعب', price:300}
      ],
      features:[
        {id:'usage_tier_standard', en:'Usage rights — standard commercial', ar:'حقوق الاستخدام — تجاري قياسي', price:280},
        {id:'usage_tier_commercial', en:'Usage rights — regional commercial', ar:'حقوق الاستخدام — تجاري إقليمي', price:420},
        {id:'usage_tier_enterprise', en:'Usage rights — enterprise / publisher', ar:'حقوق الاستخدام — مؤسسي / ناشر', price:620},
        {id:'player_cap_10k', en:'Player capacity cap — up to 10K MAU', ar:'سقف اللاعبين — حتى 10 آلاف MAU', price:180},
        {id:'player_cap_50k', en:'Player capacity cap — up to 50K MAU', ar:'سقف اللاعبين — حتى 50 ألف MAU', price:320},
        {id:'player_cap_200k', en:'Player capacity cap — up to 200K MAU', ar:'سقف اللاعبين — حتى 200 ألف MAU', price:520},
        {id:'player_cap_unlimited', en:'Player capacity cap — custom / unlimited', ar:'سقف اللاعبين — مخصص / غير محدود', price:780},
        {id:'monetization_iap', en:'Monetization rights — IAP / cosmetics', ar:'حقوق تحقيق الدخل — مشتريات داخلية / تجميليات', price:260},
        {id:'monetization_full', en:'Monetization rights — ads, IAP, battle pass', ar:'حقوق تحقيق الدخل — إعلانات ومشتريات وBattle Pass', price:420},
        {id:'white_label_mid', en:'White-label customization — branded UI', ar:'تخصيص White-Label — واجهة بعلامتك', price:300},
        {id:'white_label_full', en:'White-label customization — full reskin', ar:'تخصيص White-Label — إعادة هوية كاملة', price:520},
        {id:'regional_localization', en:'Arabic / regional localization rights', ar:'حقوق التعريب والتوطين الإقليمي', price:260},
        {id:'source_protection', en:'Source protection, escrow & compliance pack', ar:'حزمة حماية المصدر وEscrow والامتثال', price:460},
        {id:'support_updates_standard', en:'Standard support & updates', ar:'دعم وتحديثات قياسية', price:220},
        {id:'support_updates_priority', en:'Priority support & roadmap updates', ar:'دعم أولوية وتحديثات خارطة الطريق', price:340},
        {id:'support_updates_dedicated', en:'Dedicated support, patches & rollout help', ar:'دعم مخصص ورقع ومساندة للإطلاق', price:520}
      ]
    }
  };

  const storagePrefix = isAr ? 'arenacore_quote_ar_' : 'arenacore_quote_en_';
  let activeCurrency = (()=>{ try{ return localStorage.getItem(storagePrefix + 'currency') || 'USD'; }catch(_){ return 'USD'; } })();
  if(!CURRENCY[activeCurrency]) activeCurrency = 'USD';

  const roundToStep = (v, step)=>{
    const s = Number(step) || 1;
    return Math.round(v / s) * s;
  };
  const toUSD = (displayAmount)=>{
    const info = CURRENCY[activeCurrency] || CURRENCY.USD;
    const v = Number(displayAmount) || 0;
    const rate = info.rate || 1;
    const disc = info.crypto ? (1 - (info.discount || 0.10)) : 1;
    return (disc * rate) ? (v / (disc * rate)) : v;
  };
  const fmtPrice = (usd)=>{
    const info = CURRENCY[activeCurrency] || CURRENCY.USD;
    let v = Number(usd) || 0;
    if(info.crypto) v = v * (1 - (info.discount || 0.10));
    v = roundToStep(v * (info.rate || 1), info.step);
    const num = new Intl.NumberFormat(undefined).format(Math.max(0, v));
    if(info.format === 'symbol' && info.symbol && info.symbol.length === 1) return info.symbol + num;
    return `${info.symbol || info.code} ${num}`;
  };
  const byId = (arr, id)=> arr.find(x => x.id === id);
  const esc = (s)=> String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  function defaultState(productId){
    const product = PRODUCTS[productId];
    const firstPackageId = Object.keys(product.packages)[0];
    const pkg = product.packages[firstPackageId];
    return {
      productId,
      packageId: firstPackageId,
      billingPlan:'monthly',
      games: new Set(pkg.defaults.games || []),
      features: new Set(pkg.defaults.features || []),
      tiers: { users:'u10k', rooms:'r200', support:'standard', ...(pkg.defaults.tiers || {}) },
      custom: [],
      notes: '',
      hostingPlanId:'basic_vps',
      contact:{ name:'', company:'', email:'', phone:'', payment:'', pdf:false }
    };
  }

  function loadState(productId){
    try{
      const raw = localStorage.getItem(storagePrefix + productId);
      if(!raw) return defaultState(productId);
      const payload = JSON.parse(raw);
      const base = defaultState(productId);
      base.packageId = payload.packageId || base.packageId;
      base.billingPlan = payload.billingPlan || base.billingPlan;
      base.games = new Set(payload.games || Array.from(base.games));
      base.features = new Set(payload.features || Array.from(base.features));
      base.tiers = { ...base.tiers, ...(payload.tiers || {}) };
      base.custom = Array.isArray(payload.custom) ? payload.custom : [];
      base.notes = payload.notes || '';
      base.hostingPlanId = payload.hostingPlanId || base.hostingPlanId;
      base.contact = { ...base.contact, ...(payload.contact || {}) };
      return base;
    }catch(_){ return defaultState(productId); }
  }

  function saveState(state){
    try{
      localStorage.setItem(storagePrefix + state.productId, JSON.stringify({
        productId: state.productId,
        packageId: state.packageId,
        billingPlan: state.billingPlan,
        games: Array.from(state.games),
        features: Array.from(state.features),
        tiers: state.tiers,
        custom: state.custom,
        notes: state.notes,
        hostingPlanId: state.hostingPlanId,
        contact: state.contact
      }));
      localStorage.setItem(storagePrefix + 'currency', activeCurrency);
      return true;
    }catch(_){ return false; }
  }

  function applyPackageDefaults(state, productId, packageId){
    const product = PRODUCTS[productId];
    const pkg = product.packages[packageId] || product.packages[Object.keys(product.packages)[0]];
    state.productId = productId;
    state.packageId = packageId;
    state.games = new Set(pkg.defaults.games || []);
    state.features = new Set(pkg.defaults.features || []);
    state.tiers = { ...state.tiers, ...(pkg.defaults.tiers || {}) };
  }

  function computeTotal(state){
    const product = PRODUCTS[state.productId];
    const pkg = product.packages[state.packageId];
    let total = pkg.baseMonthly || 0;
    state.games.forEach(id => { const g = byId(product.games, id); if(g) total += g.price; });
    state.features.forEach(id => { const f = byId(product.features, id); if(f) total += f.price; });
    total += (byId(sharedTiers.users, state.tiers.users)?.add || 0) + (byId(sharedTiers.rooms, state.tiers.rooms)?.add || 0) + (byId(sharedTiers.support, state.tiers.support)?.add || 0);
    total += (byId(sharedHosting, state.hostingPlanId)?.price || 0);
    state.custom.forEach(c => { total += Number(c.price) || 0; });
    return total;
  }

  function progressPct(state){
    const hasPkg = !!state.packageId;
    const hasGames = state.games.size > 0;
    const hasFeats = state.features.size > 0;
    const hasTiers = !!state.tiers.users && !!state.tiers.rooms;
    return Math.min(100, (hasPkg?25:0) + (hasGames?35:0) + (hasFeats?20:0) + (hasTiers?20:0));
  }

  function validateContact(state){
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((state.contact.email || '').trim());
    const phoneOk = (state.contact.phone || '').replace(/[^0-9+]/g,'').length >= 7;
    return emailOk && phoneOk;
  }

  function summaryHtml(state){
    const product = PRODUCTS[state.productId];
    const pkg = product.packages[state.packageId];
    const games = Array.from(state.games).map(id => byId(product.games, id)).filter(Boolean);
    const feats = Array.from(state.features).map(id => byId(product.features, id)).filter(Boolean);
    const tu = byId(sharedTiers.users, state.tiers.users);
    const tr = byId(sharedTiers.rooms, state.tiers.rooms);
    const ts = byId(sharedTiers.support, state.tiers.support);
    const hp = byId(sharedHosting, state.hostingPlanId);
    const monthly = computeTotal(state);
    const totals = { monthly, quarterly: monthly * 3 * 0.95, yearly: monthly * 12 * 0.90 };
    const plan = state.billingPlan || 'monthly';
    const planAmount = plan === 'quarterly' ? `${fmtPrice(totals.quarterly)} ${isAr?'/ ربع':'/ quarter'}` : plan === 'yearly' ? `${fmtPrice(totals.yearly)} ${isAr?'/ سنة':'/ year'}` : plan === 'lifetime' ? (isAr ? 'مخصص — تواصل مع المبيعات' : 'Custom — contact sales') : `${fmtPrice(totals.monthly)} ${isAr?'/ شهر':'/ month'}`;
    const lines = [];
    lines.push(`<b>${L.package}:</b> ${esc(isAr ? pkg.nameAr : pkg.nameEn)}`);
    lines.push(`<b>${isAr?'المنتج':'Product'}:</b> ${esc(L.productTabs[state.productId].title)}`);
    lines.push(`<b>${L.games}:</b> ${games.length ? games.map(g => esc(isAr ? g.ar : g.en)).join(isAr?'، ':', ') : '—'}`);
    if(state.custom.length) lines.push(`<b>${isAr?'عناصر مخصصة':'Custom'}:</b> ${state.custom.map(c => esc(c.name)).join(isAr?'، ':', ')}`);
    lines.push(`<b>${L.features}:</b> ${feats.length ? feats.map(f => esc(isAr ? f.ar : f.en)).join(isAr?'، ':', ') : '—'}`);
    lines.push(`<b>${L.scale}:</b> ${esc(isAr ? (tu?.labelAr || '') : (tu?.labelEn || ''))} • ${esc(isAr ? (tr?.labelAr || '') : (tr?.labelEn || ''))} • ${esc(isAr ? (ts?.labelAr || '') : (ts?.labelEn || ''))}`);
    if(hp) lines.push(`<b>${isAr?'الاستضافة':'Hosting'}:</b> ${esc(isAr ? hp.ar : hp.en)} (${L.plus}${fmtPrice(hp.price)}/${L.month})`);
    if(state.notes && state.notes.trim()) lines.push(`<b>${L.notes}:</b> ${esc(state.notes.trim())}`);
    return { html:`${L.yourQuote} <b>${esc(planAmount)}</b><br><br>${lines.join('<br>')}`, totalText:planAmount, monthly, totals };
  }

  function buildEmailBody(state){
    const product = PRODUCTS[state.productId];
    const pkg = product.packages[state.packageId];
    const games = Array.from(state.games).map(id => byId(product.games, id)).filter(Boolean).map(x => isAr ? x.ar : x.en).join(isAr?'، ':', ');
    const feats = Array.from(state.features).map(id => byId(product.features, id)).filter(Boolean).map(x => isAr ? x.ar : x.en).join(isAr?'، ':', ');
    const summary = summaryHtml(state);
    return `${isAr?'المنتج':'Product'}: ${state.productId}\n${L.package}: ${isAr ? pkg.nameAr : pkg.nameEn}\n${L.games}: ${games || '—'}\n${L.features}: ${feats || '—'}\n${L.scale}: ${isAr ? byId(sharedTiers.users, state.tiers.users)?.labelAr : byId(sharedTiers.users, state.tiers.users)?.labelEn} / ${isAr ? byId(sharedTiers.rooms, state.tiers.rooms)?.labelAr : byId(sharedTiers.rooms, state.tiers.rooms)?.labelEn} / ${isAr ? byId(sharedTiers.support, state.tiers.support)?.labelAr : byId(sharedTiers.support, state.tiers.support)?.labelEn}\n${isAr?'الاستضافة':'Hosting'}: ${isAr ? byId(sharedHosting, state.hostingPlanId)?.ar : byId(sharedHosting, state.hostingPlanId)?.en}\n${L.yourQuote} ${summary.totalText}\n\n${L.fullName}: ${state.contact.name || ''}\n${L.company}: ${state.contact.company || ''}\n${L.email}: ${state.contact.email || ''}\n${L.phone}: ${state.contact.phone || ''}\n${L.payment}: ${L.paymentOptions[state.contact.payment] || state.contact.payment || ''}\n\n${L.notes}: ${state.notes || ''}`;
  }

  function renderBuilder(qb){
    const emojiBase = location.pathname.includes('/quote-builder/') ? '../assets/emoji/' : 'assets/emoji/';
    const imgBase = location.pathname.includes('/quote-builder/') ? '../assets/img/' : 'assets/img/';
    const qbIcon = (file, alt='') => `<img class="ac-emoji sm" src="${emojiBase}${file}" alt="${esc(alt)}" aria-hidden="${alt? 'false':'true'}">`;

    const state = qb.__qbState || (qb.__qbState = loadState('ArenaCore'));
    const product = PRODUCTS[state.productId];
    qb.classList.add('qb-ace');

    const wrap = qb.closest('.qb-inline') || qb.parentElement;
    if(wrap){
      $$('[aria-label="Product toggle"]', wrap).forEach(el => el.classList.add('qb-ac-hidden-toggle'));
      $$('.small', wrap).forEach(el => {
        if(/Select the product first|اختر المنتج أولًا/i.test((el.textContent || '').trim())) el.classList.add('qb-ac-hidden-toggle');
      });
    }

    const packageCards = Object.entries(product.packages).map(([id,p]) => {
      const checked = state.packageId === id ? 'checked' : '';
      const label = isAr ? p.nameAr : p.nameEn;
      const meta = `${fmtPrice(p.baseMonthly)} ${isAr?'/ شهر':'/ mo'} ${isAr?'قبل الإضافات':'before add-ons'}`;
      return `<label class="pkg3d"><input type="radio" name="acPkg" value="${id}" ${checked}><span class="pkg3d-face"><span class="pkg3d-title">${esc(label)}</span><span class="pkg3d-meta">${esc(meta)}</span></span></label>`;
    }).join('');

    const searchId = 'acGameSearch';
    const catMap = state.productId === 'VERSUS' ? [{id:'stylepacks', title:L.categoryStylePacks}] : [
      {id:'core', title:L.categoryCore},
      {id:'gameplay', title:L.categoryGameplay},
      {id:'infra', title:L.categoryInfra},
      {id:'other', title:L.categoryOther}
    ];
    const moduleBlocks = catMap.map(cat => {
      const items = product.games.filter(g => g.cat === cat.id).map(g => `
        <label class="item">
          <span><input type="checkbox" data-game="${g.id}" ${state.games.has(g.id)?'checked':''}><b>${esc(isAr ? g.ar : g.en)}</b></span>
          <span class="meta">${L.plus}${esc(fmtPrice(g.price))}/${L.month}</span>
        </label>`).join('');
      return `<div class="qb-ac-panel"><h4>${esc(cat.title)}</h4><div class="list" data-cat="${cat.id}">${items || `<div class="small">${isAr?'لا يوجد عناصر':'No items'}</div>`}</div></div>`;
    }).join('');

    const featureItems = product.features.map(f => `
      <label class="item">
        <span><input type="checkbox" data-feature="${f.id}" ${state.features.has(f.id)?'checked':''}><b>${esc(isAr ? f.ar : f.en)}</b></span>
        <span class="meta">${L.plus}${esc(fmtPrice(f.price))}/${L.month}</span>
      </label>`).join('');

    const hostingItems = sharedHosting.map(h => `
      <label class="hosting-card ${state.hostingPlanId===h.id?'is-selected':''}">
        <input type="radio" name="acHosting" value="${h.id}" ${state.hostingPlanId===h.id?'checked':''}>
        <div class="hosting-title">${esc(isAr ? h.ar : h.en)}</div>
        <div class="hosting-spec">${esc(`${h.specs.vCPU} • ${h.specs.ram} • ${h.specs.storage} • ${h.specs.bandwidth}`)}</div>
        <div class="hosting-extra">${qbIcon('Emoji_14_Nav_Map.png')} ${esc((isAr ? h.extraAr.locations : h.extraEn.locations) || '')}<br>${qbIcon('Emoji_19_Security.png')} ${esc((isAr ? h.extraAr.security : h.extraEn.security) || '')}</div>
        <div class="hosting-price">${esc(fmtPrice(h.price))} ${isAr?'/ شهر':'/ mo'}</div>
      </label>`).join('');

    const usersSelect = sharedTiers.users.map(t => `<option value="${t.id}" ${state.tiers.users===t.id?'selected':''}>${esc(isAr ? t.labelAr : t.labelEn)}${t.add?` (${L.plus}${fmtPrice(t.add)}/${L.month})`:''}</option>`).join('');
    const roomsSelect = sharedTiers.rooms.map(t => `<option value="${t.id}" ${state.tiers.rooms===t.id?'selected':''}>${esc(isAr ? t.labelAr : t.labelEn)}${t.add?` (${L.plus}${fmtPrice(t.add)}/${L.month})`:''}</option>`).join('');
    const supportSelect = sharedTiers.support.map(t => `<option value="${t.id}" ${state.tiers.support===t.id?'selected':''}>${esc(isAr ? t.labelAr : t.labelEn)}${t.add?` (${L.plus}${fmtPrice(t.add)}/${L.month})`:''}</option>`).join('');

    const billing = L.billingOptions;
    const paymentOptions = Object.entries(L.paymentOptions).map(([value,label]) => `<option value="${value}" ${state.contact.payment===value?'selected':''}>${esc(label)}</option>`).join('');
    const summary = summaryHtml(state);

    qb.innerHTML = `
      <div class="qb-ac-products" role="tablist" aria-label="${esc(isAr?'اختيار المنتج':'Product selection')}">
        ${['ArenaCore','VERSUS'].map(id => `
          <label class="qb-ac-tab ${state.productId===id?'is-active':''}" role="tab" aria-selected="${state.productId===id?'true':'false'}">
            <input type="radio" name="acProduct" value="${id}" ${state.productId===id?'checked':''}>
            <img class="qb-ac-tab-logo" src="${imgBase + (id==='ArenaCore' ? 'arenacore-portlet-tab-logo.png' : 'versus-portlet-tab-logo.png')}" alt="${esc(L.productTabs[id].title)}"><span class="qb-ac-tab-title">${esc(L.productTabs[id].title)}</span>
            <span class="qb-ac-tab-sub">${esc(L.productTabs[id].sub)}</span>
          </label>`).join('')}
      </div>
      <div class="qb-ac-shell">
        <div class="qb-ac-main">
          <div class="qb-ac-panel"><h3>${esc(L.quoteTitle)}</h3><div class="small">${esc(L.packageHint)}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_03_Price_Quotation.png')} ${esc(L.selectPackage)}</h4><div class="pill-grid" id="acPkgPills">${packageCards}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon(state.productId === 'VERSUS' ? 'Emoji_05_Gallery.png' : 'Emoji_08_Game_Engine.png')} ${esc(state.productId === 'VERSUS' ? L.versusStylesTitle : L.gamesTitle)}</h4><input class="input" id="${searchId}" type="search" placeholder="${esc(L.gamesSearch)}"><div style="height:12px"></div>${moduleBlocks}</div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_17_Customization.png')} ${esc(L.addCustom)}</h4><div class="custom-fields"><div><div class="small">${esc(L.customName)}</div><input class="input" id="acCustomName" type="text" placeholder="${esc(isAr?'مثال: تكامل مخصص':'e.g., Custom integration')}"></div><div><div class="small">${esc(L.customPrice)}</div><input class="input" id="acCustomPrice" type="number" min="0" step="50" placeholder="250"></div><div class="custom-btn"><button class="btn primary" type="button" id="acAddCustom">${esc(L.add)}</button></div></div><div id="acCustomRows" style="margin-top:12px;display:grid;gap:10px;">${state.custom.map((c,idx)=>`<label class="item"><span><b>${esc(c.name)}</b></span><span class="meta">${L.plus}${esc(fmtPrice(c.price))}/${L.month} <button class="btn" style="padding:6px 10px;border-radius:12px;" type="button" data-remove-custom="${idx}">${isAr?'حذف':'Remove'}</button></span></label>`).join('')}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon(state.productId === 'VERSUS' ? 'Emoji_07_License_Key.png' : 'Emoji_22_Integration.png')} ${esc(state.productId === 'VERSUS' ? L.versusLicensingTitle : L.featuresTitle)}</h4><div class="list">${featureItems}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_21_Scalability.png')} ${esc(L.hostingTitle)}</h4><div class="hosting-grid">${hostingItems}</div><div class="small hosting-note">${esc(L.hostingNote)}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_28_Growth_Metrics.png')} ${esc(L.scaleTitle)}</h4><div class="list"><div><div class="small">${esc(L.capacityUsers)}</div><select class="input" id="acTierUsers">${usersSelect}</select></div><div><div class="small">${esc(L.capacityRooms)}</div><select class="input" id="acTierRooms">${roomsSelect}</select></div><div><div class="small">${esc(L.supportTier)}</div><select class="input" id="acTierSupport">${supportSelect}</select></div><div><div class="small">${esc(L.notes)}</div><textarea class="input" id="acNotes" rows="3" placeholder="${esc(L.placeholderNotes)}">${esc(state.notes || '')}</textarea></div></div><div class="actions" style="margin-top:12px;"><button class="btn" type="button" id="acReset">${esc(L.reset)}</button><button class="btn" type="button" id="acCall">${esc(L.callCta)}</button></div></div>
        </div>
        <aside class="qb-ac-side">
          <div class="qb-ac-panel">
            <div class="summary">
              <div class="quote-total" id="acQuoteTotal">${esc(L.yourQuote)} <span>${esc(summary.totalText)}</span></div>
              <div class="progress" aria-label="${esc(isAr?'التقدم':'Progress')}"><div id="acQuoteProgress" style="width:${progressPct(state)}%"></div></div>
              <div class="currency-row"><div class="currency-label">${esc(isAr?'العملة':'Currency')}</div><div class="currency-controls"><span class="pill-badge crypto" id="acCryptoBadge" style="display:${CURRENCY[activeCurrency]?.crypto?'inline-flex':'none'};">${isAr?'خصم 10%':'10% off'}</span><div class="select-wrap"><select class="input" id="acCurrency"><option value="USD">USD ($)</option><option value="EUR">EUR (€)</option><option value="GBP">GBP (£)</option><option value="JOD">JOD (${isAr?'د.أ':'JOD'})</option><option value="SAR">Saudi Riyal (⃁)</option><option value="AED">UAE Dirham (د.إ)</option><option value="USDT">USDT</option><option value="USDC">USDC</option><option value="PYUSD">PYUSD</option><option value="PAXG">PAXG</option></select></div></div></div>
            </div>
          </div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_20_Updates..png')} ${esc(L.billing)}</h4><div class="billing-grid">${['monthly','quarterly','yearly','lifetime'].map(plan => `<label class="billing-card ${state.billingPlan===plan?'is-selected':''}"><input type="radio" name="acBilling" value="${plan}" ${state.billingPlan===plan?'checked':''}><div class="billing-title">${esc(billing[plan].title)} ${billing[plan].badge?`<span class="pill-badge">${esc(billing[plan].badge)}</span>`:''}</div><div class="billing-price" data-plan-price="${plan}"></div><div class="billing-meta">${esc(billing[plan].meta)}</div></label>`).join('')}</div><div class="small" style="margin-top:10px;">${esc(isAr?'كل الخطط تأتي مع التزام 12 شهرًا.':'All plans are offered with a 12-month commitment.')}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_04_Analytics.png')} ${esc(L.summary)}</h4><div class="summary" id="acQuoteSummary">${summary.html || esc(L.summaryEmpty)}</div></div>
          <div class="qb-ac-panel"><h4>${qbIcon('Emoji_23_Support.png')} ${esc(L.contact)}</h4><div class="form-grid"><div><div class="small">${esc(L.fullName)}</div><input class="input" id="acName" type="text" placeholder="${esc(isAr?'اسمك':'Your name')}" value="${esc(state.contact.name||'')}"></div><div><div class="small">${esc(L.company)}</div><input class="input" id="acCompany" type="text" placeholder="${esc(isAr?'الشركة (اختياري)':'Company (optional)')}" value="${esc(state.contact.company||'')}"></div><div><div class="small">${esc(L.email)} <b>*</b></div><input class="input" id="acEmail" type="email" placeholder="name@company.com" value="${esc(state.contact.email||'')}"></div><div><div class="small">${esc(L.phone)} <b>*</b></div><input class="input" id="acPhone" type="tel" placeholder="+962..." value="${esc(state.contact.phone||'')}"></div></div><label class="check"><input type="checkbox" id="acPdf" ${state.contact.pdf?'checked':''}><span>${esc(L.printable)}</span></label><div class="pay-method"><div class="small">${esc(L.payment)}</div><select class="input" id="acPayment"><option value="">${esc(L.paymentChoose)}</option>${paymentOptions}</select></div><div class="qb-ac-msg" id="acFormMsg"></div><div class="actions" style="margin-top:12px;"><button class="btn" type="button" id="acSave">${esc(L.saveDraft)}</button><button class="btn" type="button" id="acLoad">${esc(L.loadDraft)}</button><button class="btn primary" type="button" id="acRequest">${esc(L.requestCta)}</button></div><div class="small" style="margin-top:10px;">${esc(L.finalTerms)}</div></div>
        </aside>
      </div>`;

    const currencySel = $('#acCurrency', qb); if(currencySel) currencySel.value = activeCurrency;
    const total = summaryHtml(state);
    const planEls = $$('[data-plan-price]', qb);
    const quarterly = `${fmtPrice(total.totals.quarterly)} ${isAr?'/ ربع':'/ quarter'}`;
    const yearly = `${fmtPrice(total.totals.yearly)} ${isAr?'/ سنة':'/ year'}`;
    const monthly = `${fmtPrice(total.totals.monthly)} ${isAr?'/ شهر':'/ mo'}`;
    planEls.forEach(el => {
      const plan = el.getAttribute('data-plan-price');
      el.textContent = plan === 'quarterly' ? quarterly : plan === 'yearly' ? yearly : plan === 'lifetime' ? (isAr?'مخصص — تواصل مع المبيعات':'Custom — contact sales') : monthly;
    });

    bindBuilder(qb);
  }

  function bindBuilder(qb){
    const state = qb.__qbState;
    const rerender = () => renderBuilder(qb);
    $$('input[name="acProduct"]', qb).forEach(r => r.addEventListener('change', () => {
      const next = r.value;
      qb.__qbState = loadState(next);
      rerender();
    }));
    $$('input[name="acPkg"]', qb).forEach(r => r.addEventListener('change', () => {
      applyPackageDefaults(state, state.productId, r.value);
      rerender();
    }));
    $$('input[data-game]', qb).forEach(cb => cb.addEventListener('change', () => {
      const id = cb.getAttribute('data-game');
      cb.checked ? state.games.add(id) : state.games.delete(id);
      saveState(state); rerender();
    }));
    $$('input[data-feature]', qb).forEach(cb => cb.addEventListener('change', () => {
      const id = cb.getAttribute('data-feature');
      cb.checked ? state.features.add(id) : state.features.delete(id);
      saveState(state); rerender();
    }));
    $$('input[name="acHosting"]', qb).forEach(r => r.addEventListener('change', () => { state.hostingPlanId = r.value; saveState(state); rerender(); }));
    $$('input[name="acBilling"]', qb).forEach(r => r.addEventListener('change', () => { state.billingPlan = r.value; saveState(state); rerender(); }));
    $('#acCurrency', qb)?.addEventListener('change', (e) => { activeCurrency = e.target.value; try{ localStorage.setItem(storagePrefix + 'currency', activeCurrency); }catch(_){ } rerender(); });
    $('#acTierUsers', qb)?.addEventListener('change', (e) => { state.tiers.users = e.target.value; saveState(state); rerender(); });
    $('#acTierRooms', qb)?.addEventListener('change', (e) => { state.tiers.rooms = e.target.value; saveState(state); rerender(); });
    $('#acTierSupport', qb)?.addEventListener('change', (e) => { state.tiers.support = e.target.value; saveState(state); rerender(); });
    $('#acNotes', qb)?.addEventListener('input', (e) => { state.notes = e.target.value; saveState(state); });
    ['acName','acCompany','acEmail','acPhone','acPayment'].forEach(id => $('#'+id, qb)?.addEventListener('input', () => {
      state.contact = {
        name: $('#acName', qb)?.value || '',
        company: $('#acCompany', qb)?.value || '',
        email: $('#acEmail', qb)?.value || '',
        phone: $('#acPhone', qb)?.value || '',
        payment: $('#acPayment', qb)?.value || '',
        pdf: $('#acPdf', qb)?.checked || false
      };
      saveState(state);
    }));
    $('#acPdf', qb)?.addEventListener('change', () => { state.contact.pdf = $('#acPdf', qb)?.checked || false; saveState(state); });
    $('#acAddCustom', qb)?.addEventListener('click', () => {
      const nameEl = $('#acCustomName', qb); const priceEl = $('#acCustomPrice', qb);
      const name = (nameEl?.value || '').trim(); const displayPrice = Number(priceEl?.value || 0); const price = toUSD(displayPrice);
      if(!name || !Number.isFinite(displayPrice) || displayPrice <= 0 || !Number.isFinite(price) || price <= 0) return;
      state.custom.push({ name, price });
      saveState(state); rerender();
    });
    $$('[data-remove-custom]', qb).forEach(btn => btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-remove-custom')); if(Number.isFinite(idx)) state.custom.splice(idx, 1); saveState(state); rerender();
    }));
    $('#acReset', qb)?.addEventListener('click', () => { qb.__qbState = defaultState(state.productId); saveState(qb.__qbState); rerender(); });
    $('#acCall', qb)?.addEventListener('click', () => {
      const subject = encodeURIComponent(isAr ? 'طلب مكالمة ترخيص ArenaCore / VERSUS' : 'ArenaCore / VERSUS Licensing Call Request');
      const body = encodeURIComponent(isAr ? 'مرحبًا فريق ArenaCore،\n\nأرغب بمناقشة ترخيص المنتج.\n\nالمنتج:\nالمنطقة:\nالمنصات المستهدفة:\nموعد الإطلاق:\n\nشكرًا' : 'Hi ArenaCore team,\n\nI would like to discuss product licensing.\n\nProduct:\nRegion:\nTarget platforms:\nLaunch timeline:\n\nThanks');
      window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    });
    $('#acSave', qb)?.addEventListener('click', () => {
      const msg = $('#acFormMsg', qb); saveState(state); if(msg){ msg.textContent = L.draftSaved; msg.className = 'qb-ac-msg is-ok'; }
    });
    $('#acLoad', qb)?.addEventListener('click', () => {
      qb.__qbState = loadState(state.productId); const msg = $('#acFormMsg', qb); if(msg){ msg.textContent = L.draftLoaded; msg.className = 'qb-ac-msg is-ok'; } rerender();
    });
    $('#acRequest', qb)?.addEventListener('click', () => {
      const msg = $('#acFormMsg', qb);
      state.contact = {
        name: $('#acName', qb)?.value || '', company: $('#acCompany', qb)?.value || '', email: $('#acEmail', qb)?.value || '', phone: $('#acPhone', qb)?.value || '', payment: $('#acPayment', qb)?.value || '', pdf: $('#acPdf', qb)?.checked || false
      };
      saveState(state);
      if(!validateContact(state)){
        if(msg){ msg.textContent = L.formBad; msg.className = 'qb-ac-msg is-bad'; }
        return;
      }
      if(msg){ msg.textContent = L.formOk; msg.className = 'qb-ac-msg is-ok'; }
      const subject = encodeURIComponent(L.requestSubject);
      const body = encodeURIComponent(buildEmailBody(state));
      if(state.contact.pdf) setTimeout(() => { try{ window.print(); }catch(_){ } }, 80);
      window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    });
    $('#'+ 'acGameSearch', qb)?.addEventListener('input', (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      $$('[data-cat] .item', qb).forEach(item => {
        const txt = item.textContent.toLowerCase();
        item.style.display = !q || txt.includes(q) ? '' : 'none';
      });
    });
  }

  $$('#quoteBuilder').forEach(qb => renderBuilder(qb));
});


/* QC PATCH v18 — scoped enhancements for requested sections only */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const isAr = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar' || location.pathname.includes('/arabic/');

  function moveRoiVisuals(){
    const results = $('#roi .results');
    const firstResult = $('#roi .results .result');
    const charts = $('#roi .card > .charts');
    const flowCard = $$('#roi .card > .card').find(card => card.querySelector('.roi-flow'));
    if(!results || !firstResult || !charts || !flowCard || results.dataset.v18RoiMoved === '1') return;
    flowCard.classList.add('roi-flow-card');
    firstResult.insertAdjacentElement('afterend', charts);
    charts.insertAdjacentElement('afterend', flowCard);
    results.dataset.v18RoiMoved = '1';
  }

  function refreshGalleryDescriptions(){
    const descMap = isAr ? {
      g1:'لقطة من Classic Arena تبرز وضوح المسارات والقراءة التكتيكية.',
      g2:'لقطة من Wacky Arena تُظهر الطاقة العالية والوضوح اللوني السريع.',
      g3:'لقطة من Military Arena تركّز على الانضباط البصري والهوية القتالية.',
      g4:'لقطة من Cubic Arena توضّح الأسلوب المبسّط وسهولة القراءة.',
      g5:'لقطة من Swords & Guns Arena تمزج الفانتازيا مع المواجهات المسلحة.',
      g6:'لقطة من Horror Arena تُبرز التوتر والجو الثقيل عالي التباين.'
    } : {
      g1:'Classic Arena snapshot focused on tactical lanes and grounded combat readability.',
      g2:'Wacky Arena snapshot showing high-energy color, speed, and creator-friendly readability.',
      g3:'Military Arena snapshot centered on disciplined combat framing and premium realism.',
      g4:'Cubic Arena snapshot highlighting stylized simplicity and clear sandbox readability.',
      g5:'Swords & Guns Arena snapshot blending fantasy combat spectacle with firearms pacing.',
      g6:'Horror Arena snapshot built around tension, contrast, and heavier visual impact.'
    };
    $$('[data-gallery]').forEach(box => {
      const g = box.getAttribute('data-gallery');
      const desc = descMap[g];
      if(!desc) return;
      $$('.gallery-item-desc', box).forEach(el => { el.textContent = desc; });
    });
  }

  function enhanceLightboxThumbnails(){
    const lb = $('#acLightbox');
    const inner = $('#acLightbox .lb-inner');
    const img = $('#acLightbox img');
    if(!lb || !inner || !img) return;

    let thumbs = $('.lb-thumbs', inner);
    if(!thumbs){
      thumbs = document.createElement('div');
      thumbs.className = 'lb-thumbs';
      inner.appendChild(thumbs);
    }

    const collect = (g) => $$(`[data-gallery="${g}"] a[data-lightbox="1"]`).map(a => a.getAttribute('href')).filter(Boolean);

    function renderThumbs(album, currentSrc){
      if(!album.length){ thumbs.innerHTML=''; return; }
      thumbs.innerHTML = album.map((src, index) => `
        <button class="lb-thumb${src===currentSrc?' is-active':''}" type="button" data-idx="${index}" aria-label="${isAr?'انتقال إلى الصورة':'Go to image'} ${index+1}">
          <img loading="lazy" src="${src}" alt="">
        </button>
      `).join('');
      $$('.lb-thumb', thumbs).forEach(btn => btn.addEventListener('click', () => {
        const next = album[Number(btn.getAttribute('data-idx')) || 0];
        if(next) img.src = next;
      }));
    }

    function syncFromTrigger(trigger){
      if(!trigger) return;
      if(trigger.matches('[data-lightbox="1"]')){
        const box = trigger.closest('[data-gallery]');
        const album = box ? $$('a[data-lightbox="1"]', box).map(a => a.getAttribute('href')).filter(Boolean) : [trigger.getAttribute('href')];
        renderThumbs(album, trigger.getAttribute('href'));
        return;
      }
      if(trigger.matches('[data-gallery-launch]')){
        const album = collect(trigger.getAttribute('data-gallery-launch'));
        renderThumbs(album, album[0] || '');
      }
    }

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox="1"], [data-gallery-launch]');
      if(!trigger) return;
      setTimeout(() => syncFromTrigger(trigger), 0);
    }, true);

    img.addEventListener('load', () => {
      const current = img.getAttribute('src') || '';
      $$('.lb-thumb', thumbs).forEach(btn => {
        const thumbImg = $('img', btn);
        btn.classList.toggle('is-active', !!thumbImg && thumbImg.getAttribute('src') === current);
      });
    });

    $('.lb-nav.prev', lb)?.addEventListener('click', () => setTimeout(() => img.dispatchEvent(new Event('load')), 0));
    $('.lb-nav.next', lb)?.addEventListener('click', () => setTimeout(() => img.dispatchEvent(new Event('load')), 0));
  }

  function run(){
    moveRoiVisuals();
    refreshGalleryDescriptions();
    enhanceLightboxThumbnails();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();



/* QC PATCH v19 — critical scoped fixes only */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const isAr = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'ar' || location.pathname.includes('/arabic/');
  const T = isAr ? {
    heroTitle: '<span class="hero-metal-silver">أطلق تجربة FPS أقوى بسرعة أعلى وتحكم أوضح —</span> <span class="hero-metal-red">جاهزة للترخيص ومصممة للعائد</span>.',
    heroLead: 'ArenaCore يساعد الاستوديوهات على تقليل إعادة البناء، تثبيت التسليم، وتحويل القوة التقنية إلى عرض ترخيص أوضح للمشترين والشركاء والناشرين.',
    featuresTitle: 'طوّر تجربة FPS تنافسية أسرع مع تحكم أعلى وعائد ترخيص أقوى',
    featuresSub: 'كل شيء هنا مصمم لتحويل التطوير إلى فرصة ترخيص: إطلاق أسرع، استقرار أعلى، وعائد قابل للقياس.',
    roiTitle: 'احسب فترة الاسترداد أسرع واتخذ قرار الترخيص بثقة تجارية أوضح',
    roiSub: 'اختبر أثر تقليص مدة التطوير وتسريع الإطلاق ورفع الإيرادات قبل اتخاذ القرار.',
    demosTitle: 'معارض الفيديو',
    demosSub: 'اعرض للمشترين كيف تتحول الجاهزية الإنتاجية والوضوح القتالي والإيقاع التنافسي إلى مادة بيع أقوى.',
    galleryTitle: 'معارض حِزم الأنماط',
    gallerySub: 'أظهر فقط الاتجاه البصري الذي يريد المشتري تقييمه ثم افتح كل حزمة في عرض مركّز وواضح.',
    statsTitle: 'إحصاءات السوق (صياغة جاهزة للترخيص)',
    statsSub: 'امنح صناع القرار مبررات أوضح حول النمو والتسعير وقيمة الترخيص على المدى الطويل.',
    specsTitle: 'قارن الأداء والأثر التجاري بأدلة أوضح للمشترين',
    specsSub: 'حوّل التقييم التقني إلى قرار شراء أسرع بمؤشرات واضحة وقابلة للدفاع.',
    contactTitle: 'ابدأ محادثة البيع بسياق تقني وتجاري أوضح',
    contactSub: 'التقط اهتمام المشترين المؤهلين بنموذج أدق وكابتشا فعّالة وتبادل أقل للرسائل.',
    quoteStep1: 'اختر الشريحة التجارية التي تناسب حجمك',
    quoteStep2: 'حدّد أهداف اللعب والنشر التي يجب أن تصل إليها',
    quoteStep3: 'أضف فقط ما يقلل مخاطر التسليم أو يرفع العائد',
    quoteStep3Sub: 'اختر فقط ما يزيد احتمال الإطلاق الأسرع والتشغيل الأكثر أمانًا.',
    quoteStep3b: 'اختر الوحدات التي تصنع أسرع طريق نحو الإطلاق',
    quoteStep3bSub: 'انتقِ الوحدات التي تخدم المنتج الذي ستقوم بترخيصه مباشرة.',
    quoteStep4: 'شارك سياق المشتري المطلوب لإخراج تسعير أدق',
    galleryHint: 'اختر حزمة نمط واحدة لإظهار صورها فقط، ثم افتح أي لقطة بالحجم الكامل عند الحاجة.',
    roiCurrency: 'العملة',
    roiStatusGood: 'قرار استثمار قوي',
    roiStatusOk: 'قرار استثمار مقبول',
    roiStatusBad: 'بحاجة إلى تحسين الافتراضات',
    captchaLabel: 'CAPTCHA',
    captchaPlaceholder: 'أدخل الرمز',
    captchaHelp: 'أدخل الرمز تمامًا كما يظهر. الأرقام العربية مقبولة.',
    captchaInvalid: 'يرجى إدخال رمز CAPTCHA بشكل صحيح.',
    statA1: 'تسريع الإطلاق', statA1d: 'كل شهر توفير يزيد فرصة التقاط الإيراد المبكر.',
    statA2: 'قابلية إعادة الاستخدام', statA2d: 'الأساس الجاهز للبيع يرفع العائد مع كل نشر جديد.',
    statA3: 'خفض الهدر', statA3d: 'تقليل إعادة البناء يحسن كفاءة الإنفاق الفني والتشغيلي.',
    statB1: 'حقوق أوسع', statB1d: 'السعر الأعلى يعكس عادة نطاق استخدام وترخيص أوسع.',
    statB2: 'تهيئة أعمق', statB2d: 'يشمل عادة دعم نقل المعرفة والتسريع التجاري.',
    statB3: 'جاهزية تشغيل', statB3d: 'الدعم الممتد يقلل مخاطر التشغيل بعد الإطلاق.'
  } : {
    heroTitle: '<span class="hero-metal-silver">Launch a sharper FPS product faster with more control —</span> <span class="hero-metal-red">license-ready & revenue-focused</span>.',
    heroLead: 'ArenaCore helps studios cut reinvention, stabilize delivery, and turn technical strength into a clearer licensing offer for buyers, partners, and publishers.',
    featuresTitle: 'Build competitive FPS products faster with more control and stronger licensing upside',
    featuresSub: 'Everything is designed to convert into licensing: faster delivery, higher stability, and measurable ROI.',
    roiTitle: 'Model faster payback and make the licensing decision with clearer commercial confidence',
    roiSub: 'Stress-test delivery savings, launch acceleration, and revenue upside before you commit.',
    demosTitle: 'Videos Galleries',
    demosSub: 'Show buyers how production-ready combat, pacing, and visual readability translate into a stronger sales story.',
    galleryTitle: 'Styles Packs Galleries',
    gallerySub: 'Reveal only the visual direction buyers want to inspect, then open each pack in a focused review flow.',
    statsTitle: 'Industry Statistics (license-ready framing)',
    statsSub: 'Give decision-makers clearer proof around growth, pricing logic, and long-term licensing value.',
    specsTitle: 'Benchmark with clearer proof for technical and commercial buyers',
    specsSub: 'Turn technical evaluation into a faster yes with metrics buyers can understand and defend.',
    contactTitle: 'Start the sales conversation with sharper technical and commercial context',
    contactSub: 'Capture qualified buyer intent with a cleaner brief, a working CAPTCHA, and fewer back-and-forth rounds.',
    quoteStep1: 'Pick the commercial tier that matches your scale',
    quoteStep2: 'Define the gameplay and deployment targets you must ship',
    quoteStep3: 'Add only the extras that reduce delivery risk or lift monetization',
    quoteStep3Sub: 'Pick only what increases your probability of shipping faster and operating safer.',
    quoteStep3b: 'Select the modules that create the fastest path to launch',
    quoteStep3bSub: 'Choose the modules that match the product you are licensing.',
    quoteStep4: 'Share the buyer context needed for a more accurate final quote',
    galleryHint: 'Choose one style pack to reveal only its images, then open any frame in fullscreen when needed.',
    roiCurrency: 'Currency',
    roiStatusGood: 'Strong investment case',
    roiStatusOk: 'Acceptable investment case',
    roiStatusBad: 'Needs stronger assumptions',
    captchaLabel: 'CAPTCHA',
    captchaPlaceholder: 'Enter code',
    captchaHelp: 'Enter the code exactly as shown. Arabic numerals are supported.',
    captchaInvalid: 'Please enter the CAPTCHA code correctly.',
    statA1: 'Launch acceleration', statA1d: 'Every month saved improves early revenue capture potential.',
    statA2: 'Reuse leverage', statA2d: 'A saleable foundation raises return on every additional deployment.',
    statA3: 'Waste reduction', statA3d: 'Less reinvention improves technical and operational efficiency.',
    statB1: 'Broader rights', statB1d: 'Higher tiers usually reflect wider licensing and usage scope.',
    statB2: 'Deeper onboarding', statB2d: 'Commercial packages often include faster transfer of know-how.',
    statB3: 'Operational readiness', statB3d: 'Extended support lowers post-launch operational risk.'
  };

  function setText(sel, txt){ const el = $(sel); if(el && txt != null) el.textContent = txt; }
  function setHTML(sel, html){ const el = $(sel); if(el && html != null) el.innerHTML = html; }

  function applyBenefitCopy(){
    const heroTitle = $('#heroTitle') || $('.hero h1');
    const heroLead = $('#heroLead') || $('.hero .hero-lead');
    if(heroTitle) heroTitle.innerHTML = T.heroTitle;
    if(heroLead) heroLead.textContent = T.heroLead;
    const heroBtns = $$('.hero .hero-actions a.btn');
    if(heroBtns[0]) heroBtns[0].setAttribute('href', location.pathname.includes('/quote-builder/') ? (isAr ? '../quote-builder/' : '../quote-builder/') : 'quote-builder/');
    if(heroBtns[1]) heroBtns[1].setAttribute('href', '#roi');
    if(heroBtns[2]) heroBtns[2].setAttribute('href', '#demos');

    const sectionMap = {
      '#features': [T.featuresTitle, T.featuresSub],
      '#roi': [T.roiTitle, T.roiSub],
      '#demos': [T.demosTitle, T.demosSub],
      '#stats': [T.statsTitle, T.statsSub],
      '#specs': [T.specsTitle, T.specsSub],
      '#contact': [T.contactTitle, T.contactSub]
    };
    Object.entries(sectionMap).forEach(([sel, vals]) => {
      const title = $(`${sel} > .container > .section-title`);
      const emoji = title?.querySelector('.ac-emoji');
      if(title && emoji){ title.innerHTML=''; title.appendChild(emoji); title.append(' ' + vals[0]); }
      else if(title){ title.textContent = vals[0]; }
      setText(`${sel} > .container > .section-sub`, vals[1]);
    });

    const galleryTitle = $('#demos .gallery-section-title');
    const galleryEmoji = galleryTitle?.querySelector('.ac-emoji');
    if(galleryTitle && galleryEmoji){ galleryTitle.innerHTML=''; galleryTitle.appendChild(galleryEmoji); galleryTitle.append(' ' + T.galleryTitle); }
    setText('#demos .gallery-section-sub', T.gallerySub);
    const hint = $('#demos .gallery-shell > p');
    if(hint) hint.textContent = T.galleryHint;

    const steps = $$('.step-panel .section-title');
    if(steps[0]) steps[0].textContent = T.quoteStep1;
    if(steps[1]) steps[1].textContent = T.quoteStep2;
    if(steps[2]) steps[2].textContent = T.quoteStep3;
    if(steps[3]) steps[3].textContent = T.quoteStep3b;
    if(steps[4]) steps[4].textContent = T.quoteStep4;
    const subs = $$('.step-panel .section-sub');
    if(subs[0]) subs[0].textContent = T.quoteStep3Sub;
    if(subs[1]) subs[1].textContent = T.quoteStep3bSub;
  }

  function externalizeGalleryHeader(){
    const title = $('#demos .gallery-section-title');
    const sub = $('#demos .gallery-section-sub');
    const card = title?.closest('.card');
    if(!title || !sub || !card || card.dataset.galleryExternalized === '1') return;
    const stack = document.createElement('div');
    stack.className = 'gallery-header-stack';
    card.parentNode.insertBefore(stack, card);
    stack.appendChild(title);
    stack.appendChild(sub);
    card.classList.add('gallery-shell');
    card.dataset.galleryExternalized = '1';
  }

  function initGalleryReveal(){
    const shell = $('#demos .gallery-shell');
    if(!shell) return;
    const groups = $$('#demos .gallery-group');
    const buttons = $$('#demos .gallery-preview-link');
    groups.forEach(g => g.classList.remove('is-active'));
    shell.classList.remove('is-open');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const g = btn.getAttribute('data-gallery-launch');
        if(!g) return;
        shell.classList.add('is-open');
        groups.forEach(box => box.classList.toggle('is-active', box.getAttribute('data-g') === g));
      }, true);
    });
  }

  function enhanceRoi(){
    const roi = $('#roi');
    if(!roi) return;
    const firstCard = $('#roi .roi > .card');
    const results = $('#roi .results');
    const charts = $('#roi .charts');
    const flow = $$('#roi .card').find(card => card.querySelector('.roi-flow'));
    if(firstCard && results && charts && results.parentElement !== firstCard){
      firstCard.insertBefore(results, charts);
    }
    if(firstCard && results && flow && flow.parentElement !== firstCard){
      firstCard.appendChild(flow);
      flow.classList.add('roi-flow-card');
    }
    if(results && !$('#roiCurrency', results)){
      const currencyRow = document.createElement('div');
      currencyRow.className = 'roi-currency-row';
      currencyRow.innerHTML = `
        <div class="currency-label">${T.roiCurrency}</div>
        <div class="currency-controls">
          <div class="select-wrap">
            <select id="roiCurrency" aria-label="${T.roiCurrency}">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JOD">JOD (د.أ)</option>
              <option value="SAR">SAR (⃁)</option>
              <option value="AED">AED (د.إ)</option>
            </select>
          </div>
        </div>`;
      const statusRow = document.createElement('div');
      statusRow.className = 'roi-status-row';
      statusRow.innerHTML = `
        <div id="roiStatus" class="roi-status-lights" data-status="good">
          <span class="roi-indicator" data-status="bad"></span>
          <span class="roi-indicator" data-status="ok"></span>
          <span class="roi-indicator" data-status="good"></span>
        </div>
        <div class="roi-status-copy" id="roiStatusCopy">${T.roiStatusGood}</div>`;
      results.appendChild(currencyRow);
      results.appendChild(statusRow);
    }
    const currency = $('#roiCurrency');
    const rates = {USD:{r:1,s:'$'},EUR:{r:0.92,s:'€'},GBP:{r:0.79,s:'£'},JOD:{r:0.71,s:'د.أ '},SAR:{r:3.75,s:'⃁ '},AED:{r:3.67,s:'د.إ '}};
    const toLatin = (v) => String(v || '').replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const num = (sel) => Number(toLatin($(sel)?.value || 0)) || 0;
    const currentProduct = () => ($('[data-roi-product][aria-pressed="true"]')?.getAttribute('data-roi-product')) || 'ArenaCore';
    const money = (n) => {
      const cur = currency?.value || 'USD';
      const info = rates[cur] || rates.USD;
      return `${info.s}${Math.round((n || 0) * info.r).toLocaleString(isAr ? 'ar' : 'en-US')}`;
    };
    function render(){
      const team = num('#roiTeam');
      const cost = num('#roiCost');
      const months = Math.max(1, num('#roiMonths'));
      const rev = Math.max(0, num('#roiRevenue'));
      const timeSaved = Math.max(0, num('#roiTimeSaved'));
      const infra = Math.max(0, num('#roiInfra'));
      const license = Math.max(0, num('#roiLicense'));
      const product = currentProduct();
      const currentDevCost = team * cost * months;
      const currentInfra = infra * months;
      const currentTotal = currentDevCost + currentInfra;
      const onboardingRate = product === 'VERSUS' ? 0.04 : 0.06;
      const onboarding = Math.max(3500, currentDevCost * onboardingRate);
      const licTotal = license + onboarding;
      const benefit = (rev * timeSaved) + currentInfra;
      const net = benefit - licTotal;
      const roiPct = licTotal > 0 ? (net / licTotal) * 100 : 0;
      const savings = Math.max(0, currentTotal - licTotal);
      const monthlyBenefit = (rev * (timeSaved / months)) + infra;
      const payback = monthlyBenefit > 0 ? (licTotal / monthlyBenefit) : Infinity;
      const savingsEl = $('#roiSavings'), roiEl = $('#roiROI'), paybackEl = $('#roiPayback'), summaryEl = $('#roiSummary');
      if(savingsEl) savingsEl.textContent = money(savings);
      if(roiEl) roiEl.textContent = `${Math.round(isFinite(roiPct) ? roiPct : 0)}%`;
      if(paybackEl) paybackEl.textContent = isFinite(payback) ? `${payback.toFixed(1)} ${isAr ? 'شهر' : 'mo'}` : '—';
      if(summaryEl) summaryEl.textContent = `${product === 'VERSUS' ? 'VERSUS' : 'ArenaCore'}: ${money(licTotal)} | ${isAr ? 'صافي المنفعة' : 'Net benefit'}: ${money(Math.max(0, net))}`;
      const status = roiPct >= 100 ? 'good' : roiPct >= 25 ? 'ok' : 'bad';
      const statusEl = $('#roiStatus');
      const statusCopy = $('#roiStatusCopy');
      if(statusEl) statusEl.setAttribute('data-status', status);
      if(statusCopy) statusCopy.textContent = status === 'good' ? T.roiStatusGood : status === 'ok' ? T.roiStatusOk : T.roiStatusBad;
    }
    ['input','change'].forEach(evt => roi.addEventListener(evt, () => requestAnimationFrame(render), true));
    currency?.addEventListener('change', render);
    render();
  }

  function enhanceStats(){
    const cards = $$('#stats .bigstat');
    if(cards[0] && !$('.stat-mini-grid', cards[0])){
      const wrap = document.createElement('div');
      wrap.className = 'stat-mini-grid';
      wrap.innerHTML = `
        <div class="stat-mini"><b>${T.statA1}</b><span>${T.statA1d}</span></div>
        <div class="stat-mini"><b>${T.statA2}</b><span>${T.statA2d}</span></div>
        <div class="stat-mini"><b>${T.statA3}</b><span>${T.statA3d}</span></div>`;
      cards[0].appendChild(wrap);
    }
    if(cards[1] && !$('.stat-mini-grid', cards[1])){
      const wrap = document.createElement('div');
      wrap.className = 'stat-mini-grid';
      wrap.innerHTML = `
        <div class="stat-mini"><b>${T.statB1}</b><span>${T.statB1d}</span></div>
        <div class="stat-mini"><b>${T.statB2}</b><span>${T.statB2d}</span></div>
        <div class="stat-mini"><b>${T.statB3}</b><span>${T.statB3d}</span></div>`;
      cards[1].appendChild(wrap);
    }
  }

  function enhanceCaptcha(){
    const form = $('#contactForm');
    const field = $('#contactForm .row:last-of-type .field:nth-child(2)');
    if(!form || !field) return;
    const label = field.querySelector('label');
    if(label) label.textContent = `${T.captchaLabel} *`;
    field.innerHTML = `
      <label for="captchaAnswer">${T.captchaLabel} *</label>
      <div class="captcha-inline">
        <span id="captchaCode" class="captcha-code" aria-hidden="true"></span>
        <input id="captchaAnswer" class="input" type="text" autocomplete="off" inputmode="numeric" placeholder="${T.captchaPlaceholder}">
      </div>
      <div class="help">${T.captchaHelp}</div>`;
    const codeEl = $('#captchaCode', field);
    const inputEl = $('#captchaAnswer', field);
    const msg = $('#contactMsg');
    const normalize = (v) => String(v || '').trim().replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
    const refresh = () => {
      const code = String(Math.floor(1000 + Math.random() * 9000));
      if(codeEl) codeEl.textContent = code;
      if(inputEl) inputEl.dataset.expected = code;
      if(inputEl) inputEl.value = '';
    };
    refresh();
    form.addEventListener('submit', (e) => {
      const actual = normalize(inputEl?.value);
      const expected = normalize(inputEl?.dataset.expected);
      if(actual !== expected){
        e.preventDefault();
        e.stopImmediatePropagation();
        if(msg) msg.innerHTML = `<div class="error">${T.captchaInvalid}</div>`;
        inputEl?.focus();
        refresh();
      } else {
        setTimeout(refresh, 100);
      }
    }, true);
  }

  function run(){
    applyBenefitCopy();
    externalizeGalleryHeader();
    initGalleryReveal();
    enhanceRoi();
    enhanceStats();
    enhanceCaptcha();
  }

  document.addEventListener('DOMContentLoaded', run);
  if(document.readyState !== 'loading') run();
})();
