interface modalObject {
  imgs: string[];
  contents: string[];
  related: number[];
}
export interface megazineObject {
  id: number;
  src: string;
  title?: string;
  subtitle?: string;
  hashtag?: string[];
  page?: string;
  modal?: modalObject;
}

export const trendpickArr: megazineObject[] = [
  {
    id: 1,
    src: "https://spao.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b54bd22408c5e69afdab0e66d3f05490.webp",
    page: "https://spao.com/showcase04.html",
    title: "COOL TECH",
    subtitle: "기분 좋은 쾌적한 일상, 쿨테크",
  },
  {
    id: 2,
    src: "https://spao.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/8c902d31ea1268491c2dadbb6debce42.webp",
    page: "https://spao.com/fam_showcase.html",
    title: "2023 SPAO DENIM CAMPAIGN",
    subtitle: "가벼운 청바지가 주는 시원한 자유로움",
  },
  {
    id: 3,
    src: "https://spao.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/65055da17028cbb3fbb4bdbb874049c1.webp",
    page: "https://spao.com/product/project.html?cate_no=3193",
    title: "T.P.O STYLE GUIDE",
    subtitle: "윈드 브레이커 스타일링 가이드",
  },
];
export const lookbookArr: megazineObject[] = [
  {
    id: 1,
    src: "https://www.spao.com/web/product/big/202302/82733eae8c6b05765141b87cf069e448.jpg",
    title: "MOOD OF MINIMAL",
    subtitle: "차분함과 간결함으로 채운 미니멀룩",
    modal: {
      imgs: [
        "https://spao.com/web/product/extra/big/202302/4a83be1f656004da17f7433c5ff907e7.jpg",
        "https://spao.com/web/product/extra/big/202302/19f54371c70cd6d830c638bc32535223.jpg",
        "https://spao.com/web/product/extra/big/202302/6fe0ec7218aa974d94ebfc22fb822e2f.jpg",
        "https://spao.com/web/product/extra/big/202302/3a7d026b6895f50a4c1c4b2a55ccbec0.jpg",
      ],
      contents: [
        "불필요한 디테일을 비워낸 단순한 실루엣의 레더자켓",
        "섬세한 소재로 고급스러움을 드러내는 셔츠, 부드러운 무게감의 미니멀룩을 연출해 보세요",
      ],
      related: [51, 52],
    },
  },
  {
    id: 2,
    src: "https://www.spao.com/web/product/big/202302/96bc92abd267e001dc57e39922b72dfa.jpg",
    title: "PAJAMA OLYMPIAD",
    subtitle: "집안에서 펼쳐지는 파자마 올림피아드!",
    modal: {
      imgs: [
        "https://spao.com/web/product/extra/big/202302/7b27683ed940b4f0fe3e49024b46d2b1.jpg",
        "https://spao.com/web/product/extra/big/202302/04541f38d84c860950ad0c345112fda4.jpg",
        "https://spao.com/web/product/extra/big/202302/a98638da77743d77359643ce88528a2c.jpg",
      ],
      contents: [
        "심심할 틈이 없다. 집안에서 펼쳐지는 올림피아드!",
        "스파오 파자마를 입고 친구들과 즐거운 주말을 맞이해보세요.",
      ],
      related: [53, 54],
    },
  },
  {
    id: 3,
    src: "https://www.spao.com/web/product/big/202302/afe6bd58fd2e294c3078af6dab92347e.jpg",
    title: "WALK IN THE CAMPUS",
    subtitle: "캠퍼스에서 펼쳐지는 아메리칸 캐주얼 무드",
    modal: {
      imgs: [
        "https://spao.com/web/product/extra/big/202302/978655f88a01c38cdecdd2a2ed64e71f.jpg",
        "https://spao.com/web/product/extra/big/202302/846a60627e464cb668815ab6626a8fd7.jpg",
        "https://spao.com/web/product/extra/big/202302/2c04e13488d6f316c0aaad2dbadb0362.jpg",
      ],
      contents: [
        "헤리티지를 담은 우드 스웨트 셋업과",
        "클래한 옥스포드 셔츠로 실용적이고 편안한",
        "캠퍼스룩을 완성하세요",
      ],
      related: [55, 56],
    },
  },
  {
    id: 4,
    src: "https://www.spao.com/web/product/big/202301/f3710d0d595c3f3799aba9ba890ef6a7.jpg",
    title: "CITYBOY LOVES DENIM",
    subtitle: "도시의 청춘을 위한 데님 컬렉션",
    modal: {
      imgs: [
        "https://spao.com/web/product/extra/big/202301/fdeaca05fb1f0ac4ab1e48f6d39c0d57.jpg",
        "https://spao.com/web/product/extra/big/202301/543617e57b9128ef0775bc50ccd559bd.jpg",
        "https://spao.com/web/product/extra/big/202301/3b15269f5d1158f09ac55fc88d914242.jpg",
      ],
      contents: [
        "스타일의 중심을 잡아주는 필수 아이템 데님을",
        "시티보이 룩의 편안하고 여유로운 시선으로 변주하여",
        "트렌디하고 세련된 실루엣으로 재탄생시킨 컬렉션입니다.",
      ],
      related: [57, 58],
    },
  },
  {
    id: 5,
    src: "https://www.spao.com/web/product/big/202301/e68e5e998c447da5c805a7228b4bb2c9.jpg",
    title: "스파오 X 달빛천사",
    subtitle: "영원한 아이돌 풀문의 18년만의 귀환",
    modal: {
      imgs: [
        "https://spao.com/web/product/extra/big/202301/034ecf28183d0f452bfd11c34c731c49.jpg",
        "https://spao.com/web/product/extra/big/202301/e72c7114a0461b366e6030d44de84cc5.jpg",
        "https://spao.com/web/product/extra/big/202301/604fa1dc4f37709aa08dae86c6ea6446.jpg",
      ],
      contents: [
        "어린 시절 함께 했던 우리들의 달빛천사를 선물합니다.",
        "그 시절 우리 루나와 함께 어린 시절 추억 여행 GO!",
      ],
      related: [59, 60],
    },
  },
  {
    id: 6,
    src: "https://www.spao.com/web/product/big/202301/71366fa0edefd0c0a8c8ce8f6b199212.jpg",
    title: "WARM BREEZE SWEATER",
    subtitle: "코트와 일상에서 선명히 빛나는 테니스 플레이어 룩",
    modal: {
      imgs: [
        "https://spao.com/web/product/extra/big/202301/66c7a777f1e65f3b745d318d6bfc7cf9.jpg",
        "https://spao.com/web/product/extra/big/202301/d41c36a9de561864b567d79d5e55539c.jpg",
        "https://spao.com/web/product/extra/big/202301/b7d84953ce1f4c681f19de59ae4939fe.jpg",
      ],
      contents: [
        "일상과 스포츠를 자유롭게 오가는 스웨트 룩과 함께 해보세요.",
        "명예와 에너지를 상징하는 로열블루 컬러가 새로운 결심에 힘을 불어넣어 줍니다.",
      ],
      related: [61, 62],
    },
  },
];
export const snapArr: megazineObject[] = [
  {
    id: 1,
    src: "https://spao.com/web/product/small/202310/8ea0d994d0dc92df1f62049cd8c86eed.png",
    page: "https://spao.com/product/detail_snap.html?product_no=12526&cate_no=1&display_group=13",
    hashtag: ["2023", "남자", "캐주얼룩"],
  },
  {
    id: 2,
    src: "https://spao.com/web/product/small/202310/d11d394bc07b7f74867351a225f1f605.png",
    page: "https://spao.com/product/detail_snap.html?product_no=12525&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
  {
    id: 3,
    src: "https://spao.com/web/product/small/202310/7666cf58a77bf6db1d68cd01b83eaed2.png",
    page: "https://spao.com/product/detail_snap.html?product_no=12524&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
  {
    id: 4,
    src: "https://spao.com/web/product/small/202310/01d699be36f6a6eab9a02317369c6f4b.png",
    page: "https://spao.com/product/detail_snap.html?product_no=12523&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
  {
    id: 5,
    src: "https://spao.com/web/product/small/202310/da38e4cfe454a2a2992c7de0183f9da8.png",
    page: "https://spao.com/product/detail_snap.html?product_no=12522&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
  {
    id: 6,
    src: "https://spao.com/web/product/small/202310/a14941868a2f11e26e34ce2cfe96074d.jpg",
    page: "https://spao.com/product/detail_snap.html?product_no=12481&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
  {
    id: 7,
    src: "https://spao.com/web/product/small/202310/fabdf8527d74a30e4bc57a8d3fe91c26.jpg",
    page: "https://spao.com/product/detail_snap.html?product_no=12480&cate_no=1&display_group=13",
    hashtag: ["2023", "남자", "캐주얼룩"],
  },
  {
    id: 8,
    src: "https://spao.com/web/product/small/202310/0cf0724563f135c350136def620d45d9.jpg",
    page: "https://spao.com/product/detail_snap.html?product_no=12479&cate_no=1&display_group=13",
    hashtag: ["2023", "남자", "캐주얼룩"],
  },
  {
    id: 9,
    src: "https://spao.com/web/product/small/202310/15c0d560a3ca2b3c1f78f8e5496c2020.jpg",
    page: "https://spao.com/product/detail_snap.html?product_no=12478&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
  {
    id: 10,
    src: "https://spao.com/web/product/small/202310/59a995ac482a66880ca9bc35c88ef8c2.jpg",
    page: "https://spao.com/product/detail_snap.html?product_no=12477&cate_no=1&display_group=13",
    hashtag: ["2023", "여자", "캐주얼룩"],
  },
];
