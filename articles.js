// ============================================================
// PEAK MEN'S HEALTH — ARTICLE DATABASE
// ============================================================
// Para adicionar um artigo novo, basta copiar um bloco abaixo
// e preencher com os dados do novo artigo.
// O index e o prostate-health.html se atualizam automaticamente.
// ============================================================

const articles = [

  // ── PROSTATE HEALTH ─────────────────────────────────────
  {
    id: "artigo1-prostata",
    url: "artigo1-prostata.html",
    category: "prostate",
    tag: "BPH",
    tagStyle: "tag-prostate",
    icon: "🔬",
    title: "How to Shrink an Enlarged Prostate Naturally: 7 Science-Backed Strategies",
    excerpt: "The most comprehensive guide to non-surgical BPH management — covering DHT inhibition, anti-inflammatory diet, targeted supplements, and lifestyle changes with the strongest clinical evidence.",
    readTime: "20 min",
    date: "2026-01-10",
    featured: true,
    isNew: false
  },
  {
    id: "artigo2-prostata",
    url: "artigo2-prostata.html",
    category: "prostate",
    tag: "Nocturia & Sleep",
    tagStyle: "tag-urinary",
    icon: "🌙",
    title: "Why Do I Wake Up to Pee at Night? Real Causes & Solutions",
    excerpt: "Waking once at night is normal. Waking 2, 3, or 4+ times is not. This guide explains the prostate, kidney, and hormonal causes of nocturia — and what actually restores uninterrupted sleep.",
    readTime: "16 min",
    date: "2026-01-15",
    featured: false,
    isNew: false
  },
  {
    id: "artigo3-prostata",
    url: "artigo3-prostata.html",
    category: "prostate",
    tag: "Prostate Diet",
    tagStyle: "tag-diet",
    icon: "🥗",
    title: "Best and Worst Foods for Prostate Health: The Evidence-Based List",
    excerpt: "Lycopene, cruciferous vegetables, omega-3s, green tea — and the foods that accelerate prostate growth. A comprehensive dietary guide grounded in clinical research, not wellness trends.",
    readTime: "15 min",
    date: "2026-01-20",
    featured: false,
    isNew: false
  },
  {
    id: "artigo4-prostata",
    url: "artigo4-prostata.html",
    category: "prostate",
    tag: "Screening",
    tagStyle: "tag-screening",
    icon: "🩺",
    title: "The PSA Test Explained: What Your Number Really Means",
    excerpt: "PSA is the most misunderstood number in men's health. This guide explains PSA density, velocity, free vs. total PSA — and what results actually warrant action versus watchful waiting.",
    readTime: "14 min",
    date: "2026-01-25",
    featured: false,
    isNew: false
  },
  {
    id: "artigo5-prostata",
    url: "artigo5-prostata.html",
    category: "prostate",
    tag: "Diagnosis",
    tagStyle: "tag-screening",
    icon: "⚖️",
    title: "BPH vs. Prostate Cancer: How to Tell the Difference",
    excerpt: "Both can cause identical urinary symptoms. This guide explains the key differences in presentation, PSA patterns, DRE findings, and biopsy criteria — and when each warrants urgent investigation.",
    readTime: "17 min",
    date: "2026-02-01",
    featured: false,
    isNew: false
  },
  {
    id: "artigo7-prostata",
    url: "artigo7-prostata.html",
    category: "prostate",
    tag: "Supplements",
    tagStyle: "tag-supplement",
    icon: "💊",
    title: "Prostate Supplements: Complete Evidence Guide — What Works, What Doesn't",
    excerpt: "Saw palmetto, beta-sitosterol, pygeum, stinging nettle, pumpkin seed — ranked by the strength of clinical evidence. Includes dosing, mechanisms, and what the Cochrane reviews actually say.",
    readTime: "19 min",
    date: "2026-02-05",
    featured: false,
    isNew: false
  },
  {
    id: "artigo8-prostata",
    url: "artigo8-prostata.html",
    category: "prostate",
    tag: "Urinary Health",
    tagStyle: "tag-urinary",
    icon: "💧",
    title: "Weak Urine Flow in Men Over 40: Real Causes and How to Restore It",
    excerpt: "A weak stream is one of the earliest signs of prostate trouble — and one of the most treatable. This guide explains the 5 causes of reduced flow, Qmax testing, and what evidence-based options restore normal function.",
    readTime: "18 min",
    date: "2026-02-10",
    featured: false,
    isNew: true
  },
  {
    id: "artigo9-prostata",
    url: "artigo9-prostata.html",
    category: "prostate",
    tag: "Urinary Control",
    tagStyle: "tag-urinary",
    icon: "😰",
    title: "Urinary Urgency in Men Over 40: Why It Happens and How to Regain Control",
    excerpt: "Sudden, uncontrollable urges to urinate affect 33 million Americans — and most men never seek help. This guide covers the neurology of urgency, the 8 common triggers, and the 5-step suppression technique with Level 1 evidence.",
    readTime: "17 min",
    date: "2026-02-15",
    featured: false,
    isNew: true
  },
  {
    id: "artigo10-prostata",
    url: "artigo10-prostata.html",
    category: "prostate",
    tag: "Prostate Biology",
    tagStyle: "tag-prostate",
    icon: "⚠️",
    title: "Prostate Enlargement: What's Really Happening Inside Your Body After 40",
    excerpt: "The prostate grows every year after 40. This deep-dive explains the four mechanisms driving BPH — DHT, estrogen, mineral accumulation, and chronic inflammation — and what the evidence shows can slow or partially reverse it.",
    readTime: "20 min",
    date: "2026-02-20",
    featured: false,
    isNew: true
  },

  // ── SEXUAL PERFORMANCE ──────────────────────────────────
  {
    id: "artigo-performance",
    url: "artigo-performance.html",
    category: "performance",
    tag: "Sexual Health",
    tagStyle: "tag-performance",
    icon: "⚡",
    title: "Sexual Performance in Men Over 40: What Changes and What You Can Do",
    excerpt: "A science-based guide to maintaining and restoring sexual performance as testosterone declines — covering the hormonal, vascular, and psychological factors that matter most.",
    readTime: "18 min",
    date: "2026-01-12",
    featured: false,
    isNew: false
  },
  {
    id: "artigo4-sexual",
    url: "artigo4-sexual.html",
    category: "performance",
    tag: "Male Vitality",
    tagStyle: "tag-vitality",
    icon: "💪",
    title: "Male Vitality After 40: How to Reclaim Your Energy, Drive, and Strength",
    excerpt: "Testosterone, cortisol, sleep quality, and metabolic health all converge to determine your vitality. This guide shows how to optimize each — naturally and effectively.",
    readTime: "16 min",
    date: "2026-01-18",
    featured: false,
    isNew: false
  }

  // ── ADICIONAR NOVOS ARTIGOS AQUI ────────────────────────
  // Copie o bloco abaixo, preencha e salve. Pronto!
  //
  // {
  //   id: "artigo11-prostata",
  //   url: "artigo11-prostata.html",
  //   category: "prostate",          // "prostate" ou "performance"
  //   tag: "Nome da Tag",
  //   tagStyle: "tag-urinary",       // tag-prostate | tag-urinary | tag-diet | tag-screening | tag-supplement
  //   icon: "🔬",
  //   title: "Título do Artigo",
  //   excerpt: "Resumo de 2 linhas sobre o artigo.",
  //   readTime: "15 min",
  //   date: "2026-03-01",            // formato YYYY-MM-DD
  //   featured: false,               // true = artigo em destaque no topo
  //   isNew: true                    // true = badge "New" aparece no card
  // },

};
