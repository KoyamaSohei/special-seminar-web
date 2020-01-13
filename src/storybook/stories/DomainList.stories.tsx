import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { DomainListWrapper, DomainList } from '../../components/DomainList'
import StyledLink from '../../components/StyledLink'

export default {
  title: 'Domain List',
};

export const DomainListComponent = () => {
  const domains = ['example.com', 'example2.com', 'example3.com'];
  function handle() {
    console.log('button clicked')
  }
  return (
    <Router>
      <DomainListWrapper>
        <DomainList>
          {
            domains.map((d) => {
              return (
                <li key={d}>
                  <StyledLink to={`/domains/${d}`}>
                    <div>{d}</div>
                    <button onClick={() => handle()}>
                      <svg viewBox="0 0 16 16"><path d="M14.3 3.625L12.375 1.7 8 6.075 3.625 1.7 1.7 3.625 6.075 8 1.7 12.375 3.625 14.3 8 9.925l4.375 4.375 1.925-1.925L9.925 8 14.3 3.625z"></path></svg>
                    </button>
                  </StyledLink>
                </li>
              )
            })
          }
        </DomainList>
      </DomainListWrapper>
    </Router>

  )
}
