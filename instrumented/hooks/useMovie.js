function cov_79goziq1i() {
  var path = "D:\\study\\web development\\Moviefan\\moviesApp\\src\\hooks\\useMovie.js";
  var hash = "fc27d58715b14c4265ec3304f917ce353469e60e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\study\\web development\\Moviefan\\moviesApp\\src\\hooks\\useMovie.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 42
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 10,
          column: 11
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 9,
          column: 7
        }
      },
      "4": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 22
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 17
          },
          end: {
            line: 4,
            column: 18
          }
        },
        loc: {
          start: {
            line: 4,
            column: 23
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 13
          }
        },
        loc: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 7,
            column: 22
          },
          end: {
            line: 7,
            column: 23
          }
        },
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fc27d58715b14c4265ec3304f917ce353469e60e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_79goziq1i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_79goziq1i();
import { useEffect, useState } from "react";
import { getMovie } from '../api/tmdb-api';
cov_79goziq1i().s[0]++;

const useMovie = id => {
  cov_79goziq1i().f[0]++;
  const [movie, setMovie] = (cov_79goziq1i().s[1]++, useState(null));
  cov_79goziq1i().s[2]++;
  useEffect(() => {
    cov_79goziq1i().f[1]++;
    cov_79goziq1i().s[3]++;
    getMovie(id).then(movie => {
      cov_79goziq1i().f[2]++;
      cov_79goziq1i().s[4]++;
      setMovie(movie);
    });
  }, [id]);
  cov_79goziq1i().s[5]++;
  return [movie, setMovie];
};

export default useMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZU1vdmllLmpzIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0TW92aWUiLCJ1c2VNb3ZpZSIsImlkIiwibW92aWUiLCJzZXRNb3ZpZSIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsU0FBVCxFQUFvQkMsUUFBcEIsUUFBb0MsT0FBcEM7QUFDQSxTQUFRQyxRQUFSLFFBQXVCLGlCQUF2Qjs7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxFQUFFLElBQUk7QUFBQTtBQUNyQixRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUiw2QkFBb0JMLFFBQVEsQ0FBQyxJQUFELENBQTVCLENBQU47QUFEcUI7QUFFckJELEVBQUFBLFNBQVMsQ0FBQyxNQUFNO0FBQUE7QUFBQTtBQUNkRSxJQUFBQSxRQUFRLENBQUNFLEVBQUQsQ0FBUixDQUFhRyxJQUFiLENBQWtCRixLQUFLLElBQUk7QUFBQTtBQUFBO0FBQ3pCQyxNQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sQ0FBQ0QsRUFBRCxDQUpNLENBQVQ7QUFGcUI7QUFPckIsU0FBTyxDQUFDQyxLQUFELEVBQVFDLFFBQVIsQ0FBUDtBQUNELENBUkQ7O0FBVUEsZUFBZUgsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtnZXRNb3ZpZX0gZnJvbSAnLi4vYXBpL3RtZGItYXBpJ1xyXG5cclxuY29uc3QgdXNlTW92aWUgPSBpZCA9PiB7XHJcbiAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TW92aWUoaWQpLnRoZW4obW92aWUgPT4ge1xyXG4gICAgICBzZXRNb3ZpZShtb3ZpZSk7XHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuICByZXR1cm4gW21vdmllLCBzZXRNb3ZpZV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VNb3ZpZSJdfQ==