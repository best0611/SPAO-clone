import {
  Gender,
  Category,
  Tags,
  Colors,
  ProductObject,
} from "./ProductArrType";

export const productsBest: ProductObject[] = [
  {
    id: 1,
    src: "https://www.spao.com/web/product/small/202309/56eb4a31ab265ddecb8c16dea54ebb03.jpg",
    name: "[리사이클] 베이직 퍼플리스 집업_SPFZD4TU01",
    price: 29900,
    colors: [
      Colors.white,
      Colors.gray,
      Colors.black,
      Colors.navy,
      Colors.lightpurple,
      Colors.mint,
      Colors.brown,
      Colors.powderblue,
      Colors.powderpink,
      Colors.vanillacream,
    ],
    tags: [Tags.남녀공용],
    category: Category.outer,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 2,
    src: "https://www.spao.com/web/product/small/202309/e423dccf1779776f67960c0609c917b4.jpg",
    name: "카라 탈착 경량 퀼팅 자켓_SPJAD4TG01",
    price: 79900,
    colors: [Colors.black, Colors.beige],
    tags: [Tags.여성용],
    category: Category.outer,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 3,
    src: "https://www.spao.com/web/product/small/202310/dbc8a73b4320d95773629d6c209511fc.jpg",
    name: "[공용] [프렌치테리] 루즈핏 2-WAY 후드집업(기모)_SPMZD49U01",
    price: 39900,
    colors: [
      Colors.black,
      Colors.oatmealmelange,
      Colors.ivory,
      Colors.navy,
      Colors.hunter,
      Colors.brown,
      Colors.lightmelangegray,
      Colors.melangegray,
      Colors.darkmelangegray,
      Colors.powderblue,
    ],
    tags: [Tags.남녀공용, Tags.셋업상품],
    category: Category.outer,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 4,
    src: "https://www.spao.com/web/product/small/202309/bacb149327049c5c4a18423df3adf8df.jpg",
    name: "라이트 자켓_SPJPD4TC01",
    price: 59900,
    colors: [
      Colors.lightgray,
      Colors.black,
      Colors.ivory,
      Colors.navy,
      Colors.lightpurple,
      Colors.powderpink,
    ],
    tags: [Tags.남녀공용],
    category: Category.outer,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 5,
    src: "https://www.spao.com/web/product/small/202309/8a3db77d2ecb72c6cfdcc1b7fce7e93b.jpg",
    name: "[소프트얀] 베이직 라운드넥 가디건_G,W_SPCKD49U10",
    price: 35900,
    colors: [
      Colors.camel,
      Colors.gray,
      Colors.black,
      Colors.ivory,
      Colors.khaki,
    ],
    tags: [Tags.여성용],
    category: Category.outer,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 6,
    src: "https://www.spao.com/web/product/small/202309/7b48ac81339f4c29824cbb9a3a6b9bbe.jpg",
    name: "[데일리지] 롱 와이드 진_SPTJDA9G51",
    price: 49900,
    colors: [
      Colors.white,
      Colors.lightgray,
      Colors.darkgray,
      Colors.indigo,
      Colors.lightindigo,
      Colors.navy,
      Colors.darkindigo,
    ],
    tags: [Tags.무료배송, Tags.무료반품, Tags.여성용, Tags.셋업상품],
    category: Category.bottom,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 7,
    src: "https://www.spao.com/web/product/small/202309/4e478fec6bf455a84487a30c50cc7e5d.jpg",
    name: "[여성] [프렌치테리] 크롭 후드집업_G_SPMZD49U05",
    price: 39900,
    colors: [
      Colors.lightgray,
      Colors.black,
      Colors.oatmealmelange,
      Colors.lightmelangegray,
      Colors.powderpink,
    ],
    tags: [Tags.여성용, Tags.셋업상품],
    category: Category.outer,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 8,
    src: "https://www.spao.com/web/product/small/202308/62570c11c3f4c687b3931a98de1776a3.jpg",
    name: "[소프트얀] 반집업 스웨터_SPKWD4TW02",
    price: 49900,
    colors: [
      Colors.gray,
      Colors.black,
      Colors.pink,
      Colors.oatmealmelange,
      Colors.navy,
      Colors.brown,
    ],
    tags: [Tags.여성용],
    category: Category.top,
    gender: [Gender.woman],
    sale: 10,
  },
  {
    id: 9,
    src: "https://www.spao.com/web/product/small/202302/0e086bdb127d0a7f826c97f3272e50e1.jpg",
    name: "배색 윈드브레이커_SPJJD23C21",
    price: 59900,
    colors: [Colors.lightgray, Colors.black, Colors.hunter, Colors.lightpurple],
    tags: [Tags.남녀공용],
    category: Category.outer,
    gender: [Gender.woman, Gender.man],
    sale: 33,
  },

  {
    id: 10,
    src: "https://www.spao.com/web/product/small/202308/14fe16df2a0e9cc25173f9f21d7c067c.jpg",
    name: "(시티보이) 오버핏 옥스포드 셔츠_SPYWD49C01",
    price: 39900,
    colors: [Colors.white, Colors.lightgray, Colors.lightbeige, Colors.navy],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 10,
  },
  {
    id: 11,
    src: "https://www.spao.com/web/product/small/202309/7f7b3221612bc260419ec57582e83672.jpg",
    name: "[데일리지] 와이드 진_SPTJD49C51",
    price: 49900,
    colors: [
      Colors.white,
      Colors.lightgray,
      Colors.black,
      Colors.indigo,
      Colors.lightindigo,
      Colors.navy,
      Colors.vintageindigo,
    ],
    tags: [Tags.무료배송, Tags.무료반품, Tags.남성용, Tags.셋업상품],
    category: Category.bottom,
    gender: [Gender.man],
    sale: 0,
  },
  {
    id: 12,
    src: "https://www.spao.com/web/product/small/202309/a44162702e444a247c7f707391695e07.jpg",
    name: "베이직 플리스 집업_SPFZD4TU02",
    price: 29900,
    colors: [
      Colors.black,
      Colors.oatmealmelange,
      Colors.melangegray,
      Colors.beige,
      Colors.navy,
    ],
    tags: [Tags.남녀공용],
    category: Category.outer,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 13,
    src: "https://www.spao.com/web/product/small/202307/69ed28d1dd3893871de467498fa8590a.jpg",
    name: "베이직 퀼팅 자켓 (리버서블)_SPJAD4TC21",
    price: 69900,
    colors: [
      Colors.black,
      Colors.lightbeige,
      Colors.ivory,
      Colors.khaki,
      Colors.navy,
    ],
    tags: [Tags.남녀공용],
    category: Category.outer,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 14,
    src: "https://www.spao.com/web/product/small/202309/3325aecb8de11c5cb4ddb99b046849b7.jpg",
    name: "[키즈] (산리오캐릭터즈) 시나모롤 수면 파자마(LIGHT BLUE)_SPPPD4VKU4",
    price: 39900,
    colors: [Colors.lightbeige],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 15,
    src: "https://www.spao.com/web/product/small/202309/934329cda7ee1a02f13381351bb272be.jpg",
    name: "[키즈] (산리오캐릭터즈) 쿠로미 수면 파자마(LIGHT PURPLE)_SPPPD4VKU4",
    price: 39900,
    colors: [Colors.lightpurple],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 16,
    src: "https://www.spao.com/web/product/small/202309/b2218d9bb00436d0eb8f3308302ce88d.jpg",
    name: "[키즈] (산리오캐릭터즈) 폼폼푸린 수면 파자마(YELLOW)_SPPPD4VKU4",
    price: 39900,
    colors: [Colors.yellow],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 17,
    src: "https://www.spao.com/web/product/small/202308/c338c89d839e1d0863a60cced58694e5.jpg",
    name: "[키즈] (산리오캐릭터즈) 시나모롤 긴팔 파자마(LIGHT BLUE)_SPPPD49KU4",
    price: 39900,
    colors: [Colors.lightblue],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 18,
    src: "https://www.spao.com/web/product/small/202308/623301fb152629b291c621227a51e959.jpg",
    name: "[키즈] (산리오캐릭터즈) 마이멜로디 긴팔 파자마(LIGHT PINK)_SPPPD49KU4",
    price: 39900,
    colors: [Colors.lightpink],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 19,
    src: "https://www.spao.com/web/product/small/202308/e06dc812842bae81515ed28213bdc47c.jpg",
    name: "[키즈] (산리오캐릭터즈) 쿠로미 긴팔 파자마(LIGHT PURPLE)_SPPPD49KU4",
    price: 39900,
    colors: [Colors.lightpurple],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 20,
    src: "https://www.spao.com/web/product/small/202308/4f5685970743f3fa16a602226ed36974.jpg",
    name: "[키즈] (산리오캐릭터즈) 폼폼푸린 긴팔 파자마(YELLOW)_SPPPD49KU4",
    price: 39900,
    colors: [Colors.yellow],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 21,
    src: "https://www.spao.com/web/product/small/202309/2b35481f7b9531c8d7b986ec1c1908a6.jpg",
    name: "[키즈] (산리오캐릭터즈) 마이멜로디 수면 파자마(LIGHT PINK)_SPPPD4VKU4",
    price: 39900,
    colors: [Colors.lightpink],
    tags: [Tags.키즈],
    category: Category.sleep,
    gender: [Gender.kids],
    sale: 0,
  },
  {
    id: 22,
    src: "https://www.spao.com/web/product/small/202308/7fcd2a72fef24b5407c62d620a583e69.jpg",
    name: "(먼작귀) 먼가 작고 귀여운 긴팔 잠옷(NAVY)_SPPPD49U04",
    price: 39900,
    colors: [Colors.navy],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
  {
    id: 23,
    src: "https://www.spao.com/web/product/small/202308/504ebfad4bb380a0697aafeb8a04568b.jpg",
    name: "(포켓몬) 잠만보 포켓몬 긴팔 잠옷(GREEN)_SPPPD49U02",
    price: 39900,
    colors: [Colors.green],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },

  {
    id: 24,
    src: "https://www.spao.com/web/product/small/202308/0142daaa32acdfe778d5862708abf664.jpg",
    name: "(포켓몬) 메타몽 포켓몬 긴팔 잠옷(PURPLE)_SPPPD49U02",
    price: 39900,
    colors: [Colors.purple],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
  {
    id: 25,
    src: "https://www.spao.com/web/product/small/202308/c6d2079c163698a417a156c76f5d8129.jpg",
    name: "(잔망루피) 군싹 루피 잠옷(IVORY)_SPPPD49U03",
    price: 39900,
    colors: [Colors.ivory],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
  {
    id: 26,
    src: "https://www.spao.com/web/product/small/202308/fffde4c63ab71c2b5150ce5bc76eeaa9.jpg",
    name: "(다이노탱) 다이노탱 긴팔 잠옷(NAVY)_SPPPD49U07",
    price: 39900,
    colors: [Colors.navy],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
  {
    id: 27,
    src: "https://www.spao.com/web/product/small/202308/f0021134c2002f4a2b1a19bf53e10ef3.jpg",
    name: "(산리오캐릭터즈) 산리오캐릭터즈 긴팔 잠옷(BLACK)_SPPPD49U01",
    price: 39900,
    colors: [Colors.black],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
  {
    id: 28,
    src: "https://www.spao.com/web/product/small/202308/a7f0c66b0d65b8b4c009cc92501678a4.jpg",
    name: "(포켓몬) 피카츄 포켓몬 긴팔 잠옷(BLACK)_SPPPD49U02",
    price: 39900,
    colors: [Colors.black],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
  {
    id: 29,
    src: "https://www.spao.com/web/product/small/202308/3ebc28cdb277f0a02c1dfe042b1654b3.jpg",
    name: "(산리오캐릭터즈) 산리오캐릭터즈 긴팔 잠옷(LIGHT PINK)_SPPPD49U01",
    price: 39900,
    colors: [Colors.lightpink],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.collab],
    sale: 0,
  },
];

export const productNew: ProductObject[] = [
  {
    id: 30,
    src: "https://www.spao.com/web/product/small/202309/f38f4c0c84aa6230577369e3cb95dc1e.jpg",
    name: "바시티 크롭 자켓_SPJAD49G01",
    price: 89900,
    colors: [Colors.hunter, Colors.brown],
    tags: [Tags.여성용],
    category: Category.outer,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 31,
    src: "https://www.spao.com/web/product/small/202309/a533466962cbdb0ff5fbec3b0ac423ba.jpg",
    name: "[울블렌드] 크롭 V넥 가디건_G,W_SPCKD4TU13",
    price: 39900,
    colors: [Colors.lightblue, Colors.gray, Colors.cream, Colors.lightpurple],
    tags: [Tags.여성용],
    category: Category.outer,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 32,
    src: "https://www.spao.com/web/product/small/202309/940d9db8efb92f4436b47e394f8d26ec.jpg",
    name: "[울블렌드] 블루종_SPJJD4TM06",
    price: 99900,
    colors: [Colors.gray, Colors.brown],
    tags: [Tags.남성용],
    category: Category.outer,
    gender: [Gender.man],
    sale: 9,
  },
  {
    id: 33,
    src: "https://www.spao.com/web/product/small/202309/11fe223a6853999d1d54431aaabe9d78.jpg",
    name: "[소프트얀] 하찌 집업 가디건_SPCKD4TW12",
    price: 59900,
    colors: [Colors.ivory, Colors.navy],
    tags: [Tags.여성용],
    category: Category.outer,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 34,
    src: "https://www.spao.com/web/product/small/202309/ee99d722852ff466a525c95cbd09e654.jpg",
    name: "몰스킨 원턱 와이드 팬츠_SPTAD4TM03",
    price: 59900,
    colors: [Colors.black, Colors.cream],
    tags: [Tags.남성용],
    category: Category.bottom,
    gender: [Gender.man],
    sale: 0,
  },
  {
    id: 35,
    src: "https://www.spao.com/web/product/small/202310/0b1a80cb52701a1a8e318d1f54c617e2.jpg",
    name: "브레드걸 스웨트셔츠 (기모)_SPMWD4TG02",
    price: 39900,
    colors: [Colors.navy, Colors.cream, Colors.melangegray],
    tags: [Tags.여성용],
    category: Category.top,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 36,
    src: "https://www.spao.com/web/product/small/202309/fa1b12eb2ff4c65af15cbd84621a1de0.jpg",
    name: "플란넬 체크 셔츠_SPYCD4TG01",
    price: 39900,
    colors: [Colors.black, Colors.brown],
    tags: [Tags.여성용],
    category: Category.top,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 37,
    src: "https://www.spao.com/web/product/small/202310/a5ed6c2f3a7e3dafd7a5bae93956a78d.jpg",
    name: "[데일리지] 울라이크 미니 스커트_SPWHD4TW01",
    price: 39900,
    colors: [Colors.black, Colors.cream, Colors.lightbrown],
    tags: [Tags.여성용],
    category: Category.bottom,
    gender: [Gender.woman],
    sale: 8,
  },
  {
    id: 38,
    src: "https://www.spao.com/web/product/small/202310/61f4554ba6081a17b8addf65b49f21d3.jpg",
    name: "[레더라이크] 자켓_SPJLD4TM05",
    price: 99900,
    colors: [Colors.lightgray, Colors.black],
    tags: [Tags.남성용],
    category: Category.outer,
    gender: [Gender.man],
    sale: 9,
  },
  {
    id: 39,
    src: "https://www.spao.com/web/product/small/202310/21597f9c5577193b7af7b452f4816ef5.jpg",
    name: "라이트 블루종_SPJAD4TM03",
    price: 79900,
    colors: [Colors.black, Colors.brown],
    tags: [Tags.남성용],
    category: Category.outer,
    gender: [Gender.man],
    sale: 0,
  },
  {
    id: 40,
    src: "https://www.spao.com/web/product/small/202309/31fc4794715c0eaff62f3b22a08672bc.jpg",
    name: "[소프트얀] 모크넥 스웨터_SPKAD4VM07",
    price: 49900,
    colors: [Colors.black, Colors.ivory],
    tags: [Tags.남성용],
    category: Category.top,
    gender: [Gender.man],
    sale: 0,
  },
  {
    id: 41,
    src: "https://www.spao.com/web/product/small/202310/c2defb9652b14b457ee3fe87b8ce169b.jpg",
    name: "오버핏 MA-1 항공점퍼_SPJAD4TC02",
    price: 89900,
    colors: [Colors.gray, Colors.black],
    tags: [Tags.남성용],
    category: Category.outer,
    gender: [Gender.man],
    sale: 0,
  },
];

export const productStylePick: ProductObject[] = [
  {
    id: 42,
    src: "https://spao.com/web/product/small/202309/df5e714be03d951703c4b0a6e6ef6577.jpg",
    name: "(NEWYORK) 트랙 긴팔티_SPLWD49C91",
    price: 35900,
    colors: [Colors.white, Colors.black, Colors.powderpink],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 10,
  },
  {
    id: 43,
    src: "https://www.spao.com/web/product/small/202309/a743b3fefe42bd0f39bf0589cbbc2663.jpg",
    name: "(NEWYORK) 트랙 스웨트셔츠_SPMWD49C91",
    price: 49900,
    colors: [Colors.black, Colors.melangegray],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 10,
  },
  {
    id: 44,
    src: "https://www.spao.com/web/product/small/202309/829b8c80dd43c6ddcb7652069adcc460.jpg",
    name: "파이핑 카라넥 스웨트셔츠 (기모)_SPMWD4TC04",
    price: 49900,
    colors: [Colors.navy, Colors.lightmelangegray],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 10,
  },
  {
    id: 45,
    src: "https://www.spao.com/web/product/small/202309/049203f5d0ec140adadf4d642b3181f2.jpg",
    name: "(NEWYORK) 트랙 후드풀오버_SPMHD49C91",
    price: 59900,
    colors: [Colors.navy, Colors.melangegray],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 10,
  },
  {
    id: 46,
    src: "https://www.spao.com/web/product/small/202309/91c9a91d3b1cc504918871eb4e9ef09b.jpg",
    name: "카고 와이드 팬츠_SPTCD38G11",
    price: 49900,
    colors: [Colors.white, Colors.pink, Colors.black],
    tags: [Tags.여성용],
    category: Category.bottom,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 47,
    src: "https://www.spao.com/web/product/small/202309/94b7fa97f171d90b9b4c2804de33daa4.jpg",
    name: "(QR) 카고 와이드 데님_SPTJD38C93",
    price: 49900,
    colors: [Colors.black, Colors.vintageindigo],
    tags: [Tags.무료배송, Tags.무료반품, Tags.남성용, Tags.셋업상품],
    category: Category.bottom,
    gender: [Gender.man],
    sale: 0,
  },
  {
    id: 48,
    src: "https://www.spao.com/web/product/small/202309/839dbd584eee8807f5a67e893538999a.jpg",
    name: "(시티보이) 와이드 카고 팬츠_SPTCD49C04",
    price: 49900,
    colors: [Colors.black, Colors.khaki, Colors.darkkhaki, Colors.cream],
    tags: [Tags.남성용],
    category: Category.bottom,
    gender: [Gender.man],
    sale: 0,
  },
  {
    id: 49,
    src: "https://www.spao.com/web/product/small/202309/68c12317d86b5dbaf617299a3009fcf7.jpg",
    name: "카고 미니 스커트_SPWHD49G91",
    price: 49900,
    colors: [Colors.black, Colors.khaki],
    tags: [Tags.여성용],
    category: Category.bottom,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 50,
    src: "https://www.spao.com/web/product/small/202309/eaf3ec02019638b939c4a9d55ec24bff.jpg",
    name: "나일론 카고 롱 스커트_SPWHD38G91",
    price: 49900,
    colors: [Colors.white, Colors.black, Colors.khaki],
    tags: [Tags.여성용],
    category: Category.bottom,
    gender: [Gender.woman],
    sale: 0,
  },
  {
    id: 51,
    src: "https://www.spao.com/web/product/small/202309/7e7476d56013029a2cde9d3c1ad7b2ad.jpg",
    name: "파라슈트 와이드 팬츠_SPTCD49C05",
    price: 49900,
    colors: [Colors.black, Colors.lightbeige, Colors.brown],
    tags: [Tags.남성용],
    category: Category.bottom,
    gender: [Gender.man],
    sale: 0,
  },
];
export const productLookBook: ProductObject[] = [
  {
    id: 51,
    src: "https://spao.com/web/product/medium/202302/6d9eaf8f649ace2557e3155f3f12e373.jpg",
    name: "[레더라이크] 미니멀 집업_SPJLD12M04",
    price: 69900,
    colors: [Colors.black, Colors.cream],
    tags: [Tags.남성용],
    category: Category.outer,
    gender: [Gender.man],
    sale: 30,
  },
  {
    id: 52,
    src: "https://spao.com/web/product/medium/202306/a92dcaa97a517d373cbcfc3f23bf44c2.jpg",
    name: "[데일리지] 고밀도 코튼 오버핏 셔츠_SPYWD23W03",
    price: 39900,
    colors: [Colors.black, Colors.cream],
    tags: [Tags.여성용],
    category: Category.top,
    gender: [Gender.woman],
    sale: 50,
  },
  {
    id: 53,
    src: "https://spao.com/web/product/medium/202302/75bfd96f1662d6f09e175d9c1247fb9b.jpg",
    name: "(잔망루피) 군싹 루피 잠옷(PINK)_SPPPD23U02",
    price: 39900,
    colors: [Colors.pink],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.woman, Gender.man],
    sale: 25,
  },
  {
    id: 54,
    src: "https://spao.com/web/product/medium/202302/e5cd5564fa6719766c5669eaa205d358.jpg",
    name: "(최고심) 행복만땅 고심이 잠옷(MINT)_SPPPD23U01",
    price: 39900,
    colors: [Colors.mint],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.woman, Gender.man],
    sale: 50,
  },
  {
    id: 55,
    src: "https://spao.com/web/product/medium/202301/9cadc311a79e42308fb34880657adb90.jpg",
    name: "(시티보이) 와이드 치노 팬츠_SPTCD23C0",
    price: 49900,
    colors: [
      Colors.black,
      Colors.beige,
      Colors.ivory,
      Colors.khaki,
      Colors.navy,
    ],
    tags: [Tags.남녀공용],
    category: Category.bottom,
    gender: [Gender.woman, Gender.man],
    sale: 50,
  },
  {
    id: 56,
    src: "https://spao.com/web/product/medium/202301/1dd08dd6df479965a0c400ea509f9a2a.jpg",
    name: "(우디) 자수 케이블 베스트_SPKVD12C04",
    price: 39900,
    colors: [
      Colors.gray,
      Colors.ivory,
      Colors.green,
      Colors.navy,
      Colors.black,
    ],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 25,
  },
  {
    id: 57,
    src: "https://spao.com/web/product/medium/202301/21e65053131fdcfa5654f0d5979da3f1.jpg",
    name: "(시티보이) 유니 오버핏 데님 셔츠_SPYJD23C01",
    price: 49900,
    colors: [Colors.darkgray, Colors.lightindigo, Colors.navy],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 58,
    src: "https://spao.com/web/product/medium/202303/43f8f22e8d18ad622969bb7ed2c6222b.jpg",
    name: "데님 트러커_SPJED23C01",
    price: 69900,
    colors: [
      Colors.darkgray,
      Colors.black,
      Colors.indigo,
      Colors.navy,
      Colors.cream,
    ],
    tags: [Tags.남성용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 59,
    src: "https://spao.com/web/product/medium/202301/eed5e59e7d33ee72c7374feb726e8cf9.jpg",
    name: "(달빛천사) 풀문이 뜰 때 만나요 잠옷(PINK)_SPPPD23U07",
    price: 39900,
    colors: [Colors.pink],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.woman, Gender.man],
    sale: 25,
  },
  {
    id: 60,
    src: "https://spao.com/web/product/medium/202301/12535cfa5e3b38ba8344801d514d6f39.jpg",
    name: "(달빛천사) 풀문이 뜰 때 만나요 잠옷(LIGHT PURPLE)_SPPPD23U07",
    price: 39900,
    colors: [Colors.lightpurple],
    tags: [Tags.남녀공용],
    category: Category.sleep,
    gender: [Gender.woman, Gender.man],
    sale: 25,
  },
  {
    id: 61,
    src: "https://spao.com/web/product/medium/202307/10051546e7e198c57f2a2164c635ea47.jpg",
    name: "MONTAUK 자수 스웨트 셔츠 (기모)_SPMWD11C03",
    price: 39900,
    colors: [
      Colors.black,
      Colors.lightblue,
      Colors.navy,
      Colors.hunter,
      Colors.melangegray,
    ],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 0,
  },
  {
    id: 62,
    src: "https://spao.com/web/product/medium/202211/a48781e212356871a1f0d2a19fbfcc7d.jpg",
    name: "[프렌치테리] 베이직 스웨트셔츠 (기모)_SPMWD11U01",
    price: 29900,
    colors: [
      Colors.black,
      Colors.lightpink,
      Colors.yellow,
      Colors.oatmealmelange,
      Colors.ivory,
      Colors.gray,
      Colors.lightmelangegray,
    ],
    tags: [Tags.남녀공용],
    category: Category.top,
    gender: [Gender.woman, Gender.man],
    sale: 47,
  },
];