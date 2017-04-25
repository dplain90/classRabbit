import { compareTaskers } from '../util/sort_util';

export const asArray = (categories) => {
  return Object.keys(categories).map((key) => {
    return categories[key];
  });
};

export const uniqTaskers = (availabilities) => {
  asArray(this.props.availabilities).map( (availability) => {
    return taskers;
  });
};

export const filterTaskers = (filters, taskers, availabilities) => {
  let filteredTaskers = {};
  availabilities[filters.date].forEach( (availability) => {
    if(availability.time === filters.time){
      filteredTaskers[availability.tasker_id] = taskers[tasker_id];
    }
  });

  filteredTaskers = asArray(filteredTaskers).sort( (tasker1, tasker2) => {
    return filters.sort_by(tasker1, tasker2);
  });

  return filteredTaskers;
};
