import { createTheme } from '@mui/material/styles'

import { COLORS } from './colors'

const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary
        },
        secondary: {
            main: COLORS.secondary
        },
        success: {
            main: COLORS.success
        },
        error: {
            main: COLORS.error
        }
    }
})

export { theme }