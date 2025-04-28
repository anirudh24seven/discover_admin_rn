
type Club = {
  club_name: string
  club_number: string
  club_strength: number
  area: Area
  division: Division
  district: District
}

type Area = {
  area_name: string
  area_director: string
  division: Division
  district: District
}

type Division = {
  division_name: string
  division_director: string
  district: District
}

type District = {
  district_number: number
}

const district120: District = { district_number: 120, }

const divisionA: Division = { division_name: "A", division_director: "Nagarajan M", district: district120 }
const divisionB: Division = { division_name: "B", division_director: "Chidambaran M", district: district120 }
const divisionC: Division = { division_name: "C", division_director: "Rinosha Basha", district: district120 }
const divisionD: Division = { division_name: "D", division_director: "Annapoorani A", district: district120 }
const divisionE: Division = { division_name: "E", division_director: "Aishwarya I.N", district: district120 }
const divisionF: Division = { division_name: "F", division_director: "Anirudh B", district: district120 }
const divisionG: Division = { division_name: "G", division_director: "Teena Parthasarathy", district: district120 }
const divisionH: Division = { division_name: "H", division_director: "Yalini Kumaraguru", district: district120 }
const divisionI: Division = { division_name: "I", division_director: "Priyang A", district: district120 }

const areaA1: Area = { area_name: "A1", area_director: "Krupa Ranjani R", division: divisionA }
const areaA2: Area = { area_name: "A2", area_director: "Audhi Kesavan C S", division: divisionA }
const areaA3: Area = { area_name: "A3", area_director: "Sai Chandar K", division: divisionA }
const areaA4: Area = { area_name: "A4", area_director: "Aishwarya R", division: divisionA }
const areaA5: Area = { area_name: "A5", area_director: "Mohamed I A", division: divisionA }

const areaB1: Area = { area_name: "B1", area_director: "Ramakrishnan S", division: divisionB }
const areaB2: Area = { area_name: "B2", area_director: "Natarajan D", division: divisionB }
const areaB3: Area = { area_name: "B3", area_director: "Arumugam S", division: divisionB }
const areaB4: Area = { area_name: "B4", area_director: "R. D. Suruthi", division: divisionB }
const areaB5: Area = { area_name: "B5", area_director: "Hari Priya R", division: divisionB }

const areaC1: Area = { area_name: "C1", area_director: "Tathagatha Dey", division: divisionC
const areaC2: Area = { area_name: "C2", area_director: "Mahendra Nadh", division: divisionC }
const areaC3: Area = { area_name: "C3", area_director: "Prasanna Vani V", division: divisionC }
const areaC4: Area = { area_name: "C4", area_director: "Kandavadivelu V", division: divisionC }
const areaC5: Area = { area_name: "C5", area_director: "Shivasubramaniam", division: divisionC }

const areaD1: Area = { area_name: "D1", area_director: "Bilal Shariff H", division: divisionD }
const areaD2: Area = { area_name: "D2", area_director: "Nadhiya B", division: divisionD }
const areaD3: Area = { area_name: "D3", area_director: "Chaitanya Kumar V S M R", division: divisionD }
const areaD4: Area = { area_name: "D4", area_director: "Sudhiksha Menon", division: divisionD }

const areaE1: Area = { area_name: "E1", area_director: "Deepak Dixit", division: divisionE }
const areaE2: Area = { area_name: "E2", area_director: "Vinothini V", division: divisionE }
const areaE3: Area = { area_name: "E3", area_director: "Praseetha M", division: divisionE }
const areaE4: Area = { area_name: "E4", area_director: "Sriram Thiyagarajam", division: divisionE }
const areaE5: Area = { area_name: "E5", area_director: "Kalpana Athi", division: divisionE }

const areaF1: Area = { area_name: "F1", area_director: "Jesher Joshua M", division: divisionF }
const areaF2: Area = { area_name: "F2", area_director: "Vinoth Varadharajan", division: divisionF }
const areaF3: Area = { area_name: "F3", area_director: "Akshayaa M", division: divisionF }
const areaF4: Area = { area_name: "F4", area_director: "Venkataseshan V", division: divisionF }
const areaF5: Area = { area_name: "F5", area_director: "Pattu Rajan G", division: divisionF }

const areaG1: Area = { area_name: "G1", area_director: "Ashwini R", division: divisionG }
const areaG2: Area = { area_name: "G2", area_director: "Siva S Nainar B", division: divisionG }
const areaG3: Area = { area_name: "G3", area_director: "Jagadeesh U", division: divisionG }
const areaG4: Area = { area_name: "G4", area_director: "Aneesh Valiya P", division: divisionG }
const areaG5: Area = { area_name: "G5", area_director: "Renuga Bharath", division: divisionG }

const areaH1: Area = { area_name: "H1", area_director: "Kavitha A", division: divisionH }
const areaH2: Area = { area_name: "H2", area_director: "Elangovan Selvaraj", division: divisionH }
const areaH3: Area = { area_name: "H3", area_director: "Sridevi Srinivasan", division: divisionH }
const areaH4: Area = { area_name: "H4", area_director: "Karkuvel Raja K", division: divisionH }
const areaH5: Area = { area_name: "H5", area_director: "Vivekanandan K", division: divisionH }

const areaI1: Area = { area_name: "I1", area_director: "Jaganathan M", division: divisionI }
const areaI2: Area = { area_name: "I2", area_director: "Parvathi S V", division: divisionI }
const areaI3: Area = { area_name: "I3", area_director: "Naveenkumar D", division: divisionI }
const areaI4: Area = { area_name: "I4", area_director: "Natarajan R", division: divisionI }
const areaI5: Area = { area_name: "I5", area_director: "Ashok Kumar K", division: divisionI }

const clubs: Club[] = [
  { club_name: "Rising Pillars Toastmasters Club", club_number: "04309638", club_strength: 31, area: areaA1 }
  { club_name: "Mphasis Chennai Toastmasters Club", club_number: "", club_strength: 1, area: areaA1 }
  { club_name: "", club_number: "", club_strength: 1, area: areaA1 }
  { club_name: "", club_number: "", club_strength: 1, area: areaA1 }
  { club_name: "", club_number: "", club_strength: 1, area: areaA1 }
  { club_name: "", club_number: "", club_strength: 1, area: areaA1 }
]
