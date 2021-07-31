import moment from 'moment';

export const returnImageQueryAccordingToTime = () => {
  if (moment().isBefore(moment().hour(12))) {
    return 'cold evenings';
  } else if (moment().isBefore(moment().hour(16))) {
    return 'cold afternoons';
  } else if (moment().isBefore(moment().hour(24))) {
    return 'cold night';
  } else {
    return 'cold night';
  }
};
