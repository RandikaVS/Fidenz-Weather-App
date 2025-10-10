import { useRef } from 'react';
import PropTypes from 'prop-types';
import { closeSnackbar, SnackbarProvider as NotistackProvider } from 'notistack';

import IconButton from '@mui/material/IconButton';

import { StyledIcon, StyledNotistack } from './styles';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from "@mui/icons-material/Close";

// ----------------------------------------------------------------------

export default function SnackbarProvider({ children }) {


  const notistackRef = useRef(null);

  return (
    // Snackbar provider for notifications
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      variant="success" 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      iconVariant={{
        info: (
          <StyledIcon color="info">
            <InfoIcon color='info' width={24} />
          </StyledIcon>
        ),
        success: (
          <StyledIcon color="success">
            <CheckCircleIcon color='success' width={24} />
          </StyledIcon>
        ),
        warning: (
          <StyledIcon color="warning">
            <WarningIcon color='warning' width={24} />
          </StyledIcon>
        ),
        error: (
          <StyledIcon color="error">
            <ErrorIcon color='error' width={24} />
          </StyledIcon>
        ),
      }}
      Components={{
        default: StyledNotistack,
        info: StyledNotistack,
        success: StyledNotistack,
        warning: StyledNotistack,
        error: StyledNotistack,
      }}

      action={(snackbarId) => (
        <IconButton size="small" onClick={() => closeSnackbar(snackbarId)} sx={{ p: 0.5 }}>
          <CloseIcon width={16} />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
};
