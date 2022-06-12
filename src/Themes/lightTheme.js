import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette:{
        mode:"light",
        primary:{
            main:"#009878",
            light:"#02c99f",
            dark:"#02755d"
        },
        secondary:{
            main:"#0B0742",
            light:"#093659",
            dark:"#021321"
        },
        text:{
            primary:"#111",
            secondary:"#888",
            default:"#888",
            avatar:"#FFF"
        },
        divider:"#111",
        background:{
            paper:"#FFF",
            default:"#FFF"
        }
    },
    shape:{
        borderRadius:8
    },    
    typography:{
        button:{
            textTransform:"capitalize"
        }
    }
})

export default lightTheme