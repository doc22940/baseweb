// @flow

import * as React from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';

export default function Scenario() {
  return (
    <Outer>
      <Grid
        overrides={{
          Grid: {
            style: ({$theme}) => ({
              border: `solid 1px ${$theme.colors.positive400}`,
            }),
          },
        }}
      >
        <Cell span={[1, 2, 3]}>
          <Inner>1</Inner>
        </Cell>
        <Cell span={[1, 2, 3]}>
          <Inner>2</Inner>
        </Cell>
        <Cell span={[1, 2, 3]}>
          <Inner>3</Inner>
        </Cell>
        <Cell
          span={[1, 2, 3]}
          overrides={{
            Cell: {
              style: ({$theme}) => ({
                outline: `solid 1px ${$theme.colors.negative400}`,
              }),
            },
          }}
        >
          <Inner>4</Inner>
        </Cell>
      </Grid>
    </Outer>
  );
}

const Outer = ({children}: {children: React.Node}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
};

const Inner = ({children}: {children: React.Node}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
};
