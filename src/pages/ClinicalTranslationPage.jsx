import { AlertTriangle, ArrowUpRight, CheckCircle2, Database, Languages, ShieldCheck, Stethoscope } from 'lucide-react';
import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero.jsx';
import { PageShell } from '../components/PageShell.jsx';

const RESULTS = [
  ['65.70', 'BLEU', 'NLLB-200, compared with 60.12 for mBART'],
  ['82.81', 'CHRF++', 'NLLB-200, compared with 78.34 for mBART'],
  ['0.780', 'METEOR', 'NLLB-200, compared with 0.742 for mBART'],
  ['0.968', 'BERTScore F1', 'NLLB-200, compared with 0.956 for mBART'],
  ['0.830', 'COMET', 'NLLB-200, compared with 0.800 for mBART'],
  ['1.84', 'Perplexity', 'NLLB-200, compared with 3.25 for mBART'],
];

export function ClinicalTranslationPage() {
  return (
    <PageShell navTone="dark">
      <main id="main" className="case-page paper-page">
        <CaseStudyHero
          eyebrow="Research paper / Medical NLP"
          title="Testing safer English-Nepali medical translation."
          summary="The study fine-tunes two multilingual models on clinical language, compares their translation quality, and looks beyond headline scores to the errors that could change medical meaning."
          tags={['English-Nepali', 'NLLB-200', 'mBART', 'Clinical NLP', 'RANLP 2025']}
          sourceUrl="https://aclanthology.org/2025.ranlp-1.6/"
          sourceLabel="Read the published paper"
          theme="orange"
        />

        <section className="paper-fact-strip">
          <div className="case-container">
            <div><span>Published at</span><strong>RANLP 2025</strong></div>
            <div><span>Pages</span><strong>48–56</strong></div>
            <div><span>Year</span><strong>2025</strong></div>
            <div><span>My role</span><strong>Co-author</strong></div>
          </div>
        </section>

        <section className="case-section paper-problem">
          <div className="case-container split-case">
            <div>
              <span className="case-section-label">The problem</span>
              <h2>A fluent translation can still be medically wrong.</h2>
            </div>
            <div className="large-body">
              <p>General translation models have far less English-Nepali clinical data than they have for high-resource language pairs. That makes rare symptoms, diagnoses, drugs, and procedures easier to omit or mistranslate.</p>
              <p>In healthcare, a sentence that sounds natural is not enough. A changed term, missing warning, or invented symptom can change what a patient or clinician understands.</p>
            </div>
          </div>
        </section>

        <section className="case-section clinical-data-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Training and evaluation</span>
              <h2>Build a focused corpus, then test the language and the medical meaning.</h2>
            </div>
            <div className="clinical-pipeline">
              <article><Database size={25} /><strong>25,000</strong><h3>Medical sentence pairs</h3><p>English-Nepali clinical text used to adapt the models to the domain.</p></article>
              <article><Languages size={25} /><strong>10,000</strong><h3>Synthetic pairs</h3><p>Back-translated examples used to expand the limited training material.</p></article>
              <article><Stethoscope size={25} /><strong>2,000</strong><h3>Reviewed pairs</h3><p>Manually reviewed validation and test examples kept separate from training.</p></article>
            </div>
            <div className="model-comparison">
              <div><span>Model A</span><strong>mBART</strong><p>A multilingual sequence-to-sequence baseline fine-tuned on the medical corpus.</p></div>
              <div><span>Model B</span><strong>NLLB-200 3.3B</strong><p>A larger multilingual model fine-tuned and evaluated on the same domain task.</p></div>
              <div><span>Evaluation</span><strong>Six automatic metrics + error review</strong><p>Lexical overlap, semantic similarity, fluency, model confidence, and clinically important failures.</p></div>
            </div>
          </div>
        </section>

        <section className="case-section result-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">Reported results</span>
              <h2>NLLB-200 scored better on every reported metric.</h2>
            </div>
            <div className="result-grid clinical-result-grid">
              {RESULTS.map(([value, label, detail]) => (
                <article key={label}><strong>{value}</strong><h3>{label}</h3><p>{detail}</p></article>
              ))}
            </div>
            <p className="result-caveat"><AlertTriangle size={19} /> Stronger benchmark scores are evidence of better performance on this test set. They do not make either model safe for unsupervised clinical use.</p>
          </div>
        </section>

        <section className="case-section error-section">
          <div className="case-container split-case">
            <div>
              <span className="case-section-label">What the error review found</span>
              <h2>The important differences showed up in symptoms and diagnosis terms.</h2>
            </div>
            <div className="finding-list">
              <article><CheckCircle2 size={22} /><div><h3>NLLB-200 made fewer critical term errors</h3><p>It produced fewer false-positive symptom and diagnosis terms, and fewer malformed or invented outputs.</p></div></article>
              <article><AlertTriangle size={22} /><div><h3>Both models could still hallucinate</h3><p>Automatic metrics can reward a sentence that is close overall while missing a rare term that matters to the clinical meaning.</p></div></article>
              <article><Languages size={22} /><div><h3>Rare terminology remained difficult</h3><p>NLLB-200 still occasionally omitted uncommon medical terms, so model size did not remove the need for review.</p></div></article>
            </div>
          </div>
        </section>

        <section className="case-section solved-section clinical-solved-section">
          <div className="case-container">
            <div className="case-title-row">
              <span className="case-section-label">What this work contributes</span>
              <h2>A stronger model result and a clearer path to responsible deployment.</h2>
            </div>
            <div className="solved-grid">
              <article><span>01</span><h3>Domain evidence</h3><p>Shows that focused medical data and fine-tuning can materially improve English-Nepali translation results.</p></article>
              <article><span>02</span><h3>Model comparison</h3><p>Provides direct evidence that NLLB-200 outperformed mBART on this corpus and evaluation setup.</p></article>
              <article><span>03</span><h3>Error visibility</h3><p>Separates fluent-looking output from clinically important failures that aggregate scores can hide.</p></article>
              <article><span>04</span><h3>Deployment safeguards</h3><p>Supports confidence flags, terminology alerts, clinician review, and a human decision before translated text is used.</p></article>
            </div>
          </div>
        </section>

        <section className="case-section limitation-section">
          <div className="case-container split-case">
            <div><span className="case-section-label">Limits and next steps</span><h2>This is research progress, not a finished clinical translator.</h2></div>
            <div className="large-body">
              <p>Training required about 18 hours on A100 GPUs. That cost makes the current setup difficult to reproduce or run in low-resource and offline environments.</p>
              <p>Future work includes quantization and distillation, broader dialect and bias testing, stronger privacy controls, confidence-based warnings, and evaluation with clinicians in the loop.</p>
              <div className="safety-note"><ShieldCheck size={22} /><span>Best use: decision support with review. Not a replacement for a qualified medical professional.</span></div>
            </div>
          </div>
        </section>

        <section className="case-next">
          <div className="case-container">
            <p>Next paper: combining camera meaning with LiDAR depth.</p>
            <a href="/research/mst/">Camera-LiDAR fusion research <ArrowUpRight size={20} /></a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
