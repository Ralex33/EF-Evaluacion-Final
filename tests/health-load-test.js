import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20, // Number of virtual users
  duration: '30s', // Test duration

  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'], // Less than 1% of requests should fail
  },
};

export default function () {
  const res = http.get('http://app-lb-98109956.us-east-1.elb.amazonaws.com/health'); // Replace with your app's URL

  // Validate response
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is below 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user think time
}