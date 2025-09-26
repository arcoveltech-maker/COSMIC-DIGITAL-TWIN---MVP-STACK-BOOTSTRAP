# Cosmic Digital Twin – MVP Stack Bootstrap

## 1. Overview

This repository contains the full MVP stack for the Cosmic Digital Twin project. It provides a containerized, observable, and extensible foundation for running simulations and scenarios. The stack includes:

-   **Orchestrator**: A Python engine that reads a manifest to execute deployment and simulation phases in a controlled sequence.
-   **API Layer**: A FastAPI service that exposes endpoints for interacting with the digital twin's state, objects, and scenarios.
-   **Observability**: Pre-configured Prometheus and Grafana instances for real-time metrics and monitoring of all services.
-   **Containerization**: A Docker Compose setup that allows for a one-command bring-up of the entire stack.

## 2. Prerequisites

-   Docker
-   Docker Compose

## 3. Quickstart

1.  **Clone the repository:**
    ```sh
    git clone <repository_url>
    cd cosmic-twin
    ```

2.  **Build and run the stack:**
    ```sh
    docker-compose -f ops/docker-compose.yml up --build
    ```
    This command will build the Docker images for the orchestrator and API services and start all containers.

3.  **Verify the services are running:**
    You should see logs from `orchestrator_1`, `api_1`, `prometheus_1`, and `grafana_1` in your terminal. The orchestrator will log its progress as it executes the four phases.

## 4. Accessing Services

Once the stack is running, you can access the various components:

-   **API (FastAPI with Swagger UI):**
    -   **URL:** [http://localhost:8000/docs](http://localhost:8000/docs)
    -   Interact with the `/scenario` and `/object` endpoints.

-   **Prometheus:**
    -   **URL:** [http://localhost:9090](http://localhost:9090)
    -   Check the status of the `api` and `orchestrator` targets in `Status > Targets`.
    -   Run queries against collected metrics, e.g., `orchestrator_current_phase`.

-   **Grafana:**
    -   **URL:** [http://localhost:3000](http://localhost:3000)
    -   **Login:** `admin` / `admin` (you will be prompted to change the password on first login).
    -   The **"Cosmic Digital Twin – Orchestrator KPIs"** dashboard is pre-provisioned and ready to view.

## 5. Project Structure

```
cosmic-twin/
├─ api/
│  ├─ Dockerfile
│  ├─ requirements.txt
│  └─ server.py
├─ kpi/
│  ├─ phase1_kpis.json
│  ├─ phase2_kpis.json
│  ├─ phase3_kpis.json
│  └─ phase4_kpis.json
├─ ops/
│  ├─ docker-compose.yml
│  ├─ grafana/
│  │  ├─ dashboards/
│  │  │  └─ cosmic_twin_dashboard.json
│  │  └─ provisioning/
│  │     ├─ dashboards/
│  │     │  └─ main.yml
│  │     └─ datasources/
│  │        └─ prometheus.yml
│  └─ prometheus.yml
├─ orchestrator/
│  ├─ Dockerfile
│  ├─ master_orchestrator.py
│  ├─ requirements.txt
│  └─ roadmap_manifest.yaml
├─ phases/
│  ├─ deploy_phase1_mvp_twin.py
│  ├─ deploy_phase2_life_and_worlds.py
│  ├─ deploy_phase3_civilizations.py
│  ├─ deploy_phase4_refinement.py
│  ├─ rollback_phase1.py
│  ├─ rollback_phase2.py
│  ├─ rollback_phase3.py
│  └─ rollback_phase4.py
└─ README.md
```