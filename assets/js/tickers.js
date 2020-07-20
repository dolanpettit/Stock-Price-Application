var availableTags = [
  "TXG",
  "YI",
  "PIH",
  "PIHPP",
  "TURN",
  "FLWS",
  "BCOW",
  "ONEM",
  "FCCY",
  "SRCE",
  "VNET",
  "TWOU",
  "QFIN",
  "KRKR",
  "JOBS",
  "ETNB",
  "JFK",
  "JFKKR",
  "JFKKU",
  "JFKKW",
  "EGHT",
  "NMTR",
  "JFU",
  "AAON",
  "ABEO",
  "ABMD",
  "AXAS",
  "ACIU",
  "ACIA",
  "ACTG",
  "ACHC",
  "ACAD",
  "ACAM",
  "ACAMU",
  "ACAMW",
  "ACST",
  "AXDX",
  "ACCP",
  "XLRN",
  "ACCD",
  "ARAY",
  "ACRX",
  "ACER",
  "ACHV",
  "ACIW",
  "ACRS",
  "ACMR",
  "ACNB",
  "ACOR",
  "ATVI",
  "ADMS",
  "ADMP",
  "AHCO",
  "ADAP",
  "ADPT",
  "ADXN",
  "ADUS",
  "AEY",
  "ADIL",
  "ADILW",
  "ADTX",
  "ADMA",
  "ADBE",
  "ADTN",
  "ADRO",
  "ADES",
  "AEIS",
  "AMD",
  "ADXS",
  "ADVM",
  "DWEQ",
  "DWAW",
  "DWUS",
  "DWMC",
  "DWSH",
  "ACT",
  "AEGN",
  "AGLE",
  "AEHR",
  "AMTX",
  "AERI",
  "AVAV",
  "ARPO",
  "AIH",
  "AEZS",
  "AEMD",
  "AFMD",
  "AFYA",
  "AGBA",
  "AGBAR",
  "AGBAU",
  "AGBAW",
  "AGEN",
  "AGRX",
  "AGYS",
  "AGIO",
  "AGMH",
  "AGNC",
  "AGNCM",
  "AGNCN",
  "AGNCO",
  "AGNCP",
  "API",
  "AGFS",
  "AGFSW",
  "AIKI",
  "ALRN",
  "AIMT",
  "AIRT",
  "AIRTP",
  "AIRTW",
  "ATSG",
  "AIRG",
  "ANTE",
  "AKAM",
  "AKTX",
  "AKCA",
  "AKBA",
  "KERN",
  "KERNW",
  "AKRO",
  "AKER",
  "AKUS",
  "AKTS",
  "ALRM",
  "ALSK",
  "ALAC",
  "ALACR",
  "ALACU",
  "ALACW",
  "ALBO",
  "ALDX",
  "ALEC",
  "ALRS",
  "ALXN",
  "ALCO",
  "ALIT",
  "ALGN",
  "ALIM",
  "ALYA",
  "ALJJ",
  "ALKS",
  "ALLK",
  "ABTX",
  "ALGT",
  "ALNA",
  "ARLP",
  "LNT",
  "AESE",
  "AHPI",
  "AMOT",
  "ALLO",
  "ALLT",
  "MDRX",
  "ALNY",
  "AOSL",
  "GOOG",
  "GOOGL",
  "SMCP",
  "ATEC",
  "ALPN",
  "ALTA",
  "ALTR",
  "ATHE",
  "ALT",
  "ASPS",
  "AIMC",
  "ALTM",
  "AMAG",
  "AMAL",
  "AMRN",
  "AMRK",
  "AMZN",
  "AMBC",
  "AMBA",
  "AMCX",
  "AMCI",
  "AMCIU",
  "AMCIW",
  "DOX",
  "AMED",
  "AMTB",
  "AMTBB",
  "UHAL",
  "AMRH",
  "AMRHW",
  "ATAX",
  "AMOV",
  "AAL",
  "AFIN",
  "AFINP",
  "AMNB",
  "ANAT",
  "APEI",
  "AREC",
  "AMRB",
  "AMSWA",
  "AMSC",
  "AVCT",
  "AVCTW",
  "AMWD",
  "CRMT",
  "ABCB",
  "AMSF",
  "ASRV",
  "ASRVP",
  "ATLO",
  "AMGN",
  "FOLD",
  "AMKR",
  "AMPH",
  "IBUY",
  "AMHC",
  "AMHCU",
  "AMHCW",
  "AMYT",
  "ASYS",
  "AMRS",
  "ADI",
  "ANAB",
  "AVXL",
  "ANCN",
  "ANDA",
  "ANDAR",
  "ANDAU",
  "ANDAW",
  "ANGI",
  "ANGO",
  "ANIP",
  "ANIK",
  "ANIX",
  "ANPC",
  "ANSS",
  "ATRS",
  "ATEX",
  "APA",
  "APLS",
  "APEX",
  "APXT",
  "APXTU",
  "APXTW",
  "APHA",
  "APOG",
  "APEN",
  "AINV",
  "AMEH",
  "APPF",
  "APPN",
  "AAPL",
  "APDN",
  "AGTC",
  "AMAT",
  "AMTI",
  "AAOI",
  "APLT",
  "APRE",
  "APVO",
  "APTX",
  "APM",
  "APTO",
  "APYX",
  "AQMS",
  "AQB",
  "AQST",
  "ARAV",
  "ABUS",
  "ABIO",
  "RKDA",
  "ARCB",
  "ACGL",
  "ACGLO",
  "ACGLP",
  "FUV",
  "ARCE",
  "ARCT",
  "ARQT",
  "ARDX",
  "ARNA",
  "ARCC",
  "ARGX",
  "ARDS",
  "ARKR",
  "DWCR",
  "DWAT",
  "AROW",
  "ARWR",
  "ARTL",
  "ARTLW",
  "ARTNA",
  "ARTW",
  "ARVN",
  "ARYBU",
  "ASNA",
  "ASND",
  "APWC",
  "ASLN",
  "ASML",
  "ASPU",
  "AZPN",
  "AWH",
  "ASMB",
  "ASRT",
  "ASFI",
  "ASTE",
  "ATRO",
  "ALOT",
  "ASTC",
  "ASUR",
  "AACG",
  "ATRA",
  "ATNX",
  "ATHX",
  "ATIF",
  "AAME",
  "ACBI",
  "AUB",
  "AUBAP",
  "AY",
  "ATLC",
  "AAWW",
  "AFH",
  "ATCX",
  "ATCXW",
  "TEAM",
  "ATNI",
  "ATOM",
  "ATOS",
  "BCEL",
  "ATRC",
  "ATRI",
  "LIFE",
  "AUBN",
  "AUDC",
  "AEYE",
  "AUPH",
  "EARS",
  "JG",
  "ADSK",
  "AUTL",
  "ADP",
  "AUTO",
  "AVDL",
  "AHI",
  "AVCO",
  "ATXI",
  "AVEO",
  "AVNW",
  "CDMO",
  "CDMOP",
  "AVID",
  "RNA",
  "AVGR",
  "CAR",
  "RCEL",
  "AVT",
  "AVRO",
  "AWRE",
  "ACLS",
  "AXLA",
  "AXGN",
  "AAXN",
  "AXNX",
  "AXGT",
  "AXSM",
  "AXTI",
  "AYLA",
  "AYRO",
  "AYTU",
  "AZRX",
  "BCOM",
  "RILY",
  "RILYG",
  "RILYH",
  "RILYI",
  "RILYM",
  "RILYN",
  "RILYO",
  "RILYP",
  "RILYZ",
  "BOSC",
  "BIDU",
  "BCPC",
  "BLDP",
  "BANF",
  "BANFP",
  "BCTF",
  "BAND",
  "BFC",
  "BOCH",
  "BMRC",
  "BMLP",
  "BKSC",
  "BOTJ",
  "OZK",
  "BSVN",
  "BFIN",
  "BWFG",
  "BANR",
  "BZUN",
  "DFVL",
  "DFVS",
  "DTUL",
  "DTUS",
  "DTYL",
  "FLAT",
  "STPP",
  "TAPR",
  "BBSI",
  "GOLD",
  "BSET",
  "ZTEST",
  "BXRX",
  "BCML",
  "BBQ",
  "BCBP",
  "BECN",
  "BEAM",
  "BBGI",
  "BBBY",
  "BGNE",
  "BELFA",
  "BELFB",
  "BLPH",
  "BLCM",
  "BLU",
  "BNFT",
  "BFYT",
  "BNTC",
  "BRY",
  "BWMX",
  "XAIR",
  "BYND",
  "BYSI",
  "BGCP",
  "BCYC",
  "BGFV",
  "BRPA",
  "BRPAR",
  "BRPAU",
  "BRPAW",
  "BILI",
  "BASI",
  "BCDA",
  "BCDAW",
  "BIOC",
  "BCRX",
  "BDSI",
  "BFRA",
  "BIIB",
  "BHTG",
  "BKYI",
  "BIOL",
  "BLFS",
  "BLRX",
  "BMRN",
  "BMRA",
  "BNGO",
  "BNGOW",
  "BVXV",
  "BNTX",
  "BPTH",
  "BSGM",
  "BSTC",
  "TECH",
  "BEAT",
  "BIVI",
  "BTAI",
  "BJRI",
  "BDTX",
  "BLKB",
  "BL",
  "BKCC",
  "TCPC",
  "BLNK",
  "BLNKW",
  "BLMN",
  "BCOR",
  "BLBD",
  "BHAT",
  "BLUE",
  "BLCT",
  "BKEP",
  "BKEPP",
  "BPMC",
  "ITEQ",
  "BMCH",
  "BSBK",
  "WIFI",
  "BOKF",
  "BOKFL",
  "BNSO",
  "BKNG",
  "BIMI",
  "BRQS",
  "BOMN",
  "BPFH",
  "EPAY",
  "BOXL",
  "BBRX",
  "BCLI",
  "BWAY",
  "BCTX",
  "BBI",
  "BDGE",
  "BBIO",
  "BLIN          ",
  "BWB",
  "BRID",
  "BCOV",
  "BHF",
  "BHFAL",
  "BHFAO",
  "BHFAP",
  "BRLIU",
  "AVGO",
  "AVGOP",
  "BYFC",
  "BWEN",
  "BROG",
  "BROGW",
  "BPY",
  "BPYPN",
  "BPYPO",
  "BPYPP",
  "BPYU",
  "BPYUP",
  "BRKL",
  "BRKS",
  "BRP",
  "DOOO",
  "BRKR",
  "BMTC",
  "BSQR",
  "BLDR",
  "BNR",
  "BFST",
  "CFFI",
  "CHRW",
  "CABA",
  "CCMP",
  "CDNS",
  "CDZI",
  "CZR",
  "CSTE",
  "CLBS",
  "CHY",
  "CHI",
  "CCD",
  "CHW",
  "CGO",
  "CPZ",
  "CSQ",
  "CAMP",
  "CVGW",
  "CALB",
  "CALA",
  "CALT",
  "CALM",
  "CLMT",
  "CLXT",
  "CMBM",
  "CATC",
  "CAC",
  "CAMT",
  "CAN",
  "CSIQ",
  "CGIX",
  "CPHC",
  "CBNK",
  "CCBG",
  "CPLP",
  "CSWC",
  "CSWCL",
  "CPTA",
  "CPTAG",
  "CPTAL",
  "CFFN",
  "CAPR",
  "CSTR",
  "CPST",
  "CARA",
  "CRDF",
  "CSII",
  "CDLX",
  "CATM",
  "CDNA",
  "CTRE",
  "CARG",
  "TAST",
  "CARE",
  "CARV",
  "CASA",
  "CWST",
  "CASY",
  "CASI",
  "CASS",
  "SAVA",
  "CSTL",
  "CTRM",
  "CATB",
  "CBIO",
  "CPRX",
  "CATY",
  "CVCO",
  "CBFV",
  "CBAT",
  "CBMB",
  "CBOE",
  "CBTX",
  "CDK",
  "CDW",
  "CECE",
  "CELC",
  "CLDX",
  "APOP",
  "APOPW",
  "CLRB",
  "CLRBZ",
  "CLLS",
  "CBMG",
  "CLSN",
  "CELH",
  "CYAD",
  "CETX",
  "CETXP",
  "CETXW",
  "CDEV",
  "CNTG",
  "CETV",
  "CFBK",
  "CENT",
  "CENTA",
  "CVCY",
  "CNTX",
  "CENX",
  "CNBKA",
  "CNTY",
  "CRNT",
  "CERC",
  "CRNC",
  "CERN",
  "CERS",
  "CEVA",
  "CFFA",
  "CFFAU",
  "CFFAW",
  "CSBR",
  "CHNG",
  "CHNGU",
  "CTHR",
  "GTLS",
  "CHTR",
  "CHKP",
  "CHEK",
  "CHEKZ",
  "CKPT",
  "CEMI",
  "CCXI",
  "CHMG",
  "CHFS",
  "CHMA",
  "CSSE",
  "CSSEP",
  "PLCE",
  "CMRX",
  "CAAS",
  "CBPO",
  "CCCL",
  "CCRC",
  "JRJC",
  "HGSH",
  "CIH",
  "CJJD",
  "CLEU",
  "CHNR",
  "CREG",
  "SXTC",
  "CXDC",
  "PLIN",
  "CNET",
  "IMOS",
  "COFS",
  "CHPM",
  "CHPMU",
  "CHPMW",
  "CDXC",
  "CHSCL",
  "CHSCM",
  "CHSCN",
  "CHSCO",
  "CHSCP",
  "CHDN",
  "CHUY",
  "CDTX",
  "CIIC",
  "CIICU",
  "CIICW",
  "CMCT",
  "CMCTP",
  "CMPR",
  "CNNB",
  "CINF",
  "CIDM",
  "CTAS",
  "CRUS",
  "CSCO",
  "CTRN",
  "CTXR",
  "CTXRW",
  "CZNC",
  "CZWI",
  "CIZN",
  "CTXS",
  "CHCO",
  "CIVB",
  "CLAR",
  "CLNE",
  "CLSK",
  "CACG",
  "YLDE",
  "LRGE",
  "CLFD",
  "CLRO",
  "CLPT",
  "CLSD",
  "CLIR",
  "CBLI",
  "CLVS",
  "CLPS",
  "CME",
  "CCNE",
  "CNSP",
  "CCB",
  "COKE",
  "COCP",
  "CODA",
  "CCNC",
  "CDXS",
  "CODX",
  "CVLY",
  "JVA",
  "CCOI",
  "CGNX",
  "CTSH",
  "CWBR",
  "COHR",
  "CHRS",
  "COHU",
  "CGRO",
  "CGROU",
  "CGROW",
  "CLCT",
  "COLL",
  "CIGI",
  "CLGN",
  "CBAN",
  "HHT",
  "COLB",
  "CLBK",
  "COLM",
  "CMCO",
  "CMCSA",
  "CBSH",
  "CBSHP",
  "CVGI",
  "COMM",
  "JCS",
  "ESXB",
  "CFBI",
  "CTBI",
  "CWBC",
  "CVLT",
  "CGEN",
  "CPSI",
  "CTG",
  "SCOR",
  "CHCI",
  "CMTL",
  "CNCE",
  "BBCP",
  "CDOR",
  "CNDT",
  "CFMS",
  "CNFR",
  "CNFRL",
  "CNMD",
  "CNOB",
  "CONN",
  "CNSL",
  "CWCO",
  "CNST",
  "ROAD",
  "CPSS",
  "CFRX",
  "CPTI",
  "CPAA",
  "CPAAU",
  "CPAAW",
  "CPRT",
  "CRBP",
  "CORT",
  "CORE",
  "CSOD",
  "CRTX",
  "CLDB",
  "CRVL",
  "CRVS",
  "CSGP",
  "COST",
  "CPAH",
  "ICBK",
  "COUP",
  "CVLG",
  "CVET",
  "COWN",
  "COWNL",
  "COWNZ",
  "CPSH",
  "CRAI",
  "CBRL",
  "BREW",
  "CREX",
  "CREXW",
  "CACC",
  "GLDI",
  "SLVO",
  "USOI",
  "CREE",
  "CRSA",
  "CRSAU",
  "CRSAW",
  "CCAP",
  "CRESY",
  "CXDO",
  "CRNX",
  "CRSP",
  "CRTO",
  "CROX",
  "CRON",
  "CCRN",
  "CFB",
  "CRWD",
  "CRWS",
  "CYRX",
  "CYRXW",
  "CSGS",
  "CCLP",
  "CSPI",
  "CSWI",
  "CSX",
  "CTIC",
  "CUE",
  "CPIX",
  "CMLS",
  "CRIS",
  "CUTR",
  "CVBF",
  "CVV",
  "CYAN",
  "CYBR",
  "CYBE",
  "CYCC",
  "CYCCP",
  "CYCN",
  "CBAY",
  "CYRN",
  "CONE",
  "CYTK",
  "CTMX",
  "CTSO",
  "DADA",
  "DJCO",
  "DAKT",
  "DARE",
  "DRIO",
  "DRIOW",
  "DZSI",
  "DSKE",
  "DSKEW",
  "DAIO",
  "DDOG",
  "DTSS",
  "PLAY",
  "DTEA",
  "DFNL",
  "DINT",
  "DUSA",
  "DWLD",
  "DWSN",
  "DBVT",
  "DCPH",
  "TACO",
  "DCTH",
  "DBCP",
  "DMPI",
  "DNLI",
  "DENN",
  "XRAY",
  "DRMT",
  "DMTK",
  "DXLG",
  "DSWL",
  "DXCM",
  "DFPH",
  "DFPHU",
  "DFPHW",
  "DMAC",
  "DHIL",
  "FANG",
  "DPHC",
  "DPHCU",
  "DPHCW",
  "DRNA",
  "DFFN",
  "DGII",
  "DMRC",
  "DRAD",
  "DRADP",
  "DGLY",
  "APPS",
  "DCOM",
  "DCOMP",
  "DIOD",
  "DRTT",
  "DISCA",
  "DISCB",
  "DISCK",
  "DISH",
  "DHC",
  "DHCNI",
  "DHCNL",
  "DLHC",
  "BOOM",
  "DOCU",
  "DOGZ",
  "DLTR",
  "DLPN",
  "DLPNW",
  "DOMO",
  "DGICA",
  "DGICB",
  "DMLP",
  "DORM",
  "DDI",
  "DOYU",
  "DKNG",
  "DKNGZ",
  "LYL",
  "DBX",
  "DSPG",
  "DLTH",
  "DNKN",
  "DUOT",
  "DRRX",
  "DXPE",
  "DYAI",
  "DYNT",
  "DVAX",
  "ETFC",
  "SSP",
  "EBMT",
  "EGBN",
  "EGLE",
  "EGRX",
  "IGLE",
  "ESSC",
  "ESSCR",
  "ESSCU",
  "ESSCW",
  "EWBC",
  "EML",
  "EAST",
  "EVGBC",
  "EVSTC",
  "EVLMC",
  "EBON",
  "EBAY",
  "EBAYL",
  "EBIX",
  "ECHO",
  "SATS",
  "MOHO",
  "EDAP",
  "EDSA",
  "EDNT",
  "EDIT",
  "EDUC",
  "EGAN",
  "EH",
  "EHTH",
  "EIDX",
  "EIGR",
  "EKSO",
  "LOCO",
  "ESLT",
  "ERI",
  "SOLO",
  "SOLOW",
  "ECOR",
  "EA",
  "ELSE",
  "ESBK",
  "ELOX",
  "ELTK",
  "EMCF",
  "EMKR",
  "ENTA",
  "ECPG",
  "WIRE",
  "ENDP",
  "ELGX",
  "NDRA",
  "NDRAW",
  "EIGI",
  "WATT",
  "EFOI",
  "ERII",
  "ENG",
  "ENLV",
  "ENOB",
  "ENPH",
  "ESGR",
  "ESGRO",
  "ESGRP",
  "ETTX",
  "ENTG",
  "ENTX",
  "ENTXW",
  "EBTC",
  "EFSC",
  "EVSI",
  "EVSIW",
  "EPZM",
  "PLUS",
  "EPSN",
  "EQ",
  "EQIX",
  "EQBK",
  "ERIC",
  "ERIE",
  "ERYP",
  "ESCA",
  "ESPR",
  "GMBL",
  "GMBLW",
  "ESQ",
  "ESSA",
  "EPIX",
  "ESTA",
  "VBND",
  "VUSE",
  "VIDI",
  "ETON",
  "ETSY",
  "CLWT",
  "EDRY",
  "EEFT",
  "ESEA",
  "EVLO",
  "EVBG",
  "EVK",
  "EVER",
  "MRAM",
  "EVOP",
  "EVFM",
  "EVGN",
  "EVOK",
  "EOLS",
  "EVOL",
  "EXAS",
  "XGN",
  "ROBO",
  "XELA",
  "EXEL",
  "EXC",
  "EXFO",
  "XCUR",
  "EXLS",
  "EXPI",
  "EXPE",
  "EXPD",
  "EXPC",
  "EXPCU",
  "EXPCW",
  "EXPO",
  "STAY",
  "EXTR",
  "EYEG",
  "EYEGW",
  "EYEN",
  "EYPT",
  "EZPW",
  "FLRZ",
  "FFIV",
  "FB",
  "FLMN",
  "FLMNW",
  "DUO",
  "FANH",
  "FARM",
  "FMAO",
  "FMNB",
  "FAMI",
  "FARO",
  "FAST",
  "FAT",
  "FATE",
  "FBSS",
  "FNHC",
  "FENC",
  "GSM",
  "FFBW",
  "FGEN",
  "FDBC",
  "ONEQ",
  "FDUS",
  "FDUSG",
  "FDUSL",
  "FDUSZ",
  "FRGI",
  "FITB",
  "FITBI",
  "FITBO",
  "FITBP",
  "FISI",
  "FNJN",
  "FSRV",
  "FSRVU",
  "FSRVW",
  "FTAC",
  "FTACU",
  "FTACW",
  "FEYE",
  "FBNC",
  "FNLC",
  "FRBA",
  "BUSE",
  "FBIZ",
  "FCAP",
  "FCBP",
  "FCNCA",
  "FCNCP",
  "FCBC",
  "FCCO",
  "FFBC",
  "FFIN",
  "THFF",
  "FFNW",
  "FFWM",
  "FGBI",
  "FHB",
  "INBK",
  "INBKL",
  "INBKZ",
  "FIBK",
  "FRME",
  "FMBH",
  "FMBI",
  "FMBIO",
  "FMBIP",
  "FXNC",
  "FNWB",
  "FSFG",
  "FSEA",
  "FSLR",
  "FAAR",
  "FPA",
  "BICK",
  "FBZ",
  "FTHI",
  "FCAL",
  "FCAN",
  "FTCS",
  "FCEF",
  "FCA",
  "SKYY",
  "RNDM",
  "FDT",
  "FDTS",
  "FVC",
  "FV",
  "IFV",
  "DDIV",
  "DVOL",
  "DVLU",
  "DWPP",
  "DALI",
  "FDNI",
  "FEM",
  "RNEM",
  "FEMB",
  "FEMS",
  "FTSM",
  "FEP",
  "FEUZ",
  "FGM",
  "FTGC",
  "FTLB",
  "HYLS",
  "FHK",
  "NFTY",
  "FTAG",
  "FTRI",
  "LEGR",
  "NXTG",
  "FPXI",
  "FPXE",
  "FJP",
  "FEX",
  "FTC",
  "RNLC",
  "FTA",
  "FLN",
  "LMBS",
  "LDSF",
  "FMB",
  "FMK",
  "FNX",
  "FNY",
  "RNMC",
  "FNK",
  "FAD",
  "FAB",
  "MDIV",
  "MCEF",
  "FMHI",
  "QABA",
  "ROBT",
  "FTXO",
  "QCLN",
  "GRID",
  "CIBR",
  "FTXG",
  "CARZ",
  "FTXN",
  "FTXH",
  "FTXD",
  "FTXL",
  "TDIV",
  "FTXR",
  "QQEW",
  "QQXT",
  "QTEC",
  "AIRR",
  "RDVY",
  "RFAP",
  "RFDI",
  "RFEM",
  "RFEU",
  "FID",
  "FTSL",
  "FYX",
  "FYC",
  "RNSC",
  "FYT",
  "SDVY",
  "FKO",
  "FCVT",
  "FDIV",
  "FSZ",
  "FIXD",
  "TUSA",
  "FKU",
  "RNDV",
  "FUNC",
  "FUSB",
  "MYFW",
  "FCFS",
  "SVVC",
  "FSV",
  "FISV",
  "FIVE",
  "FPRX",
  "FVE",
  "FIVN",
  "FLEX",
  "FLXN",
  "SKOR",
  "MBSD",
  "ASET",
  "ESG",
  "ESGG",
  "LKOR",
  "QLC",
  "FPAY",
  "FLXS",
  "FLIR",
  "FLWR",
  "FLNT",
  "FLDM",
  "FFIC",
  "FLUX",
  "FNCB",
  "FOCS",
  "FONR",
  "FSCT",
  "FRSX",
  "FMTX",
  "FORM",
  "FORTY",
  "FORR",
  "FBRX",
  "FRTA",
  "FTNT",
  "FBIO",
  "FBIOP",
  "FMCI",
  "FMCIU",
  "FMCIW",
  "FWRD",
  "FORD",
  "FWP",
  "FOSL",
  "FOX",
  "FOXA",
  "FOXF",
  "FRAN",
  "FRG",
  "FELE",
  "FRAF",
  "FRHC",
  "RAIL",
  "FEIM",
  "FREQ",
  "FRPT",
  "FTDR",
  "FRPH",
  "FSBW",
  "HUGE",
  "FTEK",
  "FCEL",
  "FULC",
  "FLGT",
  "FORK",
  "FLL",
  "FMAX",
  "FULT",
  "FNKO",
  "FUSN",
  "FUTU",
  "FTFT",
  "FFHL",
  "FVCB",
  "WILC",
  "GTHX",
  "GAIA",
  "GLPG",
  "GALT",
  "GRTX",
  "GLMD",
  "GMDA",
  "GLPI",
  "GAN",
  "GRMN",
  "GARS",
  "GLIBA",
  "GLIBP",
  "GDS",
  "GNSS",
  "GENC",
  "GFN",
  "GFNCP",
  "GFNSL",
  "GBIO",
  "GENE",
  "GTH",
  "GNFT",
  "GNUS",
  "GMAB",
  "GNMK",
  "GNCA",
  "GNPX",
  "GNTX",
  "THRM",
  "GEOS",
  "GABC",
  "GERN",
  "GEVO",
  "ROCK",
  "GIGM",
  "GIII",
  "GILT",
  "GILD",
  "GBCI",
  "GLAD",
  "GLADD",
  "GLADL",
  "GOOD",
  "GOODM",
  "GOODN",
  "GAIN",
  "GAINL",
  "GAINM",
  "LAND",
  "LANDP",
  "GLBZ",
  "GBT",
  "ENT",
  "GBLI",
  "GBLIL",
  "GBLIZ",
  "SELF",
  "GWRS",
  "AIQ",
  "DRIV",
  "POTX",
  "CLOU",
  "KRMA",
  "BUG",
  "DAX",
  "EBIZ",
  "FINX",
  "CHIC",
  "GNOM",
  "BFIT",
  "SNSR",
];
$("#search").autocomplete({
  source: function (request, response) {
    var results = $.ui.autocomplete.filter(availableTags, request.term);

    response(results.slice(0, 10));
  },
});