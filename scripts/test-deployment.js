#!/usr/bin/env node

/**
 * Deployment Test Script for ViewDeletedReddit
 * Tests critical functionality before deployment
 */

const http = require('http');
const https = require('https');

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

// Test cases
const tests = [
  {
    name: 'Homepage loads',
    path: '/',
    expectedStatus: 200,
    expectedContent: 'ViewDeletedReddit'
  },
  {
    name: 'API endpoint responds',
    path: '/api/lookup',
    method: 'POST',
    body: JSON.stringify({ query: 'testuser', type: 'username' }),
    headers: { 'Content-Type': 'application/json' },
    expectedStatus: 200,
    expectedContent: 'success'
  },
  {
    name: 'Blog page loads',
    path: '/blog',
    expectedStatus: 200,
    expectedContent: 'Ultimate Guide'
  },
  {
    name: 'Guide page loads',
    path: '/guide',
    expectedStatus: 200,
    expectedContent: 'Ultimate 2025 Guide'
  },
  {
    name: 'Sitemap generates',
    path: '/sitemap.xml',
    expectedStatus: 200,
    expectedContent: 'urlset'
  },
  {
    name: 'Robots.txt exists',
    path: '/robots.txt',
    expectedStatus: 200,
    expectedContent: 'User-agent'
  }
];

function makeRequest(test) {
  return new Promise((resolve, reject) => {
    const url = new URL(test.path, BASE_URL);
    const isHttps = url.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method: test.method || 'GET',
      headers: test.headers || {}
    };

    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data,
          headers: res.headers
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (test.body) {
      req.write(test.body);
    }
    
    req.end();
  });
}

async function runTest(test) {
  try {
    console.log(`🧪 Testing: ${test.name}`);
    
    const response = await makeRequest(test);
    
    // Check status code
    if (response.statusCode !== test.expectedStatus) {
      throw new Error(`Expected status ${test.expectedStatus}, got ${response.statusCode}`);
    }
    
    // Check content
    if (test.expectedContent && !response.data.includes(test.expectedContent)) {
      throw new Error(`Expected content "${test.expectedContent}" not found in response`);
    }
    
    console.log(`✅ ${test.name} - PASSED`);
    return true;
    
  } catch (error) {
    console.log(`❌ ${test.name} - FAILED: ${error.message}`);
    return false;
  }
}

async function runAllTests() {
  console.log(`🚀 Starting deployment tests for ${BASE_URL}\n`);
  
  let passed = 0;
  let failed = 0;
  
  for (const test of tests) {
    const result = await runTest(test);
    if (result) {
      passed++;
    } else {
      failed++;
    }
    console.log(''); // Empty line for readability
  }
  
  console.log('📊 Test Results:');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Success Rate: ${Math.round((passed / (passed + failed)) * 100)}%`);
  
  if (failed > 0) {
    console.log('\n⚠️  Some tests failed. Please review before deploying.');
    process.exit(1);
  } else {
    console.log('\n🎉 All tests passed! Ready for deployment.');
    process.exit(0);
  }
}

// Run tests
runAllTests().catch((error) => {
  console.error('💥 Test runner failed:', error);
  process.exit(1);
});
