<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/message-bar.ts -->
```typescript
/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  template: `
    <ix-message-bar>Message text</ix-message-bar>
    <ix-message-bar type="warning">Message text</ix-message-bar>
    <ix-message-bar type="danger">
      <div class="d-flex align-items-center justify-content-between">
        Message text <ix-button>Action</ix-button>
      </div>
    </ix-message-bar>
  `,
})
export class MessageBar {}
```