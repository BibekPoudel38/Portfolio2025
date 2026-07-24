import { ArrowUpRight, Camera, Cpu, Crosshair, Database, Gauge, Radar } from 'lucide-react';
import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero.jsx';
import { PageShell } from '../components/PageShell.jsx';

const RESULTS = [
  ['82.98%', 'Overall 3D mAP', 'Highest overall result reported in the paper across KITTI easy, moderate, and hard levels.'],
  ['82.21%', 'Moderate 3D mAP', 'Best result reported for the moderate category.'],
  ['77.81%', 'Hard 3D mAP', 'Best result reported for the hard category.'],
  ['89.10%', 'Overall BEV mAP', 'Overall bird’s-eye-view detection result reported in the paper.'],
  ['89.93%', 'Moderate BEV mAP', 'Highest moderate BEV result reported in the comparison.'],
];

export function MstPaperPage() {
  return (
    <PageShell navTone="dark">
      <main id="main" className="case-page paper-page">
        <CaseStudyHero
          eyebrow="Research paper / Autonomous perception"
          title="MST: A Modified Sparse Transformer with depth-aware attention for multi-modal camera-LiDAR fusion in autonomous vehicles"
          summary="The Modified Sparse Transformer combines camera images and LiDAR point clouds for 3D object detection. It focuses attention on useful regions, keeps depth in the representation, and aligns the two sensors before fusion."
          tags={['Camera-LiDAR fusion', 'Sparse transformer', '3D detection', 'KITTI', 'Peer reviewed']}
          sourceUrl="https://www.sciencedirect.com/science/article/pii/S2590198225002507"
          sourceLabel="Read the published paper"
          theme="blue"
        />

        <section className="paper-fact-strip">
          <div className="case-container">
            <div><span>Published in</span><strong>Transportation Research Interdisciplinary Perspectives</strong></div>
            <div><span>Volume</span><strong>34 / Article 101571</strong></div>
            <div><span>Year</span><strong>2025</strong></div>
            <div><span>My role</span><strong>Co-author</strong></div>
          </div>
        </section>

        <section className="case-section paper-problem">
          <div className="case-container split-case">
            <div><span className="case-section-label">The problem</span><h2>One sensor sees meaning. The other sees depth. The model must connect them quickly.</h2></div>
            <div className="large-body">
              <p>Cameras capture color, texture, signs, lanes, and object appearance. LiDAR measures the 3D shape and distance of the scene. Either sensor alone misses information the other has.</p>
              <p>Combining them is difficult. Camera pixels and LiDAR points live in different coordinate systems, LiDAR data is sparse, and standard transformer attention can become expensive when it compares every token with every other token.</p>
            </div>
          </div>
        </section>

        <section className="case-section sensor-compare-section">
          <div className="case-container sensor-compare">
            <article><Camera size={28} /><span>Camera</span><h3>Rich visual meaning</h3><p>Useful for recognizing objects and understanding the visual scene.</p><strong>Weakness: depth is indirect.</strong></article>
            <div className="sensor-plus">+</div>
            <article><Radar size={28} /><span>LiDAR</span><h3>Precise 3D geometry</h3><p>Useful for distance, shape, boundaries, and spatial position.</p><strong>Weakness: points are sparse.</strong></article>
            <div className="sensor-equals">=</div>
            <article className="sensor-result"><Crosshair size={28} /><span>Fused perception</span><h3>Meaning placed in 3D space</h3><p>The model can identify an object and estimate where it is.</p><strong>Goal: reliable detection with practical compute.</strong></article>
          </div>
        </section>

        <section className="case-section method-section">
          <div className="case-container">
            <div className="case-title-row"><span className="case-section-label">The proposed method</span><h2>Modified Sparse Transformer (MST)</h2></div>
            <ol className="method-list">
              <li><span>01</span><div><h3>Extract camera and LiDAR features separately</h3><p>Specialized backbones turn multi-view images and point clouds into features that preserve what each sensor does best.</p></div></li>
              <li><span>02</span><div><h3>Select useful regions</h3><p>Learned masks filter irrelevant pixels and points. Sparse attention works on informative regions instead of processing every possible pair.</p></div></li>
              <li><span>03</span><div><h3>Align the sensors</h3><p>LiDAR points are projected onto the camera plane using calibration data so visual and geometric features refer to the same place.</p></div></li>
              <li><span>04</span><div><h3>Add depth-aware attention</h3><p>Depth values influence attention, helping the model favor features that are close in 3D space instead of relying only on 2D position.</p></div></li>
              <li><span>05</span><div><h3>Model moving objects</h3><p>Dynamic instance interaction and prospective features focus the model on objects and regions likely to change.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="case-section results-section">
          <div className="case-container">
            <div className="case-title-row"><span className="case-section-label">Reported results</span><h2>Strong 3D and bird’s-eye-view detection on KITTI</h2></div>
            <div className="results-grid">
              {RESULTS.map(([number, label, description]) => (
                <article key={label}><strong>{number}</strong><h3>{label}</h3><p>{description}</p></article>
              ))}
            </div>
            <p className="result-note">These are benchmark results reported by the paper. They show detection performance on KITTI; they do not by themselves prove road safety or production readiness.</p>
          </div>
        </section>

        <section className="case-section solved-section">
          <div className="case-container">
            <div className="case-title-row"><span className="case-section-label">What this work solves</span><h2>Three limits in camera-LiDAR fusion</h2></div>
            <div className="solved-grid">
              <article><Cpu size={24} /><h3>Too much attention work</h3><p>Sparse selection reduces attention spent on regions that add little value.</p></article>
              <article><Crosshair size={24} /><h3>Sensor misalignment</h3><p>Projection and cross-modal alignment connect 3D points to the correct image regions.</p></article>
              <article><Database size={24} /><h3>Depth lost in 2D features</h3><p>Depth-aware positional encoding keeps 3D distance available during attention.</p></article>
              <article><Gauge size={24} /><h3>Hard driving scenes</h3><p>Multi-scale and dynamic interaction modules target dense traffic, occlusion, lighting changes, and moving objects.</p></article>
            </div>
          </div>
        </section>

        <section className="case-section paper-takeaway">
          <div className="case-container split-case">
            <div><span className="case-section-label">Plain-language takeaway</span><h2>Use the camera for meaning, LiDAR for geometry, and sparse attention to connect only what matters.</h2></div>
            <p className="large-body">The paper shows one path toward perception models that are both accurate and more selective about compute. The practical next step is validation on more datasets, hardware, weather, and real-time driving conditions.</p>
          </div>
        </section>

        <section className="case-next">
          <div className="case-container"><p>Next paper</p><a href="/research/clinical-translation/">English-Nepali medical translation <ArrowUpRight size={20} /></a></div>
        </section>
      </main>
    </PageShell>
  );
}
