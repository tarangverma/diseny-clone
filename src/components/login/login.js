import styled from 'styled-components';

const Login = (props) => {
    return (
  <Container>
     <Content>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="no-img" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premium Access to Raya and the Last Dragon for an additional fee with a Diseny+subscription. As of 03/26/21, the price of Diseny+ and the Diseny bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="no-img"></CTALogoTwo>
      </CTA>
      <BgImg />
     </Content>
  </Container>
    );
};

const Container = styled.section` 
    display: flex:
    overflow: hidden; 
    flex-direction: column;
    text-align: center;
    height: 100vh
    `;
const Content = styled.div`
justify-content: center;
align-items: center;
display: flex;
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: boder-box;
flex-direction: column;
padding: 80px 40px;
height: 100%
`;

const BgImg = styled.div`
  background-image: url('/images/login-background.jpg');
  z-index: -1;
  background-repeat: none;
  backgrround-size: cover;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
  top: 0;
  background-position: top;
  z-index: -1
`;

const CTA = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CTALogoOne = styled.img`
 margin-bottom: 12px;
 max-width: 650px;
 min-height: 1px;
 display: block;
 width: 100%;
 `;

 const SignUp = styled.a`
   font-weight: bold;
   color: #f9f9f9;
   background-color: #0063e5;
   margin-bottom: 12px;
   width: 100%;
   letter-spacing: 0.5rem;
   padding: 16.5px 0;
   font-size: 18px;
   border-radius: 4px;
   border: 1px solid transparent;
 
   &:hover {
    background-color: #0483ee;
   } 
   `;

  const Description = styled.p`
  color: hsla(0 , 0% , 95.3% , 1);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  `;


  const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
  `;




export default Login;
