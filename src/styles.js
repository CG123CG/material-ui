import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

//Used for styling without cluttering the code
//Takes default Material UI theme ==> (theme)
const useStyles = makeStyles((theme) => ({
    container: {
        //https://v4.mui.com/customization/palette/
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6) //(top, rightLeft, bottom)
    },
    icon: {
        marginRight: "50px",
        marginLeft: "20px"
    },
    buttons: {
        marginTop: "40px"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardGrid: {
        padding: "20px 0" //top-bottom & left-right
    },
    cardContent: {
        flexGrow: 1
    },
    cardMedia: {
        paddingTop: "56.25%" //16:9 Aspect Ratio
    },
    footer: {
        backgroundColor: theme.palette.background.default,
        padding: "50px 0" //top-bottom & left-right
    },
    textAndCheckbox: {
        marginTop: "40px",
        marginBottom: "40px",
        display: "flex",
        flexDirection: "row",
        gap: "40px"
    },
    tableText: {
        //color: "#f44336"
        color: red[100],
        fontWeight: theme.typography.fontWeightMedium
    }
}))

export default useStyles

