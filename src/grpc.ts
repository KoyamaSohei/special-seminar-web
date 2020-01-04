import { CreateAccountRequest, CreateAccountResponse, getTokenRequest, ResponseStatus, Domain, GetRecordsRequest, Record, RRType, AddRecordRequest, InitZoneRequest, RemoveRecordRequest, RemoveZoneRequest, Ping } from './proto/api_pb'
import { PdnsServiceClient } from './proto/ApiServiceClientPb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

export const client = new PdnsServiceClient(`http://${window.location.hostname}/grpc`);

export function createAccount(email: string, pass: string): Promise<{ status: CreateAccountResponse.Status, token: string }> {
  const req = new CreateAccountRequest();
  req.setEmail(email);
  req.setPassword(pass);
  return new Promise((resolve, reject) => {
    client.createAccount(req, {}, (err, res) => {
      if (!!err) {
        reject(err)
      }
      resolve({
        status: res.getStatus(),
        token: res.getToken()
      });
    })
  })
}

export function getToken(email: string, pass: string): Promise<{ status: ResponseStatus, token: string }> {
  const req = new getTokenRequest();
  req.setEmail(email);
  req.setPassword(pass);
  return new Promise((resolve, reject) => {
    client.getToken(req, {}, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus(),
        token: res.getToken()
      })
    })
  })
}

export function initZone(token: string, zone: string): Promise<{ status: ResponseStatus }> {
  const req = new InitZoneRequest();
  req.setDomain(zone);
  return new Promise((resolve, reject) => {
    client.initZone(req, { token }, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus()
      })
    })
  })
}

export function removeZone(token: string, zone: string): Promise<{ status: ResponseStatus }> {
  const req = new RemoveZoneRequest();
  req.setDomain(zone);
  return new Promise((resolve, reject) => {
    client.removeZone(req, { token }, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus()
      })
    })
  })
}

export function getDomains(token: string): Promise<{ status: ResponseStatus, domains: Domain[] }> {
  const req = new Empty();
  console.log(token);
  return new Promise((resolve, reject) => {
    client.getDomains(req, { token }, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus(),
        domains: res.getDomainsList()
      })
    })
  })

}

export function getRecords(token: string, origin: string): Promise<{ status: ResponseStatus, records: Record[] }> {
  const req = new GetRecordsRequest();
  req.setOrigin(origin);
  return new Promise((resolve, reject) => {
    client.getRecords(req, { token }, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus(),
        records: res.getRecordsList()
      })
    })
  })
}

export function addRecord(token: string, name: string, origin: string, type: RRType, ttl: number, content: string): Promise<{ status: ResponseStatus }> {
  const req = new AddRecordRequest();
  req.setName(name);
  req.setOrigin(origin);
  req.setType(type);
  req.setTtl(ttl);
  req.setContent(content);
  return new Promise((resolve, reject) => {
    client.addRecord(req, { token }, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus(),
      })
    })
  })
}

export function removeRecord(token: string, name: string, origin: string, type: RRType, content: string): Promise<{ status: ResponseStatus }> {
  const req = new RemoveRecordRequest();
  req.setName(name);
  req.setOrigin(origin);
  req.setType(type);
  req.setContent(content);
  return new Promise((resolve, reject) => {
    client.removeRecord(req, { token }, (err, res) => {
      if (!!err) {
        reject(err);
      }
      resolve({
        status: res.getStatus(),
      })
    })
  })
}

export function ping(text: string): Promise<{ text: string }>  {
  const req  = new Ping();
  req.setText(text);
  return new Promise((resolve, reject) => {
    client.ping(req,{},(err,res) => {
      if(!!err) {
        reject(err);
      }
      resolve({
        text: res.getText(),
      })
    })
  })
}