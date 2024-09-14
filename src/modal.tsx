import { ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';

let close: () => void;
let show: (args: IModalShow) => void;
let action: () => void;
let actionClose: () => void;

interface IModalShow {
  children: ReactNode;
  confirmed: () => void;
  closeConfirmed?: () => void;
}

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function Modal() {
  const [open, setOpen] = useState<boolean>(false);
  const [children, setChildren] = useState<ReactNode>();

  show = async (args: IModalShow) => {
    setOpen(true);
    setChildren(args.children);
    action = args.confirmed;
    if (args?.closeConfirmed) {
      actionClose = args.closeConfirmed;
    }
  };

  close = () => {
    if (actionClose) {
      actionClose();
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <BootstrapDialog
      onClose={close}
      aria-labelledby='customized-dialog-title'
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
        SGD - Online
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={close}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Icon icon='mdi:close' />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={action}>
          Continuar
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}

export function useModalChildren() {
  return {
    Component: Modal,
    show,
    close,
  };
}