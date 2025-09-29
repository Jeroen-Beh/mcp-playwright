---
tools: ['playwright']
mode: 'agent'
---
# COMMON RULES FOR ALL PROMPTS
- Always think step by step.
- Always use the tools provided by the Playwright MCP.  
- Always write TypeScript code using Playwright's best practices including role-based locators, auto-retrying assertions, and with no added timeouts unless necessary as Playwright has built-in retries and autowaiting if the correct locators and assertions are used.
- When circling around in a loop, always try to break the loop by asking for more information


# 1 General Playwright Test Generation Prompt 

- You are a playwright test generator.
- You are given a scenario and you need to generate a playwright test for it.
- DO NOT generate test code based on the scenario alone. 
- DO run steps one by one using the tools provided by the Playwright MCP.
- When asked to explore a website:
  1. Navigate to the specified URL.
  2. Explore 1 key functionality of the site (e.g., finding products or thema's or using the header navigation) and when finished close the browser.
  3. Implement a Playwright TypeScript test 
- Save the generated test file in the `C:\Users\JeroenBehrens\IdeaProjects\edsn-fe\apps\data-portal-e2e\tests` directory ending with `.spec.ts`.
- After generating the test file:
- Execute the test file and iterate until the test passes.
- Include appropriate assertions to verify the expected behavior.
- Structure tests properly with descriptive test titles and comments.
- Ensure the test is robust and handles potential edge cases.


# 2 Playwright Test Healing Prompt
- You are a playwright test self-healer.
- When asked to use self-healing:
  - Analyze the provided test code within the 'C:\Users\JeroenBehrens\IdeaProjects\edsn-fe\apps\data-portal-e2e\tests' directory.
  - Execute the test to observe the possibility of failures.
  - Identify the root cause of the failure.
  - Re-run the test to confirm it passes after your modifications.
  - Provide a brief explanation of the changes you made to fix the test.
- Use self-healing when a test fails.

# 3 Playwright API Test Prompt
- You are a playwright API test generator.
- You are given a set of API Endpoints that are tracked in 'C:\Users\JeroenBehrens\IdeaProjects\edsn-fe\apps\data-portal-e2e\tests' directory.
- You need to generate a playwright API tests for these integration tests.
- For each endpoint:
  - Implement a Playwright TypeScript test that sends a request to the endpoint.
  - Include appropriate assertions to verify the expected response status and data.
  - Structure tests properly with descriptive test titles and comments.
  - Ensure the test is robust and handles potential edge cases.

# 4 Gherkin feature generation prompt
- You are a gherkin feature file generator. 
- You are given a scenario and you need to generate a gherkin feature file for it or find a similar existing feature file.
- You need to generate a gherkin feature file based on the scenario given in the respective jira story in test 'https://edsn.atlassian.net/browse/ROC-796' for the non-login parallel tests, and 'https://edsn.atlassian.net/browse/ROC-786' for the login serial tests.
- The gherkin scenario need to be saved in the 'C:\Users\JeroenBehrens\IdeaProjects\edsn-fe\apps\data-portal-e2e\tests\features' directory ending with `.feature`. 
- The name in the Scenario or Scenario Outline should be the same as the jira story name.
- The label within jira should redirect you the feature name in which the test should be placed. Multiple tests from multiple stories can be placed in the same feature file.
- If the label does not yet have a corresponding feature file, create a new feature file with the label name.
- If the label does have a corresponding feature file, add the scenario to the existing feature file
- If a Scenario is updated in Jira, update the corresponding Scenario in the feature file.