/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { TemplateRef } from '@angular/core';
import { ToastConfig as IxToastConfig } from '@siemens/ix';

export type ToastConfig = Omit<IxToastConfig, 'message'> & {
  message: string | TemplateRef<any>;
};