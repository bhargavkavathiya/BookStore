import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";

const ConfirmDialog = (props) => {
    const { open, onClose, onConfirm, title, description } = props;
    const styles={
        cancel:{

            backgroundColor:"green",
        },
        confirm:{
            backgroundColor:"red",
        }
    }
    return (
    <>
        <Dialog
            open={open}
            onClose={() => onClose()}
            className="CD-cancel-popup"
        >
            <DialogTitle >
                {title}
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => onClose()}
                    style={styles.cancel}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={() => onConfirm()}
                    style={styles.confirm}
                >
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
};

export default ConfirmDialog;
