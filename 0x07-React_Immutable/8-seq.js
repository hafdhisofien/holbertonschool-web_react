import { Seq } from 'immutable';

const printBestStudents = (grades) => {
  const seq = Seq(grades);

  const filter = seq.filter((value) => value.score > 70);

  const std = filter.toJS();

  const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(std).map((key) => {
    std[key].firstName = formatName(std[key].firstName);
    std[key].lastName = formatName(std[key].lastName);
    return std[key];
  });

  console.log(std);
};

export default printBestStudents;
