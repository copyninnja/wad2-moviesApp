function cov_16g4cliy4y() {
  var path = "D:\\study\\web development\\Moviefan\\moviesApp\\src\\util.js";
  var hash = "8658e738df64c3013070338e9c99632a8ecaf4d2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\study\\web development\\Moviefan\\moviesApp\\src\\util.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 19
        },
        end: {
          line: 4,
          column: 29
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 8,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "excerpt",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 23
          }
        },
        loc: {
          start: {
            line: 3,
            column: 32
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8658e738df64c3013070338e9c99632a8ecaf4d2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16g4cliy4y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16g4cliy4y();
import _ from "lodash";
export function excerpt(string) {
  cov_16g4cliy4y().f[0]++;
  const truncate = (cov_16g4cliy4y().s[0]++, _.truncate);
  cov_16g4cliy4y().s[1]++;
  return truncate(string, {
    length: 200,
    // maximum 200 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods

  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiXyIsImV4Y2VycHQiLCJzdHJpbmciLCJ0cnVuY2F0ZSIsImxlbmd0aCIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLENBQVAsTUFBYyxRQUFkO0FBRUEsT0FBTyxTQUFTQyxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUFBO0FBQzlCLFFBQU1DLFFBQVEsNkJBQUdILENBQUMsQ0FBQ0csUUFBTCxDQUFkO0FBRDhCO0FBRTlCLFNBQU9BLFFBQVEsQ0FBQ0QsTUFBRCxFQUFTO0FBQ3RCRSxJQUFBQSxNQUFNLEVBQUUsR0FEYztBQUNUO0FBQ2JDLElBQUFBLFNBQVMsRUFBRSxTQUZXLENBRUQ7O0FBRkMsR0FBVCxDQUFmO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhjZXJwdChzdHJpbmcpIHtcclxuICBjb25zdCB0cnVuY2F0ZSA9IF8udHJ1bmNhdGU7XHJcbiAgcmV0dXJuIHRydW5jYXRlKHN0cmluZywge1xyXG4gICAgbGVuZ3RoOiAyMDAsIC8vIG1heGltdW0gMjAwIGNoYXJhY3RlcnNcclxuICAgIHNlcGFyYXRvcjogLyw/XFwuKiArLyAvLyBzZXBhcmF0ZSBieSBzcGFjZXMsIGluY2x1ZGluZyBwcmVjZWRpbmcgY29tbWFzIGFuZCBwZXJpb2RzXHJcbiAgfSk7XHJcbn0iXX0=