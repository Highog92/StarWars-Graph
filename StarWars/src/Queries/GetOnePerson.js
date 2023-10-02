export const getOnePerson = `query Person($personId: ID) {
    person(id: $personId) {
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
    }
  }`