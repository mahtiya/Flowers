import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './../../../assets/scss/components/header/headersearch.scss';

export default function HeaderSearch() {
    return (
        <div className="header_search">
            <div className="container">
                <div className="header_search_box">
                    <Box className="header_search_box">
                        <TextField className='header_search_input1' id="standard-basic" label="Поиск по товарам" variant="standard" />
                    </Box>
                </div>
            </div>
        </div>
    )
}
