const factText = document.querySelector('.fact-text');
      const nextBtn = document.querySelector('.next-btn');
      const saveBtn = document.querySelector('.save-btn');
      const savedDefinitions = document.querySelector('.saved-definitions');
      const factWrapper = document.querySelector('.fact-wrapper');
      const factWrapper1 = document.querySelector('.fact-wrapper1');
      const factWrapper2 = document.querySelector('.fact-wrapper2');
      const inventoryBtn = document.querySelector('.inventory-btn');
      const removeBtn = document.querySelector('.remove-btn');
      const clearBtn = document.querySelector('.clear-btn');
      const restartBtn = document.querySelector('.restart-btn');
      const exampleBtn = document.querySelector('.example-btn');
      const exampleText = document.querySelector('.example-text');
      const speakBtn = document.querySelector('.speak-btn');
      const tswanaCheck = document.querySelector('.tswana-check');
      const zuluCheck = document.querySelector('.zulu-check');
      const tsongaCheck = document.querySelector('.tsonga-check');

      const facts = ["A physical quantity that has both magnitude and direction is a vector", "A quantity that has magnitude only is a scalar quantity", "The resultant vector is the single vector which has the same affect as the original vectors acting together.", "Distance is the length of path travelled", "Displacement is a change in position.", "Speed is the rate of change of distance", "Velocity is the rate of change of position or rate of displacement.", "Acceleration is the rate of change of velocity.", "Inertia is the property of an object that causes it to resist a change in its state of rest or uniform motion.", "Weight is the gravitational force the earth exerts on any object on or near its surface.", "Normal Force is the perpendicular force exerted by a surface on an object with which it is in contact.", "Frictional force due to a surface is the force that opposes the motion of an object and acts parallel to the surface with which the object is in contact.", "Static frictional force is the force that opposes the tendancy of motion of a stationary object relative to a surface.", "Kinetic frictional force is the force that opposes the motion of a moving object relative to a surface.", "Momentum is the product of the mass and velocity of the object.", "The law of conservation of linear momentum is the total linear momentum of an isolated system remains constant (is conserved)", "Impulse is the product of the resultant/net force acting on an object and the time for which the resultant/net force acts on the object.", "An elastic collision is a collision in which both momentum and Kinetic energy are conserved.", "An inelastic collision is a collision in which only momentum is conserved.", "Newton's first law of motion is when an object continues in a state of rest or uniform velocity (moving with constant velocity) unless it is acted upon by a (non-zero) net or resultant force.", "Newton's second law of motion is when a resultant/net force, is applied to an object of mass, m, it accelerates in the direction of the net force. The acceleration, a, is directly proportional to the net force and inversely proportional to the mass.", "Newton's second law in terms of momentum is when the resultant/net force acting on an object is equal to the rate of change of momentum of the object in the direction of the resultant/net force.", "Newton's third law is when object A exerts a force on object B, object B simultaneously exerts and oppositely directed force of equal magnitude on object A.", "Newton's Law of Universal Gravitation is when every particle in the universe attracts every other particle with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres.", "The work done on an object by a force is the product of the displacement and the component of the force parallel to the displacement.", "Work-Energy Theorem is the work done by a resultant/net force on an object is equal to the change in the kinetic energy of the object.", "A conservative force is a force for which the work done in moving an object between two points is independent of the path taken.", "A non-conservative force is a force for which the work done in moving an object between two points depends on the path taken.", "Gravitational potential energy is the energy an object possesses due to its position relative to a reference point.", "Kinetic energy is the energy an object has as a result of the object's motion.", "Mechanical energy is the sum of gravitational potential energy and Kinetic energy at a point.", "Conservation of energy is when the total energy in a system cannot be created nor destroyed; only transferred from one form to another.", "Conservation of mechanical energy is when in the absence of air resistance or any external forces, the mechanical energy of an object is constant.", "Power is the rate at which work is done or the rate at which energy is transferred.", "Efficiency is the ratio of output power to input power.", "The Doppler effect is the change in frequency (or pitch) of the sound detected by a listener because the sound source and the listener have different velocities relative to the medium of sound propagation.", "Coulomb's law is when the force between two charges is directly proportional to the product of the charges and inversely proportional to the distance between the charges squared.", "An electric field is a region of space in which an electric charge will experience a force. The direction of the electric field is the direction that a positive test charge would move if placed at that point.", "Potential difference is the work done per unit positive charge.", "Emf is the total energy supplied per coulomb of charge by the cell.", "Current is the rate of flow of charge.", "Resistance is a material's opposition to the flow of electric current.", "Ohm's Law is when the current through a conductor is directly proportional to the potential difference across the conductor at constant temperature.", "The rms value for alternating voltage/current is when the rms value of AC is the DC potential difference/current which dissipates the same amount of energy as AC.", "A diode is a component that only allows current to flow in one direction.", "Magnetic flux linkage is the product of the number of turns on the coil and the flux through the coil.", "Faraday's law of electromagentic induction: The emf induced is directly proportional to the rate of change of magnetic flux (flux linkage).", "Lenz's Law: The induced current flows in a direction so as to set up a magnetic field to oppose the change in magnetic flux.", "The photoelectric effect is the process that occurs when light shines on a metal and elctrons are ejected.", "Threshold frequency is the minimum frequency of incident radiation at which electrons will be emitted from a particular metal.", "Work function is the minimum amount of energy needed to emit an electron from the surface of a metal.", "An atomic emission spectrum is formed when certain frequencies of electromagnetic radiation are emitted due to an atom's electrons making a transition from a high-energy state to a lower energy state.", "Molar mass is the mass in grams of one mole of that substance.", "A solute is the substance that is dissolved in the solution.", "A solvent is the substance in which another substance is dissolved, forming a solution.", "Concentration is the number of moles of solute per unit volume of solution.", "A standard volume solution is a solution of known concentration.", "Electronegativity is a measure of the tendency of an atom to attract a bonding pair of electrons.", "A covalent bond is the sharing of at least one pair of electrons by two atoms.", "A non-polar covalent bond is an equal sharing of electrons.", "A polar covalent bond is unequal sharing of electrons leading to a dipole forming.", "An ionic bond is the transfer of electrons and subsequent electrostatic attraction.", "Metallic bonding is between a positive kernel and a sea of delocalised electrons.", "An intramolecular bond is the bond occurring between atoms within molecules.", "An intermolecular force is a weak force of attraction between molucules or between atoms of noble gases.", "Dipole-dipole forces are forces between two polar molecules.", "Induced dipole forces or London forces are forces between non-polar molecules.", "Hydrogen bonding are forces between molecules in which hydrogen is covalently bonded to nitrogen, oxygen or flourine.", "Boiling point is the temperature at which the vapour pressure of a substance equals the atmospheric pressure.", "Melting point is the temperature at which the solid and the liquid phases of a substance are at equilibrium.", "Vapour pressure is the pressure exerted by a vapour at equilibrium with its liquid in a closed system.", "Organic molecules are molecules containing carbon atoms.", "A hydrocarbon is a compound containing only carbon and hydrogen atoms.", "An homologous series is a series of similar compounds which have the same functional group and have the same general formula, in which each member differs from the previous one by a single CH2 unit.", "Structural isomers are compounds having the same molecular formula but different structural formulae.", "A functional group is an atom or a group of atoms that form the centre of chemical activity in the molecule.", "A saturated compound is a compound in which all of the bonds between carbon atoms are single bonds.", "An unsaturated compound is a compound in which there is at least one double and/or triple bond between carbon atoms.", "Macromolecule is a molecule that consists of a large number of atoms.", "Monomers are small organic molecules that can be covalently bonded together in a repeating pattern.", "A polymer is a large molecule composed of smaller monomer units covalently bonded in a repeating pattern.", "Polymerisation is a chemical reaction in which monomer molecules join to form a polymer.", "Addition polymer is a polymer formed when monomers (usually containing a double bond) combine through an addition reaction.", "Condensation polymer is a polymer formed by two monomers with different functional groups that link together in a condensation reaction in which a small molecule usually water, is lost.", "The heat of reaction is the net change of chemical potential energy of the system.", "Exothermic reactions are reactions which transfer potential energy into thermal energy.", "Endothermic reactions are reactions which transfer thermal energy into potential energy.", "Reaction rate is the change in concentration per unit time of either a reactant or product.", "Activation energy is the minimum energy required to start a chemical reaction.", "The activated complex is an unstable transition state between the reactants and the products." , "A catalyst is a substance that increases the rate of the reaction but remains unchanged at the end of the reaction.", "Yield is a measure of the extent of a reaction, generally measured by comparing the amount of product against the amount of product that is possible.", "Le Chatelier's principle is 'When an external stress (change in pressure, temperature or concentration) is applied to a system in chemical equilibrium, the equilibrium point will change in such a way as to counteract the stress'.", "An open system is a system that continually interacts with its surroundings", "A closed systems is isolated from its surroundings.", "Chemical equilibrium is a dynamic equilibrium when the rate of the forward reaction is equal to the rate of the reverse reaction.", "Arrhenius theory: An acid is a substance that produces hydrogen ions/hydronium ions when it dissolves in water.", "Arrhenius theory: A base is a substance that produces hydroxide ions when it dissolves in water.", "Lowry-Bronsted theory: An acid is a proton donor.", "Lowry-Bronsted theory: A base is a proton acceptor.", "A strong acid is an acid that ionises almost completely in an aqueous solution.", "A strong base is a base that dissociates almost completely in an aqueous solution.", "A weak acid is an acid that only ionises partially in an aqueous solution.", "A weak base is a base that only dissociates partially in an aqueous solution.", "A salt is a substance in which the hydrogen of an acid has been replaced by a cation.", "Neutralisation is the point where an acid and base have reacted so neither is in excess.", "Hydrolysis of a salt is a reaction with water where water itself is decomposed.", "Concentrated acids/bases contain a large amount (number of moles) of acid/base in proportion to the volume of water.", "Dilute acids/bases contain a small amount (number of moles) of acids/bases in proportion to the volume of water.", "Kw is the equilibrium constant for the ionization of water, or the ionic product of water or the ionization constant of water.", "The equivalence point of a titration is the point at which the acid has completely reacted with the base.", "The end point of a titration is the point where the indicator changes colour.", "Hydrolysis is a reaction where a salt reacts with water.", "Oxidation is the loss of electrons.", "Reduction is the gain of electrons.", "An oxidising agent is a substance that accepts electrons.", "A reducing agent is a substance that donates electrons.", "An anode is the electrode where oxidation takes place.", "A cathode is the electrode where reduction takes place.", "A Galvanic cell is a cell in which chemical energy is converted into electrical energy.", "An Electrolytic cell is a cell in which electrical energy is converted into chemical energy.", "An Electrolyte is a solution/liquid/dissolved substance that conducts electricity through the movement ions.", "Electrolysis is the chemical process in which electrical energy is converted to chemical energy or the use of electrical energy to produce a chemical change.", "Eutrophication is the process by which an ecosystem e.g. a river or a dam, becomes enriched with inorganic plant nutrients resulting in excessive plant growth."];

      const tswanaFacts = ["Bontsi jo bo bonalang jo bo nang le bogolo le tsela ke beketara", "Bokana jo bo nang le bogolo fela ke bokana jwa sekala", "Vector e e tlhagelelang ke vector e le nngwe e e nang le tlhotlheletso e e tshwanang le ya divector tsa ntlha tse di dirang mmogo.", "Sekgala ke boleele jwa tsela e e tsamailweng", "Go fuduga ke phetogo ya maemo.", "Lobelo ke selekanyo sa phetogo ya sekgala", "Lebelo ke seelo sa phetogo ya boemo kgotsa seelo sa go fuduga.", "Go akofisa ke seelo sa phetogo ya lebelo.", "Inertia ke thoto ya selo se se dirang gore se gane phetogo ya seemo sa sone sa boikhutso kgotsa motsamao o o tshwanang.", "Bokete ke maatla a kgogedi a lefatshe le a dirisang mo selong sepe fela se se mo godimo ga sone kgotsa se se gaufi le sone.", "Maatla a a Tlwaelegileng ke maatla a a tsepameng a a dirisiwang ke boalogodimo mo selong se se kopanang le sone.", "Maatla a kgotlhego ka ntlha ya boalogodimo ke maatla a a ganetsang motsamao wa selo mme a dira go bapile le boalogodimo jo selo se kopanang le jone.", "Maatla a kgotlhego a a sa fetogeng ke maatla a a ganetsang tshekamelo ya go tsamaya ga selo se se emeng fa se bapisiwa le boalogodimo.", "Maatla a kgotlhego ya go tsamaya ke maatla a a ganetsang motsamao wa selo se se tsamayang fa se bapisiwa le boalogodimo.", "Momentum ke setlhagiswa sa bokete le lebelo la selo.", "Molao wa tshomarelo ya maatla a mola ke maatla otlhe a mola a thulaganyo e e kgaoganeng a nna a sa fetoge (a bolokilwe)", "Impulse ke setlhagiswa sa maatla a a tlhagelelang/a nete a a dirang mo selong le nako e maatla a a tlhagelelang/a nete a dirang mo selong.", "Thulano ya elastic ke thulano e mo go yona maatla a tlhotlheletso le a Kinetic a bolokwang.", "Thulano e e sa elastic ke thulano e mo go yone go bolokwang fela maatla.", "Molao wa ntlha wa motsamao wa ga Newton ke fa selo se tswelela se le mo seemong sa go ikhutsa kgotsa ka lobelo lo lo tshwanang (se tsamaya ka lobelo lo lo sa fetogeng) ntle le fa se dirisiwa ke maatla a letlowa (a e seng a lefela) kgotsa a a tswang mo go one.", "Molao wa bobedi wa motsamao wa ga Newton ke fa maatla a a tlhagelelang/a nete, a dirisiwa mo selong sa bokete, m, a akofisa go ya kwa maatla a nete. Potlako, a, e lekana ka tlhamalalo le maatla a letlowa mme e lekana ka tsela e e sa siamang le bokete.", "Molao wa bobedi wa ga Newton mabapi le tlhotlheletso ke fa maatla a sephetho/net a a dirang mo selong a lekana le seelo sa phetogo ya tlhotlheletso ya selo mo ntlheng ya maatla a sephetho/net.", "Molao wa boraro wa ga Newton ke fa selo A se dirisa maatla mo selong B, selo B ka nako e le nngwe se dirisa maatla a bogolo jo bo lekanang mo selong A.", "Molao wa ga Newton wa Kgogedi ya Lobopo lotlhe ke fa karolwana nngwe le nngwe mo lobopong e gogela karolwana nngwe le nngwe e nngwe ka maatla a a lekanang ka tlhamalalo le setlhagiswa sa bokete jwa tsone mme a lekana ka tsela e e sa siamang le sekwere sa sekgala se se fa gare ga disenthara tsa tsone.", "Tiro e e dirwang mo selong ke maatla ke setlhagiswa sa go suta le karolo ya maatla e e tsamaelanang le go suta.", "Work-Energy Theorem ke tiro e e dirwang ke maatla a a tlhagelelang/a nete mo selong a lekana le phetogo ya maatla a go tsamaya a selo.", "Maatla a a bolokang ke maatla a tiro e e dirwang mo go tsamaiseng selo fa gare ga dintlha tse pedi e ikemetseng ka nosi mo tseleng e e tserweng.", "Maatla a a sa tlhomamang ke maatla a tiro e e dirwang mo go tsamaiseng selo fa gare ga dintlha tse pedi e ikaegileng ka tsela e e tserweng.", "Maatla a kgogedi ke maatla a selo se nang le one ka ntlha ya boemo jwa sone fa se bapisiwa le ntlha ya tshupiso.", "Maatla a go tsamaya ke maatla a selo se nang le one ka ntlha ya go tsamaya ga selo.", "Maatla a metšhini ke palogotlhe ya maatla a kgogedi le maatla a Kinetic mo ntlheng.", "Tshomarelo ya maatla ke fa maatla otlhe mo thulaganyong a sa kgone go tlholwa kgotsa go senngwa; e fetisediwa fela go tswa mo sebopegong se sengwe go ya kwa go se sengwe.", "Tshomarelo ya maatla a metšhini ke fa go sena kganetso ya mowa kgotsa maatla ape a kwa ntle, maatla a metšhini a selo a sa fetoge.", "Maatla ke seelo se tiro e dirwang ka sone kgotsa seelo se maatla a fetisiwang ka sone.", "Bokgoni ke tekanyo ya maatla a dipholo go ya go maatla a tsenyo.", "Phelelo ya Doppler ke phetogo ya makgetlo (kgotsa segalo) sa modumo o o lemogiwang ke moreetsi ka gonne motswedi wa modumo le moreetsi di na le mabelo a a farologaneng fa a bapisiwa le sediriswa sa go anama ga modumo.", "Molao wa Coulomb ke fa maatla a a fa gare ga ditšhatšhe tse pedi a lekana ka tlhamalalo le setlhagiswa sa ditšhatšhe mme a lekana ka tsela e e sa siamang le sekgala se se fa gare ga ditšhatšhe tse di sekwere.", "Lefelo la motlakase ke kgaolo ya lefaufau e mo go yone motlakase o tla itemogelang maatla. Tsela ya lefelo la motlakase ke tsela e tefo e e siameng ya teko e neng e tla tsamaya ka yone fa e ne e ka bewa mo ntlheng eo.", "Emf ke maatla otlhe a a tlamelwang ka coulomb ya tefiso ke sele.", "Motlakase ke sekhahla sa phallo ya qoso.", "Kganetso ke kganetso ya sedirisiwa go elela ga motlakase.", "Molao wa Ohm ke fa motlakase o o tsamayang ka motshwari o lekana ka tlhamalalo le pharologano ya bokgoni go kgabaganya motshwari ka themperetšha e e sa fetogeng.", "Boleng jwa rms jwa maatla a a fetogang/motlakase ke fa boleng jwa rms jwa AC e le pharologano ya bokgoni jwa DC/motlakase o o phatlalatsa selekanyo se se tshwanang sa maatla le AC.", "Diode ke karolo e letlang fela motlakase go elela ka tsela e le nngwe.", "Magnetic phallo kgokahanyo ke sehlahiswa sa palo ya retelehela ka khoele le phallo ka khoele.", "Molao wa ga Faraday wa go tsenngwa ga motlakase: Emf e e tlhotlhelediwang e lekana ka tlhamalalo le selekanyo sa phetogo ya kelelo ya makenete (kgolaganyo ya kelelo).", "Molao wa ga Lenz: Motlakase o o tlhotlhelediwang o elela ka tsela nngwe gore o kgone go tlhoma lefelo la makenete go ganetsa phetogo ya go elela ga makenete.", "Phelelo ya motlakase wa lesedi ke thulaganyo e e diragalang fa lesedi le phatsima mo tshiping mme dieleketerone di ntshiwa.", "Makgetlo a molelwane ke makgetlo a a kwa tlase a marang a tiragalo a dieleketerone di tla ntshiwang mo go one go tswa mo tshiping e e rileng.", "Tiro ya tiro ke bonnye jwa maatla a a tlhokegang go ntsha eleketerone go tswa mo godimo ga tshipi.", "Sepektheramo sa ntsho ya athomo se bopiwa fa makgetlo a a rileng a marang a electromagnetic a ntshiwa ka ntlha ya dieleketerone tsa athomo tse di dirang phetogo go tswa mo seemong sa maatla a a kwa godimo go ya kwa seemong sa maatla a a kwa tlase.", "Molar mass ke boima ka digerama tsa mole o le mongwe wa selo seo.", "Solute ke selo se se tswakilweng mo tharabololong.", "Setlhaolosi ke selo se selo se sengwe se tlhaolosiwang mo go sone, se bopa tharabololo.", "Mahloriso ke palo ya di-mole tsa solute ka yuniti ya bophahamo ba modumo ya tharollo.", "A tlwaelehileng bophahamo ba modumo tharollo ke tharollo ya tsebahalang mahloriso.", "Electronegativity ke selekanyo sa tshekamelo ya athomo ya go gogela para ya dieleketerone tse di golaganang.", "Kgolagano ya covalent ke go abelana ga bonnye para e le nngwe ya dieleketerone ke diatomo tse pedi.", "Kgolagano ya covalent e e seng ya polara ke go abelana ka go lekana ga dieleketerone.", "Kgolagano ya covalent ya polar ke go abelana go go sa lekalekaneng ga dieleketerone go go isang kwa go bopeng dipole.", "Kgolagano ya ionic ke phetiso ya dieleketerone le kgogedi ya electrostatic e e latelang.", "Kgolagano ya tshipi e fa gare ga kernel e e siameng le lewatle la dieleketerone tse di sa tlhomamang.", "Kgolagano ya mo teng ga dimolekhule ke kgolagano e e diragalang fa gare ga diatomo mo teng ga dimolekhule.", "Maatla a a fa gare ga dimolekhule ke maatla a a bokoa a kgogedi fa gare ga dimolekhule kgotsa fa gare ga diatomo tsa digase tse di tlotlegang.", "Maatla a dipole-dipole ke maatla a a fa gare ga dimolekhule tse pedi tsa polara.", "Maatla a dipole a a tlhotlhelediwang kgotsa maatla a London ke maatla a a fa gare ga dimolekhule tse di seng tsa polara.", "Kgolagano ya haeterojene ke maatla magareng ga dimolekhule tse mo go tsona haeterojene e kgolagantsweng ka covalent le naeterojene, okosejene kgotsa flourine.", "Ntlha ya go bela ke themperetšha e mo go yone kgatelelo ya mouwane wa selo e lekanang le kgatelelo ya lefaufau.", "Ntlha ya go nyerologa ke themperetšha e mo go yona dikgato tse di tiileng le tse di metsi tsa selo di leng mo tekatekanong.", "Kgatelelo ya mouwane ke kgatelelo e e dirisiwang ke mouwane o o lekalekanang le seedi sa one mo thulaganyong e e tswetsweng.", "Dimolekhule tsa ditshedi ke dimolekhule tse di nang le diatomo tsa khabone.", "Haeterokhabone ke motswako o o nang le diatomo tsa khabone le haeterojene fela.", "Motseletsele wa homologous ke motseletsele wa metswako e e tshwanang e e nang le setlhopha se se tshwanang sa tiro mme e na le fomula e e tshwanang ya kakaretso, e mo go yona leloko lengwe le lengwe le farologanang le le le fetileng ka yuniti e le nngwe ya CH2.", "Di-isomer tsa popego ke metswako e e nang le fomula e e tshwanang ya dimolekhule mme e le difomula tse di farologaneng tsa popego.", "Setlhopha se se dirang ke athomo kgotsa setlhopha sa diatomo tse di bopang bogare jwa tiro ya dikhemikhale mo molekhuleng.", "Motswako o o tletseng ke motswako o mo go ona dikgolagano tsotlhe fa gare ga diatomo tsa khabone e leng dikgolagano tse di le nosi.", "Motswako o o sa kgotsofalang ke motswako o mo go ona go nang le bonnye kgolagano e le nngwe e e gabedi le/kgotsa e e menaganeng gararo fa gare ga diatomo tsa khabone.", "Macromolecule ke molekhule o o nang le palo e kgolo ya diatomo.", "Di-monomer ke dimolekhule tse dinnye tsa ditshedi tse di ka kgonang go kopanngwa mmogo ka tsela ya covalent ka mokgwa o o ipoeletsang.", "Polymer ke molekhule o mogolo o o bopilweng ka diyuniti tse dinnye tsa monomer tse di kopantsweng ka tsela ya covalent ka mokgwa o o boaboelediwang.", "Polymerization ke tsibogo ya khemikhale e mo go yona dimolekhule tsa monomere di kopanang go bopa polymer.", "Polymer ya tlaleletso ke polymer e e bopegang fa dimonomer (gantsi di na le kgolagano e e gabedi) di kopana ka tsibogo ya tlaleletso.", "Polymer ya tsitsipano ke polymer e e bopilweng ke di-monomer tse pedi tse di nang le ditlhopha tse di farologaneng tse di dirang tse di golaganang mmogo mo tsibogong ya tsitsipano e mo go yona molekhule o monnye gantsi e leng metsi, o latlhegang.", "Mogote wa tsibogo ke phetogo ya letlowa la maatla a bokgoni jwa dikhemikhale tsa thulaganyo.", "Ditsibogo tsa Exothermic ke ditsibogo tse di fetisang maatla a a ka nnang teng go nna maatla a mogote.", "Diphetogo tsa endothermic ke diphetogo tse di fetisang maatla a mogote go nna maatla a a ka nnang teng.", "Seelo sa tsibogo ke phetogo ya kgobokano ka nako ya yuniti ya sediriswa se se tsibogang kgotsa setlhagiswa.", "Maatla a go dira gore ke maatla a mannye a a tlhokegang go simolola tsibogo ya khemikhale.", "The butswe rarahaneng ke sa tsitsitseng phetoho boemo pakeng tsa reactants le dihlahiswa.", "Setlhotlheletsi ke selo se se oketsang seelo sa tsibogo mme se sa fetoge kwa bokhutlong jwa tsibogo.", "Thobo ke selekanyo sa selekanyo sa tsibogo, ka kakaretso se lekanngwa ka go bapisa selekanyo sa setlhagiswa kgatlhanong le selekanyo sa setlhagiswa se se kgonegang.", "Molawana wa ga Le Chatelier ke gore 'Fa kgatelelo ya kwa ntle (phetogo ya kgatelelo, themphereitšha kgotsa kgobokano) e dirisiwa mo thulaganyong e e mo tekatekanong ya khemikhale, ntlha ya tekatekano e tla fetoga ka tsela e e tla lwantshang kgatelelo'.", "Thulaganyo e e bulegileng ke thulaganyo e e tswelelang go dirisana le tikologo ya yona", "A dithulaganyo tswetsweng e arohane le tikoloho ya yona.", "Tekatekano ya khemikhale ke tekatekano e e fetogang fa seelo sa tsibogo ya kwa pele se lekana le seelo sa tsibogo ya go boela morago.", "Kgopolo ya ga Arrhenius: Esiti ke selo se se tlhagisang di-ion tsa haeterojene/diaone tsa haeteroniamo fa di tswakana mo metsing.", "Kgopolo ya ga Arrhenius: Motheo ke selo se se tlhagisang di-ion tsa hydroxide fa se tswa mo metsing.", "Kgopolo ya Lowry-Bronsted: Esiti ke moneeladiporotone.", "Kgopolo ya Lowry-Bronsted: Motheo ke seamogedi sa porotone.", "Esiti e e maatla ke esiti e e ionisang mo e ka nnang ka botlalo mo tharabololong e e metsi.", "Motheo o o nonofileng ke motheo o o kgaoganang mo e ka nnang gotlhelele mo tharabololong ya metsi.", "Esiti e e bokoa ke esiti e e ionisang fela bontlhabongwe mo tharabololong e e metsi.", "Motheo o o bokoa ke motheo o o kgaoganang ka bontlhabongwe fela mo tharabololong ya metsi.", "Letswai ke selo se mo go sone haeterojene ya esiti e tseetsweng sebaka ke katione.", "Neutralization ke ntlha e esiti le motheo di tsibogetseng ka jalo ga go epe ya tsona e e feteletseng.", "Hydrolysis ya letswai ke tsibogo le metsi fa metsi ka boone a bolang teng.", "Di-esiti/di-bese tse di tseneletseng di na le selekanyo se segolo (palo ya di-mole) sa esiti/motheo go ya ka selekanyo sa bolumu ya metsi.", "Diesiti/dibese tse di tlhaolositsweng di na le selekanyo se sennye (palo ya dimole) tsa diesiti/dibese go ya ka selekanyo sa bolumu ya metsi.", "Kw ke tekatekano e e sa fetogeng ya ionization ya metsi, kgotsa setlhagiswa sa ionic sa metsi kgotsa ionization ya metsi.", "Ntlha ya tekatekano ya titration ke ntlha e mo go yona esiti e tsibogetseng ka botlalo le motheo.", "Ntlha ya bokhutlo ya titration ke ntlha e sesupo se fetolang mmala mo go yona.", "Hydrolysis ke tsibogo e mo go yona letswai le tsibogelang le metsi.", "Oxidation ke go latlhegelwa ke dieleketerone.", "Phokotso ke poelo ya dieleketerone.", "Sediriswa sa oksijene ke selo se se amogelang dieleketerone.", "Selo se se fokotsang ke selo se se neelanang ka dieleketerone.", "Anode ke eleketeroute e go diragalang oksijene mo go yone.", "Cathode ke eleketeroute e phokotso e diragalang mo go yone.", "Sele ya Galvanic ke sele e mo go yone maatla a dikhemikhale a fetolelwang go nna maatla a motlakase.", "Sele ya Electrolytic ke sele e mo go yona maatla a motlakase a fetolelwang go nna maatla a khemikhale.", "Electrolyte ke tharabololo/seeledi/selo se se tswakilweng se se tsamaisang motlakase ka di-ion tsa motsamao.", "Electrolysis ke thulaganyo ya khemikhale e mo go yona maatla a motlakase a fetolelwang go nna maatla a khemikhale kgotsa tiriso ya maatla a motlakase go tlhagisa phetogo ya khemikhale.", "Eutrophication ke thulaganyo e ka yona thulaganyo ya tikologo sk. noka kgotsa letamo, e humisiwa ka dikotla tsa dimela tse di sa tsheleng tse di felelang ka kgolo ya dimela e e feteletseng."];

      const zuluFacts = ["Inani elibonakalayo elinakho kokubili ubukhulu nesiqondiso ivekhtha", "Inani elinobukhulu kuphela liyi-scalar quantity", "Ivekhtha ewumphumela iyivekhtha eyodwa enomthelela ofanayo namavekhtha okuqala asebenza ndawonye.", "Ibanga ubude bendlela ehanjiwe.", "Ukugudluzwa wukushintsha kwesimo.", "Isivinini izinga lokushintsha kwebanga", "Isivinini izinga lokushintsha isikhundla noma izinga lokufuduka.", "Ukusheshisa izinga lokushintsha kwesivinini.", "I-inertia yimpahla yento eyibangela ukuthi imelane noshintsho esimweni sayo sokuphumula noma ukunyakaza okufanayo.", "Isisindo amandla adonsela phansi umhlaba owasebenzisayo kunoma iyiphi into engaphezulu noma eduze kwayo.", "I-Normal Force ingamandla e-perpendicular asetshenziswa indawo entweni exhumene nayo.", "Amandla efrictional ngenxa yendawo amandla aphikisana nokunyakaza kwento futhi asebenza ngokuhambisana nendawo lapho into ixhumene nayo.", "I-Static frictional force amandla aphikisana nokuthambekela kokunyakaza kwento emile uma kuqhathaniswa nendawo.", "Amandla e-Kinetic frictional amandla aphikisana nokunyakaza kwento ehambayo ehlobene nendawo.", "I-Momentum iwumkhiqizo wesisindo kanye nesivinini sento.", "Umthetho wokongiwa komfutho womugqa isamba somugqa womfutho wesistimu ehlukanisiwe uhlala unjalo (uyalondolozwa)", "I-Ipulse ingumkhiqizo womphumela/wenethi amandla asebenza entweni kanye nesikhathi lapho umphumela/umfutho wenethi usebenza entweni.", "Ukushayisana okunwebekayo ukungqubuzana lapho kugcinwa khona kokubili umfutho namandla e-Kinetic.", "Ukushayisana kwe-inelastic ukungqubuzana lapho kugcinwa khona umfutho kuphela.", "Umthetho wokuqala ka-Newton wokunyakaza yilapho into iqhubeka isesimweni sokuphumula noma isivinini esifanayo (ihamba ngesivinini esingaguquki) ngaphandle kwalapho senziwa inethi (okungeyona iqanda) noma amandla angumphumela.", "Umthetho wesibili ka-Newton wokunyakaza yilapho amandla omphumela/inetha, asetshenziswa entweni yesisindo, m, asheshisa lapho eya khona amandla anetha. I-acceleration, a, ilingana ngokuqondile namandla engqikithi futhi ilinganisa ngokuphambene nesisindo.", "Umthetho wesithathu ka-Newton uwukuthi lapho into A isebenzisa amandla entweni engu-B, into engu-B kanyekanye isebenzisa amandla aqondiswe ngokuphambene anobukhulu obulinganayo entweni A.", "Umthetho KaNewton Wokudonsela Kwamandla Kundawo Yonke yilapho yonke izinhlayiyana ezisendaweni yonke ziheha zonke ezinye izinhlayiya ngamandla alingana ngokuqondile nomkhiqizo wobuningi bazo futhi ngokuphambene ngokulinganayo nesikwele sebanga phakathi kwezindawo zazo.", "Umsebenzi owenziwe entweni ngamandla ungumkhiqizo wokufuduka kanye nengxenye yamandla ahambisana nokugudluzwa.", "I-Work-Energy Theorem iwumsebenzi owenziwe umphumela/umfutho wenetha entweni ulingana noshintsho kumandla kinetic wento.", "I-Conservative force ingamandla lapho umsebenzi owenziwe ekunyakazeni into phakathi kwamaphuzu amabili uzimele endleleni ethathiwe.", "I-non-Conservative force ingamandla lapho umsebenzi owenziwe ukuhambisa into phakathi kwamaphuzu amabili uncike endleleni ethathiwe.", "Amandla adonsela phansi amandla ento enawo ngenxa yesimo sayo esihlobene nendawo eyireferensi.", "Amandla e-Kinetic amandla into enawo ngenxa yokunyakaza kwento.", "Amandla emishini ayisamba samandla adonsela phansi kanye namandla e-Kinetic endaweni eyodwa.", "Ukongiwa kwamandla yilapho amandla aphelele ohlelweni engakwazi ukudalwa noma ukubhujiswa; idluliswa kuphela isuka kwelinye ifomu iye kwelinye.", "Ukongiwa kwamandla emishini yilapho kungekho ukumelana komoya nanoma imaphi amandla angaphandle, amandla emishini ento ahlala njalo.", "Amandla izinga umsebenzi owenziwa ngalo noma izinga amandla adluliswa ngalo.", "Ukusebenza kahle isilinganiso samandla okukhiphayo kumandla okufakwayo.", "Umphumela we-Doppler uwushintsho lwemvamisa (noma iphimbo) lomsindo otholwa yisilaleli ngenxa yokuthi umthombo womsindo nomlaleli banesivinini esihlukile esihlobene nendawo yokusakaza umsindo.", "Umthetho we-Coulomb yilapho amandla phakathi kwezindleko ezimbili elingana ngokuqondile nomkhiqizo wezindleko futhi ngokuphambene ngokulinganayo nebanga eliphakathi kwezindleko ezisikwele.", "Inkambu kagesi isifunda sesikhala lapho ukushajwa kukagesi kuzothola amandla. Isiqondiso senkundla kagesi isiqondiso lapho inkokhiso yokuhlola evumayo izonyakaza uma ibekwe kulelo phuzu.", "Umehluko ongase ube khona wumsebenzi owenziwa ngeyunithi ngayinye ekhokhiswayo.", "I-Emf isamba samandla anikezwa i-coulomb ngayinye yeshaji iseli.", "Okwamanje izinga lokugeleza kwenkokhiso.", "Ukumelana nokuphikisana nokugeleza kwamandla kagesi.", "Umthetho ka-Ohm yilapho i-current ngokusebenzisa ikhondatha ilingana ngokuqondile nomehluko ongaba khona kuwo wonke umqhubi ngezinga lokushisa elingashintshi.", "Inani le-rms lokushintshana kwe-voltage/yamanje kulapho inani le-rms le-AC liwumehluko ongaba khona we-DC/yamanje ehlakaza inani lamandla afanayo njenge-AC.", "I-diode iyisici esivumela kuphela ukuthi okwamanje kugeleze ohlangothini olulodwa.", "Ukuxhunyaniswa kwe-Magnetic flux kuwumkhiqizo wenani lokujika ikhoyili kanye nokugeleza ku-coil.", "Umthetho kaFaraday wokungeniswa kwe-electromagentic: I-emf eyenzelwe ilingana ngokuqondile nezinga lokushintsha kokuguquguquka kazibuthe (ukuxhumana okuguquguqukayo).", "Umthetho we-Lenz: I-current induced igeleza iye ngalapho ukuze imise inkambu kazibuthe ukuze imelene noshintsho ku-flux kazibuthe.", "Umphumela we-photoelectric inqubo eyenzeka lapho ukukhanya kukhanya ensimbi futhi ama-electron ekhishwa.", "I-Threshold frequency yinani elincane lefrikhwensi yemisebe yesigameko lapho ama-electron azokhishwa ensimbi ethile.", "Umsebenzi womsebenzi inani elincane lamandla adingekayo ukuze kukhishwe i-electron ebusweni bensimbi.", "I-spectrum yokukhipha i-athomu yakheka lapho amafrikhwensi athile emisebe kazibuthe kagesi ekhishwa ngenxa yama-electron e-athomu enza uguquko ukusuka esimweni esinamandla amakhulu ukuya esimweni samandla aphansi.", "I-Molar mass isisindo samagremu wemvukuzane eyodwa yaleyo nto.", "I-solute into encibilika esixazululo.", "I-solvent yinto lapho enye into encibilika khona, yakhe isixazululo.", "I-concentration inombolo ye-moles of solute ngeyunithi ngayinye yevolumu.", "Isixazululo sevolumu ejwayelekile yisixazululo sokugxila okwaziwayo.", "I-Electronegativity isilinganiso sokuthambekela kwe-athomu ukuheha ipheya elibophezelayo lama-electron.", "Isibopho esivumelanayo ukwabelana okungenani kwepheya elilodwa lama-electron ngama-athomu amabili.", "I-non-polar covalent bond ukwabelana okulinganayo kwama-electron.", "Ibhondi ye-polar covalent ukwabelana ngokungalingani kwama-electron okuholela ekwakhekeni kwe-dipole.", "Isibopho se-ionic ukudluliswa kwama-electron kanye nokukhanga kwe-electrostatic okulandelayo.", "Isibopho se-metallic siphakathi kwe-pozitive kernel nolwandle lwama-electron asusiwe.", "Isibopho se-intramolecular isibopho esenzeka phakathi kwama-athomu ngaphakathi kwama-molecule.", "Amandla e-intermolecular amandla abuthakathaka okukhanga phakathi kwama-molucule noma phakathi kwama-athomu amagesi ahloniphekile.", "Amandla e-Dipole-dipole angamandla phakathi kwama-molecule amabili e-polar.", "Amandla e-dipole eyenziwe noma amabutho aseLondon angamandla phakathi kwama-molecule angewona ama-polar.", "I-hydrogen bonding amandla phakathi kwama-molecule lapho i-hydrogen iboshelwe ngokuhlanganyela ku-nitrogen, umoya-mpilo noma i-flourine.", "Iphuzu elibilisayo izinga lokushisa lapho umfutho womhwamuko wento ulingana nomfutho womkhathi.", "Iphuzu elincibilikayo izinga lokushisa lapho okuqinile kanye nezigaba zoketshezi zento zilingana.", "I-vapor pressure ingcindezi ekhishwa umhwamuko lapho ulingana noketshezi lwawo ohlelweni oluvaliwe.", "Ama-molecule ezinto eziphilayo ama-molecule aqukethe ama-athomu e-carbon.", "I-hydrocarbon iyinhlanganisela equkethe kuphela ama-athomu e-carbon ne-hydrogen.", "Uchungechunge lwe-homologous uchungechunge lwezinhlanganisela ezifanayo ezineqembu elifanayo elisebenzayo futhi ezinefomula efanayo evamile, lapho ilungu ngalinye lihluka kwedlule ngeyunithi eyodwa ye-CH2.", "Ama-isomer esakhiwo ayinhlanganisela enefomula yamangqamuzana efanayo kodwa ifomula yesakhiwo ehlukile.", "Iqembu elisebenzayo liyi-athomu noma iqembu lama-athomu akha isikhungo somsebenzi wamakhemikhali ku-molecule.", "I-compound egcwele inhlanganisela lapho zonke izibopho phakathi kwama-athomu e-carbon ziyi-bond eyodwa.", "Inhlanganisela engagcwalisiwe iyinhlanganisela lapho okukhona okungenani isibopho esisodwa esiphindwe kabili kanye/noma kathathu phakathi kwama-athomu ekhabhoni.", "I-Macromolecule iyi-molecule equkethe inani elikhulu lama-athomu.", "Ama-monomers ama-molecule amancane angahlanganiswa ndawonye ngephethini ephindaphindayo.", "I-polymer i-molecule enkulu ehlanganiswe amayunithi e-monomer amancane ahlanganiswe ngokuhlanganyela ngephethini ephindayo.", "I-Polymerization yindlela yokusabela kwamakhemikhali lapho ama-molecule e-monomer ehlangana khona ukuze akhe i-polymer.", "I-polymer yokwengeza i-polymer eyakhiwe lapho ama-monomers (ngokuvamile aqukethe isibopho esiphindwe kabili) ehlangana ngokusabela okungeziwe.", "I-polymer ye-Condensation i-polymer eyakhiwe ama-monomers amabili anamaqembu ahlukene asebenzayo ahlangana ndawonye ekuphenduleni kwe-condensation lapho i-molecule encane ngokuvamile imanzi, ilahleka.", "Ukushisa kokusabela kuwushintsho oluphelele lwamandla amakhemikhali anamandla ohlelo.", "Ukusabela kwe-exothermic ukusabela okudlulisa amandla angaba namandla ku-thermal energy.", "Ukusabela kwe-Endothermic ukusabela okudlulisa amandla okushisa abe namandla.", "Izinga lokusabela liwushintsho ekugxiliseni isikhathi seyunithi ngayinye yokusabela noma umkhiqizo.", "Amandla okuqalisa amandla amancane adingekayo ukuze kuqalwe ukusabela kwamakhemikhali.", "Inkimbinkimbi ecushiwe yisimo soshintsho esingazinzile phakathi kwama-reactants nemikhiqizo.", "I-catalyst yinto enyusa izinga lokusabela kodwa ihlala ingashintshile ekugcineni kokusabela.", "Isivuno isilinganiso sobukhulu bokusabela, ngokuvamile kukalwa ngokuqhathanisa inani lomkhiqizo nenani lomkhiqizo okungenzeka.", "Umgomo ka-Le Chatelier uthi 'Lapho ukucindezeleka kwangaphandle (ukushintsha kwengcindezi, izinga lokushisa noma ukugxila) kusetshenziswa ohlelweni ekulinganisweni kwamakhemikhali, iphuzu lokulinganisa lizoshintsha ngendlela yokubhekana nokucindezeleka'.", "Isistimu evulekile iyisistimu ehlala isebenzisana nendawo eyizungezile", "Amasistimu avaliwe ahlukanisiwe endaweni yawo.", "I-Chemical equilibrium iwukulinganisa okuguquguqukayo lapho izinga lokusabela phambili lilingana nezinga lokusabela okuphambene.", "Ithiyori ye-Arrhenius: I-asidi yinto ekhiqiza ama-ion e-hydrogen/hydronium ions uma incibilika emanzini.", "Ithiyori ye-Arrhenius: Isisekelo yinto ekhiqiza ama-ion e-hydroxide uma incibilika emanzini.", "Ithiyori ye-Lowry-Bronsted: I-asidi inikela ngeproton.", "Ithiyori ye-Lowry-Bronsted: Isisekelo singumamukeli we-proton.", "Isisekelo esiqinile siyisisekelo esihlukanisa cishe ngokuphelele nesisombululo esinamanzi.", "I-asidi eqinile i-asidi eyenza ionise cishe ngokuphelele esisombululo esinamanzi.", "I-asidi ebuthakathaka i-asidi e-iones kuphela ingxenye yesisombululo esinamanzi.", "Isisekelo esibuthakathaka siyisisekelo esihlukanisa kancane kuphela kwisisombululo esinamanzi.", "Usawoti yizinto lapho i-hydrogen ye-asidi ithathelwe indawo yi-cation.", "I-Neutralization iyindawo lapho i-asidi nesisekelo kusabela ngakho-ke akukho okweqile.", "I-Hydrolysis kasawoti ukusabela ngamanzi lapho amanzi ngokwawo ebola.", "Ama-asidi/izisekelo ezigxilile aqukethe inani elikhulu (inani lama-moles) we-asidi/isisekelo ngokulingana nomthamo wamanzi.", "Ama-asidi/izisekelo ezixubile aqukethe inani elincane (inani lama-moles) lama-asidi/izisekelo ngokulingana nomthamo wamanzi.", "I-Kw iwukulinganiswa okungaguquki kwe-ionization yamanzi, noma umkhiqizo we-ionic wamanzi noma i-ionization constant yamanzi.", "Iphuzu lokulinganisa le-titration iphuzu lapho i-asidi iphendule ngokuphelele ngesisekelo.", "Iphoyinti lokugcina le-titration yindawo lapho inkomba ishintsha khona umbala.", "I-Hydrolysis yindlela yokusabela lapho usawoti usabela emanzini.", "I-oxidation ukulahlekelwa kwama-electron.", "Ukunciphisa kuyinzuzo yama-electron.", "I-oxidising agent yinto eyamukela ama-electron.", "I-ejenti yokunciphisa into enikela ngama-electron.", "I-anode yi-electrode lapho i-oxidation yenzeka khona.", "I-cathode yi-electrode lapho ukuncipha kwenzeka khona.", "I-Galvanic cell iyiseli lapho amandla amakhemikhali aguqulwa abe amandla kagesi.", "Iseli Electrolytic iseli lapho amandla kagesi aguqulwa abe amandla amakhemikhali.", "I-Electrolyte iyisisombululo/uketshezi/into encibilikisiwe ehambisa ugesi ngama-ion okunyakaza.", "I-Electrolysis inqubo yamakhemikhali lapho amandla kagesi eguqulwa abe amandla amakhemikhali noma ukusetshenziswa kwamandla kagesi ukukhiqiza ushintsho lwamakhemikhali.", "I-Eutrophication inqubo lapho i-ecosystem isb. umfula noma idamu, linothiswa ngemisoco yezitshalo ezingaphili okuholela ekukhuleni kwezitshalo ngokweqile."];

      const tsongaFacts = ["Nhlayo ya xiviri leyi nga na vukulu na tlhelo i vector.", "Nhlayo leyi nga na vukulu ntsena i nhlayo ya xikalo", "Vector leyi humelelaka i vector yin’we leyi nga na ku khumbeka loku fanaka na ti vectors to sungula leti tirhaka swin’we.", "Nkarhi i ku leha ka ndlela leyi fambisiweke", "Ku rhurha i ku cinca ka xiyimo.", "Rivilo i mpimo wa ku cinca ka mpfhuka", "Rivilo i mpimo wa ku cinca ka ndzhawu kumbe mpimo wa ku rhurha.", "Ku hatlisa i mpimo wa ku cinca ka rivilo.", "Inertia i nhundzu ya nchumu lowu endlaka leswaku wu lwisana na ku cinca ka xiyimo xa wona xo wisa kumbe ku famba loku fanaka.", "Ndzilo i matimba ya nkoka-misava lawa misava yi ma tirhisaka eka nchumu wihi na wihi lowu nga ehenhla kumbe ekusuhi na wona.", "Matimba ya ntolovelo i matimba yo kongoma lama tirhisiwaka hi xivumbeko eka nchumu lowu xi hlanganaka na wona.", "Matimba ya frictional hikokwalaho ka xivumbeko i matimba lawa ya kanetanaka na ku famba ka nchumu naswona ya tirha ya fambelana na vuandlalo lebyi nchumu wu hlanganaka na byona.", "Static frictional force i matimba lawa ya kanetanaka na mboyamelo wa ku famba ka nchumu lowu nga yimangiki loko wu pimanisiwa na vuandlalo.", "Kinetic frictional force i matimba lawa ya kanetanaka na ku famba ka nchumu lowu fambafambaka loko wu pimanisiwa na vuandlalo.", "Momentum i mbuyelo wa vukulu na rivilo ra nchumu.", "Nawu wa nhlayiso wa linear momentum i total linear momentum ya sisiteme leyi nga yoxe yi tshama yi nga cinci (yi hlayisiwa).", "Impulse i mbuyelo wa matimba ya mbuyelo/net lama tirhaka eka nchumu na nkarhi lowu matimba ya mbuyelo/net ya tirhaka eka nchumu wolowo.", "Ku tlumbana ka elastic i ku tlumbana loku eka kona ku hlayisiwaka momentum na Kinetic energy.", "Ku tlumbana ka inelastic i ku tlumbana loku eka kona ku hlayisiwaka nsusumeto ntsena.", "Nawu wo sungula wa Newton wa ku famba i loko nchumu wu ya emahlweni wu ri eka xiyimo xo wisa kumbe hi rivilo leri fanaka (wu famba hi rivilo leri nga cinciki) handle ka loko wu tirhisiwa hi nete (leyi nga riki zero) kumbe matimba lama humelelaka.", "Nawu wa vumbirhi wa Newton wa ku famba i loko matimba ya mbuyelo/net, ya tirhisiwa eka nchumu wa ntiko, m, wu hatlisa hi tlhelo ra matimba ya nete. Ku hatlisa, a, ku ringana hi ku kongoma na matimba ya nete naswona ku ringana hi ndlela yo hundzuka na ntiko.", "Nawu wa vunharhu wa Newton i loko nchumu wa A wu tirhisa matimba eka nchumu wa B, nchumu wa B hi nkarhi wun’we wu tirhisa na matimba lama kongomisiweke hi ndlela yo hambana ya vukulu byo ringana eka nchumu wa A.", "Nawu wa Newton wa Universal Gravitation i loko xiphemu xin’wana na xin’wana eka vuako hinkwabyo xi koka xiphemu xin’wana na xin’wana hi matimba lawa ya ringanaka hi ku kongoma na vuhumelerisi bya vukulu bya swona naswona hi ndlela yo hambana na xikwere xa mpfhuka exikarhi ka tisenthara ta swona.", "Ntirho lowu endliwaka eka nchumu hi matimba i vuhumelerisi bya ku rhurha na xiphemu xa matimba lama fambelanaka na ku rhurha.", "Work-Energy Theorem i ntirho lowu endliwaka hi mbuyelo/net force eka nchumu lowu ringanaka na ku cinca ka kinetic energy ya nchumu.", "Matimba yo hlayisa i matimba lawa ntirho lowu endliwaka eku fambiseni ka nchumu exikarhi ka tinhla timbirhi wu tiyimeleke hi woxe eka ndlela leyi tekiweke.", "Matimba lama nga riki ya vuhlayiseki i matimba lawa ntirho lowu endliwaka eku fambiseni ka nchumu exikarhi ka tinhla timbirhi wu titshegeke hi ndlela leyi tekiweke.", "Gravitational potential energy i eneji leyi nchumu wu nga na wona hikokwalaho ka xiyimo xa wona loko wu pimanisiwa na ndzhawu ya xikombo.", "Enerji ya kinetic i matimba lawa nchumu wu nga na wona hikwalaho ka ku famba ka nchumu wolowo.", "Eneji ya michini i nhlayo ya eneji ya matimba ya nkoka-misava na matimba ya Kinetic eka ndhawu yo karhi.", "Ku hlayisiwa ka eneji i loko matimba hinkwawo eka sisiteme ya nga tumbuluxiwi kumbe ku herisiwa; ntsena ku hundziseriwa ku suka eka xivumbeko xin’wana ku ya eka xin’wana.", "Ku hlayisiwa ka matimba ya michini i loko ku nga ri na ku lwisana ka moya kumbe matimba wahi na wahi ya le handle, matimba ya michini ya nchumu ya tshama ya ri kona.", "Matimba i mpimo lowu ntirho wu endliwaka ha wona kumbe mpimo lowu eneji yi hundziseriwaka ha wona.", "Ku tirha kahle i mpimo wa matimba ya vuhumelerisi eka matimba yo nghenisa.", "Vuyelo bya Doppler i ku cinca ka mpfumawulo (kumbe mpfumawulo) wa mpfumawulo lowu voniwaka hi muyingiseri hikuva xihlovo xa mpfumawulo na muyingiseri swi na rivilo ro hambana loko swi pimanisiwa na xitirhisiwa xa ku hangalaka ka mpfumawulo.", "Nawu wa Coulomb i loko matimba exikarhi ka tichaji timbirhi ya ringana hi ku kongoma na mbuyelo wa tichaji naswona ya ringana hi ndlela yo hundzuka na mpfhuka exikarhi ka tichaji leti nga na swikwere.", "Nsimu ya gezi i ndhawu ya xibakabaka laha chaji ya gezi yi nga ta kuma matimba. Ndlela ya ndzhawu ya gezi i tlhelo leri chaji ya xikambelo xa positive yinga famba ha yona loko yi vekiwa eka ndzhawu yaleyo.", "Ku hambana loku nga kona i ntirho lowu endliwaka hi unit positive charge.", "Emf i matimba hinkwawo lawa ya nyikiwaka hi coulomb ya charge hi sele.", "Current i mpimo wa ku khuluka ka xibalo.", "Ku lwisana i ku kanetana ka nchumu eka ku khuluka ka gezi.", "Nawu wa Ohm i loko current leyi hundzaka eka conductor yi ringana hiku kongoma na ku hambana ka potential eka conductor eka mahiselo lawa yanga cinciki.", "Nhlayo ya rms ya voltage/current yo cincana i loko nhlayo ya rms ya AC yi ri ku hambana ka DC potential/current leyi hangalasaka nhlayo ya eneji leyi fanaka na ya AC.", "Diode i xiphemu lexi pfumelelaka ntsena current ku khuluka eka tlhelo rin’we.", "Magnetic flux linkage i mbuyelo wa nhlayo ya ku jika eka coil na flux leyi hundzaka eka coil.", "Nawu wa Faraday wa electromagentic induction: Emf leyi hlohleteriwaka yi fambelana hiku kongoma na mpimo wa ku cinca ka magnetic flux (flux linkage).", "Nawu wa Lenz: Current leyi hlohloteriwaka yi khuluka hi ndlela yo karhi leswaku yi veka matimba ya maginete leswaku yi kanetana ni ku cinca ka ku khuluka ka maginete.", "Photoelectric effect i endlelo leri humelelaka loko ku vonakala ku voninga eka nsimbi naswona ti electrons ti humesiwa.", "Threshold frequency i frequency yale hansi ya incident radiation laha ti electrons tingata humesiwa kusuka eka nsimbi yokarhi.", "Ntirho wa ntirho i nhlayo ya le hansi ya matimba lama lavekaka ku humesa elektroni ku suka ehenhla ka nsimbi.", "Spectrum ya atomic emission yi vumbiwa loko ti frequency tokarhi ta electromagnetic radiation ti humesiwa hikokwalaho ka ti electrons ta athomo leti endlaka ku cinca kusuka eka xiyimo xa eneji yale henhla kuya eka xiyimo xa eneji yale hansi.", "Molar mass i ntiko hi tigiramu ta mole yin’we ya nchumu wolowo.", "Solute i nchumu lowu khulukaka eka solution.", "Solvent i nchumu lowu nchumu wun’wana wu khulukaka eka wona, wu vumba solution.", "Ku hlanganisiwa i nhlayo ya ti moles ta solute hi unit volume ya solution.", "Nkatsakanyo wa volume ya standard i solution ya nhlayo leyi tivekaka.", "Electronegativity i mpimo wa mboyamelo wa athomo yo koka rinoko ra mpatswa wa tielektroni lowu hlanganisaka.", "Covalent bond i ku avelana ka kwalomu ka mpatswa wun’we wa tielektroni hi tiatomo timbirhi.", "Xihlanganisi xa non-polar covalent i ku avelana loku ringanaka ka tielektroni.", "Polar covalent bond i ku avelana loku nga ringaniki ka tielektroni leswi yisaka eka ku vumbiwa ka dipole.", "Ionic bond i ku hundziseriwa ka ti electrons na ku koka ka electrostatic loku landzelaka.", "Ku hlanganisiwa ka nsimbi swile xikarhi ka kernel ya kahle na lwandle ra ti electrons letinga delocalised.", "Intramolecular bond i bond leyi humelelaka exikarhi ka ti athomo endzeni ka ti molecules.", "Matimba ya le xikarhi ka timolekhuli i matimba lama tsaneke yo koka exikarhi ka timolekhuli kumbe exikarhi ka tiatomo ta tigasi ta xiyimo xa le henhla.", "Matimba ya dipole-dipole i matimba exikarhi ka ti molecule timbirhi ta polar.", "", "", "Matimba ya dipole lama hlohloteriweke kumbe matimba ya London i matimba exikarhi ka timolekhuli leti nga riki ta polar.", "Ku hlanganisiwa ka hayidirojeni i matimba exikarhi ka timolekhuli leti eka tona hayidirojeni yi hlanganisiwaka hi covalent na nitrogen, oxygen kumbe flourine.", "Boiling point i mahiselo lawa ntshikelelo wa vapor wa nchumu wu ringanaka na ntshikelelo wa xibakabaka.", "Melting point i mahiselo lawa swiphemu swa solid na liquid swa nchumu swinga eka equilibrium.", "Ntshikelelo wa vapor i ntshikelelo lowu endliwaka hi vapor eka equilibrium na mati ya yona eka sisiteme leyi pfalekeke.", "Timolekhuli ta organic i timolekhuli leti nga na tiatomo ta khaboni.", "Hayidirokhaboni i nkatsakanyo lowu nga ni tiatomo ta khaboni ni hayidirojeni ntsena.", "Nxaxamelo wa homologous i nxaxamelo wa swihlanganisi leswi fanaka leswingana ntlawa wun’we wa ntirho naswona swina fomula yofana yo angarhela, laha xirho xin’wana na xin’wana xihambanaka na lexi hundzeke hi yuniti yin’we ya CH2.", "Structural isomers i ti compounds letingana ti molecular formula yin’we kambe ti structural formulae to hambana.", "Ntlawa lowu tirhaka i athomo kumbe ntlawa wa tiatomo leti vumbaka ntsindza wa ntirho wa tikhemikhali eka molekhuli.", "Nkatsakanyo lowu taleke i nkatsakanyo lowu eka wona swihlanganisi hinkwaswo exikarhi ka tiatomo ta khaboni swi nga swihlanganisi swin’we.", "Nkatsakanyo lowu nga tatiwangiki i nkatsakanyo lowu eka wona ku nga na kwalomu ka vuxaka byin’we bya kambirhi na/kumbe kanharhu exikarhi ka tiatomo ta khaboni.", "Macromolecule i molekhuli leyi nga ni nhlayo leyikulu ya tiatomo.", "Ti monomers i ti molecules letintsongo ta organic letinga hlanganisiwaka hi covalent hi ndlela yo phindha-phindha.", "Polymer i molecule leyikulu leyi vumbiwaka hi ti monomer units letintsongo leti hlanganisiweke hi covalent hi xivumbeko lexi phindha-phindhiwaka.", "Polymerisation i ku cinca cinca ka tikhemikhali laha ti molecules ta monomer ti hlanganaka ku endla polymer.", "Addition polymer i polymer leyi vumbiwaka loko ti monomers (hi ntolovelo letingana double bond) ti hlangana hiku tirhisa addition reaction.", "Condensation polymer i polymer leyi vumbiwaka hi ti monomers timbirhi letingana mintlawa yohambana hambana ya ntirho leyi hlanganisaka eka condensation reaction laha molecule leyintsongo hi ntolovelo mati, ya lahlekeke.", "Ku hisa ka reaction i ku cinca ka net ya ti khemikhali leti nga na matimba ya sisiteme.", "Exothermic reactions i ti reactions leti hundziselaka matimba lawa yanga kona eka eneji yo hisa.", "Ti reactions ta endothermic i ti reactions leti hundziselaka matimba ya mahiselo kuya eka matimba lawa yanga kona.", "Reaction rate i ku cinca ka concentration hi unit time ya reactant kumbe product.", "Activation energy i eneji yale hansi leyi lavekaka kuva kusunguriwa ku cinca cinca ka ti khemikhali.", "Activated complex i xiyimo xa ku cinca lexi nga tshamisekangiki exikarhi ka ti reactants na swihumelerisiwa.", "Catalyst i nchumu lowu engetelaka rivilo ra reaction kambe wu tshama wunga cinci emakumu ka reaction.", "Mbuyelo i mpimo wa mpimo wa reaction, hi xitalo wu pimiwa hiku pimanisa nhlayo ya xiendliwa na nhlayo ya xiendliwa lexi kotekaka.", "Nsinya wa nawu wa Le Chatelier hileswaku ‘Loko ntshikelelo wale handle (ku cinca ka ntshikelelo, mahiselo kumbe nhlayo) ku tirhisiwa eka sisiteme eka ku ringanisela ka tikhemikhali, ndzhawu ya ku ringanisela yita cinca hindlela leyi yinga lwisana na ntshikelelo’.", "Endlelo leri pfulekeke i endlelo leri tshamaka ri ri karhi ri tirhisana na ndhawu leyi ri rhendzeleke", "A closed systems yi hambanisiwile na ndzhawu leyi yi rhendzeleke.", "Chemical equilibrium i dynamic equilibrium loko mpimo wa forward reaction wu ringana na mpimo wa reverse reaction.", "Tiyori ya Arrhenius: Asidi i nchumu lowu humesaka ti hydrogen ions/hydronium ions loko wu n’oka ematini.", "Tiyori ya Arrhenius: Base i nchumu lowu humesaka ti hydroxide ions loko wu n’oka ematini.", "Tiyori ya Lowry-Bronsted: Asidi i munyiki wa tiprotoni.", "Tiyori ya Lowry-Bronsted: Base i xiamukeri xa proton.", "Acid yo tiya i acid leyi ioniseka kwalomu ka hinkwayo eka solution ya mati.", "Base yo tiya i base leyi hambanisaka kwalomu ka hinkwayo eka solution ya mati.", "Acid leyi tsaneke i acid leyi ioniseka ntsena hi xiphemu eka solution ya mati.", "Base leyi tsaneke i base leyi hambanisaka ntsena hi xiphemu eka solution ya mati.", "Munyu i nchumu lowu eka wona hayidirojeni ya asidi yi siviwe hi cation.", "Neutralization i ndzhawu leyi acid na base swinga endla reaction hikokwalaho kungari na yin’we leyinga tlula mpimo.", "Hydrolysis ya munyu i ku cinca cinca na mati laha mati hi woxe ya bolaka.", "Ti acid/bases leti hlanganisiweke tina nhlayo leyikulu (nhlayo ya ti moles) ya acid/base kuya hi volume ya mati.", "Ti dilute acids/bases tina nhlayo yintsongo (nhlayo ya ti moles) ya ti acids/bases kuya hi volume ya mati.", "Kw i equilibrium constant ya ionization ya mati, kumbe ionic product ya mati kumbe ionization constant ya mati.", "Nhlayo ya equivalence ya titration i ndzhawu leyi acid yinga endla hiku hetiseka na base.", "Ndzhawu yo hetelela ya titration i ndzhawu leyi xikombiso xi cincaka muhlovo.", "Hydrolysis i reaction laha munyu wu endlaka reaction na mati.", "Oxidation i ku lahlekeriwa hi tielektroni.", "Ku hunguta i ku vuyeriwa ka tielektroni.", "Xiaki lexi oxidisaka i nchumu lowu amukelaka tielektroni.", "Xiaki lexi hungutaka i nchumu lowu nyikelaka hi tielektroni.", "Anode i electrode laha oxidation yi humelelaka kona.", "Cathode i electrode laha kuhunguteka ku endlekaka kona.", "Sele ya Galvanic i sele leyi eka yona matimba ya tikhemikhali ya hundzuriwaka ya va matimba ya gezi.", "Sele ya Electrolytic i sele leyi eka yona matimba ya gezi ya hundzuriwaka ku va matimba ya tikhemikhali.", "Electrolyte i solution/liquid/dissolved substance leyi fambisaka gezi hiku tirhisa ti movement ions.", "Electrolysis i endlelo ra tikhemikhali leri eka rona matimba ya gezi ya hundzuriwaka kuva matimba ya tikhemikhali kumbe ku tirhisiwa ka matimba ya gezi ku humesa ku cinca ka tikhemikhali.", "Eutrophication i endlelo leri hi rona ecosystem e.g. nambu kumbe damu, ri fuwa hi swakudya swa swimilani leswinga riki swa ntumbuluko leswi endlaka leswaku swimilani swikula ngopfu."];

      let savedFacts = JSON.parse(localStorage.getItem('savedFacts')) || [];
      var randomNumber = Math.floor(Math.random() * facts.length);

      nextBtn.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * facts.length);
        factText.textContent = facts[randomNumber];
      });

      saveBtn.addEventListener('click', () => {
        savedFacts.push(facts[randomNumber]);
        localStorage.setItem('savedFacts', JSON.stringify(savedFacts));
        
      });

      inventoryBtn.addEventListener('click', () => {
        factWrapper.classList.add('hide');
        factWrapper1.classList.remove('hide');
        
        if(savedFacts == ""){
          savedDefinitions.textContent = "No data currently saved."
        } else {
            savedDefinitions.textContent = "";
            for(let i = 0; i < savedFacts.length; i++) {
              savedDefinitions.innerHTML += `<li>${savedFacts[i]}</li>`;
            }
          }
      });

      restartBtn.addEventListener('click', () => {
        localStorage.clear();
        savedFacts = [];
        for(let i = 0; i < savedFacts.length; i++) {
          savedDefinitions.innerHTML += `<li>${savedFacts[i]}</li>`;
        }
      });
      let voice = new SpeechSynthesisUtterance();

      speakBtn.addEventListener('click', () => {
        voice.text = factText.textContent;
        window.speechSynthesis.speak(voice);
        
      });

      exampleBtn.addEventListener('click', () => {
        factWrapper.classList.add('hide');
        factWrapper1.classList.add('hide');
        factWrapper2.classList.remove('hide');
      });

      tswanaCheck.addEventListener('click', () => {
        factWrapper2.classList.add('hide');
        factWrapper1.classList.add('hide');
        factWrapper.classList.remove('hide');
        if(factText.textContent === facts[0]){
          factText.textContent = tswanaFacts[0];
        } else if(factText.textContent === facts[1]){
          factText.textContent = tswanaFacts[1];
        } else if(factText.textContent === facts[2]){
          factText.textContent = tswanaFacts[2];
        } else if(factText.textContent === facts[3]){
          factText.textContent = tswanaFacts[3];
        } else if(factText.textContent === facts[4]){
          factText.textContent = tswanaFacts[4];
        } else if(factText.textContent === facts[5]){
          factText.textContent = tswanaFacts[5];
        } else if(factText.textContent === facts[6]){
          factText.textContent = tswanaFacts[6];
        } else if(factText.textContent === facts[7]){
          factText.textContent = tswanaFacts[7];
        } else if(factText.textContent === facts[8]){
          factText.textContent = tswanaFacts[8];
        } else if(factText.textContent === facts[9]){
          factText.textContent = tswanaFacts[9];
        } else if(factText.textContent === facts[10]){
          factText.textContent = tswanaFacts[10];
        } else if(factText.textContent === facts[11]){
          factText.textContent = tswanaFacts[11];
        } else if(factText.textContent === facts[12]){
          factText.textContent = tswanaFacts[12];
        } else if(factText.textContent === facts[13]){
          factText.textContent = tswanaFacts[13];
        } else if(factText.textContent === facts[14]){
          factText.textContent = tswanaFacts[14];
        } else if(factText.textContent === facts[15]){
          factText.textContent = tswanaFacts[15];
        } else if(factText.textContent === facts[16]){
          factText.textContent = tswanaFacts[16];
        } else if(factText.textContent === facts[17]){
          factText.textContent = tswanaFacts[17];
        } else if(factText.textContent === facts[18]){
          factText.textContent = tswanaFacts[18];
        } else if(factText.textContent === facts[19]){
          factText.textContent = tswanaFacts[19];
        } else if(factText.textContent === facts[20]){
          factText.textContent = tswanaFacts[20];
        } else if(factText.textContent === facts[21]){
          factText.textContent = tswanaFacts[21];
        } else if(factText.textContent === facts[22]){
          factText.textContent = tswanaFacts[22];
        } else if(factText.textContent === facts[23]){
          factText.textContent = tswanaFacts[23];
        } else if(factText.textContent === facts[24]){
          factText.textContent = tswanaFacts[24];
        } else if(factText.textContent === facts[25]){
          factText.textContent = tswanaFacts[25];
        } else if(factText.textContent === facts[26]){
          factText.textContent = tswanaFacts[26];
        } else if(factText.textContent === facts[27]){
          factText.textContent = tswanaFacts[27];
        } else if(factText.textContent === facts[28]){
          factText.textContent = tswanaFacts[28];
        } else if(factText.textContent === facts[29]){
          factText.textContent = tswanaFacts[29];
        } else if(factText.textContent === facts[30]){
          factText.textContent = tswanaFacts[30];
        } else if(factText.textContent === facts[31]){
          factText.textContent = tswanaFacts[31];
        } else if(factText.textContent === facts[32]){
          factText.textContent = tswanaFacts[32];
        } else if(factText.textContent === facts[33]){
          factText.textContent = tswanaFacts[33];
        } else if(factText.textContent === facts[34]){
          factText.textContent = tswanaFacts[34];
        } else if(factText.textContent === facts[35]){
          factText.textContent = tswanaFacts[35];
        } else if(factText.textContent === facts[36]){
          factText.textContent = tswanaFacts[36];
        } else if(factText.textContent === facts[37]){
          factText.textContent = tswanaFacts[37];
        } else if(factText.textContent === facts[38]){
          factText.textContent = tswanaFacts[38];
        } else if(factText.textContent === facts[39]){
          factText.textContent = tswanaFacts[39];
        } else if(factText.textContent === facts[40]){
          factText.textContent = tswanaFacts[40];
        } else if(factText.textContent === facts[41]){
          factText.textContent = tswanaFacts[41];
        } else if(factText.textContent === facts[42]){
          factText.textContent = tswanaFacts[42];
        } else if(factText.textContent === facts[43]){
          factText.textContent = tswanaFacts[43];
        } else if(factText.textContent === facts[44]){
          factText.textContent = tswanaFacts[44];
        } else if(factText.textContent === facts[45]){
          factText.textContent = tswanaFacts[45];
        } else if(factText.textContent === facts[46]){
          factText.textContent = tswanaFacts[46];
        } else if(factText.textContent === facts[47]){
          factText.textContent = tswanaFacts[47];
        } else if(factText.textContent === facts[48]){
          factText.textContent = tswanaFacts[48];
        } else if(factText.textContent === facts[49]){
          factText.textContent = tswanaFacts[49];
        } else if(factText.textContent === facts[50]){
          factText.textContent = tswanaFacts[50];
        } else if(factText.textContent === facts[51]){
          factText.textContent = tswanaFacts[51];
        } else if(factText.textContent === facts[52]){
          factText.textContent = tswanaFacts[52];
        } else if(factText.textContent === facts[53]){
          factText.textContent = tswanaFacts[53];
        } else if(factText.textContent === facts[54]){
          factText.textContent = tswanaFacts[54];
        } else if(factText.textContent === facts[55]){
          factText.textContent = tswanaFacts[55];
        } else if(factText.textContent === facts[56]){
          factText.textContent = tswanaFacts[56];
        } else if(factText.textContent === facts[57]){
          factText.textContent = tswanaFacts[57];
        } else if(factText.textContent === facts[58]){
          factText.textContent = tswanaFacts[58];
        } else if(factText.textContent === facts[59]){
          factText.textContent = tswanaFacts[59];
        } else if(factText.textContent === facts[60]){
          factText.textContent = tswanaFacts[60];
        } else if(factText.textContent === facts[61]){
          factText.textContent = tswanaFacts[61];
        } else if(factText.textContent === facts[62]){
          factText.textContent = tswanaFacts[62];
        } else if(factText.textContent === facts[63]){
          factText.textContent = tswanaFacts[63];
        } else if(factText.textContent === facts[64]){
          factText.textContent = tswanaFacts[64];
        } else if(factText.textContent === facts[65]){
          factText.textContent = tswanaFacts[65];
        } else if(factText.textContent === facts[66]){
          factText.textContent = tswanaFacts[66];
        } else if(factText.textContent === facts[67]){
          factText.textContent = tswanaFacts[67];
        } else if(factText.textContent === facts[68]){
          factText.textContent = tswanaFacts[68];
        } else if(factText.textContent === facts[69]){
          factText.textContent = tswanaFacts[69];
        } else if(factText.textContent === facts[70]){
          factText.textContent = tswanaFacts[70];
        } else if(factText.textContent === facts[71]){
          factText.textContent = tswanaFacts[71];
        } else if(factText.textContent === facts[72]){
          factText.textContent = tswanaFacts[72];
        } else if(factText.textContent === facts[73]){
          factText.textContent = tswanaFacts[73];
        } else if(factText.textContent === facts[74]){
          factText.textContent = tswanaFacts[74];
        } else if(factText.textContent === facts[75]){
          factText.textContent = tswanaFacts[75];
        } else if(factText.textContent === facts[76]){
          factText.textContent = tswanaFacts[76];
        } else if(factText.textContent === facts[77]){
          factText.textContent = tswanaFacts[77];
        } else if(factText.textContent === facts[78]){
          factText.textContent = tswanaFacts[78];
        } else if(factText.textContent === facts[79]){
          factText.textContent = tswanaFacts[79];
        } else if(factText.textContent === facts[80]){
          factText.textContent = tswanaFacts[80];
        } else if(factText.textContent === facts[81]){
          factText.textContent = tswanaFacts[81];
        } else if(factText.textContent === facts[82]){
          factText.textContent = tswanaFacts[82];
        } else if(factText.textContent === facts[83]){
          factText.textContent = tswanaFacts[83];
        } else if(factText.textContent === facts[84]){
          factText.textContent = tswanaFacts[84];
        } else if(factText.textContent === facts[85]){
          factText.textContent = tswanaFacts[85];
        } else if(factText.textContent === facts[86]){
          factText.textContent = tswanaFacts[86];
        } else if(factText.textContent === facts[87]){
          factText.textContent = tswanaFacts[87];
        } else if(factText.textContent === facts[88]){
          factText.textContent = tswanaFacts[88];
        } else if(factText.textContent === facts[89]){
          factText.textContent = tswanaFacts[89];
        } else if(factText.textContent === facts[90]){
          factText.textContent = tswanaFacts[90];
        } else if(factText.textContent === facts[91]){
          factText.textContent = tswanaFacts[91];
        } else if(factText.textContent === facts[92]){
          factText.textContent = tswanaFacts[92];
        } else if(factText.textContent === facts[93]){
          factText.textContent = tswanaFacts[93];
        } else if(factText.textContent === facts[94]){
          factText.textContent = tswanaFacts[94];
        } else if(factText.textContent === facts[95]){
          factText.textContent = tswanaFacts[95];
        } else if(factText.textContent === facts[96]){
          factText.textContent = tswanaFacts[96];
        } else if(factText.textContent === facts[97]){
          factText.textContent = tswanaFacts[97];
        } else if(factText.textContent === facts[98]){
          factText.textContent = tswanaFacts[98];
        } else if(factText.textContent === facts[99]){
          factText.textContent = tswanaFacts[99];
        } else if(factText.textContent === facts[100]){
          factText.textContent = tswanaFacts[100];
        } else if(factText.textContent === facts[101]){
          factText.textContent = tswanaFacts[101];
        } else if(factText.textContent === facts[102]){
          factText.textContent = tswanaFacts[102];
        } else if(factText.textContent === facts[103]){
          factText.textContent = tswanaFacts[103];
        } else if(factText.textContent === facts[104]){
          factText.textContent = tswanaFacts[104];
        } else if(factText.textContent === facts[105]){
          factText.textContent = tswanaFacts[105];
        } else if(factText.textContent === facts[106]){
          factText.textContent = tswanaFacts[106];
        } else if(factText.textContent === facts[107]){
          factText.textContent = tswanaFacts[107];
        } else if(factText.textContent === facts[108]){
          factText.textContent = tswanaFacts[108];
        } else if(factText.textContent === facts[109]){
          factText.textContent = tswanaFacts[109];
        } else if(factText.textContent === facts[110]){
          factText.textContent = tswanaFacts[110];
        } else if(factText.textContent === facts[111]){
          factText.textContent = tswanaFacts[111];
        } else if(factText.textContent === facts[112]){
          factText.textContent = tswanaFacts[112];
        } else if(factText.textContent === facts[113]){
          factText.textContent = tswanaFacts[113];
        } else if(factText.textContent === facts[114]){
          factText.textContent = tswanaFacts[114];
        } else if(factText.textContent === facts[115]){
          factText.textContent = tswanaFacts[115];
        } else if(factText.textContent === facts[116]){
          factText.textContent = tswanaFacts[116];
        } else if(factText.textContent === facts[117]){
          factText.textContent = tswanaFacts[117];
        } else if(factText.textContent === facts[118]){
          factText.textContent = tswanaFacts[118];
        } else if(factText.textContent === facts[119]){
          factText.textContent = tswanaFacts[119];
        } else if(factText.textContent === facts[120]){
          factText.textContent = tswanaFacts[120];
        } else if(factText.textContent === facts[121]){
          factText.textContent = tswanaFacts[121];
        } else if(factText.textContent === facts[122]){
          factText.textContent = tswanaFacts[122];
        } else if(factText.textContent === facts[123]){
          factText.textContent = tswanaFacts[123];
        } else if(factText.textContent === facts[124]){
          factText.textContent = tswanaFacts[124];
        } else if(factText.textContent === facts[125]){
          factText.textContent = tswanaFacts[125];
        };
      });

      zuluCheck.addEventListener('click', () => {
        factWrapper2.classList.add('hide');
        factWrapper1.classList.add('hide');
        factWrapper.classList.remove('hide');
        if(factText.textContent === facts[0]){
          factText.textContent = zuluFacts[0];
        } else if(factText.textContent === facts[1]){
          factText.textContent = zuluFacts[1];
        } else if(factText.textContent === facts[2]){
          factText.textContent = zuluFacts[2];
        } else if(factText.textContent === facts[3]){
          factText.textContent = zuluFacts[3];
        } else if(factText.textContent === facts[4]){
          factText.textContent = zuluFacts[4];
        } else if(factText.textContent === facts[5]){
          factText.textContent = zuluFacts[5];
        } else if(factText.textContent === facts[6]){
          factText.textContent = zuluFacts[6];
        } else if(factText.textContent === facts[7]){
          factText.textContent = zuluFacts[7];
        } else if(factText.textContent === facts[8]){
          factText.textContent = zuluFacts[8];
        } else if(factText.textContent === facts[9]){
          factText.textContent = zuluFacts[9];
        } else if(factText.textContent === facts[10]){
          factText.textContent = zuluFacts[10];
        } else if(factText.textContent === facts[11]){
          factText.textContent = zuluFacts[11];
        } else if(factText.textContent === facts[12]){
          factText.textContent = zuluFacts[12];
        } else if(factText.textContent === facts[13]){
          factText.textContent = zuluFacts[13];
        } else if(factText.textContent === facts[14]){
          factText.textContent = zuluFacts[14];
        } else if(factText.textContent === facts[15]){
          factText.textContent = zuluFacts[15];
        } else if(factText.textContent === facts[16]){
          factText.textContent = zuluFacts[16];
        } else if(factText.textContent === facts[17]){
          factText.textContent = zuluFacts[17];
        } else if(factText.textContent === facts[18]){
          factText.textContent = zuluFacts[18];
        } else if(factText.textContent === facts[19]){
          factText.textContent = zuluFacts[19];
        } else if(factText.textContent === facts[20]){
          factText.textContent = zuluFacts[20];
        } else if(factText.textContent === facts[21]){
          factText.textContent = zuluFacts[21];
        } else if(factText.textContent === facts[22]){
          factText.textContent = zuluFacts[22];
        } else if(factText.textContent === facts[23]){
          factText.textContent = zuluFacts[23];
        } else if(factText.textContent === facts[24]){
          factText.textContent = zuluFacts[24];
        } else if(factText.textContent === facts[25]){
          factText.textContent = zuluFacts[25];
        } else if(factText.textContent === facts[26]){
          factText.textContent = zuluFacts[26];
        } else if(factText.textContent === facts[27]){
          factText.textContent = zuluFacts[27];
        } else if(factText.textContent === facts[28]){
          factText.textContent = zuluFacts[28];
        } else if(factText.textContent === facts[29]){
          factText.textContent = zuluFacts[29];
        } else if(factText.textContent === facts[30]){
          factText.textContent = zuluFacts[30];
        } else if(factText.textContent === facts[31]){
          factText.textContent = zuluFacts[31];
        } else if(factText.textContent === facts[32]){
          factText.textContent = zuluFacts[32];
        } else if(factText.textContent === facts[33]){
          factText.textContent = zuluFacts[33];
        } else if(factText.textContent === facts[34]){
          factText.textContent = zuluFacts[34];
        } else if(factText.textContent === facts[35]){
          factText.textContent = zuluFacts[35];
        } else if(factText.textContent === facts[36]){
          factText.textContent = zuluFacts[36];
        } else if(factText.textContent === facts[37]){
          factText.textContent = zuluFacts[37];
        } else if(factText.textContent === facts[38]){
          factText.textContent = zuluFacts[38];
        } else if(factText.textContent === facts[39]){
          factText.textContent = zuluFacts[39];
        } else if(factText.textContent === facts[40]){
          factText.textContent = zuluFacts[40];
        } else if(factText.textContent === facts[41]){
          factText.textContent = zuluFacts[41];
        } else if(factText.textContent === facts[42]){
          factText.textContent = zuluFacts[42];
        } else if(factText.textContent === facts[43]){
          factText.textContent = zuluFacts[43];
        } else if(factText.textContent === facts[44]){
          factText.textContent = zuluFacts[44];
        } else if(factText.textContent === facts[45]){
          factText.textContent = zuluFacts[45];
        } else if(factText.textContent === facts[46]){
          factText.textContent = zuluFacts[46];
        } else if(factText.textContent === facts[47]){
          factText.textContent = zuluFacts[47];
        } else if(factText.textContent === facts[48]){
          factText.textContent = zuluFacts[48];
        } else if(factText.textContent === facts[49]){
          factText.textContent = zuluFacts[49];
        } else if(factText.textContent === facts[50]){
          factText.textContent = zuluFacts[50];
        } else if(factText.textContent === facts[51]){
          factText.textContent = zuluFacts[51];
        } else if(factText.textContent === facts[52]){
          factText.textContent = zuluFacts[52];
        } else if(factText.textContent === facts[53]){
          factText.textContent = zuluFacts[53];
        } else if(factText.textContent === facts[54]){
          factText.textContent = zuluFacts[54];
        } else if(factText.textContent === facts[55]){
          factText.textContent = zuluFacts[55];
        } else if(factText.textContent === facts[56]){
          factText.textContent = zuluFacts[56];
        } else if(factText.textContent === facts[57]){
          factText.textContent = zuluFacts[57];
        } else if(factText.textContent === facts[58]){
          factText.textContent = zuluFacts[58];
        } else if(factText.textContent === facts[59]){
          factText.textContent = zuluFacts[59];
        } else if(factText.textContent === facts[60]){
          factText.textContent = zuluFacts[60];
        } else if(factText.textContent === facts[61]){
          factText.textContent = zuluFacts[61];
        } else if(factText.textContent === facts[62]){
          factText.textContent = zuluFacts[62];
        } else if(factText.textContent === facts[63]){
          factText.textContent = zuluFacts[63];
        } else if(factText.textContent === facts[64]){
          factText.textContent = zuluFacts[64];
        } else if(factText.textContent === facts[65]){
          factText.textContent = zuluFacts[65];
        } else if(factText.textContent === facts[66]){
          factText.textContent = zuluFacts[66];
        } else if(factText.textContent === facts[67]){
          factText.textContent = zuluFacts[67];
        } else if(factText.textContent === facts[68]){
          factText.textContent = zuluFacts[68];
        } else if(factText.textContent === facts[69]){
          factText.textContent = zuluFacts[69];
        } else if(factText.textContent === facts[70]){
          factText.textContent = zuluFacts[70];
        } else if(factText.textContent === facts[71]){
          factText.textContent = zuluFacts[71];
        } else if(factText.textContent === facts[72]){
          factText.textContent = zuluFacts[72];
        } else if(factText.textContent === facts[73]){
          factText.textContent = zuluFacts[73];
        } else if(factText.textContent === facts[74]){
          factText.textContent = zuluFacts[74];
        } else if(factText.textContent === facts[75]){
          factText.textContent = zuluFacts[75];
        } else if(factText.textContent === facts[76]){
          factText.textContent = zuluFacts[76];
        } else if(factText.textContent === facts[77]){
          factText.textContent = zuluFacts[77];
        } else if(factText.textContent === facts[78]){
          factText.textContent = zuluFacts[78];
        } else if(factText.textContent === facts[79]){
          factText.textContent = zuluFacts[79];
        } else if(factText.textContent === facts[80]){
          factText.textContent = zuluFacts[80];
        } else if(factText.textContent === facts[81]){
          factText.textContent = zuluFacts[81];
        } else if(factText.textContent === facts[82]){
          factText.textContent = zuluFacts[82];
        } else if(factText.textContent === facts[83]){
          factText.textContent = zuluFacts[83];
        } else if(factText.textContent === facts[84]){
          factText.textContent = zuluFacts[84];
        } else if(factText.textContent === facts[85]){
          factText.textContent = zuluFacts[85];
        } else if(factText.textContent === facts[86]){
          factText.textContent = zuluFacts[86];
        } else if(factText.textContent === facts[87]){
          factText.textContent = zuluFacts[87];
        } else if(factText.textContent === facts[88]){
          factText.textContent = zuluFacts[88];
        } else if(factText.textContent === facts[89]){
          factText.textContent = zuluFacts[89];
        } else if(factText.textContent === facts[90]){
          factText.textContent = zuluFacts[90];
        } else if(factText.textContent === facts[91]){
          factText.textContent = zuluFacts[91];
        } else if(factText.textContent === facts[92]){
          factText.textContent = zuluFacts[92];
        } else if(factText.textContent === facts[93]){
          factText.textContent = zuluFacts[93];
        } else if(factText.textContent === facts[94]){
          factText.textContent = zuluFacts[94];
        } else if(factText.textContent === facts[95]){
          factText.textContent = zuluFacts[95];
        } else if(factText.textContent === facts[96]){
          factText.textContent = zuluFacts[96];
        } else if(factText.textContent === facts[97]){
          factText.textContent = zuluFacts[97];
        } else if(factText.textContent === facts[98]){
          factText.textContent = zuluFacts[98];
        } else if(factText.textContent === facts[99]){
          factText.textContent = zuluFacts[99];
        } else if(factText.textContent === facts[100]){
          factText.textContent = zuluFacts[100];
        } else if(factText.textContent === facts[101]){
          factText.textContent = zuluFacts[101];
        } else if(factText.textContent === facts[102]){
          factText.textContent = zuluFacts[102];
        } else if(factText.textContent === facts[103]){
          factText.textContent = zuluFacts[103];
        } else if(factText.textContent === facts[104]){
          factText.textContent = zuluFacts[104];
        } else if(factText.textContent === facts[105]){
          factText.textContent = zuluFacts[105];
        } else if(factText.textContent === facts[106]){
          factText.textContent = zuluFacts[106];
        } else if(factText.textContent === facts[107]){
          factText.textContent = zuluFacts[107];
        } else if(factText.textContent === facts[108]){
          factText.textContent = zuluFacts[108];
        } else if(factText.textContent === facts[109]){
          factText.textContent = zuluFacts[109];
        } else if(factText.textContent === facts[110]){
          factText.textContent = zuluFacts[110];
        } else if(factText.textContent === facts[111]){
          factText.textContent = zuluFacts[111];
        } else if(factText.textContent === facts[112]){
          factText.textContent = zuluFacts[112];
        } else if(factText.textContent === facts[113]){
          factText.textContent = zuluFacts[113];
        } else if(factText.textContent === facts[114]){
          factText.textContent = zuluFacts[114];
        } else if(factText.textContent === facts[115]){
          factText.textContent = zuluFacts[115];
        } else if(factText.textContent === facts[116]){
          factText.textContent = zuluFacts[116];
        } else if(factText.textContent === facts[117]){
          factText.textContent = zuluFacts[117];
        } else if(factText.textContent === facts[118]){
          factText.textContent = zuluFacts[118];
        } else if(factText.textContent === facts[119]){
          factText.textContent = zuluFacts[119];
        } else if(factText.textContent === facts[120]){
          factText.textContent = zuluFacts[120];
        } else if(factText.textContent === facts[121]){
          factText.textContent = zuluFacts[121];
        } else if(factText.textContent === facts[122]){
          factText.textContent = zuluFacts[122];
        } else if(factText.textContent === facts[123]){
          factText.textContent = zuluFacts[123];
        } else if(factText.textContent === facts[124]){
          factText.textContent = zuluFacts[124];
        } else if(factText.textContent === facts[125]){
          factText.textContent = zuluFacts[125];
        };
      });

      tsongaCheck.addEventListener('click', () => {
        factWrapper2.classList.add('hide');
        factWrapper1.classList.add('hide');
        factWrapper.classList.remove('hide');
        if(factText.textContent === facts[0]){
          factText.textContent = tsongaFacts[0];
        } else if(factText.textContent === facts[1]){
          factText.textContent = tsongaFacts[1];
        } else if(factText.textContent === facts[2]){
          factText.textContent = tsongaFacts[2];
        } else if(factText.textContent === facts[3]){
          factText.textContent = tsongaFacts[3];
        } else if(factText.textContent === facts[4]){
          factText.textContent = tsongaFacts[4];
        } else if(factText.textContent === facts[5]){
          factText.textContent = tsongaFacts[5];
        } else if(factText.textContent === facts[6]){
          factText.textContent = tsongaFacts[6];
        } else if(factText.textContent === facts[7]){
          factText.textContent = tsongaFacts[7];
        } else if(factText.textContent === facts[8]){
          factText.textContent = tsongaFacts[8];
        } else if(factText.textContent === facts[9]){
          factText.textContent = tsongaFacts[9];
        } else if(factText.textContent === facts[10]){
          factText.textContent = tsongaFacts[10];
        } else if(factText.textContent === facts[11]){
          factText.textContent = tsongaFacts[11];
        } else if(factText.textContent === facts[12]){
          factText.textContent = tsongaFacts[12];
        } else if(factText.textContent === facts[13]){
          factText.textContent = tsongaFacts[13];
        } else if(factText.textContent === facts[14]){
          factText.textContent = tsongaFacts[14];
        } else if(factText.textContent === facts[15]){
          factText.textContent = tsongaFacts[15];
        } else if(factText.textContent === facts[16]){
          factText.textContent = tsongaFacts[16];
        } else if(factText.textContent === facts[17]){
          factText.textContent = tsongaFacts[17];
        } else if(factText.textContent === facts[18]){
          factText.textContent = tsongaFacts[18];
        } else if(factText.textContent === facts[19]){
          factText.textContent = tsongaFacts[19];
        } else if(factText.textContent === facts[20]){
          factText.textContent = tsongaFacts[20];
        } else if(factText.textContent === facts[21]){
          factText.textContent = tsongaFacts[21];
        } else if(factText.textContent === facts[22]){
          factText.textContent = tsongaFacts[22];
        } else if(factText.textContent === facts[23]){
          factText.textContent = tsongaFacts[23];
        } else if(factText.textContent === facts[24]){
          factText.textContent = tsongaFacts[24];
        } else if(factText.textContent === facts[25]){
          factText.textContent = tsongaFacts[25];
        } else if(factText.textContent === facts[26]){
          factText.textContent = tsongaFacts[26];
        } else if(factText.textContent === facts[27]){
          factText.textContent = tsongaFacts[27];
        } else if(factText.textContent === facts[28]){
          factText.textContent = tsongaFacts[28];
        } else if(factText.textContent === facts[29]){
          factText.textContent = tsongaFacts[29];
        } else if(factText.textContent === facts[30]){
          factText.textContent = tsongaFacts[30];
        } else if(factText.textContent === facts[31]){
          factText.textContent = tsongaFacts[31];
        } else if(factText.textContent === facts[32]){
          factText.textContent = tsongaFacts[32];
        } else if(factText.textContent === facts[33]){
          factText.textContent = tsongaFacts[33];
        } else if(factText.textContent === facts[34]){
          factText.textContent = tsongaFacts[34];
        } else if(factText.textContent === facts[35]){
          factText.textContent = tsongaFacts[35];
        } else if(factText.textContent === facts[36]){
          factText.textContent = tsongaFacts[36];
        } else if(factText.textContent === facts[37]){
          factText.textContent = tsongaFacts[37];
        } else if(factText.textContent === facts[38]){
          factText.textContent = tsongaFacts[38];
        } else if(factText.textContent === facts[39]){
          factText.textContent = tsongaFacts[39];
        } else if(factText.textContent === facts[40]){
          factText.textContent = tsongaFacts[40];
        } else if(factText.textContent === facts[41]){
          factText.textContent = tsongaFacts[41];
        } else if(factText.textContent === facts[42]){
          factText.textContent = tsongaFacts[42];
        } else if(factText.textContent === facts[43]){
          factText.textContent = tsongaFacts[43];
        } else if(factText.textContent === facts[44]){
          factText.textContent = tsongaFacts[44];
        } else if(factText.textContent === facts[45]){
          factText.textContent = tsongaFacts[45];
        } else if(factText.textContent === facts[46]){
          factText.textContent = tsongaFacts[46];
        } else if(factText.textContent === facts[47]){
          factText.textContent = tsongaFacts[47];
        } else if(factText.textContent === facts[48]){
          factText.textContent = tsongaFacts[48];
        } else if(factText.textContent === facts[49]){
          factText.textContent = tsongaFacts[49];
        } else if(factText.textContent === facts[50]){
          factText.textContent = tsongaFacts[50];
        } else if(factText.textContent === facts[51]){
          factText.textContent = tsongaFacts[51];
        } else if(factText.textContent === facts[52]){
          factText.textContent = tsongaFacts[52];
        } else if(factText.textContent === facts[53]){
          factText.textContent = tsongaFacts[53];
        } else if(factText.textContent === facts[54]){
          factText.textContent = tsongaFacts[54];
        } else if(factText.textContent === facts[55]){
          factText.textContent = tsongaFacts[55];
        } else if(factText.textContent === facts[56]){
          factText.textContent = tsongaFacts[56];
        } else if(factText.textContent === facts[57]){
          factText.textContent = tsongaFacts[57];
        } else if(factText.textContent === facts[58]){
          factText.textContent = tsongaFacts[58];
        } else if(factText.textContent === facts[59]){
          factText.textContent = tsongaFacts[59];
        } else if(factText.textContent === facts[60]){
          factText.textContent = tsongaFacts[60];
        } else if(factText.textContent === facts[61]){
          factText.textContent = tsongaFacts[61];
        } else if(factText.textContent === facts[62]){
          factText.textContent = tsongaFacts[62];
        } else if(factText.textContent === facts[63]){
          factText.textContent = tsongaFacts[63];
        } else if(factText.textContent === facts[64]){
          factText.textContent = tsongaFacts[64];
        } else if(factText.textContent === facts[65]){
          factText.textContent = tsongaFacts[65];
        } else if(factText.textContent === facts[66]){
          factText.textContent = tsongaFacts[66];
        } else if(factText.textContent === facts[67]){
          factText.textContent = tsongaFacts[67];
        } else if(factText.textContent === facts[68]){
          factText.textContent = tsongaFacts[68];
        } else if(factText.textContent === facts[69]){
          factText.textContent = tsongaFacts[69];
        } else if(factText.textContent === facts[70]){
          factText.textContent = tsongaFacts[70];
        } else if(factText.textContent === facts[71]){
          factText.textContent = tsongaFacts[71];
        } else if(factText.textContent === facts[72]){
          factText.textContent = tsongaFacts[72];
        } else if(factText.textContent === facts[73]){
          factText.textContent = tsongaFacts[73];
        } else if(factText.textContent === facts[74]){
          factText.textContent = tsongaFacts[74];
        } else if(factText.textContent === facts[75]){
          factText.textContent = tsongaFacts[75];
        } else if(factText.textContent === facts[76]){
          factText.textContent = tsongaFacts[76];
        } else if(factText.textContent === facts[77]){
          factText.textContent = tsongaFacts[77];
        } else if(factText.textContent === facts[78]){
          factText.textContent = tsongaFacts[78];
        } else if(factText.textContent === facts[79]){
          factText.textContent = tsongaFacts[79];
        } else if(factText.textContent === facts[80]){
          factText.textContent = tsongaFacts[80];
        } else if(factText.textContent === facts[81]){
          factText.textContent = tsongaFacts[81];
        } else if(factText.textContent === facts[82]){
          factText.textContent = tsongaFacts[82];
        } else if(factText.textContent === facts[83]){
          factText.textContent = tsongaFacts[83];
        } else if(factText.textContent === facts[84]){
          factText.textContent = tsongaFacts[84];
        } else if(factText.textContent === facts[85]){
          factText.textContent = tsongaFacts[85];
        } else if(factText.textContent === facts[86]){
          factText.textContent = tsongaFacts[86];
        } else if(factText.textContent === facts[87]){
          factText.textContent = tsongaFacts[87];
        } else if(factText.textContent === facts[88]){
          factText.textContent = tsongaFacts[88];
        } else if(factText.textContent === facts[89]){
          factText.textContent = tsongaFacts[89];
        } else if(factText.textContent === facts[90]){
          factText.textContent = tsongaFacts[90];
        } else if(factText.textContent === facts[91]){
          factText.textContent = tsongaFacts[91];
        } else if(factText.textContent === facts[92]){
          factText.textContent = tsongaFacts[92];
        } else if(factText.textContent === facts[93]){
          factText.textContent = tsongaFacts[93];
        } else if(factText.textContent === facts[94]){
          factText.textContent = tsongaFacts[94];
        } else if(factText.textContent === facts[95]){
          factText.textContent = tsongaFacts[95];
        } else if(factText.textContent === facts[96]){
          factText.textContent = tsongaFacts[96];
        } else if(factText.textContent === facts[97]){
          factText.textContent = tsongaFacts[97];
        } else if(factText.textContent === facts[98]){
          factText.textContent = tsongaFacts[98];
        } else if(factText.textContent === facts[99]){
          factText.textContent = tsongaFacts[99];
        } else if(factText.textContent === facts[100]){
          factText.textContent = tsongaFacts[100];
        } else if(factText.textContent === facts[101]){
          factText.textContent = tsongaFacts[101];
        } else if(factText.textContent === facts[102]){
          factText.textContent = tsongaFacts[102];
        } else if(factText.textContent === facts[103]){
          factText.textContent = tsongaFacts[103];
        } else if(factText.textContent === facts[104]){
          factText.textContent = tsongaFacts[104];
        } else if(factText.textContent === facts[105]){
          factText.textContent = tsongaFacts[105];
        } else if(factText.textContent === facts[106]){
          factText.textContent = tsongaFacts[106];
        } else if(factText.textContent === facts[107]){
          factText.textContent = tsongaFacts[107];
        } else if(factText.textContent === facts[108]){
          factText.textContent = tsongaFacts[108];
        } else if(factText.textContent === facts[109]){
          factText.textContent = tsongaFacts[109];
        } else if(factText.textContent === facts[110]){
          factText.textContent = tsongaFacts[110];
        } else if(factText.textContent === facts[111]){
          factText.textContent = tsongaFacts[111];
        } else if(factText.textContent === facts[112]){
          factText.textContent = tsongaFacts[112];
        } else if(factText.textContent === facts[113]){
          factText.textContent = tsongaFacts[113];
        } else if(factText.textContent === facts[114]){
          factText.textContent = tsongaFacts[114];
        } else if(factText.textContent === facts[115]){
          factText.textContent = tsongaFacts[115];
        } else if(factText.textContent === facts[116]){
          factText.textContent = tsongaFacts[116];
        } else if(factText.textContent === facts[117]){
          factText.textContent = tsongaFacts[117];
        } else if(factText.textContent === facts[118]){
          factText.textContent = tsongaFacts[118];
        } else if(factText.textContent === facts[119]){
          factText.textContent = tsongaFacts[119];
        } else if(factText.textContent === facts[120]){
          factText.textContent = tsongaFacts[120];
        } else if(factText.textContent === facts[121]){
          factText.textContent = tsongaFacts[121];
        } else if(factText.textContent === facts[122]){
          factText.textContent = tsongaFacts[122];
        } else if(factText.textContent === facts[123]){
          factText.textContent = tsongaFacts[123];
        } else if(factText.textContent === facts[124]){
          factText.textContent = tsongaFacts[124];
        } else if(factText.textContent === facts[125]){
          factText.textContent = tsongaFacts[125];
        };
      });

      removeBtn.addEventListener('click', () => {
        factWrapper1.classList.add('hide');
        factWrapper.classList.remove('hide');
      });
      clearBtn.addEventListener('click', () => {
        factWrapper2.classList.add('hide');
        factWrapper.classList.remove('hide');
      });

      window.onload = () => {
        setTimeout(() => {
          alert('Please refresh before checking your inventory.');
        }, 5000);
        factWrapper1.classList.add('hide');
        factWrapper2.classList.add('hide');
        };