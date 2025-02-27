---
title: repofinder.abhish3kk.in
description: This website is built with Vue 3 to showcase my personal skills, projects, and technical expertise.
stack: React, Azure, GitHub Actions, Zustand, TypeScript, Tailwind CSS, Node Express, SQLite, Swagger, Azure Devops
---

# RepoFinder

**Live URL:** [repofinder.abhish3kk.in](https://repofinder.abhish3kk.in)

## Overview

RepoFinder allows users to search GitHub repositories based on various filters such as topics, languages, stars, sorting order, and result limits. Users can log in to save their search preferences.

## Features

- **Dynamic Repository Search:** Filter by topic, language, stars, sort order, per-page limit.
- **User Authentication:** JWT-based authentication (expires in 1 day).
- **Saved Preferences:** Logged-in users can save search settings.
- **Dynamic Routing:** Each selected topic creates its own route.
- **API Documentation:** Uses Swagger for testing API endpoints.

## Tech Stack

### Frontend

- React.js
- TypeScript
- React Router (for dynamic routing)
- Tailwind CSS (for styling)

### Backend

- Node.js + Express.js (TypeScript)
- JWT-based authentication
- Swagger (for API testing/documentation)

## Authentication

- Uses **JWT tokens** for secure authentication.
- Tokens expire after **1 day**.
- Login required to save search preferences.

## API Usage

The backend provides an API to fetch repositories based on filters. The API documentation is available via Swagger.

## Dynamic Routing

Each GitHub topic generates its own route dynamically, enabling deep linking to filtered repository lists.

## Deployment

- **Frontend:** Hosted on Azure Static Web Apps.
- **Backend:** Deployed as an Azure Web App.

## Architecture Diagram

```mermaid
graph TD;
    A[User] -->|Visits| B[repofinder.abhish3kk.in]
    B -->|DNS Resolution| C[Azure Static Web Apps]
    C -->|Loads Frontend| D[React App]
    D -->|User Login| E[api.abhish3kk.in]
    E -->|Auth Validation| F{Auth Success?}
    F --Yes--> G[Land on Home Page]
    F --No--> H[Show Login Error]
    G -->|Load Default Starred Repos| I[Repo List]
    G -->|Navigate to Settings| J[Search Criteria Page]
```

## Future Enhancements

- User favorites system to save and revisit preferred repositories.
- Improved caching for faster results.
- Multi-language support for a global audience.

---

For more details, visit [repofinder.abhish3kk.in](https://repofinder.abhish3kk.in).
