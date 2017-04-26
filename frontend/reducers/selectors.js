import { generateSort } from '../util/sort_util';

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
      filteredTaskers[availability.tasker_id] = taskers[availability.tasker_id];
    }
  });

  let { direction, val } = filters.sorted_by;
  filteredTaskers = asArray(filteredTaskers).sort( (tasker1, tasker2) => {
    return generateSort(direction, val)(tasker1, tasker2);
  });

  return filteredTaskers;
};
