import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from '../util/auth'
import { getDomains } from '../util/grpc'

export default function MainPage() {
  const [domains, setDomains] = useState<string[]>([]);
  const { Authenticated, token } = useContext(AuthContext);
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
        console.log(res);
        return;
      }
      setDomains(res.domains.map((d) => d.getName()));
    })();
  }, []);
  return (
    <ul>
        {
          domains.map((d) => (
            <li key={d}>
              <Link to={`/domains/${d}`}>{d}</Link>
            </li>
          ))
        }
    </ul>
  )
}