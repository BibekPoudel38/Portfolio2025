import { ArrowRight, ArrowUpRight, CarFront, Languages } from 'lucide-react';
import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero.jsx';
import { PageShell } from '../components/PageShell.jsx';

export function ResearchPage() {
  return (
    <PageShell navTone="dark">
      <main id="main" className="case-page">
        <CaseStudyHero
          eyebrow="Research / 2 peer-reviewed papers"
          title="Machine learning for problems where errors matter."
          summary="My published work covers two different systems: how an autonomous vehicle combines camera and LiDAR data, and how multilingual models translate English medical text into Nepali."
          tags={['Autonomous perception', 'Medical NLP', 'Transformers', 'Evaluation', '2025']}
          theme="blue"
        />

        <section className="research-index-section">
          <div className="case-container">
            <article className="research-index-card research-index-mst">
              <div className="research-index-icon"><CarFront size={29} strokeWidth={1.5} /></div>
              <div className="research-index-copy">
                <span>Paper 01 / Transportation Research Interdisciplinary Perspectives</span>
                <h2>MST: A Modified Sparse Transformer for camera-LiDAR fusion</h2>
                <p className="research-question">Question: Can a vehicle combine camera meaning and LiDAR depth without paying the full compute cost of dense attention?</p>
                <p>The paper proposes sparse, depth-aware attention and cross-sensor alignment for 3D object detection in difficult road scenes.</p>
                <div className="research-number-row">
                  <div><strong>82.98%</strong><span>overall 3D mAP on KITTI</span></div>
                  <div><strong>89.10%</strong><span>overall BEV mAP</span></div>
                  <div><strong>2025</strong><span>open-access journal article</span></div>
                </div>
                <a href="/research/mst/">Read the complete breakdown <ArrowRight size={17} /></a>
              </div>
            </article>

            <article className="research-index-card research-index-nlp">
              <div className="research-index-icon"><Languages size={29} strokeWidth={1.5} /></div>
              <div className="research-index-copy">
                <span>Paper 02 / RANLP 2025</span>
                <h2>Fine-tuned multilingual models for English-Nepali medical translation</h2>
                <p className="research-question">Question: Can domain fine-tuning improve medical translation for a language with limited clinical training data?</p>
                <p>The study builds a medical corpus, fine-tunes mBART and NLLB-200, and tests both lexical quality and clinically important errors.</p>
                <div className="research-number-row">
                  <div><strong>65.70</strong><span>NLLB-200 BLEU</span></div>
                  <div><strong>0.968</strong><span>BERTScore F1</span></div>
                  <div><strong>1.84</strong><span>perplexity vs 3.25</span></div>
                </div>
                <a href="/research/clinical-translation/">Read the complete breakdown <ArrowRight size={17} /></a>
              </div>
            </article>
          </div>
        </section>

        <section className="research-principle-section">
          <div className="case-container split-case">
            <div><span className="case-section-label">What connects the papers</span><h2>Better models need better checks.</h2></div>
            <div className="large-body">
              <p>Both papers deal with systems where a confident error can cause harm. The work does not stop at a model score. It looks at alignment, failure cases, difficult inputs, and the limits of deployment.</p>
              <p>That same habit shapes my product work: test the workflow, protect the action, and make the system clear to the person using it.</p>
            </div>
          </div>
        </section>

        <section className="case-next">
          <div className="case-container">
            <p>See how those engineering habits show up in a live product.</p>
            <a href="/eesa/">EESA.AI case study <ArrowUpRight size={20} /></a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
