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
import { useState } from 'react';
function Contact() {
  const[name,setName] =useState();
  const[email,setEmali]=useState();
  const[message,setMessage]=useState();
  const handleSubmit=(e)=>{
    console.log(name,message,email)
    e.preventDefault()
  }
  return (
    <div id='contact' className='groupcont'>
    <CardGroup style={{backgroundColor: '#020028'}}>
        <div className='contact' >
          <h1 className='ctitle'>Contact</h1>
          <p className='contp'>I am thrilled that you are interested in getting in touch. Whether you have a project in mind, a question to ask, or simply want to say hello, I would love to hear from you. Feel free to reach out through any of the following methods.</p>
        </div>
      <Card style={{backgroundColor:'#17002f'}} className='card1'>
        <Card.Body className='cardcontact'>
          <Card.Title style={{color:'white',fontSize:'18px'}}>I'M ALSO ON SOCIAL NETWORKS</Card.Title>

          <Card.Text style={{color:'white'}}><HomeIcon color="secondary" style={{float:'left'}} />Address Hyderabad, India</Card.Text>
          <Card.Text style={{color:'white'}}><PhoneIcon color='primary' style={{float:'left'}}/>Let's Talk: +91 9121939409</Card.Text>
          <Card.Text style={{color:'white'}}><EmailIcon sx={{ color: pink[500] ,float:'left'}}/>Email:naveen.menda96@gmail.com</Card.Text>
          <a href="https://www.github.com/Naveen096-ddd" target="_blank"><GitHubIcon className='iconcont' color="success"style={{cursor:'pointer',fontSize: '40px' }}/></a>
          <a href="https://www.linkedin.com/" target="_blank"><LinkedInIcon className='iconcont' color="info" style={{marginLeft:'15px',cursor:'pointer',fontSize: '40px' }}/></a>
          <a href='https://www.instagram.com'><InstagramIcon className='iconcont' color="error" style={{marginLeft:'15px',cursor:'pointer',fontSize: '40px' }}/></a>

        </Card.Body>
      </Card>
      <Card style={{marginLeft:'20px',backgroundColor:'#17002f'}} className='card2'>
        <Card.Body>
          <Card.Title className='contitle'>Sign in</Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:'white',float:'left'}}>Name:</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:'white',float:'left'}}>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmali(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{color:'white',float:'left'}}>Message:</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                </Form.Group>
                <Button style={{backgroundColor:'#181818'}} type="submit" className='contbtn'>
                    Submit
                </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
     <hr/>
      <p>© Copyright 2025 Menda Naveen - All Rights Received</p>
    </div>
  );
}

export default Contact;