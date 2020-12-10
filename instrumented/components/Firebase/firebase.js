function cov_1fhemw4ff5() {
  var path = "D:\\study\\web development\\Moviefan\\moviesApp\\src\\components\\Firebase\\firebase.js";
  var hash = "f7d94e86050562c105891f28ba63e939fe0dd5ea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\study\\web development\\Moviefan\\moviesApp\\src\\components\\Firebase\\firebase.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 33
        }
      },
      "2": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 13,
          column: 47
        }
      },
      "3": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 14,
          column: 45
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f7d94e86050562c105891f28ba63e939fe0dd5ea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fhemw4ff5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fhemw4ff5();
import firebase from 'firebase'; // Initialize Firebase

const config = (cov_1fhemw4ff5().s[0]++, {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID
});
cov_1fhemw4ff5().s[1]++;
firebase.initializeApp(config);
const databaseRef = (cov_1fhemw4ff5().s[2]++, firebase.database().ref());
const notesRef = (cov_1fhemw4ff5().s[3]++, databaseRef.child("notes"));
export default notesRef;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiY29uZmlnIiwiYXBpS2V5IiwiWU9VUl9BUElfS0VZIiwiYXV0aERvbWFpbiIsIllPVVJfQVVUSF9ET01BSU4iLCJkYXRhYmFzZVVSTCIsIllPVVJfREFUQUJBU0VfVVJMIiwicHJvamVjdElkIiwiWU9VUl9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiWU9VUl9NRVNTQUdJTkdfU0VOREVSX0lEIiwiaW5pdGlhbGl6ZUFwcCIsImRhdGFiYXNlUmVmIiwiZGF0YWJhc2UiLCJyZWYiLCJub3Rlc1JlZiIsImNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWRWLE9BQU9BLFFBQVAsTUFBcUIsVUFBckIsQyxDQUNBOztBQUNBLE1BQU1DLE1BQU0sNkJBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFQyxZQURLO0FBRWJDLEVBQUFBLFVBQVUsRUFBRUMsZ0JBRkM7QUFHYkMsRUFBQUEsV0FBVyxFQUFFQyxpQkFIQTtBQUliQyxFQUFBQSxTQUFTLEVBQUVDLGVBSkU7QUFLYkMsRUFBQUEsYUFBYSxFQUFFLEVBTEY7QUFNYkMsRUFBQUEsaUJBQWlCLEVBQUVDO0FBTk4sQ0FBSCxDQUFaOztBQVFBWixRQUFRLENBQUNhLGFBQVQsQ0FBdUJaLE1BQXZCO0FBQ0EsTUFBTWEsV0FBVyw2QkFBR2QsUUFBUSxDQUFDZSxRQUFULEdBQW9CQyxHQUFwQixFQUFILENBQWpCO0FBQ0EsTUFBTUMsUUFBUSw2QkFBR0gsV0FBVyxDQUFDSSxLQUFaLENBQWtCLE9BQWxCLENBQUgsQ0FBZDtBQUNBLGVBQWVELFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFlPVVJfQVBJX0tFWSxcclxuICAgIGF1dGhEb21haW46IFlPVVJfQVVUSF9ET01BSU4sXHJcbiAgICBkYXRhYmFzZVVSTDogWU9VUl9EQVRBQkFTRV9VUkwsXHJcbiAgICBwcm9qZWN0SWQ6IFlPVVJfUFJPSkVDVF9JRCxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICcnLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFlPVVJfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICB9O1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxuICBjb25zdCBkYXRhYmFzZVJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XHJcbiAgY29uc3Qgbm90ZXNSZWYgPSBkYXRhYmFzZVJlZi5jaGlsZChcIm5vdGVzXCIpO1xyXG4gIGV4cG9ydCBkZWZhdWx0IG5vdGVzUmVmOyJdfQ==