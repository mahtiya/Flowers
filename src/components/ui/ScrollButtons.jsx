import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ScrollButtons({ onLeftClick, onRightClick }) {
    return (
        <div className="scroll_buttons">
            <IconButton onClick={onLeftClick}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton onClick={onRightClick}>
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    );
}
