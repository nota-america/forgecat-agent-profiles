*written by ForgeCat*

![ForgeCat](https://raw.githubusercontent.com/nota-america/forgecat-agent-profiles/main/assets/forgecat_banner.png)

# Google Workspace CLI Skills

Google Workspace CLI agent skills for Drive, Gmail, Calendar, Docs, Sheets, Slides, Chat, Apps Script, personas, and workflow recipes powered by the `gws` command-line tool.

## Tags

- googleworkspace
- google-workspace
- cli
- skills
- productivity

## Installation

```bash
npx forgecat install @forgecat/googleworkspace_cli-skills
```

## Skills

- **gws-admin-reports** - Google Workspace Admin SDK: Audit logs and usage reports. `skill`
- **gws-calendar** - Google Calendar: Manage calendars and events. `skill`
- **gws-calendar-agenda** - Google Calendar: Show upcoming events across all calendars. `skill`
- **gws-calendar-insert** - Google Calendar: Create a new event. `skill`
- **gws-chat** - Google Chat: Manage Chat spaces and messages. `skill`
- **gws-chat-send** - Google Chat: Send a message to a space. `skill`
- **gws-classroom** - Google Classroom: Manage classes, rosters, and coursework. `skill`
- **gws-docs** - Read and write Google Docs. `skill`
- **gws-docs-write** - Google Docs: Append text to a document. `skill`
- **gws-drive** - Google Drive: Manage files, folders, and shared drives. `skill`
- **gws-drive-upload** - Google Drive: Upload a file with automatic metadata. `skill`
- **gws-events** - Subscribe to Google Workspace events. `skill`
- **gws-events-renew** - Google Workspace Events: Renew/reactivate Workspace Events subscriptions. `skill`
- **gws-events-subscribe** - Google Workspace Events: Subscribe to Workspace events and stream them as NDJSON. `skill`
- **gws-forms** - Read and write Google Forms. `skill`
- **gws-gmail** - Gmail: Send, read, and manage email. `skill`
- **gws-gmail-forward** - Gmail: Forward a message to new recipients. `skill`
- **gws-gmail-read** - Gmail: Read a message and extract its body or headers. `skill`
- **gws-gmail-reply** - Gmail: Reply to a message (handles threading automatically). `skill`
- **gws-gmail-reply-all** - Gmail: Reply-all to a message (handles threading automatically). `skill`
- **gws-gmail-send** - Gmail: Send an email. `skill`
- **gws-gmail-triage** - Gmail: Show unread inbox summary (sender, subject, date). `skill`
- **gws-gmail-watch** - Gmail: Watch for new emails and stream them as NDJSON. `skill`
- **gws-keep** - Manage Google Keep notes. `skill`
- **gws-meet** - Manage Google Meet conferences. `skill`
- **gws-modelarmor** - Google Model Armor: Filter user-generated content for safety. `skill`
- **gws-modelarmor-create-template** - Google Model Armor: Create a new Model Armor template. `skill`
- **gws-modelarmor-sanitize-prompt** - Google Model Armor: Sanitize a user prompt through a Model Armor template. `skill`
- **gws-modelarmor-sanitize-response** - Google Model Armor: Sanitize a model response through a Model Armor template. `skill`
- **gws-people** - Google People: Manage contacts and profiles. `skill`
- **gws-script** - Manage Google Apps Script projects. `skill`
- **gws-script-push** - Google Apps Script: Upload local files to an Apps Script project. `skill`
- **gws-shared** - gws CLI: Shared patterns for authentication, global flags, and output formatting. `skill`
- **gws-sheets** - Google Sheets: Read and write spreadsheets. `skill`
- **gws-sheets-append** - Google Sheets: Append a row to a spreadsheet. `skill`
- **gws-sheets-read** - Google Sheets: Read values from a spreadsheet. `skill`
- **gws-slides** - Google Slides: Read and write presentations. `skill`
- **gws-tasks** - Google Tasks: Manage task lists and tasks. `skill`
- **gws-workflow** - Google Workflow: Cross-service productivity workflows. `skill`
- **gws-workflow-email-to-task** - Google Workflow: Convert a Gmail message into a Google Tasks entry. `skill`
- **gws-workflow-file-announce** - Google Workflow: Announce a Drive file in a Chat space. `skill`
- **gws-workflow-meeting-prep** - Google Workflow: Prepare for your next meeting: agenda, attendees, and linked docs. `skill`
- **gws-workflow-standup-report** - Google Workflow: Today's meetings + open tasks as a standup summary. `skill`
- **gws-workflow-weekly-digest** - Google Workflow: Weekly summary: this week's meetings + unread email count. `skill`
- **persona-content-creator** - Create, organize, and distribute content across Workspace. `skill`
- **persona-customer-support** - Manage customer support — track tickets, respond, escalate issues. `skill`
- **persona-event-coordinator** - Plan and manage events — scheduling, invitations, and logistics. `skill`
- **persona-exec-assistant** - Manage an executive's schedule, inbox, and communications. `skill`
- **persona-hr-coordinator** - Handle HR workflows — onboarding, announcements, and employee comms. `skill`
- **persona-it-admin** - Administer IT — monitor security and configure Workspace. `skill`
- **persona-project-manager** - Coordinate projects — track tasks, schedule meetings, and share docs. `skill`
- **persona-researcher** - Organize research — manage references, notes, and collaboration. `skill`
- **persona-sales-ops** - Manage sales workflows — track deals, schedule calls, client comms. `skill`
- **persona-team-lead** - Lead a team — run standups, coordinate tasks, and communicate. `skill`
- **recipe-backup-sheet-as-csv** - Export a Google Sheets spreadsheet as a CSV file for local backup or processing. `skill`
- **recipe-batch-invite-to-event** - Add a list of attendees to an existing Google Calendar event and send notifications. `skill`
- **recipe-block-focus-time** - Create recurring focus time blocks on Google Calendar to protect deep work hours. `skill`
- **recipe-bulk-download-folder** - List and download all files from a Google Drive folder. `skill`
- **recipe-collect-form-responses** - Retrieve and review responses from a Google Form. `skill`
- **recipe-compare-sheet-tabs** - Read data from two tabs in a Google Sheet to compare and identify differences. `skill`
- **recipe-copy-sheet-for-new-month** - Duplicate a Google Sheets template tab for a new month of tracking. `skill`
- **recipe-create-classroom-course** - Create a Google Classroom course and invite students. `skill`
- **recipe-create-doc-from-template** - Copy a Google Docs template, fill in content, and share with collaborators. `skill`
- **recipe-create-events-from-sheet** - Read event data from a Google Sheets spreadsheet and create Google Calendar entries for each row. `skill`
- **recipe-create-expense-tracker** - Set up a Google Sheets spreadsheet for tracking expenses with headers and initial entries. `skill`
- **recipe-create-feedback-form** - Create a Google Form for feedback and share it via Gmail. `skill`
- **recipe-create-gmail-filter** - Create a Gmail filter to automatically label, star, or categorize incoming messages. `skill`
- **recipe-create-meet-space** - Create a Google Meet meeting space and share the join link. `skill`
- **recipe-create-presentation** - Create a new Google Slides presentation and add initial slides. `skill`
- **recipe-create-shared-drive** - Create a Google Shared Drive and add members with appropriate roles. `skill`
- **recipe-create-task-list** - Set up a new Google Tasks list with initial tasks. `skill`
- **recipe-create-vacation-responder** - Enable a Gmail out-of-office auto-reply with a custom message and date range. `skill`
- **recipe-draft-email-from-doc** - Read content from a Google Doc and use it as the body of a Gmail message. `skill`
- **recipe-email-drive-link** - Share a Google Drive file and email the link with a message to recipients. `skill`
- **recipe-find-free-time** - Query Google Calendar free/busy status for multiple users to find a meeting slot. `skill`
- **recipe-find-large-files** - Identify large Google Drive files consuming storage quota. `skill`
- **recipe-forward-labeled-emails** - Find Gmail messages with a specific label and forward them to another address. `skill`
- **recipe-generate-report-from-sheet** - Read data from a Google Sheet and create a formatted Google Docs report. `skill`
- **recipe-label-and-archive-emails** - Apply Gmail labels to matching messages and archive them to keep your inbox clean. `skill`
- **recipe-log-deal-update** - Append a deal status update to a Google Sheets sales tracking spreadsheet. `skill`
- **recipe-organize-drive-folder** - Create a Google Drive folder structure and move files into the right locations. `skill`
- **recipe-plan-weekly-schedule** - Review your Google Calendar week, identify gaps, and add events to fill them. `skill`
- **recipe-post-mortem-setup** - Create a Google Docs post-mortem, schedule a Google Calendar review, and notify via Chat. `skill`
- **recipe-reschedule-meeting** - Move a Google Calendar event to a new time and automatically notify all attendees. `skill`
- **recipe-review-meet-participants** - Review who attended a Google Meet conference and for how long. `skill`
- **recipe-review-overdue-tasks** - Find Google Tasks that are past due and need attention. `skill`
- **recipe-save-email-attachments** - Find Gmail messages with attachments and save them to a Google Drive folder. `skill`
- **recipe-save-email-to-doc** - Save a Gmail message body into a Google Doc for archival or reference. `skill`
- **recipe-schedule-recurring-event** - Create a recurring Google Calendar event with attendees. `skill`
- **recipe-send-team-announcement** - Send a team announcement via both Gmail and a Google Chat space. `skill`
- **recipe-share-doc-and-notify** - Share a Google Docs document with edit access and email collaborators the link. `skill`
- **recipe-share-event-materials** - Share Google Drive files with all attendees of a Google Calendar event. `skill`
- **recipe-share-folder-with-team** - Share a Google Drive folder and all its contents with a list of collaborators. `skill`
- **recipe-sync-contacts-to-sheet** - Export Google Contacts directory to a Google Sheets spreadsheet. `skill`
- **recipe-watch-drive-changes** - Subscribe to change notifications on a Google Drive file or folder. `skill`

## Details

| Field | Value |
|---|---|
| Author | Justin Poehnelt |
| Original repository | https://github.com/googleworkspace/cli/tree/main/skills |
| Version | `0.1.2` |
| Original commit | `a3768d0e82ad83cca2da97724e46bea4ff0e6dbd` |
| License | Apache-2.0 |
| Source platform | Agent Skills |

## Compatibility

### Platforms

| Platform | Status |
|---|---|
| Claude Code | Tested |
| Cursor | Tested |
| Codex | Tested |

## Dependencies

- `gws` binary from `@googleworkspace/cli` 0.22.5 or a compatible Google Workspace CLI release
- Node.js 18+ when installing `gws` through npm
- Google Workspace account and OAuth or service-account credentials for live API calls
