import { RRType } from '../proto/api_pb'
export type Auth = {
  id: string
  Authenticated: boolean
  loaded: boolean
  token: string
}
export type updateAuth = (id: string, token: string) => void

export type TokenInfo = {
  exp: number
  iat: number
  sub: string
}

export function recordToString(r: RRType) {
  switch (r) {
    case RRType.A:
      return 'A'
    case RRType.AAAA:
      return 'AAAA'
    case RRType.AFSDB:
      return 'AFSDB'
    case RRType.ANY:
      return 'ANY'
    case RRType.ATMA:
      return 'ATMA'
    case RRType.AVC:
      return 'AVC'
    case RRType.AXFR:
      return 'AXFR'
    case RRType.CAA:
      return 'CAA'
    case RRType.CDNSKEY:
      return 'CDNSKEY'
    case RRType.CDS:
      return 'CDS'
    case RRType.CERT:
      return 'CERT'
    case RRType.CNAME:
      return 'CNAME'
    case RRType.CSYNC:
      return 'CSYNC'
    case RRType.DHCID:
      return 'DHCID'
    case RRType.DLV:
      return 'DLV'
    case RRType.DNAME:
      return 'DNAME'
    case RRType.DNSKEY:
      return 'DNSKEY'
    case RRType.DS:
      return 'DS'
    case RRType.EID:
      return 'EID'
    case RRType.EUI48:
      return 'EUI48'
    case RRType.EUI64:
      return 'EUI64'
    case RRType.GID:
      return 'GID'
    case RRType.GPOS:
      return 'GPOS'
    case RRType.HINFO:
      return 'HINFO'
    case RRType.HIP:
      return 'HIP'
    case RRType.ISDN:
      return 'ISDN'
    case RRType.IXFR:
      return 'IXFR'
    case RRType.KEY:
      return 'KEY'
    case RRType.KX:
      return 'KX'
    case RRType.L32:
      return 'L32'
    case RRType.L64:
      return 'L64'
    case RRType.LOC:
      return 'LOC'
    case RRType.LP:
      return 'LP'
    case RRType.MAILA:
      return 'MAILA'
    case RRType.MAILB:
      return 'MAILB'
    case RRType.MB:
      return 'MB'
    case RRType.MD:
      return 'MD'
    case RRType.MF:
      return 'MF'
    case RRType.MG:
      return 'MG'
    case RRType.MINFO:
      return 'MINFO'
    case RRType.MR:
      return 'MR'
    case RRType.MX:
      return 'MX'
    case RRType.NAPTR:
      return 'NAPTR'
    case RRType.NID:
      return 'NID'
    case RRType.NIMLOC:
      return 'NIMLOC'
    case RRType.NINFO:
      return 'NINFO'
    case RRType.NS:
      return 'NS'
    case RRType.NSEC:
      return 'NSEC'
    case RRType.NSEC3:
      return 'NSEC3'
    case RRType.NSEC3PARAM:
      return 'NSEC3PARAM'
    case RRType.NULL:
      return 'NULL'
    case RRType.NXT:
      return 'NXT'
    case RRType.NONE:
      return 'NONE'
    case RRType.OPENPGPKEY:
      return 'OPENPGPKEY'
    case RRType.OPT:
      return 'OPT'
    case RRType.PTR:
      return 'PTR'
    case RRType.PX:
      return 'PX'
    case RRType.RKEY:
      return 'RKEY'
    case RRType.RP:
      return 'RP'
    case RRType.RRSIG:
      return 'RRSIG'
    case RRType.RT:
      return 'RT'
    case RRType.RESERVED:
      return 'RESERVED'
    case RRType.SIG:
      return 'SIG'
    case RRType.SMIMEA:
      return 'SMIMEA'
    case RRType.SOA:
      return 'SOA'
    case RRType.SPF:
      return 'SPF'
    case RRType.SRV:
      return 'SRV'
    case RRType.SSHFP:
      return 'SSHFP'
    case RRType.TA:
      return 'TA'
    case RRType.TALINK:
      return 'TALINK'
    case RRType.TKEY:
      return 'TKEY'
    case RRType.TLSA:
      return 'TLSA'
    case RRType.TSIG:
      return 'TSIG'
    case RRType.TXT:
      return 'TXT'
    case RRType.UID:
      return 'UID'
    case RRType.UINFO:
      return 'UINFO'
    case RRType.UNSPEC:
      return 'UNSPEC'
    case RRType.URI:
      return 'URI'
    case RRType.X25:
      return 'X25'
    case RRType.NSAP_PTR:
      return 'NSAP_PTR'
  }
}