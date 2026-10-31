/**
 * ============================================================================
 * WEDNESDAY'S MIND - AI MYSTERY INTELLIGENCE SYSTEM
 * Master Game Engine & Interactivity Script (5 Cases & Void 3D Library Edition)
 * ============================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. ALL 5 COMPLETE SOLVABLE CASES DATA REPOSITORY
  // ==========================================================================

  const ALL_CASES = {
    CASE_001: {
      id: 'CASE_001',
      title: 'The Midnight Disappearance',
      location: "Nevermore Academy - The Void Archive",
      timeOfIncident: '12:00 AM (Midnight)',
      itemStolen: 'Codex Nocturna (14th-Century Shadow Grimoire)',
      description: 'At exactly midnight, an ancient grimoire disappeared from Nevermore’s restricted archive into the zero-gravity void. Three persons of interest were in the wing.',
      clues: {
        footprint: {
          id: 'clue_footprint',
          name: 'Muddy Diamond-Tread Footprint',
          locationIn3D: { x: -7.5, y: 2.4, z: 5.5 },
          image: 'assets/images/evidence_footprint.jpg',
          category: 'Forensic Impression',
          tags: ['#ShoeTread', '#LaboratoryResidue', '#Size11'],
          description: 'A deep mud impression floating on the void dais edge. Distinctive interlocking diamond grid sole with heavy wear on the outer right heel. Specks of violet chemical powder cling to the ridges.',
          forensics: {
            timestamp: '11:55 PM - 12:05 AM',
            soleType: 'Bespoke Orthopedic Cobbled Leather Sole with Diamond Rubber Grid',
            chemicalAnalysis: 'Potassium permanganate & sulfuric salt dust (Exclusive to Advanced Alchemy Lab)',
            contradiction: "Clears Julian (student flat sneakers) and Vance (size 6 Victorian boots). Directly matches Dr. Graves' bespoke laboratory footwear."
          },
          uvRevelation: "Under 365nm UV excitation: Luminescent violet crystalline halo reveals potassium permanganate oxidizer (KMnO4) track from West Lab Wing.",
          reagentProfile: {
            compound: "Potassium Permanganate (KMnO4) + Sulfur Salts",
            reaction: "Instant deep purple precipitation turning golden brown upon acidic reduction",
            confidence: "99.4% Forensic Certainty",
            reactionColor: "#a855f7"
          },
          wednesdayNote: "Amateurs always forget to wipe their boots before committing grand larceny. And the purple chemical dust? An insult to my intellect."
        },
        letter: {
          id: 'clue_letter',
          name: 'Charred Torn Letter & Wax Seal',
          locationIn3D: { x: 7.8, y: 4.8, z: -3.2 },
          image: 'assets/images/evidence_torn_letter.jpg',
          category: 'Physical Correspondence',
          tags: ['#WaxSeal', '#RavenFlaskInsignia', '#SecretMeeting'],
          description: 'A burnt fragment of heavy vellum drifting in zero-gravity. Reads: "...we must meet at midnight Codex Nocturna will be mine ...trust no one XIII Oct." Sealed with cracked purple wax depicting an alchemy flask intertwined with a raven.',
          forensics: {
            timestamp: 'Penned earlier today; scorched recently',
            sealHeraldry: 'Raven clutching an alchemy crucible (Personal crest of the Dark Antiquities Dept)',
            paperStock: 'Acid-free laboratory archival vellum',
            contradiction: 'Matches the exact signet ring and wax batch kept on Dr. Graves’ personal writing desk.'
          },
          uvRevelation: "Under 365nm UV excitation: Fluorescent latent fingerprint discovered on the scorched wax margin matches Dr. Graves' right thumb print.",
          reagentProfile: {
            compound: "Beeswax-Shellac Polymer with Cobalt Violet Pigment",
            reaction: "Soluble in warm ethanol; spectrographic curve matches Graves' private supply desk",
            confidence: "98.9% Material Match",
            reactionColor: "#c084fc"
          },
          wednesdayNote: "A burning desire for secrecy, executed with disastrous thermal management. The raven seal is practically a signed confession."
        },
        register: {
          id: 'clue_register',
          name: 'Altered Library Register Ledger',
          locationIn3D: { x: -1.2, y: 6.8, z: -7.0 },
          image: 'assets/images/evidence_register.jpg',
          category: 'Documentary Record',
          tags: ['#ChemicalErasure', '#11:58PMLog', '#SolventHalo'],
          description: 'The ancient bound register of archive entries floating high in the void. Under forensic magnification, the log entry at 11:58 PM shows chemical bleaching. The original signature was dissolved using an acidic solvent and forged over with faded ink.',
          forensics: {
            timestamp: 'Tampered at approximately 12:02 AM',
            solventUsed: 'Acetone-acid blend common in historical manuscript conservation & alchemy labs',
            underlyingGhostInk: 'Spectroscopic traces reveal initials "A.G." checkout of Codex Nocturna',
            contradiction: "Madam Vance claims the log was untouched after 11:45 PM. The alteration proves an authorized faculty member was inside at 11:58 PM."
          },
          uvRevelation: "Under 365nm UV excitation: Chemical bleaching fluoresces bright cyan, exposing the dissolved iron gall initials 'A.G. - 11:58 PM'.",
          reagentProfile: {
            compound: "Potassium Ferrocyanide Prussian Blue Developer",
            reaction: "Reacts with invisible ferric ions to reconstruct dissolved signature",
            confidence: "99.8% Documentary Match",
            reactionColor: "#38bdf8"
          },
          wednesdayNote: "Chemical erasure leaves an iridescent spectral halo. Did the culprit truly imagine that simple alchemy could fool an Addams?"
        }
      },
      suspects: {
        librarian: {
          id: 'librarian',
          name: 'Madam Thalia Vance',
          role: 'Chief Archivist & Head Librarian',
          age: 54,
          image: 'assets/images/suspect_librarian.jpg',
          initialSuspicion: 40,
          currentSuspicion: 40,
          bio: 'Strict guardian of Nevermore’s oldest manuscripts. Knows every ward, lock, and catalog shelf in the restricted wing. Unapologetically hostile toward intruders.',
          statedAlibi: 'Locked the heavy iron doors at 11:45 PM sharp. Retired to the cottage for chamomile tea. Claims no one could enter without faculty master clearance.',
          interrogation: [
            { id: 'vance_where', q: 'Where were you at the stroke of midnight?', a: 'In my personal quarters sipping valerian tea and nursing a migraine. My cottage is adjacent to the north tower.', wednesdayThought: 'Her pulse is steady. She is telling the truth regarding her location.' },
            { id: 'vance_entered', q: 'Did you grant anyone entry after curfew?', a: 'Certainly not! The only individuals with after-hours authorization are myself and faculty holding level-four clearance—such as Professor Graves.', wednesdayThought: 'A crucial detail: Dr. Graves had master access keys.' },
            { id: 'vance_confront_footprint', q: '[Confront: Footprint] We found size 11 diamond-tread prints on the void dais.', a: 'Size 11? Look at my footwear, girl. These are size 6 pointed Victorian calfskin boots. Those hideous treads belong to someone twice my weight.', wednesdayThought: 'Physical observation confirms her claim. Her delicate boots bear zero resemblance to the diamond tread.' },
            { id: 'vance_confront_register', q: '[Confront: Register] The register was bleached at 11:58 PM with chemical acid.', a: 'Bleached?! Desecration! I would never apply chemical solvents to parchment from 1890! Only one man in Nevermore has reagent acids in his desk—Arthur Graves!', wednesdayThought: 'Her fury is genuine. She identifies the chemical solvent as Graves’ private reagent.' }
          ]
        },
        student: {
          id: 'student',
          name: 'Julian Crane',
          role: 'Nocturnal Student & Outcast Scholar',
          age: 17,
          image: 'assets/images/suspect_student.jpg',
          initialSuspicion: 65,
          currentSuspicion: 65,
          bio: 'A brooding, nocturnal student with an obsession with antique prophecies and forgotten folklore. Frequently disciplined for lurking around restricted sections.',
          statedAlibi: 'Claims he was in the courtyard sketches near the gargoyles until 11:30 PM, after which he went to his dorm.',
          interrogation: [
            { id: 'julian_where', q: 'Where were you when the clock struck twelve?', a: 'Sitting on the gargoyle balustrade in the east quad sketching shadows. I like darkness, Wednesday, but I did not steal the book.', wednesdayThought: 'His fingers are stained with charcoal dust, not violet chemical salt.' },
            { id: 'julian_confront_footprint', q: '[Confront: Footprint] Are these diamond-pattern mud tracks yours?', a: 'These? I wear flat-soled canvas creepers. Look at the bottom—smooth rubber with zero tread. Whoever left that diamond grid was wearing heavy orthopedic boots.', wednesdayThought: 'Forensic inspection matches his statement: Julian’s soles are completely smooth.' },
            { id: 'julian_confront_letter', q: '[Confront: Torn Letter] This scorched letter mentions midnight and a raven seal.', a: 'That seal is the official signet of the Dark Antiquities Department! Professor Graves stamps every departmental memo with that exact raven flask!', wednesdayThought: 'Julian immediately identified Graves’ private signet seal.' }
          ]
        },
        professor: {
          id: 'professor',
          name: 'Dr. Arthur Graves',
          role: 'Professor of Dark Antiquities & Alchemy',
          age: 52,
          image: 'assets/images/suspect_professor.jpg',
          initialSuspicion: 45,
          currentSuspicion: 45,
          bio: 'Distinguished scholar and master of esoteric alchemy. Author of six treatises on occult transmutations. Possesses a sharp, condescending demeanor.',
          statedAlibi: 'Claims he was in his private alchemy laboratory in the West Wing all night distilling mandrake resin.',
          interrogation: [
            { id: 'graves_where', q: 'Where were you during the midnight hour?', a: 'Conducting a delicate fractional distillation of mandrake resin in my West Wing sanctum. It requires continuous thermal monitoring.', wednesdayThought: 'A remarkably airtight story. The more intricate the alibi, the more desperate the architect.' },
            { id: 'graves_confront_footprint', q: '[Confront: Footprint] Your boots have diamond treads, and violet potassium dust was found at the scene.', a: 'What absurd slander! Dozens of people wear orthopedic leather boots. And potassium permanganate is a standard lab reagent!', wednesdayThought: 'His jaw tightened. His hand instinctively slid behind his back.' },
            { id: 'graves_confront_letter', q: '[Confront: Torn Letter] We recovered a scorched note with your raven and flask signet seal.', a: 'Someone must have purloined my seal to frame me! Julian Crane has been sneaking around my office all week!', wednesdayThought: 'Desperation emerges. Accusing the student when cornered by his own unique seal.' },
            { id: 'graves_confront_register', q: '[Confront: Register] The register was erased with your lab acid at 11:58 PM. Spectral ink reveals your initials.', a: 'You insolent child! I was merely... the codex required immediate preservation treatment before it decayed!', wednesdayThought: 'The dam has broken. From "I never stepped inside" to "I took it for preservation" in a single breath.' }
          ]
        }
      },
      solution: {
        culpritId: 'professor',
        motive: 'alchemy_ritual',
        decisiveEvidence: 'register',
        explanation: 'Dr. Arthur Graves used his master faculty pass to enter the restricted archive at 11:58 PM. He took the Codex Nocturna to conduct forbidden shadow transmutation alchemy, using chemical solvents from his laboratory to erase his checkout record from the library ledger.'
      }
    },

    CASE_002: {
      id: 'CASE_002',
      title: 'The Bell Tower Poisoning',
      location: "Nevermore Academy - North Bell Tower",
      timeOfIncident: '5:00 PM (Afternoon Faculty Tea)',
      itemStolen: 'Principal Weems’ Black Porcelain Chalice (Laced with Nightshade)',
      description: 'During afternoon faculty tea, Principal Weems collapsed after sipping from her vintage black porcelain chalice. The tea was laced with a lethal distilled nightshade-hemlock alkaloid.',
      clues: {
        footprint: {
          id: 'clue_chalice',
          name: 'Poisoned Black Porcelain Chalice',
          locationIn3D: { x: -8.0, y: 4.2, z: -4.5 },
          image: 'assets/images/evidence_chalice.svg',
          category: 'Chemical Toxin',
          tags: ['#AtropaBelladonna', '#PorcelainChalice', '#HemlockAlkaloid'],
          description: 'A delicate black porcelain tea chalice bearing dried dark purple drops along the gilded rim. Forensic analysis detects a lethal hybrid of concentrated belladonna and water hemlock.',
          forensics: {
            timestamp: 'Prepared between 4:45 PM and 4:55 PM',
            botanicalProfile: 'Genetically altered Nightshade-Hemlock hybrid (Only cultivable in Greenhouse 3)',
            contradiction: 'Requires specialized botanical grafting skills unknown to ordinary staff.'
          },
          uvRevelation: "Under 365nm UV excitation: Luminescent yellow-green residue reveals concentrated atropine alkaloid dried onto the rim.",
          reagentProfile: {
            compound: "Vitali-Morin Nitric Acid & Alcoholic KOH Test",
            reaction: "Forms intense violet coloration confirming concentrated tropane alkaloid (Atropine)",
            confidence: "99.7% Toxicological Match",
            reactionColor: "#e11d48"
          },
          wednesdayNote: "Belladonna. A classic choice for those who lack the courage for a clean blade. But the hemlock hybrid suggests botanical vanity."
        },
        letter: {
          id: 'clue_roster',
          name: 'Greenhouse Seed Vault Roster',
          locationIn3D: { x: 7.2, y: 2.6, z: 6.0 },
          image: 'assets/images/evidence_roster.svg',
          category: 'Documentary Record',
          tags: ['#SeedVaultLog', '#MissingBelladonna', '#TornSignature'],
          description: 'The restricted botanical log from Greenhouse 3. Three packets of hybrid nightshade seeds were logged out at 4:30 PM today, but the recipient’s signature was torn away.',
          forensics: {
            timestamp: 'Logged at 4:30 PM today',
            tornPaperEdge: 'Torn with left-handed fingernail shears',
            contradiction: 'Only the head botanist holds the key to the locked toxic seed safe.'
          },
          uvRevelation: "Under 365nm UV excitation: Indented writing on the carbon sheet beneath confirms signature 'M. Thornhill - Belladonna Batch IV'.",
          reagentProfile: {
            compound: "Electrostatic Detection Apparatus (ESDA) Carbon Lift",
            reaction: "Recovers indented pressure grooves with 100% legibility",
            confidence: "99.1% Forensic Document Verification",
            reactionColor: "#fbbf24"
          },
          wednesdayNote: "Tearing out your signature is like burning your portrait after committing a robbery—it only emphasizes your presence."
        },
        register: {
          id: 'clue_glove',
          name: 'Soil-Stained Horticultural Glove',
          locationIn3D: { x: 1.5, y: 7.2, z: -6.8 },
          image: 'assets/images/evidence_glove.svg',
          category: 'Physical Residue',
          tags: ['#CarnivorousSap', '#VelvetLace', '#SmallHands'],
          description: 'A tailored gardening glove discarded behind the bell tower copper pipes. Stained with soil and sticky purple sap from carnivorous Drosera orchids.',
          forensics: {
            timestamp: 'Left in bell tower prior to 5:00 PM tea',
            chemicalTraces: 'Drosera carnivorous orchid digestive enzymes and nightshade root dust',
            contradiction: 'Directly matches the bespoke gloves worn by Ms. Thornhill in the conservatory.'
          },
          uvRevelation: "Under 365nm UV excitation: Carnivorous Drosera digestive enzymes glow bright neon coral pink along the fingertips.",
          reagentProfile: {
            compound: "Enzymatic Biuret Protease Assay",
            reaction: "Distinctive violet-pink enzymatic protease activity unique to Drosera carnivorous orchids",
            confidence: "99.6% Botanical Match",
            reactionColor: "#ec4899"
          },
          wednesdayNote: "Drosera orchid sap smells of sweet decay. Once it touches your fingers, no amount of soap can wash away the guilt."
        }
      },
      suspects: {
        botanist: {
          id: 'botanist',
          name: 'Marilyn Thornhill',
          role: 'Head Botanist & Conservatory Mistress',
          age: 46,
          image: 'assets/images/suspect_botanist.jpg',
          initialSuspicion: 45,
          currentSuspicion: 45,
          bio: 'The seemingly cheerful conservatory mistress of Nevermore. A master of exotic carnivorous flora and deadly hybrid poisons. Always wears velvet coats and gardening gloves.',
          statedAlibi: 'Claims she was in Greenhouse 3 all afternoon pruning rare carnivorous pitcher plants and never went near the bell tower.',
          interrogation: [
            { id: 'thornhill_where', q: 'Where were you when Principal Weems was poisoned at 5 PM?', a: 'Why, in my conservatory tending to my lovely carnivorous orchids! Pitcher plants require misting every hour on the hour, Wednesday.', wednesdayThought: 'Her smile is too sweet. Sweetness is almost always a facade for rot.' },
            { id: 'thornhill_confront_glove', q: '[Confront: Glove] We found your Drosera-stained glove behind the bell tower pipes.', a: 'Oh dear... I must have dropped it when I was inspecting the ivy on the bell tower yesterday! Anyone could have picked it up.', wednesdayThought: 'The soil on the glove was fresh and damp with 4:30 PM rain. She was in the tower today.' },
            { id: 'thornhill_confront_roster', q: '[Confront: Roster] Three packets of lethal belladonna seeds were checked out at 4:30 PM under your signature.', a: 'I... I keep thousands of seeds! Sometimes students borrow specimens without permission! You cannot hold me responsible for stolen flora!', wednesdayThought: 'Her cheerful veneer cracks. The toxic seed safe has only one key—around her neck.' }
          ]
        },
        fencer: {
          id: 'fencer',
          name: 'Vladislaus Stone',
          role: 'Fencing Master & Armory Warden',
          age: 50,
          image: 'assets/images/suspect_stone.svg',
          initialSuspicion: 50,
          currentSuspicion: 50,
          bio: 'A rigid martial instructor with an obsession with honor and dueling traditions. Regularly clashed with Weems over student safety regulations.',
          statedAlibi: 'Claims he was in the fencing salle oiling antique sabers between 4:30 PM and 5:30 PM.',
          interrogation: [
            { id: 'stone_where', q: 'Where were you during afternoon tea?', a: 'Polishing French foils in the salle. An honorable blade demands constant oiling, not gossiping over teacups.', wednesdayThought: 'His fingers smell of mineral oil and steel shavings. Zero plant residue.' },
            { id: 'stone_chalice', q: 'Did you enter the bell tower tea room?', a: 'Never. I do not drink chamomile infusions. If I have a grievance with Weems, I challenge her in the quad, not with coward’s poison.', wednesdayThought: 'A swordsman’s pride is annoying, but it eliminates him from petty chemical assassinations.' }
          ]
        },
        werewolf: {
          id: 'werewolf',
          name: 'Enid Sinclair',
          role: 'Werewolf Roommate & Gossip Columnist',
          age: 16,
          image: 'assets/images/suspect_enid.svg',
          initialSuspicion: 35,
          currentSuspicion: 35,
          bio: 'Wednesday’s hyperactive, color-loving roommate. Runs Nevermore’s top gossip blog. Observant of every whisper in the hallways.',
          statedAlibi: 'Was in the quad filming social dance videos with her friends from 4:15 PM until dinner.',
          interrogation: [
            { id: 'enid_where', q: 'Where were you when the tea chalice was dosed?', a: 'In the main courtyard filming TikTok dance transitions with Yoko! You can check my timestamped live stream, Wednesday!', wednesdayThought: 'Her live stream verifies her location continuously from 4:15 PM to 5:10 PM.' },
            { id: 'enid_thornhill', q: 'Did you see Ms. Thornhill earlier?', a: 'Yes! I saw Ms. Thornhill scurrying up the bell tower stairs at 4:45 PM carrying a velvet pouch and looking super tense!', wednesdayThought: 'A critical eyewitness placement. Thornhill was ascending the bell tower right before tea.' }
          ]
        }
      },
      solution: {
        culpritId: 'botanist',
        motive: 'poison_administration',
        decisiveEvidence: 'register',
        explanation: 'Marilyn Thornhill cultivated a lethal hybrid of nightshade and hemlock in Greenhouse 3. She accessed the bell tower tea room at 4:50 PM, dosed Principal Weems’ personal black chalice, and concealed her gloves behind the copper pipes.'
      }
    },

    CASE_003: {
      id: 'CASE_003',
      title: 'The Gargoyle\'s Curse',
      location: "The North Parapet & Belfry",
      timeOfIncident: '1:13 PM (The Eclipse Hour)',
      itemStolen: 'Stone Gargoyle Severed (Attempted Assassination)',
      description: 'At the exact climax of the eclipse, a two-ton carved limestone gargoyle fractured cleanly from the parapet and crashed into the quad, narrowly missing students.',
      clues: {
        footprint: {
          id: 'clue_fracture',
          name: 'Resonant Acoustic Stone Fracture',
          locationIn3D: { x: -6.8, y: 6.5, z: -3.0 },
          image: 'assets/images/evidence_fracture.svg',
          category: 'Acoustic Forensics',
          tags: ['#SonicCleavage', '#NoChiselMarks', '#HighFrequency'],
          description: 'A slab of sheared gargoyle stone. The fracture surface is glassy and perfectly flat—characteristic of ultra-high frequency acoustic standing wave resonance, not hammer blows.',
          forensics: {
            timestamp: '1:13 PM during peak eclipse resonance',
            frequencyEstimate: '432 Hz modulated to 14,000 Hz harmonic',
            contradiction: 'Could only be produced by an acoustic Siren song amplified by metal.'
          },
          uvRevelation: "Under 365nm UV excitation: High-stress micro-fracture patterns reveal nodal standing wave nodes matching human vocal chord acoustic nodes.",
          reagentProfile: {
            compound: "Piezoelectric Resonance Scanning",
            reaction: "Acoustic micro-crystallography shows zero impact percussion; 100% standing frequency shearing",
            confidence: "99.5% Physical Proof",
            reactionColor: "#06b6d4"
          },
          wednesdayNote: "Sound can break glass, crystal, and bone. In the hands of a trained Siren, stone is merely a slow-vibrating liquid."
        },
        letter: {
          id: 'clue_tuning',
          name: 'Silver Siren Acoustic Tuning Fork',
          locationIn3D: { x: 8.2, y: 3.5, z: 3.2 },
          image: 'assets/images/evidence_tuning_fork.svg',
          category: 'Acoustic Instrument',
          tags: ['#SirenSongFork', '#432Hz', '#SilverPendantCharm'],
          description: 'A heavy sterling silver tuning fork recovered from the parapet gutter. Stamped with 432 Hz and engraved with a mermaid tail insignia.',
          forensics: {
            timestamp: 'Dropped during the 1:13 PM eclipse',
            heraldry: 'Barclay Siren Choral crest',
            contradiction: 'Directly owned by Bianca Barclay for harmonic pitch training.'
          },
          uvRevelation: "Under 365nm UV excitation: Sea-salt electrolyte residue on the handle confirms Siren biological touch.",
          reagentProfile: {
            compound: "Silver Nitrate Precipitation Reaction",
            reaction: "Dense white curdy silver chloride precipitate confirming marine saltwater electrolyte perspiration",
            confidence: "99.8% Siren Biological Match",
            reactionColor: "#93c5fd"
          },
          wednesdayNote: "A tuning fork engraved with your own crest. Narcissism is the downfall of so many promising villains."
        },
        register: {
          id: 'clue_scarf',
          name: 'Torn Blue Silk Siren Scarf',
          locationIn3D: { x: -0.5, y: 2.2, z: 7.5 },
          image: 'assets/images/evidence_siren_scarf.svg',
          category: 'Fabric Evidence',
          tags: ['#BlueSilk', '#ParapetSnag', '#NevermoreEmblem'],
          description: 'A strip of royal blue iridescent silk snagged on the stone gargoyle talon. Woven with authentic Siren sea-silk thread.',
          forensics: {
            timestamp: 'Torn as the figure fled the belfry',
            threadMaterial: 'Sea-silk extracted from Mediterranean mollusks',
            contradiction: 'Matches Bianca Barclay’s signature concert performance scarf.'
          },
          uvRevelation: "Under 365nm UV excitation: Byssus mollusk sea-silk filaments fluoresce iridescent sapphire blue.",
          reagentProfile: {
            compound: "Protein Byssus Solubility Assay",
            reaction: "Insoluble in dilute acids; characteristic of authentic Mediterranean Pinna nobilis sea-silk",
            confidence: "99.9% Material Identification",
            reactionColor: "#3b82f6"
          },
          wednesdayNote: "Sea-silk is impervious to water, but exceedingly fragile when caught on 19th-century gothic limestone."
        }
      },
      suspects: {
        siren: {
          id: 'siren',
          name: 'Bianca Barclay',
          role: 'Siren Choral Mistress & Prefect',
          age: 18,
          image: 'assets/images/suspect_siren.jpg',
          initialSuspicion: 55,
          currentSuspicion: 55,
          bio: 'The reigning Siren prefect. Highly ambitious and secretly testing whether acoustic siren song resonance could shatter stone wards.',
          statedAlibi: 'Claims she was in the dorms writing choral lyrics during the eclipse.',
          interrogation: [
            { id: 'bianca_eclipse', q: 'Where were you during the eclipse at 1:13 PM?', a: 'In my dorm room, listening to rain tracks and studying lyrics. The eclipse was too dark for outdoor practice.', wednesdayThought: 'Her throat muscles are strained. She was screaming or singing at maximum volume within the hour.' },
            { id: 'bianca_confront_fork', q: '[Confront: Fork] We found your Barclay silver tuning fork on the belfry parapet.', a: 'That fork went missing from my choir bag days ago! Anyone could have taken it to frame me!', wednesdayThought: 'Her voice quavered. Deflection is the siren’s last defense when song fails.' },
            { id: 'bianca_confront_scarf', q: '[Confront: Scarf] Your sea-silk scarf was snagged on the gargoyle talon.', a: 'I... I was only testing if my song could crack the old wards! I didn’t know the whole gargoyle would shear off! It was an accident, Wednesday!', wednesdayThought: 'Full confession. Vanity pushed her song beyond the threshold of acoustic destruction.' }
          ]
        },
        gorgon: {
          id: 'gorgon',
          name: 'Ajax Petropolus',
          role: 'Gorgon Sculptor & Stone Artisan',
          age: 17,
          image: 'assets/images/suspect_ajax.svg',
          initialSuspicion: 40,
          currentSuspicion: 40,
          bio: 'A laid-back Gorgon student who carves stone statues. Always wears a beanie to prevent accidentally petrifying classmates with his snake hair.',
          statedAlibi: 'Was in the sculpture workshop chiseling clay models.',
          interrogation: [
            { id: 'ajax_where', q: 'Did you use your chisel on the belfry gargoyle?', a: 'Whoa, no way! I was down in the studio shaping clay gargoyles. Real stone takes days to chisel, and that break was totally smooth!', wednesdayThought: 'His hands are covered in wet terracotta clay, not sheared limestone powder.' },
            { id: 'ajax_frequency', q: 'Could a Gorgon gaze shear stone in half?', a: 'Gorgons turn flesh into stone, Wednesday, we don’t make stone explode. That took crazy high-pitch sound waves!', wednesdayThought: 'Acoustic physics exonerates him completely.' }
          ]
        },
        weems: {
          id: 'weems',
          name: 'Principal Larissa Weems',
          role: 'Nevermore Headmistress & Shapeshifter',
          age: 48,
          image: 'assets/images/suspect_weems.svg',
          initialSuspicion: 35,
          currentSuspicion: 35,
          bio: 'The imposing headmistress of Nevermore Academy. Obsessed with protecting the school’s reputation from municipal crackdowns.',
          statedAlibi: 'Was on a conference call with Jericho Mayor Walker in her office during the eclipse.',
          interrogation: [
            { id: 'weems_where', q: 'Did you inspect the belfry masonry before the collapse?', a: 'I had an architectural engineer assess the tower two weeks ago. I certainly would not endanger students by climbing the parapet during an eclipse.', wednesdayThought: 'Her telephone log with Mayor Walker confirms her alibi at 1:10 PM.' },
            { id: 'weems_gargoyle', q: 'Do you suspect a student was responsible?', a: 'If a student has weaponized their outcast abilities against the architecture, they will face immediate expulsion and tribunal sanction.', wednesdayThought: 'Her indignation is administrative, not guilty.' }
          ]
        }
      },
      solution: {
        culpritId: 'siren',
        motive: 'sonic_experiment',
        decisiveEvidence: 'letter',
        explanation: 'Bianca Barclay climbed to the north parapet during the eclipse to test if her siren vocal frequencies could shatter stone gargoyle wards. Using her silver 432 Hz tuning fork, she harmonized with the stone until acoustic resonance sheared the statue clean off.'
      }
    },

    CASE_004: {
      id: 'CASE_004',
      title: 'The Phantom of the Crypt',
      location: "Ancestral Crackstone Crypt",
      timeOfIncident: '2:00 AM (The Witching Hour)',
      itemStolen: 'The Silver Relic Skull of Goody Addams (Replaced with a Black Dahlia)',
      description: 'At 2:00 AM, the sealed iron doors of the Crackstone crypt were breached. Goody Addams’ silver relic skull was stolen, leaving behind a freshly trimmed black dahlia on the tomb slab.',
      clues: {
        footprint: {
          id: 'clue_dahlia',
          name: 'Scalpel-Trimmed Black Dahlia',
          locationIn3D: { x: -6.5, y: 5.8, z: -6.2 },
          image: 'assets/images/evidence_black_dahlia.svg',
          category: 'Botanical Clue',
          tags: ['#BlackDahlia', '#PaletteKnifeCut', '#LinseedOil'],
          description: 'A midnight-black dahlia resting on the stone sarcophagus. The stem was severed at a precise 45-degree bevel using an artist’s flexible palette knife coated with linseed oil.',
          forensics: {
            timestamp: 'Placed at approximately 2:00 AM',
            chemicalResidue: 'Linseed oil and turpentine resin',
            contradiction: 'Matches the exact palette knife used by psychic painter Xavier Thorpe.'
          },
          uvRevelation: "Under 365nm UV excitation: Linseed oil residue on the stem glows soft yellow-green, showing the beveled cut of a metal palette knife.",
          reagentProfile: {
            compound: "Gas Chromatography - Turpentine & Linseed Profile",
            reaction: "Direct match to Rembrandt Artist Oils vehicle formulation",
            confidence: "99.4% Studio Material Match",
            reactionColor: "#10b981"
          },
          wednesdayNote: "A black dahlia. A symbol of betrayal, mourning, and pretentious artistic flair."
        },
        letter: {
          id: 'clue_sketch',
          name: 'Prophetic Charcoal Sketch',
          locationIn3D: { x: 7.5, y: 2.8, z: 5.8 },
          image: 'assets/images/evidence_charcoal_sketch.svg',
          category: 'Prophetic Art',
          tags: ['#CharcoalSketch', '#CryptBreach', '#PsychicVision'],
          description: 'A charcoal sketch dropped in the crypt weeds depicting the open tomb slab and glowing eyes, drawn hours before the crime took place.',
          forensics: {
            timestamp: 'Drawn around 10:00 PM yesterday',
            artistStyle: 'Hyper-realistic prophetic charcoal with Xavier Thorpe’s monogram',
            contradiction: 'Proves the artist foresaw the exact breach before it occurred.'
          },
          uvRevelation: "Under 365nm UV excitation: Xavier's psychic signet watermark 'XT' glows under ultraviolet illumination.",
          reagentProfile: {
            compound: "Vine Charcoal & Fixative Micro-Spectrometry",
            reaction: "Matches the exact batch of Winsor & Newton compressed charcoal in Xavier's studio",
            confidence: "99.8% Hand Attribution",
            reactionColor: "#a855f7"
          },
          wednesdayNote: "Psychic visions are either a curse or a convenient excuse for burglary. I intend to prove the latter."
        },
        register: {
          id: 'clue_rag',
          name: 'Turpentine Paint Rag & Cemetery Mud',
          locationIn3D: { x: 6.8, y: 6.2, z: -4.5 },
          image: 'assets/images/evidence_paint_rag.svg',
          category: 'Chemical Residue',
          tags: ['#Turpentine', '#CemeterySoil', '#BurntUmberPigment'],
          description: 'A linen rag soaked in turpentine and smeared with Burnt Umber oil pigment and grave-dirt clay from the Crackstone mausoleum threshold.',
          forensics: {
            timestamp: 'Deposited during the 2:00 AM break-in',
            chemicalTraces: 'Raw linseed oil, distilled turpentine, and red cemetery clay',
            contradiction: 'Directly matches the art supplies in Xavier’s shed studio.'
          },
          uvRevelation: "Under 365nm UV excitation: Fluorescing mineral hydrocarbons confirm cemetery clay mixed with distilled oil spirits.",
          reagentProfile: {
            compound: "Mineral Spirits Evaporation Chromatography",
            reaction: "Pure distilled gum turpentine distillate matching artist-grade solvent",
            confidence: "99.2% Chemical Match",
            reactionColor: "#f59e0b"
          },
          wednesdayNote: "Artists claim paint is an expression of the soul. In this instance, it is an expression of careless forensic contamination."
        }
      },
      suspects: {
        artist: {
          id: 'artist',
          name: 'Xavier Thorpe',
          role: 'Psychic Painter & Raven Artist',
          age: 18,
          image: 'assets/images/suspect_xavier.svg',
          initialSuspicion: 60,
          currentSuspicion: 60,
          bio: 'A brooding psychic artist whose sketches can come alive. Prone to sleepwalking and vivid prophetic trances regarding the Addams lineage.',
          statedAlibi: 'Claims he was asleep in his art studio shed all night after a severe migraine.',
          interrogation: [
            { id: 'xavier_where', q: 'Where were you at 2:00 AM when the crypt was opened?', a: 'In my shed studio sleeping off a terrible psychic trance. I had violent dreams of shadows digging up bones.', wednesdayThought: 'His fingers are covered in Burnt Umber oil paint and red clay under his fingernails.' },
            { id: 'xavier_confront_sketch', q: '[Confront: Sketch] We found your signed prophetic sketch of the open tomb dropped in the weeds.', a: 'I drew that before bed because the vision wouldn’t leave my skull! I didn’t steal anything, Wednesday! The visions control me sometimes!', wednesdayThought: 'A psychic trance. He was sleepwalking under the influence of his own prophetic painting.' },
            { id: 'xavier_confront_dahlia', q: '[Confront: Dahlia] The dahlia stem was beveled with your palette knife and linseed oil.', a: 'My palette knife... I woke up with dirt on my boots and my knife missing. If I took the skull, it was in my sleep! I would never desecrate Goody Addams deliberately!', wednesdayThought: 'Compelled by his living paintings. His subconscious guided him to the relic.' }
          ]
        },
        rowan: {
          id: 'rowan',
          name: 'Rowan Laslow',
          role: 'Telekinetic Outcast & Astrologer',
          age: 17,
          image: 'assets/images/suspect_rowan.svg',
          initialSuspicion: 45,
          currentSuspicion: 45,
          bio: 'A reclusive telekinetic student terrified of centuries-old prophecies. Convinced that the Addams bloodline will bring destruction upon Nevermore.',
          statedAlibi: 'Claims he was in the observatory taking astrological moon measurements.',
          interrogation: [
            { id: 'rowan_where', q: 'Were you lurking near the Crackstone Crypt?', a: 'No! I stay away from graves! The bad psychic energy gives me asthma attacks. I was in the tower reading star charts!', wednesdayThought: 'His inhaler is in his pocket, and his shoes have zero cemetery clay on the treads.' },
            { id: 'rowan_goody', q: 'Did you want Goody Addams’ relic destroyed?', a: 'Goody Addams was a witch of doom! But I use telekinesis, not palette knives and paint rags! Look at Xavier—he paints crypts every single day!', wednesdayThought: 'Fearful, but forensically clean.' }
          ]
        },
        galpin: {
          id: 'galpin',
          name: 'Sheriff Donovan Galpin',
          role: 'Jericho Town Sheriff',
          age: 49,
          image: 'assets/images/suspect_galpin.svg',
          initialSuspicion: 35,
          currentSuspicion: 35,
          bio: 'The skeptical sheriff of Jericho. Believes Nevermore outcasts are the source of every criminal disturbance in the county.',
          statedAlibi: 'Was at the Jericho police precinct filing evening patrol reports.',
          interrogation: [
            { id: 'galpin_where', q: 'Did your deputies patrol near the old cemetery at 2 AM?', a: 'Deputy Santiago drove the perimeter road at 1:30 AM. He reported nothing out of the ordinary until the academy alarm tripped.', wednesdayThought: 'Police dispatch logs confirm his presence at the precinct desk.' },
            { id: 'galpin_skull', q: 'Did you take the silver relic skull into evidence?', a: 'We don’t steal bones from crypts, kid. That’s an outcast ritual, and I’m betting on one of your fellow freaks.', wednesdayThought: 'His contempt for outcast folklore is clear; he had no interest in occult relics.' }
          ]
        }
      },
      solution: {
        culpritId: 'artist',
        motive: 'psychic_trance',
        decisiveEvidence: 'letter',
        explanation: 'Xavier Thorpe entered a deep psychic trance at midnight. Compelled by his prophetic visions, he sleepwalked into the Crackstone crypt, severed the silver skull, and left behind a black dahlia cut with his palette knife to manifest his living painting.'
      }
    },

    CASE_005: {
      id: 'CASE_005',
      title: 'The Hyde\'s Awakening',
      location: "West Wing Medical Clinic & Greenhouse",
      timeOfIncident: '3:15 AM (The Hour of the Beast)',
      itemStolen: 'Hydral-4 Neuro-Stimulant Sedative (Claw Gouges on Glass)',
      description: 'At 3:15 AM, ferocious claw marks shattered the reinforced glass of the medical dispensary. Three vials of Hydral-4 sedative were seized, and hypnotic audio tapes were tampered with.',
      clues: {
        footprint: {
          id: 'clue_claw',
          name: 'Shredded Reinforced Glass & Beast Claws',
          locationIn3D: { x: -7.8, y: 2.2, z: 4.5 },
          image: 'assets/images/evidence_hyde_claws.svg',
          category: 'Physical Trauma',
          tags: ['#HydeClaws', '#CashmereFiber', '#ShatteredGlass'],
          description: 'Shattered safety glass deeply gouged with monstrous three-inch claws floating in zero-gravity. Caught in the jagged shards is a beige cashmere coat fiber and chemical powder.',
          forensics: {
            timestamp: '3:15 AM exact alarm trigger',
            clawSpread: '14-inch monster palm span (Matches Hyde morphology)',
            fiberAnalysis: 'Fine Italian beige cashmere with lavender perfume residue',
            contradiction: 'Directly matches the bespoke wardrobe of Dr. Valerie Kinbott.'
          },
          uvRevelation: "Under 365nm UV excitation: High-end Italian cashmere wool fibers fluoresce soft beige-violet with lavender linalool perfume droplets.",
          reagentProfile: {
            compound: "Keratin Fiber Micro-Spectroscopy & GC-MS Fragrance Profile",
            reaction: "Matches Dr. Kinbott's bespoke Italian overcoat and Yardley English Lavender eau de toilette",
            confidence: "99.7% Fiber Match",
            reactionColor: "#fbbf24"
          },
          wednesdayNote: "Monsters do not wear Italian cashmere. Which means the monster was accompanied by a master."
        },
        letter: {
          id: 'clue_sedative',
          name: 'Shattered Hydral-4 Ampoule',
          locationIn3D: { x: 7.6, y: 6.5, z: -4.2 },
          image: 'assets/images/evidence_sedative_vial.svg',
          category: 'Chemical Stimulant',
          tags: ['#Hydral4', '#HypnoticChemical', '#AlkaloidCocktail'],
          description: 'A broken medicinal ampoule labeled Hydral-4: a high-potency neuro-chemical cocktail designed to dissolve human conscious restraint and induce monstrous transformations.',
          forensics: {
            timestamp: 'Extracted from locked dispensary at 3:10 AM',
            prescriptionAuthority: 'Authorized under psychological clinical trials by Dr. Kinbott',
            contradiction: 'Could only be unlocked with the psychological clinic master code.'
          },
          uvRevelation: "Under 365nm UV excitation: Neuro-chemical stimulant residue glows bright fluorescent amber along the fractured ampoule neck.",
          reagentProfile: {
            compound: "Marquis Reagent Alkaloid Assay",
            reaction: "Vibrant yellow-orange turning deep red confirmation of synthesized Hydral-4 transformation chemical",
            confidence: "99.9% Chemical Verification",
            reactionColor: "#f97316"
          },
          wednesdayNote: "A sedative formulated to awaken nightmares instead of soothing them. Medical malpractice at its finest."
        },
        register: {
          id: 'clue_tape',
          name: 'Hypnotherapy Dictaphone Cassette',
          locationIn3D: { x: 0.0, y: 4.8, z: -7.8 },
          image: 'assets/images/evidence_cassette_tape.svg',
          category: 'Audio Record',
          tags: ['#HypnosisTape', '#Dictaphone', '#TriggerWords'],
          description: 'A micro-cassette tape recovered from the clinic floor floating in the void. Under analysis, a soft female voice repeats hypnotic trigger phrases: "When the moon crests, the beast obeys. Awaken, my pet."',
          forensics: {
            timestamp: 'Recorded yesterday evening in the therapy office',
            voiceSpectrogram: 'Exact vocal match to Dr. Valerie Kinbott',
            contradiction: 'Proves the therapist was using hypnosis to trigger and command the Hyde.'
          },
          uvRevelation: "Under 365nm UV excitation: Fingerprints in golden fountain pen ink on the cassette casing match Dr. Kinbott's clinical pen.",
          reagentProfile: {
            compound: "Voice Spectrogram Harmonic Analysis",
            reaction: "F1/F2 vocal formant frequency resonance perfectly matches Dr. Kinbott's clinical voice pattern",
            confidence: "100% Biometric Audio Identification",
            reactionColor: "#ec4899"
          },
          wednesdayNote: "Never trust a therapist who takes notes with a gold fountain pen and records bedtime stories for predators."
        }
      },
      suspects: {
        therapist: {
          id: 'therapist',
          name: 'Dr. Valerie Kinbott',
          role: 'Academy Psychoanalyst',
          age: 44,
          image: 'assets/images/suspect_kinbott.svg',
          initialSuspicion: 50,
          currentSuspicion: 50,
          bio: 'The polished, soft-spoken therapist of Nevermore students. Specializes in behavioral hypnotherapy and wears elegant beige cashmere coats.',
          statedAlibi: 'Claims she was at home sleeping and only came to campus after hearing the emergency alarm sirens at 4:00 AM.',
          interrogation: [
            { id: 'kinbott_where', q: 'Where were you when the dispensary was shredded at 3:15 AM?', a: 'Asleep in my apartment in Jericho. I came rushing here only after the police sirens woke me.', wednesdayThought: 'Her pulse is measured, but her beige cashmere coat has a tiny tear along the left hem.' },
            { id: 'kinbott_confront_claw', q: '[Confront: Fiber] We found beige cashmere threads caught in the shattered dispensary glass.', a: 'Cashmere is common, Wednesday! I visit the clinic daily for client files. A thread could have caught on anything!', wednesdayThought: 'The thread was coated in fresh Hydral-4 droplets that shattered at 3:15 AM.' },
            { id: 'kinbott_confront_tape', q: '[Confront: Tape] We listened to your dictaphone tape repeating hypnotic commands: "Awaken, my pet."', a: 'You had no right to listen to confidential therapy sessions! That was... an experimental desensitization protocol!', wednesdayThought: 'Her calm psychological facade crumbles. The hypnotist has been unmasked as the master of the beast.' }
          ]
        },
        tyler: {
          id: 'tyler',
          name: 'Tyler Galpin',
          role: 'Jericho Barista & Forest Drifter',
          age: 18,
          image: 'assets/images/suspect_tyler.svg',
          initialSuspicion: 55,
          currentSuspicion: 55,
          bio: 'A seemingly unassuming barista at the Weathervane Cafe. Subject to strange memory blackouts and unexplainable night terrors.',
          statedAlibi: 'Claims he was closing up the cafe and cleaning espresso machines until 11 PM, then fell asleep with missing hours.',
          interrogation: [
            { id: 'tyler_where', q: 'Where were you between 2:00 AM and 4:00 AM?', a: 'I... I woke up in the woods behind the cafe with mud on my hands. I’ve been having these blackouts, Wednesday. I swear I don’t know what happens to me.', wednesdayThought: 'His fear is authentic. He is a puppet being triggered without conscious recollection.' },
            { id: 'tyler_kinbott', q: 'What does Dr. Kinbott do during your hypnotherapy sessions?', a: 'She uses this gold pocket watch and plays recordings of soft music. Then everything goes black until the next morning.', wednesdayThought: 'He confirms Kinbott’s hypnotic conditioning. The beast has a puppet master.' }
          ]
        },
        walker: {
          id: 'walker',
          name: 'Mayor Noble Walker',
          role: 'Jericho Mayor & Town Historian',
          age: 62,
          image: 'assets/images/suspect_walker.svg',
          initialSuspicion: 35,
          currentSuspicion: 35,
          bio: 'The long-standing mayor of Jericho and proprietor of Pilgrim World. Desperate to keep the town’s tourism thriving despite gruesome monster sightings.',
          statedAlibi: 'Was attending a town council budget meeting until midnight, then stayed at his mayoral manor.',
          interrogation: [
            { id: 'walker_where', q: 'Did you know Hydral-4 was being tested on Nevermore outcasts?', a: 'Nevermore’s internal medical affairs are confidential. As mayor, my priority is keeping panic off the streets of Jericho.', wednesdayThought: 'He is obsessed with municipal image, but lacks medical or chemical knowledge.' },
            { id: 'walker_beast', q: 'Do you believe a monster is stalking the woods?', a: 'Bear attacks, Wednesday. Wild bears from the mountains. Let the authorities handle it without student melodrama.', wednesdayThought: 'Willful political denial. He is blind to the dark conspiracy operating in his town.' }
          ]
        }
      },
      solution: {
        culpritId: 'therapist',
        motive: 'hypnotic_control',
        decisiveEvidence: 'register',
        explanation: 'Dr. Valerie Kinbott utilized neuro-stimulant Hydral-4 cocktails and behavioral hypnosis to awaken and control the dormant Hyde. She breached the dispensary at 3:15 AM with the beast to harvest more stimulants and enforce hypnotic compliance.'
      }
    }
  };

  // Active Case State
  let currentCaseId = 'CASE_001';
  let CASE_DATA = ALL_CASES[currentCaseId];

  // ==========================================================================
  // 2. PROCEDURAL SOUND ENGINE (WITH JUMPSCARE SCREECH & THUNDER)
  // ==========================================================================

  class MysteryAudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
      this.droneOsc1 = null;
      this.droneOsc2 = null;
      this.droneGain = null;
      this.isDronePlaying = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.isMuted) {
        if (this.droneGain) this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } else {
        if (this.droneGain && this.isDronePlaying) {
          this.droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        }
      }
      return !this.isMuted;
    }

    startDrone() {
      if (this.isDronePlaying) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(73.42, this.ctx.currentTime); // D2
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(110.00, this.ctx.currentTime); // A2

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, this.ctx.currentTime);
        gain.gain.setValueAtTime(this.isMuted ? 0 : 0.035, this.ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start();
        osc2.start();

        this.droneOsc1 = osc1;
        this.droneOsc2 = osc2;
        this.droneGain = gain;
        this.isDronePlaying = true;
      } catch (e) {}
    }

    playClick() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(900, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.045);
      } catch (e) {}
    }

    playClueStinger() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, t);
        osc2.frequency.setValueAtTime(622.25, t); // D5 & Eb5 minor second

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.12, t + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + 1.25);
        osc2.stop(t + 1.25);
      } catch (e) {}
    }

    playSuccessChime() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = this.ctx.currentTime + (idx * 0.08);

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(0.09, t + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.65);
        });
      } catch (e) {}
    }

    playVerdictSuccess() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const chord = [293.66, 349.23, 440.00, 587.33];
        chord.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = this.ctx.currentTime;
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(0.08, t + 0.15);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 3.0);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 3.1);
        });
      } catch (e) {}
    }

    playVerdictFail() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const chord = [164.81, 233.08, 311.13];
        chord.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = this.ctx.currentTime;
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(0.12, t + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 1.9);
        });
      } catch (e) {}
    }

    // Ear-piercing FM Jumpscare Screech
    playJumpscareScreech() {
      this.init();
      if (!this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        // Carrier and Modulator for terrifying harmonic screech
        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const masterGain = this.ctx.createGain();

        carrier.type = 'sawtooth';
        carrier.frequency.setValueAtTime(1400, t);
        carrier.frequency.exponentialRampToValueAtTime(2600, t + 0.15);
        carrier.frequency.exponentialRampToValueAtTime(400, t + 0.8);

        modulator.type = 'square';
        modulator.frequency.setValueAtTime(280, t);
        modGain.gain.setValueAtTime(800, t);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);

        masterGain.gain.setValueAtTime(0, t);
        masterGain.gain.linearRampToValueAtTime(0.35, t + 0.03);
        masterGain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

        carrier.connect(masterGain);
        masterGain.connect(this.ctx.destination);

        // Sub-bass heavy shock thump
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(90, t);
        subOsc.frequency.exponentialRampToValueAtTime(32, t + 0.5);
        subGain.gain.setValueAtTime(0.4, t);
        subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);

        carrier.start(t);
        modulator.start(t);
        subOsc.start(t);
        carrier.stop(t + 1.25);
        modulator.stop(t + 1.25);
        subOsc.stop(t + 0.65);
      } catch (e) {}
    }

    // Atmospheric Thunder Rumble
    playThunder() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const bufferSize = this.ctx.sampleRate * 2.5;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.7));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 2.0);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.4);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
      } catch (e) {}
    }
  }

  const audio = new MysteryAudioEngine();

  // ==========================================================================
  // 3. PERSISTENT MULTI-CASE GAME STATE
  // ==========================================================================

  const STORAGE_KEY = 'wednesdays_mind_multicase_v2';

  let gameState = {
    currentView: 'landing',
    activeCaseId: 'CASE_001',
    unlockedCases: ['CASE_001'],
    score: 100,
    caseProgress: {
      CASE_001: { cluesFound: { footprint: false, letter: false, register: false }, solved: false },
      CASE_002: { cluesFound: { footprint: false, letter: false, register: false }, solved: false },
      CASE_003: { cluesFound: { footprint: false, letter: false, register: false }, solved: false },
      CASE_004: { cluesFound: { footprint: false, letter: false, register: false }, solved: false },
      CASE_005: { cluesFound: { footprint: false, letter: false, register: false }, solved: false }
    },
    cluesCollectedCount: 0,
    pinboardConnections: [],
    userNotes: '',
    selectedSuspect: 'librarian',
    selectedClueForInspection: null,
    activeClueFilter: 'all',
    uvModes: {},
    reagentActive: {},
    startTime: Date.now()
  };

  function loadGameState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        gameState = Object.assign(gameState, parsed);
        if (!gameState.unlockedCases || !Array.isArray(gameState.unlockedCases) || gameState.unlockedCases.length === 0) {
          gameState.unlockedCases = ['CASE_001'];
        }
        if (parsed.activeCaseId && ALL_CASES[parsed.activeCaseId]) {
          if (gameState.unlockedCases.includes(parsed.activeCaseId)) {
            currentCaseId = parsed.activeCaseId;
          } else {
            currentCaseId = gameState.unlockedCases[0] || 'CASE_001';
          }
          CASE_DATA = ALL_CASES[currentCaseId];
        }
      }
    } catch (e) {}
    updateClueCountForCurrentCase();
  }

  function saveGameState() {
    try {
      gameState.activeCaseId = currentCaseId;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch (e) {}
    updateHUDStats();
  }

  function updateClueCountForCurrentCase() {
    const curProg = gameState.caseProgress[currentCaseId];
    if (curProg && curProg.cluesFound) {
      let count = 0;
      if (curProg.cluesFound.footprint) count++;
      if (curProg.cluesFound.letter) count++;
      if (curProg.cluesFound.register) count++;
      gameState.cluesCollectedCount = count;
    } else {
      gameState.cluesCollectedCount = 0;
    }
  }

  function resetGame() {
    if (confirm("Reset all 5 Nevermore case investigations and start over?")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  }

  function updateHUDStats() {
    updateClueCountForCurrentCase();
    const clueCountEl = document.getElementById('hud-clues-count');
    const scoreCountEl = document.getElementById('hud-score-count');
    const trackerDotFootprint = document.getElementById('dot-footprint');
    const trackerDotLetter = document.getElementById('dot-letter');
    const trackerDotRegister = document.getElementById('dot-register');

    if (clueCountEl) clueCountEl.textContent = `${gameState.cluesCollectedCount}/3`;
    if (scoreCountEl) scoreCountEl.textContent = gameState.score;

    const cur = gameState.caseProgress[currentCaseId].cluesFound;
    if (trackerDotFootprint) trackerDotFootprint.classList.toggle('collected', !!cur.footprint);
    if (trackerDotLetter) trackerDotLetter.classList.toggle('collected', !!cur.letter);
    if (trackerDotRegister) trackerDotRegister.classList.toggle('collected', !!cur.register);

    const navBadge = document.getElementById('nav-clue-badge');
    if (navBadge) navBadge.textContent = `${gameState.cluesCollectedCount}/3`;

    // Update Case Pills with Locked / Solved / Active states
    document.querySelectorAll('.case-pill').forEach(pill => {
      const cId = pill.dataset.case;
      const isUnlocked = gameState.unlockedCases && gameState.unlockedCases.includes(cId);
      const isSolved = gameState.caseProgress[cId] && gameState.caseProgress[cId].solved;
      const isActive = (cId === currentCaseId);

      pill.classList.toggle('active', isActive);
      pill.classList.toggle('solved', isSolved);
      pill.classList.toggle('locked', !isUnlocked);

      const badge = pill.querySelector('.case-status-badge');
      if (badge) {
        if (!isUnlocked) {
          badge.textContent = '🔒 LOCKED';
        } else if (isSolved) {
          badge.textContent = '✓ SOLVED';
        } else if (isActive) {
          badge.textContent = 'ACTIVE';
        } else {
          badge.textContent = 'UNSOLVED';
        }
      }
    });
  }

  // ==========================================================================
  // 4. JUMPSCARE MECHANISM & SPOOKY ATMOSPHERE
  // ==========================================================================

  function triggerJumpscare(customQuote) {
    audio.playJumpscareScreech();
    const overlay = document.getElementById('jumpscare-overlay');
    const quoteEl = document.getElementById('jumpscare-quote');
    if (!overlay) return;

    if (customQuote && quoteEl) {
      quoteEl.textContent = customQuote;
    } else if (quoteEl) {
      quoteEl.textContent = '"DID YOU THINK THE VOID WAS EMPTY? WEDNESDAY WARNED YOU."';
    }

    overlay.classList.add('active');

    // Auto dismiss after 1.8 seconds or immediately on click
    const dismiss = () => {
      overlay.classList.remove('active');
      overlay.removeEventListener('click', dismiss);
    };
    overlay.addEventListener('click', dismiss);
    setTimeout(dismiss, 1800);
  }

  // Security Lockout Modal for Locked Cases
  function showSecurityLockoutModal(caseId, customMsg) {
    const overlay = document.getElementById('lockout-modal-overlay');
    const titleEl = document.getElementById('lockout-modal-title');
    const descEl = document.getElementById('lockout-modal-desc');
    if (!overlay) return;

    if (titleEl) titleEl.textContent = `CLASSIFIED TRIBUNAL FILE // ${caseId}`;
    if (descEl) {
      descEl.textContent = customMsg || `This case file is under Nevermore High Inquisitor seal. You must formally solve the prior case at the Tribunal before unlocking this record.`;
    }
    overlay.classList.add('active');
  }

  // Randomized Spooky Lightning Flashes
  function triggerLightning() {
    const flashEl = document.getElementById('lightning-flash');
    if (!flashEl) return;
    flashEl.classList.add('flash');
    setTimeout(() => flashEl.classList.remove('flash'), 80);
    setTimeout(() => {
      flashEl.classList.add('flash');
      setTimeout(() => flashEl.classList.remove('flash'), 120);
      audio.playThunder();
    }, 140);
  }

  setInterval(() => {
    // 30% chance to flash if on landing page
    if (gameState.currentView === 'landing' && Math.random() < 0.35) {
      triggerLightning();
    }
  }, 16000);

  // ==========================================================================
  // 5. CASE SELECTOR & SWITCHING LOGIC (WITH LINEAR UNLOCK ENFORCEMENT)
  // ==========================================================================

  function switchCase(caseId, bypassLock = false) {
    if (!ALL_CASES[caseId]) return false;

    // Linear progression check: cannot access until prior case is completed
    const isUnlocked = gameState.unlockedCases && gameState.unlockedCases.includes(caseId);
    if (!bypassLock && !isUnlocked) {
      audio.playVerdictFail();
      const caseNum = parseInt(caseId.slice(-1), 10);
      const prevCaseNum = Math.max(1, caseNum - 1);
      showSecurityLockoutModal(
        caseId,
        `TRIBUNAL SECURITY LOCK: Case ${caseId.slice(-3)} is sealed under Outcast Judiciary Ward. You must formally solve Case 00${prevCaseNum} at the Tribunal of Shadows before accessing these classified records.`
      );
      return false;
    }

    audio.playClick();
    currentCaseId = caseId;
    CASE_DATA = ALL_CASES[currentCaseId];

    // Reset suspect selection for the active case
    const firstSuspectKey = Object.keys(CASE_DATA.suspects)[0];
    gameState.selectedSuspect = firstSuspectKey;

    saveGameState();

    // Rebuild 3D objects & UI views
    if (threeApp) {
      threeApp.rebuildEvidenceForCase();
    }
    renderEvidenceCards();
    renderPinboard();
    renderSuspectView(firstSuspectKey);
    renderVerdictOptions();

    showFloatingNotification(`Active File: ${CASE_DATA.title}`);
    return true;
  }

  // ==========================================================================
  // 6. THREE.JS 3D VOID LIBRARY WITH THE ANCIENT DOOR
  // ==========================================================================

  let threeApp = null;

  class GothicVoidLibrary3D {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();
      this.clickableObjects = [];
      this.hoveredObject = null;
      this.floatingBooks = [];
      this.floatingClues = [];
      this.starParticles = null;
      this.portalLight = null;
      this.clock = new THREE.Clock();
      this.ancientDoorMesh = null;

      this.init();
    }

    init() {
      // 1. Scene with Infinite Cosmic Void Fog
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x020108); // Infinite cosmic abyss
      this.scene.fog = new THREE.FogExp2(0x04020f, 0.024);

      // 2. Camera
      const width = this.container.clientWidth || window.innerWidth;
      const height = this.container.clientHeight || window.innerHeight;
      this.camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 150);
      this.camera.position.set(0, 3.6, 9.2);

      // 3. Renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.1;
      this.container.appendChild(this.renderer.domElement);

      // 4. Orbit Controls
      if (THREE.OrbitControls) {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxPolarAngle = Math.PI / 2 - 0.02;
        this.controls.minDistance = 2.0;
        this.controls.maxDistance = 16.0;
        this.controls.target.set(0, 1.8, 0);
      }

      // 5. Lighting & Void Environment
      this.setupVoidLighting();
      this.buildFloatingVoidPlatform();
      this.buildAncientVoidDoor();
      this.buildAntiGravityBooks();
      this.buildResearchDesk();
      this.buildCosmicParticles();
      this.rebuildEvidenceForCase();
      this.setupPresets();

      // 6. Events
      this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
      this.container.addEventListener('click', (e) => this.onClick(e));
      window.addEventListener('resize', () => this.onResize());

      this.animate();
    }

    setupVoidLighting() {
      // Eerie purple ambient light
      const ambient = new THREE.AmbientLight(0x281245, 1.4);
      this.scene.add(ambient);

      // Directional Ethereal Void Light
      const voidMoon = new THREE.DirectionalLight(0x9d82fc, 2.5);
      voidMoon.position.set(0, 12, -8);
      voidMoon.castShadow = true;
      this.scene.add(voidMoon);

      // Violet Portal Rim Point Light
      this.portalLight = new THREE.PointLight(0xa855f7, 2.8, 14, 1.5);
      this.portalLight.position.set(0, 3.2, -3.2);
      this.scene.add(this.portalLight);

      // Desk Candle Point Light
      const candleLight = new THREE.PointLight(0xffaa44, 1.8, 8, 1.6);
      candleLight.position.set(-1.8, 2.4, -0.2);
      this.scene.add(candleLight);
    }

    // Floating Stone Platform Dais in the Cosmic Abyss
    buildFloatingVoidPlatform() {
      // Octagonal carved obsidian island
      const platformGeo = new THREE.CylinderGeometry(8.5, 9.2, 0.8, 8);
      const platformMat = new THREE.MeshStandardMaterial({
        color: 0x160f26,
        roughness: 0.45,
        metalness: 0.25
      });
      const platform = new THREE.Mesh(platformGeo, platformMat);
      platform.position.set(0, -0.4, 0);
      platform.receiveShadow = true;
      this.scene.add(platform);

      // Glowing Arcane Perimeter Runes Ring
      const runeRingGeo = new THREE.RingGeometry(8.0, 8.45, 48);
      const runeRingMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      const runeRing = new THREE.Mesh(runeRingGeo, runeRingMat);
      runeRing.rotation.x = -Math.PI / 2;
      runeRing.position.set(0, 0.02, 0);
      this.scene.add(runeRing);
    }

    // Towering Freestanding Ancient Gothic Door
    buildAncientVoidDoor() {
      const doorGroup = new THREE.Group();
      doorGroup.name = 'ancient_void_door';
      doorGroup.userData = { isAncientDoor: true, name: 'The Ancient Void Door' };

      // Outer Gothic Stone Arch Frame
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x1a1228,
        roughness: 0.5,
        metalness: 0.4
      });

      // Left Pillar
      const leftPillarGeo = new THREE.BoxGeometry(0.55, 6.5, 0.6);
      const leftPillar = new THREE.Mesh(leftPillarGeo, frameMat);
      leftPillar.position.set(-2.0, 3.25, -3.5);
      doorGroup.add(leftPillar);

      // Right Pillar
      const rightPillarGeo = new THREE.BoxGeometry(0.55, 6.5, 0.6);
      const rightPillar = new THREE.Mesh(rightPillarGeo, frameMat);
      rightPillar.position.set(2.0, 3.25, -3.5);
      doorGroup.add(rightPillar);

      // Arched Top Tympanum
      const archGeo = new THREE.TorusGeometry(2.0, 0.28, 8, 24, Math.PI);
      const arch = new THREE.Mesh(archGeo, frameMat);
      arch.position.set(0, 5.8, -3.5);
      arch.rotation.x = Math.PI;
      doorGroup.add(arch);

      // Ancient Door Texture Panel
      const loader = new THREE.TextureLoader();
      loader.load('assets/images/ancient_void_door.jpg', (tex) => {
        const doorPanelGeo = new THREE.PlaneGeometry(3.6, 5.8);
        const doorPanelMat = new THREE.MeshStandardMaterial({
          map: tex,
          roughness: 0.4,
          metalness: 0.3
        });
        const doorPanel = new THREE.Mesh(doorPanelGeo, doorPanelMat);
        doorPanel.position.set(0, 3.1, -3.48);
        doorGroup.add(doorPanel);
      });

      // Swirling Ethereal Violet Portal Rift Behind Door
      const portalRiftGeo = new THREE.PlaneGeometry(3.8, 6.2);
      const portalRiftMat = new THREE.MeshBasicMaterial({
        color: 0x9333ea,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const portalRift = new THREE.Mesh(portalRiftGeo, portalRiftMat);
      portalRift.position.set(0, 3.2, -3.55);
      doorGroup.add(portalRift);

      // Glowing Keyhole Beacon
      const keyholeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const keyholeMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true
      });
      const keyhole = new THREE.Mesh(keyholeGeo, keyholeMat);
      keyhole.position.set(0.65, 3.0, -3.4);
      keyhole.name = 'door_keyhole';
      doorGroup.add(keyhole);

      this.ancientDoorMesh = doorGroup;
      this.scene.add(doorGroup);
      this.clickableObjects.push(doorGroup);
    }

    // Anti-Gravity Floating Books Drifting in the Void
    buildAntiGravityBooks() {
      const bookColors = [0x7c3aed, 0x4c1d95, 0x9f1239, 0x065f46, 0xb45309, 0x1e1b4b];
      for (let i = 0; i < 35; i++) {
        const bGeo = new THREE.BoxGeometry(0.75, 0.15, 0.55);
        const bMat = new THREE.MeshStandardMaterial({
          color: bookColors[Math.floor(Math.random() * bookColors.length)],
          roughness: 0.5
        });
        const book = new THREE.Mesh(bGeo, bMat);

        // Distribute in anti-gravity orbit around platform
        const angle = Math.random() * Math.PI * 2;
        const radius = 5.5 + Math.random() * 5.0;
        const y = 1.5 + Math.random() * 6.5;

        book.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
        book.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

        this.scene.add(book);
        this.floatingBooks.push({
          mesh: book,
          speedY: (Math.random() - 0.5) * 0.015,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          baseY: y
        });
      }
    }

    buildResearchDesk() {
      const deskMat = new THREE.MeshStandardMaterial({ color: 0x1f142b, roughness: 0.4 });
      const topGeo = new THREE.BoxGeometry(5.8, 0.22, 3.0);
      const deskTop = new THREE.Mesh(topGeo, deskMat);
      deskTop.position.set(0, 1.8, 0);
      this.scene.add(deskTop);

      const legGeo = new THREE.CylinderGeometry(0.14, 0.18, 1.8, 8);
      [[-2.5, 0.9, -1.2], [2.5, 0.9, -1.2], [-2.5, 0.9, 1.2], [2.5, 0.9, 1.2]].forEach(p => {
        const leg = new THREE.Mesh(legGeo, deskMat);
        leg.position.set(p[0], p[1], p[2]);
        this.scene.add(leg);
      });

      // Reading Lectern
      const lecternGeo = new THREE.BoxGeometry(1.4, 0.12, 1.0);
      const lectern = new THREE.Mesh(lecternGeo, deskMat);
      lectern.position.set(0.1, 1.95, -0.2);
      lectern.rotation.x = 0.25;
      this.scene.add(lectern);
    }

    buildCosmicParticles() {
      const count = 450;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 35;
        pos[i + 1] = Math.random() * 20 - 4;
        pos[i + 2] = (Math.random() - 0.5) * 35;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0xc4b5fd,
        size: 0.11,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      this.starParticles = new THREE.Points(geo, mat);
      this.scene.add(this.starParticles);
    }

    // Rebuild Evidence Meshes for the Active Case (Floating in Zero-Gravity)
    rebuildEvidenceForCase() {
      // Remove previous clues
      this.clickableObjects = this.clickableObjects.filter(obj => {
        if (obj.userData && obj.userData.clueKey) {
          this.scene.remove(obj);
          return false;
        }
        return true;
      });
      this.floatingClues = [];

      const markerGeo = new THREE.OctahedronGeometry(0.25, 0);
      const markerMat = new THREE.MeshStandardMaterial({
        color: 0xc4b5fd,
        emissive: 0x8b5cf6,
        emissiveIntensity: 0.95
      });

      const loader = new THREE.TextureLoader();

      const ringColors = {
        footprint: 0xa855f7,
        letter: 0xf59e0b,
        register: 0x38bdf8
      };

      const clueKeys = ['footprint', 'letter', 'register'];

      clueKeys.forEach((key, idx) => {
        const clueData = CASE_DATA.clues[key];
        if (!clueData) return;

        // Spread-out void space coordinates (widely separated across different quadrants)
        const coords = clueData.locationIn3D || { x: -7.0, y: 3.0, z: 4.0 };
        const ringColor = ringColors[key] || 0xc084fc;
        const clueGroup = new THREE.Group();
        clueGroup.name = clueData.id;
        clueGroup.userData = { clueKey: key, name: clueData.name };

        // 1. Arcane Rotating Halo Ring around floating clue
        const ringGeo = new THREE.TorusGeometry(0.72, 0.024, 12, 36);
        const ringMat = new THREE.MeshBasicMaterial({
          color: ringColor,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        clueGroup.add(ringMesh);

        // 2. Dimensional Artifact Core with Texture
        const relicGeo = new THREE.BoxGeometry(0.75, 0.75, 0.1);
        const relicMat = new THREE.MeshStandardMaterial({
          color: 0x221838,
          roughness: 0.4,
          metalness: 0.2
        });
        const relicMesh = new THREE.Mesh(relicGeo, relicMat);
        clueGroup.add(relicMesh);

        // Load specific clue image onto front face
        loader.load(clueData.image, (tex) => {
          relicMesh.material = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.5,
            metalness: 0.25
          });
        });

        // 3. Hovering Pulsing Beacon Marker
        const beaconMesh = new THREE.Mesh(markerGeo, markerMat.clone());
        beaconMesh.position.y = 0.85;
        beaconMesh.name = 'beacon_marker';
        clueGroup.add(beaconMesh);

        // Initial position
        clueGroup.position.set(coords.x, coords.y, coords.z);
        this.scene.add(clueGroup);
        this.clickableObjects.push(clueGroup);

        this.floatingClues.push({
          group: clueGroup,
          baseX: coords.x,
          baseY: coords.y,
          baseZ: coords.z,
          ring: ringMesh,
          marker: beaconMesh,
          phaseOffset: idx * 2.1
        });
      });
    }

    setupPresets() {
      const btnOverview = document.getElementById('preset-overview');
      const btnDoor = document.getElementById('preset-door');
      const btnClues = document.getElementById('preset-clues');

      if (btnOverview) {
        btnOverview.addEventListener('click', () => {
          audio.playClick();
          document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
          btnOverview.classList.add('active');
          this.focusCameraOn(0, 1.8, 0, 0, 3.6, 9.2);
        });
      }
      if (btnDoor) {
        btnDoor.addEventListener('click', () => {
          audio.playClick();
          document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
          btnDoor.classList.add('active');
          this.focusCameraOn(0, 3.2, -3.5, 0, 3.2, 0.8);
        });
      }
      if (btnClues) {
        btnClues.addEventListener('click', () => {
          audio.playClick();
          document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
          btnClues.classList.add('active');
          this.focusCameraOn(-0.6, 3.4, 0.0, 0, 3.6, 5.5);
        });
      }
    }

    onMouseMove(event) {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.clickableObjects, true);

      const tooltip = document.getElementById('clue-hover-tooltip');

      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj.parent && !obj.userData.clueKey && !obj.userData.isAncientDoor) {
          obj = obj.parent;
        }

        if (obj && obj.userData) {
          this.container.style.cursor = 'pointer';
          this.hoveredObject = obj;

          if (tooltip) {
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY}px`;

            if (obj.userData.isAncientDoor) {
              tooltip.innerHTML = `
                <div class="clue-tooltip-title"><span>🚪</span> The Ancient Void Door</div>
                <div class="clue-tooltip-hint" style="color: #ef4444;">⚠️ WARNING: Do not peer into the keyhole...</div>
              `;
            } else if (obj.userData.clueKey) {
              const clueData = CASE_DATA.clues[obj.userData.clueKey];
              tooltip.innerHTML = `
                <div class="clue-tooltip-title"><span>🔍</span> ${clueData.name}</div>
                <div class="clue-tooltip-hint">Click to inspect forensic evidence</div>
              `;
            }
          }
          return;
        }
      }

      this.container.style.cursor = 'grab';
      this.hoveredObject = null;
      if (tooltip) tooltip.style.display = 'none';
    }

    onClick(event) {
      if (!this.hoveredObject || !this.hoveredObject.userData) return;

      // Jumpscare on Ancient Void Door click!
      if (this.hoveredObject.userData.isAncientDoor) {
        triggerJumpscare('"THE ANCIENT VOID CONSUMES ALL WHO INTRUDE!"');
        return;
      }

      // Clue click
      if (this.hoveredObject.userData.clueKey) {
        const clueKey = this.hoveredObject.userData.clueKey;
        audio.playClueStinger();
        openEvidenceModal(clueKey);
      }
    }

    focusCameraOn(targetX, targetY, targetZ, camX, camY, camZ) {
      if (this.controls) {
        const targetPos = new THREE.Vector3(targetX, targetY, targetZ);
        const camPos = camX !== undefined ? new THREE.Vector3(camX, camY, camZ) : new THREE.Vector3(targetX, targetY + 2.0, targetZ + 3.5);
        let step = 0;
        const startTarget = this.controls.target.clone();
        const startCam = this.camera.position.clone();
        const tweenInterval = setInterval(() => {
          step += 0.05;
          if (step >= 1) {
            this.controls.target.copy(targetPos);
            this.camera.position.copy(camPos);
            clearInterval(tweenInterval);
          } else {
            this.controls.target.lerpVectors(startTarget, targetPos, step);
            this.camera.position.lerpVectors(startCam, camPos, step);
          }
        }, 16);
      }
    }

    onResize() {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth || window.innerWidth;
      const height = this.container.clientHeight || window.innerHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      const time = this.clock.getElapsedTime();

      // Floating Anti-Gravity Books Animation
      this.floatingBooks.forEach((item, idx) => {
        item.mesh.position.y = item.baseY + Math.sin(time * 1.4 + idx) * 0.35;
        item.mesh.rotation.y += item.rotSpeed;
        item.mesh.rotation.x += item.rotSpeed * 0.5;
      });

      // Floating Clues in Anti-Gravity Orbit among Library Books
      if (this.floatingClues) {
        this.floatingClues.forEach((item, idx) => {
          item.group.position.y = item.baseY + Math.sin(time * 1.5 + item.phaseOffset) * 0.42;
          item.group.rotation.y = time * 0.4 + item.phaseOffset;
          if (item.ring) {
            item.ring.rotation.x = time * 0.7;
            item.ring.rotation.z = time * 0.5;
          }
          if (item.marker) {
            item.marker.rotation.y = time * 2.5;
            item.marker.position.y = 0.85 + Math.sin(time * 3.0 + item.phaseOffset) * 0.12;
          }
        });
      }

      // Star Particles Twinkle
      if (this.starParticles) {
        this.starParticles.rotation.y = time * 0.015;
      }

      // Portal Pulsing Light
      if (this.portalLight) {
        this.portalLight.intensity = 2.4 + Math.sin(time * 3) * 0.8;
      }

      // Clue Markers Bobbing
      this.clickableObjects.forEach(group => {
        const marker = group.getObjectByName('beacon_marker');
        if (marker) {
          marker.rotation.y = time * 1.6;
          marker.rotation.x = Math.sin(time * 2) * 0.2;
        }
      });

      if (this.controls) this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }
  }

  // ==========================================================================
  // 7. EVIDENCE INSPECTION MODAL & COLLECTION
  // ==========================================================================

  function openEvidenceModal(clueKey) {
    const clue = CASE_DATA.clues[clueKey];
    if (!clue) return;

    gameState.selectedClueForInspection = clueKey;
    const modal = document.getElementById('evidence-modal');
    if (!modal) return;

    document.getElementById('modal-clue-title').textContent = clue.name;
    document.getElementById('modal-clue-category').textContent = clue.category;
    document.getElementById('modal-clue-img').src = clue.image;
    document.getElementById('modal-clue-desc').textContent = clue.description;

    document.getElementById('datum-timestamp').textContent = clue.forensics.timestamp;
    document.getElementById('datum-sole').textContent = clue.forensics.soleType || clue.forensics.sealHeraldry || clue.forensics.solventUsed || clue.forensics.botanicalProfile || clue.forensics.frequencyEstimate;
    document.getElementById('datum-chemical').textContent = clue.forensics.chemicalAnalysis || clue.forensics.paperStock || clue.forensics.underlyingGhostInk || clue.forensics.chemicalTraces || clue.forensics.chemicalResidue;
    document.getElementById('datum-contradiction').textContent = clue.forensics.contradiction;
    document.getElementById('modal-wednesday-quote').textContent = `"${clue.wednesdayNote}"`;

    const collectBtn = document.getElementById('btn-modal-collect');
    const isCollected = gameState.caseProgress[currentCaseId].cluesFound[clueKey];

    if (isCollected) {
      collectBtn.innerHTML = '<span>✓</span> Clue Collected In Notebook';
      collectBtn.style.background = 'rgba(16, 185, 129, 0.4)';
      collectBtn.style.borderColor = '#10B981';
      collectBtn.disabled = true;
    } else {
      collectBtn.innerHTML = '<span>📜</span> Collect Clue (+100 Pts)';
      collectBtn.style.background = 'linear-gradient(135deg, var(--purple-primary), var(--purple-dark))';
      collectBtn.style.borderColor = 'var(--accent-lavender)';
      collectBtn.disabled = false;
    }

    modal.classList.add('active');
  }

  function collectCurrentClue() {
    const clueKey = gameState.selectedClueForInspection;
    if (!clueKey) return;

    const wasCollected = gameState.caseProgress[currentCaseId].cluesFound[clueKey];
    if (!wasCollected) {
      gameState.caseProgress[currentCaseId].cluesFound[clueKey] = true;
      gameState.score += 100;
      audio.playSuccessChime();
      saveGameState();
    }

    // Auto-dismiss the evidence modal
    const modal = document.getElementById('evidence-modal');
    if (modal) modal.classList.remove('active');

    // Return to the 3D Void Library
    switchView('room');

    showFloatingNotification(`EVIDENCE SECURED // Void Library Awaits (${gameState.cluesCollectedCount}/3 Clues Found)`);

    // Refocus 3D camera to void overview to allow finding remaining clues
    if (threeApp) {
      threeApp.focusCameraOn(0, 2.5, 0);
    }
  }

  function showFloatingNotification(msg) {
    const toast = document.createElement('div');
    toast.className = 'evidence-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: rgba(25, 20, 39, 0.95);
      border: 1px solid var(--purple-primary);
      border-radius: 8px;
      padding: 0.9rem 1.4rem;
      color: var(--text-white);
      font-family: var(--font-serif);
      font-size: 0.88rem;
      box-shadow: 0 0 25px var(--purple-glow);
      z-index: 9999;
      animation: fadeInModal 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    `;
    toast.innerHTML = `<span>🦇</span> ${msg}`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s ease';
      setTimeout(() => toast.remove(), 500);
    }, 2800);
  }

  // ==========================================================================
  // 8. INTERACTIVE EVIDENCE NOTEBOOK & CRIME LAB WORKBENCH
  // ==========================================================================

  function toggleUVMode(key) {
    audio.playClick();
    gameState.uvModes[key] = !gameState.uvModes[key];
    renderEvidenceCards();
    showFloatingNotification(gameState.uvModes[key] ? '🔬 365nm UV Blacklight Scanner Active' : 'Normal Spectrum Restored');
  }

  function runReagentTest(key) {
    audio.playClick();
    gameState.reagentActive[key] = true;
    renderEvidenceCards();
    showFloatingNotification('🧪 Chemical Reagent Drop Test Complete');
  }

  function filterClues(filter) {
    audio.playClick();
    gameState.activeClueFilter = filter;
    document.querySelectorAll('.lab-filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filter);
    });
    renderEvidenceCards();
  }

  function pinClueDirectly(key) {
    audio.playClick();
    selectedPinClue = key;
    // Switch to Pinboard Tab
    const tabClues = document.getElementById('tab-btn-clues');
    const tabPinboard = document.getElementById('tab-btn-pinboard');
    if (tabClues && tabPinboard) {
      tabPinboard.classList.add('active');
      tabClues.classList.remove('active');
      document.getElementById('evidence-tab-clues').style.display = 'none';
      document.getElementById('evidence-tab-pinboard').style.display = 'block';
    }
    renderPinboard();
    showFloatingNotification(`Pinned to Board: ${CASE_DATA.clues[key].name} — Now select a Suspect to wire`);
  }

  function locateClueIn3D(key) {
    audio.playClick();
    const clue = CASE_DATA.clues[key];
    if (!clue || !clue.locationIn3D) return;
    switchView('room');
    if (threeApp) {
      threeApp.focusCameraOn(clue.locationIn3D.x, clue.locationIn3D.y, clue.locationIn3D.z);
    }
    showFloatingNotification(`Void Camera focused on: ${clue.name}`);
  }

  function renderEvidenceCards() {
    const grid = document.getElementById('clues-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filter = gameState.activeClueFilter || 'all';

    Object.keys(CASE_DATA.clues).forEach(key => {
      const clue = CASE_DATA.clues[key];
      const isFound = gameState.caseProgress[currentCaseId].cluesFound[key];

      // Filter check
      if (filter === 'chemical' && !clue.category.toLowerCase().includes('chemical') && !clue.category.toLowerCase().includes('toxin')) return;
      if (filter === 'physical' && !clue.category.toLowerCase().includes('physical') && !clue.category.toLowerCase().includes('impression') && !clue.category.toLowerCase().includes('acoustic')) return;
      if (filter === 'document' && !clue.category.toLowerCase().includes('document') && !clue.category.toLowerCase().includes('record') && !clue.category.toLowerCase().includes('correspondence') && !clue.category.toLowerCase().includes('art')) return;

      const isUV = !!gameState.uvModes[key];
      const isReagent = !!gameState.reagentActive[key];

      const card = document.createElement('div');
      card.className = `clue-card reveal-on-scroll ${isUV ? 'uv-mode' : ''} ${isReagent ? 'reagent-active' : ''}`;
      card.innerHTML = `
        <div class="clue-card-header">
          <img src="${clue.image}" alt="${clue.name}" class="clue-card-img" style="filter: ${isFound ? 'none' : 'grayscale(100%) brightness(0.4)'}">
          <span class="clue-card-badge">${clue.category}</span>
          <div class="clue-card-status ${isFound ? 'found' : 'unfound'}">
            <span>${isFound ? '✓' : '🔒'}</span> ${isFound ? 'Secured in Dossier' : 'Undiscovered in Void'}
          </div>
        </div>

        <div class="clue-card-body">
          <span class="clue-id">${clue.id.toUpperCase()}</span>
          <h3 class="clue-title">${clue.name}</h3>
          <p class="clue-desc">${isFound ? clue.description : 'Physical evidence drifting in the zero-gravity void. Enter the 3D Void Library to discover and inspect it.'}</p>
          
          <div class="clue-tags">
            ${clue.tags.map(t => `<span class="clue-tag">${t}</span>`).join('')}
          </div>

          <!-- Alibi Contradiction Analysis (How this clue breaks suspect alibis) -->
          <div class="clue-contradiction-box">
            <div class="contradiction-header">
              <span>⚖️</span> LEGAL CONTRADICTION & ALIBI DISMANTLER:
            </div>
            <div class="contradiction-body">
              ${clue.forensics.contradiction}
            </div>
          </div>

          <!-- UV Blacklight Revelation Overlay -->
          <div class="clue-uv-scanner-overlay">
            <div class="uv-badge-header">
              <span>🔬 365nm Wood's Lamp Fluoroscopy</span>
              <span style="color: #c084fc;">ACTIVE UV</span>
            </div>
            <div class="uv-revelation-text">
              ${clue.uvRevelation || 'Ultraviolet excitation reveals invisible spectral halogens, latent sebum friction ridges, and luminescent chemical residue.'}
            </div>
          </div>

          <!-- Chemical Reagent Drop Test Panel -->
          <div class="clue-reagent-panel">
            <div class="reagent-header">
              <span>🧪 Reagent Assay: ${clue.reagentProfile ? clue.reagentProfile.compound : 'Acidic Reduction'}</span>
              <span style="color: #10b981;">✓ ${clue.reagentProfile ? clue.reagentProfile.confidence : '99.5% Confirmed'}</span>
            </div>
            <div class="reagent-reaction-text">
              ${clue.reagentProfile ? clue.reagentProfile.reaction : 'Precipitation confirms signature chemical match.'}
            </div>
          </div>

          ${isFound ? `<div class="clue-quote">"${clue.wednesdayNote}"</div>` : ''}

          <!-- Interactive Crime Lab Tools Grid -->
          <div class="clue-tools-grid">
            <button class="btn-tool-action ${isUV ? 'active-tool' : ''}" onclick="window.WEDNESDAY_APP.toggleUV('${key}')" title="Scan with 365nm UV Blacklight">
              <span>🔬</span> ${isUV ? 'Normal Light' : 'UV Blacklight'}
            </button>
            <button class="btn-tool-action ${isReagent ? 'active-tool' : ''}" onclick="window.WEDNESDAY_APP.runReagent('${key}')" title="Run chemical reagent drop test">
              <span>🧪</span> ${isReagent ? 'Tested ✓' : 'Reagent Test'}
            </button>
            <button class="btn-tool-action" onclick="window.WEDNESDAY_APP.pinClueDirectly('${key}')" title="Connect to Suspect on Pinboard">
              <span>📌</span> Pin to Board
            </button>
            <button class="btn-tool-action" onclick="window.WEDNESDAY_APP.locateIn3D('${key}')" title="Locate floating clue in 3D void">
              <span>🌌</span> Void Orbit
            </button>
          </div>

          <div style="margin-top: 0.6rem; display: flex; gap: 0.5rem;">
            <button class="btn-card-action" style="flex: 1;" onclick="window.WEDNESDAY_APP.inspectClue('${key}')">
              <span>🔍</span> Forensic Zoom
            </button>
            <button class="btn-card-action" style="flex: 1;" onclick="window.WEDNESDAY_APP.askThingAbout('${key}')">
              <span>✋</span> Consult Thing
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    const notesArea = document.getElementById('user-notes-textarea');
    if (notesArea) notesArea.value = gameState.userNotes || '';
  }

  let selectedPinClue = null;
  let selectedPinSuspect = null;

  function renderPinboard() {
    const cluesList = document.getElementById('pinboard-clues-list');
    const suspectsList = document.getElementById('pinboard-suspects-list');
    if (!cluesList || !suspectsList) return;

    cluesList.innerHTML = '';
    suspectsList.innerHTML = '';

    Object.keys(CASE_DATA.clues).forEach(key => {
      const clue = CASE_DATA.clues[key];
      const isFound = gameState.caseProgress[currentCaseId].cluesFound[key];
      const item = document.createElement('div');
      item.className = `pin-node clue-node ${selectedPinClue === key ? 'selected' : ''}`;
      item.dataset.clueKey = key;
      item.onclick = () => { audio.playClick(); selectedPinClue = key; renderPinboard(); checkPinConnection(); };
      item.innerHTML = `
        <img src="${clue.image}" class="pin-node-thumb" style="filter: ${isFound ? 'none' : 'grayscale(100%)'}">
        <div class="pin-node-info">
          <h4>${clue.name}</h4>
          <p>${isFound ? clue.category : 'Undiscovered'}</p>
        </div>
        <div class="pin-socket"></div>
      `;
      cluesList.appendChild(item);
    });

    Object.keys(CASE_DATA.suspects).forEach(key => {
      const suspect = CASE_DATA.suspects[key];
      const item = document.createElement('div');
      item.className = `pin-node suspect-node ${selectedPinSuspect === key ? 'selected' : ''}`;
      item.dataset.suspectKey = key;
      item.onclick = () => { audio.playClick(); selectedPinSuspect = key; renderPinboard(); checkPinConnection(); };
      item.innerHTML = `
        <div class="pin-socket"></div>
        <img src="${suspect.image}" class="pin-node-thumb">
        <div class="pin-node-info">
          <h4>${suspect.name}</h4>
          <p>${suspect.role}</p>
        </div>
      `;
      suspectsList.appendChild(item);
    });

    renderConnectionsLog();
  }

  function checkPinConnection() {
    if (selectedPinClue && selectedPinSuspect) {
      const isCorrect = (selectedPinSuspect === CASE_DATA.solution.culpritId);
      let explanation = '';

      if (isCorrect) {
        audio.playSuccessChime();
        gameState.score += 50;
        explanation = `MATCH CONFIRMED: Forensic evidence directly links ${CASE_DATA.suspects[selectedPinSuspect].name} to ${CASE_DATA.clues[selectedPinClue].name}! (+50 pts)`;
      } else {
        audio.playClick();
        explanation = `MISMATCH: Evidence contradiction clears ${CASE_DATA.suspects[selectedPinSuspect].name}. Their alibi contradicts this clue.`;
      }

      gameState.pinboardConnections.unshift({
        caseTitle: CASE_DATA.title,
        clueName: CASE_DATA.clues[selectedPinClue].name,
        suspectName: CASE_DATA.suspects[selectedPinSuspect].name,
        isCorrect,
        explanation
      });

      selectedPinClue = null;
      selectedPinSuspect = null;
      saveGameState();
      renderPinboard();
    }
  }

  function renderConnectionsLog() {
    const list = document.getElementById('pinboard-connections-log-list');
    if (!list) return;

    if (gameState.pinboardConnections.length === 0) {
      list.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">No pins connected yet. Select a Clue and a Suspect to test your hypothesis.</div>`;
      return;
    }

    list.innerHTML = gameState.pinboardConnections.slice(0, 5).map(c => `
      <div class="connection-item ${c.isCorrect ? 'correct' : 'incorrect'}">
        <div>
          <strong>[${c.caseTitle}] ${c.clueName} ➔ ${c.suspectName}</strong>
          <p style="margin-top: 0.2rem; color: var(--text-white);">${c.explanation}</p>
        </div>
        <span style="font-family: var(--font-mono); font-size: 0.72rem; color: ${c.isCorrect ? 'var(--accent-emerald)' : 'var(--accent-crimson)'}; font-weight: 700;">
          ${c.isCorrect ? '+50 PTS CONFIRMED' : 'MISMATCH'}
        </span>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 9. SUSPECT INTERROGATION SYSTEM
  // ==========================================================================

  function renderSuspectView(suspectId) {
    const suspect = CASE_DATA.suspects[suspectId];
    if (!suspect) return;

    gameState.selectedSuspect = suspectId;

    // Render Left Nav Cards for active case suspects
    const navList = document.querySelector('.suspects-nav-list');
    if (navList) {
      navList.innerHTML = Object.keys(CASE_DATA.suspects).map(key => {
        const s = CASE_DATA.suspects[key];
        const isActive = (key === suspectId);
        return `
          <div class="suspect-nav-card ${isActive ? 'active' : ''}" data-suspect="${key}" onclick="window.WEDNESDAY_APP.selectSuspect('${key}')">
            <img src="${s.image}" alt="${s.name}" class="nav-card-portrait">
            <div class="nav-card-info">
              <h4>${s.name}</h4>
              <span class="suspect-role">${s.role}</span>
              <div class="nav-card-suspicion">
                <div class="suspicion-bar-mini">
                  <div class="suspicion-fill-mini" style="width: ${s.currentSuspicion}%;"></div>
                </div>
                <span class="suspicion-percent-mini">${s.currentSuspicion}%</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Active Suspect Dossier
    document.getElementById('dossier-portrait').src = suspect.image;
    document.getElementById('dossier-name').textContent = suspect.name;
    document.getElementById('dossier-role').textContent = `${suspect.role} • Age ${suspect.age}`;
    document.getElementById('dossier-bio').textContent = suspect.bio;
    document.getElementById('dossier-alibi').textContent = suspect.statedAlibi;

    const gaugeFill = document.getElementById('suspicion-gauge-fill');
    const gaugeVal = document.getElementById('suspicion-gauge-val');
    if (gaugeFill) gaugeFill.style.width = `${suspect.currentSuspicion}%`;
    if (gaugeVal) gaugeVal.textContent = `${suspect.currentSuspicion}%`;

    // Questions List
    const questionsContainer = document.getElementById('interrogation-questions-list');
    if (questionsContainer) {
      questionsContainer.innerHTML = '';
      suspect.interrogation.forEach(qItem => {
        const isConfront = qItem.q.includes('[Confront');
        const btn = document.createElement('button');
        btn.className = `question-btn ${isConfront ? 'evidence-confront' : ''}`;
        btn.innerHTML = `
          <span>${qItem.q}</span>
          <span class="question-tag">${isConfront ? 'CONFRONTATION' : 'INQUIRY'}</span>
        `;
        btn.onclick = () => askSuspectQuestion(suspectId, qItem);
        questionsContainer.appendChild(btn);
      });
    }
  }

  function askSuspectQuestion(suspectId, qItem) {
    audio.playClick();
    const suspect = CASE_DATA.suspects[suspectId];

    if (qItem.id.includes('confront')) {
      if (suspectId === CASE_DATA.solution.culpritId) {
        suspect.currentSuspicion = Math.min(95, suspect.currentSuspicion + 20);
      } else {
        suspect.currentSuspicion = Math.max(15, suspect.currentSuspicion - 12);
      }
    } else {
      if (suspectId === CASE_DATA.solution.culpritId) {
        suspect.currentSuspicion = Math.min(95, suspect.currentSuspicion + 6);
      }
    }

    gameState.score += 20;
    saveGameState();

    const gaugeFill = document.getElementById('suspicion-gauge-fill');
    const gaugeVal = document.getElementById('suspicion-gauge-val');
    if (gaugeFill) gaugeFill.style.width = `${suspect.currentSuspicion}%`;
    if (gaugeVal) gaugeVal.textContent = `${suspect.currentSuspicion}%`;

    const transcriptBody = document.getElementById('interrogation-transcript-body');
    if (transcriptBody) {
      transcriptBody.innerHTML = `
        <div class="statement-bubble" style="border-left: 3px solid var(--accent-gold);">
          <div class="bubble-speaker"><span>🖤</span> WEDNESDAY ADDAMS</div>
          <div class="bubble-text">"${qItem.q}"</div>
        </div>
        <div class="statement-bubble suspect-reply">
          <div class="bubble-speaker"><span>🗣️</span> ${suspect.name.toUpperCase()}</div>
          <div class="bubble-text">"${qItem.a}"</div>
        </div>
        <div class="statement-bubble wednesday-deduction">
          <div class="bubble-speaker"><span>👁️</span> WEDNESDAY'S INTERNAL DEDUCTION</div>
          <div class="bubble-text">"${qItem.wednesdayThought}"</div>
        </div>
      `;
    }
  }

  // ==========================================================================
  // 10. AI DETECTIVE ASSISTANT - "THING'S INTELLIGENCE"
  // ==========================================================================

  function sendThingMessage(text) {
    if (!text || !text.trim()) return;
    audio.playClick();

    const container = document.getElementById('chat-messages-container');
    if (!container) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user-msg';
    userMsg.innerHTML = `
      <div class="msg-bubble">${escapeHTML(text)}</div>
      <img src="assets/images/suspect_student.jpg" class="msg-avatar" style="border-radius: 50%;">
    `;
    container.appendChild(userMsg);
    container.scrollTop = container.scrollHeight;

    const input = document.getElementById('assistant-user-input');
    if (input) input.value = '';

    setTimeout(() => {
      audio.playClueStinger();
      const answer = generateThingResponse(text.toLowerCase());
      const thingMsg = document.createElement('div');
      thingMsg.className = 'chat-msg thing-msg';
      thingMsg.innerHTML = `
        <img src="assets/images/thing_assistant.jpg" class="msg-avatar">
        <div class="msg-bubble">
          <span class="thing-action">${answer.action}</span>
          ${answer.text}
        </div>
      `;
      container.appendChild(thingMsg);
      container.scrollTop = container.scrollHeight;
    }, 400);
  }

  function generateThingResponse(input) {
    const curProg = gameState.caseProgress[currentCaseId];

    // Jumpscare easter egg if user prompts scary words!
    if (input.includes('jumpscare') || input.includes('scare') || input.includes('demon') || input.includes('ghost')) {
      triggerJumpscare('"YOU DARED TO SUMMON THE MACABRE!"');
      return {
        text: "*Thing hides behind an inkwell trembling* You poked the void too hard! Be careful what you summon in Nevermore after hours!",
        action: '*Thing taps frantically in warning*'
      };
    }

    if (input.includes('hint') || input.includes('who') || input.includes('culprit')) {
      const culprit = CASE_DATA.suspects[CASE_DATA.solution.culpritId];
      return {
        text: `*scuttles across the desk* In ${CASE_DATA.title}, look closely at who possesses specialized clearance or supplies. The culprit is currently acting defensive under interrogation!`,
        action: '*Thing taps three fingers deliberately: one, two, three*'
      };
    }

    if (input.includes('door') || input.includes('void')) {
      return {
        text: "*points toward the infinite void* That ancient freestanding door has stood in the void since Nevermore was founded. Do NOT tamper with its keyhole unless you enjoy horrific surprises!",
        action: '*Thing gestures ominously towards the 3D void*'
      };
    }

    return {
      text: `*scuttles attentively* Regarding ${CASE_DATA.title}: You have secured ${gameState.cluesCollectedCount}/3 clues. Connect the forensic dots on the Pinboard and confront the suspects!`,
      action: '*Thing gestures towards the Evidence Dossier and Suspect Chamber*'
    };
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
  }

  // ==========================================================================
  // 11. FINAL VERDICT & ACCUSATION TRIBUNAL
  // ==========================================================================

  let verdictSelection = { suspect: null, evidence: [], motive: null };

  function renderVerdictOptions() {
    const culpritsGrid = document.querySelector('.culprits-grid');
    if (!culpritsGrid) return;

    culpritsGrid.innerHTML = Object.keys(CASE_DATA.suspects).map(key => {
      const s = CASE_DATA.suspects[key];
      const isSelected = (verdictSelection.suspect === key);
      return `
        <div class="culprit-choice-card ${isSelected ? 'selected' : ''}" data-culprit="${key}" onclick="window.WEDNESDAY_APP.selectVerdictSuspect('${key}')">
          <img src="${s.image}" class="culprit-choice-img" alt="${s.name}">
          <h4>${s.name}</h4>
          <span>${s.role}</span>
        </div>
      `;
    }).join('');

    const evidenceGrid = document.querySelector('.evidence-choice-grid');
    if (evidenceGrid) {
      evidenceGrid.innerHTML = Object.keys(CASE_DATA.clues).map(key => {
        const c = CASE_DATA.clues[key];
        const isSelected = verdictSelection.evidence.includes(key);
        return `
          <div class="evidence-choice-card ${isSelected ? 'selected' : ''}" data-evidence="${key}" onclick="window.WEDNESDAY_APP.toggleVerdictEvidence('${key}')">
            <img src="${c.image}" class="evidence-choice-thumb" alt="${c.name}">
            <div class="evidence-choice-info">
              <h5>${c.name}</h5>
              <p>${c.category}</p>
            </div>
          </div>
        `;
      }).join('');
    }

    // Reset verdict panels
    const sPanel = document.getElementById('verdict-result-success');
    const fPanel = document.getElementById('verdict-result-failure');
    if (sPanel) sPanel.classList.remove('active');
    if (fPanel) fPanel.classList.remove('active');
  }

  function selectVerdictSuspect(suspectId) {
    audio.playClick();
    verdictSelection.suspect = suspectId;
    renderVerdictOptions();
  }

  function toggleVerdictEvidence(clueKey) {
    audio.playClick();
    const idx = verdictSelection.evidence.indexOf(clueKey);
    if (idx > -1) verdictSelection.evidence.splice(idx, 1);
    else verdictSelection.evidence.push(clueKey);
    renderVerdictOptions();
  }

  function selectVerdictMotive(motiveKey) {
    audio.playClick();
    verdictSelection.motive = motiveKey;
    document.querySelectorAll('.motive-choice-item').forEach(item => {
      item.classList.toggle('selected', item.dataset.motive === motiveKey);
    });
  }

  function submitAccusation() {
    audio.playClick();
    if (!verdictSelection.suspect) {
      alert("Wednesday demands precision. Select the suspect you are formally accusing.");
      return;
    }
    if (verdictSelection.evidence.length === 0) {
      alert("An accusation without evidence is mere gossip. Select decisive forensic evidence.");
      return;
    }
    if (!verdictSelection.motive) {
      alert("Establish the criminal motive before rendering the tribunal verdict.");
      return;
    }

    const isCorrectSuspect = (verdictSelection.suspect === CASE_DATA.solution.culpritId);
    const isCorrectMotive = (verdictSelection.motive === CASE_DATA.solution.motive);
    const hasDecisive = verdictSelection.evidence.includes(CASE_DATA.solution.decisiveEvidence);

    const successPanel = document.getElementById('verdict-result-success');
    const failPanel = document.getElementById('verdict-result-failure');

    if (isCorrectSuspect && isCorrectMotive && hasDecisive) {
      audio.playVerdictSuccess();
      gameState.caseProgress[currentCaseId].solved = true;
      gameState.score += 450;

      // Unlock next chronological case
      const currentCaseNumber = parseInt(currentCaseId.slice(-1), 10);
      const nextCaseNumber = currentCaseNumber + 1;
      const nextCaseId = `CASE_00${nextCaseNumber}`;
      let hasNextCase = false;

      if (ALL_CASES[nextCaseId]) {
        if (!gameState.unlockedCases.includes(nextCaseId)) {
          gameState.unlockedCases.push(nextCaseId);
        }
        hasNextCase = true;
      }

      saveGameState();

      launchVictoryParticles();

      const timeSpentSec = Math.floor((Date.now() - gameState.startTime) / 1000);
      document.getElementById('score-final').textContent = gameState.score;
      document.getElementById('score-time').textContent = `${Math.floor(timeSpentSec / 60)}m ${timeSpentSec % 60}s`;
      document.getElementById('score-clues').textContent = `${gameState.cluesCollectedCount}/3`;
      document.getElementById('score-rank').textContent = gameState.score >= 900 ? "HIGH INQUISITOR" : "MASTER SLEUTH";

      // Solution breakdown & Next Case Button
      const sol = CASE_DATA.solution;
      const bContainer = document.querySelector('.result-solution-breakdown');
      if (bContainer) {
        bContainer.innerHTML = `
          <div class="solution-step-item">
            <h5>CASE CLOSED // ${CASE_DATA.title.toUpperCase()}</h5>
            <p>${sol.explanation}</p>
          </div>
          ${hasNextCase ? `
            <div style="margin-top: 1.5rem; padding: 1.2rem; background: rgba(139, 92, 246, 0.12); border: 1px solid var(--purple-primary); border-radius: 8px; text-align: center;">
              <h4 style="color: var(--accent-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">
                🔓 CASE 00${nextCaseNumber} UNLOCKED: ${ALL_CASES[nextCaseId].title.toUpperCase()}
              </h4>
              <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1.2rem;">
                Click below to archive completed case, reset forensic evidence slate, and begin investigating the new crime scene.
              </p>
              <button class="btn-primary" style="padding: 0.85rem 2rem; font-size: 0.95rem; font-weight: bold;" onclick="window.WEDNESDAY_APP.proceedToNextCase('${nextCaseId}')">
                <span>🗝️</span> Proceed to Case 00${nextCaseNumber} (Reset Evidence Slate)
              </button>
            </div>
          ` : `
            <div style="margin-top: 1.5rem; padding: 1.2rem; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 8px; text-align: center;">
              <h4 style="color: #10b981; font-family: var(--font-serif); margin-bottom: 0.4rem;">
                🏆 ALL 5 NEVERMORE MYSTERIES SOLVED!
              </h4>
              <p style="color: var(--text-white); font-size: 0.85rem;">
                You have demonstrated ruthless Addams-grade intellect across all five cases. Wednesday Addams approves.
              </p>
            </div>
          `}
        `;
      }

      if (failPanel) failPanel.classList.remove('active');
      if (successPanel) successPanel.classList.add('active');
      successPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
      audio.playVerdictFail();
      if (successPanel) successPanel.classList.remove('active');
      if (failPanel) {
        failPanel.classList.add('active');
        let hint = "Your deductive reasoning has collapsed. Re-examine the physical evidence on the pinboard.";
        if (!isCorrectSuspect) {
          hint = `You accused ${CASE_DATA.suspects[verdictSelection.suspect].name}. However, physical evidence contradicts this. Check who had specialized access to the crime scene.`;
        } else if (!hasDecisive) {
          hint = `You identified the correct culprit (${CASE_DATA.suspects[verdictSelection.suspect].name}), but your supporting evidence fails to provide the undeniable legal contradiction.`;
        }
        document.getElementById('fail-hint-text').textContent = hint;
        failPanel.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  function proceedToNextCase(nextCaseId) {
    audio.playClick();
    if (!ALL_CASES[nextCaseId]) return;

    // 1. Reset all collected evidences & state for the new case (clean slate)
    gameState.cluesCollectedCount = 0;
    gameState.pinboardConnections = [];
    gameState.userNotes = `[CRIME NOTES // ${ALL_CASES[nextCaseId].title}]\nScene: ${ALL_CASES[nextCaseId].location}\nStolen: ${ALL_CASES[nextCaseId].itemStolen}\n`;
    gameState.uvModes = {};
    gameState.reagentActive = {};

    // Ensure the new case has fresh clues
    if (gameState.caseProgress[nextCaseId]) {
      gameState.caseProgress[nextCaseId].cluesFound = { footprint: false, letter: false, register: false };
    }

    // 2. Switch to the next case (with bypassLock since unlocked)
    switchCase(nextCaseId, true);

    // 3. Dismiss verdict panels
    const successPanel = document.getElementById('verdict-result-success');
    if (successPanel) successPanel.classList.remove('active');

    // 4. Return directly to 3D library
    switchView('room');

    showFloatingNotification(`Evidence Slate Cleared • Entered ${ALL_CASES[nextCaseId].title}`);
  }

  // ==========================================================================
  // 12. VICTORY CELEBRATION BATS & SPARKS
  // ==========================================================================

  function launchVictoryParticles() {
    const canvas = document.getElementById('victory-particles-canvas');
    if (!canvas) return;
    canvas.classList.add('active');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#8B5CF6', '#C4B5FD', '#F59E0B', '#F5F3FF', '#4C1D95'];
    for (let i = 0; i < 160; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 3,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0,
        decay: Math.random() * 0.015 + 0.005,
        isBat: Math.random() > 0.7
      });
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;
      particles.forEach(p => {
        if (p.life > 0) {
          alive++;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15;
          p.life -= p.decay;
          ctx.save();
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          if (p.isBat) {
            ctx.beginPath();
            ctx.ellipse(p.x, p.y, p.size * 2, p.size, 0, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      });
      if (alive > 0) requestAnimationFrame(render);
      else canvas.classList.remove('active');
    }
    render();
  }

  // ==========================================================================
  // 13. SCROLL SYSTEM & NAVIGATION
  // ==========================================================================

  function switchView(viewName) {
    audio.playClick();
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === viewName));

    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add('active');
      gameState.currentView = viewName;
      saveGameState();
      window.scrollTo(0, 0);

      if (viewName === 'room' && threeApp) threeApp.onResize();
      else if (viewName === 'evidence') { renderEvidenceCards(); renderPinboard(); }
      else if (viewName === 'suspects') renderSuspectView(gameState.selectedSuspect);
      else if (viewName === 'verdict') renderVerdictOptions();
    }
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('open');
  }

  const GOTHIC_QUOTES = [
    '"Those who do not look into the darkness will forever remain blinded by the light." — Wednesday',
    '"I act as if I do not care if people dislike me. Deep down… I secretly enjoy it." — Wednesday',
    '"I find ordinary life to be a soul-sucking void of meaningless affirmation. Now, a midnight heist? That’s poetry." — Wednesday',
    '"Emotion is a biological defect. Logic is the scalpel that cuts away deceit." — Wednesday',
    '"Never forgive, never forget, and always preserve forensic evidence under refrigeration." — Wednesday',
    '"The secret to a good interrogation is silence. People cannot bear the emptiness of their own guilt." — Wednesday'
  ];
  let quoteIndex = 0;

  function cycleGothicQuote() {
    audio.playClick();
    quoteIndex = (quoteIndex + 1) % GOTHIC_QUOTES.length;
    const cryptQuoteEl = document.getElementById('crypt-random-quote');
    const tickerQuoteEl = document.getElementById('ticker-quote');
    if (cryptQuoteEl) cryptQuoteEl.textContent = GOTHIC_QUOTES[quoteIndex];
    if (tickerQuoteEl) tickerQuoteEl.textContent = GOTHIC_QUOTES[quoteIndex];
  }

  function renderCasesShowcase() {
    const container = document.getElementById('cases-showcase-container');
    if (!container) return;

    container.innerHTML = Object.values(ALL_CASES).map(c => {
      const isCurrent = c.id === currentCaseId;
      const isSolved = gameState.caseProgress[c.id] && gameState.caseProgress[c.id].solved;
      const statusText = isSolved ? 'SOLVED' : (isCurrent ? 'ACTIVE' : 'UNSOLVED');
      const statusClass = isSolved ? 'solved-badge' : (isCurrent ? 'active-badge' : 'unsolved-badge');
      const clueEntries = Object.entries(c.clues);

      return `
        <div class="case-showcase-card ${isCurrent ? 'active-case' : ''}">
          <div class="case-showcase-header">
            <div>
              <div class="case-stamp">${c.id} // NEVERMORE FILE</div>
              <h3>${c.title}</h3>
              <div class="case-showcase-loc">📍 ${c.location} • ⏰ ${c.timeOfIncident}</div>
            </div>
            <span class="badge ${statusClass}">${statusText}</span>
          </div>

          <div class="case-showcase-body">
            <p class="case-showcase-desc">${c.description}</p>
            
            <div style="font-size: 0.78rem; font-family: var(--font-serif); color: var(--accent-lavender); letter-spacing: 1.5px; text-transform: uppercase;">
              FORENSIC CLUES SUSPENDED IN 3D VOID:
            </div>
            <div class="case-showcase-clues-preview">
              ${clueEntries.map(([k, clue]) => `
                <img src="${clue.image}" 
                     class="case-clue-thumbnail" 
                     title="${clue.name} (${clue.category})" 
                     alt="${clue.name}"
                     onclick="window.WEDNESDAY_APP.inspectClueFromCase('${c.id}', '${k}')">
              `).join('')}
            </div>

            <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted); background: rgba(10,8,16,0.6); padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
              <span style="color: #ef4444; font-weight: bold;">STOLEN RELIC / ANOMALY:</span><br>${c.itemStolen}
            </div>
          </div>

          <div class="case-showcase-actions">
            <span style="font-size: 0.78rem; color: #a78bfa; font-family: var(--font-mono);">
              ${isCurrent ? '● Active Investigation' : 'Ready for investigation'}
            </span>
            <button class="btn-primary" style="padding: 0.55rem 1.25rem; font-size: 0.82rem;" onclick="window.WEDNESDAY_APP.activateAndInvestigate('${c.id}')">
              <span>🕯️</span> ${isCurrent ? 'Enter Scene' : 'Activate & Solve'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function initScrollSystem() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const btnScrollTop = document.getElementById('btn-scroll-top');
    const moon = document.querySelector('.landing-moon');
    const backdrop = document.querySelector('.landing-backdrop');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const parallaxTexts = document.querySelectorAll('.parallax-text');

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

          if (progressBar) progressBar.style.width = `${scrolled}%`;
          if (btnScrollTop) btnScrollTop.classList.toggle('visible', winScroll > 280);

          // Parallax for moon and backdrop
          if (moon) {
            moon.style.transform = `translateY(${winScroll * 0.35}px) scale(${1 + winScroll * 0.0002})`;
          }
          if (backdrop) {
            backdrop.style.transform = `scale(1.05) translateY(${winScroll * 0.15}px)`;
          }

          // Parallax for custom data-speed layers (spooky eyes, floating accents)
          parallaxLayers.forEach(el => {
            const speed = parseFloat(el.dataset.speed || 0.1);
            el.style.transform = `translateY(${winScroll * speed}px)`;
          });

          // Dynamic Parallax Text depth motion
          parallaxTexts.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerOffset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
            el.style.transform = `translateY(${centerOffset * 0.06}px)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    if (btnScrollTop) {
      btnScrollTop.addEventListener('click', () => {
        audio.playClick();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if ('IntersectionObserver' in window) {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-zoom').forEach(el => scrollObserver.observe(el));
    }
  }

  function scrollDownToOverview() {
    audio.playClick();
    const target = document.getElementById('landing-master-index');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollToIndex() {
    audio.playClick();
    const target = document.getElementById('landing-master-index');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollToCases() {
    audio.playClick();
    const target = document.getElementById('landing-case-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollToRules() {
    audio.playClick();
    const target = document.getElementById('landing-rules-methodology');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function scrollToCrypt() {
    audio.playClick();
    const target = document.getElementById('landing-spooky-crypt');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ==========================================================================
  // 14. INITIALIZATION ON DOM READY
  // ==========================================================================

  window.addEventListener('DOMContentLoaded', () => {
    loadGameState();

    setTimeout(() => {
      const loader = document.getElementById('custom-loading-screen');
      if (loader) loader.classList.add('hidden');
    }, 600);

    // Audio setup
    const soundToggleBtn = document.getElementById('btn-sound-toggle');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        const isAudible = audio.toggleMute();
        soundToggleBtn.classList.toggle('active-audio', isAudible);
        const icon = soundToggleBtn.querySelector('span');
        if (icon) icon.textContent = isAudible ? '🔊' : '🔇';
      });
    }

    const unlockAudio = () => {
      audio.startDrone();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    // Nav Bindings
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view) switchView(view);
      });
    });

    const mobileToggle = document.getElementById('mobile-nav-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks) navLinks.classList.toggle('open');
      });
    }

    // Landing Page Actions
    const btnStart = document.getElementById('btn-start-investigation');
    if (btnStart) btnStart.addEventListener('click', () => switchView('room'));

    const btnHowToPlay = document.getElementById('btn-how-to-play');
    if (btnHowToPlay) {
      btnHowToPlay.addEventListener('click', () => {
        audio.playClick();
        const modal = document.getElementById('how-to-play-modal');
        if (modal) modal.classList.add('active');
      });
    }

    // Jumpscare Triggers
    const btnJumpscare = document.getElementById('btn-jumpscare-trigger');
    if (btnJumpscare) {
      btnJumpscare.addEventListener('click', () => {
        triggerJumpscare('"YOU DARED TO DISTURB NEVERMORE AFTER MIDNIGHT!"');
      });
    }

    const btnBlackCandle = document.getElementById('btn-summon-shadows');
    if (btnBlackCandle) {
      btnBlackCandle.addEventListener('click', () => {
        triggerJumpscare('"THE BLACK CANDLE SUMMONS THE BEAST!"');
      });
    }

    // 5-Case Selector Pills (Clickable everywhere)
    document.addEventListener('click', (e) => {
      const pill = e.target.closest('.case-pill');
      if (pill && pill.dataset.case) {
        switchCase(pill.dataset.case);
      }
    });

    // Init 3D Void Library with Ancient Door
    threeApp = new GothicVoidLibrary3D('three-canvas-container');

    const presetOverview = document.getElementById('preset-overview');
    if (presetOverview) presetOverview.addEventListener('click', () => { audio.playClick(); if (threeApp) threeApp.focusCameraOn(0, 1.8, 0); });

    const presetDesk = document.getElementById('preset-desk');
    if (presetDesk) presetDesk.addEventListener('click', () => { audio.playClick(); if (threeApp) threeApp.focusCameraOn(0.1, 1.9, -0.2); });

    const presetFloor = document.getElementById('preset-floor');
    if (presetFloor) presetFloor.addEventListener('click', () => { audio.playClick(); if (threeApp) threeApp.focusCameraOn(-3.8, 0.2, 2.2); });

    // Modals
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        audio.playClick();
        const modal = btn.closest('.modal-overlay');
        if (modal) {
          modal.classList.remove('active');
          if (modal.id === 'evidence-modal' && gameState.currentView === 'room' && threeApp) {
            threeApp.focusCameraOn(0, 2.5, 0);
          }
        }
      });
    });

    const btnCollect = document.getElementById('btn-modal-collect');
    if (btnCollect) btnCollect.addEventListener('click', collectCurrentClue);

    const btnModalThing = document.getElementById('btn-modal-discuss-thing');
    if (btnModalThing) {
      btnModalThing.addEventListener('click', () => {
        const clueKey = gameState.selectedClueForInspection;
        document.getElementById('evidence-modal').classList.remove('active');
        switchView('assistant');
        if (clueKey) sendThingMessage(`Can you analyze the ${CASE_DATA.clues[clueKey].name}?`);
      });
    }

    // Evidence Tabs
    const tabClues = document.getElementById('tab-btn-clues');
    const tabPinboard = document.getElementById('tab-btn-pinboard');
    if (tabClues && tabPinboard) {
      tabClues.addEventListener('click', () => {
        audio.playClick();
        tabClues.classList.add('active');
        tabPinboard.classList.remove('active');
        document.getElementById('evidence-tab-clues').style.display = 'block';
        document.getElementById('evidence-tab-pinboard').style.display = 'none';
      });
      tabPinboard.addEventListener('click', () => {
        audio.playClick();
        tabPinboard.classList.add('active');
        tabClues.classList.remove('active');
        document.getElementById('evidence-tab-clues').style.display = 'none';
        document.getElementById('evidence-tab-pinboard').style.display = 'block';
        renderPinboard();
      });
    }

    const notesTextarea = document.getElementById('user-notes-textarea');
    if (notesTextarea) {
      notesTextarea.addEventListener('input', (e) => {
        gameState.userNotes = e.target.value;
        saveGameState();
      });
    }

    // AI Assistant Chat
    const btnSend = document.getElementById('btn-assistant-send');
    const inputChat = document.getElementById('assistant-user-input');
    if (btnSend && inputChat) {
      btnSend.addEventListener('click', () => sendThingMessage(inputChat.value));
      inputChat.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendThingMessage(inputChat.value);
      });
    }

    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => sendThingMessage(chip.textContent.trim()));
    });

    // Motive selection
    document.querySelectorAll('.motive-choice-item').forEach(item => {
      item.addEventListener('click', () => selectVerdictMotive(item.dataset.motive));
    });

    const btnAccuse = document.getElementById('btn-submit-verdict');
    if (btnAccuse) btnAccuse.addEventListener('click', submitAccusation);

    const btnRestartFail = document.getElementById('btn-fail-retry');
    if (btnRestartFail) {
      btnRestartFail.addEventListener('click', () => {
        audio.playClick();
        document.getElementById('verdict-result-failure').classList.remove('active');
      });
    }

    const btnRestartGame = document.getElementById('btn-restart-case');
    if (btnRestartGame) btnRestartGame.addEventListener('click', resetGame);

    const navRestartBtn = document.getElementById('btn-nav-restart');
    if (navRestartBtn) navRestartBtn.addEventListener('click', resetGame);

    // Initial renders
    updateHUDStats();
    initScrollSystem();
    renderVerdictOptions();
    renderEvidenceCards();
    renderSuspectView(gameState.selectedSuspect || Object.keys(CASE_DATA.suspects)[0]);
  });

  // Global hooks
  window.WEDNESDAY_APP = {
    switchView,
    switchCase,
    proceedToNextCase: (nextCaseId) => proceedToNextCase(nextCaseId),
    activateAndInvestigate: (caseId) => {
      const allowed = switchCase(caseId);
      if (allowed !== false) switchView('room');
    },
    inspectClue: (key) => openEvidenceModal(key),
    inspectClueFromCase: (caseId, key) => {
      if (caseId !== currentCaseId) switchCase(caseId);
      openEvidenceModal(key);
    },
    askThingAbout: (key) => {
      switchView('assistant');
      sendThingMessage(`Can you analyze the ${CASE_DATA.clues[key].name}?`);
    },
    toggleUV: (key) => toggleUVMode(key),
    runReagent: (key) => runReagentTest(key),
    filterClues: (filter) => filterClues(filter),
    pinClueDirectly: (key) => pinClueDirectly(key),
    locateIn3D: (key) => locateClueIn3D(key),
    selectSuspect: (key) => renderSuspectView(key),
    selectVerdictSuspect,
    toggleVerdictEvidence,
    triggerJumpscare,
    triggerLightning,
    playOrganChord: () => audio.playOrganChord(),
    toggleDrone: () => {
      const isAudible = audio.toggleMute();
      const statusEl = document.getElementById('crypt-drone-status');
      if (statusEl) statusEl.textContent = isAudible ? '🔉 Drone Active' : '🔇 Drone Silenced';
    },
    cycleGothicQuote,
    resetGame,
    scrollDownToOverview,
    scrollToIndex,
    scrollToCases: () => switchView('evidence'),
    scrollToRules,
    scrollToCrypt
  };

})();
