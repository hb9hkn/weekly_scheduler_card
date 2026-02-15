# Weekly Scheduler Card for Home Assistant

A Lovelace card for Home Assistant that provides an Outlook-style weekly calendar interface for the Weekly Scheduler integration.

## Screenshots

<p align="center">
  <img src="images/number_helper_schedule.png" width="400" alt="Number Helper Schedule">
  <img src="images/boolean_helper_schedule.png" width="400" alt="Boolean Helper Schedule">
</p>

## Features

- **Visual Weekly Calendar**: Drag-to-select time blocks across a 7-day grid with 30-minute intervals
- **Intuitive Interactions**: Click and drag to add or remove schedule blocks
- **Helper Entity Dropdown**: Select any `input_number` or `input_boolean` helper directly in the card editor
- **Automatic Schedule Creation**: Creates schedules automatically when selecting a new helper
- **Copy Functions**: Copy schedules to all days, workdays only, or weekends
- **Value Input**: Set specific values for `input_number` schedules
- **Enable/Disable Toggle**: Turn schedules on/off without losing configuration
- **Granular Permissions**: Control which actions are available per card instance (ideal for admin vs. regular user dashboards)
- **Mobile Edit Mode**: Prevents accidental schedule changes on mobile with an explicit edit toggle and 30-second auto-lock
- **Theme Support**: Respects Home Assistant's theme colors
- **Responsive Design**: Works on desktop and mobile devices

## Prerequisites

This card requires the **Weekly Scheduler** integration to be installed:
**[Weekly Scheduler Integration](https://github.com/hb9hkn/weekly_scheduler)**

## Installation

### HACS (Recommended)

1. Add this repository to HACS as a custom repository (category: Lovelace/Plugin)
2. Install "Weekly Scheduler Card" from HACS
3. Add the resource to your Lovelace configuration (HACS does this automatically)

### Manual Installation

1. Download `weekly-scheduler-card.js` from the [latest release](https://github.com/hb9hkn/weekly_scheduler_card/releases/latest)
2. Copy it to your `config/www/` directory
3. Add the card resource in your Lovelace configuration:

```yaml
resources:
  - url: /local/weekly-scheduler-card.js
    type: module
```

## Usage

### Using the Card Editor (Recommended)

1. Edit your dashboard
2. Click **Add Card**
3. Search for "Weekly Scheduler Card"
4. Select a helper entity from the dropdown
5. Optionally set a custom title

### Manual YAML Configuration

```yaml
type: custom:weekly-scheduler-card
helper_entity: input_number.bedroom_temperature
title: Bedroom Temperature Schedule
```

### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `helper_entity` | string | Yes* | - | The helper entity to schedule (`input_number.*` or `input_boolean.*`) |
| `entity` | string | Yes* | - | Legacy: Direct schedule switch entity ID |
| `title` | string | No | Entity name | Card title displayed in the header |
| `schedule_toggle` | boolean | No | `true` | Show the enable/disable schedule toggle |
| `edit_schedule` | boolean | No | `true` | Allow grid interactions and value input |
| `copy_schedule` | boolean | No | `true` | Show copy-to-all, copy-to-workdays, copy-to-weekend buttons |
| `clear_schedule` | boolean | No | `true` | Show clear-day and clear-all buttons |
| `require_edit_mode` | boolean | No | `false` | Require explicit Edit Mode toggle before any changes (use with conditional cards for mobile protection) |

*Either `helper_entity` (recommended) or `entity` (legacy) is required.

### Example Configurations

**For an input_number helper:**
```yaml
type: custom:weekly-scheduler-card
helper_entity: input_number.thermostat_setpoint
title: Thermostat Schedule
```

**For an input_boolean helper:**
```yaml
type: custom:weekly-scheduler-card
helper_entity: input_boolean.guest_mode
title: Guest Mode Schedule
```

**Read-only view (e.g. for a regular user dashboard):**
```yaml
type: custom:weekly-scheduler-card
helper_entity: input_number.thermostat_setpoint
title: Thermostat Schedule
schedule_toggle: false
edit_schedule: false
copy_schedule: false
clear_schedule: false
```

**Allow toggling and editing, but no copy/clear:**
```yaml
type: custom:weekly-scheduler-card
helper_entity: input_number.thermostat_setpoint
title: Thermostat Schedule
copy_schedule: false
clear_schedule: false
```

**Legacy configuration (existing schedule entity):**
```yaml
type: custom:weekly-scheduler-card
entity: switch.weekly_schedule_thermostat_setpoint
title: Thermostat Schedule
```

## Interactions

### Adding Time Blocks

1. For `input_number` schedules, set the desired value using the slider in the toolbar
2. Click and drag on empty cells to create a block
3. Release to confirm the selection

### Removing Time Blocks

- Click and drag on existing (colored) blocks to remove them

### Copy Schedule

Use the toolbar buttons to copy schedules:
- **Copy to All**: Copy selected day's schedule to all 7 days
- **Copy to Workdays**: Copy to Monday through Friday
- **Copy to Weekend**: Copy to Saturday and Sunday

### Clear Schedule

- **Clear Day**: Clear schedule for a specific day
- **Clear All**: Clear the entire week's schedule

### Enable/Disable Schedule

- Use the toggle switch in the header to enable or disable the schedule
- When disabled, the schedule configuration is preserved but not applied

## Permissions

Permissions let you control which actions are available on each card instance. This is useful for creating separate dashboards for admin and regular users without needing Home Assistant user role detection.

The four permission groups are:

| Permission | Controls |
|------------|----------|
| `schedule_toggle` | The on/off switch for the schedule |
| `edit_schedule` | Grid drag interactions and the value input field |
| `copy_schedule` | Copy-to-all, copy-to-workdays, copy-to-weekend buttons and day selector |
| `clear_schedule` | Clear-day and clear-all buttons |

**Behavior:**
- All permissions default to `true` — existing cards are unaffected
- When a permission is disabled, those controls are hidden (not greyed out)
- When all permissions are disabled, the toolbar is hidden entirely and the grid is non-interactive, creating a clean read-only view
- Permissions can be configured via the card editor UI (checkboxes) or in YAML

### Setting up admin vs. regular user dashboards

1. Create a dashboard/view for admin users with a full-access card (default config)
2. Create a separate dashboard/view for regular users with a restricted card (permissions set to `false`)
3. Assign dashboard visibility per user in Home Assistant

## Edit Mode Protection

The `require_edit_mode` option adds an **Edit Mode** toggle to the card. When enabled, the schedule is locked by default — the user must explicitly flip the toggle before making changes. After 30 seconds of inactivity, edit mode automatically turns off.

This is especially useful on mobile devices where accidental touches can change the schedule. Use Home Assistant's **conditional card** with Companion App sensors to show the edit-protected version only on mobile devices.

### Setting up mobile-only edit protection

The HA Companion App creates device sensors you can use for conditional rendering.

**Step 1:** Find your phone's app sensor entity (e.g., `sensor.pixel_app_importance` or `binary_sensor.iphone_focus`). The exact entity name depends on your device.

**Step 2:** Create a conditional card in your dashboard YAML:

```yaml
# Show edit-protected card when phone app is in foreground
- type: conditional
  conditions:
    - condition: state
      entity: sensor.pixel_app_importance
      state: foreground
  card:
    type: custom:weekly-scheduler-card
    helper_entity: input_number.thermostat_setpoint
    title: Thermostat Schedule
    require_edit_mode: true

# Show normal card otherwise (desktop browser)
- type: conditional
  conditions:
    - condition: state
      entity: sensor.pixel_app_importance
      state_not: foreground
  card:
    type: custom:weekly-scheduler-card
    helper_entity: input_number.thermostat_setpoint
    title: Thermostat Schedule
```

You can also combine `require_edit_mode` with permissions to create a card where the user must toggle edit mode and can only perform certain actions:

```yaml
type: custom:weekly-scheduler-card
helper_entity: input_number.thermostat_setpoint
require_edit_mode: true
copy_schedule: false
clear_schedule: false
```

## Creating a New Schedule

If you select a helper entity that doesn't have a schedule yet:

1. The card will show a "Create Schedule" button
2. Click the button to create a new schedule for that helper
3. A new switch entity will be created (e.g., `switch.weekly_schedule_bedroom_temperature`)
4. You can then start adding time blocks

## Troubleshooting

### Card not loading after update

If the card doesn't work properly after updating to a new version, try:
1. Clear your browser cache
2. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

The card includes automatic version mismatch detection and will reload the page once if needed.

### Helper entities not showing in dropdown

Ensure you have `input_number` or `input_boolean` helpers created in Home Assistant:
- Go to **Settings** > **Devices & Services** > **Helpers**
- Create a new Number or Toggle helper

## License

MIT License
