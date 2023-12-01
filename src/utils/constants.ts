import { cjyf } from "./cjyf";
import { xsw } from "./xsw";
import { tzgj } from "./tzgj";
import { sjgj1, sjgj2, sjgj3 } from "./sjgj";
import { zdhy } from "./zdhy";

export const estateNameMap: any = {
  cjyf: "昌建誉峰",
  tzgj: "天中国际",
  zdhy: "置地花园",
  // sjgj1: "顺景国际-11.25",
  // sjgj2: "顺景国际-11.27",
  sjgj3: "顺景国际-12.1",
  xsw: "香水湾",
};

export const estates: any = {
  cjyf,
  tzgj,
  zdhy,
  // sjgj1,
  // sjgj2,
  sjgj3,
  xsw,
};

// 市政府周边地图可视区域, 在售小区、参数
export const visibleMapData = {
  visibleCount: 1409,
  totalCount: 7260,
  hideCount: false,
  bubbleList: [
    {
      fullSpell: "c8872131201378880",
      desc: "0.68万(118套)",
      count: 118,
      countStr: "118套",
      countUnit: "套",
      price: "6815",
      priceStr: "0.68万",
      priceUnit: "元",
      border: "114.002147,33.020991;114.002057,33.020241;114.003323,33.02009;114.003108,33.020991",
      bubbleDesc: "西班牙小镇二期",
      icon: "",
      entityId: "8872131201378880",
      entityType: "resblock",
      id: 8872131201378880,
      name: "西班牙小镇二期",
      longitude: 114.001266,
      latitude: 33.023518,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131201378995",
      desc: "0.73万(92套)",
      count: 92,
      countStr: "92套",
      countUnit: "套",
      price: "7341",
      priceStr: "0.73万",
      priceUnit: "元",
      border: "114.008938,33.018251;114.005524,33.01819;114.005704,33.01925;114.00865,33.019129",
      bubbleDesc: "天中上境I期",
      icon: "",
      entityId: "8872131201378995",
      entityType: "resblock",
      id: 8872131201378995,
      name: "天中上境I期",
      longitude: 114.006625,
      latitude: 33.01844,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131184606331",
      desc: "0.63万(91套)",
      count: 91,
      countStr: "91套",
      countUnit: "套",
      price: "6321",
      priceStr: "0.63万",
      priceUnit: "元",
      border: "114.018693,33.019015;114.018981,33.016624;114.020822,33.017297;114.020858,33.019378;114.02084,33.01956;114.020795,33.019235",
      bubbleDesc: "香水湾",
      icon: "",
      entityId: "8872131184606331",
      entityType: "resblock",
      id: 8872131184606331,
      name: "香水湾",
      longitude: 114.019912,
      latitude: 33.01803,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145314117964",
      desc: "0.77万(84套)",
      count: 84,
      countStr: "84套",
      countUnit: "套",
      price: "7731",
      priceStr: "0.77万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "CBD爱克首府...",
      icon: "",
      entityId: "8872145314117964",
      entityType: "resblock",
      id: 8872145314117964,
      name: "CBD爱克首府B区",
      longitude: 114.0375684371,
      latitude: 33.01096449295,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131201382303",
      desc: "0.75万(82套)",
      count: 82,
      countStr: "82套",
      countUnit: "套",
      price: "7469",
      priceStr: "0.75万",
      priceUnit: "元",
      border: "113.999735,33.016109;113.999744,33.015008;113.999712,33.014099;114.000629,33.014084;114.000579,33.014747;114.001163,33.014697;114.00119,33.014338;114.000759,33.014364;114.000786,33.01427;114.001657,33.014152;114.001648,33.013922;113.999717,33.014001;113.99978,33.013532;113.999991,33.01329;114.00362,33.013309;114.003678,33.01637;114.000022,33.016275",
      bubbleDesc: "明珠港湾",
      icon: "",
      entityId: "8872131201382303",
      entityType: "resblock",
      id: 8872131201382303,
      name: "明珠港湾",
      longitude: 114.001786,
      latitude: 33.014946,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131179371250",
      desc: "0.86万(81套)",
      count: 81,
      countStr: "81套",
      countUnit: "套",
      price: "8611",
      priceStr: "0.86万",
      priceUnit: "元",
      border: "114.031449,33.012506;114.031827,33.009524;114.033857,33.009857;114.033318,33.012567",
      bubbleDesc: "东申凤凰城",
      icon: "",
      entityId: "8872131179371250",
      entityType: "resblock",
      id: 8872131179371250,
      name: "东申凤凰城",
      longitude: 114.032543,
      latitude: 33.011282,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131249610982",
      desc: "0.72万(57套)",
      count: 57,
      countStr: "57套",
      countUnit: "套",
      price: "7182",
      priceStr: "0.72万",
      priceUnit: "元",
      border: "114.008453,33.025728;114.008704,33.023791;114.015711,33.023912;114.015478,33.025895",
      bubbleDesc: "置地天中第一城...",
      icon: "",
      entityId: "8872131249610982",
      entityType: "resblock",
      id: 8872131249610982,
      name: "置地天中第一城西苑",
      longitude: 114.012713,
      latitude: 33.024984,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131181465167",
      desc: "1万(56套)",
      count: 56,
      countStr: "56套",
      countUnit: "套",
      price: "10372",
      priceStr: "1万",
      priceUnit: "元",
      border: "114.029841,33.012506;114.029859,33.011098;114.031557,33.011121;114.031288,33.012484",
      bubbleDesc: "爱家·会展国际...",
      icon: "",
      entityId: "8872131181465167",
      entityType: "resblock",
      id: 8872131181465167,
      name: "爱家·会展国际公寓",
      longitude: 114.030694,
      latitude: 33.011803,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145264832712",
      desc: "0.73万(54套)",
      count: 54,
      countStr: "54套",
      countUnit: "套",
      price: "7291",
      priceStr: "0.73万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "置地第一大街",
      icon: "",
      entityId: "8872145264832712",
      entityType: "resblock",
      id: 8872145264832712,
      name: "置地第一大街",
      longitude: 114.01967656731,
      latitude: 33.024656689771,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131174122432",
      desc: "0.54万(49套)",
      count: 49,
      countStr: "49套",
      countUnit: "套",
      price: "5416",
      priceStr: "0.54万",
      priceUnit: "元",
      border: "114.01837,33.011045;114.019511,33.010546;114.018837,33.009418;114.017463,33.009978",
      bubbleDesc: "天都名园",
      icon: "",
      entityId: "8872131174122432",
      entityType: "resblock",
      id: 8872131174122432,
      name: "天都名园",
      longitude: 114.018604,
      latitude: 33.010297,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131177275792",
      desc: "0.76万(49套)",
      count: 49,
      countStr: "49套",
      countUnit: "套",
      price: "7592",
      priceStr: "0.76万",
      priceUnit: "元",
      border: "114.023293,33.014482;114.023661,33.01268;114.026033,33.012642;114.025871,33.014588",
      bubbleDesc: "天中豪园",
      icon: "",
      entityId: "8872131177275792",
      entityType: "resblock",
      id: 8872131177275792,
      name: "天中豪园",
      longitude: 114.024647,
      latitude: 33.013563,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872164644632583",
      desc: "0.53万(40套)",
      count: 40,
      countStr: "40套",
      countUnit: "套",
      price: "5311",
      priceStr: "0.53万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "天地惠城东区",
      icon: "",
      entityId: "8872164644632583",
      entityType: "resblock",
      id: 8872164644632583,
      name: "天地惠城东区",
      longitude: 114.03299,
      latitude: 33.025601,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131203477619",
      desc: "0.62万(34套)",
      count: 34,
      countStr: "34套",
      countUnit: "套",
      price: "6227",
      priceStr: "0.62万",
      priceUnit: "元",
      border: "114.00044,33.008131;114.001338,33.007306;114.00185,33.007329;114.001338,33.011348;114.000224,33.011325",
      bubbleDesc: "新天地未来城",
      icon: "",
      entityId: "8872131203477619",
      entityType: "resblock",
      id: 8872131203477619,
      name: "新天地未来城",
      longitude: 114.001123,
      latitude: 33.009191,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131176236150",
      desc: "0.7万(31套)",
      count: 31,
      countStr: "31套",
      countUnit: "套",
      price: "7049",
      priceStr: "0.7万",
      priceUnit: "元",
      border: "114.01581,33.023889;114.020742,33.023987;114.02049,33.025872;114.015576,33.025895",
      bubbleDesc: "置地·天中第一...",
      icon: "",
      entityId: "8872131176236150",
      entityType: "resblock",
      id: 8872131176236150,
      name: "置地·天中第一城",
      longitude: 114.018035,
      latitude: 33.024916,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131178324384",
      desc: "0.78万(31套)",
      count: 31,
      countStr: "31套",
      countUnit: "套",
      price: "7784",
      priceStr: "0.78万",
      priceUnit: "元",
      border: "114.021568,33.016162;114.021739,33.014573;114.023823,33.014701;114.023922,33.016767",
      bubbleDesc: "置地百盛园",
      icon: "",
      entityId: "8872131178324384",
      entityType: "resblock",
      id: 8872131178324384,
      name: "置地百盛园",
      longitude: 114.022848,
      latitude: 33.015561,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131205645667",
      desc: "0.96万(29套)",
      count: 29,
      countStr: "29套",
      countUnit: "套",
      price: "9580",
      priceStr: "0.96万",
      priceUnit: "元",
      border: "114.02376,33.012385;114.023904,33.007405;114.025521,33.007496;114.026078,33.012325",
      bubbleDesc: "通达小区",
      icon: "",
      entityId: "8872131205645667",
      entityType: "resblock",
      id: 8872131205645667,
      name: "通达小区",
      longitude: 114.024749,
      latitude: 33.010239,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131182511066",
      desc: "0.58万(28套)",
      count: 28,
      countStr: "28套",
      countUnit: "套",
      price: "5786",
      priceStr: "0.58万",
      priceUnit: "元",
      border: "114.018199,33.023639;114.018217,33.023185;114.019538,33.023178;114.01934,33.023685",
      bubbleDesc: "锦桂苑",
      icon: "",
      entityId: "8872131182511066",
      entityType: "resblock",
      id: 8872131182511066,
      name: "锦桂苑",
      longitude: 114.018523,
      latitude: 33.023534,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131200373785",
      desc: "0.79万(27套)",
      count: 27,
      countStr: "27套",
      countUnit: "套",
      price: "7857",
      priceStr: "0.79万",
      priceUnit: "元",
      border: "114.021999,33.010345;114.023441,33.010387;114.023728,33.007465;114.022516,33.007469;114.022228,33.007666",
      bubbleDesc: "翡翠城翡苑",
      icon: "",
      entityId: "8872131200373785",
      entityType: "resblock",
      id: 8872131200373785,
      name: "翡翠城翡苑",
      longitude: 114.022803,
      latitude: 33.008911,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131205569779",
      desc: "0.86万(27套)",
      count: 27,
      countStr: "27套",
      countUnit: "套",
      price: "8588",
      priceStr: "0.86万",
      priceUnit: "元",
      border: "114.000754,33.014546;114.000786,33.014459;114.000938,33.01444;114.000911,33.014588",
      bubbleDesc: "西湖庄园",
      icon: "",
      entityId: "8872131205569779",
      entityType: "resblock",
      id: 8872131205569779,
      name: "西湖庄园",
      longitude: 113.99950831232,
      latitude: 33.01025302042,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131250664856",
      desc: "0.53万(27套)",
      count: 27,
      countStr: "27套",
      countUnit: "套",
      price: "5336",
      priceStr: "0.53万",
      priceUnit: "元",
      border: "114.034315,33.025732;114.036372,33.025694;114.036475,33.025577;114.036583,33.024725;114.03458,33.024729;114.034427,33.024812;114.034207,33.025577",
      bubbleDesc: "金河绿城小区",
      icon: "",
      entityId: "8872131250664856",
      entityType: "resblock",
      id: 8872131250664856,
      name: "金河绿城小区",
      longitude: 114.035315,
      latitude: 33.025221,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131252757206",
      desc: "0.55万(26套)",
      count: 26,
      countStr: "26套",
      countUnit: "套",
      price: "5479",
      priceStr: "0.55万",
      priceUnit: "元",
      border: "114.029832,33.023844;114.034602,33.02373;114.034045,33.025758;114.029015,33.025773",
      bubbleDesc: "天地惠城西区",
      icon: "",
      entityId: "8872131252757206",
      entityType: "resblock",
      id: 8872131252757206,
      name: "天地惠城西区",
      longitude: 114.031794,
      latitude: 33.02479,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131179367603",
      desc: "0.61万(25套)",
      count: 25,
      countStr: "25套",
      countUnit: "套",
      price: "6132",
      priceStr: "0.61万",
      priceUnit: "元",
      border: "114.022511,33.022935;114.022628,33.0218;114.024766,33.021815;114.025808,33.02177;114.025808,33.023473;114.023949,33.023079",
      bubbleDesc: "天基·城中心花...",
      icon: "",
      entityId: "8872131179367603",
      entityType: "resblock",
      id: 8872131179367603,
      name: "天基·城中心花园",
      longitude: 114.024062,
      latitude: 33.022598,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131198234947",
      desc: "0.59万(24套)",
      count: 24,
      countStr: "24套",
      countUnit: "套",
      price: "5862",
      priceStr: "0.59万",
      priceUnit: "元",
      border: "114.020274,33.021755;114.020131,33.023178;114.018505,33.023163;114.018424,33.021709",
      bubbleDesc: "弘佳花园",
      icon: "",
      entityId: "8872131198234947",
      entityType: "resblock",
      id: 8872131198234947,
      name: "弘佳花园",
      longitude: 114.019317,
      latitude: 33.02242,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131206617301",
      desc: "0.64万(24套)",
      count: 24,
      countStr: "24套",
      countUnit: "套",
      price: "6441",
      priceStr: "0.64万",
      priceUnit: "元",
      border: "113.997655,33.014463;113.997669,33.013698;113.999411,33.013774;113.999272,33.01466",
      bubbleDesc: "春江铭都",
      icon: "",
      entityId: "8872131206617301",
      entityType: "resblock",
      id: 8872131206617301,
      name: "春江铭都",
      longitude: 113.998373,
      latitude: 33.014127,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131132165627",
      desc: "0.9万(20套)",
      count: 20,
      countStr: "20套",
      countUnit: "套",
      price: "9000",
      priceStr: "0.9万",
      priceUnit: "元",
      border: "114.035492,33.010107;114.038744,33.010576;114.039103,33.007412;114.036139,33.007473",
      bubbleDesc: "CBD爱克·首...",
      icon: "",
      entityId: "8872131132165627",
      entityType: "resblock",
      id: 8872131132165627,
      name: "CBD爱克·首府",
      longitude: 114.037094,
      latitude: 33.009711,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131197227411",
      desc: "0.79万(19套)",
      count: 19,
      countStr: "19套",
      countUnit: "套",
      price: "7872",
      priceStr: "0.79万",
      priceUnit: "元",
      border: "114.022008,33.01044;114.023441,33.010455;114.023306,33.012113;114.021986,33.012086;114.021855,33.01195",
      bubbleDesc: "翡翠城翠苑",
      icon: "",
      entityId: "8872131197227411",
      entityType: "resblock",
      id: 8872131197227411,
      name: "翡翠城翠苑",
      longitude: 114.022633,
      latitude: 33.011315,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131172041818",
      desc: "0.62万(18套)",
      count: 18,
      countStr: "18套",
      countUnit: "套",
      price: "6190",
      priceStr: "0.62万",
      priceUnit: "元",
      border: "114.013366,33.0232;114.013483,33.022005;114.014705,33.022027;114.014247,33.023125",
      bubbleDesc: "名人名家住宅小...",
      icon: "",
      entityId: "8872131172041818",
      entityType: "resblock",
      id: 8872131172041818,
      name: "名人名家住宅小区",
      longitude: 114.013968,
      latitude: 33.022628,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131196180642",
      desc: "0.82万(18套)",
      count: 18,
      countStr: "18套",
      countUnit: "套",
      price: "8150",
      priceStr: "0.82万",
      priceUnit: "元",
      border: "114.026095,33.010046;114.026792,33.010035;114.026949,33.010977;114.026212,33.011004",
      bubbleDesc: "欣悦苑",
      icon: "",
      entityId: "8872131196180642",
      entityType: "resblock",
      id: 8872131196180642,
      name: "欣悦苑",
      longitude: 114.026707,
      latitude: 33.010582,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131175178000",
      desc: "0.56万(16套)",
      count: 16,
      countStr: "16套",
      countUnit: "套",
      price: "5620",
      priceStr: "0.56万",
      priceUnit: "元",
      border: "114.022763,33.020847;114.023877,33.020801;114.024164,33.021467;114.023086,33.021074",
      bubbleDesc: "物华领馆",
      icon: "",
      entityId: "8872131175178000",
      entityType: "resblock",
      id: 8872131175178000,
      name: "物华领馆",
      longitude: 114.023786,
      latitude: 33.020896,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131184608973",
      desc: "0.57万(15套)",
      count: 15,
      countStr: "15套",
      countUnit: "套",
      price: "5722",
      priceStr: "0.57万",
      priceUnit: "元",
      border: "114.020185,33.015715;114.020292,33.014436;114.021029,33.014497;114.020822,33.015859",
      bubbleDesc: "玫瑰苑",
      icon: "",
      entityId: "8872131184608973",
      entityType: "resblock",
      id: 8872131184608973,
      name: "玫瑰苑",
      longitude: 114.020589,
      latitude: 33.015144,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131176233849",
      desc: "0.54万(14套)",
      count: 14,
      countStr: "14套",
      countUnit: "套",
      price: "5410",
      priceStr: "0.54万",
      priceUnit: "元",
      border: "114.016169,33.021202;114.016591,33.019772;114.020598,33.019795;114.020418,33.021278",
      bubbleDesc: "警苑小区",
      icon: "",
      entityId: "8872131176233849",
      entityType: "resblock",
      id: 8872131176233849,
      name: "警苑小区",
      longitude: 114.018427,
      latitude: 33.020677,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872148835745344",
      desc: "0.51万(14套)",
      count: 14,
      countStr: "14套",
      countUnit: "套",
      price: "5140",
      priceStr: "0.51万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "学府大厦",
      icon: "",
      entityId: "8872148835745344",
      entityType: "resblock",
      id: 8872148835745344,
      name: "学府大厦",
      longitude: 114.01945844824,
      latitude: 33.010572707734,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131172037874",
      desc: "0.62万(13套)",
      count: 13,
      countStr: "13套",
      countUnit: "套",
      price: "6152",
      priceStr: "0.62万",
      priceUnit: "元",
      border: "114.011759,33.023624;114.011776,33.021581;114.013645,33.021672;114.013411,33.023836",
      bubbleDesc: "天平花苑",
      icon: "",
      entityId: "8872131172037874",
      entityType: "resblock",
      id: 8872131172037874,
      name: "天平花苑",
      longitude: 114.012688,
      latitude: 33.022706,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145392751320",
      desc: "0.57万(13套)",
      count: 13,
      countStr: "13套",
      countUnit: "套",
      price: "5725",
      priceStr: "0.57万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "正和园",
      icon: "",
      entityId: "8872145392751320",
      entityType: "resblock",
      id: 8872145392751320,
      name: "正和园",
      longitude: 114.03621825657,
      latitude: 33.021288255949,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145110674232",
      desc: "0.6万(10套)",
      count: 10,
      countStr: "10套",
      countUnit: "套",
      price: "5969",
      priceStr: "0.6万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "盘古小区",
      icon: "",
      entityId: "8872145110674232",
      entityType: "resblock",
      id: 8872145110674232,
      name: "盘古小区",
      longitude: 114.02791169544,
      latitude: 33.023227952091,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131176217936",
      desc: "0.51万(8套)",
      count: 8,
      countStr: "8套",
      countUnit: "套",
      price: "5110",
      priceStr: "0.51万",
      priceUnit: "元",
      border: "114.019987,33.014361;114.0212,33.014383;114.021388,33.012453;114.020499,33.011424",
      bubbleDesc: "御锦花园",
      icon: "",
      entityId: "8872131176217936",
      entityType: "resblock",
      id: 8872131176217936,
      name: "御锦花园",
      longitude: 114.020744,
      latitude: 33.012845,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145842632433",
      desc: "0.66万(8套)",
      count: 8,
      countStr: "8套",
      countUnit: "套",
      price: "6644",
      priceStr: "0.66万",
      priceUnit: "元",
      border: "",
      bubbleDesc: "新世达·上和郡",
      icon: "",
      entityId: "8872145842632433",
      entityType: "resblock",
      id: 8872145842632433,
      name: "新世达·上和郡",
      longitude: 114.005864,
      latitude: 33.023195,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131182511117",
      desc: "0.59万(7套)",
      count: 7,
      countStr: "7套",
      countUnit: "套",
      price: "5913",
      priceStr: "0.59万",
      priceUnit: "元",
      border: "114.014588,33.02177;114.015603,33.02177;114.015433,33.02376;114.014552,33.023806",
      bubbleDesc: "经纬花园",
      icon: "",
      entityId: "8872131182511117",
      entityType: "resblock",
      id: 8872131182511117,
      name: "经纬花园",
      longitude: 114.015077,
      latitude: 33.022886,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c88720000017844",
      desc: "0.6万(6套)",
      count: 6,
      countStr: "6套",
      countUnit: "套",
      price: "6011",
      priceStr: "0.6万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "华隆国际",
      icon: "",
      entityId: "88720000017844",
      entityType: "resblock",
      id: 88720000017844,
      name: "华隆国际",
      longitude: 114.02260036787,
      latitude: 33.021905914873,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131175175042",
      desc: "0.63万(4套)",
      count: 4,
      countStr: "4套",
      countUnit: "套",
      price: "6251",
      priceStr: "0.63万",
      priceUnit: "元",
      border: "114.021087,33.010864;114.021528,33.010909;114.021631,33.008389;114.021168,33.008381",
      bubbleDesc: "新世达小区",
      icon: "",
      entityId: "8872131175175042",
      entityType: "resblock",
      id: 8872131175175042,
      name: "新世达小区",
      longitude: 114.02129,
      latitude: 33.009634,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131178322694",
      desc: "0.62万(4套)",
      count: 4,
      countStr: "4套",
      countUnit: "套",
      price: "6211",
      priceStr: "0.62万",
      priceUnit: "元",
      border: "114.021537,33.024313;114.02159,33.023825;114.021954,33.023847;114.021851,33.02429",
      bubbleDesc: "置地·清河苑",
      icon: "",
      entityId: "8872131178322694",
      entityType: "resblock",
      id: 8872131178322694,
      name: "置地·清河苑",
      longitude: 114.02159,
      latitude: 33.024091,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131176228804",
      desc: "0.54万(3套)",
      count: 3,
      countStr: "3套",
      countUnit: "套",
      price: "5398",
      priceStr: "0.54万",
      priceUnit: "元",
      border: "114.033138,33.01545;114.033839,33.015556;114.034396,33.014179;114.033264,33.013997",
      bubbleDesc: "海云世纪城",
      icon: "",
      entityId: "8872131176228804",
      entityType: "resblock",
      id: 8872131176228804,
      name: "海云世纪城",
      longitude: 114.033676,
      latitude: 33.014826,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131179369999",
      desc: "0.56万(3套)",
      count: 3,
      countStr: "3套",
      countUnit: "套",
      price: "5622",
      priceStr: "0.56万",
      priceUnit: "元",
      border: "114.021047,33.023624;114.022655,33.023639;114.022727,33.023034;114.020831,33.022928",
      bubbleDesc: "市畜牧局家属院",
      icon: "",
      entityId: "8872131179369999",
      entityType: "resblock",
      id: 8872131179369999,
      name: "市畜牧局家属院",
      longitude: 114.021972,
      latitude: 33.023408,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145142136004",
      desc: "0.54万(2套)",
      count: 2,
      countStr: "2套",
      countUnit: "套",
      price: "5429",
      priceStr: "0.54万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "水利小区",
      icon: "",
      entityId: "8872145142136004",
      entityType: "resblock",
      id: 8872145142136004,
      name: "水利小区",
      longitude: 114.0314928521,
      latitude: 33.023254466792,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145164171717",
      desc: "0.76万(2套)",
      count: 2,
      countStr: "2套",
      countUnit: "套",
      price: "7607",
      priceStr: "0.76万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "置地阳光花园",
      icon: "",
      entityId: "8872145164171717",
      entityType: "resblock",
      id: 8872145164171717,
      name: "置地阳光花园",
      longitude: 114.01133343579,
      latitude: 33.022783499747,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872145166250711",
      desc: "(2套)",
      count: 2,
      countStr: "2套",
      countUnit: "套",
      price: "0",
      priceStr: "",
      priceUnit: "元",
      border: null,
      bubbleDesc: "爱克大厦",
      icon: "",
      entityId: "8872145166250711",
      entityType: "resblock",
      id: 8872145166250711,
      name: "爱克大厦",
      longitude: 114.03463313575,
      latitude: 33.010830680147,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131178319306",
      desc: "0.72万(1套)",
      count: 1,
      countStr: "1套",
      countUnit: "套",
      price: "7210",
      priceStr: "0.72万",
      priceUnit: "元",
      border: "114.036237,33.013369;114.036228,33.014974;114.038088,33.015503;114.03825,33.01343",
      bubbleDesc: "方圆小区",
      icon: "",
      entityId: "8872131178319306",
      entityType: "resblock",
      id: 8872131178319306,
      name: "方圆小区",
      longitude: 114.037405,
      latitude: 33.013919,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872131217102612",
      desc: "0.72万(1套)",
      count: 1,
      countStr: "1套",
      countUnit: "套",
      price: "7153",
      priceStr: "0.72万",
      priceUnit: "元",
      border: "114.014413,33.023847;114.013398,33.023847;114.013447,33.023333;114.014444,33.023371",
      bubbleDesc: "置地天都小区",
      icon: "",
      entityId: "8872131217102612",
      entityType: "resblock",
      id: 8872131217102612,
      name: "置地天都小区",
      longitude: 114.013786,
      latitude: 33.023671,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872142610205531",
      desc: "0.78万(1套)",
      count: 1,
      countStr: "1套",
      countUnit: "套",
      price: "7784",
      priceStr: "0.78万",
      priceUnit: "元",
      border: "",
      bubbleDesc: "泰禾尚善雅居",
      icon: "",
      entityId: "8872142610205531",
      entityType: "resblock",
      id: 8872142610205531,
      name: "泰禾尚善雅居",
      longitude: 114.034654,
      latitude: 33.016681,
      imageType: 30002,
      selected: false,
    },
    {
      fullSpell: "c8872158093729155",
      desc: "0.69万(1套)",
      count: 1,
      countStr: "1套",
      countUnit: "套",
      price: "6856",
      priceStr: "0.69万",
      priceUnit: "元",
      border: null,
      bubbleDesc: "锦秀·贵源",
      icon: "",
      entityId: "8872158093729155",
      entityType: "resblock",
      id: 8872158093729155,
      name: "锦秀·贵源",
      longitude: 114.036481,
      latitude: 33.023477,
      imageType: 30002,
      selected: false,
    },
  ],
  border: "",
  topRichText: '可视区域内为您找到<span style="color:#3072f6">7260</span>套房子',
};
