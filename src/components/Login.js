import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router';
import ackground from '../../src/bg.jpg';

const Login = (props) => {
    return (
        <div className="hello"style={sectionStyle}>
<Container >
        
           <div className="container" >
           {
            props.user && 
            <Redirect to = '/home' />
        }
        
        <Nav>
            <a href="/"style={{ textDecoration: 'none' }}>
                <h1 style={{fontFamily: 'Lobster', fontSize:"26px",textShadow:"2px 2px 3px black",
                marginLeft:"40px",
                marginTop:"3.8px",color:"white"}}>ST-AN</h1>
            </a>
            <div>
                <Join>Join Now</Join>
                <SignIn>Sign In</SignIn>
            </div>
        </Nav>
           </div>
        
        <Nava>
        <Section id="log">
            <div id="headContainer">
            <h1 style = {{color:"black", fontSize:"33px",fontFamily:"monospace",fontWeight:"900"}}> Welcome to </h1>
            <h1 style = {{color:"black",fontSize:"33px",fontFamily:"monospace",fontWeight:"900"}}>Student Alumini network </h1>
            </div>
            <Form>
                <Google onClick = {() => props.signIn()}>
                    <img src="/images/google.svg" alt="" />  Sign in with Google
                </Google>
            </Form>
        </Section>
        </Nava>
    </Container>
    
    </div>
        
    );
};


var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${ackground})`,
    backgrounPosition:'center',
    opacity:"0.849", 
    backgroundSize: 'cover',
    
  };

const Container = styled.div`
    width:100%;
    padding: 0px;
    position:fixed;
    top:0;
    margin:0px;
`;

const Nava = styled.nav`
    max-width: 1128px;
    padding: 12px 0 16px 0;
    display: flex;
    align-items: center;
    margin:0;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;
const Nav = styled.nav`
width:99vw;
height:60px;
    // padding: 12px 0 16px 0;
    display: flex;
    left:0;
    align-items: center;
    background-color: maroon;
    color:white;
    position: fixed;
    top:0;
    justify-content: space-between;
    // flex-wrap: nowrap;
     > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 15px;
    padding: 10px 12px;
    position:relative;
    right:60px;
    text-decoration: none;
    color: white;
    text-shadow: 2px 2px 3px black;
    margin-right: 12px;
    font-weight: 600;
    border-radius: 4px;
    &:hover{    
        text-shadow: 2px 2px 3px white;
        background-color: white;
        color: balck;
        text-decoration: none;
        cursor: pointer;
    }
`;


const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px white;
    color: white;
    text-shadow:2px 2px 3px black;
    position:relative;
    right:45px;
    border-radius: 8px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 12px 23px;
    text-align: center;
    text-decoration:none;
    background-color: rgba(0, 0, 0, 0);
    &:hover {
        text-shadow:2px 2px 3px white;
        background-color: #f1f1f1;
        color: "black";
        text-decoration: none;
        cursor: pointer;
        box-shadow: inset 0 0 0 2px white;
    }
`;

const Section = styled.section`
    display: flex;
    width:50%;
    flex-direction:column;
    justify-content:space-evenly;
    height:70vh;
    // min-height: 700px;
    position:absolute;
    top:150px;
    left:355px;
    padding-bottom: 138px;
    padding-top: 40px;
    margin-left:100px;
    padding: 60px 0;
    position: relative;
    border:1px solid black;
    flex-wrap: wrap;
    border-radius:10px;
    align-items: center;
    margin: auto;
    background: white;
    box-shadow: 4px 4px 4px  maroon;
    
    &:hover {
        background-color:rgb(255, 232, 237);
    }
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`;


const Form = styled.div`
    //margin-top: 100px;
    //margin-left: 60px;
    width: 300px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
    height: 50px;
    width: 100%;
    min-width:200px;
    //margin-left:150px;
    margin-top:10px;
    border-radius: 20px;
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0 , 0, 0.6);
    &:hover {
        border:2px solid maroon;
        color: rgba(0, 0, 0, 0.75);
        cursor: pointer;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);