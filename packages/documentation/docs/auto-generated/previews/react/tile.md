<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/tile.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxButton, IxIcon, IxIconButton, IxTile } from '@siemens/ix-react';
import React from 'react';

export const Tile: React.FC = () => {
  return (
    <div className="example">
      <IxTile size="small">92.8 °C</IxTile>

      <IxTile size="medium" className="mr-1">
        <div slot="header">Tile header</div>
        <div className="text-l">92.8 °C</div>
      </IxTile>

      <IxTile size="big">
        <div
          className="d-flex flex-grow-1 align-items-center justify-content-between"
          slot="header"
        >
          Tile header
          <IxIconButton ghost icon="context-menu"></IxIconButton>
        </div>
        <div slot="subheader">Temperature</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <span>92.8 °C</span>
        </div>
        <div
          className="d-flex h-100 align-items-center justify-content-end"
          slot="footer"
        >
          <IxButton ghost slot="footer">
            <IxIcon name="chevron-right-small"></IxIcon>Details
          </IxButton>
        </div>
      </IxTile>
    </div>
  );
};
```