module.exports = {
  dataFormat: function(input, url) {
    var output = {links: {self: url}, data: []};
    for(var i = 0; i < input.length; i++) {
      output.data.push({type: "memory",
                        id: input[i].id,
                        attributes: {old_days: input[i].old_days,
                                    these_days: input[i].these_days,
                                    year: input[i].year},
                        links: url + '/' + input[i].id});
    }
    return output;
  },
  yearFormat: function(input, url) {
    var output = {links: {self: url}, data: []};
    for(var i = 0; i < input.length; i++) {
      output.data.push(input[i].year);
    }
    return output;
  }
};