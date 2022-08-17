/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { TreeItemContext } from '../tree/tree-model';

@Component({
  tag: 'ix-tree-item',
  styleUrl: 'tree-item.scss',
  scoped: true,
})
export class CwTreeItem {
  /**
   * Text
   */
  @Prop() text: string;

  /**
   * Has tree item children
   */
  @Prop() hasChildren: boolean;

  /**
   * Context
   */
  @Prop() context: TreeItemContext;

  /**
   * Expand/Collapsed toggled
   */
  @Event() toggle: EventEmitter<void>;

  /**
   * Clicked
   */
  @Event() itemClick: EventEmitter<void>;

  render() {
    return (
      <Host
        class={{
          selected: this.context?.isSelected,
        }}
      >
        <div
          class="icon-toggle-container"
          onClick={(e) => {
            e.preventDefault();
            this.toggle.emit();
          }}
        >
          {this.hasChildren ? (
            <ix-icon
              name="chevron-right"
              size="16"
              class={{
                ['icon-toggle-down']: this.context?.isExpanded,
              }}
              color={`color-${
                this.context?.isExpanded ? 'primary' : 'std-text'
              }`}
            />
          ) : null}
        </div>
        <div
          class="tree-node-container"
          onClick={(e) => {
            e.preventDefault();
            this.itemClick.emit();
          }}
        >
          {this.text}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
