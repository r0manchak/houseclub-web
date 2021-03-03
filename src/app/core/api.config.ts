// App/API Information
export const API_URL = 'https://www.clubhouseapi.com/api';
const API_BUILD_ID = '304';
const API_BUILD_VERSION = '0.1.28';
const API_UA = `clubhouse/${API_BUILD_ID} (iPhone; iOS 14.4; Scale/2.00)`;
const API_UA_STATIC = 'Clubhouse/{API_BUILD_ID} CFNetwork/1220.1 Darwin/20.3.0';

// Some useful information for commmunication
const PUBNUB_PUB_KEY = 'pub-c-6878d382-5ae6-4494-9099-f930f938868b';
const PUBNUB_SUB_KEY = 'sub-c-a4abea84-9ca3-11ea-8e71-f2b83ac9263d';

const TWITTER_ID = 'NyJhARWVYU1X3qJZtC2154xSI';
const TWITTER_SECRET = 'ylFImLBFaOE362uwr4jut8S8gXGWh93S1TUKbkfh7jDIPse02o';

export const AGORA_KEY = '938de3e8055e42b281bb8c6f69c21f78';
const SENTRY_KEY = '5374a416cd2d4009a781b49d1bd9ef44@o325556.ingest.sentry.io/5245095';
const INSTABUG_KEY = '4e53155da9b00728caa5249f2e35d6b3';
const AMPLITUDE_KEY = '9098a21a950e7cb0933fb5b30affe5be';

// Useful header information
export const API_HEADERS = {
  'CH-Languages': 'en-JP,ja-JP',
  'CH-Locale': 'en_JP',
  Accept: 'application/json',
  'Accept-Language': 'en-JP;q=1, ja-JP;q=0.9',
  // 'Accept-Encoding': 'gzip, deflate',
  'CH-AppBuild': `${API_BUILD_ID}`,
  'CH-AppVersion': `${API_BUILD_VERSION}`,
  // 'User-Agent': `${API_UA}`,
  // Connection: 'close',
  'Content-Type': 'application/json; charset=utf-8',
  // Cookie: `__cfduid=${generateToken(21)}${Math.ceil(Math.random() * 10 % 10)}`
};

function generateToken(n) {
  const chars = 'abcdef0123456789';
  let token = '';
  for (let i = 0; i < n; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}
