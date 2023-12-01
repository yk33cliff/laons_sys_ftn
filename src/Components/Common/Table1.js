import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Table = ({ data }) => {
    return (
     <>
     <div>
     {Array.isArray(data) && data.map((item) => (
      <Link to={`/clients/client-profile/${item.client_id }`}>
       <Card  border='primary' key={item.client_id} className='mb-2'>
       <Card.Body>
       <Card.Title>
       {item.name}</Card.Title>
       {item.email}
        </Card.Body>
     </Card>
     </Link>
          ))}
     </div>
          
      </>
    );
    
  };
  
  export default Table;
