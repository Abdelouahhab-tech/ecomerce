import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#FE7A15",
            light:"#fea115",
            dark:"#fe5315"
        },
        secondary:{
            main:"#d4cfc9",
            light:"#ddd",
            dark:"#b6b6b6"
        },
        text:{
            primary:"#FFF",
            secondary:"#E7E7E7",
            default:"#888",
            avatar:"#FFF"
        },
        divider:"#DDDDDA",
        background:{
            paper:"#222",
            default:"#222"
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

export default darkTheme