import { checkIfChrome } from '../Helper';
import './AsUsedBy.css';

const AsUsedBy = () => {
  const is_chrome = checkIfChrome;
  const image_extension = is_chrome ? 'webp' : 'png';

  return (
    <>
      <div className='as_used_by'>
        <div className='as_used_by_wrapper'>
          <div className='as_used_by_text'>As used by</div>

          <div className='img_row'>
            <img
              src={require(`../../assets/microsoft.${image_extension}`)}
              alt='Microsoft Logo'
            />

            <img
              src={require(`../../assets/intel.${image_extension}`)}
              alt='Intel Logo'
            />

            <img
              src={require(`../../assets/google.${image_extension}`)}
              alt='Google Logo'
            />

            <img
              src={require(`../../assets/facebook.${image_extension}`)}
              alt='Facebook Logo'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AsUsedBy;
