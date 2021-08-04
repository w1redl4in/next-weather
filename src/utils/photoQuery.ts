import moment from 'moment';

export const returnImageQueryAccordingToTime = (temp: number) => {
  const queryTemp =
    temp < 5 ? 'snow' : temp < 15 ? 'cold' : temp < 25 ? 'stuffy' : 'hot';

  if (moment().isBefore(moment().hour(12))) {
    return `${queryTemp} evenings`;
  } else if (moment().isBefore(moment().hour(17))) {
    return `${queryTemp} afternoons`;
  } else if (moment().isBefore(moment().hour(24))) {
    return `${queryTemp} night`;
  } else {
    return `${queryTemp} dawnings`;
  }
};
