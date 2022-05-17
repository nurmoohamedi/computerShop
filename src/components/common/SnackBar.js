import {Alert, Snackbar} from "@mui/material";

const SnackBar = ({isOpen, status, message, handleClose}) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity={status}
                onClose={handleClose}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar;