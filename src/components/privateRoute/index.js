import AuthContext from '../../contexts/authContext';

const PrivateRoute = props =>{
const context = useContext(AuthContext)
//Destructure props from <privateRoute>
const { component: Component, ...rest } = props;

return context.isAuthenticated === true ? (

<Route {...rest} render={props => <Component {...props}/>}/>
) :(
    <Redirect
    to={{
    pathname: "/login",
    state: { from: props.location }
    }}
    />
);
    };
export default PrivateRoute;
 
