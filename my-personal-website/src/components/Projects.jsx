import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,  Row, Col, Container} from 'react-bootstrap';
import './Projects.css'
function Projects(){
    const cardData = [
        { title: 'Fit Life App', content: 'Günlük alınan ve harcanan kalorileri hesaplayan mobil uygulama', image:'/img/fit-life-app.jpg'},
        { title: 'Guess the Country', content: 'Ülkeleri haritadaki konumuna göre tahmin edebileceğiniz mobil uygulama',image: '/img/guess-the-country.jpg'  },
        { title: 'Hesap Makiesi', content: 'HTML ve JavaScriptle oluşturduğum hesap makinesi' ,image: '/img/hesap-makinesi.jpg' },
        { title: 'Sudoku', content: 'HTML ve CSS kullanarak yaptığım sudoku tasarımı',image: '/img/sudoku.jpg' },
        { title: 'Image Gallery', content: 'Sayfa her yenilendğinde yeni resimler yüklenen web sitesi',image: '/img/image-gallery.jpg' },
        { title: 'Hotel Site', content: 'Bir otel için oluşturduğum web sitesi tasarımı',image: '/img/hotel-site.jpg' },
        { title: 'Awesome Blog', content: 'Kişisel blog olarak kullanılabilecek olan web sitesi tasarımı',image: '/img/awesome-blog.jpg' },
        { title: 'E-ticaret Sitesi', content: 'E-ticaret için tasarlamış olduğum web sitesi',image: '/img/e-commerce-site.jpg' },
      ];
    return(<>
        <div id="projects">
        <div className="project-header"><h1>Projects</h1></div>
        <div className="line"></div>
        
        <Row>
        {cardData.map((project, index) => (
          <Col key={index} xs={12} md={4} lg={3}>
            <div className="card-container">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.image} className="custom-card-image"/>
                <Card.Body className="card-content">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.content}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      </div>
    
    </>)
}
export default  Projects