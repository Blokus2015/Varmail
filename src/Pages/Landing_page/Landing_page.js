import React from 'react';
import './landing_page.css';
const landing_page = () => {
  class Landing_page extends Component{
    state = {
      entrybox: [
        {placeholder: 'Name'}
      ],
    }
    return (
      <div className="Landing_page">
        <header className="Landing-page-header">
          <p>VarMail</p>
        </header>

        <body>

          <p>It's hard to send personlized emails to your whole team. We think we can help.</p>
            <div className="Landing-page-intro">
              <div>
                <img src={office_pic} alt="Office workers"></img>
              </div>
            </div>

          <div>
            <p>The internet's first drag and drop email service.</p>
            <Entrybox placeholder="Name" />
            <Entrybox placeholder="Email" />
            <Entrybox placeholder="Password" />
            <Entrybox placeholder="Confirm Password" />
          </div>

        </body>
      </div>
    )
  }}};

export default landing_page;
