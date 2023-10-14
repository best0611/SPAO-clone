export interface ProductObject {
  id: number;
  src: string;
  name: string;
  price: number;
  colors: Colors[];
  tags: Tags[];
  category: Category;
  gender: Gender[];
  sale: number;
}

export enum Gender {
  woman, //0
  man, //1
  kids, //2
  pajama, //3
  collab, //4
}
export enum Category {
  outer,
  top,
  bottom,
  sleep,
}
export enum Tags {
  무료배송 = "https://spao.com/web/upload/custom_5016781455248588.gif",
  무료반품 = "https://spao.com/web/upload/custom_5116781455316990.gif",
  여성용 = "https://spao.com/web/upload/custom_3416602592314723.png",
  남성용 = "https://spao.com/web/upload/custom_3316602592315525.png",
  키즈 = "https://spao.com/web/upload/custom_5416844681337849.png",
  남녀공용 = "https://spao.com/web/upload/custom_2716394483974526.gif",
  셋업상품 = "https://spao.com/web/upload/custom_4616765045247493.png",
}
export enum Colors {
  beige = "#D9D2B0",
  black = "#000000",
  brown = "#8D5C33",
  camel = "#9D6B24",
  cream = "#F7F8CF",
  darkgray = "#8B8D8C",
  darkindigo = "#012244",
  darkkhaki = "#4F5405",
  darkmelangegray = "#747373",
  gray = "#B8BAB9",
  green = "#00863E",
  hunter = "#00765A",
  indigo = "#01185D",
  ivory = "#FFFEF7",
  khaki = "#747C05",
  lightbeige = "#F5F5DC",
  lightblue = "#A8D2E8",
  lightbrown = "#B77F4F",
  lightgray = "#E0E0E0",
  lightindigo = "#05286C",
  lightmelangegray = "#DBD9D9",
  lightpink = "#FCDEF4",
  lightpurple = "#C7A1CC",
  melangegray = "#BCBBBB",
  mint = "#E2F7F0",
  navy = "#03175E",
  oatmealmelange = "#EECF96",
  pink = "#E36C9D",
  powderblue = "#C6D3E6",
  powderpink = "#E7DDDE",
  purple = "#782482",
  vanillacream = "#EEDFC0",
  vintageindigo = "#546471",
  white = "#FFFFFF",
  yellow = "#F0E601",
}
