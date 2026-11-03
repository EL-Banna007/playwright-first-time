---
name: test-case-generator
description: Analyze software requirements, design test scenarios, and implement Playwright automation tests in TypeScript using the repository's existing architecture, Page Object Model, fixtures, utilities, and conventions.
---

# Test Design and Playwright Automation Skill
ِ
## Objective
Analyze software requirements, identify test coverage, and implement maintainable Playwright automation tests using the existing repository architecture.

## Step 1: Analyze Requirements
1. Read the provided FRS, user stories, requirements, and acceptance criteria.
2. Identify business rules, actors, inputs, outputs, dependencies, and expected behavior.
3. Detect ambiguities, contradictions, missing information, and assumptions.
4. Ask clarification questions when missing information blocks correct implementation.
5. Never invent business rules or expected behavior.

## Step 2: Design Test Scenarios
Generate applicable positive, negative, boundary, and edge-case scenarios.

Consider:
- Required and optional fields.
- Valid and invalid inputs.
- Business rules and state transitions.
- CRUD operations when applicable.
- Search, filtering, sorting, and pagination when applicable.
- Error handling and integration behavior when specified.
- Relevant regression scenarios.

Use appropriate test design techniques, including Equivalence Partitioning, Boundary Value Analysis, Decision Tables, and State Transition Testing.

Avoid redundant or irrelevant scenarios.

## Step 3: Inspect the Existing Repository
Before writing automation code:

1. Inspect package.json and playwright.config.ts.
2. Inspect relevant existing test files.
3. Inspect the existing Page Objects under pages/.
4. Inspect relevant fixtures under fixtures/.
5. Inspect existing utilities under utilies/.
6. Identify naming conventions, test patterns, selectors, assertions, and setup methods.
7. Reuse existing components whenever appropriate.

Do not assume a file's contents from its name alone.

## Step 4: Follow the Existing Architecture
The repository's established architecture takes priority over introducing a new design.

1. Use the existing Page Object Model.
2. Put page-specific locators and interactions in the appropriate Page Object.
3. Keep test specifications focused on test flow, inputs, and expected outcomes.
4. Reuse existing fixtures and utilities when suitable.
5. Extend existing classes and utilities only when necessary.
6. Follow existing TypeScript and Playwright conventions.
7. Do not duplicate existing methods or create unnecessary helper classes.
8. Do not introduce a second automation framework.
9. Do not rename or reorganize existing files without explicit approval.
10. Do not add dependencies unless necessary and approved.

If the existing architecture is unclear, explain the uncertainty and ask before introducing a new pattern.

## Step 5: Implement Playwright Automation
For each approved scenario:

1. Create or update the appropriate Playwright spec file.
2. Reuse or extend the appropriate Page Object.
3. Reuse existing fixtures and utilities.
4. Use meaningful test names and descriptive assertions.
5. Validate observable behavior against requirements.
6. Use stable selectors consistent with the existing project.
7. Avoid arbitrary timeouts and unnecessary fixed waits.
8. Keep test data explicit and independent where practical.
9. Avoid dependencies between tests.
10. Follow the existing project conventions for API and database tests when those are in scope.

Use TypeScript and @playwright/test as configured by the repository.

Do not place all page interactions directly in spec files when the existing architecture uses Page Objects.

## Step 6: Review the Implementation
Before considering the work complete:

1. Verify that the implementation matches the requirements.
2. Check that the test uses the correct Page Object, fixtures, and utilities.
3. Check for duplicated code and unnecessary changes.
4. Verify selectors and expected results against available source information.
5. Identify missing test data, environment configuration, or credentials.
6. Report any assumptions or unresolved issues.

Do not claim the test is passing unless it has actually been executed successfully.

## Step 7: Execute Tests
When the user requests execution:

1. Identify the appropriate test command from the existing project configuration.
2. Run the smallest relevant test scope first.
3. Analyze failures using the available output and artifacts.
4. Distinguish implementation defects, application defects, environment issues, and inconclusive results when evidence supports the classification.
5. Do not modify unrelated tests to hide failures.
6. Report the command used, execution result, and remaining issues.

Do not execute tests or modify files unless permitted by the user's request and the available tools.

## Step 8: Maintain Traceability
Map requirements to scenarios and automated tests when requirement IDs are available.

Use meaningful test titles and preserve traceability in test names, comments, or documentation where appropriate.

Never fabricate requirement IDs or claim coverage that cannot be demonstrated.

## Expected Deliverables
When implementing automation, provide:

1. Requirement summary.
2. Ambiguities and clarification questions.
3. Test scenarios and coverage.
4. Files created or modified.
5. Implementation following the existing architecture.
6. Execution results, if tests were run.
7. Known limitations and remaining coverage gaps.

## Safety and Change Control
- Inspect before modifying.
- Keep changes scoped to the requested feature.
- Preserve unrelated user changes.
- Never expose secrets or credentials.
- Do not overwrite existing implementations without reviewing them.
- Ask before making broad architectural changes or destructive modifications.