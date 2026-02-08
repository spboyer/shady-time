# Work Routing

How to decide who handles what.

## Routing Table

| Work Type | Route To | Examples |
|-----------|----------|----------|
| Architecture & scope | Fenster | Project structure, tech decisions, dependency choices |
| React components & pages | McManus | JSX, Tailwind styling, responsive layout, UI components |
| Data models & config | Hockney | JSON data, Vite config, Tailwind config, Azure SWA config, routing setup |
| Testing & QA | Keaton | Test cases, edge cases, responsive verification, build verification |
| Code review | Fenster | Review PRs, check quality, enforce patterns |
| Scope & priorities | Kobayashi | What to build next, trade-offs, prioritization, issue triage |
| Session logging | Scribe | Automatic — never needs routing |

## Rules

1. **Eager by default** — spawn all agents who could usefully start work, including anticipatory downstream work.
2. **Scribe always runs** after substantial work, always as `mode: "background"`. Never blocks.
3. **Quick facts → coordinator answers directly.** Don't spawn an agent for "what port does the server run on?"
4. **When two agents could handle it**, pick the one whose domain is the primary concern.
5. **"Team, ..." → fan-out.** Spawn all relevant agents in parallel as `mode: "background"`.
6. **Anticipate downstream work.** If a feature is being built, spawn the tester to write test cases from requirements simultaneously.
