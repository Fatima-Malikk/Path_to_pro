import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    height: 60,
  },
  button: {
    color: 'white',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:active': {
      backgroundColor: '#3583FE',
    },
  },
  activeButton: {
    backgroundColor: '#3583FE',
    borderRadius: '50%',
  },
};

const Pagination = () => {
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const renderButtons = () => {
    const pageNumbers = [1, 2, 3, 4, 5];
    return pageNumbers.map((pageNumber) => (
      <Button
        key={pageNumber}
        style={pageNumber === activePage ? { ...styles.button, ...styles.activeButton } : styles.button}
        onClick={() => handlePageClick(pageNumber)}
      >
        {pageNumber}
      </Button>
    ));
  };

  const [activePage, setActivePage] = React.useState(1);

  return (
    <div style={styles.root}>
      <ButtonGroup>
        <Button style={styles.button}>
          <ArrowBackIcon />
        </Button>
        {renderButtons()}
        <Button style={styles.button}>
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
