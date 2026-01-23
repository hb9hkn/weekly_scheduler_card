# Weekly Scheduler Card for Home Assistant

A Lovelace card for Home Assistant that provides an Outlook-style weekly calendar interface for the Weekly Scheduler integration.

## Features

- **Visual Weekly Calendar**: Drag-to-select time blocks across a 7-day grid with 30-minute intervals
- **Intuitive Interactions**: Click and drag to add or remove schedule blocks
- **Copy Functions**: Easily copy schedules between days (to all days or workdays only)
- **Value Input**: Set specific values for `input_number` schedules
- **Enable/Disable Toggle**: Turn schedules on/off without losing configuration
- **Current Time Indicator**: Visual indicator shows the current day and time on the grid
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

1. Download `weekly-scheduler-card.js` from the latest release
2. Copy it to your `config/www/` directory
3. Add the card resource in your Lovelace configuration:

```yaml
resources:
  - url: /local/weekly-scheduler-card.js
    type: module
```

## Usage

Add a Weekly Scheduler card to your dashboard:

```yaml
type: custom:weekly-scheduler-card
entity: switch.weekly_schedule_hot_water
title: Hot Water Schedule
show_current_time: true
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | *required* | The schedule switch entity ID |
| `title` | string | Entity name | Card title |
| `show_current_time` | boolean | `true` | Show current time indicator |

### Card Editor

The card includes a visual editor accessible through the Lovelace UI:

1. Edit your dashboard
2. Add a new card
3. Search for "Weekly Scheduler Card"
4. Configure using the visual editor

## Interactions

### Adding Blocks

1. Set the desired value in the toolbar (for `input_number` schedules)
2. Click and drag on empty cells to create a block
3. Release to confirm the selection

### Removing Blocks

- Click and drag on existing blocks to remove them

### Copy Schedule

1. Select the source day from the dropdown
2. Click "Copy to All" or "Copy to Workdays"

### Clear Schedule

- Click "Clear [Day]" to clear a single day
- Click "Clear All" to clear the entire week

### Enable/Disable

- Use the toggle in the toolbar to enable or disable the schedule
- When disabled, the schedule configuration is preserved

## Development

### Building from Source

```bash
npm install
npm run build
```

The built file will be in `dist/weekly-scheduler-card.js`.

### Development Mode

```bash
npm run watch
```

### Project Structure

```
src/
├── weekly-scheduler-card.ts  # Main card component
├── types.ts                  # TypeScript interfaces
├── components/
│   ├── schedule-grid.ts      # 7x48 grid with drag-select
│   └── toolbar.ts            # Copy/clear/value/enable controls
└── utils/
    ├── schedule-utils.ts     # Schedule manipulation
    ├── time-utils.ts         # Time conversions
    └── drag-select.ts        # Grid selection handling
```

## License

MIT License
