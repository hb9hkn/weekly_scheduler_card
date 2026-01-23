/**
 * Toolbar component for schedule actions
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { DayName, DAYS, DAY_LABELS } from '../types';

@customElement('schedule-toolbar')
export class ScheduleToolbar extends LitElement {
  @property({ type: Boolean }) enabled = true;
  @property({ type: String }) helperType: 'input_number' | 'input_boolean' =
    'input_number';
  @property({ type: Number }) currentValue = 50;
  @property({ type: String }) helperEntity = '';

  @state() private _selectedDay: DayName = 'monday';
  @state() private _inputValue: number = 50;

  static styles = css`
    :host {
      display: block;
      --toolbar-bg: #f5f5f5;
      --toolbar-border: #e0e0e0;
      --btn-bg: #5c9ece;
      --btn-text: white;
      --btn-hover: #4a8ab8;
      --btn-secondary-bg: #e8e8e8;
      --btn-secondary-hover: #d0d0d0;
      --text-primary: #37474f;
      --text-secondary: #78909c;
      --input-bg: #ffffff;
      --shadow-color: rgba(0, 0, 0, 0.06);
    }

    .toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 16px;
      background: var(--toolbar-bg);
      border: 1px solid var(--toolbar-border);
      border-radius: 8px;
      margin-bottom: 12px;
      align-items: center;
      box-shadow: 0 1px 4px var(--shadow-color);
    }

    .section {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-label {
      font-size: 12px;
      font-weight: 500;
      color: var(--text-secondary);
      white-space: nowrap;
    }

    .day-select {
      padding: 7px 12px;
      border: 1px solid var(--toolbar-border);
      border-radius: 6px;
      font-size: 13px;
      background: var(--input-bg);
      color: var(--text-primary);
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .day-select:focus {
      outline: none;
      border-color: var(--btn-bg);
    }

    .btn {
      padding: 7px 14px;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
      white-space: nowrap;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .btn-primary {
      background: var(--btn-bg);
      color: var(--btn-text);
    }

    .btn-primary:hover {
      background: var(--btn-hover);
    }

    .btn-secondary {
      background: var(--btn-secondary-bg);
      color: var(--text-primary);
    }

    .btn-secondary:hover {
      background: var(--btn-secondary-hover);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .value-input {
      width: 60px;
      padding: 7px 10px;
      border: 1px solid var(--toolbar-border);
      border-radius: 6px;
      font-size: 13px;
      text-align: center;
      background: var(--input-bg);
      color: var(--text-primary);
      transition: border-color 0.2s;
    }

    .value-input:focus {
      outline: none;
      border-color: var(--btn-bg);
    }

    .enable-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toggle-switch {
      position: relative;
      width: 42px;
      height: 22px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .toggle-slider {
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

    .toggle-slider:before {
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

    .toggle-switch input:checked + .toggle-slider {
      background-color: var(--btn-bg);
    }

    .toggle-switch input:checked + .toggle-slider:before {
      transform: translateX(20px);
    }

    .helper-info {
      font-size: 11px;
      color: var(--text-secondary);
      margin-left: auto;
      font-style: italic;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--toolbar-border);
    }

    @media (max-width: 600px) {
      .toolbar {
        flex-direction: column;
        align-items: stretch;
      }

      .section {
        justify-content: space-between;
      }

      .helper-info {
        margin-left: 0;
        text-align: center;
      }

      .divider {
        display: none;
      }
    }
  `;

  private _handleCopyToAll() {
    this.dispatchEvent(
      new CustomEvent('copy-to-all', {
        detail: { sourceDay: this._selectedDay },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleCopyToWorkdays() {
    this.dispatchEvent(
      new CustomEvent('copy-to-workdays', {
        detail: { sourceDay: this._selectedDay },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleClearDay() {
    this.dispatchEvent(
      new CustomEvent('clear-day', {
        detail: { day: this._selectedDay },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleClearAll() {
    this.dispatchEvent(
      new CustomEvent('clear-all', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleToggleEnabled() {
    this.dispatchEvent(
      new CustomEvent('toggle-enabled', {
        detail: { enabled: !this.enabled },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleValueChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this._inputValue = Number(input.value);
  }

  private _handleValueConfirm() {
    this.dispatchEvent(
      new CustomEvent('value-change', {
        detail: { value: this._inputValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _handleDayChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this._selectedDay = select.value as DayName;
  }

  render() {
    return html`
      <div class="toolbar">
        <!-- Enable/Disable toggle -->
        <div class="section enable-toggle">
          <span class="section-label">Schedule</span>
          <label class="toggle-switch">
            <input
              type="checkbox"
              .checked=${this.enabled}
              @change=${this._handleToggleEnabled}
            />
            <span class="toggle-slider"></span>
          </label>
          <span class="section-label">${this.enabled ? 'On' : 'Off'}</span>
        </div>

        <div class="divider"></div>

        <!-- Value input (for input_number only) -->
        ${this.helperType === 'input_number'
          ? html`
              <div class="section">
                <span class="section-label">Value:</span>
                <input
                  type="number"
                  class="value-input"
                  .value=${String(this._inputValue)}
                  @input=${this._handleValueChange}
                  @change=${this._handleValueConfirm}
                  min="0"
                  max="100"
                />
              </div>
              <div class="divider"></div>
            `
          : ''}

        <!-- Day selection -->
        <div class="section">
          <span class="section-label">Copy from:</span>
          <select class="day-select" @change=${this._handleDayChange}>
            ${DAYS.map(
              (day) => html`
                <option value="${day}" ?selected=${day === this._selectedDay}>
                  ${DAY_LABELS[day]}
                </option>
              `
            )}
          </select>
        </div>

        <!-- Copy buttons -->
        <div class="section">
          <button class="btn btn-primary" @click=${this._handleCopyToAll}>
            Copy to All
          </button>
          <button class="btn btn-primary" @click=${this._handleCopyToWorkdays}>
            Copy to Workdays
          </button>
        </div>

        <div class="divider"></div>

        <!-- Clear buttons -->
        <div class="section">
          <button class="btn btn-secondary" @click=${this._handleClearDay}>
            Clear ${DAY_LABELS[this._selectedDay]}
          </button>
          <button class="btn btn-secondary" @click=${this._handleClearAll}>
            Clear All
          </button>
        </div>

        <!-- Helper info -->
        <div class="helper-info">
          Controlling: ${this.helperEntity}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-toolbar': ScheduleToolbar;
  }
}

// Explicitly register custom element
if (!customElements.get('schedule-toolbar')) {
  customElements.define('schedule-toolbar', ScheduleToolbar);
}
