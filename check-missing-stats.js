import { readFileSync, writeFileSync } from 'fs';
import { readdirSync } from 'fs';
import path from 'path';

const ARCHIVE_PATH = '/Users/asukachikaru/Projects/sanctum-heroes/archive_utf8/hero';
const JSON_PATH = '/Users/asukachikaru/Projects/sanctum-heroes/data/hero.json';

function extractStatsFromHtml(htmlContent) {
  const stats = [];
  
  // Extract ability sections using regex
  const abilityMatches = htmlContent.match(/<font color="#00FFFF">([^<]+)<\/font><br>([^<]*)<\/font>/g);
  if (!abilityMatches) return stats;
  
  // Extract stat values like 法力花費：XX, 傷害：XX/XX/XX/XX etc
  const statRegex = /<font[^>]*color="#FFFF00"[^>]*>([^<]+)<\/font><[^>]*>([^<]*)<\/[^>]*>/g;
  let match;
  while ((match = statRegex.exec(htmlContent)) !== null) {
    const label = match[1].replace('：', '');
    const value = match[2].replace(/<[^>]*>/g, '').trim();
    if (value && !value.includes('持續效果') && !value.includes('被動效果')) {
      stats.push({ label, value });
    }
  }
  
  return stats;
}

function findHeroInJson(heroData, heroNameZh) {
  return heroData.findIndex(hero => hero.name.zh === heroNameZh);
}

function compareAndFixStats(archiveStats, jsonHero) {
  console.log(`Checking ${jsonHero.name.zh} (${jsonHero.name.en})`);
  let hasChanges = false;
  
  // This is a simplified comparison - in practice you'd need more sophisticated parsing
  // For now, let's just log what we found
  console.log(`  Archive stats found: ${archiveStats.length}`);
  console.log(`  JSON abilities: ${jsonHero.abilities.length}`);
  
  return hasChanges;
}

try {
  // Read JSON data
  const jsonData = JSON.parse(readFileSync(JSON_PATH, 'utf8'));
  
  // Process alliance heroes
  const allianceFiles = readdirSync(path.join(ARCHIVE_PATH, 'al')).filter(f => f.endsWith('.htm'));
  
  console.log(`Processing ${allianceFiles.length} alliance heroes...`);
  
  for (const filename of allianceFiles) {
    const htmlPath = path.join(ARCHIVE_PATH, 'al', filename);
    const htmlContent = readFileSync(htmlPath, 'utf8');
    
    // Extract hero name from title tag
    const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
    if (!titleMatch) continue;
    
    const heroNameZh = titleMatch[1];
    
    // Find corresponding hero in JSON
    const heroIndex = findHeroInJson(jsonData, heroNameZh);
    if (heroIndex === -1) {
      console.log(`Hero not found in JSON: ${heroNameZh}`);
      continue;
    }
    
    // Extract and compare stats
    const archiveStats = extractStatsFromHtml(htmlContent);
    const hasChanges = compareAndFixStats(archiveStats, jsonData[heroIndex]);
    
    if (hasChanges) {
      // Write back to JSON file
      writeFileSync(JSON_PATH, JSON.stringify(jsonData, null, 2));
      console.log(`Updated ${heroNameZh}`);
    }
  }
  
  console.log('Done processing alliance heroes.');
  
} catch (error) {
  console.error('Error:', error);
}