import react from 'react';
import './Org_card.css';
import Button from 'react-bootstrap/Button';

const Org_card = (props) => {
  return (
    <>
      <div className="Card_base">
        <h3 className="Header_text">Harvard Venture Capital Group</h3>
        <p className="Sub_text">0 members</p>
        <Button id="orgButton" variant="dark">View Organization</Button>
    </div>
    </>
  )
}

export default Org_card;
