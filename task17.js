// Parent class: School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    // Getters
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Setter for numberOfStudents
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    // Method: quickFacts
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
  
    // Static Method: pickSubstituteTeacher
    static pickSubstituteTeacher(substituteTeachers) {
      const index = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[index];
    }
  }
  
  // Child class: PrimarySchool
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // Child class: MiddleSchool (no additional properties)
  class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  }
  
  // Child class: HighSchool
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // ➤ Creating instances and calling methods
  
  // PrimarySchool instance
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  lorraineHansbury.quickFacts();
  
  // Static method call
  console.log(
    'Substitute Teacher:',
    School.pickSubstituteTeacher([
      'Jamal Crawford',
      'Lou Williams',
      'J. R. Smith',
      'James Harden',
      'Jason Terry',
      'Manu Ginobli',
    ])
  );
  
  // HighSchool instance
  const alSmith = new HighSchool('Al E. Smith', 415, [
    'Baseball',
    'Basketball',
    'Volleyball',
    'Track and Field',
  ]);
  
  console.log('Sports Teams:', alSmith.sportsTeams.join(', '));
  