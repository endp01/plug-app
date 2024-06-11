import { HandCoinsIcon, HashIcon, ShirtIcon } from "lucide-react"
import { keccak256, parseAbi, toHex, zeroAddress } from "viem"

import { abis } from "../abis"

const BACKGROUND_SELECTOR = keccak256(toHex("background"))
const BODY_SELECTOR = keccak256(toHex("body"))
const ACCESSORY_SELECTOR = keccak256(toHex("accessory"))
const HEAD_SELECTOR = keccak256(toHex("head"))
const GLASSES_SELECTOR = keccak256(toHex("glasses"))

export const nouns = {
	bid: {
		address: zeroAddress,
		abi: abis.nouns.bid,
		inputs: parseAbi([abis.nouns.bid])[0]["inputs"],
		options: undefined,
		sentence: "Bid on Noun with {0} $ETH",
		info: "Bid on a Noun with a specific amount of ETH. This can be used to make an offer on a Noun.",
		icon: HandCoinsIcon,
		primary: true
	},
	hasTrait: {
		address: zeroAddress,
		abi: abis.nouns.hasTrait,
		inputs: parseAbi([abis.nouns.hasTrait])[0]["inputs"],
		options: [
			[
				{ label: "background", value: BACKGROUND_SELECTOR },
				{ label: "body", value: BODY_SELECTOR },
				{ label: "accessory", value: ACCESSORY_SELECTOR },
				{ label: "head", value: HEAD_SELECTOR },
				{ label: "glasses", value: GLASSES_SELECTOR }
			],
			{
				[BACKGROUND_SELECTOR]: [
					{ label: "cool", value: "0x03" },
					{ label: "warm", value: "0x04" }
				],
				[BODY_SELECTOR]: [
					{ label: "Beige", value: "0x04" },
					{ label: "Beige Light", value: "0x04" },
					{ label: "Blue Sky", value: "0x04" },
					{ label: "Bluegrey", value: "0x04" },
					{ label: "Cold", value: "0x04" },
					{ label: "Computer Blue", value: "0x04" },
					{ label: "Dark Brown", value: "0x04" },
					{ label: "Dark Pink", value: "0x04" },
					{ label: "Fog Grey", value: "0x04" },
					{ label: "Gold", value: "0x04" },
					{ label: "White", value: "0x04" },
					{ label: "Dark Grey", value: "0x04" },
					{ label: "Darker Grey", value: "0x04" },
					{ label: "Darkest Grey", value: "0x04" },
					{ label: "Green", value: "0x04" },
					{ label: "Gunk", value: "0x04" },
					{ label: "Hot Brown", value: "0x04" },
					{ label: "Magenta", value: "0x04" },
					{ label: "Orange", value: "0x04" },
					{ label: "Orange Light", value: "0x04" },
					{ label: "Peach", value: "0x04" },
					{ label: "Peachy", value: "0x04" },
					{ label: "Purple", value: "0x04" },
					{ label: "Red", value: "0x04" },
					{ label: "Pink", value: "0x04" },
					{ label: "Rust", value: "0x04" },
					{ label: "Slime Green", value: "0x04" },
					{ label: "Teal", value: "0x04" },
					{ label: "Teal Light", value: "0x04" },
					{ label: "Yellow", value: "0x04" }
				],
				[ACCESSORY_SELECTOR]: [
					{ label: "1n", value: "0x03" },
					{ label: "Aardvark", value: "0x03" },
					{ label: "Anchor Necklace", value: "0x03" },
					{ label: "Arrow", value: "0x03" },
					{ label: "Axe", value: "0x03" },
					{ label: "Band Shirt", value: "0x03" },
					{ label: "Beige Grid", value: "0x03" },
					{ label: "Big Red Stripes", value: "0x03" },
					{ label: "Bird Flying", value: "0x03" },
					{ label: "Black Shirt", value: "0x03" },
					{ label: "Black Tie", value: "0x03" },
					{ label: "Blit Stripes", value: "0x03" },
					{ label: "Blood Stains", value: "0x03" },
					{ label: "Blue Stripes", value: "0x03" },
					{ label: "Brown Stripes", value: "0x03" },
					{ label: "Cardinal", value: "0x03" },
					{ label: "Carrot", value: "0x03" },
					{ label: "CC", value: "0x03" },
					{ label: "CC 2", value: "0x03" },
					{ label: "Chain Logo", value: "0x03" },
					{ label: "Chain Necklace", value: "0x03" },
					{ label: "Chameleon", value: "0x03" },
					{ label: "Checker Big Green", value: "0x03" },
					{ label: "Checker Big Red", value: "0x03" },
					{ label: "Checker Blue", value: "0x03" },
					{ label: "Checker Disco Shirt", value: "0x03" },
					{ label: "Checker Grey", value: "0x03" },
					{ label: "Checker Rainbow", value: "0x03" },
					{ label: "Checker RGB", value: "0x03" },
					{ label: "Checker Small Black", value: "0x03" },
					{ label: "Checker Small Blue", value: "0x03" },
					{ label: "Checker Small Magenta", value: "0x03" },
					{ label: "Checker Vibrant", value: "0x03" },
					{ label: "Checker Wide Black", value: "0x03" },
					{ label: "Checker Wide White", value: "0x03" },
					{ label: "Cheese Necklace", value: "0x03" },
					{ label: "Chicken", value: "0x03" },
					{ label: "Cloud", value: "0x03" },
					{ label: "Clover", value: "0x03" },
					{ label: "Clown Scarf", value: "0x03" },
					{ label: "Collar Sunset", value: "0x03" },
					{ label: "Copy", value: "0x03" },
					{ label: "Cow", value: "0x03" },
					{ label: "DAO", value: "0x03" },
					{ label: "Dawn Shirt", value: "0x03" },
					{ label: "Doom", value: "0x03" },
					{ label: "Dope", value: "0x03" },
					{ label: "Dusk Shirt", value: "0x03" },
					{ label: "Decay", value: "0x03" },
					{ label: "Decay Pride", value: "0x03" },
					{ label: "Dinosaur", value: "0x03" },
					{ label: "Dollar Necklace", value: "0x03" },
					{ label: "Dragon", value: "0x03" },
					{ label: "Ducky", value: "0x03" },
					{ label: "ETH", value: "0x03" },
					{ label: "Eye", value: "0x03" },
					{ label: "Flash", value: "0x03" },
					{ label: "Foo", value: "0x03" },
					{ label: "Fries", value: "0x03" },
					{ label: "Glacier Shirt", value: "0x03" },
					{ label: "Glasses", value: "0x03" },
					{ label: "Gold Bar Necklace", value: "0x03" },
					{ label: "Grease", value: "0x03" },
					{ label: "Heart", value: "0x03" },
					{ label: "Heart Necklace", value: "0x03" },
					{ label: "Hoodie Strings", value: "0x03" },
					{ label: "Ice Shirt", value: "0x03" },
					{ label: "ICO", value: "0x03" },
					{ label: "ID", value: "0x03" },
					{ label: "Infinity", value: "0x03" },
					{ label: "Insignia", value: "0x03" },
					{ label: "I/O", value: "0x03" },
					{ label: "Leaf", value: "0x03" },
					{ label: "Lightbulb", value: "0x03" },
					{ label: "Lines Green", value: "0x03" },
					{ label: "Lines Rose", value: "0x03" },
					{ label: "LMAO", value: "0x03" },
					{ label: "LOL", value: "0x03" },
					{ label: "LP", value: "0x03" },
					{ label: "Mask Necklace", value: "0x03" },
					{ label: "Mars Face", value: "0x03" },
					{ label: "Matrix White", value: "0x03" },
					{ label: "Mint", value: "0x03" },
					{ label: "Moon Block", value: "0x03" },
					{ label: "Nil", value: "0x03" },
					{ label: "Noun", value: "0x03" },
					{ label: "Noun Green", value: "0x03" },
					{ label: "Nouns Glasses", value: "0x03" },
					{ label: "Nouns Glasses 2", value: "0x03" },
					{ label: "Olive Stripes", value: "0x03" },
					{ label: "Pi", value: "0x03" },
					{ label: "Pop", value: "0x03" },
					{ label: "Pizza Necklace", value: "0x03" },
					{ label: "Pocket Pencil", value: "0x03" },
					{ label: "Pride Shirt", value: "0x03" },
					{ label: "Purple Tie", value: "0x03" },
					{ label: "Red/Pink Shirt", value: "0x03" },
					{ label: "Rain", value: "0x03" },
					{ label: "Rainbow Steps", value: "0x03" },
					{ label: "Red Stripes", value: "0x03" },
					{ label: "RGB", value: "0x03" },
					{ label: "Rings", value: "0x03" },
					{ label: "Robot", value: "0x03" },
					{ label: "ROFL", value: "0x03" },
					{ label: "Scissors", value: "0x03" },
					{ label: "Sparkles", value: "0x03" },
					{ label: "Sunset Shirt", value: "0x03" },
					{ label: "Safety Vest", value: "0x03" },
					{ label: "Shrimp", value: "0x03" },
					{ label: "Slime Splat", value: "0x03" },
					{ label: "Snowflake", value: "0x03" },
					{ label: "Stripes & Checks", value: "0x03" },
					{ label: "Sunset", value: "0x03" },
					{ label: "Tatewaku", value: "0x03" },
					{ label: "Taxi", value: "0x03" },
					{ label: "Think", value: "0x03" },
					{ label: "Tie Dye", value: "0x03" },
					{ label: "a2 + b2", value: "0x03" },
					{ label: "Uroko", value: "0x03" },
					{ label: "We", value: "0x03" },
					{ label: "YAY", value: "0x03" },
					{ label: "Wall", value: "0x03" },
					{ label: "Wave", value: "0x03" },
					{ label: "Wet Money", value: "0x03" },
					{ label: "Wool Weave", value: "0x03" },
					{ label: "Wool Weave 2", value: "0x03" },
					{ label: "XCOPY X", value: "0x03" },
					{ label: "Yolo", value: "0x03" },
					{ label: "Yin & Yang", value: "0x03" },
					{ label: "Yo Shirt", value: "0x03" },
					{ label: "Zombie Stains", value: "0x03" }
				],
				[HEAD_SELECTOR]: [
					{ label: "35mm Film", value: "0x03" },
					{ label: "Aardvark", value: "0x03" },
					{ label: "Abstract", value: "0x03" },
					{ label: "Ape", value: "0x03" },
					{ label: "Bag", value: "0x03" },
					{ label: "Bagpipe", value: "0x03" },
					{ label: "Banana", value: "0x03" },
					{ label: "Bank", value: "0x03" },
					{ label: "Bao", value: "0x03" },
					{ label: "Baseball", value: "0x03" },
					{ label: "Basketball", value: "0x03" },
					{ label: "Bat", value: "0x03" },
					{ label: "Beached Whale", value: "0x03" },
					{ label: "Bear", value: "0x03" },
					{ label: "Beer", value: "0x03" },
					{ label: "Beet", value: "0x03" },
					{ label: "Bell", value: "0x03" },
					{ label: "Bigfoot", value: "0x03" },
					{ label: "Blackhole", value: "0x03" },
					{ label: "Blueberry", value: "0x03" },
					{ label: "Bomb", value: "0x03" },
					{ label: "Bonsai", value: "0x03" },
					{ label: "Boombox", value: "0x03" },
					{ label: "Boot", value: "0x03" },
					{ label: "Box", value: "0x03" },
					{ label: "Boxing Glove", value: "0x03" },
					{ label: "Brain", value: "0x03" },
					{ label: "Bubble Gum", value: "0x03" },
					{ label: "Burger", value: "0x03" },
					{ label: "Cake", value: "0x03" },
					{ label: "Calculator", value: "0x03" },
					{ label: "Calendar", value: "0x03" },
					{ label: "Camcorder", value: "0x03" },
					{ label: "Canned Ham", value: "0x03" },
					{ label: "Capybara", value: "0x03" },
					{ label: "Car", value: "0x03" },
					{ label: "Cash Register", value: "0x03" },
					{ label: "Cassette Tape", value: "0x03" },
					{ label: "Cat", value: "0x03" },
					{ label: "CD", value: "0x03" },
					{ label: "Chain", value: "0x03" },
					{ label: "Chainsaw", value: "0x03" },
					{ label: "Chameleon", value: "0x03" },
					{ label: "Chart", value: "0x03" },
					{ label: "Cheese", value: "0x03" },
					{ label: "Chef Hat", value: "0x03" },
					{ label: "Cherry", value: "0x03" },
					{ label: "Chicken", value: "0x03" },
					{ label: "Chilli", value: "0x03" },
					{ label: "Chipboard", value: "0x03" },
					{ label: "Chips", value: "0x03" },
					{ label: "Chocolate", value: "0x03" },
					{ label: "Cloud", value: "0x03" },
					{ label: "Clover", value: "0x03" },
					{ label: "Clutch", value: "0x03" },
					{ label: "Coffee Bean", value: "0x03" },
					{ label: "Cone", value: "0x03" },
					{ label: "Cookie", value: "0x03" },
					{ label: "Cordless Phone", value: "0x03" },
					{ label: "Cotton Ball", value: "0x03" },
					{ label: "Couch", value: "0x03" },
					{ label: "Cow", value: "0x03" },
					{ label: "Crab", value: "0x03" },
					{ label: "Crane", value: "0x03" },
					{ label: "Crocodile", value: "0x03" },
					{ label: "Crown King", value: "0x03" },
					{ label: "Crown Queen", value: "0x03" },
					{ label: "CRT", value: "0x03" },
					{ label: "Crystal Ball", value: "0x03" },
					{ label: "Diamond Blue", value: "0x03" },
					{ label: "Diamond Red", value: "0x03" },
					{ label: "Dictionary", value: "0x03" },
					{ label: "Dinosaur", value: "0x03" },
					{ label: "DNA", value: "0x03" },
					{ label: "Dog", value: "0x03" },
					{ label: "Doughnut", value: "0x03" },
					{ label: "Drill", value: "0x03" },
					{ label: "Duck", value: "0x03" },
					{ label: "Egg", value: "0x03" },
					{ label: "Earth", value: "0x03" },
					{ label: "Faberge Egg", value: "0x03" },
					{ label: "Factory", value: "0x03" },
					{ label: "Fan", value: "0x03" },
					{ label: "Fence", value: "0x03" },
					{ label: "Film Strip", value: "0x03" },
					{ label: "Fir", value: "0x03" },
					{ label: "Fire Hydrant", value: "0x03" },
					{ label: "Flamingo", value: "0x03" },
					{ label: "Flower", value: "0x03" },
					{ label: "Fox", value: "0x03" },
					{ label: "Frog", value: "0x03" },
					{ label: "Garlic", value: "0x03" },
					{ label: "Gavel", value: "0x03" },
					{ label: "Ghost", value: "0x03" },
					{ label: "Glasses", value: "0x03" },
					{ label: "Gnome", value: "0x03" },
					{ label: "Goat", value: "0x03" },
					{ label: "Gold Coin", value: "0x03" },
					{ label: "Goldfish", value: "0x03" },
					{ label: "Grouper", value: "0x03" },
					{ label: "Hair", value: "0x03" },
					{ label: "Hanger", value: "0x03" },
					{ label: "Handheld Console", value: "0x03" },
					{ label: "Hard Hat", value: "0x03" },
					{ label: "Heart", value: "0x03" },
					{ label: "Helicopter", value: "0x03" },
					{ label: "High Heel", value: "0x03" },
					{ label: "Hockey Punk", value: "0x03" },
					{ label: "Horse", value: "0x03" },
					{ label: "Hotdog", value: "0x03" },
					{ label: "House", value: "0x03" },
					{ label: "Icepop", value: "0x03" },
					{ label: "Igloo", value: "0x03" },
					{ label: "Index Card", value: "0x03" },
					{ label: "Island", value: "0x03" },
					{ label: "Jellyfish", value: "0x03" },
					{ label: "Jupiter", value: "0x03" },
					{ label: "Kangaroo", value: "0x03" },
					{ label: "Ketchup", value: "0x03" },
					{ label: "Laptop", value: "0x03" },
					{ label: "Lightning Bolt", value: "0x03" },
					{ label: "Lint", value: "0x03" },
					{ label: "Lips", value: "0x03" },
					{ label: "Lipstick", value: "0x03" },
					{ label: "Lock", value: "0x03" },
					{ label: "Macaroni", value: "0x03" },
					{ label: "Mailbox", value: "0x03" },
					{ label: "Maze", value: "0x03" },
					{ label: "Microwave", value: "0x03" },
					{ label: "Milk", value: "0x03" },
					{ label: "Mirror", value: "0x03" },
					{ label: "Mixer", value: "0x03" },
					{ label: "Moon", value: "0x03" },
					{ label: "Moose", value: "0x03" },
					{ label: "Mosquito", value: "0x03" },
					{ label: "Mountain", value: "0x03" },
					{ label: "Mouse", value: "0x03" },
					{ label: "Mug", value: "0x03" },
					{ label: "Mushroom", value: "0x03" },
					{ label: "Mustard", value: "0x03" },
					{ label: "Nigiri", value: "0x03" },
					{ label: "Noodles", value: "0x03" },
					{ label: "Onion", value: "0x03" },
					{ label: "Orangutan", value: "0x03" },
					{ label: "Orca", value: "0x03" },
					{ label: "Otter", value: "0x03" },
					{ label: "Outlet", value: "0x03" },
					{ label: "Owl", value: "0x03" },
					{ label: "Oyster", value: "0x03" },
					{ label: "Paintbrush", value: "0x03" },
					{ label: "Panda", value: "0x03" },
					{ label: "Paperclip", value: "0x03" },
					{ label: "Peanut", value: "0x03" },
					{ label: "Pencil", value: "0x03" },
					{ label: "Peyote", value: "0x03" },
					{ label: "Piano", value: "0x03" },
					{ label: "Pickle", value: "0x03" },
					{ label: "Pie", value: "0x03" },
					{ label: "Piggybank", value: "0x03" },
					{ label: "Pill", value: "0x03" },
					{ label: "Pillow", value: "0x03" },
					{ label: "Pineapple", value: "0x03" },
					{ label: "Pipe", value: "0x03" },
					{ label: "Pirateship", value: "0x03" },
					{ label: "Pizza", value: "0x03" },
					{ label: "Plane", value: "0x03" },
					{ label: "Pop", value: "0x03" },
					{ label: "Potato", value: "0x03" },
					{ label: "Pufferfish", value: "0x03" },
					{ label: "Pumpkin", value: "0x03" },
					{ label: "Pyramid", value: "0x03" },
					{ label: "Rabbit", value: "0x03" },
					{ label: "Rainbow", value: "0x03" },
					{ label: "Rangefinder", value: "0x03" },
					{ label: "Raven", value: "0x03" },
					{ label: "Retainer", value: "0x03" },
					{ label: "RGB", value: "0x03" },
					{ label: "Ring", value: "0x03" },
					{ label: "Road", value: "0x03" },
					{ label: "Robot", value: "0x03" },
					{ label: "Rock", value: "0x03" },
					{ label: "Rosebud", value: "0x03" },
					{ label: "Rubber Ducky", value: "0x03" },
					{ label: "Saguaro", value: "0x03" },
					{ label: "Sailboat", value: "0x03" },
					{ label: "Sandwich", value: "0x03" },
					{ label: "Saturn", value: "0x03" },
					{ label: "Saw", value: "0x03" },
					{ label: "Scorpion", value: "0x03" },
					{ label: "Shark", value: "0x03" },
					{ label: "Shower", value: "0x03" },
					{ label: "Skateboard", value: "0x03" },
					{ label: "Skeleton", value: "0x03" },
					{ label: "Skilift", value: "0x03" },
					{ label: "Smile", value: "0x03" },
					{ label: "Snowglobe", value: "0x03" },
					{ label: "Snowman", value: "0x03" },
					{ label: "Snowmobile", value: "0x03" },
					{ label: "Spaghetti", value: "0x03" },
					{ label: "Speech Bubble", value: "0x03" },
					{ label: "Sponge", value: "0x03" },
					{ label: "Squid", value: "0x03" },
					{ label: "Stapler", value: "0x03" },
					{ label: "Star", value: "0x03" },
					{ label: "Steak", value: "0x03" },
					{ label: "Sunset", value: "0x03" },
					{ label: "Taco", value: "0x03" },
					{ label: "Taxi", value: "0x03" },
					{ label: "Thumbs Up", value: "0x03" },
					{ label: "Toaster", value: "0x03" },
					{ label: "Toilet Paper", value: "0x03" },
					{ label: "Tooth", value: "0x03" },
					{ label: "Toothbrush", value: "0x03" },
					{ label: "Tornado", value: "0x03" },
					{ label: "Trash Can", value: "0x03" },
					{ label: "Treasure Chest", value: "0x03" },
					{ label: "Triangular Ruler", value: "0x03" },
					{ label: "Turing Machine", value: "0x03" },
					{ label: "UFO", value: "0x03" },
					{ label: "Undead", value: "0x03" },
					{ label: "Unicorn", value: "0x03" },
					{ label: "Vending Machine", value: "0x03" },
					{ label: "Vent", value: "0x03" },
					{ label: "Void", value: "0x03" },
					{ label: "Volcano", value: "0x03" },
					{ label: "Volleyball", value: "0x03" },
					{ label: "Wall", value: "0x03" },
					{ label: "Wallet", value: "0x03" },
					{ label: "Wallsafe", value: "0x03" },
					{ label: "Washing Machine", value: "0x03" },
					{ label: "Watch", value: "0x03" },
					{ label: "Watermelon", value: "0x03" },
					{ label: "Wave", value: "0x03" },
					{ label: "Weed", value: "0x03" },
					{ label: "Weight", value: "0x03" },
					{ label: "Werewolf", value: "0x03" },
					{ label: "Whale", value: "0x03" },
					{ label: "Wine", value: "0x03" },
					{ label: "Wine Barrel", value: "0x03" },
					{ label: "Wizard Hat", value: "0x03" },
					{ label: "Yeti", value: "0x03" },
					{ label: "Zebra", value: "0x03" }
				],
				[GLASSES_SELECTOR]: [
					{ label: "Black w/ Red Eyes", value: "0x03" },
					{ label: "Black RGB", value: "0x03" },
					{ label: "Black", value: "0x03" },
					{ label: "Blue", value: "0x03" },
					{ label: "Deep Teal", value: "0x03" },
					{ label: "Frog Green", value: "0x03" },
					{ label: "Full Black", value: "0x03" },
					{ label: "Green & Blue", value: "0x03" },
					{ label: "Grass", value: "0x03" },
					{ label: "Grey", value: "0x03" },
					{ label: "Guava", value: "0x03" },
					{ label: "Hip Rose", value: "0x03" },
					{ label: "Honey", value: "0x03" },
					{ label: "Magenta", value: "0x03" },
					{ label: "Orange", value: "0x03" },
					{ label: "Pink & Purple", value: "0x03" },
					{ label: "Red", value: "0x03" },
					{ label: "Smoke", value: "0x03" },
					{ label: "Teal", value: "0x03" },
					{ label: "Watermelon", value: "0x03" },
					{ label: "Yellow & Orange", value: "0x03" },
					{ label: "Yellow", value: "0x03" }
				]
			}
		],
		sentence: "Noun has {0} of {0=>1}",
		info: "Check if a Noun has a specific trait. This can be used to automatically bid on a Noun with your preferred attributes.",
		icon: ShirtIcon,
		primary: true
	},
	isTokenId: {
		address: zeroAddress,
		abi: abis.nouns.isTokenId,
		inputs: parseAbi([abis.nouns.isTokenId])[0]["inputs"],
		options: undefined,
		sentence: "Noun in auction is token {0}",
		info: "Check if a Noun has a specific token ID. This can be used to automatically bid on a specific Noun.",
		icon: HashIcon,
		primary: true
	}
} as const

export default nouns
