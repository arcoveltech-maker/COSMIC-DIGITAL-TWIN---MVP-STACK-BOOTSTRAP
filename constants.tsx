import React from 'react';

// Icons
const OrchestratorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ApiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DataIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
const MetricsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const ContainerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ResearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>;
const ExpandIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>;


export const CORE_COMPONENTS = [
  {
    title: "Orchestrator",
    icon: <OrchestratorIcon />,
    description: "Python 3.11 engine driving manifest-based phases, ensuring repeatable and controlled deployments.",
  },
  {
    title: "API Layer",
    icon: <ApiIcon />,
    description: "FastAPI service exposing /scenario and /object endpoints for interaction with the digital twin.",
  },
  {
    title: "Data Spine",
    icon: <DataIcon />,
    description: "Local Parquet and SQLite for MVP, designed for seamless upgrade to S3 and PostgreSQL.",
  },
  {
    title: "Observability",
    icon: <MetricsIcon />,
    description: "Prometheus for metrics, Grafana for dashboards, and structured JSON logs for auditing.",
  },
  {
    title: "Containerization",
    icon: <ContainerIcon />,
    description: "Docker Compose for rapid MVP deployment, with a clear path to Kubernetes for production scaling.",
  },
];

export const REPOSITORY_LAYOUT = `
cosmic-twin/
├─ orchestrator/
│  ├─ master_orchestrator.py
│  ├─ roadmap_manifest.yaml
│  └─ policy/
├─ phases/
│  ├─ deploy_phase1_mvp_twin.py
│  ├─ rollback_phase1.py
│  └─ ...
├─ kpi/
│  ├─ phase1_kpis.json
│  └─ probes/
├─ fidelity/
│  ├─ fidelity_policy.yaml
│  └─ engine.py
├─ api/
│  ├─ server.py
│  └─ manifests/
├─ ops/
│  ├─ docker-compose.yml
│  ├─ prometheus.yml
│  └─ grafana_dashboards/
└─ docs/
   └─ README.md
`;

export const DOCKER_COMPOSE_CONTENT = `
version: "3.9"
services:
  orchestrator:
    build: ./orchestrator
    command: ["python", "master_orchestrator.py"]
    volumes:
      - ./orchestrator:/app
      - ./phases:/app/phases
    depends_on:
      - db
    restart: unless-stopped

  api:
    build: ./api
    command: ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
    ports:
      - "8000:8000"
    volumes:
      - ./api:/app
    depends_on:
      - orchestrator
    restart: unless-stopped

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: twin
      POSTGRES_PASSWORD: twinpass
      POSTGRES_DB: twin_state
    volumes:
      - db_data:/var/lib/postgresql/data

  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
`;

export const PROMETHEUS_CONFIG_CONTENT = `
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'orchestrator'
    static_configs:
      - targets: ['orchestrator:8000']
  - job_name: 'api'
    static_configs:
      - targets: ['api:8000']
`;

export const README_CONTENT = `
# Cosmic Digital Twin – MVP Bootstrap

## Prerequisites
- Docker + Docker Compose
- Python 3.11 (for local dev)

## Quickstart
1. Clone repo.
2. Run \`docker-compose up --build\`.
3. Access:
   - API: http://localhost:8000/docs
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3000

## Workflow
- Orchestrator reads manifest and executes phases.
- API exposes /scenario and /object endpoints.
- KPI probes log to Prometheus for visualization.
`;

export const CODE_SNIPPETS = [
  { id: 'docker', label: 'docker-compose.yml', language: 'yaml', content: DOCKER_COMPOSE_CONTENT },
  { id: 'prometheus', label: 'prometheus.yml', language: 'yaml', content: PROMETHEUS_CONFIG_CONTENT },
  { id: 'readme', label: 'README.md', language: 'markdown', content: README_CONTENT },
];

export const STRATEGIC_PAYOFFS = [
  {
    title: "Rapid Deployment",
    icon: <RocketIcon />,
    description: "Spin up the entire MVP stack in under an hour, accelerating development and testing cycles.",
  },
  {
    title: "Immediate Value",
    icon: <ResearchIcon />,
    description: "Researchers can immediately submit scenarios and query objects, enabling early feedback and validation.",
  },
  {
    title: "Built for Growth",
    icon: <ExpandIcon />,
    description: "The orchestrator and containerized setup are ready to expand into Phase 2 and beyond with minimal friction.",
  },
];
