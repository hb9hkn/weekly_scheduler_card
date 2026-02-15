/**
 * Weekly Scheduler Card - Main Lovelace card component
 * @version 0.3.4
 */

export const CARD_VERSION = '0.5.0-beta.3';

import { LitElement, html, css, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import {
  HomeAssistant,
  CardConfig,
  ResolvedPermissions,
  WeeklySchedule,
  DayName,
  DAYS,
} from './types';
import {
  addTimeBlock,
  removeTimeBlock,
  cloneSchedule,
  copyDayToOthers,
  createEmptySchedule,
} from './utils/schedule-utils';
import './components/schedule-grid';
import './components/toolbar';

// Register with Home Assistant (only once)
(window as any).customCards = (window as any).customCards || [];
const existingCard = (window as any).customCards.find(
  (card: any) => card.type === 'weekly-scheduler-card'
);
if (!existingCard) {
  (window as any).customCards.push({
    type: 'weekly-scheduler-card',
    name: 'Weekly Scheduler Card',
    description: 'A card for managing weekly schedules for input helpers',
    preview: true,
    version: CARD_VERSION,
  });
} else {
  // Update version if already registered
  existingCard.version = CARD_VERSION;
}

console.info(
  `%c WEEKLY-SCHEDULER-CARD %c v${CARD_VERSION} `,
  'color: white; background: #3498db; font-weight: bold;',
  'color: #3498db; background: white; font-weight: bold;'
);

/**
 * Get the schedule switch entity ID for a helper entity.
 */
function getScheduleEntityId(helperEntity: string): string {
  const helperName = helperEntity.split('.').pop() || '';
  return `switch.weekly_schedule_${helperName}`;
}

export class WeeklySchedulerCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ type: Object }) config?: CardConfig;

  @state() private _schedule: WeeklySchedule = createEmptySchedule();
  @state() private _enabled: boolean = true;
  @state() private _helperType: 'input_number' | 'input_boolean' = 'input_number';
  @state() private _helperEntity: string = '';
  @state() private _currentValue: number = 50;
  @state() private _defaultValue: number = 50;
  @state() private _scheduleEntity: string = '';
  @state() private _isCreating: boolean = false;
  @state() private _isMobile: boolean = false;
  @state() private _editModeActive: boolean = false;
  private _autoLockTimer: number | undefined;
  private _mobileQuery: MediaQueryList | undefined;
  private _mobileQueryHandler: ((e: MediaQueryListEvent) => void) | undefined;

  // --- Permission helpers ---

  private get _permissions(): ResolvedPermissions {
    return {
      schedule_toggle: this.config?.schedule_toggle !== false,
      edit_schedule: this.config?.edit_schedule !== false,
      copy_schedule: this.config?.copy_schedule !== false,
      clear_schedule: this.config?.clear_schedule !== false,
    };
  }

  private get _hasAnyPermission(): boolean {
    const p = this._permissions;
    return p.schedule_toggle || p.edit_schedule || p.copy_schedule || p.clear_schedule;
  }

  private get _showToolbar(): boolean {
    if (!this._hasAnyPermission) return false;
    if (this._isMobile && !this._editModeActive) return false;
    return true;
  }

  private get _gridEditable(): boolean {
    if (!this._permissions.edit_schedule) return false;
    if (this._isMobile && !this._editModeActive) return false;
    return true;
  }

  // --- Lifecycle ---

  connectedCallback() {
    super.connectedCallback();
    this._mobileQuery = window.matchMedia('(max-width: 600px)');
    this._isMobile = this._mobileQuery.matches;
    this._mobileQueryHandler = (e: MediaQueryListEvent) => {
      const wasMobile = this._isMobile;
      this._isMobile = e.matches;
      if (wasMobile && !this._isMobile) {
        this._editModeActive = false;
        this._clearAutoLockTimer();
      }
    };
    this._mobileQuery.addEventListener('change', this._mobileQueryHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._mobileQuery && this._mobileQueryHandler) {
      this._mobileQuery.removeEventListener('change', this._mobileQueryHandler);
    }
    this._clearAutoLockTimer();
  }

  // --- Auto-lock timer ---

  private _clearAutoLockTimer() {
    if (this._autoLockTimer !== undefined) {
      window.clearTimeout(this._autoLockTimer);
      this._autoLockTimer = undefined;
    }
  }

  private _resetAutoLockTimer() {
    this._clearAutoLockTimer();
    if (this._isMobile && this._editModeActive) {
      this._autoLockTimer = window.setTimeout(() => {
        this._editModeActive = false;
        this._autoLockTimer = undefined;
      }, 30000);
    }
  }

  private _handleUserInteraction = () => {
    if (this._isMobile && this._editModeActive) {
      this._resetAutoLockTimer();
    }
  };

  private _handleEditModeToggle() {
    this._editModeActive = !this._editModeActive;
    if (this._editModeActive) {
      this._resetAutoLockTimer();
    } else {
      this._clearAutoLockTimer();
    }
  }

  static styles = css`
    :host {
      display: block;
      --card-bg: #ffffff;
      --text-primary: #37474f;
      --text-secondary: #78909c;
      --accent-color: #5c9ece;
      --success-color: #66bb6a;
      --disabled-color: #b0bec5;
      --shadow-color: rgba(0, 0, 0, 0.1);
    }

    .card {
      padding: 20px;
      background: var(--card-bg);
      border-radius: 12px;
      box-shadow: 0 2px 12px var(--shadow-color);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
      letter-spacing: -0.3px;
    }

    .status {
      font-size: 11px;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 16px;
      background: var(--success-color);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status.disabled {
      background: var(--disabled-color);
    }

    .error {
      padding: 20px;
      color: #e57373;
      text-align: center;
      font-weight: 500;
    }

    .create-schedule {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
    }

    .create-schedule-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.6;
    }

    .create-schedule-text {
      font-size: 14px;
      color: var(--text-secondary);
      margin-bottom: 20px;
    }

    .create-schedule-helper {
      font-size: 12px;
      color: var(--text-secondary);
      margin-bottom: 8px;
    }

    .create-schedule-helper strong {
      color: var(--text-primary);
    }

    .create-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    .create-button:hover {
      background: #4a8bb8;
    }

    .create-button:disabled {
      background: var(--disabled-color);
      cursor: not-allowed;
    }

    .create-button ha-icon {
      --mdc-icon-size: 20px;
    }

    .edit-mode-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      margin-bottom: 12px;
      background: #fff3e0;
      border: 1px solid #ffe0b2;
      border-radius: 8px;
      font-size: 13px;
      color: #e65100;
    }

    .edit-mode-section {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .edit-mode-label {
      font-weight: 600;
      font-size: 13px;
    }

    .edit-mode-bar .schedule-slider {
      background-color: #bdbdbd;
    }

    .edit-mode-bar .toggle-switch input:checked + .schedule-slider {
      background-color: var(--success-color, #66bb6a);
    }

    .edit-mode-bar .toggle-switch {
      position: relative;
      display: inline-block;
      width: 42px;
      height: 22px;
    }

    .edit-mode-bar .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .edit-mode-bar .toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #bdbdbd;
      transition: 0.3s;
      border-radius: 22px;
    }

    .edit-mode-bar .toggle-slider:before {
      position: absolute;
      content: '';
      height: 18px;
      width: 18px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .edit-mode-bar .toggle-switch input:checked + .toggle-slider {
      background-color: #e65100;
    }

    .edit-mode-bar .toggle-switch input:checked + .toggle-slider:before {
      transform: translateX(20px);
    }
  `;

  setConfig(config: CardConfig) {
    // Support both old (entity) and new (helper_entity) config styles
    if (!config.entity && !config.helper_entity) {
      throw new Error('Please define a helper_entity or entity');
    }
    this.config = config;
  }

  getCardSize(): number {
    return 8;
  }

  updated(changedProps: PropertyValues) {
    super.updated(changedProps);

    if (changedProps.has('hass') && this.hass && this.config) {
      this._updateFromEntity();
    }
  }

  /**
   * Determine the schedule entity ID from config.
   * - If config.entity is set (legacy), use it directly
   * - If config.helper_entity is set (new), derive switch entity
   */
  private _getScheduleEntityId(): string {
    if (this.config?.entity) {
      return this.config.entity;
    }
    if (this.config?.helper_entity) {
      return getScheduleEntityId(this.config.helper_entity);
    }
    return '';
  }

  /**
   * Check if the schedule entity exists.
   */
  private _scheduleExists(): boolean {
    const entityId = this._getScheduleEntityId();
    return entityId !== '' && this.hass?.states[entityId] !== undefined;
  }

  private _updateFromEntity() {
    if (!this.hass || !this.config) return;

    const scheduleEntityId = this._getScheduleEntityId();
    this._scheduleEntity = scheduleEntityId;

    const entity = this.hass.states[scheduleEntityId] as any;
    if (!entity) {
      // Schedule doesn't exist yet
      // Get helper entity from config
      if (this.config.helper_entity) {
        this._helperEntity = this.config.helper_entity;
        // Determine helper type from entity ID
        if (this._helperEntity.startsWith('input_number.')) {
          this._helperType = 'input_number';
        } else if (this._helperEntity.startsWith('input_boolean.')) {
          this._helperType = 'input_boolean';
        }
      }
      return;
    }

    const attrs = entity.attributes;

    if (attrs.schedule) {
      this._schedule = attrs.schedule;
    }
    if (attrs.helper_type) {
      this._helperType = attrs.helper_type;
    }
    if (attrs.helper_entity) {
      this._helperEntity = attrs.helper_entity;
    }
    this._enabled = entity.state === 'on';

    // Get current value from the helper entity
    if (this._helperEntity && this.hass.states[this._helperEntity]) {
      const helperState = this.hass.states[this._helperEntity];
      if (this._helperType === 'input_number') {
        this._currentValue = parseFloat(helperState.state as string) || 0;
      }
    }
  }

  private async _createSchedule() {
    if (!this.hass || !this.config?.helper_entity) return;

    this._isCreating = true;

    try {
      await this.hass.callService('weekly_scheduler', 'create_schedule', {
        helper_entity: this.config.helper_entity,
      });

      // Wait a moment for the entity to be created
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Force update
      this._updateFromEntity();
    } catch (error) {
      console.error('Failed to create schedule:', error);
    } finally {
      this._isCreating = false;
    }
  }

  private async _updateSchedule(schedule: WeeklySchedule) {
    if (!this.hass || !this._scheduleEntity) return;

    this._schedule = schedule;

    try {
      await this.hass.callService('weekly_scheduler', 'set_schedule', {
        entity_id: this._scheduleEntity,
        schedule: schedule,
      });
    } catch (error) {
      console.error('Failed to update schedule:', error);
    }
  }

  private async _handleSelectionComplete(e: CustomEvent) {
    const { days, startSlot, endSlot, action, currentValue } = e.detail;

    let newSchedule = cloneSchedule(this._schedule);

    for (const day of days as DayName[]) {
      if (action === 'toggle') {
        // Boolean helper: toggle the value
        // If current is true (ON), set to false (OFF); if false/null, set to true (ON)
        const newValue = currentValue === true ? false : true;
        newSchedule = addTimeBlock(newSchedule, day, startSlot, endSlot, newValue);
      } else if (action === 'add') {
        // Number helper: always set to the selected value (overwrite)
        newSchedule = addTimeBlock(newSchedule, day, startSlot, endSlot, this._defaultValue);
      } else {
        // 'remove' action (not currently used but kept for compatibility)
        newSchedule = removeTimeBlock(newSchedule, day, startSlot, endSlot);
      }
    }

    await this._updateSchedule(newSchedule);
  }

  private async _handleCopyToAll(e: CustomEvent) {
    const { sourceDay } = e.detail;
    const newSchedule = copyDayToOthers(this._schedule, sourceDay, DAYS);
    await this._updateSchedule(newSchedule);
  }

  private async _handleCopyToWorkdays(e: CustomEvent) {
    const { sourceDay } = e.detail;
    const workdays: DayName[] = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
    ];
    const newSchedule = copyDayToOthers(this._schedule, sourceDay, workdays);
    await this._updateSchedule(newSchedule);
  }

  private async _handleCopyToWeekend(e: CustomEvent) {
    const { sourceDay } = e.detail;
    const weekend: DayName[] = ['saturday', 'sunday'];
    const newSchedule = copyDayToOthers(this._schedule, sourceDay, weekend);
    await this._updateSchedule(newSchedule);
  }

  private async _handleClearDay(e: CustomEvent) {
    const { day } = e.detail;
    const newSchedule = cloneSchedule(this._schedule);
    newSchedule[day as DayName] = [];
    await this._updateSchedule(newSchedule);
  }

  private async _handleClearAll() {
    await this._updateSchedule(createEmptySchedule());
  }

  private async _handleToggleEnabled(e: CustomEvent) {
    if (!this.hass || !this._scheduleEntity) return;

    const { enabled } = e.detail;

    try {
      await this.hass.callService('switch', enabled ? 'turn_on' : 'turn_off', {
        entity_id: this._scheduleEntity,
      });
    } catch (error) {
      console.error('Failed to toggle schedule:', error);
    }
  }

  private async _handleToggleEnabledDirect() {
    if (!this.hass || !this._scheduleEntity) return;

    const newEnabled = !this._enabled;

    try {
      await this.hass.callService('switch', newEnabled ? 'turn_on' : 'turn_off', {
        entity_id: this._scheduleEntity,
      });
    } catch (error) {
      console.error('Failed to toggle schedule:', error);
    }
  }

  private _handleValueChange(e: CustomEvent) {
    this._defaultValue = e.detail.value;
  }

  private _renderCreateSchedule() {
    const helperEntity = this.config?.helper_entity || '';
    const helperState = this.hass?.states[helperEntity];
    const helperName = helperState?.attributes?.friendly_name || helperEntity;

    return html`
      <ha-card>
        <div class="card">
          <div class="header">
            <div class="title">${this.config?.title || 'Weekly Schedule'}</div>
          </div>

          <div class="create-schedule">
            <div class="create-schedule-icon">
              <ha-icon icon="mdi:calendar-plus"></ha-icon>
            </div>
            <div class="create-schedule-helper">
              Helper: <strong>${helperName}</strong>
            </div>
            <div class="create-schedule-text">
              No schedule exists for this helper yet.
            </div>
            <button
              class="create-button"
              @click=${this._createSchedule}
              ?disabled=${this._isCreating}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              ${this._isCreating ? 'Creating...' : 'Create Schedule'}
            </button>
          </div>
        </div>
      </ha-card>
    `;
  }

  render() {
    if (!this.config) {
      return html`<div class="error">Invalid configuration</div>`;
    }

    if (!this.hass) {
      return html`<div class="error">Home Assistant not available</div>`;
    }

    // Check if helper_entity is configured but helper doesn't exist
    if (this.config.helper_entity) {
      const helperExists = this.hass.states[this.config.helper_entity];
      if (!helperExists) {
        return html`<div class="error">
          Helper entity not found: ${this.config.helper_entity}
        </div>`;
      }
    }

    // Check if schedule exists
    if (!this._scheduleExists()) {
      // Only show create button if using new helper_entity mode
      if (this.config.helper_entity) {
        return this._renderCreateSchedule();
      }
      // Legacy mode - entity must exist
      return html`<div class="error">
        Entity not found: ${this.config.entity}
      </div>`;
    }

    const entity = this.hass.states[this._scheduleEntity];
    if (!entity) {
      return html`<div class="error">
        Entity not found: ${this._scheduleEntity}
      </div>`;
    }

    const title =
      this.config.title ||
      entity.attributes.friendly_name ||
      'Weekly Schedule';

    const permissions = this._permissions;
    const showToolbar = this._showToolbar;
    const gridEditable = this._gridEditable;
    const showEditModeToggle = this._isMobile && this._hasAnyPermission;
    const showScheduleToggleInBar = showEditModeToggle && permissions.schedule_toggle;
    // On mobile, schedule toggle lives in the edit mode bar, so hide it from toolbar
    const toolbarPermissions = this._isMobile
      ? { ...permissions, schedule_toggle: false }
      : permissions;

    return html`
      <ha-card>
        <div
          class="card"
          @click=${this._handleUserInteraction}
          @touchstart=${this._handleUserInteraction}
          @input=${this._handleUserInteraction}
        >
          <div class="header">
            <div class="title">${title}</div>
            <div class="status ${this._enabled ? '' : 'disabled'}">
              ${this._enabled ? 'Active' : 'Disabled'}
            </div>
          </div>

          ${showEditModeToggle
            ? html`
                <div class="edit-mode-bar">
                  ${showScheduleToggleInBar
                    ? html`
                        <div class="edit-mode-section">
                          <span class="edit-mode-label">Schedule</span>
                          <label class="toggle-switch">
                            <input
                              type="checkbox"
                              .checked=${this._enabled}
                              @change=${this._handleToggleEnabledDirect}
                            />
                            <span class="toggle-slider schedule-slider"></span>
                          </label>
                          <span class="edit-mode-label">${this._enabled ? 'On' : 'Off'}</span>
                        </div>
                      `
                    : ''}
                  <div class="edit-mode-section">
                    <span class="edit-mode-label">Edit Mode</span>
                    <label class="toggle-switch">
                      <input
                        type="checkbox"
                        .checked=${this._editModeActive}
                        @change=${this._handleEditModeToggle}
                      />
                      <span class="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              `
            : ''}

          ${showToolbar
            ? html`
                <schedule-toolbar
                  .enabled=${this._enabled}
                  .helperType=${this._helperType}
                  .currentValue=${this._currentValue}
                  .helperEntity=${this._helperEntity}
                  .permissions=${toolbarPermissions}
                  @copy-to-all=${this._handleCopyToAll}
                  @copy-to-workdays=${this._handleCopyToWorkdays}
                  @copy-to-weekend=${this._handleCopyToWeekend}
                  @clear-day=${this._handleClearDay}
                  @clear-all=${this._handleClearAll}
                  @toggle-enabled=${this._handleToggleEnabled}
                  @value-change=${this._handleValueChange}
                ></schedule-toolbar>
              `
            : ''}

          <schedule-grid
            .schedule=${this._schedule}
            .helperType=${this._helperType}
            .defaultValue=${this._defaultValue}
            .editable=${gridEditable}
            @selection-complete=${this._handleSelectionComplete}
          ></schedule-grid>
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement('weekly-scheduler-card-editor');
  }

  static getStubConfig() {
    return {
      helper_entity: '',
      title: 'Weekly Schedule',
    };
  }
}

// Simple config editor
export class WeeklySchedulerCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ type: Object }) _config?: CardConfig;
  @state() private _helperEntitiesCache: string[] = [];

  private _updateHelperEntitiesCache() {
    if (!this.hass) return;

    const newHelpers = Object.keys(this.hass.states)
      .filter(
        (entityId) =>
          entityId.startsWith('input_number.') ||
          entityId.startsWith('input_boolean.')
      )
      .sort();

    // Only update if the list actually changed
    if (JSON.stringify(newHelpers) !== JSON.stringify(this._helperEntitiesCache)) {
      this._helperEntitiesCache = newHelpers;
    }
  }

  firstUpdated() {
    // Populate cache on first render
    this._updateHelperEntitiesCache();
  }

  // Force re-render when hass changes
  updated(changedProps: PropertyValues) {
    super.updated(changedProps);
    if (changedProps.has('hass') && this.hass) {
      this._updateHelperEntitiesCache();
    }
  }

  static styles = css`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: 12px;
      font-weight: 500;
      color: var(--secondary-text-color);
    }

    input,
    select {
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      font-size: 14px;
    }

    .helper-option {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .has-schedule {
      color: var(--success-color, #66bb6a);
      font-size: 11px;
    }

    .info-text {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 4px;
      font-style: italic;
    }

    .permissions-section {
      border-top: 1px solid var(--divider-color);
      padding-top: 12px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
      display: block;
    }

    .permission-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 0;
    }

    .permission-row input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .permission-row label {
      font-size: 13px;
      cursor: pointer;
    }
  `;

  setConfig(config: CardConfig) {
    this._config = config;
  }

  /**
   * Get all input_number and input_boolean entities.
   */
  private _getHelperEntities(): string[] {
    // Use cached list if available, otherwise compute it
    if (this._helperEntitiesCache.length > 0) {
      return this._helperEntitiesCache;
    }

    if (!this.hass) return [];

    return Object.keys(this.hass.states)
      .filter(
        (entityId) =>
          entityId.startsWith('input_number.') ||
          entityId.startsWith('input_boolean.')
      )
      .sort();
  }

  /**
   * Check if a helper entity already has a schedule.
   */
  private _hasSchedule(helperEntity: string): boolean {
    if (!this.hass) return false;

    const scheduleEntityId = getScheduleEntityId(helperEntity);
    return this.hass.states[scheduleEntityId] !== undefined;
  }

  /**
   * Get all existing schedule switch entities (for legacy support).
   */
  private _getScheduleEntities(): string[] {
    if (!this.hass) return [];

    return Object.keys(this.hass.states).filter(
      (entityId) =>
        entityId.startsWith('switch.') &&
        (this.hass!.states[entityId] as any).attributes?.schedule !== undefined
    );
  }

  private _valueChanged(e: Event) {
    if (!this._config) return;

    const target = e.target as HTMLInputElement | HTMLSelectElement;
    let newConfig = { ...this._config };

    if (target.name === 'helper_entity') {
      // When helper_entity changes, clear entity (use new mode)
      newConfig = {
        ...newConfig,
        helper_entity: target.value,
        entity: undefined,
      };
    } else if (target.name === 'entity') {
      // Legacy mode - selecting existing schedule entity
      newConfig = {
        ...newConfig,
        entity: target.value,
        helper_entity: undefined,
      };
    } else if (target.type === 'checkbox') {
      newConfig = {
        ...newConfig,
        [target.name]: (target as HTMLInputElement).checked,
      };
    } else {
      newConfig = {
        ...newConfig,
        [target.name]: target.value,
      };
    }

    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (!this.hass) return html``;

    const helperEntities = this._getHelperEntities();
    const scheduleEntities = this._getScheduleEntities();

    // Determine which mode we're in
    const isLegacyMode = !!this._config?.entity && !this._config?.helper_entity;

    return html`
      <div class="editor">
        <div class="row">
          <label>Helper Entity (Recommended)</label>
          <select
            name="helper_entity"
            .value=${this._config?.helper_entity || ''}
            @change=${this._valueChanged}
          >
            <option value="">Select a helper entity...</option>
            ${helperEntities.map((entity) => {
              const state = this.hass!.states[entity];
              const name = state?.attributes?.friendly_name || entity;
              const hasSchedule = this._hasSchedule(entity);
              return html`
                <option
                  value="${entity}"
                  ?selected=${entity === this._config?.helper_entity}
                >
                  ${name} ${hasSchedule ? '(has schedule)' : ''}
                </option>
              `;
            })}
          </select>
          <div class="info-text">
            Select the input_number or input_boolean you want to schedule.
            A schedule will be created automatically if it doesn't exist.
          </div>
        </div>

        ${scheduleEntities.length > 0
          ? html`
              <div class="row">
                <label>Or select existing schedule (Legacy)</label>
                <select
                  name="entity"
                  .value=${this._config?.entity || ''}
                  @change=${this._valueChanged}
                >
                  <option value="">Select an existing schedule...</option>
                  ${scheduleEntities.map(
                    (entity) => html`
                      <option
                        value="${entity}"
                        ?selected=${entity === this._config?.entity}
                      >
                        ${(this.hass!.states[entity] as any).attributes
                          ?.friendly_name || entity}
                      </option>
                    `
                  )}
                </select>
              </div>
            `
          : ''}

        <div class="row">
          <label>Title (optional)</label>
          <input
            type="text"
            name="title"
            .value=${this._config?.title || ''}
            @input=${this._valueChanged}
            placeholder="Weekly Schedule"
          />
        </div>

        <div class="permissions-section">
          <label class="section-title">Permissions</label>
          <div class="info-text">
            Control which actions are available on this card instance.
            All enabled by default.
          </div>

          <div class="permission-row">
            <input
              type="checkbox"
              id="perm_toggle"
              name="schedule_toggle"
              .checked=${this._config?.schedule_toggle !== false}
              @change=${this._valueChanged}
            />
            <label for="perm_toggle">Enable/Disable schedule toggle</label>
          </div>

          <div class="permission-row">
            <input
              type="checkbox"
              id="perm_edit"
              name="edit_schedule"
              .checked=${this._config?.edit_schedule !== false}
              @change=${this._valueChanged}
            />
            <label for="perm_edit">Edit schedule (grid + value input)</label>
          </div>

          <div class="permission-row">
            <input
              type="checkbox"
              id="perm_copy"
              name="copy_schedule"
              .checked=${this._config?.copy_schedule !== false}
              @change=${this._valueChanged}
            />
            <label for="perm_copy">Copy schedule (copy buttons)</label>
          </div>

          <div class="permission-row">
            <input
              type="checkbox"
              id="perm_clear"
              name="clear_schedule"
              .checked=${this._config?.clear_schedule !== false}
              @change=${this._valueChanged}
            />
            <label for="perm_clear">Clear schedule (clear buttons)</label>
          </div>

        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'weekly-scheduler-card': WeeklySchedulerCard;
    'weekly-scheduler-card-editor': WeeklySchedulerCardEditor;
  }
}

// Track registered version globally
const REGISTERED_VERSION_KEY = '__weeklySchedulerCardVersion';
const RELOAD_FLAG_KEY = 'weekly-scheduler-card-reloaded';

const registeredVersion = (window as any)[REGISTERED_VERSION_KEY];
const elementAlreadyDefined = customElements.get('weekly-scheduler-card');

// Detect version mismatch scenarios:
// 1. Version variable exists but doesn't match current version
// 2. Element is already defined but no version variable (old code without version tracking)
const versionMismatch = registeredVersion && registeredVersion !== CARD_VERSION;
const oldCodeDetected = elementAlreadyDefined && !registeredVersion;

if (versionMismatch || oldCodeDetected) {
  // Version mismatch - old element registered, new code loaded
  // Force reload to clear custom elements registry (but only once)
  if (!sessionStorage.getItem(RELOAD_FLAG_KEY)) {
    const oldVer = registeredVersion || 'unknown (pre-0.2.6)';
    console.info(
      `%c WEEKLY-SCHEDULER-CARD %c Version upgrade detected (${oldVer} → ${CARD_VERSION}), reloading...`,
      'color: white; background: #e67e22; font-weight: bold;',
      'color: #e67e22; background: white; font-weight: bold;'
    );
    sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
    window.location.reload();
  } else {
    // Already reloaded once this session, don't loop
    console.warn(
      `Weekly Scheduler Card: Version mismatch persists after reload. Please clear browser cache and refresh (Ctrl+Shift+R).`
    );
    sessionStorage.removeItem(RELOAD_FLAG_KEY);
  }
} else {
  // Clear reload flag on successful load
  sessionStorage.removeItem(RELOAD_FLAG_KEY);

  // Register elements and track version
  if (!customElements.get('weekly-scheduler-card')) {
    customElements.define('weekly-scheduler-card', WeeklySchedulerCard);
  }
  if (!customElements.get('weekly-scheduler-card-editor')) {
    customElements.define('weekly-scheduler-card-editor', WeeklySchedulerCardEditor);
  }

  (window as any)[REGISTERED_VERSION_KEY] = CARD_VERSION;
}
