import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Context } from "../../StateProvider";

const items: string[] = [
  "Normal Logs",
  "Oak Logs",
  "Willow Logs",
  "Teak Logs",
  "Maple Logs",
  "Mahogany Logs",
  "Yew Logs",
  "Magic Logs",
  "Redwood Logs",
  "Raw Shrimp",
  "Raw Sardine",
  "Raw Herring",
  "Raw Trout",
  "Raw Salmon",
  "Raw Lobster",
  "Raw Swordfish",
  "Raw Crab",
  "Raw Shark",
  "Raw Cave Fish",
  "Raw Manta Ray",
  "Raw Whale",
  "Shrimp",
  "Sardine",
  "Herring",
  "Trout",
  "Salmon",
  "Lobster",
  "Swordfish",
  "Crab",
  "Shark",
  "Cave Fish",
  "Manta Ray",
  "Whale",
  "Burnt Shrimp",
  "Burnt Sardine",
  "Burnt Herring",
  "Burnt Trout",
  "Burnt Salmon",
  "Burnt Lobster",
  "Burnt Swordfish",
  "Burnt Crab",
  "Burnt Shark",
  "Burnt Cave Fish",
  "Burnt Manta Ray",
  "Burnt Whale",
  "Copper Ore",
  "Tin Ore",
  "Iron Ore",
  "Coal Ore",
  "Silver Ore",
  "Gold Ore",
  "Mithril Ore",
  "Adamantite Ore",
  "Runite Ore",
  "Dragonite Ore",
  "Bronze Bar",
  "Iron Bar",
  "Steel Bar",
  "Gold Bar",
  "Mithril Bar",
  "Adamantite Bar",
  "Runite Bar",
  "Dragonite Bar",
  "Bronze Dagger",
  "Bronze Sword",
  "Bronze Battleaxe",
  "Bronze 2H Sword",
  "Bronze Helmet",
  "Bronze Boots",
  "Bronze Platelegs",
  "Bronze Platebody",
  "Iron Dagger",
  "Iron Sword",
  "Iron Battleaxe",
  "Iron 2H Sword",
  "Iron Helmet",
  "Iron Boots",
  "Iron Platelegs",
  "Iron Platebody",
  "Steel Dagger",
  "Steel Sword",
  "Steel Battleaxe",
  "Steel 2H Sword",
  "Steel Helmet",
  "Steel Boots",
  "Steel Platelegs",
  "Steel Platebody",
  "Mithril Dagger",
  "Mithril Sword",
  "Mithril Battleaxe",
  "Mithril 2H Sword",
  "Mithril Helmet",
  "Mithril Boots",
  "Mithril Platelegs",
  "Mithril Platebody",
  "Adamant Dagger",
  "Adamant Sword",
  "Adamant Battleaxe",
  "Adamant 2H Sword",
  "Adamant Helmet",
  "Adamant Boots",
  "Adamant Platelegs",
  "Adamant Platebody",
  "Rune Dagger",
  "Rune Sword",
  "Rune Battleaxe",
  "Rune 2H Sword",
  "Rune Helmet",
  "Rune Boots",
  "Rune Platelegs",
  "Rune Platebody",
  "Dragon Dagger",
  "Dragon Sword",
  "Dragon Battleaxe",
  "Dragon 2H Sword",
  "Dragon Helmet",
  "Dragon Boots",
  "Dragon Platelegs",
  "Dragon Platebody",
  "Bird Nest",
  "Treasure Chest",
  "Bronze Shield",
  "Iron Shield",
  "Steel Shield",
  "Mithril Shield",
  "Adamant Shield",
  "Rune Shield",
  "Dragon Shield",
  "Topaz",
  "Sapphire",
  "Ruby",
  "Emerald",
  "Diamond",
  "Silver Bar",
  "Black Dagger",
  "Black Sword",
  "Black Battleaxe",
  "Black 2H Sword",
  "Black Helmet",
  "Black Boots",
  "Black Platelegs",
  "Black Platebody",
  "Black Shield",
  "Potato Seeds",
  "Onion Seeds",
  "Cabbage Seeds",
  "Tomato Seeds",
  "Sweetcorn Seeds",
  "Strawberry Seeds",
  "Watermelon Seeds",
  "Snape Grass Seeds",
  "Potatoes",
  "Onions",
  "Cabbage",
  "Tomatoes",
  "Sweetcorn",
  "Strawberries",
  "Watermelons",
  "Snape Grass",
  "Compost",
  "Oak Tree Seeds",
  "Willow Tree Seeds",
  "Maple Tree Seeds",
  "Yew Tree Seeds",
  "Magic Tree Seeds",
  "(S) Bronze Helmet",
  "(S) Bronze Boots",
  "(S) Bronze Platelegs",
  "(S) Bronze Platebody",
  "(S) Bronze Shield",
  "(S) Iron Helmet",
  "(S) Iron Boots",
  "(S) Iron Platelegs",
  "(S) Iron Platebody",
  "(S) Iron Shield",
  "(S) Steel Helmet",
  "(S) Steel Boots",
  "(S) Steel Platelegs",
  "(S) Steel Platebody",
  "(S) Steel Shield",
  "(S) Black Helmet",
  "(S) Black Boots",
  "(S) Black Platelegs",
  "(S) Black Platebody",
  "(S) Black Shield",
  "(S) Mithril Helmet",
  "(S) Mithril Boots",
  "(S) Mithril Platelegs",
  "(S) Mithril Platebody",
  "(S) Mithril Shield",
  "(S) Adamant Helmet",
  "(S) Adamant Boots",
  "(S) Adamant Platelegs",
  "(S) Adamant Platebody",
  "(S) Adamant Shield",
  "(S) Rune Helmet",
  "(S) Rune Boots",
  "(S) Rune Platelegs",
  "(S) Rune Platebody",
  "(S) Rune Shield",
  "(S) Dragon Helmet",
  "(S) Dragon Boots",
  "(S) Dragon Platelegs",
  "(S) Dragon Platebody",
  "(S) Dragon Shield",
  "(G) Bronze Helmet",
  "(G) Bronze Boots",
  "(G) Bronze Platelegs",
  "(G) Bronze Platebody",
  "(G) Bronze Shield",
  "(G) Iron Helmet",
  "(G) Iron Boots",
  "(G) Iron Platelegs",
  "(G) Iron Platebody",
  "(G) Iron Shield",
  "(G) Steel Helmet",
  "(G) Steel Boots",
  "(G) Steel Platelegs",
  "(G) Steel Platebody",
  "(G) Steel Shield",
  "(G) Black Helmet",
  "(G) Black Boots",
  "(G) Black Platelegs",
  "(G) Black Platebody",
  "(G) Black Shield",
  "(G) Mithril Helmet",
  "(G) Mithril Boots",
  "(G) Mithril Platelegs",
  "(G) Mithril Platebody",
  "(G) Mithril Shield",
  "(G) Adamant Helmet",
  "(G) Adamant Boots",
  "(G) Adamant Platelegs",
  "(G) Adamant Platebody",
  "(G) Adamant Shield",
  "(G) Rune Helmet",
  "(G) Rune Boots",
  "(G) Rune Platelegs",
  "(G) Rune Platebody",
  "(G) Rune Shield",
  "(G) Dragon Helmet",
  "(G) Dragon Boots",
  "(G) Dragon Platelegs",
  "(G) Dragon Platebody",
  "(G) Dragon Shield",
  "Amulet of Fishing",
  "Amulet of Strength",
  "Amulet of Accuracy",
  "Amulet of Defence",
  "Amulet of Glory",
  "Normal Shortbow",
  "Oak Shortbow",
  "Willow Shortbow",
  "Maple Shortbow",
  "Yew Shortbow",
  "Magic Shortbow",
  "Normal Longbow",
  "Oak Longbow",
  "Willow Longbow",
  "Maple Longbow",
  "Yew Longbow",
  "Magic Longbow",
  "Bronze Arrows",
  "Iron Arrows",
  "Steel Arrows",
  "Mithril Arrows",
  "Adamant Arrows",
  "Rune Arrows",
  "Dragon Arrows",
  "Bronze Arrowtips",
  "Iron Arrowtips",
  "Steel Arrowtips",
  "Mithril Arrowtips",
  "Adamant Arrowtips",
  "Rune Arrowtips",
  "Dragon Arrowtips",
  "Arrow Shafts",
  "Headless Arrows",
  "Feathers",
  "Normal Shortbow (u)",
  "Oak Shortbow (u)",
  "Willow Shortbow (u)",
  "Maple Shortbow (u)",
  "Yew Shortbow (u)",
  "Magic Shortbow (u)",
  "Normal Longbow (u)",
  "Oak Longbow (u)",
  "Willow Longbow (u)",
  "Maple Longbow (u)",
  "Yew Longbow (u)",
  "Magic Longbow (u)",
  "Bowstring",
  "Leather",
  "Green Dragonhide",
  "Blue Dragonhide",
  "Red Dragonhide",
  "Black Dragonhide",
  "Leather Gloves",
  "Leather Boots",
  "Leather Cowl",
  "Leather Vambraces",
  "Leather Body",
  "Leather Chaps",
  "Green D-hide Vambraces",
  "Green D-hide Chaps",
  "Green D-hide Body",
  "Blue D-hide Vambraces",
  "Blue D-hide Chaps",
  "Blue D-hide Body",
  "Red D-hide Vambraces",
  "Red D-hide Chaps",
  "Red D-hide Body",
  "Black D-hide Vambraces",
  "Black D-hide Chaps",
  "Black D-hide Body",
  "Silver Topaz Ring",
  "Silver Sapphire Ring",
  "Silver Ruby Ring",
  "Silver Emerald Ring",
  "Silver Diamond Ring",
  "Gold Topaz Ring",
  "Gold Sapphire Ring",
  "Gold Ruby Ring",
  "Gold Emerald Ring",
  "Gold Diamond Ring",
  "Silver Topaz Necklace",
  "Silver Sapphire Necklace",
  "Silver Ruby Necklace",
  "Silver Emerald Necklace",
  "Silver Diamond Necklace",
  "Gold Topaz Necklace",
  "Gold Sapphire Necklace",
  "Gold Ruby Necklace",
  "Gold Emerald Necklace",
  "Gold Diamond Necklace",
  "Cooking Gloves",
  "Mining Gloves",
  "Smithing Gloves",
  "Thieving Gloves",
  "Gem Gloves",
  "Cape of Prat",
  "Obsidian Cape",
  "Elite Amulet of Strength",
  "Elite Amulet of Accuracy",
  "Elite Amulet of Defence",
  "Elite Amulet of Glory",
  "Egg Chest",
  "Ancient Sword",
  "Ancient Helmet",
  "Ancient Platelegs",
  "Ancient Platebody",
  "Ancient Shield",
  "(S) Ancient Helmet",
  "(S) Ancient Platelegs",
  "(S) Ancient Platebody",
  "(S) Ancient Shield",
  "(G) Ancient Helmet",
  "(G) Ancient Platelegs",
  "(G) Ancient Platebody",
  "(G) Ancient Shield",
  "Pirate Booty",
  "Fire Cape",
  "Elite Chest",
  "Spider Chest",
  "Ranger Hat",
  "Ranger Boots",
  "Amulet of Fury",
  "Amulet of Torture",
  "Amulet of Ranged",
  "Ice Dagger",
  "Ice Sword",
  "Ice Battleaxe",
  "Ice 2H Sword",
  "Ice Helmet",
  "Ice Boots",
  "Ice Platelegs",
  "Ice Platebody",
  "Ice Shield",
  "Ice Arrows",
  "Ice Shortbow",
  "Ice Longbow",
  "Frozen Chest",
  "Standard Chest",
  "Amulet of Looting",
  "Redwood Shortbow (u)",
  "Redwood Shortbow",
  "Redwood Longbow (u)",
  "Redwood Longbow",
  "Rune Essence",
  "Air Rune",
  "Mind Rune",
  "Water Rune",
  "Earth Rune",
  "Fire Rune",
  "Body Rune",
  "Chaos Rune",
  "Death Rune",
  "Blood Rune",
  "Ancient Rune",
  "Staff of Air",
  "Staff of Water",
  "Staff of Earth",
  "Staff of Fire",
  "Air Battlestaff",
  "Water Battlestaff",
  "Earth Battlestaff",
  "Fire Battlestaff",
  "Mystic Air Staff",
  "Mystic Water Staff",
  "Mystic Earth Staff",
  "Mystic Fire Staff",
  "Green Wizard Hat",
  "Green Wizard Robes",
  "Green Wizard Bottoms",
  "Green Wizard Boots",
  "Blue Wizard Hat",
  "Blue Wizard Robes",
  "Blue Wizard Bottoms",
  "Blue Wizard Boots",
  "Red Wizard Hat",
  "Red Wizard Robes",
  "Red Wizard Bottoms",
  "Red Wizard Boots",
  "Black Wizard Hat",
  "Black Wizard Robes",
  "Black Wizard Bottoms",
  "Black Wizard Boots",
  "Ancient Wizard Hat",
  "Ancient Wizard Robes",
  "Ancient Wizard Bottoms",
  "Ancient Wizard Boots",
  "Bronze Scimitar",
  "Iron Scimitar",
  "Steel Scimitar",
  "Black Scimitar",
  "Mithril Scimitar",
  "Adamant Scimitar",
  "Rune Scimitar",
  "Dragon Scimitar",
  "Bones",
  "Dragon Bones",
  "Magic Bones",
  "Bandit Chest",
  "Ancient Longbow",
  "Attack Skillcape",
  "Cooking Skillcape",
  "Crafting Skillcape",
  "Defence Skillcape",
  "Farming Skillcape",
  "Firemaking Skillcape",
  "Fishing Skillcape",
  "Fletching Skillcape",
  "HP Skillcape",
  "Magic Skillcape",
  "Mining Skillcape",
  "Ranged Skillcape",
  "Runecrafting Skillcape",
  "Smithing Skillcape",
  "Strength Skillcape",
  "Thieving Skillcape",
  "Woodcutting Skillcape",
  "Magic Chest",
  "Bronze Gloves",
  "Iron Gloves",
  "Steel Gloves",
  "Mithril Gloves",
  "Adamant Gloves",
  "Rune Gloves",
  "Dragon Gloves",
  "Carrot Seeds",
  "Carrot",
  "Mastery Token (Cooking)",
  "Mastery Token (Crafting)",
  "Mastery Token (Farming)",
  "Mastery Token (Firemaking)",
  "Mastery Token (Fishing)",
  "Mastery Token (Fletching)",
  "Mastery Token (Mining)",
  "Mastery Token (Runecrafting)",
  "Mastery Token (Smithing)",
  "Mastery Token (Thieving)",
  "Mastery Token (Woodcutting)",
  "Bobby's Pocket",
  "Prayer Skillcape",
  "Slayer Helmet (Basic)",
  "Slayer Platebody (Basic)",
  "Slayer Helmet (Strong)",
  "Slayer Platebody (Strong)",
  "Slayer Helmet (Elite)",
  "Slayer Platebody (Elite)",
  "Magic Wand (Basic)",
  "Magic Wand (Powerful)",
  "Magic Wand (Elite)",
  "Book of Eli",
  "Mirror Shield",
  "Eyeball",
  "Dragon Claw Fragment",
  "Dragon Claw",
  "Ancient Claw Fragment",
  "Ancient Claw",
  "Holy Dust",
  "Cape of Ranged Preservation",
  "Magical Ring",
  "Ancient Arrows",
  "Ancient 2H Sword",
  "Slayer Skillcape",
  "Big Bones",
  "Slayer Wizard Hat (Basic)",
  "Slayer Wizard Robes (Basic)",
  "Slayer Wizard Hat (Strong)",
  "Slayer Wizard Robes (Strong)",
  "Slayer Wizard Hat (Elite)",
  "Slayer Wizard Robes (Elite)",
  "Slayer Cowl (Basic)",
  "Slayer Leather Body (Basic)",
  "Slayer Cowl (Strong)",
  "Slayer Leather Body (Strong)",
  "Slayer Cowl (Elite)",
  "Slayer Leather Body (Elite)",
  "Garum Herb",
  "Sourweed Herb",
  "Mantalyme Herb",
  "Lemontyle Herb",
  "Oxilyme Herb",
  "Poraxx Herb",
  "Pigtayle Herb",
  "Barrentoe Herb",
  "Garum Seeds",
  "Sourweed Seeds",
  "Mantalyme Seeds",
  "Lemontyle Seeds",
  "Oxilyme Seeds",
  "Poraxx Seeds",
  "Pigtayle Seeds",
  "Barrentoe Seeds",
  "Melee Accuracy Potion I",
  "Melee Accuracy Potion II",
  "Melee Accuracy Potion III",
  "Melee Accuracy Potion IV",
  "Melee Strength Potion I",
  "Melee Strength Potion II",
  "Melee Strength Potion III",
  "Melee Strength Potion IV",
  "Melee Evasion Potion I",
  "Melee Evasion Potion II",
  "Melee Evasion Potion III",
  "Melee Evasion Potion IV",
  "Ranged Assistance Potion I",
  "Ranged Assistance Potion II",
  "Ranged Assistance Potion III",
  "Ranged Assistance Potion IV",
  "Magic Assistance Potion I",
  "Magic Assistance Potion II",
  "Magic Assistance Potion III",
  "Magic Assistance Potion IV",
  "Regeneration Potion I",
  "Regeneration Potion II",
  "Regeneration Potion III",
  "Regeneration Potion IV",
  "Damage Reduction Potion I",
  "Damage Reduction Potion II",
  "Damage Reduction Potion III",
  "Damage Reduction Potion IV",
  "Bird Nest Potion I",
  "Bird Nest Potion II",
  "Bird Nest Potion III",
  "Bird Nest Potion IV",
  "Fishermans Potion I",
  "Fishermans Potion II",
  "Fishermans Potion III",
  "Fishermans Potion IV",
  "Controlled Heat Potion I",
  "Controlled Heat Potion II",
  "Controlled Heat Potion III",
  "Controlled Heat Potion IV",
  "Generous Cook Potion I",
  "Generous Cook Potion II",
  "Generous Cook Potion III",
  "Generous Cook Potion IV",
  "Perfect Swing Potion I",
  "Perfect Swing Potion II",
  "Perfect Swing Potion III",
  "Perfect Swing Potion IV",
  "Seeing Gold Potion I",
  "Seeing Gold Potion II",
  "Seeing Gold Potion III",
  "Seeing Gold Potion IV",
  "Gentle Hands Potion I",
  "Gentle Hands Potion II",
  "Gentle Hands Potion III",
  "Gentle Hands Potion IV",
  "Generous Harvest Potion I",
  "Generous Harvest Potion II",
  "Generous Harvest Potion III",
  "Generous Harvest Potion IV",
  "Skilled Fletching Potion I",
  "Skilled Fletching Potion II",
  "Skilled Fletching Potion III",
  "Skilled Fletching Potion IV",
  "Crafting Potion I",
  "Crafting Potion II",
  "Crafting Potion III",
  "Crafting Potion IV",
  "Elemental Potion I",
  "Elemental Potion II",
  "Elemental Potion III",
  "Elemental Potion IV",
  "Herblore Potion I",
  "Herblore Potion II",
  "Herblore Potion III",
  "Herblore Potion IV",
  "Ranged Strength Potion I",
  "Ranged Strength Potion II",
  "Ranged Strength Potion III",
  "Ranged Strength Potion IV",
  "Magic Damage Potion I",
  "Magic Damage Potion II",
  "Magic Damage Potion III",
  "Magic Damage Potion IV",
  "Large Horn",
  "Herb Sack",
  "Sunset Rapier",
  "Chest of Witwix",
  "Amulet of Calculated Promotion",
  "Hard Leather Gloves",
  "Hard Leather Boots",
  "Hard Leather Cowl",
  "Hard Leather Vambraces",
  "Hard Leather Body",
  "Hard Leather Chaps",
  "Chapeau Noir",
  "Mastery Token (Herblore)",
  "Herblore Skillcape",
  "Diamond Luck Potion I",
  "Diamond Luck Potion II",
  "Diamond Luck Potion III",
  "Diamond Luck Potion IV",
  "Divine Potion I",
  "Divine Potion II",
  "Divine Potion III",
  "Divine Potion IV",
  "Lucky Herb Potion I",
  "Lucky Herb Potion II",
  "Lucky Herb Potion III",
  "Lucky Herb Potion IV",
  "Signet Ring Half (a)",
  "Signet Ring Half (b)",
  "Aorpheat's Signet Ring",
  "Old Boot",
  "Old Hat",
  "Seaweed",
  "Rusty Key",
  "Shell",
  "Rope",
  "Glass Bottle",
  "Rubber Ducky",
  "Raw Blowfish",
  "Raw Poison Fish",
  "Leaping Trout",
  "Leaping Salmon",
  "Leaping Broad Fish",
  "Raw Magic Fish",
  "Raw Anglerfish",
  "Raw Fanfish",
  "Raw Seahorse",
  "Raw Carp",
  "Raw Skeleton Fish",
  "Pirates Lost Ring",
  "Message in a Bottle",
  "Barbarian Gloves",
  "Ancient Ring of Skills",
  "Anglerfish",
  "Fanfish",
  "Seahorse",
  "Carp",
  "Burnt Anglerfish",
  "Burnt Fanfish",
  "Burnt Seahorse",
  "Burnt Carp",
  "Weird Gloop",
  "Clue Chasers Insignia",
  "Lemon",
  "Lemons",
  "Lemonade",
  "Topaz Bolts",
  "Sapphire Bolts",
  "Ruby Bolts",
  "Emerald Bolts",
  "Diamond Bolts",
  "Bronze Crossbow",
  "Iron Crossbow",
  "Steel Crossbow",
  "Mithril Crossbow",
  "Adamant Crossbow",
  "Rune Crossbow",
  "Dragon Crossbow",
  "Ancient Crossbow",
  "Bronze Javelin",
  "Iron Javelin",
  "Steel Javelin",
  "Mithril Javelin",
  "Adamant Javelin",
  "Rune Javelin",
  "Dragon Javelin",
  "Ancient Javelin",
  "Bronze Throwing Knife",
  "Iron Throwing Knife",
  "Steel Throwing Knife",
  "Mithril Throwing Knife",
  "Adamant Throwing Knife",
  "Rune Throwing Knife",
  "Dragon Throwing Knife",
  "Ancient Throwing Knife",
  "Aeris God Helmet",
  "Aeris God Platelegs",
  "Aeris God Platebody",
  "Aeris God Boots",
  "Aeris God Gloves",
  "Glacia God Helmet",
  "Glacia God Platelegs",
  "Glacia God Platebody",
  "Glacia God Boots",
  "Glacia God Gloves",
  "Headless Bolts",
  "Bronze Crossbow Head",
  "Iron Crossbow Head",
  "Steel Crossbow Head",
  "Mithril Crossbow Head",
  "Adamant Crossbow Head",
  "Rune Crossbow Head",
  "Dragon Crossbow Head",
  "Bronze Javelin Heads",
  "Iron Javelin Heads",
  "Steel Javelin Heads",
  "Mithril Javelin Heads",
  "Adamant Javelin Heads",
  "Rune Javelin Heads",
  "Dragon Javelin Heads",
  "(U) Green D-hide Vambraces",
  "(U) Green D-hide Chaps",
  "(U) Green D-hide Body",
  "(U) Blue D-hide Vambraces",
  "(U) Blue D-hide Chaps",
  "(U) Blue D-hide Body",
  "(U) Red D-hide Vambraces",
  "(U) Red D-hide Chaps",
  "(U) Red D-hide Body",
  "(U) Black D-hide Vambraces",
  "(U) Black D-hide Chaps",
  "(U) Black D-hide Body",
  "Ancient D-hide Vambraces",
  "Ancient D-hide Chaps",
  "Ancient D-hide Body",
  "(U) Ancient D-hide Vambraces",
  "(U) Ancient D-hide Chaps",
  "(U) Ancient D-hide Body",
  "Elite Amulet of Ranged",
  "Elder Dragonhide",
  "Green D-hide Shield",
  "Blue D-hide Shield",
  "Red D-hide Shield",
  "Black D-hide Shield",
  "Ancient D-hide Shield",
  "(U) Green D-hide Shield",
  "(U) Blue D-hide Shield",
  "(U) Red D-hide Shield",
  "(U) Black D-hide Shield",
  "(U) Ancient D-hide Shield",
  "Air Shard",
  "Water Shard",
  "Earth Shard",
  "Fire Shard",
  "Air Chest",
  "Water Chest",
  "Earth Chest",
  "Fire Chest",
  "Terran God Helmet",
  "Terran God Platelegs",
  "Terran God Platebody",
  "Terran God Boots",
  "Terran God Gloves",
  "Ragnar God Helmet",
  "Ragnar God Platelegs",
  "Ragnar God Platebody",
  "Ragnar God Boots",
  "Ragnar God Gloves",
  "Deadeye Ring",
  "Deadeye Amulet",
  "Scroll of Aeris",
  "Scroll of Glacia",
  "Scroll of Terran",
  "Scroll of Ragnar",
  "Warlock Ring",
  "Warlock Amulet",
  "Guardian Ring",
  "Guardian Amulet",
  "Fighter Ring",
  "Fighter Amulet",
  "Aeris Godsword",
  "Glacia Godsword",
  "Terran Godsword",
  "Ragnar Godsword",
  "Bank Slot Token",
  "Stormsnap",
  "Big ol Ron",
  "Confetti Crossbow",
  "Slayer's Crossbow",
  "Slayer Crossbow Head",
  "8",
  "Twin Exiles",
  "Maximum Skillcape",
  "Bob's Rake",
  "Earth Layered Shield",
  "Elder Chest",
  "Cloudburst Staff",
  "Amulet of Magic",
  "Elite Amulet of Magic",
  "Bone Necklace",
  "Skull Cape",
  "Fury of the Elemental Zodiacs",
  "Light Rune",
  "Nature Rune",
  "Havoc Rune",
  "Spirit Rune",
  "Mist Rune",
  "Dust Rune",
  "Mud Rune",
  "Smoke Rune",
  "Steam Rune",
  "Lava Rune",
  "Air Acolyte Wizard Hat",
  "Air Acolyte Wizard Robes",
  "Air Acolyte Wizard Bottoms",
  "Air Acolyte Wizard Boots",
  "Water Acolyte Wizard Hat",
  "Water Acolyte Wizard Robes",
  "Water Acolyte Wizard Bottoms",
  "Water Acolyte Wizard Boots",
  "Earth Acolyte Wizard Hat",
  "Earth Acolyte Wizard Robes",
  "Earth Acolyte Wizard Bottoms",
  "Earth Acolyte Wizard Boots",
  "Fire Acolyte Wizard Hat",
  "Fire Acolyte Wizard Robes",
  "Fire Acolyte Wizard Bottoms",
  "Fire Acolyte Wizard Boots",
  "Air Adept Wizard Hat",
  "Air Adept Wizard Robes",
  "Air Adept Wizard Bottoms",
  "Air Adept Wizard Boots",
  "Water Adept Wizard Hat",
  "Water Adept Wizard Robes",
  "Water Adept Wizard Bottoms",
  "Water Adept Wizard Boots",
  "Earth Adept Wizard Hat",
  "Earth Adept Wizard Robes",
  "Earth Adept Wizard Bottoms",
  "Earth Adept Wizard Boots",
  "Fire Adept Wizard Hat",
  "Fire Adept Wizard Robes",
  "Fire Adept Wizard Bottoms",
  "Fire Adept Wizard Boots",
  "Air Expert Wizard Hat",
  "Air Expert Wizard Robes",
  "Air Expert Wizard Bottoms",
  "Air Expert Wizard Boots",
  "Water Expert Wizard Hat",
  "Water Expert Wizard Robes",
  "Water Expert Wizard Bottoms",
  "Water Expert Wizard Boots",
  "Earth Expert Wizard Hat",
  "Earth Expert Wizard Robes",
  "Earth Expert Wizard Bottoms",
  "Earth Expert Wizard Boots",
  "Fire Expert Wizard Hat",
  "Fire Expert Wizard Robes",
  "Fire Expert Wizard Bottoms",
  "Fire Expert Wizard Boots",
  "Air Imbued Wand",
  "Water Imbued Wand",
  "Earth Imbued Wand",
  "Fire Imbued Wand",
  "Red Party Hat",
  "Dragonfire Shield",
  "Circlet of Rhaelyx",
  "Jewel of Rhaelyx",
  "Charge Stone of Rhaelyx",
  "Crown of Rhaelyx",
  "Enchanted Cape",
  "Enchanted Shield",
  "Mysterious Stone",
  "Event Clue #1",
  "Event Clue #2",
  "Event Clue #3",
  "Event Clue #4",
  "Cake Base",
  "Candle",
  "Magical Icing",
  "Magical Flavouring",
  "Birthday Cake",
  "Birthday Token",
  "Purple Party Hat",
  "Ancient Ring of Mastery",
  "Cape of Completion",
  "Desert Hat",
  "Blazing Lantern",
  "Climbing Boots",
  "Miolite Helmet",
  "Miolite Boots",
  "Miolite Platelegs",
  "Miolite Platebody",
  "Miolite Shield",
  "Miolite Sceptre",
  "Gloves of Silence",
  "Shaman Ring",
  "Book of Occults",
  "Elementalist Gloves",
  "Sand Treaders",
  "Desert Wrappings",
  "Desert Sabre",
  "Desert Shortbow",
  "Sandstorm Ring",
  "Darksteel Dagger",
  "Elder Crown",
  "Tormented Ring",
  "Sanguine Blade",
  "Recoil Shield",
  "Wasteful Ring",
  "Infernal Claw",
  "Tidal Edge Fragment",
  "Tidal Edge",
  "Ocean Song Fragment",
  "Ocean Song",
  "Shockwave Fragment",
  "Shockwave",
  "Jadestone Bolts",
  "Paladin Gloves",
  "Priest Hat",
  "Almighty Lute",
  "Miolite Chest",
  "Infernal Core",
  "Infernal Cape",
  "Slayer Helmet (Master)",
  "Slayer Platebody (Master)",
  "Slayer Cowl (Master)",
  "Slayer Leather Body (Master)",
  "Slayer Wizard Hat (Master)",
  "Slayer Wizard Robes (Master)",
  "Green Party Hat",
  "Hunter's Ring",
  "A Tale of the Past, a future's prophecy",
  "The First Hero and an Unknown Evil",
  "New Dawn",
  "Slayer Gear Upgrade Kit (Strong)",
  "Slayer Gear Upgrade Kit (Elite)",
  "Slayer Gear Upgrade Kit (Master)",
  "Santa Hat",
  "Christmas Cracker",
  "Friendship Bracelet",
  "Candy Cane",
  "Christmas Coal",
  "Christmas Sweater",
  "Christmas Wreath",
  "Yellow Party Hat",
  "Mastery Token (Agility)",
  "Agility Skillcape",
  "Performance Enhancing Potion I",
  "Performance Enhancing Potion II",
  "Performance Enhancing Potion III",
  "Performance Enhancing Potion IV",
  "Easter Egg",
  "Summoning Shard (Red)",
  "Summoning Shard (Green)",
  "Summoning Shard (Blue)",
  "Summoning Shard (Silver)",
  "Summoning Shard (Gold)",
  "Summoning Shard (Black)",
  "Golbin Thief",
  "Occultist",
  "Wolf",
  "Ent",
  "Mole",
  "Octopus",
  "Minotaur",
  "Centaur",
  "Witch",
  "Pig",
  "Crow",
  "Leprechaun",
  "Cyclops",
  "Yak",
  "Unicorn",
  "Dragon",
  "Monkey",
  "Salamander",
  "Bear",
  "Devil",
  "Mastery Token (Summoning)",
  "Summoning Skillcape",
  "Abnormal Log",
  "Red Herring",
  "Necromancer Potion I",
  "Necromancer Potion II",
  "Necromancer Potion III",
  "Necromancer Potion IV",
  "Necromancer Hat",
  "Necromancer Robes",
  "Necromancer Bottoms",
  "Necromancer Boots",
  "Cool Glasses",
  "Bag of Flour",
  "Bread",
  "Raw Beef",
  "Beef",
  "Raw Chicken",
  "Chicken",
  "Apple",
  "Plain Pizza Slice",
  "Beef Pie",
  "Meat Pizza Slice",
  "Basic Soup",
  "Strawberry Cupcake",
  "Hearty Soup",
  "Cherry Cupcake",
  "Cream Corn Soup",
  "Apple Pie",
  "Chicken Soup",
  "Strawberry Cake",
  "Carrot Cake",
  "Lemon Cake",
  "Shrimp (Perfect)",
  "Sardine (Perfect)",
  "Herring (Perfect)",
  "Seahorse (Perfect)",
  "Trout (Perfect)",
  "Salmon (Perfect)",
  "Lobster (Perfect)",
  "Swordfish (Perfect)",
  "Anglerfish (Perfect)",
  "Fanfish (Perfect)",
  "Crab (Perfect)",
  "Carp (Perfect)",
  "Shark (Perfect)",
  "Cave Fish (Perfect)",
  "Manta Ray (Perfect)",
  "Whale (Perfect)",
  "Bread (Perfect)",
  "Beef (Perfect)",
  "Chicken (Perfect)",
  "Plain Pizza Slice (Perfect)",
  "Beef Pie (Perfect)",
  "Meat Pizza Slice (Perfect)",
  "Basic Soup (Perfect)",
  "Strawberry Cupcake (Perfect)",
  "Hearty Soup (Perfect)",
  "Cherry Cupcake (Perfect)",
  "Cream Corn Soup (Perfect)",
  "Apple Pie (Perfect)",
  "Chicken Soup (Perfect)",
  "Strawberry Cake (Perfect)",
  "Carrot Cake (Perfect)",
  "Lemon Cake (Perfect)",
  "Cherry Seeds",
  "Cherry",
  "Cheese",
  "Cream",
  "Sneak-Ers",
  "Jeweled Necklace",
  "Crate of Basic Supplies",
  "Thiever's Cape",
  "Marksman's Sigil",
  "Crate of Food",
  "Basic Bag",
  "Cooking Apron",
  "Shipwheel",
  "Fishing Hook",
  "Giant Club",
  "Stack of Bones",
  "Pile of Logs",
  "Pile of Ores",
  "Knight's Sigil",
  "Knight's Cape",
  "Whetstone",
  "Wizard's Scroll",
  "Wizard's Sigil",
  "Prayer Scroll",
  "Ring of Wealth",
  "Chest of Gems",
  "Antique Vase",
  "Absorbing Shield",
  "Chef's Spoon",
  "Chef's Hat",
  "Training Shield",
  "Knight's Defender",
  "Cave Giant Boots",
  "Merchant's Permit",
  "Bob's Gloves",
  "Golbin Mask",
  "Fine Coinpurse",
  "Lumberjack's Top",
  "Miner's Helmet",
  "Sailor's Top",
  "Jester's Hat",
  "Jadestone",
  "Gold Crested Shield",
  "Book of Scholars",
  "Amulet of Incantation",
  "Thief's Moneysack",
  "Seed Pouch",
  "Runecrafting Pouch",
  "Alchemist's Bag",
  "Apple Tree Seeds",
  "Shield of Melee Power",
  "Shield of Ranged Power",
  "Shield of Magic Power",
  "Ring of Power",
  "Beginning of the End",
  "Goo",
  "Wildflower",
  "Nature's Call Staff Top",
  "Nature's Call Staff Bottom",
  "Fine Poison Powder",
  "Poison Scales",
  "Miolite Spore",
  "Poison Essence",
  "Worm Spike",
  "Burning Essence",
  "Cursed Hands",
  "Stinging Essence",
  "Tough Shell",
  "Undead Essence",
  "Desecrated Bones",
  "War Axe",
  "Warberd",
  "Throwing Power Gloves",
  "Slingshot",
  "Elerine Longbow",
  "Elerine Spear",
  "Nature's Call Staff",
  "Nature's Wrath Staff",
  "Nature's Blessing Ring",
  "Poisoned Shortbow",
  "Poisoned Dagger",
  "Scaled Shield",
  "Poison Virulence Ring",
  "Poison Virulence Gloves",
  "Burning Madness Ring",
  "Burning Madness Gloves",
  "Spiked Shell Ring",
  "Spiked Shell Gloves",
  "Relentless Fury Ring",
  "Relentless Fury Gloves",
  "Ring of Blade Echoes",
  "Ring of Barrage",
  "Ring of Spirit Power",
  "Hinder Potion I",
  "Hinder Potion II",
  "Hinder Potion III",
  "Hinder Potion IV",
  "Famished Potion I",
  "Famished Potion II",
  "Famished Potion III",
  "Famished Potion IV",
  "Lethal Toxins Potion I",
  "Lethal Toxins Potion II",
  "Lethal Toxins Potion III",
  "Lethal Toxins Potion IV",
  "Impending Darkness",
  "Mastery Token Astrology",
  "Stardust",
  "Golden Stardust",
  "Astrology Skillcape",
  "Secret Stardust Potion I",
  "Secret Stardust Potion II",
  "Secret Stardust Potion III",
  "Secret Stardust Potion IV",
  "Christmas Present (Yellow)",
  "Christmas Present (Blue)",
  "Christmas Present (Green)",
  "Christmas Present (White)",
  "Christmas Present (Purple)",
  "Christmas Present (Standard)",
  "Event Token - Holiday 2021",
  "Holiday Scarf",
  "Gingerbread House",
  "Gingerbread Man",
  "Edible Candy Cane",
  "Locked Chest",
  "Locked Chest Key",
  "Event Token (Holiday 2021)",
  "Enchanted Topaz Bolts",
  "Enchanted Sapphire Bolts",
  "Enchanted Ruby Bolts",
  "Enchanted Emerald Bolts",
  "Enchanted Diamond Bolts",
  "Enchanted Jadestone Bolts",
  "Poison Ring",
  "Burning Ring",
  "Frostburn Ring",
  "Ultima Godsword",
  "Mystery Wand",
  "Poison Arrows",
  "Fire Arrows",
  "Frostburn Arrows",
  "Burning Wand",
  "Frostburn Wand",
  "Ring of Balance",
  "Flying Cape",
  "Amulet of Healing",
  "Sword of Some Reliability",
  "One Layer Shield",
  "Warding Shield",
  "Tilted Crossbow",
  "Ultimate Speed Boots",
  "I Can't See Helmet",
  "Almighty Ring",
  "Punching Bag Platebody",
  "Precision Gloves",
  "Heavy Gloves",
  "Ultimate Slapping Gloves",
  "Amulet of Burning Leech",
  "Amulet of Poison Leech",
  "Magic Critical Amulet",
  "Melee Critical Amulet",
  "Bloodthirst Amulet",
  "Dragon Head Helmet",
  "Stonewall Shield",
  "Impossible Longbow",
  "Throwing Dragon Sword",
];

const filterOptions = createFilterOptions({
  matchFrom: "any",
  limit: 5,
});

const ItemID = ({ path }: { path: string }) => {
  const state = React.useContext(Context);
  return (
    <Autocomplete
      value={items[state!.get(path)]}
      filterOptions={filterOptions}
      onSelect={(evt) =>
        state!.update(path, items.indexOf((evt.target as any).value))
      }
      renderInput={(params) => <TextField {...params} label="ItemId" />}
      options={items}
    />
  );
};

export default ItemID;
