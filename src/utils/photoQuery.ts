import moment from 'moment';

export const returnImageQueryAccordingToTime = () => {
  if (moment().isBefore(moment().hour(12))) {
    return 'evenings';
  } else if (moment().isBefore(moment().hour(16))) {
    return 'afternoons';
  } else if (moment().isBefore(moment().hour(24))) {
    return 'night';
  } else {
    return 'dawnings';
  }
};
