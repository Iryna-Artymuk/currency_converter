import FadeLoader from 'react-spinners/FadeLoader';

function Sppiner() {
  const override = {
    display: 'block',
    margin: '0 auto',
    color: 'white',
  };

  return (
    <FadeLoader
      color="white"
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Sppiner;
