/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { MapNavigation } from '../map-navigation';
// import { fireEvent } from '@testing-library/dom';

describe('map-navigation', () => {
  let page: any;
  let mapNavigation: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MapNavigation],
      html: `<map-navigation></map-navigation>`,
    });
    mapNavigation = page.doc.querySelector('ix-map-navigation');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });

  // it('emits an event when context menu clicked', async () => {
  //   let callbackSpy = jest.fn();
  //   page.win.addEventListener('contextMenuClick', callbackSpy);
  //   mapNavigation.hideContextMenu = false;
  //   let contextMenuButton = page.doc.querySelector('[data-testid="button"]');
  //   fireEvent.click(contextMenuButton);
  //   await page.waitForChanges();
  //   expect(callbackSpy).toHaveBeenCalled();
  //   // expect(callbackSpy.mock.calls[0][0].detail).toEqual(expandingSearch.value);
  // });
});
