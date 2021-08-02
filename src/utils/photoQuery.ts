import moment from 'moment';

export const returnImageQueryAccordingToTime = () => {
  if (moment().isBefore(moment().hour(12))) {
    return 'weather evenings';
  } else if (moment().isBefore(moment().hour(16))) {
    return 'weather afternoons';
  } else if (moment().isBefore(moment().hour(24))) {
    return 'weather night';
  } else {
    return 'weather dawnings';
  }
};
