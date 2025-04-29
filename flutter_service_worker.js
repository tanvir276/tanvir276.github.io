'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "170bd16e6088d22a86a161248b76679f",
".git/config": "4f184c9968575ef57393e219f57484b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab6142cdfb1f06afb81d89accd3b115c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d19fb3f879834d02d85c3e6889d127d",
".git/logs/refs/heads/main": "b05b7e2b4f75b458b1c0a12507b99bc1",
".git/logs/refs/remotes/origin/main": "f29348a6031bef2ee45458c6d0301a9e",
".git/objects/01/adc0dd2a8daa31434d915517a8e85420c8c2a1": "a8f8e33107c8aa160fba0bf60f2cd1cb",
".git/objects/02/46226685450fdd58c580e12929a9a7f544eb76": "6572ec976f310150bf4228c7272df4af",
".git/objects/05/e139627854eb2707bb9db56621e26731802549": "b2edffce5d212e7f502c64f6147303e2",
".git/objects/07/f1e0cb9574a1021b2057094ab3323c492fd44a": "25532d7902c30eea66f0b6888c9844f7",
".git/objects/09/20f423ccf689b2a5c680c5e2dc9c0dd32953e3": "74d40da5691049409c750cceae804e22",
".git/objects/0b/31c16ef408240f4ecb87b6b433e6f5cbfed6f6": "9f3783873483d3a4ce0fd9f6cf78ed42",
".git/objects/0e/82ae243e3aac79101a70b11d9d16d6765094fe": "f1cdc8e6fd09f82fcee82df9571270fc",
".git/objects/0e/b7d97d43fa68306940e458378c95289073a697": "50b0623318ae2313747b9ee83d23eef2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/9136d25e02274e09d742d4a1349a95488c3b56": "bc399ad904256c4724ab9dcaae404be6",
".git/objects/11/42d6e81ae168b9906e6c89997c817f23ecda67": "debd579957a59e75acf3957aafe6371d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/a904ef4bd0aef11e175eb3b10ef5363f5db0c3": "f07652cb6dc7b9aa12ba65abf1e4f721",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/ae679d8d49ca6d3b781c42359ca03dec19a619": "eb4faf3b7d02790ff358eec0ee4c7b93",
".git/objects/22/5b7620d12044910a34a6f528bf124313828826": "251e22397e6c959e095ea2e4aa53cb70",
".git/objects/22/eb86762a737c72aeec25f252fcfcee9a7269ab": "86c06d1efe91de722740a56e27888b2f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2d/29a8004e85ed3f4e8403cbdef02bb4a3da640f": "3bff3e81c519ac330d38fda6d23aa233",
".git/objects/2d/420680d7f2ffe8fcff7ac260ad5a5d71d3cb84": "0fa35fd3f51bcbfe446d55243fffff36",
".git/objects/2f/3276887d8df4dba11370b27b163d77faa633a1": "48ac860537d385bd3298488b8ff52492",
".git/objects/38/f1819537af0ca1774400502bc55646f42916b1": "56bdf2841acb698c463f6cdb79cd93f3",
".git/objects/3b/2405ca1f9814edef69266eb07731f5ec55b6f0": "bbd317028341801cd4b390ac77316160",
".git/objects/3f/5ddddc43bf279b66ed1cabfdbc2adc87b77921": "37327e6a9a050b0080256968451fae47",
".git/objects/40/f27f0b4f5281b873a5e8909d4cbbf9b94876b7": "e16323900224965336e334dcd21fd4d0",
".git/objects/43/b0ffe9e99bfa418460fd20e1c3f3f4e1bf45dd": "5c6c46adb1c84199ec5adc6e7f35276a",
".git/objects/44/4d7047793498a749e1ebcc7bb6288c74f93564": "b5411778d14ece487900a89e45bc91a9",
".git/objects/46/1176676d969e6576ebabaf59f3932b5b085166": "272c5e4a8ea5aa780becb9525b9def98",
".git/objects/49/2c7c3c9596e2af7423072d4ed2e4a65666af49": "a9b8ebfb5b9d8f9c17fbe40df73d546d",
".git/objects/49/969edc7963d9602c35b980e3ccac1e26b6a59f": "b2e2550aca23b56aed71d5c227112dae",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/c35ba251094ef72cda02ae3138da6f900531c1": "3c88481787bbdef4f72d065c4c2fc637",
".git/objects/4e/fc422e0a50a097bd71d665caeff56b3ecf5c9f": "e668d2441761073a4af88a4102bcdb8d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/0f1669ed5134615c7476cb31fec6c1a5db211a": "1f189999e431db97b4734e6ff1a263bf",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5f/e5c6913b269d524eb42c1f58ca445aa013a8f7": "11ab728ea4f84f005feb4d2ec2d09bbb",
".git/objects/61/a5b9a11c4d5fa856fcff2bfd45fba686f67ead": "329310ef059f8d0436103fe61c3509e9",
".git/objects/61/af91c8078a3fae3f198dfd7c7a02210b9bb16f": "6bbbbdf37c3e6e9cb2f55c3fc58e5461",
".git/objects/62/b35e68b4d6e212133ba0401cc1dcec0d2f6339": "6a4afc858aa72c6e78797f235449fa5d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/71b0000618059beb3124f54d07e3bb556f526b": "6239a91c7fb31b0ad1f2583bcceeedb0",
".git/objects/63/8f4e27fa4f9861444acdb591d576eb63bc8c2c": "c0cec6504a70edd830ad3ba323a39000",
".git/objects/64/1a2ad6abc2675ce3d46aed659785e92461b848": "f4cc43cf124d6a3e667352635b3a7f46",
".git/objects/68/773d978aa9ba492d730e88b97b55f55b9c238a": "b66ea3acb9acd487105613d4dea98c5d",
".git/objects/6c/48f8b455481411f1e3b5b63cc7146338a62144": "f922e4bf23aee08bf874cf77fa63e35d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/78/f748cc17f9c89614b21bd8ccdce5b57e3fff19": "74857cc3c4b4c3c0520b947a0699bd7b",
".git/objects/79/4158c357b7ff46223b0fbce439bd4035777581": "2f0b22cce72f90c01f4191aa0151eab4",
".git/objects/7b/8456550c52d088c410b8b95a8c474b24b08a3a": "ce2c775b4636df748ddf8fab7f25208f",
".git/objects/7d/e75c9fa22e8796f14fd4723e7d6f17750001dd": "a48ce138203b1c1eae600b2bae290c08",
".git/objects/85/59fdab16a6a39810a7e3f488359a6e12d29056": "a6597b14adb8861dc9a028a25dce68fe",
".git/objects/88/48b3286836b44872c3a7cbe51eeec3509474d1": "16fbeeb81d7cce44fd1eb5e2e5abd046",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6ea6d1811b3a6b1922cdbaea9c63a4b7162a74": "2ac846492a264a18d31c62c9b20cfa25",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7864246648700d606151e6765fa245e707ae63": "d70799f875dd04324244a1b416da0ec7",
".git/objects/8d/b41d25d20bc069b1d68e431771e6deaab5c001": "622813740f297dc45de20a5bfbc716a6",
".git/objects/8e/f08902af39dd87c1220a1344d3c982aec0789a": "976e1b45a5fa18dec3a521c3a7eeaa4c",
".git/objects/93/4443cbf7f9558bdeb897c155edc6fd389d65e0": "5fc74657604d6f31ee973f56630c4c1f",
".git/objects/93/9a76679df68d4e2c6a4710970cd664956523b2": "fca5311052362ce254da017830fde0a4",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/b1f9dace4bf8e1e8c9597881058657c57614ec": "f596f39e7216b47f9a24b6745d5c2627",
".git/objects/97/149e55f741364ed84c8ef5ef583d83a99507b0": "bebeb84932fedfd964ed26276be805fd",
".git/objects/97/a561d3bba7254d28317787475ef43b28508d41": "e186551c75f3f47db9146181612e3d3a",
".git/objects/99/89072eb59feb0bce93b46a44574d081c8b3bab": "f871df8eb8f7d9a4122dbbe897968da2",
".git/objects/9c/7cf654309bd4166d49a86b8e1a0e6f1bcad3ae": "d9dcdffd519e40c12b95599770c50ec7",
".git/objects/a1/fc5fe3a16117a7fa095f08d08cc35c54bb0449": "4d228e39976b66b96eca0426f6c07131",
".git/objects/a2/0b7a8325e15753d1a5bd0a2ce190ae5be236e5": "00287d78682dc40f13edad3e61627a05",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a4/4ec158a9a8f92b6af4d1ce783e06e7b56aab68": "d468f9bcff20db06a66b0958f8157313",
".git/objects/a4/8ea19028c9d5a51716fb1abcb04ce163747936": "cd49fb77d7e15815d5edb9a20cfbe0c1",
".git/objects/a9/a7e70008c9e86a06d4d3edbea7803ade3bb939": "155bed283b7adffd48d07bf90bf1414c",
".git/objects/ab/34e3d710cb1afe013acce4400d799c954c502e": "7bfd5a3b88b223e88461fd8ef5ba946c",
".git/objects/ac/13384818d3b73395bf6fda4b876b21a3e693e9": "8b87ed31ede29b8291f7ab9936c393cd",
".git/objects/b3/7f86529f48b038b20364c0f2fd4af050b67d56": "7d3561ed60958bd28998d1ef3457e66d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/04bb1b42196bfba0c66921e62ef0abcd4b1939": "d1a06f1cb0db2d5cd4104309d74aed93",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/31f437902df42b73f44109968ac1e337f77a4c": "1f8764c6ce61700e2d0c2906910e8ec8",
".git/objects/ba/d56fcffa6b91104a3dbb4f44151b8f39d6c400": "3d7c3cab24e17436c6ddec1a68e6b1a7",
".git/objects/be/f4201e423a15d7a73d08e0f20208b1a5442a44": "29f2bb1efa5255ba89186dab302ff7f2",
".git/objects/c4/6a198d6a1ce737af2dff6b464a60dbefc1ea17": "1c2f7f465ff535e634f168e329be6511",
".git/objects/c5/7c0af536c0d2524fc506fc220a04216784dee5": "0be12ed98e2521e52a7b4152e7f2703f",
".git/objects/c6/e2fa74367fb88510bbab07e201812ec26e7e23": "30e1c1f252f3d706a30dad1d83b824de",
".git/objects/c7/aefa8f49d3edf8c00dbf695be7905f3d3792bf": "8db4dd6abf153e8a22bf1e9248a8042f",
".git/objects/c8/6615a2dad0aae9043c6498eb37a0e24eb3a9ad": "935e812cccbe45cf1a8f25575a608da8",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/f44210c6dcb08704b7fc27856f28b1ae566792": "367c15726b51b46f0458cde21b412455",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/3caa3756ecfc1ce90254064911390457ad7f80": "8bda2690c6c83ef5f8cfa68fcf4033fe",
".git/objects/d1/9064bb1b99fbcab13aed3e7b00f7f5042f40b1": "68992951741532a8cc96c1a1b76b6968",
".git/objects/d3/944accc7af7667d930fb24c72ab73c804b822d": "6891fbe79484cc440e0393f6f9b73fcf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/3fc01eb64f95ad09577aacd9a266f51964eee4": "101466c79270f39a8ab005208bf3d5cc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/b185a993a1ef6b27c72f9b2053d67ac6d3f32e": "23eb5189bf36c03ed69aa577477379bb",
".git/objects/d9/37665ecd9351b2b6980a21424780878163a210": "2e54434e1d48327b976485941d3b33fb",
".git/objects/db/2e10e3a722a6111bb49cc06e3e33344506539b": "8e30497d9021c289801faaa7f81b36f6",
".git/objects/df/8295a48292bfe9768c5864bb3f6b524ccb8b02": "6a76e80916f7c99c1be3c787faec6279",
".git/objects/e0/9f875f87c01670d04cd636b8687db2ae741acb": "b5a3949e3fc568e69d093d31eeb00aa9",
".git/objects/e2/55506def2bb24b1e3877cb5478c85685c814b6": "9a8f5b142096e8042039aa3efc26adfe",
".git/objects/e4/46fd8ef8bf748dcb49498bac4130f739972cef": "486d91b0bf95620c03610261be3e93e6",
".git/objects/e5/377adcd6535fd5c201c826771ff8d0f658399c": "feb463bf0c45b7e16ea9e3e060074110",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/489d6472fdd2caa97bc31c1ef41b7015755151": "4d92799b73e0d2219838a3b19043f37d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3bffabe737e783104e96aa5771181016f36733": "042a9d4d19b8a2891d70bcc8d41b2f94",
".git/objects/ef/7bf3753d448137069446b3baa2e843403db279": "f768481830d947a05130cad4164c1363",
".git/objects/ef/96160d3477710fda15cad8371389fd8dbd31ae": "9567c69ee5b2e27e3146f86e132ab103",
".git/objects/ef/fbb6d784b99a8bc4dfdd6b595f655c6460839a": "e2b00bb156ea2e06c4abb09b25d0f043",
".git/objects/f0/eccd9b1f2d63faade3db9857e943431ac1879f": "1db86729a65b2c8145af0971dc8a731d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8a81504e9ad89b280abeb057b2f51342160a27": "8aba8bf09cea3fab865ed87c4b5344d3",
".git/objects/f5/ce3b2f525decf0e3776d23831130f1aaed06c5": "5d5e4b17133c23b0660ad828d56e946f",
".git/objects/f8/fb76e0bf15d1601274ce7ab439e0e4d058161c": "f1545a99cdbb7edc17179c77e7d6aca6",
".git/objects/f9/20ce0effae8200b4cde7ac0cec7d16380356b1": "822fb6bf2dbe22ce332b92facfab8468",
".git/objects/fc/173d6efaa9abc0274fee63d2e8cd2f958f6591": "566bddd076b3d52aa52673dbffa9a6f2",
".git/refs/heads/main": "350f38b5173d53fe60137fe810465082",
".git/refs/remotes/origin/main": "350f38b5173d53fe60137fe810465082",
"assets/AssetManifest.bin": "7a756379b791fac26628d0c4374587c0",
"assets/AssetManifest.bin.json": "cd51268e6a08ab0fb8a2567d458def53",
"assets/AssetManifest.json": "0fdfc23c68ce575c3bcc50fe378b49a8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "36d15b456d0da5605866ef21fc1f476e",
"assets/images/digi.gif": "d5b4ad907e99e791bad4a548d2de91ef",
"assets/images/digibank.png": "df770c3ddae37488595e07bec6bbaba7",
"assets/images/forest.gif": "236774408e7dc1951f96ab953befa3e6",
"assets/images/hoothut.gif": "11e02f3bef0899da4ff36c5fe85de56b",
"assets/images/hoothut.png": "f62c2b8d804d9aa42244e03d43e1ae3f",
"assets/images/hoothut2.png": "c88874e690989ec50103dd1e55a45324",
"assets/images/loan.gif": "4446ff325143dffd7ba1845f969d2d56",
"assets/images/loan_verify.png": "4da924524d12442dd169e785049b396d",
"assets/images/pic1.jpg": "0e268973c3d45383ee769ee07bba0a2f",
"assets/images/sawmil.png": "8f985aa917a7f0a60315e838baf407b5",
"assets/images/sbac.gif": "6a1b8bcfe548a970f4a9c4297d075755",
"assets/images/sbac.png": "2f0d11188d456634044ec2bb92861bdd",
"assets/images/sbac_fast.png": "32ec80ac5c55834c20b9adb052280690",
"assets/images/smm.gif": "99e477b80ab87de500b8db340cb2776e",
"assets/images/smm.png": "a7504641c588fbe6b83cd8679d22c7df",
"assets/images/word.png": "2d3b9bcb0e8372e27d8aba6670e8efc6",
"assets/images/word_new.png": "d4baaf1febf4e1d3afd7274f80969c3b",
"assets/NOTICES": "46e69dbaed23e017cdbf4de7409a8c7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "49c40c89850d81d43dfdd4efa77dfe1b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2995a289f98df7c97afcda705dcd1c48",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "87cf3db8b060f70aee2cc85edea4ef41",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9e61061e4c8684905ea2accf438b148",
"/": "f9e61061e4c8684905ea2accf438b148",
"main.dart.js": "e3ba41d4450a11e1cbd4928901eba4c3",
"manifest.json": "ba517930262c66e39149135843f01312",
"version.json": "06f06b1eb07476827d9346e4f2c4296b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
