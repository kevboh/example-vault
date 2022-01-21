function memento_mori(since) {
  return moment().endOf('day').diff(moment(since).startOf('day'), 'days');
}
module.exports = memento_mori;
