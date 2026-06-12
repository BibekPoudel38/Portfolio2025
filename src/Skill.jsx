import React from "react";
import {
  Code2, MonitorSmartphone, Server, Database, Cloud, Network, ShieldCheck, Brain, TestTube2, Workflow,
} from "lucide-react";

// Skills — categorized monochrome grid (mirrors resume categories)

const CATEGORIES = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "Python", "TypeScript", "JavaScript", "Dart", "SQL"],
  },
  {
    title: "Frontend & Mobile",
    icon: MonitorSmartphone,
    skills: ["React.js", "Next.js", "Flutter", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Django"],
  },
  {
    title: "AI & Intelligent Systems",
    icon: Brain,
    skills: ["OpenAI API", "LangChain", "LangGraph", "RAG", "LLM Fine-tuning", "FAISS", "Pinecone", "Agentic AI", "Prompt Engineering"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux", "Jenkins"],
  },
  {
    title: "Messaging & APIs",
    icon: Network,
    skills: ["REST APIs", "GraphQL", "Kafka", "WebSockets", "WebRTC"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["OAuth2", "JWT", "RBAC", "API Security", "SSL/TLS", "Row-Level Security"],
  },
  {
    title: "Testing & QA",
    icon: TestTube2,
    skills: ["Jest", "JUnit", "Cypress", "Postman", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Concepts & Methods",
    icon: Workflow,
    skills: ["System Design", "Microservices", "Distributed Systems", "DSA", "OOD", "Concurrency", "Agile (Scrum, Kanban)", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">04 — Skills</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">Technical Skills</h2>
        <p className="mt-2 text-sm text-neutral-500">The stack behind everything I ship — from banking AI to e-commerce at scale.</p>

        <div className="mt-10 grid gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden sm:grid-cols-2" role="list" aria-label="Skill categories">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                role="listitem"
                className="bg-neutral-950 p-6 hover:bg-neutral-900 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={15} className="text-neutral-500" aria-hidden />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-neutral-300">{cat.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      className="px-2.5 py-1 rounded border border-neutral-800 text-xs text-neutral-400 hover:border-neutral-600 hover:text-neutral-200 transition-colors"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
