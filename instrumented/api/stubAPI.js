function cov_woswpe17r() {
  var path = "D:\\study\\web development\\Moviefan\\moviesApp\\src\\api\\stubAPI.js";
  var hash = "338a890466d2d23979d28be3d83915dba9656c94";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\study\\web development\\Moviefan\\moviesApp\\src\\api\\stubAPI.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 8
        },
        end: {
          line: 3,
          column: 33
        }
      },
      "1": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 40
        }
      },
      "2": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 2,
            column: 5
          }
        },
        loc: {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 4,
            column: 5
          }
        },
        line: 2
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "338a890466d2d23979d28be3d83915dba9656c94"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_woswpe17r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_woswpe17r();

class StubAPI {
  constructor() {
    cov_woswpe17r().f[0]++;
    cov_woswpe17r().s[0]++;
    this.favoriteMovies = [];
  }

  add(movie) {
    cov_woswpe17r().f[1]++;
    cov_woswpe17r().s[1]++;
    this.favoriteMovies.push(movie);
  }

  getAll() {
    cov_woswpe17r().f[2]++;
    cov_woswpe17r().s[2]++;
    return this.favoriteMovies;
  }

}

export default new StubAPI();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWJBUEkuanMiXSwibmFtZXMiOlsiU3R1YkFQSSIsImNvbnN0cnVjdG9yIiwiZmF2b3JpdGVNb3ZpZXMiLCJhZGQiLCJtb3ZpZSIsInB1c2giLCJnZXRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaLE1BQU1BLE9BQU4sQ0FBYztBQUNWQyxFQUFBQSxXQUFXLEdBQUc7QUFBQTtBQUFBO0FBQ1YsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNIOztBQUVEQyxFQUFBQSxHQUFHLENBQUNDLEtBQUQsRUFBUTtBQUFBO0FBQUE7QUFDUCxTQUFLRixjQUFMLENBQW9CRyxJQUFwQixDQUF5QkQsS0FBekI7QUFDSDs7QUFFREUsRUFBQUEsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUNMLFdBQU8sS0FBS0osY0FBWjtBQUNIOztBQVhTOztBQWNkLGVBQWUsSUFBSUYsT0FBSixFQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3R1YkFQSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlTW92aWVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG1vdmllKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZU1vdmllcy5wdXNoKG1vdmllKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVNb3ZpZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdHViQVBJKCk7Il19