import { Card, Button, Form } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { pink } from '@mui/material/colors';
import './contact.css';
function Contact() {
  return (
    <>
    <CardGroup>
        <div className='contact'>
        <h1>Contact</h1>
        <p>I am thrilled that you are interested in getting in touch. Whether you have a project in mind, a question to ask, or simply want to say hello, I would love to hear from you. Feel free to reach out through any of the following methods.</p>
        </div>
      <Card style={{backgroundColor:'#17002f'}} className='card1'>
        <Card.Body className='cardcontact'>
          <Card.Title style={{color:'white',fontSize:'18px'}}>I'M ALSO ON SOCIAL NETWORKS</Card.Title>

          <Card.Text><HomeIcon color="secondary" style={{float:'left'}} />Address Hyderabad, India</Card.Text>
          <Card.Text><PhoneIcon color='primary' style={{float:'left'}}/>Let's Talk: +91 9121939409</Card.Text>
          <Card.Text><EmailIcon sx={{ color: pink[500] ,float:'left'}}/>Email:naveen@123.com</Card.Text>
          <GitHubIcon  color="success"style={{cursor:'pointer',fontSize: '40px' }}/>
          <LinkedInIcon color="info" style={{marginLeft:'10px',cursor:'pointer',fontSize: '40px' }}/>
            <InstagramIcon color="error" style={{marginLeft:'10px',cursor:'pointer',fontSize: '40px' }}/>

        </Card.Body>
      </Card>
      <Card style={{marginLeft:'20px',backgroundColor:'#17002f'}} className='card2'>
        <Card.Body>
          <Card.Title style={{color:'white'}}>Sign in</Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:'white',float:'left'}}>Name:</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:'white',float:'left'}}>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{color:'white',float:'left'}}>Message:</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Your Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
     <hr/>
      <p>© Copyright 2025 Menda Naveen - All Rights Received</p>
    </>
  );
}

export default Contact;