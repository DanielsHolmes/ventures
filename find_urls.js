const fs = require('fs');
const content = fs.readFileSync('/Users/santiagomoyano/.gemini/antigravity/brain/f38be59e-810a-46ab-83ff-32d8d716ec2c/.system_generated/steps/9/content.md', 'utf8');

const regex = /https:\/\/framerusercontent\.com\/[^\s"'>)]+/g;
const matches = content.match(regex) || [];
const unique = Array.from(new Set(matches));
console.log('Total URLs found:', unique.length);
unique.forEach(u => console.log(u));
