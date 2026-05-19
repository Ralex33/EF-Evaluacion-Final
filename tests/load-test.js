import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://app-lb-98109956.us-east-1.elb.amazonaws.com/health');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}