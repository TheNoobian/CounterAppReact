import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle = 'No hay subtítulo', name = 'Bruno Piniasdasdssad' }) => {
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string
}
