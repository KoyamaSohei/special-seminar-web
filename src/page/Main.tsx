import React, { useContext, useEffect, useState, MouseEvent } from 'react'
import { Redirect } from 'react-router-dom'
import { DomainListWrapper, DomainList } from '../components/DomainList'
import StyledLink from '../components/StyledLink'
import { AuthContext } from '../util/auth'
import { getDomains, initZone, removeZone } from '../util/grpc'

export default function MainPage() {
  const [domains, setDomains] = useState<string[]>([]);
  const { Authenticated, token } = useContext(AuthContext);
  const [zone, setZone] = useState('');
  if (!Authenticated) {
    return (
      <Redirect
        to="/login"
      />
    )
  }
  useEffect(() => {
    (async () => {
      const res = await getDomains(token).catch((e) => console.error(e));
      if (!res) {
        return;
      }
      setDomains(res.domains.map((d) => d.getName()));
    })();
  }, []);

  async function handleInitZone() {
    const res = await initZone(token, zone).catch((e) => console.error(e));
    if (!res) {
      return;
    }
    setZone('');
    const nres = await getDomains(token).catch((e) => console.error(e));
    if (!nres) {
      return;
    }
    setDomains(nres.domains.map((d) => d.getName()));
  }

  async function handleRemoveZone(e: MouseEvent, name: string) {
    e.preventDefault();
    const res = await removeZone(token, name).catch((e) => console.error(e));
    if (!res) {
      return;
    }
    const nres = await getDomains(token).catch((e) => console.error(e));
    if (!nres) {
      return;
    }
    setDomains(nres.domains.map((d) => d.getName()));
  }

  return (
    <DomainListWrapper>
      <input type="text" value={zone} onChange={(e) => setZone(e.target.value)}></input>
      <button onClick={() => handleInitZone()}>add site</button>
      <DomainList>
        {
          domains.map((d) => (
            <li key={d}>
              <StyledLink to={`/domains/${d}`}>
                <div>{d}</div>
                <button onClick={(e) => handleRemoveZone(e, d)}>
                  <svg viewBox="0 0 16 16"><path d="M14.3 3.625L12.375 1.7 8 6.075 3.625 1.7 1.7 3.625 6.075 8 1.7 12.375 3.625 14.3 8 9.925l4.375 4.375 1.925-1.925L9.925 8 14.3 3.625z"></path></svg>
                </button>
              </StyledLink>
            </li>
          ))
        }
      </DomainList>
    </DomainListWrapper>
  )
}