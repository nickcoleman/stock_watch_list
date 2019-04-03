import { css } from 'glamor'
import { green, white } from 'ansi-colors'

export const DEFAULT_SPACING_SIZE = '1rem'
const GRID_NOT_SUPPORTED =
  '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none), @supports not (display: grid)'

const BLACK = '#121212'
const YELLOW = '#f4dc42'
const HOVER_RED = '#990000'
const LIGHT_GREEN = '#6EEB83'
const MARIGOLD = '#e8aa14'
const ORANGE = '#FF5714'
const BLUE = '#1be7ff'

export const stylesheet = {
  header: css({
    backgroundColor: MARIGOLD,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  menuBar: css({
    backgroundColor: MARIGOLD,
    paddingBottom: DEFAULT_SPACING_SIZE,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  search: css({
    height: '20px',
    width: '400px',
    display: 'flex',
    justifyContent: 'space-around',
  }),

  searchInput: css({
    width: '200px',
    border: `1px solid ${LIGHT_GREEN}`,
  }),

  searchSelection: css({
    width: '180px',
    backgroundColor: LIGHT_GREEN,
  }),

  refreshButton: css({
    backgroundColor: LIGHT_GREEN,
    borderRadius: '5px',
    border: `1px solid ${BLACK}`,
    ':hover': {
      backgroundColor: BLUE,
    },
  }),

  portfolioGridRow: css({
    marginBottom: DEFAULT_SPACING_SIZE,
    display: 'grid',
    gridGap: DEFAULT_SPACING_SIZE,
    gridTemplateColumns: '100px 100px',
    gridTemplateAreas: '"symbol price "',
    [GRID_NOT_SUPPORTED]: {
      display: 'flex',
      flexDirection: 'row',
    },
  }),

  portfolio: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }),

  portfolioHeader: css({
    fontWeight: 'bold',
    background: YELLOW,
    color: BLACK,
    borderBottom: `1px solid ${BLACK}`,
    padding: `0 ${DEFAULT_SPACING_SIZE}`,
  }),

  stockCard: css({
    width: '200px',
    height: '200px',
    marginTop: DEFAULT_SPACING_SIZE,
    border: `1px solid ${MARIGOLD}`,
    borderRadius: '5px',
    background: LIGHT_GREEN,
    display: 'grid',
    gridGap: DEFAULT_SPACING_SIZE,
    gridTemplateAreas: `
      "s s s s"
      "p p c c"
      ". b b ."
    `,
    textAlign: 'center',
    [GRID_NOT_SUPPORTED]: {
      height: '250px',
      display: 'flex',
      flexDirection: 'column',
    },
  }),

  symbol: css({
    gridArea: 's',
    textAlign: 'center',
    paddingTop: DEFAULT_SPACING_SIZE,
    fontSize: '2em',
    fontWeight: 'bold',
  }),

  price: css({
    gridArea: 'p',
    margin: `0 ${DEFAULT_SPACING_SIZE}`,
  }),

  change: css({
    gridArea: 'c',
    margin: `0 ${DEFAULT_SPACING_SIZE}`,
  }),

  deleteStockButton: css({
    gridArea: 'b',
    margin: '0 auto',
    textAlign: 'center',
    color: ORANGE,
    ':hover': {
      color: HOVER_RED,
    },
  }),
}
