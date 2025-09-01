#!/usr/bin/env node

const fs = require('fs');

// Read the entire JSON file
const filePath = '/Users/asukachikaru/Projects/sanctum-heroes/data/hero.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log(`Found ${data.length} heroes to process`);

// Function to convert old ability format to new stats array format
function convertAbilityToStatsFormat(ability) {
  const convertedAbility = {
    type: ability.type,
    name: ability.name,
    icon: ability.icon,
    description: ability.description,
    effect: ability.effect,
    stats: []
  };

  // Helper function to extract values from level-based arrays
  function extractLevelValues(levelArray) {
    if (Array.isArray(levelArray)) {
      return levelArray.map(item => item.value);
    }
    return levelArray;
  }

  // Convert common properties to stats format
  if (ability.manaCost !== undefined) {
    convertedAbility.stats.push({
      label: "法力消耗",
      value: ability.manaCost
    });
  }

  if (ability.damage !== undefined) {
    convertedAbility.stats.push({
      label: "傷害",
      value: extractLevelValues(ability.damage)
    });
  }

  if (ability.healAmount !== undefined) {
    convertedAbility.stats.push({
      label: "治療量",
      value: extractLevelValues(ability.healAmount)
    });
  }

  if (ability.cooldown !== undefined) {
    convertedAbility.stats.push({
      label: "冷卻時間",
      value: extractLevelValues(ability.cooldown)
    });
  }

  if (ability.duration !== undefined) {
    convertedAbility.stats.push({
      label: "持續時間",
      value: extractLevelValues(ability.duration)
    });
  }

  if (ability.range !== undefined) {
    convertedAbility.stats.push({
      label: "射程",
      value: ability.range
    });
  }

  if (ability.radius !== undefined) {
    convertedAbility.stats.push({
      label: "影響範圍",
      value: ability.radius
    });
  }

  if (ability.damageRadius !== undefined) {
    convertedAbility.stats.push({
      label: "傷害範圍",
      value: ability.damageRadius
    });
  }

  if (ability.bounceRadius !== undefined) {
    convertedAbility.stats.push({
      label: "彈跳範圍",
      value: ability.bounceRadius
    });
  }

  if (ability.bounceCount !== undefined) {
    convertedAbility.stats.push({
      label: "彈跳次數",
      value: extractLevelValues(ability.bounceCount)
    });
  }

  if (ability.healReduction !== undefined) {
    convertedAbility.stats.push({
      label: "治療遞減",
      value: ability.healReduction
    });
  }

  if (ability.damageInterval !== undefined) {
    convertedAbility.stats.push({
      label: "傷害間隔",
      value: ability.damageInterval
    });
  }

  if (ability.triggerChance !== undefined) {
    convertedAbility.stats.push({
      label: "觸發機率",
      value: extractLevelValues(ability.triggerChance)
    });
  }

  if (ability.movementSpeed !== undefined) {
    convertedAbility.stats.push({
      label: "移動速度",
      value: extractLevelValues(ability.movementSpeed)
    });
  }

  if (ability.attackSpeed !== undefined) {
    convertedAbility.stats.push({
      label: "攻擊速度",
      value: extractLevelValues(ability.attackSpeed)
    });
  }

  if (ability.armor !== undefined) {
    convertedAbility.stats.push({
      label: "護甲",
      value: extractLevelValues(ability.armor)
    });
  }

  if (ability.magicResistance !== undefined) {
    convertedAbility.stats.push({
      label: "魔法抗性",
      value: extractLevelValues(ability.magicResistance)
    });
  }

  if (ability.damageReduction !== undefined) {
    convertedAbility.stats.push({
      label: "傷害減免",
      value: extractLevelValues(ability.damageReduction)
    });
  }

  if (ability.criticalChance !== undefined) {
    convertedAbility.stats.push({
      label: "暴擊機率",
      value: extractLevelValues(ability.criticalChance)
    });
  }

  if (ability.criticalMultiplier !== undefined) {
    convertedAbility.stats.push({
      label: "暴擊倍率",
      value: extractLevelValues(ability.criticalMultiplier)
    });
  }

  if (ability.castTime !== undefined) {
    convertedAbility.stats.push({
      label: "施法時間",
      value: extractLevelValues(ability.castTime)
    });
  }

  if (ability.slowAmount !== undefined) {
    convertedAbility.stats.push({
      label: "減速效果",
      value: extractLevelValues(ability.slowAmount)
    });
  }

  if (ability.stunDuration !== undefined) {
    convertedAbility.stats.push({
      label: "暈眩時間",
      value: extractLevelValues(ability.stunDuration)
    });
  }

  if (ability.silenceDuration !== undefined) {
    convertedAbility.stats.push({
      label: "沉默時間",
      value: extractLevelValues(ability.silenceDuration)
    });
  }

  if (ability.pushDistance !== undefined) {
    convertedAbility.stats.push({
      label: "推進距離",
      value: extractLevelValues(ability.pushDistance)
    });
  }

  if (ability.manaRestore !== undefined) {
    convertedAbility.stats.push({
      label: "法力恢復",
      value: extractLevelValues(ability.manaRestore)
    });
  }

  if (ability.healthRestore !== undefined) {
    convertedAbility.stats.push({
      label: "生命恢復",
      value: extractLevelValues(ability.healthRestore)
    });
  }

  if (ability.shieldAmount !== undefined) {
    convertedAbility.stats.push({
      label: "護盾量",
      value: extractLevelValues(ability.shieldAmount)
    });
  }

  if (ability.bonusDamage !== undefined) {
    convertedAbility.stats.push({
      label: "額外傷害",
      value: extractLevelValues(ability.bonusDamage)
    });
  }

  if (ability.damageBonus !== undefined) {
    convertedAbility.stats.push({
      label: "傷害加成",
      value: extractLevelValues(ability.damageBonus)
    });
  }

  if (ability.attackRange !== undefined) {
    convertedAbility.stats.push({
      label: "攻擊距離",
      value: extractLevelValues(ability.attackRange)
    });
  }

  if (ability.energyGain !== undefined) {
    convertedAbility.stats.push({
      label: "能量獲得",
      value: extractLevelValues(ability.energyGain)
    });
  }

  if (ability.lifeSteal !== undefined) {
    convertedAbility.stats.push({
      label: "生命吸取",
      value: extractLevelValues(ability.lifeSteal)
    });
  }

  if (ability.maxTargets !== undefined) {
    convertedAbility.stats.push({
      label: "最大目標數",
      value: extractLevelValues(ability.maxTargets)
    });
  }

  if (ability.projectileSpeed !== undefined) {
    convertedAbility.stats.push({
      label: "彈射物速度",
      value: extractLevelValues(ability.projectileSpeed)
    });
  }

  if (ability.charges !== undefined) {
    convertedAbility.stats.push({
      label: "使用次數",
      value: extractLevelValues(ability.charges)
    });
  }

  if (ability.chargeReplenishTime !== undefined) {
    convertedAbility.stats.push({
      label: "回合補充時間",
      value: extractLevelValues(ability.chargeReplenishTime)
    });
  }

  return convertedAbility;
}

// Check if hero needs conversion (has abilities without stats format)
function needsConversion(hero) {
  if (!hero.abilities || hero.abilities.length === 0) {
    return false;
  }
  
  // Check if any ability doesn't have the stats array format
  return hero.abilities.some(ability => !ability.stats);
}

// Process each hero
let convertedCount = 0;
for (let i = 0; i < data.length; i++) {
  const hero = data[i];
  
  if (needsConversion(hero)) {
    console.log(`Converting hero: ${hero.name.en || hero.name.zh}`);
    
    // Convert each ability
    for (let j = 0; j < hero.abilities.length; j++) {
      if (!hero.abilities[j].stats) {
        hero.abilities[j] = convertAbilityToStatsFormat(hero.abilities[j]);
      }
    }
    
    convertedCount++;
  }
}

console.log(`Converted ${convertedCount} heroes`);

// Write the updated data back to file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated hero.json file');