import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@material-ui/core";

function BaseDialog(props) {
  const { open, title, actions, children, ...others } = props;
  return (
    <Dialog open={open} {...others}>
      <DialogTitle>{ title }</DialogTitle>
      <DialogContent className="p-4">
        { children }
      </DialogContent>
      {actions && 
        <DialogActions>
          {actions.map((action, index) => {
            const { content, ...props } = action;
            return (
              <Button 
                className={props.className ? props.className : "btn btn-primary"} key={ index }
                { ...props } 
              >
                  { content }
              </Button>
            );
          })}
        </DialogActions>
      }
    </Dialog>
  );
}

export default BaseDialog;