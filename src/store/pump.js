import helixImg from '@/assets/helix.png'
import multiImg from '@/assets/multi.png'
import functionalImg from '@/assets/functional.png'
import compactImg from '@/assets/compact.png'
import penImg from '@/assets/pen.png'

const pumpList = [
  {
    id : 1,
    title : "친환경 펌프",
    engTitle : "ECO HELIX PUMP",
    category : "helix",
    main : true,
    img : helixImg,
    description : 
    `단한가지의 원료 -폴리프로필렌(PP) 재활용제품 PCR원료로도제작 가능 부드러운 펌핑 \n
    다양한 제품으로 사용 가능 (세럼,에센스,로션,젤,바디워시,샴푸) \n
    높은 점도 제품 사용 가능 (크림,젤) \n
    ISTA-6인증 \n
    특허 등록완료 \n
    세계적인 친환경화에 적합한 솔루션` 
  },
   ...Array.from({ length: 9 }).map((_, i) => ({
    id: 2 + i,
    title: `헬릭스 펌프 ${i + 2}`,
    engTitle: `HELIX PUMP ${i + 2}`,
    category: "helix",
    img: helixImg,
    main: false,
    description: "재활용 가능한 친환경 헬릭스 펌프"
  })),

  // ================= MULTI =================
  {
    id: 11,
    title: "멀티 펌프",
    engTitle: "MULTI PUMP",
    category: "multi",
    img: multiImg,
    main: true,
    description: "다양한 용기에 적용 가능한 멀티 펌프"
  },
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: 12 + i,
    title: `멀티 펌프 ${i + 2}`,
    engTitle: `MULTI PUMP ${i + 2}`,
    category: "multi",
    img: multiImg,
    main: false,
    description: "다양한 용기에 적용 가능한 멀티 펌프"
  })),

  // ================= FUNCTIONAL =================
  {
    id: 21,
    title: "기능성 펌프",
    engTitle: "FUNCTIONAL PUMP",
    category: "functional",
    img: functionalImg,
    main: true,
    description: "정량 토출이 가능한 기능성 펌프"
  },
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: 22 + i,
    title: `기능성 펌프 ${i + 2}`,
    engTitle: `FUNCTIONAL PUMP ${i + 2}`,
    category: "functional",
    img: functionalImg,
    main: false,
    description: "정량 토출이 가능한 기능성 펌프"
  })),

  // ================= COMPACT =================
  {
    id: 31,
    title: "콤팩트",
    engTitle: "COMPACT",
    category: "compact",
    img: compactImg,
    main: true,
    description: "소형 용기에 최적화된 콤팩트 펌프"
  },
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: 32 + i,
    title: `콤팩트 ${i + 2}`,
    engTitle: `COMPACT${i + 2}`,
    category: "compact",
    img: compactImg,
    main: false,
    description: "소형 용기에 최적화된 콤팩트 펌프"
  })),

  // ================= PEN =================
  {
    id: 41,
    title: "펜",
    engTitle: "PEN",
    category: "pen",
    img: penImg,
    main: true,
    description: "정밀 도포가 가능한 펜 타입 펌프"
  },
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: 42 + i,
    title: `펜${i + 2}`,
    engTitle: `PEN${i + 2}`,
    category: "pen",
    img: penImg,
    main: false,
    description: "정밀 도포가 가능한 펜 타입 펌프"
  })),
];

export default pumpList;