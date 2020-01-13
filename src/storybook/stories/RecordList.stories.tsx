import React, { useState, useEffect } from 'react'
import { RecordList, RecordListWrapper, AddRecord } from '../../components/RecordList'
import { Record, RRType } from '../../proto/api_pb'
import { recordToString } from '../../util/types'

export default {
  title: 'RecordList'
}

export const RecordListComponent = () => {
  const [records, setRecords] = useState<Record.AsObject[]>([]);
  const [rname, setrName] = useState('');
  const [rtype, setrType] = useState(RRType.A);
  const [rttl, setrTtl] = useState(3600);
  const [rcontent, setrContent] = useState('');
  useEffect(() => {
    setRecords([
      {
        name: 'example.com',
        type: RRType.A,
        ttl: 3600,
        content: '12.34.56.78'
      },
      {
        name: 'example2.com',
        type: RRType.CNAME,
        ttl: 1800,
        content: 'example.com'
      },
    ]);
  }, []);

  function handleAdd() {
    setRecords([...records, { name: rname, type: rtype, ttl: rttl, content: rcontent }]);
  }

  function handleRemove(rn: string, rt: RRType, rc: string) {
    setRecords(records.filter((r) => {
      return !(r.name == rn && r.type == rt && r.content == rc);
    }))
  }
  return (
    <RecordListWrapper>
      <AddRecord>
        <input type="text" value={rname} onChange={(e) => setrName(e.target.value)}></input>
        <select value={rtype} onChange={(e) => setrType(Number(e.target.value))} >
          <option selected value={RRType.A}>A</option>
          <option value={RRType.AAAA}>AAAA</option>
          <option value={RRType.AFSDB}>AFSDB</option>
          <option value={RRType.ANY}>ANY</option>
          <option value={RRType.ATMA}>ATMA</option>
          <option value={RRType.AVC}>AVC</option>
          <option value={RRType.AXFR}>AXFR</option>
          <option value={RRType.CAA}>CAA</option>
          <option value={RRType.CDNSKEY}>CDNSKEY</option>
          <option value={RRType.CDS}>CDS</option>
          <option value={RRType.CERT}>CERT</option>
          <option value={RRType.CNAME}>CNAME</option>
          <option value={RRType.CSYNC}>CSYNC</option>
          <option value={RRType.DHCID}>DHCID</option>
          <option value={RRType.DLV}>DLV</option>
          <option value={RRType.DNAME}>DNAME</option>
          <option value={RRType.DNSKEY}>DNSKEY</option>
          <option value={RRType.DS}>DS</option>
          <option value={RRType.EID}>EID</option>
          <option value={RRType.EUI48}>EUI48</option>
          <option value={RRType.EUI64}>EUI64</option>
          <option value={RRType.GID}>GID</option>
          <option value={RRType.GPOS}>GPOS</option>
          <option value={RRType.HINFO}>HINFO</option>
          <option value={RRType.HIP}>HIP</option>
          <option value={RRType.ISDN}>ISDN</option>
          <option value={RRType.IXFR}>IXFR</option>
          <option value={RRType.KEY}>KEY</option>
          <option value={RRType.KX}>KX</option>
          <option value={RRType.L32}>L32</option>
          <option value={RRType.L64}>L64</option>
          <option value={RRType.LOC}>LOC</option>
          <option value={RRType.LP}>LP</option>
          <option value={RRType.MAILA}>MAILA</option>
          <option value={RRType.MAILB}>MAILB</option>
          <option value={RRType.MB}>MB</option>
          <option value={RRType.MD}>MD</option>
          <option value={RRType.MF}>MF</option>
          <option value={RRType.MG}>MG</option>
          <option value={RRType.MINFO}>MINFO</option>
          <option value={RRType.MR}>MR</option>
          <option value={RRType.MX}>MX</option>
          <option value={RRType.NAPTR}>NAPTR</option>
          <option value={RRType.NID}>NID</option>
          <option value={RRType.NIMLOC}>NIMLOC</option>
          <option value={RRType.NINFO}>NINFO</option>
          <option value={RRType.NS}>NS</option>
          <option value={RRType.NSEC}>NSEC</option>
          <option value={RRType.NSEC3}>NSEC3</option>
          <option value={RRType.NSEC3PARAM}>NSEC3PARAM</option>
          <option value={RRType.NULL}>NULL</option>
          <option value={RRType.NXT}>NXT</option>
          <option value={RRType.NONE}>NONE</option>
          <option value={RRType.OPENPGPKEY}>OPENPGPKEY</option>
          <option value={RRType.OPT}>OPT</option>
          <option value={RRType.PTR}>PTR</option>
          <option value={RRType.PX}>PX</option>
          <option value={RRType.RKEY}>RKEY</option>
          <option value={RRType.RP}>RP</option>
          <option value={RRType.RRSIG}>RRSIG</option>
          <option value={RRType.RT}>RT</option>
          <option value={RRType.RESERVED}>RESERVED</option>
          <option value={RRType.SIG}>SIG</option>
          <option value={RRType.SMIMEA}>SMIMEA</option>
          <option value={RRType.SOA}>SOA</option>
          <option value={RRType.SPF}>SPF</option>
          <option value={RRType.SRV}>SRV</option>
          <option value={RRType.SSHFP}>SSHFP</option>
          <option value={RRType.TA}>TA</option>
          <option value={RRType.TALINK}>TALINK</option>
          <option value={RRType.TKEY}>TKEY</option>
          <option value={RRType.TLSA}>TLSA</option>
          <option value={RRType.TSIG}>TSIG</option>
          <option value={RRType.TXT}>TXT</option>
          <option value={RRType.UID}>UID</option>
          <option value={RRType.UINFO}>UINFO</option>
          <option value={RRType.UNSPEC}>UNSPEC</option>
          <option value={RRType.URI}>URI</option>
          <option value={RRType.X25}>X25</option>
          <option value={RRType.NSAP_PTR}>NSAP_PTR</option>
        </select>
        <input type="number" value={rttl} min="0" onChange={(e) => setrTtl(Number(e.target.value))}></input>
        <input type="text" value={rcontent} onChange={(e) => setrContent(e.target.value)}></input>
        <button onClick={handleAdd}>Add</button>
      </AddRecord>
      <RecordList length={records.length}>
        {
          records.map((r) => (
            <>
              <div>{r.name}</div>
              <div>{recordToString(r.type)}</div>
              <div>{r.ttl}</div>
              <div>{r.content}</div>
              <button onClick={() => handleRemove(r.name, r.type, r.content)}>
                <svg viewBox="0 0 16 16"><path d="M14.3 3.625L12.375 1.7 8 6.075 3.625 1.7 1.7 3.625 6.075 8 1.7 12.375 3.625 14.3 8 9.925l4.375 4.375 1.925-1.925L9.925 8 14.3 3.625z"></path></svg>
              </button>
            </>
          ))
        }
      </RecordList>
    </RecordListWrapper>
  )

}