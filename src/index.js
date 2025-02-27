import _ from "lodash";

const getLastItem = (arr) => {
const lastItem = _.last(arr);
return lastItem;
}

export default getLastItem;