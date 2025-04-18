# Awesome Front-End MCP Bundle

We include the following MCP servers:

- npx - @modelcontextprotocol/server-slack
- docker - mcp/gitlab
- npx - @modelcontextprotocol/server-github
- uvx - mcp-atlassian

The following list shows the required environment variables for each server:

### GitHub
- GITHUB_PERSONAL_ACCESS_TOKEN: GitHub Personal Access Token

### Slack
- SLACK_BOT_TOKEN: Slack Bot Token
- SLACK_TEAM_ID: Slack Team ID

### GitLab
- GITLAB_PERSONAL_ACCESS_TOKEN: GitLab Personal Access Token
- GITLAB_API_URL: GitLab API URL

### Atlassian (Confluence & Jira)
- CONFLUENCE_URL: Confluence Instance URL
- CONFLUENCE_USERNAME: Confluence Username
- CONFLUENCE_API_TOKEN: Confluence API Token
- JIRA_URL: Jira Instance URL
- JIRA_USERNAME: Jira Username
- JIRA_API_TOKEN: Jira API Token

## Usage

```typescript
import bundle from "awesome-fe-mcp-bundle";

// Run MCP server
bundle.run();

// Or create a server instance
const server = bundle.createServer();
```

or

```json
{
    "mcpServers": {
        "awesome-fe-mcp-bundle": {
            "command": "npx",
            "args": [
                "-y", "awesome-fe-mcp-bundle"
            ],
            "env": {
                "...": "..."
            }
        }
    }
}
```