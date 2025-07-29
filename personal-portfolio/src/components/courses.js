import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Courses() {
  return (
    <section
      id="courses"
      style={{
        padding: '4rem 0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '2rem',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          style={{
            width: '100%',
            maxWidth: '800px',
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
          }}
        >
          <Card.Header
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              borderBottom: '1px solid white',
            }}
          >
            Courses Taken:
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item
              active
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 249 Object Oriented Programming II (Java)
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              SOEN 287 Web Development
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 352 Data Structures and Algorithms
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 346 Operating Systems
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 353 Databases
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 348 Principles of Programming Languages
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 335 Introduction to Theoretical Computer Science
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              ENCS 282 Technical Writing and Communication
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '1.25rem',
              }}
            >
              COMP 371 Graphics
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </section>
  );
}

export default Courses;
