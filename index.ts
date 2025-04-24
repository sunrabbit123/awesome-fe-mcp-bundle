import { bundler } from "@wrtnlabs/mcp-bundler";

const bundle = bundler({
  name: "awesome-fe-mcp-bundle",
  version: "0.0.1",
  mcpServers: {
    "slack": {
      command: "npx",
      args: [
        "-y",
        "@modelcontextprotocol/server-slack",
      ],
    },
    "gitlab": {
      command: "docker",
      args: [
        "run",
        "--rm",
        "-i",
        "-e",
        "GITLAB_PERSONAL_ACCESS_TOKEN",
        "-e",
        "GITLAB_API_URL",
        "mcp/gitlab",
      ],
    },
    "github": {
      command: "npx",
      args: [
        "-y",
        "@modelcontextprotocol/server-github",
      ],
    },
    "mcp-atlassian": {
      command: "uvx",
      args: ["mcp-atlassian"],
    },
  },
  env: {
    GITHUB_PERSONAL_ACCESS_TOKEN: "github",
    SLACK_BOT_TOKEN: "slack",
    SLACK_TEAM_ID: "slack",
    GITLAB_PERSONAL_ACCESS_TOKEN: "gitlab",
    GITLAB_API_URL: "gitlab",
    CONFLUENCE_URL: "mcp-atlassian",
    CONFLUENCE_USERNAME: "mcp-atlassian",
    CONFLUENCE_API_TOKEN: "mcp-atlassian",
    JIRA_URL: "mcp-atlassian",
    JIRA_USERNAME: "mcp-atlassian",
    JIRA_API_TOKEN: "mcp-atlassian",
  },
});

export const run = bundle.run;
export const createServer = bundle.createServer;
